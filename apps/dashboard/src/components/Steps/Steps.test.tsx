import { screen, fireEvent } from '@testing-library/react';
import { renderWrapper } from '@utils/tests/helpers';
import { Steps } from './Steps';

jest.mock('@lottiefiles/react-lottie-player');

describe('<Steps />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('should render the steps component on welcome step', () => {
    renderWrapper(<Steps />);
    expect(screen.getByText(/Welcome to Horarioz/)).toBeInTheDocument();
  });

  it('should click on start button and go to the next slide', async () => {
    renderWrapper(<Steps />);
    const button = screen.getByText('Start');

    await fireEvent.click(button);

    expect(screen.getByText(/What's your full name?/)).toBeInTheDocument();
  });

  it('should click on back button and go to the previous slide', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    const back = screen.getByText('Back');

    await fireEvent.click(back);

    expect(screen.getByText(/Welcome to Horarioz/)).toBeInTheDocument();
  });

  it('should press esc key go to the previous slide', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Escape', code: 27, charCode: 27 });

    expect(screen.getByText(/Welcome to Horarioz/)).toBeInTheDocument();
  });

  it('should fill input press enter key and go to the next slide', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: {
        value: 'Wendel Freitas',
      },
    });

    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(screen.getByText(/phone number/)).toBeInTheDocument();
  });

  it('should fill input press enter key and not change the slide', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(screen.getByText(/What's your full name?/)).toBeInTheDocument();
  });

  it('should fill input press continue button and go to the next slide', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: {
        value: 'Wendel Freitas',
      },
    });

    fireEvent.click(screen.getByText('Continue'));

    expect(screen.getByText(/phone number/)).toBeInTheDocument();
  });

  it('should pass through the entire flow', async () => {
    renderWrapper(<Steps />);
    const start = screen.getByText('Start');

    await fireEvent.click(start);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Wendel Freitas',
      },
    });

    fireEvent.click(screen.getByText('Continue'));

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: '14999999999',
      },
    });

    fireEvent.click(screen.getByText('Continue'));

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Acme',
      },
    });

    fireEvent.click(screen.getByText('Continue'));

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'acme',
      },
    });

    fireEvent.click(screen.getByText('Continue'));

    expect(screen.getByText(/You're done!/)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Save and go to my dashboard'));

    expect(screen.getByText(/Welcome to Horarioz/)).toBeInTheDocument();
  });
});
