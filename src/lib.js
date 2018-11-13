import shuffle from 'shuffle-array'

export const chooseRandom = (array = [], number) => {
  if (array.length <= 1) {
    return array
  }
  if (!number >= 1 && !number < array.length) {
    number = Math.floor(Math.random() * array.length) + 1
  }
  let array2 = [...array]
  shuffle(array2)
  return array2.slice(0, number)
}

export const createPrompt = (
  { numQuestions = 1, numChoices = 2 } = { numQuestions: 1, numChoices: 2 }
) => {
  let array = []

  if (isNaN(numQuestions)) {
    return array
  }

  let question = n => ({
    type: 'input',
    name: `question-${n}`,
    message: `Enter question ${n}`
  })

  let choice = (n, o) => ({
    type: 'input',
    name: `question-${n}-choice-${o}`,
    message: `Enter answer choice ${o} for question ${n}`
  })

  for (var i = 1; i <= numQuestions; i++) {
    array.push(question(i))

    for (var j = 1; j <= numChoices; j++) {
      array.push(choice(i, j))
    }
  }

  return array
}

export const createQuestions = (questions = {}) => {
  let questionsArray = []
  let currentQuestion = {}

  if (questions === undefined || Object.keys(questions).length < 1) {
    return questionsArray
  }

  for (let [key, value] of Object.entries(questions)) {
    // console.log(key, value)
    if (key.match(/^question-([0-9]+)$/)) {
      if (currentQuestion.name !== undefined) {
        questionsArray.push(currentQuestion)
      }
      currentQuestion = { type: 'list', name: key, message: value, choices: [] }
    } else if (key.match(new RegExp(`question-([0-9]+)-choice-([0-9]+)`))) {
      currentQuestion.choices.push(value)
    }
  }
  questionsArray.push(currentQuestion)
  return questionsArray
}
// 'question-1': 'Do you think you\'re ready for this?',
//   'question-1-choice-1': 'Beyond ready!!!',
//   'question-1-choice-2': 'Totally!'
console.log(
  createQuestions({
    'question-1': "Do you think you're ready for this?",
    'question-1-choice-1': 'Beyond ready!!!',
    'question-1-choice-2': 'Totally!',
    'question-2': 'Are you loving JS yet?',
    'question-2-choice-1': "It's tubular!",
    'question-2-choice-2': 'Way rad man!'
  })
)
