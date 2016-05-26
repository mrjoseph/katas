// function tea42(input) {
//  return input.toString().replace (/2/g, 't');
// };


export function tea42(input) {
	return [..."" + input].map(item => (item === '2') ? 't' : item).join('');
};