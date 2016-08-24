
var strPrimitive = "I am a string";
typeof strPrimitive;
strPrimitive instanceof String;

var strObject = new String("I am a string");
typeof strObject;
strObject instanceof String;

Object.prototype.toString.call(strObject);