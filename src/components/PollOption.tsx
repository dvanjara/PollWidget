import React from 'react';
import { motion } from 'framer-motion';

interface PollOptionProps {
  id: string;
  text: string;
  votes: number;
  totalVotes: number;
  selected: boolean;
  onVote: (optionId: string) => void;
}

export const PollOption: React.FC<PollOptionProps> = ({
  id,
  text,
  votes,
  totalVotes,
  selected,
  onVote,
}) => {
  const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;

  return (
    <motion.div
      className="mb-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        onClick={() => onVote(id)}
        className={`w-full p-4 rounded-lg transition-colors ${
          selected ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
        }`}
        disabled={selected}
      >
        <div className="flex justify-between items-center">
          <span>{text}</span>
          {selected && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-2"
            >
              {percentage}%
            </motion.span>
          )}
        </div>
        {selected && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className="h-2 bg-blue-300 mt-2 rounded"
          />
        )}
      </button>
    </motion.div>
  );
};