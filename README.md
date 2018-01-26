# Promises Assignment

---

In the assignment, students are tasked with converting their ```readFile``` and ```writeFile``` functions from using callbacks to Promises. Along with updating these functions, students should update their test cases this time using [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/). Students will also add another more complex function ```createQuestions``` which takes an object which has question numbers and choices as keys and returns an array of question objects which each contain a question and its corresponding choices.

## Goal

---

To continue preparing students to adapt to new technologies and also continue challenging them with problems that require all of the information they've learned about JavaScript in this module.

## Tasks

---

- [ ] Copy functions from the file i/o assignment into lib.js
- [ ] Update the tests for readfile to use chai-as-promised
- [ ] Update the readfile function to use promises
- [ ] Update the tests for writefile to use chai-as-promised
- [ ] Update the writefile function to use promises
- [ ] Implement the createQuestions function based on the format below and provided tests
- [ ] Ensure all tests are passing

(OPTIONAL) Import your functions from lib.js into index.js and manually try them out. Practice reading and writing to files and calling chooseRandom, createPrompt, and createQuestions with various input.

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