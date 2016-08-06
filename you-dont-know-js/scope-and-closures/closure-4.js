'use strict';

for (var i = 1; i <= 5; i++) {
	let j = i;	// block scope for closure
	setTimeout(function timer() {
		console.log(j);
	}, j*1000);
}