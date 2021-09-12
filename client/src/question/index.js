const qBank = [
  {
    question: 'Which of the following dinosaurs is named from Seymour, Texas where it was first discovered?',
    answers: ['Brontosaurus', 'Stegosaurus', 'Seymouria', 'Pterosaurus'],
    correct: 'Seymouria',
    questionId: '099099',
  },
  {
    question: 'Which of the following dinosaurs is popular as the flying dinosaur?',
    answers: ['Pterosaurus', 'Tyrannosaurus', 'Triceratops', 'Iguanodon'],
    correct: 'Pterosaurus',
    questionId: '093909',
  },
  {
    question: 'Which of the following dinosaurs was first described scientifically in 1824?',
    answers: ['Brontosaurus', 'Ankylosaurus', 'Pteranodon', 'Megalosaurus'],
    correct: 'Megalosaurus',
    questionId: '009039',
  },
  {
    question: 'Which of the following is believed to be the oldest reptile on earth?',
    answers: ['Hylonomus', 'Dinotherium', 'Ichthyosaurus', 'Pterosaurus'],
    correct: 'Hylonomus',
    questionId: '090089',
  },
  {
    question: 'Which of the following is the meaning of the word dinosaur?',
    answers: ['Horrible reptile', 'Terrible reptile', 'Terrible lizard', 'Miserable reptile'],
    correct: 'Terrible lizard',
    questionId: '01010101',
  },
  
  
]

// n = 5 to export 5 question
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))
