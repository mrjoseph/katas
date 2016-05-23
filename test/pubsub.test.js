
import { Events } from '../src/pubsub.js';
import { expect } from 'chai';

describe('pubsub pattern', () => {
 	it('publish and subscribe to topics', () => {
 		var events = new Events();


 		var msg = 'hello world';

 		events.publish('message',msg);
 	});
});