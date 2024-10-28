import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PollOption } from '../PollOption';

describe('PollOption', () => {
  const mockOnVote = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders option text correctly', () => {
    render(
      <PollOption
        id="1"
        text="Test Option"
        votes={0}
        totalVotes={0}
        selected={false}
        onVote={mockOnVote}
      />
    );
    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  it('calls onVote when clicked', () => {
    render(
      <PollOption
        id="1"
        text="Test Option"
        votes={0}
        totalVotes={0}
        selected={false}
        onVote={mockOnVote}
      />
    );
    fireEvent.click(screen.getByText('Test Option'));
    expect(mockOnVote).toHaveBeenCalledWith('1');
  });
});