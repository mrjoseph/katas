
import { tickets } from '../src/tickets.js';
import { expect } from 'chai';

describe('Avengers movie', () => {
 	it('should alert if Vasya has enough change to make the transition', () => {
		expect(tickets([ 25, 25 ,25,25,100])).to.equal("YES");
		expect(tickets([ 25, 25, 25, 25, 50, 100, 50 ])).to.equal('YES');
		expect(tickets([25,25,25,100])).to.equal("YES");
		expect(tickets([ 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100 ])).to.equal("NO");
		expect(tickets([50])).to.equal("NO");
		expect(tickets([ 25, 25, 25, 25, 25, 100, 100 ])).to.equal("NO");
		expect(tickets([ 25,25,25,25,100,100 ])).to.equal("NO")
		
 	});
});