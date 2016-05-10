/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect

 */

export function once(fn) {
		var called = false;
	return function (arg){
		if(called === false){
			console.log(arg);
			called = true;
			return true;	
		} else {
			return false;
		}
		
	};	
}


