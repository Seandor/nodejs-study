
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; 	// 因为是按值传递，只是将foo函数的地址传递给了bar

var a = "ooops, global"; 	// a also a global object

bar(); // "ooops, global"