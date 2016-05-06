
import { opposite } from '../src/oppositeNumber.js';
import { expect } from 'chai';


describe('Find opposite number', () => {
	it('Should find the opposite number', () => {
		expect(opposite(23)).to.equal(-23);
		expect(opposite(-15)).to.equal(15);
 	});
});