function Person(){
	this.think=function(callback){
		console.log('thinking');
		setTimeOut(function(){
			callback();
		},5000);
	};
	this.answer=function(){
		console.log('');
	};
}
var person = new Person();
person.think(function(){
	console.log('');
});
person.answer(); 