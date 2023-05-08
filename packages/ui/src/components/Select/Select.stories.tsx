import { StoryFn, Meta } from '@storybook/react';

import { SelectProps, Select } from './Select';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const pokemons = [
  { value: '1', label: 'Blaziken' },
  { value: '2', label: 'Tyranitar' },
  { value: '3', label: 'Raichu' },
  { value: '4', label: 'Salamance' },
  { value: '5', label: 'Alakazam' },
  { value: '6', label: 'Mewtwo (Are you kidding me right?)', disabled: true },
];

export const Default: StoryFn<SelectProps> = () => (
  <Select
    label="Select the best pokemon"
    placeholder="Select the best pokemon"
    options={pokemons}
    helper="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure tempore beatae? Dolor earum similique enim inventore labore voluptatibus odit, saepe eos excepturi at sit voluptates. Labore molestias blanditiis sint?"
  />
);

export const Autocomplete: StoryFn<SelectProps> = () => (
  <Select
    type="autocomplete"
    label="Select pokemons"
    placeholder="Select the best pokemon"
    // defaultValue="1"
    options={pokemons}
  />
);
