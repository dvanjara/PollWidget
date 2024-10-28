import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Poll } from '../Poll';

const mockPoll = {
  id: 'test-poll',
  question: 'Test Question',
  options: [
    { id: '1', text: 'Option 1', votes: 0 },
    { id: '2', text: 'Option 2', votes: 0 },
  ],
};

describe('Poll', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders poll question and options', () => {
    render(<Poll poll={mockPoll} />);
    expect(screen.getByText('Test Question')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('handles voting', () => {
    render(<Poll poll={mockPoll} />);
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.getByText('Total votes: 1')).toBeInTheDocument();
  });

  it('shows percentage after voting', () => {
    render(<Poll poll={mockPoll} />);
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});