import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Portfolio/i);
  expect(headerElements.length).toBeGreaterThan(0);
});

test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Hello, I'm/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByRole('heading', { name: /About Me/i });
  expect(aboutElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsElement = screen.getByRole('heading', { name: /My Skills/i });
  expect(skillsElement).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsElement = screen.getByRole('heading', { name: /My Projects/i });
  expect(projectsElement).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactElements = screen.getAllByText(/Get In Touch/i);
  expect(contactElements.length).toBeGreaterThan(0);
});
