import { getDivisorsCnt } from '../src/getDivisorsCnt.js';
import { expect } from 'chai';

describe('descendingOrder', () => {
 	it('Find the number of divisors of a positive integer n',() =>{
 		expect(getDivisorsCnt(1)).to.equal(1);
 		expect(getDivisorsCnt(10)).to.equal(4);
 		expect(getDivisorsCnt(11)).to.equal(2);
 		expect(getDivisorsCnt(54)).to.equal(8);
 	});
});