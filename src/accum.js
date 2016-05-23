export function accum(s) {
	return s.split('').map((item,i) => {
		for(var el = item, j = 0;j < i; j++) el += item; return el;
	}).map(item => item.toLowerCase())
	.map(item => item.charAt(0).toUpperCase() + item.slice(1))
	.reduce((pre,next) => pre +'-'+ next);	
}