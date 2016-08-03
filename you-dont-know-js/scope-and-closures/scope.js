//  Engine sees two distinct statements,
//  one which Compiler will handle during compilation,
//  and one which Engine will handle during execution.
var a = 2;

// do the RHS look-up
console.log(a);

// ----------------------------------------------------
function foo(a) {
	console.log(a);
}

foo(2);

// quiz
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo(2);

// find all the LHS look-up.
// a, b, c (3 times)

// find all the RHS look-up
// foo, a, a, b (4 times)