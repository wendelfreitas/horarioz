import { renderWrapper } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { CurrencyField } from './CurrencyField';

describe('<CurrencyField />', () => {
  it('should renders component successfully', () => {
    renderWrapper(
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={jest.fn()}
      >
        <Form>
          <CurrencyField name="currency" label="Price" />
        </Form>
      </Formik>
    );
    const text = screen.getByPlaceholderText('$');

    expect(text).toBeInTheDocument();
  });

  it('should renders currency field with custom placeholder', () => {
    renderWrapper(
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={jest.fn()}
      >
        <Form>
          <CurrencyField name="currency" label="Price" placeholder="Hello" />
        </Form>
      </Formik>
    );
    const text = screen.getByPlaceholderText('Hello');

    expect(text).toBeInTheDocument();
  });
});
