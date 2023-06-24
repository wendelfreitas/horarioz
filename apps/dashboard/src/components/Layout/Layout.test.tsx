import { screen } from '@testing-library/react';
import { renderWrapper } from '@/utils/tests/helpers';
import { Layout } from './Layout';
import 'intersection-observer';

describe('<Layout />', () => {
  it('renders component with content', () => {
    renderWrapper(<Layout>Hello Content</Layout>);
    const text = screen.getByText('Hello Content');

    expect(text).toBeInTheDocument();
  });

  // it('renders component with slide over', () => {
  //   renderWrapper(<Layout />);
  //   const text = screen.getByText('Hello Slide Over');

  //   expect(text).toBeInTheDocument();
  // });
});
