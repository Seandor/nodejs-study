// 引入依赖
var express = require('express');
var utility = require('utility');

// 创建express实例
var app = express();

app.get('/', function (req, res) {
	// extract prameter from query
	var q = req.query.q;
	// 使用utility计算q的md5值
	var md5Value = utility.md5(q);

	res.send(md5Value);
});

app.listen(3000, function (req, res) {
	console.log('app is running on port 3000');
});
