import { TeamConfig, Clue } from './types';

// --- CLUE SET A (For Team A) ---
const CLUES_A: Clue[] = [
  {
    id: 1,
    title: "The First Thread",
    description: "The investigation begins where knowledge gathers dust. Silence is mandatory, but the secrets scream loud.",
    type: 'riddle',
    question: "Where am I?",
    correctAnswer: ["library", "nuv library", "the library"],
    content: "I have spines but no bones. I have leaves but no tree. I have a tongue but cannot speak.",
  },
  {
    id: 2,
    title: "Cold Case",
    description: "Go to the place where students gather to fuel their minds, not with books, but with caffeine.",
    type: 'text',
    question: "What is the secret code found under the table?",
    correctAnswer: ["delta99", "delta 99", "delta-99"],
  },
  {
    id: 3,
    title: "The Verdict",
    description: "The final judgment awaits at the steps of justice.",
    type: 'text',
    question: "Who is the suspect named in the final note?",
    correctAnswer: ["professor plum", "plum"],
    isFinal: true
  }
];

// --- CLUE SET B (For Team B) ---
const CLUES_B: Clue[] = [
  {
    id: 1,
    title: "Shadows at Play",
    description: "Your journey starts where the sun is blocked, but the games never end.",
    type: 'riddle',
    question: "Identify the location.",
    correctAnswer: ["sports complex", "gym", "indoor stadium"],
    content: "I have a court but no judge. I have a basket but no groceries.",
  },
  {
    id: 2,
    title: "Broken Transmission",
    description: "Find the red pillar near the amphitheater.",
    type: 'text',
    question: "What year is inscribed on the base?",
    correctAnswer: ["2009"],
  },
  {
    id: 3,
    title: "The Verdict",
    description: "The final judgment awaits at the steps of justice.",
    type: 'text',
    question: "Who is the suspect named in the final note?",
    correctAnswer: ["colonel mustard", "mustard"],
    isFinal: true
  }
];

// --- TEAMS CONFIGURATION ---
export const TEAMS: Record<string, TeamConfig> = {
  teamA: {
    id: 'teamA',
    username: 'teamA',
    password: '123',
    name: 'Team A',
    clueSequence: CLUES_A
  },
  teamB: {
    id: 'teamB',
    username: 'teamB',
    password: '456',
    name: 'Team B',
    clueSequence: CLUES_B
  }
};
