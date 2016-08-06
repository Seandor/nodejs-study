
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2, 
	foo: foo
};

var a = "ooops, global";

setTimeout(obj.foo, 1000);

// 参数传递时，发生了隐式赋值，导致丢失了foo指向obj的exexuting context