const typeOf=(o=>{
	let f=x=>typeof(x);
	if(o && typeof(o)==='function'){
		const s='symbol';
		if(typeof(o.iterator)===s){
			const p=o.prototype;
			f=x=>x && x.constructor===o && x!==p?s:typeof(x);
		};
	};
	return f;
})(window.Symbol);
