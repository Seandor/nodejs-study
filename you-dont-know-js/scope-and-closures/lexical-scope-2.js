
var obj = {
	a: 1,
	b: 2,
	c: 3
};

// 单调乏味的重复"obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// a simple shortcut
with (obj) {
	a = 3;
	b = 4;
	c = 5;
}