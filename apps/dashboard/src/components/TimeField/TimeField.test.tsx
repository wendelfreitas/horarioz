import { renderWrapper } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { TimeField } from './TimeField';

describe('<TimeField />', () => {
  it('should renders component successfully', () => {
    renderWrapper(
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={jest.fn()}
      >
        <Form>
          <TimeField bigger placeholder="HH:MM" name="duration" />
        </Form>
      </Formik>
    );
    const text = screen.getByPlaceholderText('HH:MM');

    expect(text).toBeInTheDocument();
  });
});
