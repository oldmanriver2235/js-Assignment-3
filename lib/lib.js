'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuestions = exports.createPrompt = exports.chooseRandom = undefined;

var _shuffleArray = require('shuffle-array');

var _shuffleArray2 = _interopRequireDefault(_shuffleArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const chooseRandom = exports.chooseRandom = (array = [], number) => {
  if (array.length <= 1) {
    return array;
  }
  if (!number >= 1 && !number < array.length) {
    number = Math.floor(Math.random() * array.length) + 1;
  }
  let array2 = [...array];
  (0, _shuffleArray2.default)(array2);
  return array2.slice(0, number);
};

const createPrompt = exports.createPrompt = ({ numQuestions = 1, numChoices = 2 } = { numQuestions: 1, numChoices: 2 }) => {
  let array = [];

  if (isNaN(numQuestions)) {
    return array;
  }

  let question = n => ({
    type: 'input',
    name: `question-${n}`,
    message: `Enter question ${n}`
  });

  let choice = (n, o) => ({
    type: 'input',
    name: `question-${n}-choice-${o}`,
    message: `Enter answer choice ${o} for question ${n}`
  });

  for (var i = 1; i <= numQuestions; i++) {
    array.push(question(i));

    for (var j = 1; j <= numChoices; j++) {
      array.push(choice(i, j));
    }
  }

  return array;
};

const createQuestions = exports.createQuestions = value => {
  let questionsArray = [];

  if (value === undefined) {
    return questionsArray;
  }

  let questions = (n, o) => ({
    type: 'list',
    name: `question-${n}`,
    message: Question,
    choices: [(Choice - 1)(Choice - 2)(Choice - 3)(Choice - 4)]
  });
  return questionsArray;
};