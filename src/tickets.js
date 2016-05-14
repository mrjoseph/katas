export function tickets(peopleInLine){

	function contains(arr, v) {
		return arr.indexOf(v) > -1;
	}

	function sortNumber(a,b) {
	    return b - a;
	}

	function totalAmount(arr){
	 		return arr.reduce(function(previousValue, currentValue, currentIndex, array) {
	  			return previousValue + currentValue;
			});
	 	};

	function pluck(change,till,customersMoney){
		var newTill = [];
		till = till.sort(sortNumber);
		var sum = change;
		for (var i = 0;i < till.length; i++){
			if(till[i] <= sum){
				newTill.push(till[i]);
				if (totalAmount(newTill) === change) {
					return newTill;	 
				}
				sum = sum - till[i];
			}
		}
	}

	Array.prototype.removeItems = function(a){
		var j;
	  	for(var i =0;i<this.length;i++){
	    	j = a.indexOf(this[i]);
	    	if(j != -1) {
				a.splice(j, 1);
	    	}
	  	}
	  	return a; 
	};

	function paymentchecker(ticketPrice){
		var till = [];
		var isPossible = [];
		peopleInLine.forEach(function(item,i,array){
			var change = 0;
			var arrayToRemove;
			switch(true){
				case (item === ticketPrice):
				till.push(item);
				isPossible.push(true);
				break;
				case (item > ticketPrice):
					change = item - ticketPrice;
					arrayToRemove = pluck(change,till,item);
					if(typeof arrayToRemove != 'undefined'){
						till = arrayToRemove.removeItems(till);
					 	till.push(item);					 	
					 	isPossible.push(true);
					} else {
						isPossible.push(false);
					}
				break;
			}
		});
		return isPossible;
	}

 return (contains(paymentchecker(25),false)) ? "NO" : "YES"; 	
}
