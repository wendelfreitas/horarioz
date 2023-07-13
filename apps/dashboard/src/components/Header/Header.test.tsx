import { AuthContext } from '@horarioz/hooks';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders component successfully', () => {
    render(
      <AuthContext.Provider
        value={{
          user: null,
          company: null,
          studio: null,
          isLoading: false,
          profile: {
            id: '1',
            phone: 'wendel@gmail.com',
            name: 'Wendel Freitas',
            photo: 'hey',
            created_at: Date.now().toString(),
            updated_at: Date.now().toString(),
          },
        }}
      >
        <Header />
      </AuthContext.Provider>
    );
    const text = screen.getByText('Wendel');

    expect(text).toBeInTheDocument();
  });
});
