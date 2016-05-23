import { accum } from '../src/accum.js';
import { expect } from 'chai';

describe('descendingOrder', () => {
 	it('Find the number of divisors of a positive integer n',() =>{
 		expect(accum("ZpglnRxqenU")).to.equal("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
 		expect(accum("NyffsGeyylB")).to.equal("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
 		expect(accum("MjtkuBovqrU")).to.equal("M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
 		expect(accum("EvidjUnokmM")).to.equal("E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
 		expect(accum("HbideVbxncC")).to.equal("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
 	});
});