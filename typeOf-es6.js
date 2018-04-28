const typeOf=(w=>{
	const o=w.Symbol,p=o.prototype,t=typeof(o),s='symbol';
	return t==='function' && typeof(o.iterator)===s?x=>typeof(x):x=>x && t && x.constructor===o && x!==p?s:typeof(x);
})(window);
