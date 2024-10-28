export const saveVote = (pollId: string, optionId: string): void => {
  const currentVotes = JSON.parse(localStorage.getItem(`poll_${pollId}`) || '{}');
  currentVotes[optionId] = (currentVotes[optionId] || 0) + 1;
  localStorage.setItem(`poll_${pollId}`, JSON.stringify(currentVotes));
};

export const getVotes = (pollId: string): Record<string, number> => {
  return JSON.parse(localStorage.getItem(`poll_${pollId}`) || '{}');
};