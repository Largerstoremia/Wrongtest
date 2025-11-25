
export type Subject = '数学' | '语文' | '英语';

export interface Question {
  id: string;
  subject: Subject;
  question: string;
  answer: string;
  knowledgePoint: string;
}

export type ViewMode = 'browse' | 'random';
