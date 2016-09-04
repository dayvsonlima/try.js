window.Object.prototype.try = function objectTry(methodName, ...parameters) {
  const context = this[methodName];
  const type = typeof context;

  if (type === 'function') {
    return this[methodName](...parameters) || false;
  }

  if (type === 'undefined') {
    return false;
  }

  return context;
};
