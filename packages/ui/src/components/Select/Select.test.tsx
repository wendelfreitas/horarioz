import { fireEvent, render, screen } from '@testing-library/react';

import { Select } from './Select';

const pokemons = [
  { value: '1', label: 'Blaziken' },
  { value: '2', label: 'Tyranitar' },
  { value: '3', label: 'Raichu' },
  { value: '4', label: 'Salamance' },
  { value: '5', label: 'Alakazam' },
  { value: '6', label: 'Mewtwo (Are you kidding me right?)', disabled: true },
];

describe('<Select />', () => {
  it('should render component successfully', () => {
    render(
      <Select
        type="autocomplete"
        label="Select pokemons"
        placeholder="Select the best pokemon"
        defaultValue="1"
        options={pokemons}
      />
    );
    const text = screen.getByText('Select pokemons');

    expect(text).toBeInTheDocument();
  });

  it('should type a text and find the specific option', () => {
    render(
      <Select
        type="autocomplete"
        label="Select pokemons"
        placeholder="Select the best pokemon"
        defaultValue="1"
        options={pokemons}
      />
    );
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Tyranitar' } });

    expect(screen.getByText('Tyranitar')).toBeInTheDocument();
  });

  it('should select an option on listbox', () => {
    render(
      <Select
        label="Select pokemons"
        placeholder="Select the best pokemon"
        defaultValue="1"
        options={pokemons}
      />
    );
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Tyranitar' } });

    expect(screen.getByText('Tyranitar')).toBeInTheDocument();
  });

  it('should render an helper text', () => {
    render(
      <Select
        label="Select pokemons"
        placeholder="Select the best pokemon"
        defaultValue="1"
        helper="Helper text"
        options={pokemons}
      />
    );

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should type a text and no find any option', () => {
    render(
      <Select
        type="autocomplete"
        label="Select pokemons"
        placeholder="Select the best pokemon"
        defaultValue="1"
        options={pokemons}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, {
      target: { value: 'THE BEST POKEMON IS BLAZIKEN ALWAYS' },
    });

    expect(screen.getByText('No options.')).toBeInTheDocument();
  });

  it('should render a list of options', () => {
    render(
      <Select
        type="autocomplete"
        label="Select pokemons"
        placeholder="Select the best pokemon"
        options={pokemons}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, {
      target: { value: 'A' },
    });

    expect(screen.getByText('Salamance')).toBeInTheDocument();
    expect(screen.getByText('Alakazam')).toBeInTheDocument();
  });

  it('should render an * if required is true', async () => {
    render(
      <Select
        label="Select pokemons"
        type="autocomplete"
        placeholder="Select the best pokemon"
        required
        options={pokemons}
      />
    );

    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
