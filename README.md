# CreateQuestions Assignment

---

In this assignment, students are to add two more functions into their ```lib.js``` file. First, they will add a ```createPrompt``` function which expects an object with properties: ```numQuestions``` and ```numChoices``` and must return an array of objects in a specific format (listed in the CreatePrompt Format section below). The ```numQuestions``` parameter should have a default value of 1 and the ```numchoices``` parameter should have a default value of 2. Second, students will add ```createQuestions```, which takes an object which has question numbers and choices as keys and returns an array of question objects which each contain a question and its corresponding choices. The object parameter should default to an empty object. The format of the array of questions objects is detailed in the CreateQuestion Format section below.

## Goal

---

To challenge students to think more functionally through repetition of difficult problems which require them to think in ways they may not have before. Also, to have students practice using promises
in combination with the custom library of functions they create.

## Tasks

---

- [ ] Copy your ```chooseRandom``` function from the chooseRandom assignment into ```lib.js```
- [ ] Implement ```createPrompt``` using the given format below and the given test cases
- [ ] Implement the ```createQuestions``` function based on the format below and provided tests
- [ ] Export all of the above functions from ```lib.js```
- [ ] Ensure all tests are passing when you run the ```npm test``` command

### Optional Tasks (Not Graded)

- [ ] Import all of your functions into ```index.js```
- [ ] In ```index.js```, read the file ```createPrompt.json```
- [ ] Pass the object read from ```createPrompt.json``` into your ```createPrompt``` function
- [ ] Pass the result of yout ```createPrompt``` function into your ```chooseRandom``` function
- [ ] Save the result of your ```chooseRandom``` function to a file called ```cp_solutions.json```
- [ ] Read the file ```createQuestions.json```
- [ ] Pass the object read in from ```createQuestions.json``` into your ```createQuestions``` function
- [ ] Pass the result of your ```createQuestions``` function into  your ```chooseRandom``` function
- [ ] Save the result of your ```chooseRandom``` function to a file named ```cq_solutions.json```

### CreatePrompt Format

---

createPrompt should return an array of objects in the following format:

``` javascript
[
  { // Questions are repeated numQuestion number of times
    type: 'input',
    name: `question-${(Question Number)}`,
    message: `Enter question ${(Question Number)}`
  },
  { // Choices are repeated numChoices number of times for each question
    type: 'input',
    name: `question-${(Question Number)}-choice-${(Choice Number)}`,
    message: `Enter answer choice ${(Choice Number)} for question ${(Question Number)}`
  },
  .
  .
  .
]
```

Example of createPromt({ numQuestions: 2, numChoices: 2 }):

``` javascript
[
  {
    type: 'input',
    name: `question-1`,
    message: `Enter question 1`
  },
  {
    type: 'input',
    name: `question-1-choice-1`,
    message: `Enter answer choice 1 for question 1`
  },
  {
    type: 'input',
    name: `question-1-choice-2`,
    message: `Enter answer choice 2 for question 1`
  },
  {
    type: 'input',
    name: `question-2`,
    message: `Enter question 2`
  },
  {
    type: 'input',
    name: `question-2-choice-1`,
    message: `Enter answer choice 1 for question 2`
  },
  {
    type: 'input',
    name: `question-2-choice-2`,
    message: `Enter answer choice 2 for question 2`
  },
]
```

### CreateQuestions Format

---

createQuestions should return an array of question objects in the following format:

``` javascript
 [
  { // Repeated for the total number of questions
    type: 'list',
    name: (Question Name),
    message: (Question),
    choices: [ // Repeated for the total number of choices for each question
      (Choice-1)
      (Choice-2)
      (Choice-3)
      (Choice-4)
      .
      .
      .
    ]
  },
  .
  .
  .
]
```

Example of:

``` javascript
createQuestions({
  'question-1': 'Do you think you\'re ready for this?',
  'question-1-choice-1': 'Beyond ready!!!',
  'question-1-choice-2': 'Totally!',
  'question-2': 'Are you loving JS yet?',
  'question-2-choice-1': 'It\'s tubular!',
  'question-2-choice-2': 'Way rad man!'
})
```

Result:

``` javascript
[
  { // Repeated for the total number of questions
    type: 'list',
    name: 'question-1',
    message: 'Do you think you\'re ready for this?',
    choices: [
      'Beyond ready!!!',
      'Totally!'
    ]
  }, { // Repeated for the total number of questions
    type: 'list',
    name: 'question-2',
    message: 'Are you loving JS yet?',
    choices: [
      'It\'s tubular!',
      'Way rad man!'
    ]
  }
]
```
