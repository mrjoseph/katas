export function find(str){
return str.split('').sort().join('').replace(/(?:(\w)(\1+))+/g,'')
}
