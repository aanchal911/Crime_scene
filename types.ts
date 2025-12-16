export interface Clue {
  id: number;
  title: string;
  description: string;
  type: 'text' | 'image' | 'riddle';
  content?: string; // URL for image or extra text
  question: string;
  correctAnswer: string[]; // Array to allow multiple valid formats (e.g. "Library", "The Library")
  nextClueId?: number;
  isFinal?: boolean;
}

export interface TeamConfig {
  id: string;
  username: string;
  password: string; // Plaintext for demo purposes as requested
  name: string;
  clueSequence: Clue[];
}

export type ViewState = 'landing' | 'guidelines' | 'login' | 'game' | 'victory';

export interface GameState {
  currentView: ViewState;
  teamId: string | null;
  currentClueIndex: number;
}
