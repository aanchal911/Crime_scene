import { TeamConfig, Clue } from './types';

// --- COMMON FINAL CLUE (CLUE 6) ---
const COMMON_FINAL_CLUE: Clue = {
  id: 6,
  title: "THE FINAL KILLER’S POSITION",
  description: "The trail does not end inside a room. It ends where silence looks peaceful. Water was expected, but sand tells the real story. Seven levels above the ground, near a room marked with numbers, the truth waits outside, not within. Go to A Block. Reach the seventh floor.",
  type: 'text',
  question: "What is the answer hidden at the top?",
  correctAnswer: ["a701"],
  isFinal: true
};

// --- TEAM 1 SEQUENCE ---
const CLUES_1: Clue[] = [
  {
    id: 1,
    title: "Clue 1: Library",
    description: "They didn’t take everything with them. Something was placed where eyes rarely go, above what students carry, near where silence begins. Look higher than habit allows.",
    type: 'text',
    question: "Enter the password found at the Library:",
    correctAnswer: ["silence"],
  },
  {
    id: 2,
    title: "Clue 2: The Moment They Were Seen",
    description: "The victim didn’t rush anymore. Something forced them to slow down. They crossed a line meant to control speed, and realised they were no longer alone. A round eye watched from the side, showing paths that aren’t meant to be trusted. Go where movement is reduced, and reflection replaces reality.",
    type: 'text',
    question: "Enter the password found at the Convex Mirror:",
    correctAnswer: ["reflection"],
  },
  {
    id: 3,
    title: "Clue 3: Amphitheater",
    description: "The victim didn’t choose a room this time. They chose a place meant for many—open, loud, impossible to ignore. But they didn’t stay in the centre. They moved to the edges, where structures stand close enough to watch, yet far enough to remain unnoticed.",
    type: 'text',
    question: "Enter the password found at the Amphitheater:",
    correctAnswer: ["edge"],
  },
  {
    id: 4,
    title: "Clue 4: 5th Floor SLSE",
    description: "Before power, there was labour. Before systems, there were tools. That night, the victim paused at something old, crafted to work the land, not to decorate halls. It stands on the ground floor, made of wood, displayed, not used. Find the tool that fed generations.",
    type: 'text',
    question: "Enter the password found at 5th Floor SLSE:",
    correctAnswer: ["legacy"],
  },
  {
    id: 5,
    title: "Clue 5: Beneath Support",
    description: "The victim didn’t choose a room this time. They chose a pause. What held their weight was once alive. It creaks when ignored. It weathers the sun better than steel. Nothing important was left where eyes rest. The answer stayed beneath support.",
    type: 'text',
    question: "Enter the password found beneath the benches beside Block B:",
    correctAnswer: ["beneath"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 2 SEQUENCE ---
const CLUES_2: Clue[] = [
  {
    id: 1,
    title: "Clue 1: Sports Room",
    description: "Not every move happens on the table. Some happen before the game even begins. The victim paused where players rush past, hands ready, minds elsewhere. Before you step in to play, check what waits just out of sight.",
    type: 'text',
    question: "Enter the password found at the Sports Room:",
    correctAnswer: ["pause"],
  },
  {
    id: 2,
    title: "Clue 2: Coffee Machine",
    description: "The victim didn’t go where meals are rushed. They chose a place where time slows down. Dark warmth filled the air. People came not to eat, but to sit, sip, and stay a little longer. Find the spot where conversations linger, and cups matter more than plates.",
    type: 'text',
    question: "Enter the password found at the 3rd Floor Coffee Machine:",
    correctAnswer: ["linger"],
  },
  {
    id: 3,
    title: "Clue 3: BQ Lab",
    description: "After the noise and the open air, the victim chose precision over visibility. They went where light is artificial, where work happens away from crowds, and access feels intentional. Machines hum, not people. Go down to where experimentation replaces discussion.",
    type: 'text',
    question: "Enter the password found at the BQ Lab:",
    correctAnswer: ["precision"],
  },
  {
    id: 4,
    title: "Clue 4: 2nd Floor Notice Board",
    description: "After moving through silence and strategy, the victim stopped where rules are made visible. This place doesn’t whisper. It announces. Deadlines, notices, decisions—all displayed for those who know where to look.",
    type: 'text',
    question: "Enter the password found at the 2nd Floor Notice Board:",
    correctAnswer: ["rules"],
  },
  {
    id: 5,
    title: "Clue 5: Tea Post",
    description: "The victim didn’t climb this time. They returned to the lowest level. Warmth gathered here without effort. Hands wrapped around small cups. Conversations paused, then continued. Find where people stop briefly.",
    type: 'text',
    question: "Enter the password found at the Block A Tea Post:",
    correctAnswer: ["routine"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 3 SEQUENCE ---
const CLUES_3: Clue[] = [
  {
    id: 1,
    title: "Clue 1: Canteen Poster",
    description: "The victim didn’t come here to eat. They came here because habits feel safe. Three words watched them: one about living, one about feeling, and one about hunger. Look for the message that promises comfort.",
    type: 'text',
    question: "Enter the password found at the Canteen Poster:",
    correctAnswer: ["habit"],
  },
  {
    id: 2,
    title: "Clue 2: Basement Parking",
    description: "The warning was missed upstairs. So the victim went where reminders fade and engines replace voices. This place exists beneath silence, beneath study, beneath attention. Lights are artificial here, and footsteps echo longer than they should.",
    type: 'text',
    question: "Enter the password found at the Basement Parking:",
    correctAnswer: ["beneath"],
  },
  {
    id: 3,
    title: "Clue 3: SEDA Ground Notice Board",
    description: "After moving through noise and shadows, the victim stopped where information is shared but rarely questioned. This place stands at an entrance, where people pause, read, and move on. Not everything posted is the full truth.",
    type: 'text',
    question: "Enter the password found at the SEDA Notice Board:",
    correctAnswer: ["announcement"],
  },
  {
    id: 4,
    title: "Clue 4: Auditorium",
    description: "The victim moved away from eating and waiting, and stepped into a place meant for attention. Here, many listen while one speaks. Lights focus. Silence is demanded. This space opens only when allowed.",
    type: 'text',
    question: "Enter the password found at the Auditorium:",
    correctAnswer: ["access"],
  },
  {
    id: 5,
    title: "Clue 5: Floor 4 Green Wall",
    description: "The victim went higher again. Not for people but for reflection. Life covered the wall, yet pieces of it stared back. Green surrounded the truth, broken only by what could reflect it. Look where the wall watches you back.",
    type: 'text',
    question: "Enter the password found at the Floor 4 Green Wall:",
    correctAnswer: ["reflection2"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 4 SEQUENCE ---
const CLUES_4: Clue[] = [
  {
    id: 1,
    title: "Clue 1: Engineering Corridor",
    description: "The victim stepped into a place where mistakes are expensive. Here, danger is expected but only when rules are followed. Warnings hang on the wall, and red waits quietly for emergencies that never announce themselves.",
    type: 'text',
    question: "Enter the password found at the Engineering Corridor:",
    correctAnswer: ["warning"],
  },
  {
    id: 2,
    title: "Clue 2: First-Floor Map",
    description: "Before anything is built, it is drawn. Before anyone enters, the route is decided. That night, the victim didn’t walk blindly—they checked where paths begin and where they’re blocked. Find the guide that tells you where you are.",
    type: 'text',
    question: "Enter the password found at the SEDA First-Floor Map:",
    correctAnswer: ["route"],
  },
  {
    id: 3,
    title: "Clue 3: Vase Near Admin",
    description: "After going unnoticed in corridors and shadows, the victim reached a place that looks calm on purpose. Here, nothing feels urgent. Everything feels arranged. Beauty stands still, right outside where decisions are made.",
    type: 'text',
    question: "Enter the password found at the Vase in front of Admin:",
    correctAnswer: ["authority"],
  },
  {
    id: 4,
    title: "Clue 4: 4th Floor Lab",
    description: "The victim didn’t stop near decoration anymore. They moved where function replaces appearance. Four levels above the ground, machines speak louder than people, and mistakes are measured, not forgiven. Access is limited.",
    type: 'text',
    question: "Enter the password found at the 4th Floor A-Wing Lab:",
    correctAnswer: ["control"],
  },
  {
    id: 5,
    title: "Clue 5: NCC Staircase",
    description: "The victim didn’t move through rooms anymore. They chose transition. This place is not meant for staying. Only for moving up or down. Discipline passes through it daily, without stopping. Climb to where order is trained.",
    type: 'text',
    question: "Enter the password found at the NCC 2nd Floor Staircase:",
    correctAnswer: ["transition"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAMS CONFIGURATION ---
export const TEAMS: Record<string, TeamConfig> = {
  team1: {
    id: 'team1',
    username: 'team1',
    password: 'nuv2025',
    name: 'Unit Alpha',
    clueSequence: CLUES_1
  },
  team2: {
    id: 'team2',
    username: 'team2',
    password: 'yuva2025',
    name: 'Unit Beta',
    clueSequence: CLUES_2
  },
  team3: {
    id: 'team3',
    username: 'team3',
    password: 'crime2025',
    name: 'Unit Gamma',
    clueSequence: CLUES_3
  },
  team4: {
    id: 'team4',
    username: 'team4',
    password: 'clue2025',
    name: 'Unit Delta',
    clueSequence: CLUES_4
  }
};