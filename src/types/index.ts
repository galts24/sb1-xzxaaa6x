export interface UserData {
  name: string;
  businessName: string;
  productService: string;
}

export interface Objection {
  id: string;
  text: string;
  response: string;
}

export interface PracticeSession {
  id: string;
  timestamp: Date;
  transcript: Array<{
    role: 'user' | 'assistant';
    text: string;
  }>;
  feedback: string;
}