// function tea42(input) {
//  return input.toString().replace (/2/g, 't');
// };


export function arrayDiff(a,b) {
	let arr = [];
	b.forEach((item) => {
		a.filter((el) =>{
			if(item != el) arr.push(el);
		});
	})
	return arr;
};