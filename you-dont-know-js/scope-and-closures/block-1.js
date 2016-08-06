
function foo() {
	for (var i = 0; i < 5; i++) {
		console.log("block war!");
	}
	console.log(i);
}

foo();
console.log(i);

// there is no block scope in the for loop