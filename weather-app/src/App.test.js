import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test to verify that the "learn react" link is rendered in the App component.
 * 
 * This test uses the React Testing Library to render the App component and checks if
 * an element containing the text "learn react" is present in the document.
 */
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Find an element with the text "learn react" using a regular expression for case-insensitive matching
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
