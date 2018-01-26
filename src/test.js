import chai from 'chai'
import path from 'path'

import { readFile, writeFile, chooseRandom, createPrompt, createQuestions } from './lib'

chai.should()
chai.use(require('chai-fs'))

// TODO read documentation
chai.use(require('chai-as-promised'))


describe('readFile', () => {
  // TODO update for Promises
})

describe('writeFile', () => {
  // TODO update for Promises
})

describe('chooseRandom', () => {
  it('Should return an array', () => {
    chooseRandom([1, 2, 3], 2).should.be.an('array')
  })
  it('Should not mutate the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    chooseRandom(arr, 5)
    arr.should.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('Should return a random array', () => {
    const arr = Array(100).fill().map((elem, index) => index + 1)
    const rand = chooseRandom(arr, 5)
    rand.should.not.deep.equal(arr)
  })
  it('Should return an array of the passed in length', () => {
    chooseRandom([1, 2, 3, 4, 5], 3).should.have.lengthOf(3)
    chooseRandom(Array(100).fill().map((elem, index) => index + 1), 15).should.have.lengthOf(15)
  })
})

describe('createPrompt', () => {
  it('Should return an array even if passed in undefined or no object', () => {
    createPrompt({}).should.be.an('array')
    createPrompt(undefined).should.be.an('array')
    createPrompt().should.be.an('array')
  })
  it('Should always have at least one question and two choices with it', () => {
    createPrompt().should.have.lengthOf(3)
    createPrompt({}).should.have.lengthOf(3)
    createPrompt(undefined).should.have.lengthOf(3)
  })
  it('Should return prompt objects for questions and their choices', () => {
    createPrompt()[0].should.have.property('type', 'input')
    createPrompt()[0].should.have.property('name', 'question-1')
    createPrompt()[0].should.have.property('message', 'Enter question 1')
    createPrompt({})[0].should.have.property('type', 'input')
    createPrompt({})[0].should.have.property('name', 'question-1')
    createPrompt({})[0].should.have.property('message', 'Enter question 1')
  })
  it('Should default to 1 question and 2 choices', () => {
    createPrompt()[0].should.have.property('type', 'input')
    createPrompt()[0].should.have.property('name', 'question-1')
    createPrompt()[0].should.have.property('message', 'Enter question 1')
    createPrompt()[1].should.have.property('type', 'input')
    createPrompt()[1].should.have.property('name', 'question-1-choice-1')
    createPrompt()[1].should.property('message', 'Enter answer choice 1 for question 1')
    createPrompt()[2].should.have.property('type', 'input')
    createPrompt()[2].should.have.property('name', 'question-1-choice-2')
    createPrompt()[2].should.have.property('message', 'Enter answer choice 2 for question 1')
  })
  it('Should return the passed in number of questions and choices', () => {
    const returnedArray = createPrompt({ numQuestions: 2, numChoices: 2 })
    returnedArray[0].should.have.property('type', 'input')
    returnedArray[0].should.have.property('name', 'question-1')
    returnedArray[0].should.have.property('message', 'Enter question 1')
    returnedArray[1].should.have.property('type', 'input')
    returnedArray[1].should.have.property('name', 'question-1-choice-1')
    returnedArray[1].should.property('message', 'Enter answer choice 1 for question 1')
    returnedArray[2].should.have.property('type', 'input')
    returnedArray[2].should.have.property('name', 'question-1-choice-2')
    returnedArray[2].should.have.property('message', 'Enter answer choice 2 for question 1')
    returnedArray[3].should.have.property('type', 'input')
    returnedArray[3].should.have.property('name', 'question-2')
    returnedArray[3].should.have.property('message', 'Enter question 2')
    returnedArray[4].should.have.property('type', 'input')
    returnedArray[4].should.have.property('name', 'question-2-choice-1')
    returnedArray[4].should.property('message', 'Enter answer choice 1 for question 2')
    returnedArray[5].should.have.property('type', 'input')
    returnedArray[5].should.have.property('name', 'question-2-choice-2')
    returnedArray[5].should.have.property('message', 'Enter answer choice 2 for question 2')
  })
  it('Should always return an array of length numQuestions + (numQuestions * numChoices)', () => {
    const obj1 = { numQuestions: Math.ceil(Math.random() * 100), numChoices: Math.ceil(Math.random() * 100) }
    const obj2 = { numQuestions: Math.ceil(Math.random() * 100), numChoices: Math.ceil(Math.random() * 100) }
    const obj3 = { numQuestions: Math.ceil(Math.random() * 100), numChoices: Math.ceil(Math.random() * 100) }
    createPrompt(obj1).should.have.lengthOf(obj1.numQuestions + (obj1.numQuestions * obj1.numChoices))
    createPrompt(obj2).should.have.lengthOf(obj2.numQuestions + (obj2.numQuestions * obj2.numChoices))
    createPrompt(obj3).should.have.lengthOf(obj3.numQuestions + (obj3.numQuestions * obj3.numChoices))
  })
})

describe('createQuestions', () => {
  it('Should return an array even if passed in undefined or no object', () => {
    createQuestions({}).should.be.an('array')
    createQuestions(undefined).should.be.an('array')
    createQuestions().should.be.an('array')
  })
  it('Should return an empty array if no object is provided', () => {
    createQuestions().should.have.lengthOf(0)
    createQuestions({}).should.have.lengthOf(0)
    createQuestions(undefined).should.have.lengthOf(0)
  })
  it('Should return question objects with their corresponding question and choices', () => {
    const obj = {
      'question-1': 'Do you think you\'re ready for this?',
      'question-1-choice-1': 'Beyond ready!!!',
      'question-1-choice-2': 'Totally!',
      'question-2': 'Are you loving JS yet?',
      'question-2-choice-1': 'It\'s tubular!',
      'question-2-choice-2': 'Way rad man!'
    }
    createQuestions(obj)[0].should.have.property('type', 'list')
    createQuestions(obj)[0].should.have.property('name', 'question-1')
    createQuestions(obj)[0].should.have.property('message', 'Do you think you\'re ready for this?')
    createQuestions(obj)[0].should.have.deep.property('choices', [ 'Beyond ready!!!', 'Totally!' ])
    createQuestions(obj)[1].should.have.property('type', 'list')
    createQuestions(obj)[1].should.have.property('name', 'question-2')
    createQuestions(obj)[1].should.have.property('message', 'Are you loving JS yet?')
    createQuestions(obj)[1].should.have.deep.property('choices', [ 'It\'s tubular!', 'Way rad man!' ])
  })
})