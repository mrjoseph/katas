
import { pigIt } from '../src/pigIt.js';
import { expect } from 'chai';

describe('pigIt', () => {
 	it('should Move the first letter of each word to the end of it, then add \'ay\' to the end of the word.', () => {

 		expect(pigIt('Pig latin is cool')).to.equal('igPay atinlay siay oolcay');
 		expect(pigIt('This is my string')).to.equal('hisTay siay ymay tringsay');

 	});
});