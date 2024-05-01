import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

describe('When using App', () => {
  const wrapper = () => render(<App />)

  it('should render App component', () => {
    expect(App).toBeDefined()
  })

})
