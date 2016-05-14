
import { descendingOrder } from '../src/descendingOrder.js';
import { expect } from 'chai';

describe('descendingOrder', () => {
 	it('Should take any non-negative integer as a argument and return it with its digits in descending order',() =>{
 		expect(descendingOrder(1254859723)).to.equal(9875543221);
 	});
});