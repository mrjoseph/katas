
import { likes, add } from '../src/whoLikesIt.js';
import { expect } from 'chai';

describe('Alert who likes this', () => {
 	it('should return correct text', () => {
 		expect(likes([])).to.equal('no one likes this');
 		expect(likes(['Peter'])).to.equal('Peter likes this');
 		expect(likes(['Jacob', 'Alex'])).to.equal('Jacob and Alex like this');
 		expect(likes(["Max", "John", "Mark"])).to.equal('Max, John and Mark like this');
 		expect(likes(["Alex", "Jacob", "Mark", "Max"])).to.equal('Alex, Jacob and 2 others like this');
 	});
});