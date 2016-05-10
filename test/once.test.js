
import { once } from '../src/once.js';
import { expect } from 'chai';

describe('Once', () => {
 	it('should only work once', () => {
 		 let fred = once(console.log);
 		
 		 expect(fred('foo')).to.be.true;
 		 expect(fred('foo')).to.be.false;
 		 expect(fred('foo')).to.be.false;
 	});
});