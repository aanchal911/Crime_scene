import { TeamConfig, Clue } from './types';

// --- COMMON FINAL CLUE (CLUE 6) ---
const COMMON_FINAL_CLUE: Clue = {
  id: 6,
  title: "FILE #06: THE FINAL POSITION",
  description: "The trail does not end inside a room.\nIt ends where silence looks peaceful.\nWater was expected, but sand tells the real story.\nSeven levels above the ground, near a room marked with numbers,\nthe truth waits outside, not within.",
  type: 'text',
  question: "What is the answer hidden at the top?",
  correctAnswer: ["a701"],
  isFinal: true
};

// --- TEAM 1 SEQUENCE ---
const CLUES_1: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "They didn’t take everything with them.\nSomething was placed where eyes rarely go,\nabove what students carry,\nnear where silence begins.\nLook higher than habit allows.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["silence"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The victim didn’t rush anymore.\nSomething forced them to slow down.\nThey crossed a line meant to control speed,\nand realised they were no longer alone.\nA round eye watched from the side,\nshowing paths that aren’t meant to be trusted.\nGo where movement is reduced,\nand reflection replaces reality.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["reflection"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "The victim didn’t choose a room this time.\nThey chose a place meant for many—open, loud, impossible to ignore.\nBut they didn’t stay in the centre.\nThey moved to the edges,\nwhere structures stand close enough to watch,\nyet far enough to remain unnoticed.\nFind the stage without walls,\nthen look toward the blocks that surround it.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["edge"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "Before power, there was labour.\nBefore systems, there were tools.\nThat night, the victim paused at something old,\ncrafted to work the land, not to decorate halls.\nIt stands on the ground floor, made of wood, displayed, not used.\nFind the tool that fed generations,\nnow kept only to be remembered.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["legacy"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t choose a room this time. They chose a pause.\nWhat held their weight was once alive.\nIt creaks when ignored. It weathers the sun better than steel.\nNothing important was left where eyes rest.\nThe answer stayed beneath support.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["beneath"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 2 SEQUENCE ---
const CLUES_2: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "Not every move happens on the table.\nSome happen before the game even begins.\nThe victim paused where players rush past,\nhands ready, minds elsewhere.\nBefore you step in to play,\ncheck what waits just out of sight.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["pause"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The victim didn’t go where meals are rushed.\nThey chose a place where time slows down.\nDark warmth filled the air.\nPeople came not to eat,\nbut to sit, sip, and stay a little longer.\nFind the spot where conversations linger,\nand cups matter more than plates.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["linger"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After the noise and the open air,\nthe victim chose precision over visibility.\nThey went where light is artificial,\nwhere work happens away from crowds,\nand access feels intentional.\nThis place sits beneath everything familiar.\nMachines hum, not people.\nGo down to where experimentation replaces discussion,\nand find what was hidden out of sight.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["precision"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "After moving through silence and strategy,\nthe victim stopped where rules are made visible.\nThis place doesn’t whisper. It announces.\nDeadlines, notices, decisions—all displayed for those who know where to look.\nTwo levels above the ground, law meets logic, and business meets structure.\nFind where information is pinned,\nand read what most people walk past.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["rules"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t climb this time. They returned to the lowest level.\nWarmth gathered here without effort. Hands wrapped around small cups.\nConversations paused, then continued.\nFind where people stop briefly.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["routine"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 3 SEQUENCE ---
const CLUES_3: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "The victim didn’t come here to eat.\nThey came here because habits feel safe.\nThree words watched them:\none about living, one about feeling, and one about hunger.\nLook for the message that promises comfort,\nwritten in the colour of what keeps things fresh.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["habit"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The warning was missed upstairs.\nSo the victim went where reminders fade and engines replace voices.\nThis place exists beneath silence,\nbeneath study,\nbeneath attention.\nLights are artificial here,\nand footsteps echo longer than they should.\nGo below where knowledge sleeps.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["beneath"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After moving through noise and shadows,\nthe victim stopped where information is shared but rarely questioned.\nThis place stands at an entrance,\nwhere people pause, read, and move on.\nUpdates appear here,\nbut not everything posted is the full truth.\nFind where notices face everyone,\nand look closer at what’s meant to be seen first.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["announcement"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "The victim moved away from eating and waiting,\nand stepped into a place meant for attention.\nHere, many listen while one speaks.\nLights focus. Silence is demanded.\nThis space doesn’t belong to everyone.\nIt opens only when allowed, and closes the rest of the time.\nFind where sound is amplified, but movement is restricted.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["access"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim went higher again. Not for people but for reflection.\nLife covered the wall, yet pieces of it stared back.\nGreen surrounded the truth, broken only by what could reflect it.\nLook where the wall watches you back.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["reflection2"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 4 SEQUENCE ---
const CLUES_4: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "The victim stepped into a place where mistakes are expensive.\nHere, danger is expected but only when rules are followed.\nWarnings hang on the wall,\nand red waits quietly for emergencies that never announce themselves.\nDon’t enter blindly.\nLook beside what exists to stop things from getting worse.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["warning"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "Before anything is built, it is drawn.\nBefore anyone enters, the route is decided.\nThat night, the victim didn’t walk blindly\nthey checked where paths begin and where they’re blocked.\nThis place shows everything at once,\nbut hides what matters in plain sight.\nFind the guide that tells you where you are.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["route"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After going unnoticed in corridors and shadows,\nthe victim reached a place that looks calm on purpose.\nHere, nothing feels urgent. Everything feels arranged.\nBeauty stands still,\nright outside where decisions are made.\nFind what doesn’t speak, but is always placed in front,\nguarding the entrance to authority.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["authority"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "The victim didn’t stop near decoration anymore.\nThey moved where function replaces appearance.\nFour levels above the ground,\nmachines speak louder than people,\nand mistakes are measured, not forgiven.\nThis space exists for precision.\nAccess is limited.\nGo to the level where engineering takes over.",
    type: 'text',
    question: "Enter the password found at this location:",
    correctAnswer: ["control"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t move through rooms anymore. They chose transition.\nThis place is not meant for staying. Only for moving up or down.\nDiscipline passes through it daily, without stopping.\nClimb to where order is trained.",
    type: 'text',
    question: "Enter the password found at this location:",
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
