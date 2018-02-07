# CreateQuestions Assignment

---

In this assignment, students will add another, more complex, function, ```createQuestions```, which takes an object which has question numbers and choices as keys and returns an array of question objects which each contain a question and its corresponding choices. The object parameter should default to an empty object.
The format of the array of questions objects is detailed in the Format section below.

## Goal

---

To challenge students to think more functionally through repetition of difficult problems which require them to think in ways they may not have before. Also, to have students practice using promises
in combination with the custom library of functions they create.

## Tasks

---

- [ ] Copy ```readFile``` and ```writeFile``` functions from promise exercise into ```lib.js```
- [ ] Copy ```createPrompt``` and ```chooseRandom```functions into ```lib.js```
- [ ] Implement the ```createQuestions``` function based on the format below and provided tests
- [ ] Export all of the above functions from ```lib.js```
- [ ] Import all of the above functions into ```index.js```
- [ ] In ```index.js```, use ```readFile``` to read the file ```createPrompt.json```
- [ ] Pass the object read from ```createPrompt.json``` into ```createPrompt```
- [ ] Pass the result of ```createPrompt``` into ```chooseRandom```
- [ ] Save the result of ```chooseRandom``` to a file called ```cp_solutions.json```
- [ ] Use ```readFile``` to read the file ```createQuestions.json```
- [ ] Pass the object read in from ```createQuestions.json``` into your ```createQuestions``` function
- [ ] Pass the result of ```createQuestions``` into ```chooseRandom```
- [ ] Save the result of ```chooseRandom``` to a file named ```cq_solutions.json```
- [ ] Ensure all tests are passing when you run the ```npm test``` command


### Format

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
