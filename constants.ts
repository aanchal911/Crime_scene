import { TeamConfig, Clue } from './types';

// --- COMMON FINAL CLUE (CLUE 6) ---
const COMMON_FINAL_CLUE: Clue = {
  id: 6,
  title: "🧠 FINAL RIDDLE",
  description: "You’ve been chasing movement.\nUp. Down. Inside. Outside.\n\nBut the night never truly moved forward.\nIt only widened.\n\nThe first voice was not spoken in private.\nIt was meant for many.\nYet everyone listened,\nand no one heard.\n\nReturn to the place where silence is demanded,\nlights decide who is seen,\nand one voice controls hundreds.\n\nClimb until hierarchy feels familiar.\nLook for the space that doesn’t belong to a room,\nbut holds every beginning.",
  type: 'text',
  question: "What is the final answer hidden at this destination?",
  correctAnswer: ["auditorium"],
  isFinal: true
};

// --- TEAM 1 SEQUENCE ---
const CLUES_1: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "They didn’t take everything with them.\nSomething was placed where eyes rarely go,\nabove what students carry,\nnear where silence begins.\nLook higher than habit allows.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["silence"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The victim didn’t rush anymore.\nSomething forced them to slow down.\nThey crossed a line meant to control speed,\nand realised they were no longer alone.\nA round eye watched from the side,\nshowing paths that aren’t meant to be trusted.\nGo where movement is reduced,\nand reflection replaces reality.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["reflection"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "The victim didn’t choose a room this time.\nThey chose a place meant for many—open, loud, impossible to ignore.\nBut they didn’t stay in the centre.\nThey moved to the edges,\nwhere structures stand close enough to watch,\nyet far enough to remain unnoticed.\nFind the stage without walls,\nthen look toward the blocks that surround it.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["edge"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "Before power, there was labour.\nBefore systems, there were tools.\nThat night, the victim paused at something old,\ncrafted to work the land, not to decorate halls.\nIt stands on the ground floor, made of wood, displayed, not used.\nFind the tool that fed generations,\nnow kept only to be remembered.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["legacy"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t choose a room this time. They chose a pause.\nWhat held their weight was once alive.\nIt creaks when ignored. It weathers the sun better than steel.\nNothing important was left where eyes rest.\nThe answer stayed beneath support.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
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
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["pause"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The victim didn’t go where meals are rushed.\nThey chose a place where time slows down.\nDark warmth filled the air.\nPeople came not to eat,\nbut to sit, sip, and stay a little longer.\nFind the spot where conversations linger,\nand cups matter more than plates.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["linger"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After the noise and the open air,\nthe victim chose precision over visibility.\nThey went where light is artificial,\nwhere work happens away from crowds,\nand access feels intentional.\nThis place sits beneath everything familiar.\nMachines hum, not people.\nGo down to where experimentation replaces discussion,\nand find what was hidden out of sight.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["precision"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "After moving through silence and strategy,\nthe victim stopped where rules are made visible.\nThis place doesn’t whisper. It announces.\nDeadlines, notices, decisions—all displayed for those who know where to look.\nTwo levels above the ground, law meets logic, and business meets structure.\nFind where information is pinned,\nand read what most people walk past.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["rules"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t climb this time. They returned to the lowest level.\nWarmth gathered here without effort. Hands wrapped around small cups.\nConversations paused, then continued.\nFind where people stop briefly.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
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
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["habit"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The warning was missed upstairs.\nSo the victim went where reminders fade and engines replace voices.\nThis place exists beneath silence,\nbeneath study,\nbeneath attention.\nLights are artificial here,\nand footsteps echo longer than they should.\nGo below where knowledge sleeps.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["beneath"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After moving through noise and shadows,\nthe victim stopped where information is shared but rarely questioned.\nThis place stands at an entrance,\nwhere people pause, read, and move on.\nUpdates appear here,\nbut not everything posted is the full truth.\nFind where notices face everyone,\nand look closer at what’s meant to be seen first.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["announcement"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "The victim moved away from eating and waiting,\nand stepped into a place meant for attention.\nHere, many listen while one speaks.\nLights focus. Silence is demanded.\nThis space doesn’t belong to everyone.\nIt opens only when allowed, and closes the rest of the time.\nFind where sound is amplified, but movement is restricted.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["access"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim went higher again. Not for people but for reflection.\nLife covered the wall, yet pieces of it stared back.\nGreen surrounded the truth, broken only by what could reflect it.\nLook where the wall watches you back.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["reflection2"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 4 SEQUENCE ---
const CLUES_4: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "The victim didn’t stop where work was done.\nThey stopped where reminders are ignored.\nA message about cleanliness watched them,\nstanding bright against a wall meant to be passed, not noticed.\nFollow the line that tells you where to walk,\nand look beside what keeps things clean.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["clean"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "The warning was missed upstairs.\nSo the victim went where reminders fade and engines replace voices.\nThis place exists beneath silence,\nbeneath study,\nbeneath attention.\nLights are artificial here,\nand footsteps echo longer than they should.\nGo below where knowledge sleeps,\nand find what was never meant to be noticed.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["noticed"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After going unnoticed in corridors and shadows,\nthe victim reached a place that looks calm on purpose.\nHere, nothing feels urgent. Everything feels arranged.\nBeauty stands still,\nright outside where decisions are made.\nFind what doesn’t speak, but is always placed in front,\nguarding the entrance to authority.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["authority"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "The victim didn’t stop near decoration anymore.\nThey moved where function replaces appearance.\nFour levels above the ground,\nmachines speak louder than people,\nand mistakes are measured, not forgiven.\nThis space exists for precision.\nAccess is limited.\nGo to the level where engineering takes over.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["control"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t move through rooms anymore. They chose transition.\nThis place is not meant for staying. Only for moving up or down.\nDiscipline passes through it daily, without stopping.\nClimb to where order is trained.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["transition"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 5 SEQUENCE ---
const CLUES_5: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "The victim stepped into a place where mistakes are expensive.\nHere, danger is expected but only when rules are followed.\nWarnings hang on the wall,\nand red waits quietly for emergencies that never announce themselves.\nDon’t enter blindly.\nLook beside what exists to stop things from getting worse.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["warning"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "Before anything is built, it is drawn.\nBefore anyone enters, the route is decided.\nThat night, the victim didn’t walk blindly\nthey checked where paths begin and where they’re blocked.\nThis place shows everything at once,\nbut hides what matters in plain sight.\nFind the guide that tells you where you are.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["route"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "Not every truth is spoken.\nSome are written, printed, and quietly forgotten.\nAfter passing authority, the victim went below\nto the place where forms begin, where ink decides what becomes official.\nFind where supplies wait to be used, and look beyond what’s for sale.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["supplies"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "The victim trusted evidence. Not rumours. Not assumptions.\nThey climbed to the level where facts are tested,\nand results are pinned for everyone to see.\nThree floors above the ground, science speaks through notices,\ncharts, schedules, and updates.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["results"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t go higher this time.\nThey stopped near a place everyone recognises,\nbut looked toward what grows quietly beside it.\nThis isn’t concrete. It bends, not breaks. It stands together, never alone.\nFind the cluster that stays upright near food.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["cluster"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 6 SEQUENCE ---
const CLUES_6: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "The victim didn’t go where vehicles rest.\nThey stopped where they were told not to.\nA warning stood clear: red, firm, and easy to ignore.\nThis was a place of pause,\nbefore steps were taken and decisions moved indoors.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["pause"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "Before decisions are made, they are argued.\nBefore permission is granted, it is defended.\nThat night, the victim paused where truth is rehearsed.\nThis place looks like a courtroom, but nothing here is final.\nFind where cases are tested, and look around the edges.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["edges"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "After crossing warnings and choosing paths,\nthe victim stopped at a place that looks peaceful.\nNothing rushes here. Nothing speaks.\nLife moves quietly beneath the surface, visible only if you stand still.\nGo where still water watches everything.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["closer"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "After calm water and quiet reflection, the victim returned to something unmistakable.\nThis isn’t a room. It’s shaped carefully, alive, maintained.\nIt represents the whole, yet grows from the ground.\nBeside it, movement pauses, and vehicles wait.\nFind the symbol formed by nature.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["symbol"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim didn’t stay where food is served.\nThey followed a path people rarely use.\nThis route rises quietly, away from noise and routine.\nGo to the place where meals end,\nand look for the steps that lead above.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["above"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 7 SEQUENCE ---
const CLUES_7: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "Discipline watches even when no one speaks.\nUniformed silence, framed rules, and eyes that never blink.\nThe killer stood where duty hangs on walls and plants stand in line.\nSearch beneath order, not chaos.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["order"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "Inside, noise hides everything. Outside, habits slow down.\nThe victim didn’t sit where crowds gather,\nthey chose the quieter five.\nLook where people sit to pause,\nnot where they eat to rush.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["quieter"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "Before power, there was labour.\nBefore systems, there were tools.\nThat night, the victim paused at something old, crafted to work the land.\nIt stands on the ground floor, made of wood, displayed, not used.\nFind the tool that fed generations.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["rooted"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "Roots led the victim here, but movement did not stop.\nThis is not a room or a corridor.\nIt is a space meant to connect, where paths meet before separating again.\nLight enters freely, yet direction is controlled.\nFind the place that gathers everything inside it.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["names"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim followed rhythm, not voices.\nThey stopped where sound is practiced, not performed.\nThis place keeps instruments waiting, and silence matters as much as noise.\nFind where melodies begin, and listen before you look.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["melodies"],
  },
  COMMON_FINAL_CLUE
];

// --- TEAM 8 SEQUENCE ---
const CLUES_8: Clue[] = [
  {
    id: 1,
    title: "FILE #01",
    description: "I live below the usual path,\nwhere footsteps slow and voices drop.\nPeople don’t rush here, they sit, sip, and stay.\nFind the place where time pauses with a cup.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["linger"],
  },
  {
    id: 2,
    title: "FILE #02",
    description: "You have already found comfort,\nbut the truth hides closer than you think.\nNot far from warmth, not far from seats,\nlook where people talk softly and wait.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["basement"],
  },
  {
    id: 3,
    title: "FILE #03",
    description: "Every journey begins somewhere.\nBefore classrooms, before corridors, before stairs.\nColours grow here, flowers speak without words,\nand everyone passes through.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["rooted"],
  },
  {
    id: 4,
    title: "FILE #04",
    description: "It looks calm. It looks harmless.\nWater should move here, but it doesn’t.\nPeople come close with cups in hand, yet never look down.\nSearch beneath what stays still.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["still"],
  },
  {
    id: 5,
    title: "FILE #05",
    description: "The victim climbed higher, away from noise and comfort.\nThis place exists for care, not curiosity.\nWhat stays here breathes, yet remains unseen.\nSigns warn you before doors do.",
    type: 'text',
    question: "Enter the exact answer found at the destination",
    correctAnswer: ["restricted"],
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
  },
  team5: {
    id: 'team5',
    username: 'team5',
    password: 'warn2025',
    name: 'Unit Epsilon',
    clueSequence: CLUES_5
  },
  team6: {
    id: 'team6',
    username: 'team6',
    password: 'path2025',
    name: 'Unit Zeta',
    clueSequence: CLUES_6
  },
  team7: {
    id: 'team7',
    username: 'team7',
    password: 'nuvyuva',
    name: 'Unit Eta',
    clueSequence: CLUES_7
  },
  team8: {
    id: 'team8',
    username: 'team8',
    password: 'case2025',
    name: 'Unit Theta',
    clueSequence: CLUES_8
  }
};