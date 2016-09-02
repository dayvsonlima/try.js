(function(root){
  "use strict";

  root.Object.prototype.try = function() {
    var context = this[arguments[0]],
        type = typeof context,
        functionArgs = [].slice.call(arguments, 1),
        result;

    if (type === 'function') {
        result = this[arguments[0]].apply(this, functionArgs);

        return !!result ? result : false;
    }

    if (type === 'undefined') {
        return false;
    }

    return context;
  };

})(window);
