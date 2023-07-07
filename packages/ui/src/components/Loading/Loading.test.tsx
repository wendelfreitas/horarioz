import { render } from '@testing-library/react';

import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should renders component successfully', () => {
    const result = render(<Loading />);
    const loading = result.container.querySelector('#lottie');

    expect(loading).toBeInTheDocument();
  });
});
