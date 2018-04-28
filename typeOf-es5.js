
var typeOf=(function(o){
	var p,f=function f(x){return typeof(x)};
	if(o && typeof(o)==='function'){
		if(typeof(o.iterator)==='symbol'){
			p=o.prototype;
			f=function(x){return x && x.constructor===o && x!==p?'symbol':typeof(x)};
		};
	};
	return f;
})(window.Symbol);

/*
console.clear();
console.log(typeOf(37)==='number');
console.log(typeOf(3.14)==='number');
console.log(typeOf(42)==='number');
console.log(typeOf(Math.LN2)==='number');
console.log(typeOf(Infinity)==='number');
console.log(typeOf(NaN)==='number'); // Despite being "Not-A-Number"
console.log(typeOf(Number(1))==='number');
console.log(typeOf('')==='string');
console.log(typeOf('bla')==='string');
console.log(typeOf('1')==='string'); // note that a number within a string is still console.log(typeOfstring
console.log(typeOf(String('abc'))==='string');
console.log(typeOf(true)==='boolean');
console.log(typeOf(false)==='boolean');
console.log(typeOf(Boolean(true))==='boolean');
console.log(typeOf(Symbol())==='symbol');
console.log(typeOf(Symbol('foo'))==='symbol');
console.log(typeOf(Symbol.iterator)==='symbol');
console.log(typeOf(undefined)==='undefined');
console.log(typeOf(window.boh)==='undefined');
console.log(typeOf({a:1})==='object');
console.log(typeOf([1, 2, 4])==='object');
console.log(typeOf(new Date())==='object');
console.log(typeOf(new Boolean(true))==='object');
console.log(typeOf(new Number(1))==='object');
console.log(typeOf(new String('abc'))==='object');
console.log(typeOf(null)==='object');
console.log(typeOf(new String('String'))==='object');
console.log(typeOf(new Number(100))==='object');
console.log(typeOf(new Function())==='function');
console.log(typeOf(function(){})==='function');
console.log(typeOf(class C{})==='function');
console.log(typeOf(Math.sin)==='function');
*/
