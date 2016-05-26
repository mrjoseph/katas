import { tea42 } from '../src/tea42.js';
import { expect } from 'chai';

describe('tea42', () => {
 	it('takes as input',() =>{
		
		expect(tea42(2)).to.equal('t') 
		expect(tea42('2')).to.equal('t')
		expect(tea42(102)).to.equal('10t')
		expect(tea42('m2')).to.equal('mt');
		expect(tea42('pre2ty')).to.equal('pretty')
	});
});