import React, { useState, useEffect } from 'react';
import { pollOption, pollQuestion } from '../types';
import { saveVote, getVotes } from '../utils/storage';
import { PollOption } from './PollOption';

interface PollProps {
  poll: pollQuestion;
}

export const Poll: React.FC<PollProps> = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedVotes = getVotes(poll.id);
    setVotes(savedVotes);
  }, [poll.id]);

  const handleVote = (optionId: string) => {
    if (selectedOption) return;
    
    saveVote(poll.id, optionId);
    setSelectedOption(optionId);
    const newVotes = getVotes(poll.id);
    setVotes(newVotes);
  };

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-xl font-bold mb-4">{poll.question}</h2>
      <div>
        {poll.options.map((option: pollOption) => (
          <PollOption
            key={option.id}
            id={option.id}
            text={option.text}
            votes={votes[option.id] || 0}
            totalVotes={totalVotes}
            selected={selectedOption !== null}
            onVote={handleVote}
          />
        ))}
      </div>
      {selectedOption && (
        <p className="text-sm text-gray-500 mt-4">
          Total votes: {totalVotes}
        </p>
      )}
    </div>
  );
};