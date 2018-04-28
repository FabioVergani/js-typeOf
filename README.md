# js-typeOf

```
const typeOf=(o=>{
	let f=x=>typeof x;
	if(o && 'function'===typeof o){
		const s='symbol';
		if(s===typeof o.iterator){
			const p=o.prototype;
			f=x=>x && x.constructor===o && x!==p?s:typeof x
		}
	};
	return f
})(window.Symbol);



console.log(typeof 37==='number');
console.log(typeof 3.14==='number');
console.log(typeof(42)==='number');
console.log(typeof Math.LN2==='number');
console.log(typeof Infinity==='number');
console.log(typeof NaN==='number'); // Despite being "Not-A-Number"
console.log(typeof Number(1)==='number'); // but never use this form!
console.log(typeof ''==='string');
console.log(typeof 'bla'==='string');
console.log(typeof '1'==='string'); // note that a number within a string is still console.log(typeofstring
console.log(typeof String('abc')==='string'); // but never use this form!
console.log(typeof true==='boolean');
console.log(typeof false==='boolean');
console.log(typeof Boolean(true)==='boolean'); // but never use this form!
console.log(typeof Symbol()==='symbol');
console.log(typeof Symbol('foo')==='symbol');
console.log(typeof Symbol.iterator==='symbol');
console.log(typeof undefined==='undefined');
console.log(typeof declaredButUndefinedVariable==='undefined');
console.log(typeof undeclaredVariable==='undefined');
console.log(typeof {a:1}==='object');
console.log(typeof [1, 2, 4]==='object');
console.log(typeof new Date()==='object');
console.log(typeof new Boolean(true)==='object');
console.log(typeof new Number(1)==='object');
console.log(typeof new String('abc')==='object');
console.log(typeof null==='object');
console.log(typeof new String('String')==='object');
console.log(typeof new Number(100)==='object');
console.log(typeof new Function()==='function');
console.log(typeof function(){}==='function');
console.log(typeof class C{}==='function');
console.log(typeof Math.sin==='function');


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


```
