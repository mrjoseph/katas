
import { toUppercase, add } from '../src/index.js';
let chai = require('chai');
let expect = require('chai').expect;

describe('message', () => {
  it('Should convert string to uppercase', () => {
  expect(toUppercase('hello world')).to.equal('HELLO WORLD');
  });

  it('Should add to numbers together', () => {
  	expect(add(2,2)).to.equal(4);
  });
});