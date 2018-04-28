var typeOf=(function(w){
  var o=w.Symbol,p=o.prototype,t=typeof(o),s='symbol';
  return (t==='function' && typeof(o.iterator)===s)?new w.Function('x','return typeof(x)'):function(x){return (t && x &&  x.constructor===o && x!==p)?s:typeof(x)};
})(window);
