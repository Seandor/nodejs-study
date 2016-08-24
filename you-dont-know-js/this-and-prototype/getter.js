
var myObject = {
	// define a getter for a
	get a() {
		return 2;
	}
};

Object.defineProperty(
	myObject,
	"b",
	{
		// define a getter for b
		get: function() { return this.a * 2; },
		enumerable: true
	}
);

console.log(myObject.a);
console.log(myObject.b);