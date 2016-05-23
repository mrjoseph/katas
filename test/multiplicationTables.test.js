
import { multiplicationTables } from '../src/multiplicationTables.js';
import { expect } from 'chai';

describe('Multiplication Tables', () => {
 	it('create a multiplication table sized according to the given dimensions', () => {
		expect(multiplicationTables(2,2)).to.deep.equal([[1,2],[2,4]])
		expect(multiplicationTables(3,3)).to.deep.equal([[1,2,3],[2,4,6],[3,6,9]])
		expect(multiplicationTables(3,4)).to.deep.equal([[1,2,3,4],[2,4,6,8],[3,6,9,12]])
		expect(multiplicationTables(4,4)).to.deep.equal([[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
		expect(multiplicationTables(2,5)).to.deep.equal([[1,2,3,4,5],[2,4,6,8,10]])
 	});
});