export interface pollOption {
  id: string;
  text: string;
  votes: number;
}

export interface pollQuestion {
  id: string;
  question: string;
  options: pollOption[];
}