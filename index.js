;(function () {

	"use strict";

	var currying = function currying(fn) {
		var fun = function fun() {
			for (var _len = arguments.length, orig = Array(_len), _key = 0; _key < _len; _key++) {
				orig[_key] = arguments[_key];
			}

			var inner = function inner() {
				for (var _len2 = arguments.length, val = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					val[_key2] = arguments[_key2];
				}
				return fun.apply(undefined, orig.concat(val));
			};

			inner.valueOf = function () {
				return fn.apply(undefined, orig).valueOf();
			};

			return inner;
		};

		return fun;
	};

	if (typeof module == 'object') {
		module.exports = currying
	} else {
		window.currying = currying
	}
})();
