import React from 'react';
import { Poll } from './Poll';
import { pollQuestion } from '../types';

interface PollWidgetProps {
  polls: pollQuestion[];
}

export const PollWidget: React.FC<PollWidgetProps> = ({ polls }) => {
  const renderedPollIds = new Set<string>();

  return (
    <div className="space-y-8">
      {polls.map((poll) => {
        if (renderedPollIds.has(poll.id)) {
          return null;
        }
        renderedPollIds.add(poll.id);
        return <Poll key={poll.id} poll={poll} />;
      })}
    </div>
  );
};