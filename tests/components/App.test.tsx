import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('should render the component', () => {
    render(<App />);

    expect(screen.getByText('Hello from Radix Themes :)')).toBeInTheDocument();
  });
});
