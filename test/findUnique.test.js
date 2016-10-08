import { find } from '../src/findUnique.js';
import { expect } from 'chai';

describe('Find unique character in a string', () => {
 	it('should return the unique characters from a string', () => {
 		expect(find("abccbabcxbacubac")).to.equal('ux');
 		expect(find("fokfkossckoskobeeua")).to.equal('abcu');
 	});
});