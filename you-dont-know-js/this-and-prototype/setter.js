
var myObject = {
	get a() {
		return this._a_;
	},

	set a(val) {
		this._a_ = val * 2;
	}
};

myObject.a = 2;

console.log(myObject.a);