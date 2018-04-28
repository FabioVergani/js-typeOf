# js-typeOf

```
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
```
