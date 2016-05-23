 function Events(){
	console.log(this);
	this.topics = topics || {};
};

Events.prototype.subscribe = function(topic,listener){
	//If the topics object doesn't have a existing 
	//method then create one with a empty array
	if(!hasOwnProperty.call(this.topics,topic)){
		this.topics[topic] = [];
	}

	//Push the listener to the array of our new 
	//topic object
	this.topics[topic].push(listener) -1;
};


Events.prototype.publish = function(topic,data){
	if(!hasOwnProperty.call(this.topics,topic)){
		return;
	}
	this.topics[topic].forEach(function(item){
		item(data != undefined ? data : {});
	});
};

export default Events();