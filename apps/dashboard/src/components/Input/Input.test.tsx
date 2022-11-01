import { screen, render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { Input } from './Input';

describe('<Input />', () => {
  it('renders component successfully', () => {
    render(
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={jest.fn()}
      >
        <Form>
          <Input label="Nome completo" name="email" />
        </Form>
      </Formik>
    );

    const text = screen.getByText('Nome completo');

    expect(text).toBeInTheDocument();
  });
});
