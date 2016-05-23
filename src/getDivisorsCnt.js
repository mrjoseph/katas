export function getDivisorsCnt(n){
	for(var x = 0, i = 1; i < n +1 ;i++){
		if (n % i === 0) x ++;
	}
	return x;
}