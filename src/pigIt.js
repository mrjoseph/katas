export function pigIt(str) {
 return str.split(' ').map((item) =>{
 	item = item.split('');
 	item.push(item[0]);
 	item.shift();
 	return item.join('') + 'ay';
 }).join(' ');
}


/*
	function pigIt(str){
  return str.replace(/\b(\w)(\w+)\b/ig,"$2$1ay");
}

 */