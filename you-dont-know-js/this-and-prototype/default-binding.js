
function foo() {
	console.log(this.a);
}

// `a` is just a property of the global object window 
var a = 2;

foo(); // 2