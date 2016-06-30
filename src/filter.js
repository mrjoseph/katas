Array.prototype.filter = function(terms) {
  var list = this;
  function filter(list,terms){
    var results = [];
    list.forEach(function(item){
      if ( item.match(terms)) { results.push(item); }
    }); 
    return results;
  }
  return terms.reduce(filter,list);
};


var terms = ['p','c'];
var list = ['apple','orange','peach','tropical fruit'];
var results = list.filter(terms);
console.log(results); // ["peach", "tropical fruit"]
