
import { humanReadable } from '../src/humanReadable.js';
import { expect } from 'chai';

describe('humanReadable', () => {
 	it('should format correctly', () => {
 		  		
 		 expect(arrayDiff([1,2,2,2,3],[2])).to.deep.equal([1,3]);

 	});
});