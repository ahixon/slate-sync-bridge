(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("slate-sync-bridge", [], factory);
	else if(typeof exports === 'object')
		exports["slate-sync-bridge"] = factory();
	else
		root["slate-sync-bridge"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GROUP_LEFT_TO_RIGHT, GROUP_RIGHT_TO_LEFT, EXPRESSION_LEFT_TO_RIGHT, EXPRESSION_RIGHT_TO_LEFT;
/*
 * Character ranges of left-to-right characters.
 */
GROUP_LEFT_TO_RIGHT = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
    '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
    '\uFE00-\uFE6F\uFEFD-\uFFFF';
/*
 * Character ranges of right-to-left characters.
 */
GROUP_RIGHT_TO_LEFT = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
/*
 * Expression to match a left-to-right string.
 *
 * Matches the start of a string, followed by zero or
 * more non-right-to-left characters, followed by a
 * left-to-right character.
 */
EXPRESSION_LEFT_TO_RIGHT = new RegExp('^[^' + GROUP_RIGHT_TO_LEFT + ']*[' + GROUP_LEFT_TO_RIGHT + ']');
/*
 * Expression to match a right-to-left string.
 *
 * Matches the start of a string, followed by zero or
 * more non-left-to-right characters, followed by a
 * right-to-left character.
 */
EXPRESSION_RIGHT_TO_LEFT = new RegExp('^[^' + GROUP_LEFT_TO_RIGHT + ']*[' + GROUP_RIGHT_TO_LEFT + ']');
/**
 * Detect the direction of text.
 *
 * @param {string} value - value to stringify and check.
 * @return {string} - One of `"rtl"`, `"ltr"`, or
 *   `"neutral"`.
 */
function direction(value) {
    value = value.toString();
    if (EXPRESSION_RIGHT_TO_LEFT.test(value)) {
        return 'rtl';
    }
    if (EXPRESSION_LEFT_TO_RIGHT.test(value)) {
        return 'ltr';
    }
    return 'neutral';
}
/*
 * Expose `direction`.
 */
module.exports = direction;


/***/ }),

/***/ "./node_modules/esrever/esrever.js":
/*!*****************************************!*\
  !*** ./node_modules/esrever/esrever.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;
/*! https://mths.be/esrever v0.2.0 by @mathias */
;
(function (root) {
    // Detect free variables `exports`
    var freeExports =  true && exports;
    // Detect free variable `module`
    var freeModule =  true && module &&
        module.exports == freeExports && module;
    // Detect free variable `global`, from Node.js or Browserified code,
    // and use it as `root`
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
    }
    /*--------------------------------------------------------------------------*/
    var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
    var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
    var reverse = function (string) {
        // Step 1: deal with combining marks and astral symbols (surrogate pairs)
        string = string
            // Swap symbols with their combining marks so the combining marks go first
            .replace(regexSymbolWithCombiningMarks, function ($0, $1, $2) {
            // Reverse the combining marks so they will end up in the same order
            // later on (after another round of reversing)
            return reverse($2) + $1;
        })
            // Swap high and low surrogates so the low surrogates go first
            .replace(regexSurrogatePair, '$2$1');
        // Step 2: reverse the code units in the string
        var result = '';
        var index = string.length;
        while (index--) {
            result += string.charAt(index);
        }
        return result;
    };
    /*--------------------------------------------------------------------------*/
    var esrever = {
        'version': '0.2.0',
        'reverse': reverse
    };
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return esrever;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else { var key; }
}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
module.exports = function equal(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = isArray(a), arrB = isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!equal(a[i], b[i]))
                    return false;
            return true;
        }
        if (arrA != arrB)
            return false;
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA != dateB)
            return false;
        if (dateA && dateB)
            return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA != regexpB)
            return false;
        if (regexpA && regexpB)
            return a.toString() == b.toString();
        var keys = keyList(a);
        length = keys.length;
        if (length !== keyList(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!hasProp.call(b, keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            key = keys[i];
            if (!equal(a[key], b[key]))
                return false;
        }
        return true;
    }
    return a !== a && b !== b;
};


/***/ }),

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';
// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;
// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};
// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
    return { value: false };
}
function SetRef(ref) {
    if (ref) {
        ref.value = true;
    }
}
// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() { }
function ensureSize(iter) {
    if (iter.size === undefined) {
        iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
}
function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
        var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
        if ('' + uint32Index !== index || uint32Index === 4294967295) {
            return NaN;
        }
        index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
}
function returnTrue() {
    return true;
}
function wholeSlice(begin, end, size) {
    return (((begin === 0 && !isNeg(begin)) ||
        (size !== undefined && begin <= -size)) &&
        (end === undefined || (size !== undefined && end >= size)));
}
function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
}
function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
}
function resolveIndex(index, size, defaultIndex) {
    // Sanitize indices using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    return index === undefined
        ? defaultIndex
        : isNeg(index)
            ? size === Infinity
                ? size
                : Math.max(0, size + index) | 0
            : size === undefined || size === index
                ? index
                : Math.min(size, index) | 0;
}
function isNeg(value) {
    // Account for -0 which is negative, but not less than 0.
    return value < 0 || (value === 0 && 1 / value === -Infinity);
}
// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';
function isCollection(maybeCollection) {
    return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}
var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';
function isKeyed(maybeKeyed) {
    return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}
var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';
function isIndexed(maybeIndexed) {
    return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}
function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}
var Collection = function Collection(value) {
    return isCollection(value) ? value : Seq(value);
};
var KeyedCollection = /*@__PURE__*/ (function (Collection) {
    function KeyedCollection(value) {
        return isKeyed(value) ? value : KeyedSeq(value);
    }
    if (Collection)
        KeyedCollection.__proto__ = Collection;
    KeyedCollection.prototype = Object.create(Collection && Collection.prototype);
    KeyedCollection.prototype.constructor = KeyedCollection;
    return KeyedCollection;
}(Collection));
var IndexedCollection = /*@__PURE__*/ (function (Collection) {
    function IndexedCollection(value) {
        return isIndexed(value) ? value : IndexedSeq(value);
    }
    if (Collection)
        IndexedCollection.__proto__ = Collection;
    IndexedCollection.prototype = Object.create(Collection && Collection.prototype);
    IndexedCollection.prototype.constructor = IndexedCollection;
    return IndexedCollection;
}(Collection));
var SetCollection = /*@__PURE__*/ (function (Collection) {
    function SetCollection(value) {
        return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    if (Collection)
        SetCollection.__proto__ = Collection;
    SetCollection.prototype = Object.create(Collection && Collection.prototype);
    SetCollection.prototype.constructor = SetCollection;
    return SetCollection;
}(Collection));
Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;
var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';
function isSeq(maybeSeq) {
    return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}
var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';
function isRecord(maybeRecord) {
    return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}
function isImmutable(maybeImmutable) {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}
var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';
function isOrdered(maybeOrdered) {
    return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}
var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;
var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
var Iterator = function Iterator(next) {
    this.next = next;
};
Iterator.prototype.toString = function toString() {
    return '[Iterator]';
};
Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;
Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
    return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
};
function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult
        ? (iteratorResult.value = value)
        : (iteratorResult = {
            value: value,
            done: false,
        });
    return iteratorResult;
}
function iteratorDone() {
    return { value: undefined, done: true };
}
function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
}
function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
}
function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
}
function getIteratorFn(iterable) {
    var iteratorFn = iterable &&
        ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
            iterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
        return iteratorFn;
    }
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isArrayLike(value) {
    if (Array.isArray(value) || typeof value === 'string') {
        return true;
    }
    return (value &&
        typeof value === 'object' &&
        Number.isInteger(value.length) &&
        value.length >= 0 &&
        (value.length === 0
            ? // Only {length: 0} is considered Array-like.
                Object.keys(value).length === 1
            : // An object is only Array-like if it has a property where the last value
                // in the array-like may be found (which could be undefined).
                value.hasOwnProperty(value.length - 1)));
}
var Seq = /*@__PURE__*/ (function (Collection$$1) {
    function Seq(value) {
        return value === null || value === undefined
            ? emptySequence()
            : isImmutable(value)
                ? value.toSeq()
                : seqFromValue(value);
    }
    if (Collection$$1)
        Seq.__proto__ = Collection$$1;
    Seq.prototype = Object.create(Collection$$1 && Collection$$1.prototype);
    Seq.prototype.constructor = Seq;
    Seq.prototype.toSeq = function toSeq() {
        return this;
    };
    Seq.prototype.toString = function toString() {
        return this.__toString('Seq {', '}');
    };
    Seq.prototype.cacheResult = function cacheResult() {
        if (!this._cache && this.__iterateUncached) {
            this._cache = this.entrySeq().toArray();
            this.size = this._cache.length;
        }
        return this;
    };
    // abstract __iterateUncached(fn, reverse)
    Seq.prototype.__iterate = function __iterate(fn, reverse) {
        var cache = this._cache;
        if (cache) {
            var size = cache.length;
            var i = 0;
            while (i !== size) {
                var entry = cache[reverse ? size - ++i : i++];
                if (fn(entry[1], entry[0], this) === false) {
                    break;
                }
            }
            return i;
        }
        return this.__iterateUncached(fn, reverse);
    };
    // abstract __iteratorUncached(type, reverse)
    Seq.prototype.__iterator = function __iterator(type, reverse) {
        var cache = this._cache;
        if (cache) {
            var size = cache.length;
            var i = 0;
            return new Iterator(function () {
                if (i === size) {
                    return iteratorDone();
                }
                var entry = cache[reverse ? size - ++i : i++];
                return iteratorValue(type, entry[0], entry[1]);
            });
        }
        return this.__iteratorUncached(type, reverse);
    };
    return Seq;
}(Collection));
var KeyedSeq = /*@__PURE__*/ (function (Seq) {
    function KeyedSeq(value) {
        return value === null || value === undefined
            ? emptySequence().toKeyedSeq()
            : isCollection(value)
                ? isKeyed(value)
                    ? value.toSeq()
                    : value.fromEntrySeq()
                : isRecord(value)
                    ? value.toSeq()
                    : keyedSeqFromValue(value);
    }
    if (Seq)
        KeyedSeq.__proto__ = Seq;
    KeyedSeq.prototype = Object.create(Seq && Seq.prototype);
    KeyedSeq.prototype.constructor = KeyedSeq;
    KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq() {
        return this;
    };
    return KeyedSeq;
}(Seq));
var IndexedSeq = /*@__PURE__*/ (function (Seq) {
    function IndexedSeq(value) {
        return value === null || value === undefined
            ? emptySequence()
            : isCollection(value)
                ? isKeyed(value)
                    ? value.entrySeq()
                    : value.toIndexedSeq()
                : isRecord(value)
                    ? value.toSeq().entrySeq()
                    : indexedSeqFromValue(value);
    }
    if (Seq)
        IndexedSeq.__proto__ = Seq;
    IndexedSeq.prototype = Object.create(Seq && Seq.prototype);
    IndexedSeq.prototype.constructor = IndexedSeq;
    IndexedSeq.of = function of( /*...values*/) {
        return IndexedSeq(arguments);
    };
    IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq() {
        return this;
    };
    IndexedSeq.prototype.toString = function toString() {
        return this.__toString('Seq [', ']');
    };
    return IndexedSeq;
}(Seq));
var SetSeq = /*@__PURE__*/ (function (Seq) {
    function SetSeq(value) {
        return (isCollection(value) && !isAssociative(value)
            ? value
            : IndexedSeq(value)).toSetSeq();
    }
    if (Seq)
        SetSeq.__proto__ = Seq;
    SetSeq.prototype = Object.create(Seq && Seq.prototype);
    SetSeq.prototype.constructor = SetSeq;
    SetSeq.of = function of( /*...values*/) {
        return SetSeq(arguments);
    };
    SetSeq.prototype.toSetSeq = function toSetSeq() {
        return this;
    };
    return SetSeq;
}(Seq));
Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;
Seq.prototype[IS_SEQ_SYMBOL] = true;
// #pragma Root Sequences
var ArraySeq = /*@__PURE__*/ (function (IndexedSeq) {
    function ArraySeq(array) {
        this._array = array;
        this.size = array.length;
    }
    if (IndexedSeq)
        ArraySeq.__proto__ = IndexedSeq;
    ArraySeq.prototype = Object.create(IndexedSeq && IndexedSeq.prototype);
    ArraySeq.prototype.constructor = ArraySeq;
    ArraySeq.prototype.get = function get(index, notSetValue) {
        return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq.prototype.__iterate = function __iterate(fn, reverse) {
        var array = this._array;
        var size = array.length;
        var i = 0;
        while (i !== size) {
            var ii = reverse ? size - ++i : i++;
            if (fn(array[ii], ii, this) === false) {
                break;
            }
        }
        return i;
    };
    ArraySeq.prototype.__iterator = function __iterator(type, reverse) {
        var array = this._array;
        var size = array.length;
        var i = 0;
        return new Iterator(function () {
            if (i === size) {
                return iteratorDone();
            }
            var ii = reverse ? size - ++i : i++;
            return iteratorValue(type, ii, array[ii]);
        });
    };
    return ArraySeq;
}(IndexedSeq));
var ObjectSeq = /*@__PURE__*/ (function (KeyedSeq) {
    function ObjectSeq(object) {
        var keys = Object.keys(object);
        this._object = object;
        this._keys = keys;
        this.size = keys.length;
    }
    if (KeyedSeq)
        ObjectSeq.__proto__ = KeyedSeq;
    ObjectSeq.prototype = Object.create(KeyedSeq && KeyedSeq.prototype);
    ObjectSeq.prototype.constructor = ObjectSeq;
    ObjectSeq.prototype.get = function get(key, notSetValue) {
        if (notSetValue !== undefined && !this.has(key)) {
            return notSetValue;
        }
        return this._object[key];
    };
    ObjectSeq.prototype.has = function has(key) {
        return hasOwnProperty.call(this._object, key);
    };
    ObjectSeq.prototype.__iterate = function __iterate(fn, reverse) {
        var object = this._object;
        var keys = this._keys;
        var size = keys.length;
        var i = 0;
        while (i !== size) {
            var key = keys[reverse ? size - ++i : i++];
            if (fn(object[key], key, this) === false) {
                break;
            }
        }
        return i;
    };
    ObjectSeq.prototype.__iterator = function __iterator(type, reverse) {
        var object = this._object;
        var keys = this._keys;
        var size = keys.length;
        var i = 0;
        return new Iterator(function () {
            if (i === size) {
                return iteratorDone();
            }
            var key = keys[reverse ? size - ++i : i++];
            return iteratorValue(type, key, object[key]);
        });
    };
    return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
var CollectionSeq = /*@__PURE__*/ (function (IndexedSeq) {
    function CollectionSeq(collection) {
        this._collection = collection;
        this.size = collection.length || collection.size;
    }
    if (IndexedSeq)
        CollectionSeq.__proto__ = IndexedSeq;
    CollectionSeq.prototype = Object.create(IndexedSeq && IndexedSeq.prototype);
    CollectionSeq.prototype.constructor = CollectionSeq;
    CollectionSeq.prototype.__iterateUncached = function __iterateUncached(fn, reverse) {
        if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
        }
        var collection = this._collection;
        var iterator = getIterator(collection);
        var iterations = 0;
        if (isIterator(iterator)) {
            var step;
            while (!(step = iterator.next()).done) {
                if (fn(step.value, iterations++, this) === false) {
                    break;
                }
            }
        }
        return iterations;
    };
    CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached(type, reverse) {
        if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
        }
        var collection = this._collection;
        var iterator = getIterator(collection);
        if (!isIterator(iterator)) {
            return new Iterator(iteratorDone);
        }
        var iterations = 0;
        return new Iterator(function () {
            var step = iterator.next();
            return step.done ? step : iteratorValue(type, iterations++, step.value);
        });
    };
    return CollectionSeq;
}(IndexedSeq));
// # pragma Helper functions
var EMPTY_SEQ;
function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}
function keyedSeqFromValue(value) {
    var seq = Array.isArray(value)
        ? new ArraySeq(value)
        : hasIterator(value)
            ? new CollectionSeq(value)
            : undefined;
    if (seq) {
        return seq.fromEntrySeq();
    }
    if (typeof value === 'object') {
        return new ObjectSeq(value);
    }
    throw new TypeError('Expected Array or collection object of [k, v] entries, or keyed object: ' +
        value);
}
function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
        return seq;
    }
    throw new TypeError('Expected Array or collection object of values: ' + value);
}
function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
        return seq;
    }
    if (typeof value === 'object') {
        return new ObjectSeq(value);
    }
    throw new TypeError('Expected Array or collection object of values, or keyed object: ' + value);
}
function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value)
        ? new ArraySeq(value)
        : hasIterator(value)
            ? new CollectionSeq(value)
            : undefined;
}
var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';
function isMap(maybeMap) {
    return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}
function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}
function isValueObject(maybeValue) {
    return Boolean(maybeValue &&
        typeof maybeValue.equals === 'function' &&
        typeof maybeValue.hashCode === 'function');
}
/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
    }
    if (!valueA || !valueB) {
        return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
        valueA = valueA.valueOf();
        valueB = valueB.valueOf();
        if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
            return true;
        }
        if (!valueA || !valueB) {
            return false;
        }
    }
    return !!(isValueObject(valueA) &&
        isValueObject(valueB) &&
        valueA.equals(valueB));
}
var imul = typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
    };
// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}
var defaultValueOf = Object.prototype.valueOf;
function hash(o) {
    switch (typeof o) {
        case 'boolean':
            // The hash values for built-in constants are a 1 value for each 5-byte
            // shift region expect for the first, which encodes the value. This
            // reduces the odds of a hash collision for these common values.
            return o ? 0x42108421 : 0x42108420;
        case 'number':
            return hashNumber(o);
        case 'string':
            return o.length > STRING_HASH_CACHE_MIN_STRLEN
                ? cachedHashString(o)
                : hashString(o);
        case 'object':
        case 'function':
            if (o === null) {
                return 0x42108422;
            }
            if (typeof o.hashCode === 'function') {
                // Drop any high bits from accidentally long hash codes.
                return smi(o.hashCode(o));
            }
            if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
                o = o.valueOf(o);
            }
            return hashJSObj(o);
        case 'undefined':
            return 0x42108423;
        default:
            if (typeof o.toString === 'function') {
                return hashString(o.toString());
            }
            throw new Error('Value type ' + typeof o + ' cannot be hashed.');
    }
}
// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
    if (n !== n || n === Infinity) {
        return 0;
    }
    var hash = n | 0;
    if (hash !== n) {
        hash ^= n * 0xffffffff;
    }
    while (n > 0xffffffff) {
        n /= 0xffffffff;
        hash ^= n;
    }
    return smi(hash);
}
function cachedHashString(string) {
    var hashed = stringHashCache[string];
    if (hashed === undefined) {
        hashed = hashString(string);
        if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
            STRING_HASH_CACHE_SIZE = 0;
            stringHashCache = {};
        }
        STRING_HASH_CACHE_SIZE++;
        stringHashCache[string] = hashed;
    }
    return hashed;
}
// http://jsperf.com/hashing-strings
function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hashed = 0;
    for (var ii = 0; ii < string.length; ii++) {
        hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
    }
    return smi(hashed);
}
function hashJSObj(obj) {
    var hashed;
    if (usingWeakMap) {
        hashed = weakMap.get(obj);
        if (hashed !== undefined) {
            return hashed;
        }
    }
    hashed = obj[UID_HASH_KEY];
    if (hashed !== undefined) {
        return hashed;
    }
    if (!canDefineProperty) {
        hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
        if (hashed !== undefined) {
            return hashed;
        }
        hashed = getIENodeHash(obj);
        if (hashed !== undefined) {
            return hashed;
        }
    }
    hashed = ++objHashUID;
    if (objHashUID & 0x40000000) {
        objHashUID = 0;
    }
    if (usingWeakMap) {
        weakMap.set(obj, hashed);
    }
    else if (isExtensible !== undefined && isExtensible(obj) === false) {
        throw new Error('Non-extensible objects are not allowed as keys.');
    }
    else if (canDefineProperty) {
        Object.defineProperty(obj, UID_HASH_KEY, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: hashed,
        });
    }
    else if (obj.propertyIsEnumerable !== undefined &&
        obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
        // Since we can't define a non-enumerable property on the object
        // we'll hijack one of the less-used non-enumerable properties to
        // save our hash on it. Since this is a function it will not show up in
        // `JSON.stringify` which is what we want.
        obj.propertyIsEnumerable = function () {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
    }
    else if (obj.nodeType !== undefined) {
        // At this point we couldn't get the IE `uniqueID` to use as a hash
        // and we couldn't use a non-enumerable property to exploit the
        // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
        // itself.
        obj[UID_HASH_KEY] = hashed;
    }
    else {
        throw new Error('Unable to set a non-enumerable property on object.');
    }
    return hashed;
}
// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;
// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function () {
    try {
        Object.defineProperty({}, '@', {});
        return true;
    }
    catch (e) {
        return false;
    }
})();
// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
        switch (node.nodeType) {
            case 1: // Element
                return node.uniqueID;
            case 9: // Document
                return node.documentElement && node.documentElement.uniqueID;
        }
    }
}
// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
    weakMap = new WeakMap();
}
var objHashUID = 0;
var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
}
var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};
var ToKeyedSequence = /*@__PURE__*/ (function (KeyedSeq$$1) {
    function ToKeyedSequence(indexed, useKeys) {
        this._iter = indexed;
        this._useKeys = useKeys;
        this.size = indexed.size;
    }
    if (KeyedSeq$$1)
        ToKeyedSequence.__proto__ = KeyedSeq$$1;
    ToKeyedSequence.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
    ToKeyedSequence.prototype.constructor = ToKeyedSequence;
    ToKeyedSequence.prototype.get = function get(key, notSetValue) {
        return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence.prototype.has = function has(key) {
        return this._iter.has(key);
    };
    ToKeyedSequence.prototype.valueSeq = function valueSeq() {
        return this._iter.valueSeq();
    };
    ToKeyedSequence.prototype.reverse = function reverse() {
        var this$1 = this;
        var reversedSequence = reverseFactory(this, true);
        if (!this._useKeys) {
            reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
        }
        return reversedSequence;
    };
    ToKeyedSequence.prototype.map = function map(mapper, context) {
        var this$1 = this;
        var mappedSequence = mapFactory(this, mapper, context);
        if (!this._useKeys) {
            mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
        }
        return mappedSequence;
    };
    ToKeyedSequence.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
    };
    ToKeyedSequence.prototype.__iterator = function __iterator(type, reverse) {
        return this._iter.__iterator(type, reverse);
    };
    return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
var ToIndexedSequence = /*@__PURE__*/ (function (IndexedSeq$$1) {
    function ToIndexedSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
    }
    if (IndexedSeq$$1)
        ToIndexedSequence.__proto__ = IndexedSeq$$1;
    ToIndexedSequence.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    ToIndexedSequence.prototype.constructor = ToIndexedSequence;
    ToIndexedSequence.prototype.includes = function includes(value) {
        return this._iter.includes(value);
    };
    ToIndexedSequence.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        var i = 0;
        reverse && ensureSize(this);
        return this._iter.__iterate(function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); }, reverse);
    };
    ToIndexedSequence.prototype.__iterator = function __iterator(type, reverse) {
        var this$1 = this;
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var i = 0;
        reverse && ensureSize(this);
        return new Iterator(function () {
            var step = iterator.next();
            return step.done
                ? step
                : iteratorValue(type, reverse ? this$1.size - ++i : i++, step.value, step);
        });
    };
    return ToIndexedSequence;
}(IndexedSeq));
var ToSetSequence = /*@__PURE__*/ (function (SetSeq$$1) {
    function ToSetSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
    }
    if (SetSeq$$1)
        ToSetSequence.__proto__ = SetSeq$$1;
    ToSetSequence.prototype = Object.create(SetSeq$$1 && SetSeq$$1.prototype);
    ToSetSequence.prototype.constructor = ToSetSequence;
    ToSetSequence.prototype.has = function has(key) {
        return this._iter.includes(key);
    };
    ToSetSequence.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
    };
    ToSetSequence.prototype.__iterator = function __iterator(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function () {
            var step = iterator.next();
            return step.done
                ? step
                : iteratorValue(type, step.value, step.value, step);
        });
    };
    return ToSetSequence;
}(SetSeq));
var FromEntriesSequence = /*@__PURE__*/ (function (KeyedSeq$$1) {
    function FromEntriesSequence(entries) {
        this._iter = entries;
        this.size = entries.size;
    }
    if (KeyedSeq$$1)
        FromEntriesSequence.__proto__ = KeyedSeq$$1;
    FromEntriesSequence.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
    FromEntriesSequence.prototype.constructor = FromEntriesSequence;
    FromEntriesSequence.prototype.entrySeq = function entrySeq() {
        return this._iter.toSeq();
    };
    FromEntriesSequence.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        return this._iter.__iterate(function (entry) {
            // Check if entry exists first so array access doesn't throw for holes
            // in the parent iteration.
            if (entry) {
                validateEntry(entry);
                var indexedCollection = isCollection(entry);
                return fn(indexedCollection ? entry.get(1) : entry[1], indexedCollection ? entry.get(0) : entry[0], this$1);
            }
        }, reverse);
    };
    FromEntriesSequence.prototype.__iterator = function __iterator(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function () {
            while (true) {
                var step = iterator.next();
                if (step.done) {
                    return step;
                }
                var entry = step.value;
                // Check if entry exists first so array access doesn't throw for holes
                // in the parent iteration.
                if (entry) {
                    validateEntry(entry);
                    var indexedCollection = isCollection(entry);
                    return iteratorValue(type, indexedCollection ? entry.get(0) : entry[0], indexedCollection ? entry.get(1) : entry[1], step);
                }
            }
        });
    };
    return FromEntriesSequence;
}(KeyedSeq));
ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
function flipFactory(collection) {
    var flipSequence = makeSequence(collection);
    flipSequence._iter = collection;
    flipSequence.size = collection.size;
    flipSequence.flip = function () { return collection; };
    flipSequence.reverse = function () {
        var reversedSequence = collection.reverse.apply(this); // super.reverse()
        reversedSequence.flip = function () { return collection.reverse(); };
        return reversedSequence;
    };
    flipSequence.has = function (key) { return collection.includes(key); };
    flipSequence.includes = function (key) { return collection.has(key); };
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
    };
    flipSequence.__iteratorUncached = function (type, reverse) {
        if (type === ITERATE_ENTRIES) {
            var iterator = collection.__iterator(type, reverse);
            return new Iterator(function () {
                var step = iterator.next();
                if (!step.done) {
                    var k = step.value[0];
                    step.value[0] = step.value[1];
                    step.value[1] = k;
                }
                return step;
            });
        }
        return collection.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
    };
    return flipSequence;
}
function mapFactory(collection, mapper, context) {
    var mappedSequence = makeSequence(collection);
    mappedSequence.size = collection.size;
    mappedSequence.has = function (key) { return collection.has(key); };
    mappedSequence.get = function (key, notSetValue) {
        var v = collection.get(key, NOT_SET);
        return v === NOT_SET
            ? notSetValue
            : mapper.call(context, v, key, collection);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        return collection.__iterate(function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; }, reverse);
    };
    mappedSequence.__iteratorUncached = function (type, reverse) {
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        return new Iterator(function () {
            var step = iterator.next();
            if (step.done) {
                return step;
            }
            var entry = step.value;
            var key = entry[0];
            return iteratorValue(type, key, mapper.call(context, entry[1], key, collection), step);
        });
    };
    return mappedSequence;
}
function reverseFactory(collection, useKeys) {
    var this$1 = this;
    var reversedSequence = makeSequence(collection);
    reversedSequence._iter = collection;
    reversedSequence.size = collection.size;
    reversedSequence.reverse = function () { return collection; };
    if (collection.flip) {
        reversedSequence.flip = function () {
            var flipSequence = flipFactory(collection);
            flipSequence.reverse = function () { return collection.flip(); };
            return flipSequence;
        };
    }
    reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
    reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
    reversedSequence.includes = function (value) { return collection.includes(value); };
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {
        var this$1 = this;
        var i = 0;
        reverse && ensureSize(collection);
        return collection.__iterate(function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); }, !reverse);
    };
    reversedSequence.__iterator = function (type, reverse) {
        var i = 0;
        reverse && ensureSize(collection);
        var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
        return new Iterator(function () {
            var step = iterator.next();
            if (step.done) {
                return step;
            }
            var entry = step.value;
            return iteratorValue(type, useKeys ? entry[0] : reverse ? this$1.size - ++i : i++, entry[1], step);
        });
    };
    return reversedSequence;
}
function filterFactory(collection, predicate, context, useKeys) {
    var filterSequence = makeSequence(collection);
    if (useKeys) {
        filterSequence.has = function (key) {
            var v = collection.get(key, NOT_SET);
            return v !== NOT_SET && !!predicate.call(context, v, key, collection);
        };
        filterSequence.get = function (key, notSetValue) {
            var v = collection.get(key, NOT_SET);
            return v !== NOT_SET && predicate.call(context, v, key, collection)
                ? v
                : notSetValue;
        };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        var iterations = 0;
        collection.__iterate(function (v, k, c) {
            if (predicate.call(context, v, k, c)) {
                iterations++;
                return fn(v, useKeys ? k : iterations - 1, this$1);
            }
        }, reverse);
        return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var iterations = 0;
        return new Iterator(function () {
            while (true) {
                var step = iterator.next();
                if (step.done) {
                    return step;
                }
                var entry = step.value;
                var key = entry[0];
                var value = entry[1];
                if (predicate.call(context, value, key, collection)) {
                    return iteratorValue(type, useKeys ? key : iterations++, value, step);
                }
            }
        });
    };
    return filterSequence;
}
function countByFactory(collection, grouper, context) {
    var groups = Map().asMutable();
    collection.__iterate(function (v, k) {
        groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
    });
    return groups.asImmutable();
}
function groupByFactory(collection, grouper, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
    collection.__iterate(function (v, k) {
        groups.update(grouper.call(context, v, k, collection), function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); });
    });
    var coerce = collectionClass(collection);
    return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}
function sliceFactory(collection, begin, end, useKeys) {
    var originalSize = collection.size;
    if (wholeSlice(begin, end, originalSize)) {
        return collection;
    }
    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);
    // begin or end will be NaN if they were provided as negative numbers and
    // this collection's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
        return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
    }
    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
        sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }
    var sliceSeq = makeSequence(collection);
    // If collection.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size =
        sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;
    if (!useKeys && isSeq(collection) && sliceSize >= 0) {
        sliceSeq.get = function (index, notSetValue) {
            index = wrapIndex(this, index);
            return index >= 0 && index < sliceSize
                ? collection.get(index + resolvedBegin, notSetValue)
                : notSetValue;
        };
    }
    sliceSeq.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        if (sliceSize === 0) {
            return 0;
        }
        if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
        }
        var skipped = 0;
        var isSkipping = true;
        var iterations = 0;
        collection.__iterate(function (v, k) {
            if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
                iterations++;
                return (fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
                    iterations !== sliceSize);
            }
        });
        return iterations;
    };
    sliceSeq.__iteratorUncached = function (type, reverse) {
        if (sliceSize !== 0 && reverse) {
            return this.cacheResult().__iterator(type, reverse);
        }
        // Don't bother instantiating parent iterator if taking 0.
        if (sliceSize === 0) {
            return new Iterator(iteratorDone);
        }
        var iterator = collection.__iterator(type, reverse);
        var skipped = 0;
        var iterations = 0;
        return new Iterator(function () {
            while (skipped++ < resolvedBegin) {
                iterator.next();
            }
            if (++iterations > sliceSize) {
                return iteratorDone();
            }
            var step = iterator.next();
            if (useKeys || type === ITERATE_VALUES || step.done) {
                return step;
            }
            if (type === ITERATE_KEYS) {
                return iteratorValue(type, iterations - 1, undefined, step);
            }
            return iteratorValue(type, iterations - 1, step.value[1], step);
        });
    };
    return sliceSeq;
}
function takeWhileFactory(collection, predicate, context) {
    var takeSequence = makeSequence(collection);
    takeSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
        }
        var iterations = 0;
        collection.__iterate(function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); });
        return iterations;
    };
    takeSequence.__iteratorUncached = function (type, reverse) {
        var this$1 = this;
        if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var iterating = true;
        return new Iterator(function () {
            if (!iterating) {
                return iteratorDone();
            }
            var step = iterator.next();
            if (step.done) {
                return step;
            }
            var entry = step.value;
            var k = entry[0];
            var v = entry[1];
            if (!predicate.call(context, v, k, this$1)) {
                iterating = false;
                return iteratorDone();
            }
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
    };
    return takeSequence;
}
function skipWhileFactory(collection, predicate, context, useKeys) {
    var skipSequence = makeSequence(collection);
    skipSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
        }
        var isSkipping = true;
        var iterations = 0;
        collection.__iterate(function (v, k, c) {
            if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
                iterations++;
                return fn(v, useKeys ? k : iterations - 1, this$1);
            }
        });
        return iterations;
    };
    skipSequence.__iteratorUncached = function (type, reverse) {
        var this$1 = this;
        if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var skipping = true;
        var iterations = 0;
        return new Iterator(function () {
            var step;
            var k;
            var v;
            do {
                step = iterator.next();
                if (step.done) {
                    if (useKeys || type === ITERATE_VALUES) {
                        return step;
                    }
                    if (type === ITERATE_KEYS) {
                        return iteratorValue(type, iterations++, undefined, step);
                    }
                    return iteratorValue(type, iterations++, step.value[1], step);
                }
                var entry = step.value;
                k = entry[0];
                v = entry[1];
                skipping && (skipping = predicate.call(context, v, k, this$1));
            } while (skipping);
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
    };
    return skipSequence;
}
function concatFactory(collection, values) {
    var isKeyedCollection = isKeyed(collection);
    var iters = [collection]
        .concat(values)
        .map(function (v) {
        if (!isCollection(v)) {
            v = isKeyedCollection
                ? keyedSeqFromValue(v)
                : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
        }
        else if (isKeyedCollection) {
            v = KeyedCollection(v);
        }
        return v;
    })
        .filter(function (v) { return v.size !== 0; });
    if (iters.length === 0) {
        return collection;
    }
    if (iters.length === 1) {
        var singleton = iters[0];
        if (singleton === collection ||
            (isKeyedCollection && isKeyed(singleton)) ||
            (isIndexed(collection) && isIndexed(singleton))) {
            return singleton;
        }
    }
    var concatSeq = new ArraySeq(iters);
    if (isKeyedCollection) {
        concatSeq = concatSeq.toKeyedSeq();
    }
    else if (!isIndexed(collection)) {
        concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function (sum, seq) {
        if (sum !== undefined) {
            var size = seq.size;
            if (size !== undefined) {
                return sum + size;
            }
        }
    }, 0);
    return concatSeq;
}
function flattenFactory(collection, depth, useKeys) {
    var flatSequence = makeSequence(collection);
    flatSequence.__iterateUncached = function (fn, reverse) {
        if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
        }
        var iterations = 0;
        var stopped = false;
        function flatDeep(iter, currentDepth) {
            iter.__iterate(function (v, k) {
                if ((!depth || currentDepth < depth) && isCollection(v)) {
                    flatDeep(v, currentDepth + 1);
                }
                else {
                    iterations++;
                    if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
                        stopped = true;
                    }
                }
                return !stopped;
            }, reverse);
        }
        flatDeep(collection, 0);
        return iterations;
    };
    flatSequence.__iteratorUncached = function (type, reverse) {
        if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = collection.__iterator(type, reverse);
        var stack = [];
        var iterations = 0;
        return new Iterator(function () {
            while (iterator) {
                var step = iterator.next();
                if (step.done !== false) {
                    iterator = stack.pop();
                    continue;
                }
                var v = step.value;
                if (type === ITERATE_ENTRIES) {
                    v = v[1];
                }
                if ((!depth || stack.length < depth) && isCollection(v)) {
                    stack.push(iterator);
                    iterator = v.__iterator(type, reverse);
                }
                else {
                    return useKeys ? step : iteratorValue(type, iterations++, v, step);
                }
            }
            return iteratorDone();
        });
    };
    return flatSequence;
}
function flatMapFactory(collection, mapper, context) {
    var coerce = collectionClass(collection);
    return collection
        .toSeq()
        .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
        .flatten(true);
}
function interposeFactory(collection, separator) {
    var interposedSequence = makeSequence(collection);
    interposedSequence.size = collection.size && collection.size * 2 - 1;
    interposedSequence.__iterateUncached = function (fn, reverse) {
        var this$1 = this;
        var iterations = 0;
        collection.__iterate(function (v) {
            return (!iterations || fn(separator, iterations++, this$1) !== false) &&
                fn(v, iterations++, this$1) !== false;
        }, reverse);
        return iterations;
    };
    interposedSequence.__iteratorUncached = function (type, reverse) {
        var iterator = collection.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        var step;
        return new Iterator(function () {
            if (!step || iterations % 2) {
                step = iterator.next();
                if (step.done) {
                    return step;
                }
            }
            return iterations % 2
                ? iteratorValue(type, iterations++, separator)
                : iteratorValue(type, iterations++, step.value, step);
        });
    };
    return interposedSequence;
}
function sortFactory(collection, comparator, mapper) {
    if (!comparator) {
        comparator = defaultComparator;
    }
    var isKeyedCollection = isKeyed(collection);
    var index = 0;
    var entries = collection
        .toSeq()
        .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
        .valueSeq()
        .toArray();
    entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(isKeyedCollection
        ? function (v, i) {
            entries[i].length = 2;
        }
        : function (v, i) {
            entries[i] = v[1];
        });
    return isKeyedCollection
        ? KeyedSeq(entries)
        : isIndexed(collection)
            ? IndexedSeq(entries)
            : SetSeq(entries);
}
function maxFactory(collection, comparator, mapper) {
    if (!comparator) {
        comparator = defaultComparator;
    }
    if (mapper) {
        var entry = collection
            .toSeq()
            .map(function (v, k) { return [v, mapper(v, k, collection)]; })
            .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
        return entry && entry[0];
    }
    return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}
function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return ((comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
        comp > 0);
}
function zipWithFactory(keyIter, zipper, iters, zipAll) {
    var zipSequence = makeSequence(keyIter);
    var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
    zipSequence.size = zipAll ? sizes.max() : sizes.min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function (fn, reverse) {
        /* generic:
        var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
        var step;
        var iterations = 0;
        while (!(step = iterator.next()).done) {
          iterations++;
          if (fn(step.value[1], step.value[0], this) === false) {
            break;
          }
        }
        return iterations;
        */
        // indexed:
        var iterator = this.__iterator(ITERATE_VALUES, reverse);
        var step;
        var iterations = 0;
        while (!(step = iterator.next()).done) {
            if (fn(step.value, iterations++, this) === false) {
                break;
            }
        }
        return iterations;
    };
    zipSequence.__iteratorUncached = function (type, reverse) {
        var iterators = iters.map(function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); });
        var iterations = 0;
        var isDone = false;
        return new Iterator(function () {
            var steps;
            if (!isDone) {
                steps = iterators.map(function (i) { return i.next(); });
                isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
            }
            if (isDone) {
                return iteratorDone();
            }
            return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function (s) { return s.value; })));
        });
    };
    return zipSequence;
}
// #pragma Helper Functions
function reify(iter, seq) {
    return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}
function validateEntry(entry) {
    if (entry !== Object(entry)) {
        throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
}
function collectionClass(collection) {
    return isKeyed(collection)
        ? KeyedCollection
        : isIndexed(collection)
            ? IndexedCollection
            : SetCollection;
}
function makeSequence(collection) {
    return Object.create((isKeyed(collection)
        ? KeyedSeq
        : isIndexed(collection)
            ? IndexedSeq
            : SetSeq).prototype);
}
function cacheResultThrough() {
    if (this._iter.cacheResult) {
        this._iter.cacheResult();
        this.size = this._iter.size;
        return this;
    }
    return Seq.prototype.cacheResult.call(this);
}
function defaultComparator(a, b) {
    if (a === undefined && b === undefined) {
        return 0;
    }
    if (a === undefined) {
        return 1;
    }
    if (b === undefined) {
        return -1;
    }
    return a > b ? 1 : a < b ? -1 : 0;
}
// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
        newArr[ii] = arr[ii + offset];
    }
    return newArr;
}
function invariant(condition, error) {
    if (!condition) {
        throw new Error(error);
    }
}
function assertNotInfinite(size) {
    invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
}
function coerceKeyPath(keyPath) {
    if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
        return keyPath;
    }
    if (isOrdered(keyPath)) {
        return keyPath.toArray();
    }
    throw new TypeError('Invalid keyPath: expected Ordered Collection or Array: ' + keyPath);
}
function isPlainObj(value) {
    return (value &&
        (typeof value.constructor !== 'function' ||
            value.constructor.name === 'Object'));
}
/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
    return (typeof value === 'object' &&
        (isImmutable(value) || Array.isArray(value) || isPlainObj(value)));
}
/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
    try {
        return typeof value === 'string' ? JSON.stringify(value) : String(value);
    }
    catch (_ignoreError) {
        return JSON.stringify(value);
    }
}
function has(collection, key) {
    return isImmutable(collection)
        ? collection.has(key)
        : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}
function get(collection, key, notSetValue) {
    return isImmutable(collection)
        ? collection.get(key, notSetValue)
        : !has(collection, key)
            ? notSetValue
            : typeof collection.get === 'function'
                ? collection.get(key)
                : collection[key];
}
function shallowCopy(from) {
    if (Array.isArray(from)) {
        return arrCopy(from);
    }
    var to = {};
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
        }
    }
    return to;
}
function remove(collection, key) {
    if (!isDataStructure(collection)) {
        throw new TypeError('Cannot update non-data-structure value: ' + collection);
    }
    if (isImmutable(collection)) {
        if (!collection.remove) {
            throw new TypeError('Cannot update immutable value without .remove() method: ' + collection);
        }
        return collection.remove(key);
    }
    if (!hasOwnProperty.call(collection, key)) {
        return collection;
    }
    var collectionCopy = shallowCopy(collection);
    if (Array.isArray(collectionCopy)) {
        collectionCopy.splice(key, 1);
    }
    else {
        delete collectionCopy[key];
    }
    return collectionCopy;
}
function set(collection, key, value) {
    if (!isDataStructure(collection)) {
        throw new TypeError('Cannot update non-data-structure value: ' + collection);
    }
    if (isImmutable(collection)) {
        if (!collection.set) {
            throw new TypeError('Cannot update immutable value without .set() method: ' + collection);
        }
        return collection.set(key, value);
    }
    if (hasOwnProperty.call(collection, key) && value === collection[key]) {
        return collection;
    }
    var collectionCopy = shallowCopy(collection);
    collectionCopy[key] = value;
    return collectionCopy;
}
function updateIn(collection, keyPath, notSetValue, updater) {
    if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
    }
    var updatedValue = updateInDeeply(isImmutable(collection), collection, coerceKeyPath(keyPath), 0, notSetValue, updater);
    return updatedValue === NOT_SET ? notSetValue : updatedValue;
}
function updateInDeeply(inImmutable, existing, keyPath, i, notSetValue, updater) {
    var wasNotSet = existing === NOT_SET;
    if (i === keyPath.length) {
        var existingValue = wasNotSet ? notSetValue : existing;
        var newValue = updater(existingValue);
        return newValue === existingValue ? existing : newValue;
    }
    if (!wasNotSet && !isDataStructure(existing)) {
        throw new TypeError('Cannot update within non-data-structure value in path [' +
            keyPath.slice(0, i).map(quoteString) +
            ']: ' +
            existing);
    }
    var key = keyPath[i];
    var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
    var nextUpdated = updateInDeeply(nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting), nextExisting, keyPath, i + 1, notSetValue, updater);
    return nextUpdated === nextExisting
        ? existing
        : nextUpdated === NOT_SET
            ? remove(existing, key)
            : set(wasNotSet ? (inImmutable ? emptyMap() : {}) : existing, key, nextUpdated);
}
function setIn(collection, keyPath, value) {
    return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}
function setIn$1(keyPath, v) {
    return setIn(this, keyPath, v);
}
function removeIn(collection, keyPath) {
    return updateIn(collection, keyPath, function () { return NOT_SET; });
}
function deleteIn(keyPath) {
    return removeIn(this, keyPath);
}
function update(collection, key, notSetValue, updater) {
    return updateIn(collection, [key], notSetValue, updater);
}
function update$1(key, notSetValue, updater) {
    return arguments.length === 1
        ? key(this)
        : update(this, key, notSetValue, updater);
}
function updateIn$1(keyPath, notSetValue, updater) {
    return updateIn(this, keyPath, notSetValue, updater);
}
function merge() {
    var iters = [], len = arguments.length;
    while (len--)
        iters[len] = arguments[len];
    return mergeIntoKeyedWith(this, iters);
}
function mergeWith(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
        iters[len] = arguments[len + 1];
    if (typeof merger !== 'function') {
        throw new TypeError('Invalid merger function: ' + merger);
    }
    return mergeIntoKeyedWith(this, iters, merger);
}
function mergeIntoKeyedWith(collection, collections, merger) {
    var iters = [];
    for (var ii = 0; ii < collections.length; ii++) {
        var collection$1 = KeyedCollection(collections[ii]);
        if (collection$1.size !== 0) {
            iters.push(collection$1);
        }
    }
    if (iters.length === 0) {
        return collection;
    }
    if (collection.toSeq().size === 0 &&
        !collection.__ownerID &&
        iters.length === 1) {
        return collection.constructor(iters[0]);
    }
    return collection.withMutations(function (collection) {
        var mergeIntoCollection = merger
            ? function (value, key) {
                update(collection, key, NOT_SET, function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); });
            }
            : function (value, key) {
                collection.set(key, value);
            };
        for (var ii = 0; ii < iters.length; ii++) {
            iters[ii].forEach(mergeIntoCollection);
        }
    });
}
function merge$1(collection) {
    var sources = [], len = arguments.length - 1;
    while (len-- > 0)
        sources[len] = arguments[len + 1];
    return mergeWithSources(collection, sources);
}
function mergeWith$1(merger, collection) {
    var sources = [], len = arguments.length - 2;
    while (len-- > 0)
        sources[len] = arguments[len + 2];
    return mergeWithSources(collection, sources, merger);
}
function mergeDeep(collection) {
    var sources = [], len = arguments.length - 1;
    while (len-- > 0)
        sources[len] = arguments[len + 1];
    return mergeDeepWithSources(collection, sources);
}
function mergeDeepWith(merger, collection) {
    var sources = [], len = arguments.length - 2;
    while (len-- > 0)
        sources[len] = arguments[len + 2];
    return mergeDeepWithSources(collection, sources, merger);
}
function mergeDeepWithSources(collection, sources, merger) {
    return mergeWithSources(collection, sources, deepMergerWith(merger));
}
function mergeWithSources(collection, sources, merger) {
    if (!isDataStructure(collection)) {
        throw new TypeError('Cannot merge into non-data-structure value: ' + collection);
    }
    if (isImmutable(collection)) {
        return typeof merger === 'function' && collection.mergeWith
            ? collection.mergeWith.apply(collection, [merger].concat(sources))
            : collection.merge
                ? collection.merge.apply(collection, sources)
                : collection.concat.apply(collection, sources);
    }
    var isArray = Array.isArray(collection);
    var merged = collection;
    var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
    var mergeItem = isArray
        ? function (value) {
            // Copy on write
            if (merged === collection) {
                merged = shallowCopy(merged);
            }
            merged.push(value);
        }
        : function (value, key) {
            var hasVal = hasOwnProperty.call(merged, key);
            var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
            if (!hasVal || nextVal !== merged[key]) {
                // Copy on write
                if (merged === collection) {
                    merged = shallowCopy(merged);
                }
                merged[key] = nextVal;
            }
        };
    for (var i = 0; i < sources.length; i++) {
        Collection$$1(sources[i]).forEach(mergeItem);
    }
    return merged;
}
function deepMergerWith(merger) {
    function deepMerger(oldValue, newValue, key) {
        return isDataStructure(oldValue) && isDataStructure(newValue)
            ? mergeWithSources(oldValue, [newValue], deepMerger)
            : merger
                ? merger(oldValue, newValue, key)
                : newValue;
    }
    return deepMerger;
}
function mergeDeep$1() {
    var iters = [], len = arguments.length;
    while (len--)
        iters[len] = arguments[len];
    return mergeDeepWithSources(this, iters);
}
function mergeDeepWith$1(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
        iters[len] = arguments[len + 1];
    return mergeDeepWithSources(this, iters, merger);
}
function mergeIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
        iters[len] = arguments[len + 1];
    return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}
function mergeDeepIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
        iters[len] = arguments[len + 1];
    return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); });
}
function withMutations(fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
function asMutable() {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}
function asImmutable() {
    return this.__ensureOwner();
}
function wasAltered() {
    return this.__altered;
}
var Map = /*@__PURE__*/ (function (KeyedCollection$$1) {
    function Map(value) {
        return value === null || value === undefined
            ? emptyMap()
            : isMap(value) && !isOrdered(value)
                ? value
                : emptyMap().withMutations(function (map) {
                    var iter = KeyedCollection$$1(value);
                    assertNotInfinite(iter.size);
                    iter.forEach(function (v, k) { return map.set(k, v); });
                });
    }
    if (KeyedCollection$$1)
        Map.__proto__ = KeyedCollection$$1;
    Map.prototype = Object.create(KeyedCollection$$1 && KeyedCollection$$1.prototype);
    Map.prototype.constructor = Map;
    Map.of = function of() {
        var keyValues = [], len = arguments.length;
        while (len--)
            keyValues[len] = arguments[len];
        return emptyMap().withMutations(function (map) {
            for (var i = 0; i < keyValues.length; i += 2) {
                if (i + 1 >= keyValues.length) {
                    throw new Error('Missing value for key: ' + keyValues[i]);
                }
                map.set(keyValues[i], keyValues[i + 1]);
            }
        });
    };
    Map.prototype.toString = function toString() {
        return this.__toString('Map {', '}');
    };
    // @pragma Access
    Map.prototype.get = function get(k, notSetValue) {
        return this._root
            ? this._root.get(0, undefined, k, notSetValue)
            : notSetValue;
    };
    // @pragma Modification
    Map.prototype.set = function set(k, v) {
        return updateMap(this, k, v);
    };
    Map.prototype.remove = function remove(k) {
        return updateMap(this, k, NOT_SET);
    };
    Map.prototype.deleteAll = function deleteAll(keys) {
        var collection = Collection(keys);
        if (collection.size === 0) {
            return this;
        }
        return this.withMutations(function (map) {
            collection.forEach(function (key) { return map.remove(key); });
        });
    };
    Map.prototype.clear = function clear() {
        if (this.size === 0) {
            return this;
        }
        if (this.__ownerID) {
            this.size = 0;
            this._root = null;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyMap();
    };
    // @pragma Composition
    Map.prototype.sort = function sort(comparator) {
        // Late binding
        return OrderedMap(sortFactory(this, comparator));
    };
    Map.prototype.sortBy = function sortBy(mapper, comparator) {
        // Late binding
        return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map.prototype.map = function map(mapper, context) {
        return this.withMutations(function (map) {
            map.forEach(function (value, key) {
                map.set(key, mapper.call(context, value, key, map));
            });
        });
    };
    // @pragma Mutability
    Map.prototype.__iterator = function __iterator(type, reverse) {
        return new MapIterator(this, type, reverse);
    };
    Map.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        var iterations = 0;
        this._root &&
            this._root.iterate(function (entry) {
                iterations++;
                return fn(entry[1], entry[0], this$1);
            }, reverse);
        return iterations;
    };
    Map.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
            return this;
        }
        if (!ownerID) {
            if (this.size === 0) {
                return emptyMap();
            }
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    return Map;
}(KeyedCollection));
Map.isMap = isMap;
var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function (result, arr) {
    return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function (obj) {
    return obj.asImmutable();
};
// #pragma Trie Nodes
var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
    this.ownerID = ownerID;
    this.entries = entries;
};
ArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    var entries = this.entries;
    for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
            return entries[ii][1];
        }
    }
    return notSetValue;
};
ArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries = this.entries;
    var idx = 0;
    var len = entries.length;
    for (; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
            break;
        }
    }
    var exists = idx < len;
    if (exists ? entries[idx][1] === value : removed) {
        return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && entries.length === 1) {
        return; // undefined
    }
    if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);
    if (exists) {
        if (removed) {
            idx === len - 1
                ? newEntries.pop()
                : (newEntries[idx] = newEntries.pop());
        }
        else {
            newEntries[idx] = [key, value];
        }
    }
    else {
        newEntries.push([key, value]);
    }
    if (isEditable) {
        this.entries = newEntries;
        return this;
    }
    return new ArrayMapNode(ownerID, newEntries);
};
var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
};
BitmapIndexedNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
        keyHash = hash(key);
    }
    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0
        ? notSetValue
        : this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
};
BitmapIndexedNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
        keyHash = hash(key);
    }
    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;
    if (!exists && value === NOT_SET) {
        return this;
    }
    var idx = popCount(bitmap & (bit - 1));
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : undefined;
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
    if (newNode === node) {
        return this;
    }
    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }
    if (exists &&
        !newNode &&
        nodes.length === 2 &&
        isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
    }
    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
    var newNodes = exists
        ? newNode
            ? setAt(nodes, idx, newNode, isEditable)
            : spliceOut(nodes, idx, isEditable)
        : spliceIn(nodes, idx, newNode, isEditable);
    if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
    }
    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};
var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
    this.ownerID = ownerID;
    this.count = count;
    this.nodes = nodes;
};
HashArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
        keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node
        ? node.get(shift + SHIFT, keyHash, key, notSetValue)
        : notSetValue;
};
HashArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
        keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];
    if (removed && !node) {
        return this;
    }
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
    if (newNode === node) {
        return this;
    }
    var newCount = this.count;
    if (!node) {
        newCount++;
    }
    else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
            return packNodes(ownerID, nodes, newCount, idx);
        }
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setAt(nodes, idx, newNode, isEditable);
    if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
    }
    return new HashArrayMapNode(ownerID, newCount, newNodes);
};
var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries;
};
HashCollisionNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    var entries = this.entries;
    for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
            return entries[ii][1];
        }
    }
    return notSetValue;
};
HashCollisionNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
        keyHash = hash(key);
    }
    var removed = value === NOT_SET;
    if (keyHash !== this.keyHash) {
        if (removed) {
            return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
    }
    var entries = this.entries;
    var idx = 0;
    var len = entries.length;
    for (; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
            break;
        }
    }
    var exists = idx < len;
    if (exists ? entries[idx][1] === value : removed) {
        return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);
    if (exists) {
        if (removed) {
            idx === len - 1
                ? newEntries.pop()
                : (newEntries[idx] = newEntries.pop());
        }
        else {
            newEntries[idx] = [key, value];
        }
    }
    else {
        newEntries.push([key, value]);
    }
    if (isEditable) {
        this.entries = newEntries;
        return this;
    }
    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};
var ValueNode = function ValueNode(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
};
ValueNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};
ValueNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);
    if (keyMatch ? value === this.entry[1] : removed) {
        return this;
    }
    SetRef(didAlter);
    if (removed) {
        SetRef(didChangeSize);
        return; // undefined
    }
    if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
            this.entry[1] = value;
            return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
    }
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};
// #pragma Iterators
ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
        if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
            return false;
        }
    }
};
BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[reverse ? maxIndex - ii : ii];
        if (node && node.iterate(fn, reverse) === false) {
            return false;
        }
    }
};
// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
};
var MapIterator = /*@__PURE__*/ (function (Iterator$$1) {
    function MapIterator(map, type, reverse) {
        this._type = type;
        this._reverse = reverse;
        this._stack = map._root && mapIteratorFrame(map._root);
    }
    if (Iterator$$1)
        MapIterator.__proto__ = Iterator$$1;
    MapIterator.prototype = Object.create(Iterator$$1 && Iterator$$1.prototype);
    MapIterator.prototype.constructor = MapIterator;
    MapIterator.prototype.next = function next() {
        var type = this._type;
        var stack = this._stack;
        while (stack) {
            var node = stack.node;
            var index = stack.index++;
            var maxIndex = (void 0);
            if (node.entry) {
                if (index === 0) {
                    return mapIteratorValue(type, node.entry);
                }
            }
            else if (node.entries) {
                maxIndex = node.entries.length - 1;
                if (index <= maxIndex) {
                    return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
                }
            }
            else {
                maxIndex = node.nodes.length - 1;
                if (index <= maxIndex) {
                    var subNode = node.nodes[this._reverse ? maxIndex - index : index];
                    if (subNode) {
                        if (subNode.entry) {
                            return mapIteratorValue(type, subNode.entry);
                        }
                        stack = this._stack = mapIteratorFrame(subNode, stack);
                    }
                    continue;
                }
            }
            stack = this._stack = this._stack.__prev;
        }
        return iteratorDone();
    };
    return MapIterator;
}(Iterator));
function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
}
function mapIteratorFrame(node, prev) {
    return {
        node: node,
        index: 0,
        __prev: prev,
    };
}
function makeMap(size, root, ownerID, hash$$1) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash$$1;
    map.__altered = false;
    return map;
}
var EMPTY_MAP;
function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}
function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
        if (v === NOT_SET) {
            return map;
        }
        newSize = 1;
        newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    }
    else {
        var didChangeSize = MakeRef();
        var didAlter = MakeRef();
        newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
        if (!didAlter.value) {
            return map;
        }
        newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
    }
    if (map.__ownerID) {
        map.size = newSize;
        map._root = newRoot;
        map.__hash = undefined;
        map.__altered = true;
        return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}
function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
        if (value === NOT_SET) {
            return node;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
}
function isLeafNode(node) {
    return (node.constructor === ValueNode || node.constructor === HashCollisionNode);
}
function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
        return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2
        ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
        : ((newNode = new ValueNode(ownerID, keyHash, entry)),
            idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}
function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
        ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
        var entry = entries[ii];
        node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
}
function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
        var node = nodes[ii];
        if (node !== undefined && ii !== excluding) {
            bitmap |= bit;
            packedNodes[packedII++] = node;
        }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}
function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
        expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}
function popCount(x) {
    x -= (x >> 1) & 0x55555555;
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x += x >> 8;
    x += x >> 16;
    return x & 0x7f;
}
function setAt(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
}
function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
        array[idx] = val;
        return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
        if (ii === idx) {
            newArray[ii] = val;
            after = -1;
        }
        else {
            newArray[ii] = array[ii + after];
        }
    }
    return newArray;
}
function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
        array.pop();
        return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
        if (ii === idx) {
            after = 1;
        }
        newArray[ii] = array[ii + after];
    }
    return newArray;
}
var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';
function isList(maybeList) {
    return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}
var List = /*@__PURE__*/ (function (IndexedCollection$$1) {
    function List(value) {
        var empty = emptyList();
        if (value === null || value === undefined) {
            return empty;
        }
        if (isList(value)) {
            return value;
        }
        var iter = IndexedCollection$$1(value);
        var size = iter.size;
        if (size === 0) {
            return empty;
        }
        assertNotInfinite(size);
        if (size > 0 && size < SIZE) {
            return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
        }
        return empty.withMutations(function (list) {
            list.setSize(size);
            iter.forEach(function (v, i) { return list.set(i, v); });
        });
    }
    if (IndexedCollection$$1)
        List.__proto__ = IndexedCollection$$1;
    List.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
    List.prototype.constructor = List;
    List.of = function of( /*...values*/) {
        return this(arguments);
    };
    List.prototype.toString = function toString() {
        return this.__toString('List [', ']');
    };
    // @pragma Access
    List.prototype.get = function get(index, notSetValue) {
        index = wrapIndex(this, index);
        if (index >= 0 && index < this.size) {
            index += this._origin;
            var node = listNodeFor(this, index);
            return node && node.array[index & MASK];
        }
        return notSetValue;
    };
    // @pragma Modification
    List.prototype.set = function set(index, value) {
        return updateList(this, index, value);
    };
    List.prototype.remove = function remove(index) {
        return !this.has(index)
            ? this
            : index === 0
                ? this.shift()
                : index === this.size - 1
                    ? this.pop()
                    : this.splice(index, 1);
    };
    List.prototype.insert = function insert(index, value) {
        return this.splice(index, 0, value);
    };
    List.prototype.clear = function clear() {
        if (this.size === 0) {
            return this;
        }
        if (this.__ownerID) {
            this.size = this._origin = this._capacity = 0;
            this._level = SHIFT;
            this._root = this._tail = null;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyList();
    };
    List.prototype.push = function push( /*...values*/) {
        var values = arguments;
        var oldSize = this.size;
        return this.withMutations(function (list) {
            setListBounds(list, 0, oldSize + values.length);
            for (var ii = 0; ii < values.length; ii++) {
                list.set(oldSize + ii, values[ii]);
            }
        });
    };
    List.prototype.pop = function pop() {
        return setListBounds(this, 0, -1);
    };
    List.prototype.unshift = function unshift( /*...values*/) {
        var values = arguments;
        return this.withMutations(function (list) {
            setListBounds(list, -values.length);
            for (var ii = 0; ii < values.length; ii++) {
                list.set(ii, values[ii]);
            }
        });
    };
    List.prototype.shift = function shift() {
        return setListBounds(this, 1);
    };
    // @pragma Composition
    List.prototype.concat = function concat( /*...collections*/) {
        var arguments$1 = arguments;
        var seqs = [];
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments$1[i];
            var seq = IndexedCollection$$1(typeof argument !== 'string' && hasIterator(argument)
                ? argument
                : [argument]);
            if (seq.size !== 0) {
                seqs.push(seq);
            }
        }
        if (seqs.length === 0) {
            return this;
        }
        if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
            return this.constructor(seqs[0]);
        }
        return this.withMutations(function (list) {
            seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
        });
    };
    List.prototype.setSize = function setSize(size) {
        return setListBounds(this, 0, size);
    };
    List.prototype.map = function map(mapper, context) {
        var this$1 = this;
        return this.withMutations(function (list) {
            for (var i = 0; i < this$1.size; i++) {
                list.set(i, mapper.call(context, list.get(i), i, list));
            }
        });
    };
    // @pragma Iteration
    List.prototype.slice = function slice(begin, end) {
        var size = this.size;
        if (wholeSlice(begin, end, size)) {
            return this;
        }
        return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
    };
    List.prototype.__iterator = function __iterator(type, reverse) {
        var index = reverse ? this.size : 0;
        var values = iterateList(this, reverse);
        return new Iterator(function () {
            var value = values();
            return value === DONE
                ? iteratorDone()
                : iteratorValue(type, reverse ? --index : index++, value);
        });
    };
    List.prototype.__iterate = function __iterate(fn, reverse) {
        var index = reverse ? this.size : 0;
        var values = iterateList(this, reverse);
        var value;
        while ((value = values()) !== DONE) {
            if (fn(value, reverse ? --index : index++, this) === false) {
                break;
            }
        }
        return index;
    };
    List.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
            return this;
        }
        if (!ownerID) {
            if (this.size === 0) {
                return emptyList();
            }
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
    return List;
}(IndexedCollection));
List.isList = isList;
var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function (result, arr) {
    return result.push(arr);
};
ListPrototype['@@transducer/result'] = function (obj) {
    return obj.asImmutable();
};
var VNode = function VNode(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
};
// TODO: seems like these methods are very similar
VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
    if (index === level ? 1 << level : this.array.length === 0) {
        return this;
    }
    var originIndex = (index >>> level) & MASK;
    if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
    }
    var removingFirst = originIndex === 0;
    var newChild;
    if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild =
            oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
            return this;
        }
    }
    if (removingFirst && !newChild) {
        return this;
    }
    var editable = editableVNode(this, ownerID);
    if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
            editable.array[ii] = undefined;
        }
    }
    if (newChild) {
        editable.array[originIndex] = newChild;
    }
    return editable;
};
VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
    if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
    }
    var sizeIndex = ((index - 1) >>> level) & MASK;
    if (sizeIndex >= this.array.length) {
        return this;
    }
    var newChild;
    if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild =
            oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
            return this;
        }
    }
    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);
    if (newChild) {
        editable.array[sizeIndex] = newChild;
    }
    return editable;
};
var DONE = {};
function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
        return level === 0
            ? iterateLeaf(node, offset)
            : iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
        var array = offset === tailPos ? tail && tail.array : node && node.array;
        var from = offset > left ? 0 : left - offset;
        var to = right - offset;
        if (to > SIZE) {
            to = SIZE;
        }
        return function () {
            if (from === to) {
                return DONE;
            }
            var idx = reverse ? --to : from++;
            return array && array[idx];
        };
    }
    function iterateNode(node, level, offset) {
        var values;
        var array = node && node.array;
        var from = offset > left ? 0 : (left - offset) >> level;
        var to = ((right - offset) >> level) + 1;
        if (to > SIZE) {
            to = SIZE;
        }
        return function () {
            while (true) {
                if (values) {
                    var value = values();
                    if (value !== DONE) {
                        return value;
                    }
                    values = null;
                }
                if (from === to) {
                    return DONE;
                }
                var idx = reverse ? --to : from++;
                values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
            }
        };
    }
}
function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
}
var EMPTY_LIST;
function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}
function updateList(list, index, value) {
    index = wrapIndex(list, index);
    if (index !== index) {
        return list;
    }
    if (index >= list.size || index < 0) {
        return list.withMutations(function (list) {
            index < 0
                ? setListBounds(list, index).set(0, value)
                : setListBounds(list, 0, index + 1).set(index, value);
        });
    }
    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef();
    if (index >= getTailOffset(list._capacity)) {
        newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    }
    else {
        newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }
    if (!didAlter.value) {
        return list;
    }
    if (list.__ownerID) {
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = undefined;
        list.__altered = true;
        return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}
function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
        return node;
    }
    var newNode;
    if (level > 0) {
        var lowerNode = node && node.array[idx];
        var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
        if (newLowerNode === lowerNode) {
            return node;
        }
        newNode = editableVNode(node, ownerID);
        newNode.array[idx] = newLowerNode;
        return newNode;
    }
    if (nodeHas && node.array[idx] === value) {
        return node;
    }
    if (didAlter) {
        SetRef(didAlter);
    }
    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
        newNode.array.pop();
    }
    else {
        newNode.array[idx] = value;
    }
    return newNode;
}
function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
        return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
}
function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
        return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
        var node = list._root;
        var level = list._level;
        while (node && level > 0) {
            node = node.array[(rawIndex >>> level) & MASK];
            level -= SHIFT;
        }
        return node;
    }
}
function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
        begin |= 0;
    }
    if (end !== undefined) {
        end |= 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined
        ? oldCapacity
        : end < 0
            ? oldCapacity + end
            : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
        return list;
    }
    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
        return list.clear();
    }
    var newLevel = list._level;
    var newRoot = list._root;
    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
        newLevel += SHIFT;
        offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
        newOrigin += offsetShift;
        oldOrigin += offsetShift;
        newCapacity += offsetShift;
        oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);
    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
        newLevel += SHIFT;
    }
    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset
        ? listNodeFor(list, newCapacity - 1)
        : newTailOffset > oldTailOffset
            ? new VNode([], owner)
            : oldTail;
    // Merge Tail into tree.
    if (oldTail &&
        newTailOffset > oldTailOffset &&
        newOrigin < oldCapacity &&
        oldTail.array.length) {
        newRoot = editableVNode(newRoot, owner);
        var node = newRoot;
        for (var level = newLevel; level > SHIFT; level -= SHIFT) {
            var idx = (oldTailOffset >>> level) & MASK;
            node = node.array[idx] = editableVNode(node.array[idx], owner);
        }
        node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }
    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
        newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }
    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
        newOrigin -= newTailOffset;
        newCapacity -= newTailOffset;
        newLevel = SHIFT;
        newRoot = null;
        newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
        // Otherwise, if the root has been trimmed, garbage collect.
    }
    else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
        offsetShift = 0;
        // Identify the new top root node of the subtree of the old root.
        while (newRoot) {
            var beginIndex = (newOrigin >>> newLevel) & MASK;
            if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
                break;
            }
            if (beginIndex) {
                offsetShift += (1 << newLevel) * beginIndex;
            }
            newLevel -= SHIFT;
            newRoot = newRoot.array[beginIndex];
        }
        // Trim the new sides of the new root.
        if (newRoot && newOrigin > oldOrigin) {
            newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
        }
        if (newRoot && newTailOffset < oldTailOffset) {
            newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
        }
        if (offsetShift) {
            newOrigin -= offsetShift;
            newCapacity -= offsetShift;
        }
    }
    if (list.__ownerID) {
        list.size = newCapacity - newOrigin;
        list._origin = newOrigin;
        list._capacity = newCapacity;
        list._level = newLevel;
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = undefined;
        list.__altered = true;
        return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}
function getTailOffset(size) {
    return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}
var OrderedMap = /*@__PURE__*/ (function (Map$$1) {
    function OrderedMap(value) {
        return value === null || value === undefined
            ? emptyOrderedMap()
            : isOrderedMap(value)
                ? value
                : emptyOrderedMap().withMutations(function (map) {
                    var iter = KeyedCollection(value);
                    assertNotInfinite(iter.size);
                    iter.forEach(function (v, k) { return map.set(k, v); });
                });
    }
    if (Map$$1)
        OrderedMap.__proto__ = Map$$1;
    OrderedMap.prototype = Object.create(Map$$1 && Map$$1.prototype);
    OrderedMap.prototype.constructor = OrderedMap;
    OrderedMap.of = function of( /*...values*/) {
        return this(arguments);
    };
    OrderedMap.prototype.toString = function toString() {
        return this.__toString('OrderedMap {', '}');
    };
    // @pragma Access
    OrderedMap.prototype.get = function get(k, notSetValue) {
        var index = this._map.get(k);
        return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };
    // @pragma Modification
    OrderedMap.prototype.clear = function clear() {
        if (this.size === 0) {
            return this;
        }
        if (this.__ownerID) {
            this.size = 0;
            this._map.clear();
            this._list.clear();
            return this;
        }
        return emptyOrderedMap();
    };
    OrderedMap.prototype.set = function set(k, v) {
        return updateOrderedMap(this, k, v);
    };
    OrderedMap.prototype.remove = function remove(k) {
        return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap.prototype.wasAltered = function wasAltered() {
        return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        return this._list.__iterate(function (entry) { return entry && fn(entry[1], entry[0], this$1); }, reverse);
    };
    OrderedMap.prototype.__iterator = function __iterator(type, reverse) {
        return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
            return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        var newList = this._list.__ensureOwner(ownerID);
        if (!ownerID) {
            if (this.size === 0) {
                return emptyOrderedMap();
            }
            this.__ownerID = ownerID;
            this._map = newMap;
            this._list = newList;
            return this;
        }
        return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    return OrderedMap;
}(Map));
OrderedMap.isOrderedMap = isOrderedMap;
OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
}
var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
    return (EMPTY_ORDERED_MAP ||
        (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList())));
}
function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) {
        // removed
        if (!has) {
            return omap;
        }
        if (list.size >= SIZE && list.size >= map.size * 2) {
            newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
            newMap = newList
                .toKeyedSeq()
                .map(function (entry) { return entry[0]; })
                .flip()
                .toMap();
            if (omap.__ownerID) {
                newMap.__ownerID = newList.__ownerID = omap.__ownerID;
            }
        }
        else {
            newMap = map.remove(k);
            newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
        }
    }
    else if (has) {
        if (v === list.get(i)[1]) {
            return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
    }
    else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
    }
    if (omap.__ownerID) {
        omap.size = newMap.size;
        omap._map = newMap;
        omap._list = newList;
        omap.__hash = undefined;
        return omap;
    }
    return makeOrderedMap(newMap, newList);
}
var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';
function isStack(maybeStack) {
    return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}
var Stack = /*@__PURE__*/ (function (IndexedCollection$$1) {
    function Stack(value) {
        return value === null || value === undefined
            ? emptyStack()
            : isStack(value)
                ? value
                : emptyStack().pushAll(value);
    }
    if (IndexedCollection$$1)
        Stack.__proto__ = IndexedCollection$$1;
    Stack.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
    Stack.prototype.constructor = Stack;
    Stack.of = function of( /*...values*/) {
        return this(arguments);
    };
    Stack.prototype.toString = function toString() {
        return this.__toString('Stack [', ']');
    };
    // @pragma Access
    Stack.prototype.get = function get(index, notSetValue) {
        var head = this._head;
        index = wrapIndex(this, index);
        while (head && index--) {
            head = head.next;
        }
        return head ? head.value : notSetValue;
    };
    Stack.prototype.peek = function peek() {
        return this._head && this._head.value;
    };
    // @pragma Modification
    Stack.prototype.push = function push( /*...values*/) {
        var arguments$1 = arguments;
        if (arguments.length === 0) {
            return this;
        }
        var newSize = this.size + arguments.length;
        var head = this._head;
        for (var ii = arguments.length - 1; ii >= 0; ii--) {
            head = {
                value: arguments$1[ii],
                next: head,
            };
        }
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    Stack.prototype.pushAll = function pushAll(iter) {
        iter = IndexedCollection$$1(iter);
        if (iter.size === 0) {
            return this;
        }
        if (this.size === 0 && isStack(iter)) {
            return iter;
        }
        assertNotInfinite(iter.size);
        var newSize = this.size;
        var head = this._head;
        iter.__iterate(function (value) {
            newSize++;
            head = {
                value: value,
                next: head,
            };
        }, /* reverse */ true);
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    Stack.prototype.pop = function pop() {
        return this.slice(1);
    };
    Stack.prototype.clear = function clear() {
        if (this.size === 0) {
            return this;
        }
        if (this.__ownerID) {
            this.size = 0;
            this._head = undefined;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyStack();
    };
    Stack.prototype.slice = function slice(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
            return this;
        }
        var resolvedBegin = resolveBegin(begin, this.size);
        var resolvedEnd = resolveEnd(end, this.size);
        if (resolvedEnd !== this.size) {
            // super.slice(begin, end);
            return IndexedCollection$$1.prototype.slice.call(this, begin, end);
        }
        var newSize = this.size - resolvedBegin;
        var head = this._head;
        while (resolvedBegin--) {
            head = head.next;
        }
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    // @pragma Mutability
    Stack.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
            return this;
        }
        if (!ownerID) {
            if (this.size === 0) {
                return emptyStack();
            }
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    // @pragma Iteration
    Stack.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        if (reverse) {
            return new ArraySeq(this.toArray()).__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
        }
        var iterations = 0;
        var node = this._head;
        while (node) {
            if (fn(node.value, iterations++, this) === false) {
                break;
            }
            node = node.next;
        }
        return iterations;
    };
    Stack.prototype.__iterator = function __iterator(type, reverse) {
        if (reverse) {
            return new ArraySeq(this.toArray()).__iterator(type, reverse);
        }
        var iterations = 0;
        var node = this._head;
        return new Iterator(function () {
            if (node) {
                var value = node.value;
                node = node.next;
                return iteratorValue(type, iterations++, value);
            }
            return iteratorDone();
        });
    };
    return Stack;
}(IndexedCollection));
Stack.isStack = isStack;
var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function (result, arr) {
    return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function (obj) {
    return obj.asImmutable();
};
function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
}
var EMPTY_STACK;
function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}
var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';
function isSet(maybeSet) {
    return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}
function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!isCollection(b) ||
        (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
        (a.__hash !== undefined &&
            b.__hash !== undefined &&
            a.__hash !== b.__hash) ||
        isKeyed(a) !== isKeyed(b) ||
        isIndexed(a) !== isIndexed(b) ||
        isOrdered(a) !== isOrdered(b)) {
        return false;
    }
    if (a.size === 0 && b.size === 0) {
        return true;
    }
    var notAssociative = !isAssociative(a);
    if (isOrdered(a)) {
        var entries = a.entries();
        return (b.every(function (v, k) {
            var entry = entries.next().value;
            return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
        }) && entries.next().done);
    }
    var flipped = false;
    if (a.size === undefined) {
        if (b.size === undefined) {
            if (typeof a.cacheResult === 'function') {
                a.cacheResult();
            }
        }
        else {
            flipped = true;
            var _ = a;
            a = b;
            b = _;
        }
    }
    var allEqual = true;
    var bSize = b.__iterate(function (v, k) {
        if (notAssociative
            ? !a.has(v)
            : flipped
                ? !is(v, a.get(k, NOT_SET))
                : !is(a.get(k, NOT_SET), v)) {
            allEqual = false;
            return false;
        }
    });
    return allEqual && a.size === bSize;
}
/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
    var keyCopier = function (key) {
        ctor.prototype[key] = methods[key];
    };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
        Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
}
function toJS(value) {
    if (!value || typeof value !== 'object') {
        return value;
    }
    if (!isCollection(value)) {
        if (!isDataStructure(value)) {
            return value;
        }
        value = Seq(value);
    }
    if (isKeyed(value)) {
        var result$1 = {};
        value.__iterate(function (v, k) {
            result$1[k] = toJS(v);
        });
        return result$1;
    }
    var result = [];
    value.__iterate(function (v) {
        result.push(toJS(v));
    });
    return result;
}
var Set = /*@__PURE__*/ (function (SetCollection$$1) {
    function Set(value) {
        return value === null || value === undefined
            ? emptySet()
            : isSet(value) && !isOrdered(value)
                ? value
                : emptySet().withMutations(function (set) {
                    var iter = SetCollection$$1(value);
                    assertNotInfinite(iter.size);
                    iter.forEach(function (v) { return set.add(v); });
                });
    }
    if (SetCollection$$1)
        Set.__proto__ = SetCollection$$1;
    Set.prototype = Object.create(SetCollection$$1 && SetCollection$$1.prototype);
    Set.prototype.constructor = Set;
    Set.of = function of( /*...values*/) {
        return this(arguments);
    };
    Set.fromKeys = function fromKeys(value) {
        return this(KeyedCollection(value).keySeq());
    };
    Set.intersect = function intersect(sets) {
        sets = Collection(sets).toArray();
        return sets.length
            ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
            : emptySet();
    };
    Set.union = function union(sets) {
        sets = Collection(sets).toArray();
        return sets.length
            ? SetPrototype.union.apply(Set(sets.pop()), sets)
            : emptySet();
    };
    Set.prototype.toString = function toString() {
        return this.__toString('Set {', '}');
    };
    // @pragma Access
    Set.prototype.has = function has(value) {
        return this._map.has(value);
    };
    // @pragma Modification
    Set.prototype.add = function add(value) {
        return updateSet(this, this._map.set(value, value));
    };
    Set.prototype.remove = function remove(value) {
        return updateSet(this, this._map.remove(value));
    };
    Set.prototype.clear = function clear() {
        return updateSet(this, this._map.clear());
    };
    // @pragma Composition
    Set.prototype.map = function map(mapper, context) {
        var this$1 = this;
        var removes = [];
        var adds = [];
        this.forEach(function (value) {
            var mapped = mapper.call(context, value, value, this$1);
            if (mapped !== value) {
                removes.push(value);
                adds.push(mapped);
            }
        });
        return this.withMutations(function (set) {
            removes.forEach(function (value) { return set.remove(value); });
            adds.forEach(function (value) { return set.add(value); });
        });
    };
    Set.prototype.union = function union() {
        var iters = [], len = arguments.length;
        while (len--)
            iters[len] = arguments[len];
        iters = iters.filter(function (x) { return x.size !== 0; });
        if (iters.length === 0) {
            return this;
        }
        if (this.size === 0 && !this.__ownerID && iters.length === 1) {
            return this.constructor(iters[0]);
        }
        return this.withMutations(function (set) {
            for (var ii = 0; ii < iters.length; ii++) {
                SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
            }
        });
    };
    Set.prototype.intersect = function intersect() {
        var iters = [], len = arguments.length;
        while (len--)
            iters[len] = arguments[len];
        if (iters.length === 0) {
            return this;
        }
        iters = iters.map(function (iter) { return SetCollection$$1(iter); });
        var toRemove = [];
        this.forEach(function (value) {
            if (!iters.every(function (iter) { return iter.includes(value); })) {
                toRemove.push(value);
            }
        });
        return this.withMutations(function (set) {
            toRemove.forEach(function (value) {
                set.remove(value);
            });
        });
    };
    Set.prototype.subtract = function subtract() {
        var iters = [], len = arguments.length;
        while (len--)
            iters[len] = arguments[len];
        if (iters.length === 0) {
            return this;
        }
        iters = iters.map(function (iter) { return SetCollection$$1(iter); });
        var toRemove = [];
        this.forEach(function (value) {
            if (iters.some(function (iter) { return iter.includes(value); })) {
                toRemove.push(value);
            }
        });
        return this.withMutations(function (set) {
            toRemove.forEach(function (value) {
                set.remove(value);
            });
        });
    };
    Set.prototype.sort = function sort(comparator) {
        // Late binding
        return OrderedSet(sortFactory(this, comparator));
    };
    Set.prototype.sortBy = function sortBy(mapper, comparator) {
        // Late binding
        return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set.prototype.wasAltered = function wasAltered() {
        return this._map.wasAltered();
    };
    Set.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1 = this;
        return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
    };
    Set.prototype.__iterator = function __iterator(type, reverse) {
        return this._map.__iterator(type, reverse);
    };
    Set.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
            return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        if (!ownerID) {
            if (this.size === 0) {
                return this.__empty();
            }
            this.__ownerID = ownerID;
            this._map = newMap;
            return this;
        }
        return this.__make(newMap, ownerID);
    };
    return Set;
}(SetCollection));
Set.isSet = isSet;
var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function (result, arr) {
    return result.add(arr);
};
SetPrototype['@@transducer/result'] = function (obj) {
    return obj.asImmutable();
};
SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;
function updateSet(set, newMap) {
    if (set.__ownerID) {
        set.size = newMap.size;
        set._map = newMap;
        return set;
    }
    return newMap === set._map
        ? set
        : newMap.size === 0
            ? set.__empty()
            : set.__make(newMap);
}
function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
}
var EMPTY_SET;
function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}
/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/ (function (IndexedSeq$$1) {
    function Range(start, end, step) {
        if (!(this instanceof Range)) {
            return new Range(start, end, step);
        }
        invariant(step !== 0, 'Cannot step a Range by 0');
        start = start || 0;
        if (end === undefined) {
            end = Infinity;
        }
        step = step === undefined ? 1 : Math.abs(step);
        if (end < start) {
            step = -step;
        }
        this._start = start;
        this._end = end;
        this._step = step;
        this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
        if (this.size === 0) {
            if (EMPTY_RANGE) {
                return EMPTY_RANGE;
            }
            EMPTY_RANGE = this;
        }
    }
    if (IndexedSeq$$1)
        Range.__proto__ = IndexedSeq$$1;
    Range.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    Range.prototype.constructor = Range;
    Range.prototype.toString = function toString() {
        if (this.size === 0) {
            return 'Range []';
        }
        return ('Range [ ' +
            this._start +
            '...' +
            this._end +
            (this._step !== 1 ? ' by ' + this._step : '') +
            ' ]');
    };
    Range.prototype.get = function get(index, notSetValue) {
        return this.has(index)
            ? this._start + wrapIndex(this, index) * this._step
            : notSetValue;
    };
    Range.prototype.includes = function includes(searchValue) {
        var possibleIndex = (searchValue - this._start) / this._step;
        return (possibleIndex >= 0 &&
            possibleIndex < this.size &&
            possibleIndex === Math.floor(possibleIndex));
    };
    Range.prototype.slice = function slice(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
            return this;
        }
        begin = resolveBegin(begin, this.size);
        end = resolveEnd(end, this.size);
        if (end <= begin) {
            return new Range(0, 0);
        }
        return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };
    Range.prototype.indexOf = function indexOf(searchValue) {
        var offsetValue = searchValue - this._start;
        if (offsetValue % this._step === 0) {
            var index = offsetValue / this._step;
            if (index >= 0 && index < this.size) {
                return index;
            }
        }
        return -1;
    };
    Range.prototype.lastIndexOf = function lastIndexOf(searchValue) {
        return this.indexOf(searchValue);
    };
    Range.prototype.__iterate = function __iterate(fn, reverse) {
        var size = this.size;
        var step = this._step;
        var value = reverse ? this._start + (size - 1) * step : this._start;
        var i = 0;
        while (i !== size) {
            if (fn(value, reverse ? size - ++i : i++, this) === false) {
                break;
            }
            value += reverse ? -step : step;
        }
        return i;
    };
    Range.prototype.__iterator = function __iterator(type, reverse) {
        var size = this.size;
        var step = this._step;
        var value = reverse ? this._start + (size - 1) * step : this._start;
        var i = 0;
        return new Iterator(function () {
            if (i === size) {
                return iteratorDone();
            }
            var v = value;
            value += reverse ? -step : step;
            return iteratorValue(type, reverse ? size - ++i : i++, v);
        });
    };
    Range.prototype.equals = function equals(other) {
        return other instanceof Range
            ? this._start === other._start &&
                this._end === other._end &&
                this._step === other._step
            : deepEqual(this, other);
    };
    return Range;
}(IndexedSeq));
var EMPTY_RANGE;
function getIn(collection, searchKeyPath, notSetValue) {
    var keyPath = coerceKeyPath(searchKeyPath);
    var i = 0;
    while (i !== keyPath.length) {
        collection = get(collection, keyPath[i++], NOT_SET);
        if (collection === NOT_SET) {
            return notSetValue;
        }
    }
    return collection;
}
function getIn$1(searchKeyPath, notSetValue) {
    return getIn(this, searchKeyPath, notSetValue);
}
function hasIn(collection, keyPath) {
    return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}
function hasIn$1(searchKeyPath) {
    return hasIn(this, searchKeyPath);
}
function toObject() {
    assertNotInfinite(this.size);
    var object = {};
    this.__iterate(function (v, k) {
        object[k] = v;
    });
    return object;
}
// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;
Collection.Iterator = Iterator;
mixin(Collection, {
    // ### Conversion to other types
    toArray: function toArray() {
        assertNotInfinite(this.size);
        var array = new Array(this.size || 0);
        var useTuples = isKeyed(this);
        var i = 0;
        this.__iterate(function (v, k) {
            // Keyed collections produce an array of tuples.
            array[i++] = useTuples ? [k, v] : v;
        });
        return array;
    },
    toIndexedSeq: function toIndexedSeq() {
        return new ToIndexedSequence(this);
    },
    toJS: function toJS$1() {
        return toJS(this);
    },
    toKeyedSeq: function toKeyedSeq() {
        return new ToKeyedSequence(this, true);
    },
    toMap: function toMap() {
        // Use Late Binding here to solve the circular dependency.
        return Map(this.toKeyedSeq());
    },
    toObject: toObject,
    toOrderedMap: function toOrderedMap() {
        // Use Late Binding here to solve the circular dependency.
        return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function toOrderedSet() {
        // Use Late Binding here to solve the circular dependency.
        return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function toSet() {
        // Use Late Binding here to solve the circular dependency.
        return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq() {
        return new ToSetSequence(this);
    },
    toSeq: function toSeq() {
        return isIndexed(this)
            ? this.toIndexedSeq()
            : isKeyed(this)
                ? this.toKeyedSeq()
                : this.toSetSeq();
    },
    toStack: function toStack() {
        // Use Late Binding here to solve the circular dependency.
        return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function toList() {
        // Use Late Binding here to solve the circular dependency.
        return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString() {
        return '[Collection]';
    },
    __toString: function __toString(head, tail) {
        if (this.size === 0) {
            return head + tail;
        }
        return (head +
            ' ' +
            this.toSeq()
                .map(this.__toStringMapper)
                .join(', ') +
            ' ' +
            tail);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat() {
        var values = [], len = arguments.length;
        while (len--)
            values[len] = arguments[len];
        return reify(this, concatFactory(this, values));
    },
    includes: function includes(searchValue) {
        return this.some(function (value) { return is(value, searchValue); });
    },
    entries: function entries() {
        return this.__iterator(ITERATE_ENTRIES);
    },
    every: function every(predicate, context) {
        assertNotInfinite(this.size);
        var returnValue = true;
        this.__iterate(function (v, k, c) {
            if (!predicate.call(context, v, k, c)) {
                returnValue = false;
                return false;
            }
        });
        return returnValue;
    },
    filter: function filter(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, true));
    },
    find: function find(predicate, context, notSetValue) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach(sideEffect, context) {
        assertNotInfinite(this.size);
        return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join(separator) {
        assertNotInfinite(this.size);
        separator = separator !== undefined ? '' + separator : ',';
        var joined = '';
        var isFirst = true;
        this.__iterate(function (v) {
            isFirst ? (isFirst = false) : (joined += separator);
            joined += v !== null && v !== undefined ? v.toString() : '';
        });
        return joined;
    },
    keys: function keys() {
        return this.__iterator(ITERATE_KEYS);
    },
    map: function map(mapper, context) {
        return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function reduce$1(reducer, initialReduction, context) {
        return reduce(this, reducer, initialReduction, context, arguments.length < 2, false);
    },
    reduceRight: function reduceRight(reducer, initialReduction, context) {
        return reduce(this, reducer, initialReduction, context, arguments.length < 2, true);
    },
    reverse: function reverse() {
        return reify(this, reverseFactory(this, true));
    },
    slice: function slice(begin, end) {
        return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function some(predicate, context) {
        return !this.every(not(predicate), context);
    },
    sort: function sort(comparator) {
        return reify(this, sortFactory(this, comparator));
    },
    values: function values() {
        return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function butLast() {
        return this.slice(0, -1);
    },
    isEmpty: function isEmpty() {
        return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
    },
    count: function count(predicate, context) {
        return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
    },
    countBy: function countBy(grouper, context) {
        return countByFactory(this, grouper, context);
    },
    equals: function equals(other) {
        return deepEqual(this, other);
    },
    entrySeq: function entrySeq() {
        var collection = this;
        if (collection._cache) {
            // We cache as an entries array, so we can just return the cache!
            return new ArraySeq(collection._cache);
        }
        var entriesSequence = collection
            .toSeq()
            .map(entryMapper)
            .toIndexedSeq();
        entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
        return entriesSequence;
    },
    filterNot: function filterNot(predicate, context) {
        return this.filter(not(predicate), context);
    },
    findEntry: function findEntry(predicate, context, notSetValue) {
        var found = notSetValue;
        this.__iterate(function (v, k, c) {
            if (predicate.call(context, v, k, c)) {
                found = [k, v];
                return false;
            }
        });
        return found;
    },
    findKey: function findKey(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry && entry[0];
    },
    findLast: function findLast(predicate, context, notSetValue) {
        return this.toKeyedSeq()
            .reverse()
            .find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
        return this.toKeyedSeq()
            .reverse()
            .findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey(predicate, context) {
        return this.toKeyedSeq()
            .reverse()
            .findKey(predicate, context);
    },
    first: function first(notSetValue) {
        return this.find(returnTrue, null, notSetValue);
    },
    flatMap: function flatMap(mapper, context) {
        return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function flatten(depth) {
        return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq() {
        return new FromEntriesSequence(this);
    },
    get: function get(searchKey, notSetValue) {
        return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
    },
    getIn: getIn$1,
    groupBy: function groupBy(grouper, context) {
        return groupByFactory(this, grouper, context);
    },
    has: function has(searchKey) {
        return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn: hasIn$1,
    isSubset: function isSubset(iter) {
        iter = typeof iter.includes === 'function' ? iter : Collection(iter);
        return this.every(function (value) { return iter.includes(value); });
    },
    isSuperset: function isSuperset(iter) {
        iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
        return iter.isSubset(this);
    },
    keyOf: function keyOf(searchValue) {
        return this.findKey(function (value) { return is(value, searchValue); });
    },
    keySeq: function keySeq() {
        return this.toSeq()
            .map(keyMapper)
            .toIndexedSeq();
    },
    last: function last(notSetValue) {
        return this.toSeq()
            .reverse()
            .first(notSetValue);
    },
    lastKeyOf: function lastKeyOf(searchValue) {
        return this.toKeyedSeq()
            .reverse()
            .keyOf(searchValue);
    },
    max: function max(comparator) {
        return maxFactory(this, comparator);
    },
    maxBy: function maxBy(mapper, comparator) {
        return maxFactory(this, comparator, mapper);
    },
    min: function min(comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },
    minBy: function minBy(mapper, comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },
    rest: function rest() {
        return this.slice(1);
    },
    skip: function skip(amount) {
        return amount === 0 ? this : this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast(amount) {
        return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
    },
    skipWhile: function skipWhile(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function skipUntil(predicate, context) {
        return this.skipWhile(not(predicate), context);
    },
    sortBy: function sortBy(mapper, comparator) {
        return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function take(amount) {
        return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast(amount) {
        return this.slice(-Math.max(0, amount));
    },
    takeWhile: function takeWhile(predicate, context) {
        return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function takeUntil(predicate, context) {
        return this.takeWhile(not(predicate), context);
    },
    update: function update(fn) {
        return fn(this);
    },
    valueSeq: function valueSeq() {
        return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode() {
        return this.__hash || (this.__hash = hashCollection(this));
    },
});
var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function () {
    return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;
mixin(KeyedCollection, {
    // ### More sequential methods
    flip: function flip() {
        return reify(this, flipFactory(this));
    },
    mapEntries: function mapEntries(mapper, context) {
        var this$1 = this;
        var iterations = 0;
        return reify(this, this.toSeq()
            .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
            .fromEntrySeq());
    },
    mapKeys: function mapKeys(mapper, context) {
        var this$1 = this;
        return reify(this, this.toSeq()
            .flip()
            .map(function (k, v) { return mapper.call(context, k, v, this$1); })
            .flip());
    },
});
var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };
mixin(IndexedCollection, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq() {
        return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function findIndex(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[0] : -1;
    },
    indexOf: function indexOf(searchValue) {
        var key = this.keyOf(searchValue);
        return key === undefined ? -1 : key;
    },
    lastIndexOf: function lastIndexOf(searchValue) {
        var key = this.lastKeyOf(searchValue);
        return key === undefined ? -1 : key;
    },
    reverse: function reverse() {
        return reify(this, reverseFactory(this, false));
    },
    slice: function slice(begin, end) {
        return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function splice(index, removeNum /*, ...values*/) {
        var numArgs = arguments.length;
        removeNum = Math.max(removeNum || 0, 0);
        if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
            return this;
        }
        // If index is negative, it should resolve relative to the size of the
        // collection. However size may be expensive to compute if not cached, so
        // only call count() if the number is in fact negative.
        index = resolveBegin(index, index < 0 ? this.count() : this.size);
        var spliced = this.slice(0, index);
        return reify(this, numArgs === 1
            ? spliced
            : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
    },
    // ### More collection methods
    findLastIndex: function findLastIndex(predicate, context) {
        var entry = this.findLastEntry(predicate, context);
        return entry ? entry[0] : -1;
    },
    first: function first(notSetValue) {
        return this.get(0, notSetValue);
    },
    flatten: function flatten(depth) {
        return reify(this, flattenFactory(this, depth, false));
    },
    get: function get(index, notSetValue) {
        index = wrapIndex(this, index);
        return index < 0 ||
            (this.size === Infinity || (this.size !== undefined && index > this.size))
            ? notSetValue
            : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
    },
    has: function has(index) {
        index = wrapIndex(this, index);
        return (index >= 0 &&
            (this.size !== undefined
                ? this.size === Infinity || index < this.size
                : this.indexOf(index) !== -1));
    },
    interpose: function interpose(separator) {
        return reify(this, interposeFactory(this, separator));
    },
    interleave: function interleave( /*...collections*/) {
        var collections = [this].concat(arrCopy(arguments));
        var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
        var interleaved = zipped.flatten(true);
        if (zipped.size) {
            interleaved.size = zipped.size * collections.length;
        }
        return reify(this, interleaved);
    },
    keySeq: function keySeq() {
        return Range(0, this.size);
    },
    last: function last(notSetValue) {
        return this.get(-1, notSetValue);
    },
    skipWhile: function skipWhile(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function zip( /*, ...collections */) {
        var collections = [this].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, collections));
    },
    zipAll: function zipAll( /*, ...collections */) {
        var collections = [this].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, collections, true));
    },
    zipWith: function zipWith(zipper /*, ...collections */) {
        var collections = arrCopy(arguments);
        collections[0] = this;
        return reify(this, zipWithFactory(this, zipper, collections));
    },
});
var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
mixin(SetCollection, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get(value, notSetValue) {
        return this.has(value) ? value : notSetValue;
    },
    includes: function includes(value) {
        return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq() {
        return this.valueSeq();
    },
});
SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;
// Mixin subclasses
mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);
// #pragma Helper functions
function reduce(collection, reducer, reduction, context, useFirst, reverse) {
    assertNotInfinite(collection.size);
    collection.__iterate(function (v, k, c) {
        if (useFirst) {
            useFirst = false;
            reduction = v;
        }
        else {
            reduction = reducer.call(context, reduction, v, k, c);
        }
    }, reverse);
    return reduction;
}
function keyMapper(v, k) {
    return k;
}
function entryMapper(v, k) {
    return [k, v];
}
function not(predicate) {
    return function () {
        return !predicate.apply(this, arguments);
    };
}
function neg(predicate) {
    return function () {
        return -predicate.apply(this, arguments);
    };
}
function defaultZipper() {
    return arrCopy(arguments);
}
function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
}
function hashCollection(collection) {
    if (collection.size === Infinity) {
        return 0;
    }
    var ordered = isOrdered(collection);
    var keyed = isKeyed(collection);
    var h = ordered ? 1 : 0;
    var size = collection.__iterate(keyed
        ? ordered
            ? function (v, k) {
                h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
            }
            : function (v, k) {
                h = (h + hashMerge(hash(v), hash(k))) | 0;
            }
        : ordered
            ? function (v) {
                h = (31 * h + hash(v)) | 0;
            }
            : function (v) {
                h = (h + hash(v)) | 0;
            });
    return murmurHashOfSize(size, h);
}
function murmurHashOfSize(size, h) {
    h = imul(h, 0xcc9e2d51);
    h = imul((h << 15) | (h >>> -15), 0x1b873593);
    h = imul((h << 13) | (h >>> -13), 5);
    h = ((h + 0xe6546b64) | 0) ^ size;
    h = imul(h ^ (h >>> 16), 0x85ebca6b);
    h = imul(h ^ (h >>> 13), 0xc2b2ae35);
    h = smi(h ^ (h >>> 16));
    return h;
}
function hashMerge(a, b) {
    return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}
var OrderedSet = /*@__PURE__*/ (function (Set$$1) {
    function OrderedSet(value) {
        return value === null || value === undefined
            ? emptyOrderedSet()
            : isOrderedSet(value)
                ? value
                : emptyOrderedSet().withMutations(function (set) {
                    var iter = SetCollection(value);
                    assertNotInfinite(iter.size);
                    iter.forEach(function (v) { return set.add(v); });
                });
    }
    if (Set$$1)
        OrderedSet.__proto__ = Set$$1;
    OrderedSet.prototype = Object.create(Set$$1 && Set$$1.prototype);
    OrderedSet.prototype.constructor = OrderedSet;
    OrderedSet.of = function of( /*...values*/) {
        return this(arguments);
    };
    OrderedSet.fromKeys = function fromKeys(value) {
        return this(KeyedCollection(value).keySeq());
    };
    OrderedSet.prototype.toString = function toString() {
        return this.__toString('OrderedSet {', '}');
    };
    return OrderedSet;
}(Set));
OrderedSet.isOrderedSet = isOrderedSet;
var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;
function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
}
var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
    return (EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap())));
}
var Record = function Record(defaultValues, name) {
    var hasInitialized;
    var RecordType = function Record(values) {
        var this$1 = this;
        if (values instanceof RecordType) {
            return values;
        }
        if (!(this instanceof RecordType)) {
            return new RecordType(values);
        }
        if (!hasInitialized) {
            hasInitialized = true;
            var keys = Object.keys(defaultValues);
            var indices = (RecordTypePrototype._indices = {});
            // Deprecated: left to attempt not to break any external code which
            // relies on a ._name property existing on record instances.
            // Use Record.getDescriptiveName() instead
            RecordTypePrototype._name = name;
            RecordTypePrototype._keys = keys;
            RecordTypePrototype._defaultValues = defaultValues;
            for (var i = 0; i < keys.length; i++) {
                var propName = keys[i];
                indices[propName] = i;
                if (RecordTypePrototype[propName]) {
                    /* eslint-disable no-console */
                    typeof console === 'object' &&
                        console.warn &&
                        console.warn('Cannot define ' +
                            recordName(this) +
                            ' with property "' +
                            propName +
                            '" since that property name is part of the Record API.');
                    /* eslint-enable no-console */
                }
                else {
                    setProp(RecordTypePrototype, propName);
                }
            }
        }
        this.__ownerID = undefined;
        this._values = List().withMutations(function (l) {
            l.setSize(this$1._keys.length);
            KeyedCollection(values).forEach(function (v, k) {
                l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
            });
        });
    };
    var RecordTypePrototype = (RecordType.prototype = Object.create(RecordPrototype));
    RecordTypePrototype.constructor = RecordType;
    if (name) {
        RecordType.displayName = name;
    }
    return RecordType;
};
Record.prototype.toString = function toString() {
    var str = recordName(this) + ' { ';
    var keys = this._keys;
    var k;
    for (var i = 0, l = keys.length; i !== l; i++) {
        k = keys[i];
        str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
    }
    return str + ' }';
};
Record.prototype.equals = function equals(other) {
    return (this === other ||
        (other &&
            this._keys === other._keys &&
            recordSeq(this).equals(recordSeq(other))));
};
Record.prototype.hashCode = function hashCode() {
    return recordSeq(this).hashCode();
};
// @pragma Access
Record.prototype.has = function has(k) {
    return this._indices.hasOwnProperty(k);
};
Record.prototype.get = function get(k, notSetValue) {
    if (!this.has(k)) {
        return notSetValue;
    }
    var index = this._indices[k];
    var value = this._values.get(index);
    return value === undefined ? this._defaultValues[k] : value;
};
// @pragma Modification
Record.prototype.set = function set(k, v) {
    if (this.has(k)) {
        var newValues = this._values.set(this._indices[k], v === this._defaultValues[k] ? undefined : v);
        if (newValues !== this._values && !this.__ownerID) {
            return makeRecord(this, newValues);
        }
    }
    return this;
};
Record.prototype.remove = function remove(k) {
    return this.set(k);
};
Record.prototype.clear = function clear() {
    var newValues = this._values.clear().setSize(this._keys.length);
    return this.__ownerID ? this : makeRecord(this, newValues);
};
Record.prototype.wasAltered = function wasAltered() {
    return this._values.wasAltered();
};
Record.prototype.toSeq = function toSeq() {
    return recordSeq(this);
};
Record.prototype.toJS = function toJS$1() {
    return toJS(this);
};
Record.prototype.entries = function entries() {
    return this.__iterator(ITERATE_ENTRIES);
};
Record.prototype.__iterator = function __iterator(type, reverse) {
    return recordSeq(this).__iterator(type, reverse);
};
Record.prototype.__iterate = function __iterate(fn, reverse) {
    return recordSeq(this).__iterate(fn, reverse);
};
Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
        return this;
    }
    var newValues = this._values.__ensureOwner(ownerID);
    if (!ownerID) {
        this.__ownerID = ownerID;
        this._values = newValues;
        return this;
    }
    return makeRecord(this, newValues, ownerID);
};
Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
    CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function () {
    return this.toString();
};
function makeRecord(likeRecord, values, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._values = values;
    record.__ownerID = ownerID;
    return record;
}
function recordName(record) {
    return record.constructor.displayName || record.constructor.name || 'Record';
}
function recordSeq(record) {
    return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}
function setProp(prototype, name) {
    try {
        Object.defineProperty(prototype, name, {
            get: function () {
                return this.get(name);
            },
            set: function (value) {
                invariant(this.__ownerID, 'Cannot set on an immutable record.');
                this.set(name, value);
            },
        });
    }
    catch (error) {
        // Object.defineProperty failed. Probably IE8.
    }
}
/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/ (function (IndexedSeq$$1) {
    function Repeat(value, times) {
        if (!(this instanceof Repeat)) {
            return new Repeat(value, times);
        }
        this._value = value;
        this.size = times === undefined ? Infinity : Math.max(0, times);
        if (this.size === 0) {
            if (EMPTY_REPEAT) {
                return EMPTY_REPEAT;
            }
            EMPTY_REPEAT = this;
        }
    }
    if (IndexedSeq$$1)
        Repeat.__proto__ = IndexedSeq$$1;
    Repeat.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    Repeat.prototype.constructor = Repeat;
    Repeat.prototype.toString = function toString() {
        if (this.size === 0) {
            return 'Repeat []';
        }
        return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };
    Repeat.prototype.get = function get(index, notSetValue) {
        return this.has(index) ? this._value : notSetValue;
    };
    Repeat.prototype.includes = function includes(searchValue) {
        return is(this._value, searchValue);
    };
    Repeat.prototype.slice = function slice(begin, end) {
        var size = this.size;
        return wholeSlice(begin, end, size)
            ? this
            : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };
    Repeat.prototype.reverse = function reverse() {
        return this;
    };
    Repeat.prototype.indexOf = function indexOf(searchValue) {
        if (is(this._value, searchValue)) {
            return 0;
        }
        return -1;
    };
    Repeat.prototype.lastIndexOf = function lastIndexOf(searchValue) {
        if (is(this._value, searchValue)) {
            return this.size;
        }
        return -1;
    };
    Repeat.prototype.__iterate = function __iterate(fn, reverse) {
        var size = this.size;
        var i = 0;
        while (i !== size) {
            if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
                break;
            }
        }
        return i;
    };
    Repeat.prototype.__iterator = function __iterator(type, reverse) {
        var this$1 = this;
        var size = this.size;
        var i = 0;
        return new Iterator(function () {
            return i === size
                ? iteratorDone()
                : iteratorValue(type, reverse ? size - ++i : i++, this$1._value);
        });
    };
    Repeat.prototype.equals = function equals(other) {
        return other instanceof Repeat
            ? is(this._value, other._value)
            : deepEqual(other);
    };
    return Repeat;
}(IndexedSeq));
var EMPTY_REPEAT;
function fromJS(value, converter) {
    return fromJSWith([], converter || defaultConverter, value, '', converter && converter.length > 2 ? [] : undefined, { '': value });
}
function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
    var toSeq = Array.isArray(value)
        ? IndexedSeq
        : isPlainObj(value)
            ? KeyedSeq
            : null;
    if (toSeq) {
        if (~stack.indexOf(value)) {
            throw new TypeError('Cannot convert circular structure to Immutable');
        }
        stack.push(value);
        keyPath && key !== '' && keyPath.push(key);
        var converted = converter.call(parentValue, key, toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }), keyPath && keyPath.slice());
        stack.pop();
        keyPath && keyPath.pop();
        return converted;
    }
    return value;
}
function defaultConverter(k, v) {
    return isKeyed(v) ? v.toMap() : v.toList();
}
var version = "4.0.0-rc.11";
var Immutable = {
    version: version,
    Collection: Collection,
    // Note: Iterable is deprecated
    Iterable: Collection,
    Seq: Seq,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS,
    hash: hash,
    isImmutable: isImmutable,
    isCollection: isCollection,
    isKeyed: isKeyed,
    isIndexed: isIndexed,
    isAssociative: isAssociative,
    isOrdered: isOrdered,
    isValueObject: isValueObject,
    isSeq: isSeq,
    isList: isList,
    isMap: isMap,
    isOrderedMap: isOrderedMap,
    isStack: isStack,
    isSet: isSet,
    isOrderedSet: isOrderedSet,
    isRecord: isRecord,
    get: get,
    getIn: getIn,
    has: has,
    hasIn: hasIn,
    merge: merge$1,
    mergeDeep: mergeDeep,
    mergeWith: mergeWith$1,
    mergeDeepWith: mergeDeepWith,
    remove: remove,
    removeIn: removeIn,
    set: set,
    setIn: setIn,
    update: update,
    updateIn: updateIn,
};
// Note: Iterable is deprecated
var Iterable = Collection;
/* harmony default export */ __webpack_exports__["default"] = (Immutable);



/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
function isObjectObject(o) {
    return isObject(o) === true
        && Object.prototype.toString.call(o) === '[object Object]';
}
module.exports = function isPlainObject(o) {
    var ctor, prot;
    if (isObjectObject(o) === false)
        return false;
    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function')
        return false;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false)
        return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

module.exports = function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"), root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');
module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"), hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"), hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"), hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"), hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"), listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"), listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"), listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"), listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"), root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"), mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"), mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"), mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"), mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"), root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');
module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"), root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');
module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"), stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"), stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"), stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"), stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"), stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */
var Symbol = root.Symbol;
module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */
var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"), root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
    switch (args.length) {
        case 0: return func.call(thisArg);
        case 1: return func.call(thisArg, args[0]);
        case 2: return func.call(thisArg, args[0], args[1]);
        case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"), isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"), isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"), isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
            // Safari 9 has enumerable `arguments.length` in strict mode.
            key == 'length' ||
                // Node.js 0.10 has enumerable non-index properties on buffers.
                (isBuff && (key == 'offset' || key == 'parent')) ||
                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                // Skip index properties.
                isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}
module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"), eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
    }
}
module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"), keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"), keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        });
    }
    else {
        object[key] = value;
    }
}
module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"), arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"), assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"), baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"), baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"), cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"), copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"), copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"), copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"), getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"), getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"), getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"), initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"), initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"), initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"), isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"), isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"), isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"), keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */
var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
        cloneableTags[boolTag] = cloneableTags[dateTag] =
            cloneableTags[float32Tag] = cloneableTags[float64Tag] =
                cloneableTags[int8Tag] = cloneableTags[int16Tag] =
                    cloneableTags[int32Tag] = cloneableTags[mapTag] =
                        cloneableTags[numberTag] = cloneableTags[objectTag] =
                            cloneableTags[regexpTag] = cloneableTags[setTag] =
                                cloneableTags[stringTag] = cloneableTags[symbolTag] =
                                    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                                        cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
    cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!isObject(value)) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return copyArray(value, result);
        }
    }
    else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = (isFlat || isFunc) ? {} : initCloneObject(value);
            if (!isDeep) {
                return isFlat
                    ? copySymbolsIn(value, baseAssignIn(result, value))
                    : copySymbols(value, baseAssign(result, value));
            }
        }
        else {
            if (!cloneableTags[tag]) {
                return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
        value.forEach(function (subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
        return result;
    }
    if (isMap(value)) {
        value.forEach(function (subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
    }
    var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */
var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function () {
    function object() { }
    return function (proto) {
        if (!isObject(proto)) {
            return {};
        }
        if (objectCreate) {
            return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}());
module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"), isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            }
            else {
                arrayPush(result, value);
            }
        }
        else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}
module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"), toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
        object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
}
module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"), getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"), objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */
var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
}
module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"), isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"), isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"), toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
        typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
            typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
        typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
            typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                        typedArrayTags[setTag] = typedArrayTags[stringTag] =
                            typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"), nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"), isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"), nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
    if (!isObject(object)) {
        return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
        }
    }
    return result;
}
module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"), hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
    return basePickBy(object, paths, function (value, path) {
        return hasIn(object, path);
    });
}
module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"), baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"), castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while (++index < length) {
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
        }
    }
    return result;
}
module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"), castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"), isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"), isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"), toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
        return object;
    }
    path = castPath(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
                newValue = isObject(objValue)
                    ? objValue
                    : (isIndex(path[index + 1]) ? [] : {});
            }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"), defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"), identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
    return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
    });
};
module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
        result[index] = iteratee(index);
    }
    return result;
}
module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"), arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
    return function (value) {
        return func(value);
    };
}
module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"), last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"), parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"), toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
}
module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"), stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"), toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
    if (isArray(value)) {
        return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
}
module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
        return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}
module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"), baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
        var key = props[index];
        var newValue = customizer
            ? customizer(object[key], source[key], key, object, source)
            : undefined;
        if (newValue === undefined) {
            newValue = source[key];
        }
        if (isNew) {
            baseAssignValue(object, key, newValue);
        }
        else {
            assignValue(object, key, newValue);
        }
    }
    return object;
}
module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"), getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"), getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value;
}
module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
var defineProperty = (function () {
    try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
    }
    catch (e) { }
}());
module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"), overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"), setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
}
module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"), getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"), keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"), getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"), keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
}
module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"), getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;
/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    }
    catch (e) { }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"), stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"), getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"), getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"), stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];
    while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"), Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"), Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"), Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"), WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"), baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/** `Object#toString` result references. */
var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function (value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString: return dataViewTag;
                case mapCtorString: return mapTag;
                case promiseCtorString: return promiseTag;
                case setCtorString: return setTag;
                case weakMapCtorString: return weakMapTag;
            }
        }
        return result;
    };
}
module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"), isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"), isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"), toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
}
module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}
module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"), cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"), cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"), cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"), cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");
/** `Object#toString` result references. */
var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return cloneSymbol(object);
    }
}
module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"), getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"), isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
}
module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"), isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"), isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
        (type == 'number' ||
            (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}
module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"), isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
    if (isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
}
module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
}
module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */
var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
}());
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
}
module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
    var Ctor = value && value.constructor, proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
    return value === proto;
}
module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */
var arrayProto = Array.prototype;
/** Built-in value references. */
var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    }
    else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([key, value]);
    }
    else {
        data[index][1] = value;
    }
    return this;
}
module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"), ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"), Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
    var result = memoize(func, function (key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
        }
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
        for (var key in Object(object)) {
            result.push(key);
        }
    }
    return result;
}
module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = (function () {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) {
            return types;
        }
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    }
    catch (e) { }
}());
module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
    return function (arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function () {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
            array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
            otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"), baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");
/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"), shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);
module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function () {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) {
                return arguments[0];
            }
        }
        else {
            count = 0;
        }
        return func.apply(undefined, arguments);
    };
}
module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"), Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"), MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
    }
    string.replace(rePropName, function (match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
});
module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
        return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        }
        catch (e) { }
        try {
            return (func + '');
        }
        catch (e) { }
    }
    return '';
}
module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
    return function () {
        return value;
    };
}
module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
    return value === other || (value !== value && other !== other);
}
module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"), hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
    return value;
}
module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"), isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"), stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
    return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"), baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"), nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var objectTag = '[object Object]';
/** Used for built-in method references. */
var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"), baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"), nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"), isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
}
module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"), baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"), nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"), baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"), isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"), baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"), isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"), baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"), baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"), castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"), copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"), customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"), flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"), getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function (object, paths) {
    var result = {};
    if (object == null) {
        return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function (path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
        baseUnset(result, paths[length]);
    }
    return result;
});
module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"), flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
});
module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
    return [];
}
module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
    return false;
}
module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */
module.exports = function (val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    }
    else if (type === 'number' && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' +
        JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */
function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */
function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        }
        else {
            cachedSetTimeout = defaultSetTimout;
        }
    }
    catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        }
        else {
            cachedClearTimeout = defaultClearTimeout;
        }
    }
    catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
}());
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    }
    else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() { }
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) { return []; };
process.binding = function (name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function () { return '/'; };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () { return 0; };


/***/ }),

/***/ "./node_modules/slate/lib/slate.es.js":
/*!********************************************!*\
  !*** ./node_modules/slate/lib/slate.es.js ***!
  \********************************************/
/*! exports provided: default, Annotation, Block, Change, Data, Decoration, Document, Editor, Inline, KeyUtils, Leaf, Mark, Node, Operation, PathUtils, Point, Range, resetMemoization, Selection, Text, TextUtils, useMemoization, Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return Annotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Change", function() { return Change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decoration", function() { return Decoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inline", function() { return Inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUtils", function() { return KeyUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leaf", function() { return Leaf$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return PathUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoization", function() { return resetMemoization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextUtils", function() { return TextUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoization", function() { return useMemoization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/slate/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esrever */ "./node_modules/esrever/esrever.js");
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(esrever__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! direction */ "./node_modules/direction/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_8__);









/**
 * An auto-incrementing index for generating keys.
 *
 * @type {Number}
 */
var n = void 0;
/**
 * The global key generating function.
 *
 * @type {Function}
 */
var generate = void 0;
/**
 * Create a key, using a provided key if available.
 *
 * @param {String|Void} key
 * @return {String}
 */
function create(key) {
    if (key == null) {
        return generate();
    }
    if (typeof key === 'string') {
        return key;
    }
    throw new Error('Keys must be strings, but you passed: ' + key);
}
/**
 * Set a different unique ID generating `function`.
 *
 * @param {Function} func
 */
function setGenerator(func) {
    generate = func;
}
/**
 * Reset the key generating function to its initial state.
 */
function resetGenerator() {
    n = 0;
    generate = function generate() {
        return '' + n++;
    };
}
/**
 * Set the initial state.
 */
resetGenerator();
/**
 * Export.
 *
 * @type {Object}
 */
var KeyUtils = {
    create: create,
    setGenerator: setGenerator,
    resetGenerator: resetGenerator
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function (obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0)
            continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
        target[i] = obj[i];
    }
    return target;
};
var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                    break;
            }
        }
        catch (err) {
            _d = true;
            _e = err;
        }
        finally {
            try {
                if (!_n && _i["return"])
                    _i["return"]();
            }
            finally {
                if (_d)
                    throw _e;
            }
        }
        return _arr;
    }
    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        }
        else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        }
        else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();
var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
        return arr2;
    }
    else {
        return Array.from(arr);
    }
};
/**
 * Compare paths `path` and `target` to see which is before or after.
 *
 * @param {List} path
 * @param {List} target
 * @return {Number|Null}
 */
function compare(path, target) {
    var m = min(path, target);
    for (var i = 0; i < m; i++) {
        var pv = path.get(i);
        var tv = target.get(i);
        // If the path's value is ever less than the target's, it's before.
        if (pv < tv)
            return -1;
        // If the target's value is ever less than the path's, it's after.
        if (pv > tv)
            return 1;
    }
    // Paths should now be equal, otherwise something is wrong
    return path.size === target.size ? 0 : null;
}
/**
 * Create a path from `attrs`.
 *
 * @param {Array|List} attrs
 * @return {List}
 */
function create$1(attrs) {
    if (attrs == null) {
        return null;
    }
    if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(attrs)) {
        return attrs;
    }
    if (Array.isArray(attrs)) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(attrs);
    }
    throw new Error('Paths can only be created from arrays or lists, but you passed: ' + attrs);
}
/**
 * Crop paths `a` and `b` to an equal size, defaulting to the shortest.
 *
 * @param {List} a
 * @param {List} b
 */
function crop(a, b) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min(a, b);
    var ca = a.slice(0, size);
    var cb = b.slice(0, size);
    return [ca, cb];
}
/**
 * Decrement a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */
function decrement(path) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;
    return increment(path, 0 - n, index);
}
/**
 * Get all ancestor paths of th given path.
 *
 * @param {List} path
 * @returns {List}
 */
function getAncestors(path) {
    var ancestors = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])().withMutations(function (list) {
        for (var i = 0; i < path.size; i++) {
            list.push(path.slice(0, i));
        }
    });
    return ancestors;
}
/**
 * Increment a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */
function increment(path) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;
    var value = path.get(index);
    var newValue = value + n;
    var newPath = path.set(index, newValue);
    return newPath;
}
/**
 * Is a `path` above another `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isAbove(path, target) {
    var _crop = crop(path, target), _crop2 = slicedToArray(_crop, 2), p = _crop2[0], t = _crop2[1];
    return path.size < target.size && compare(p, t) === 0;
}
/**
 * Is a `path` after another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isAfter(path, target) {
    var _crop3 = crop(path, target), _crop4 = slicedToArray(_crop3, 2), p = _crop4[0], t = _crop4[1];
    return compare(p, t) === 1;
}
/**
 * Is a `path` before another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isBefore(path, target) {
    var _crop5 = crop(path, target), _crop6 = slicedToArray(_crop5, 2), p = _crop6[0], t = _crop6[1];
    return compare(p, t) === -1;
}
/**
 * Is a `path` equal to another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isEqual(path, target) {
    return path.equals(target);
}
/**
 * Is a `path` older than a `target` path? Meaning that it ends as an older
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isOlder(path, target) {
    var index = path.size - 1;
    var _crop7 = crop(path, target, index), _crop8 = slicedToArray(_crop7, 2), p = _crop8[0], t = _crop8[1];
    var pl = path.get(index);
    var tl = target.get(index);
    return isEqual(p, t) && pl > tl;
}
/**
 * Is an `any` object a path?
 *
 * @param {Mixed} any
 * @return {Boolean}
 */
function isPath(any) {
    return (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) || Array.isArray(any)) && any.every(function (n) {
        return typeof n === 'number';
    });
}
/**
 * Is a `path` a sibling of a `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isSibling(path, target) {
    if (path.size !== target.size)
        return false;
    var p = path.butLast();
    var t = target.butLast();
    return p.equals(t);
}
/**
 * Is a `path` younger than a `target` path? Meaning that it ends as a younger
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */
function isYounger(path, target) {
    var index = path.size - 1;
    var _crop9 = crop(path, target, index), _crop10 = slicedToArray(_crop9, 2), p = _crop10[0], t = _crop10[1];
    var pl = path.get(index);
    var tl = target.get(index);
    return isEqual(p, t) && pl < tl;
}
/**
 * Lift a `path` to refer to its `n`th ancestor.
 *
 * @param {List} path
 * @return {List}
 */
function lift(path) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var ancestor = path.slice(0, -1 * n);
    return ancestor;
}
/**
 * Drop a `path`, returning a relative path from a depth of `n`.
 *
 * @param {List} path
 * @param {Number} n
 * @return {List}
 */
function drop(path) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var relative = path.slice(n);
    return relative;
}
/**
 * Get the maximum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */
function max(a, b) {
    var n = Math.max(a.size, b.size);
    return n;
}
/**
 * Get the minimum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */
function min(a, b) {
    var n = Math.min(a.size, b.size);
    return n;
}
/**
 * Get the common ancestor path of path `a` and path `b`.
 *
 * @param {List} a
 * @param {List} b
 * @return {List}
 */
function relate(a, b) {
    var array = [];
    for (var i = 0; i < a.size && i < b.size; i++) {
        var av = a.get(i);
        var bv = b.get(i);
        // If the values aren't equal, they've diverged and don't share an ancestor.
        if (av !== bv)
            break;
        // Otherwise, the current value is still a common ancestor.
        array.push(av);
    }
    var path = create$1(array);
    return path;
}
/**
 * Transform a `path` by an `operation`, adjusting it to stay current.
 *
 * @param {List} path
 * @param {Operation} operation
 * @return {List<List>}
 */
function transform(path, operation) {
    var type = operation.type, position = operation.position, p = operation.path;
    if (type === 'add_mark' || type === 'insert_text' || type === 'remove_mark' || type === 'remove_text' || type === 'set_mark' || type === 'set_node' || type === 'set_selection' || type === 'set_value' || path.size === 0) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])([path]);
    }
    var pIndex = p.size - 1;
    var pEqual = isEqual(p, path);
    var pYounger = isYounger(p, path);
    var pAbove = isAbove(p, path);
    if (type === 'insert_node') {
        if (pEqual || pYounger || pAbove) {
            path = increment(path, 1, pIndex);
        }
    }
    if (type === 'remove_node') {
        if (pYounger) {
            path = decrement(path, 1, pIndex);
        }
        else if (pEqual || pAbove) {
            path = [];
        }
    }
    if (type === 'merge_node') {
        if (pEqual || pYounger) {
            path = decrement(path, 1, pIndex);
        }
        else if (pAbove) {
            path = decrement(path, 1, pIndex);
            path = increment(path, position, pIndex + 1);
        }
    }
    if (type === 'split_node') {
        if (pEqual) {
            path = [path, increment(path)];
        }
        else if (pYounger) {
            path = increment(path, 1, pIndex);
        }
        else if (pAbove) {
            if (path.get(pIndex + 1) >= position) {
                path = increment(path, 1, pIndex);
                path = decrement(path, position, pIndex + 1);
            }
        }
    }
    if (type === 'move_node') {
        var np = operation.newPath;
        if (isEqual(p, np)) {
            return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])([path]);
        }
        if (pAbove || pEqual) {
            // We are comparing something that was moved
            // The new path is unaffected unless the old path was the left-sibling of an ancestor
            if (isYounger(p, np) && p.size < np.size) {
                path = decrement(np, 1, min(np, p) - 1).concat(path.slice(p.size));
            }
            else {
                path = np.concat(path.slice(p.size));
            }
        }
        else {
            // This is equivalent logic to remove_node for path
            if (pYounger) {
                path = decrement(path, 1, pIndex);
            }
            // This is the equivalent logic to insert_node for newPath
            if (isYounger(np, path) || isEqual(np, path) || isAbove(np, path)) {
                path = increment(path, 1, np.size - 1);
            }
        }
    }
    var paths = Array.isArray(path) ? path : [path];
    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(paths);
}
/**
 * Export.
 *
 * @type {Object}
 */
var PathUtils = {
    compare: compare,
    create: create$1,
    crop: crop,
    decrement: decrement,
    getAncestors: getAncestors,
    increment: increment,
    isAbove: isAbove,
    isAfter: isAfter,
    isBefore: isBefore,
    isEqual: isEqual,
    isOlder: isOlder,
    isPath: isPath,
    isSibling: isSibling,
    isYounger: isYounger,
    lift: lift,
    drop: drop,
    max: max,
    min: min,
    relate: relate,
    transform: transform
};
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS = {
    key: undefined,
    offset: undefined,
    path: undefined
    /**
     * Point.
     *
     * @type {Point}
     */
};
var Point = function (_Record) {
    inherits(Point, _Record);
    function Point() {
        classCallCheck(this, Point);
        return possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
    }
    createClass(Point, [{
            key: 'isAfterPoint',
            /**
             * Check whether the point is after another `point`.
             *
             * @return {Boolean}
             */
            value: function isAfterPoint(point) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.key === point.key && this.offset > point.offset || PathUtils.compare(this.path, point.path) === 1;
                return is$$1;
            }
            /**
             * Check whether the point is after a `range`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isAfterRange',
            value: function isAfterRange(range) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.isAfterPoint(range.end);
                return is$$1;
            }
            /**
             * Check whether the point is at the end of a `range`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isAtEndOfRange',
            value: function isAtEndOfRange(range) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.equals(range.end);
                return is$$1;
            }
            /**
             * Check whether the point is at the start of a `range`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isAtStartOfRange',
            value: function isAtStartOfRange(range) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.equals(range.start);
                return is$$1;
            }
            /**
             * Check whether the point is before another `point`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isBeforePoint',
            value: function isBeforePoint(point) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.key === point.key && this.offset < point.offset || PathUtils.compare(this.path, point.path) === -1;
                return is$$1;
            }
            /**
             * Check whether the point is before a `range`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isBeforeRange',
            value: function isBeforeRange(range) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.isBeforePoint(range.start);
                return is$$1;
            }
            /**
             * Check whether the point is inside a `range`.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isInRange',
            value: function isInRange(range) {
                if (this.isUnset)
                    return false;
                var is$$1 = this.equals(range.start) || this.equals(range.end) || this.isAfterPoint(range.start) && this.isBeforePoint(range.end);
                return is$$1;
            }
            /**
             * Check whether the point is at the end of a `node`.
             *
             * @param {Node} node
             * @return {Boolean}
             */
        }, {
            key: 'isAtEndOfNode',
            value: function isAtEndOfNode(node) {
                if (this.isUnset)
                    return false;
                var last = node.getLastText();
                var is$$1 = this.key === last.key && this.offset === last.text.length;
                return is$$1;
            }
            /**
             * Check whether the point is at the start of a `node`.
             *
             * @param {Node} node
             * @return {Boolean}
             */
        }, {
            key: 'isAtStartOfNode',
            value: function isAtStartOfNode(node) {
                if (this.isUnset)
                    return false;
                // PERF: Do a check for a `0` offset first since it's quickest.
                if (this.offset !== 0)
                    return false;
                var first = node.getFirstText();
                var is$$1 = this.key === first.key;
                return is$$1;
            }
            /**
             * Check whether the point is in a `node`.
             *
             * @param {Node} node
             * @return {Boolean}
             */
        }, {
            key: 'isInNode',
            value: function isInNode(node) {
                if (this.isUnset)
                    return false;
                if (node.object === 'text' && node.key === this.key)
                    return true;
                if (node.hasNode(this.key))
                    return true;
                return false;
            }
            /**
             * Move the point's offset backward `n` characters.
             *
             * @param {Number} n (optional)
             * @return {Point}
             */
        }, {
            key: 'moveBackward',
            value: function moveBackward() {
                var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                if (n === 0)
                    return this;
                if (n < 0)
                    return this.moveForward(-n);
                var point = this.setOffset(this.offset - n);
                return point;
            }
            /**
             * Move the point's offset forward `n` characters.
             *
             * @param {Number} n (optional)
             * @return {Point}
             */
        }, {
            key: 'moveForward',
            value: function moveForward() {
                var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                if (n === 0)
                    return this;
                if (n < 0)
                    return this.moveBackward(-n);
                var point = this.setOffset(this.offset + n);
                return point;
            }
            /**
             * Move the point's anchor point to a new `path` and `offset`.
             *
             * Optionally, the `path` can be a key string, or omitted entirely in which
             * case it would be the offset number.
             *
             * @param {List|String|Number} path
             * @param {Number} offset
             * @return {Point}
             */
        }, {
            key: 'moveTo',
            value: function moveTo(path) {
                var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var key = this.key;
                if (typeof path === 'number') {
                    offset = path;
                    path = this.path;
                }
                else if (typeof path === 'string') {
                    key = path;
                    path = key === this.key ? this.path : null;
                }
                else {
                    key = path.equals(this.path) ? this.key : null;
                }
                var point = this.merge({ key: key, path: path, offset: offset });
                return point;
            }
            /**
             * Move the point's anchor point to the start of a `node`.
             *
             * @param {Node} node
             * @return {Point}
             */
        }, {
            key: 'moveToStartOfNode',
            value: function moveToStartOfNode(node) {
                var first = node.getFirstText();
                var point = this.moveTo(first.key, 0);
                return point;
            }
            /**
             * Move the point's anchor point to the end of a `node`.
             *
             * @param {Node} node
             * @return {Point}
             */
        }, {
            key: 'moveToEndOfNode',
            value: function moveToEndOfNode(node) {
                var last = node.getLastText();
                var point = this.moveTo(last.key, last.text.length);
                return point;
            }
            /**
             * Normalize the point relative to a `node`, ensuring that its key and path
             * reference a text node, or that it gets unset.
             *
             * @param {Node} node
             * @return {Point}
             */
        }, {
            key: 'normalize',
            value: function normalize(node) {
                // If both the key and path are null, there's no reference to a node, so
                // make sure it is entirely unset.
                if (this.key == null && this.path == null) {
                    return this.setOffset(null);
                }
                var key = this.key, offset = this.offset, path = this.path;
                // PERF: this function gets called a lot.
                // to avoid creating the key -> path lookup table, we attempt to look up by path first.
                var target = path && node.getNode(path);
                if (!target) {
                    target = node.getNode(key);
                    if (target) {
                        // There is a misalignment of path and key
                        var _point = this.merge({
                            path: node.getPath(key)
                        });
                        return _point;
                    }
                }
                if (!target) {
                    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "A point's `path` or `key` invalid and was reset!");
                    var text = node.getFirstText();
                    if (!text)
                        return Point.create();
                    var _point2 = this.merge({
                        key: text.key,
                        offset: 0,
                        path: node.getPath(text.key)
                    });
                    return _point2;
                }
                if (target.object !== 'text') {
                    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'A point should not reference a non-text node!');
                    var _text = target.getTextAtOffset(offset);
                    var before = target.getOffset(_text.key);
                    var _point3 = this.merge({
                        offset: offset - before,
                        key: _text.key,
                        path: node.getPath(_text.key)
                    });
                    return _point3;
                }
                if (target && path && key && key !== target.key) {
                    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "A point's `key` did not match its `path`!");
                    // TODO: if we look up by path above and it differs by key, do we want to reset it to looking up by key?
                }
                var point = this.merge({
                    key: target.key,
                    path: path == null ? node.getPath(target.key) : path,
                    offset: offset == null ? 0 : Math.min(offset, target.text.length)
                });
                // COMPAT: There is an ambiguity, since a point can exist at the end of a
                // text node, or at the start of the following one. To eliminate it we
                // enforce that if there is a following text node, we always move it there.
                if (point.offset === target.text.length) {
                    var block = node.getClosestBlock(point.path);
                    // TODO: this next line is broken because `getNextText` takes a path
                    var next = block.getNextText();
                    if (next) {
                        point = point.merge({
                            key: next.key,
                            path: node.getPath(next.key),
                            offset: 0
                        });
                    }
                }
                return point;
            }
            /**
             * Set the point's key to a new `key`.
             *
             * @param {String} key
             * @return {Point}
             */
        }, {
            key: 'setKey',
            value: function setKey(key) {
                if (key != null) {
                    key = KeyUtils.create(key);
                }
                var point = this.set('key', key);
                return point;
            }
            /**
             * Set the point's offset to a new `offset`.
             *
             * @param {Number} offset
             * @return {Point}
             */
        }, {
            key: 'setOffset',
            value: function setOffset(offset) {
                var point = this.set('offset', offset);
                return point;
            }
            /**
             * Set the point's path to a new `path`.
             *
             * @param {List|Array} path
             * @return {Point}
             */
        }, {
            key: 'setPath',
            value: function setPath(path) {
                if (path != null) {
                    path = PathUtils.create(path);
                }
                var point = this.set('path', path);
                return point;
            }
            /**
             * Return a JSON representation of the point.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    key: this.key,
                    offset: this.offset,
                    path: this.path && this.path.toArray()
                };
                if (!options.preserveKeys) {
                    delete object.key;
                }
                return object;
            }
            /**
             * Unset the point.
             *
             * @return {Point}
             */
        }, {
            key: 'unset',
            value: function unset() {
                return this.merge({
                    key: null,
                    offset: null,
                    path: null
                });
            }
        }, {
            key: 'isSet',
            /**
             * Check whether all properties of the point are set.
             *
             * @return {Boolean}
             */
            get: function get$$1() {
                return this.key != null && this.offset != null && this.path != null;
            }
            /**
             * Check whether any property of the point is not set.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isUnset',
            get: function get$$1() {
                return !this.isSet;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Point` with `attrs`.
             *
             * @param {Object|Point} attrs
             * @return {Point}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Point.isPoint(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Point.fromJSON(attrs);
                }
                throw new Error('`Point.create` only accepts objects or points, but you passed it: ' + attrs);
            }
            /**
             * Create a dictionary of settable point properties from `attrs`.
             *
             * @param {Object|Point} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Point.isPoint(a)) {
                    return {
                        key: a.key,
                        offset: a.offset,
                        path: a.path
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('key' in a)
                        p.key = a.key;
                    if ('offset' in a)
                        p.offset = a.offset;
                    if ('path' in a)
                        p.path = PathUtils.create(a.path);
                    // If only a path is set, or only a key is set, ensure that the other is
                    // set to null so that it can be normalized back to the right value.
                    // Otherwise we won't realize that the path and key don't match anymore.
                    if ('path' in a && !('key' in a))
                        p.key = null;
                    if ('key' in a && !('path' in a))
                        p.path = null;
                    return p;
                }
                throw new Error('`Point.createProperties` only accepts objects or points, but you passed it: ' + a);
            }
            /**
             * Create a `Point` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Point}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var _object$key = object.key, key = _object$key === undefined ? null : _object$key, _object$offset = object.offset, offset = _object$offset === undefined ? null : _object$offset, _object$path = object.path, path = _object$path === undefined ? null : _object$path;
                var point = new Point({
                    key: key,
                    offset: offset,
                    path: PathUtils.create(path)
                });
                return point;
            }
        }]);
    return Point;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS));
/**
 * Data.
 *
 * This isn't an immutable record, it's just a thin wrapper around `Map` so that
 * we can allow for more convenient creation.
 *
 * @type {Object}
 */
var Data = function () {
    function Data() {
        classCallCheck(this, Data);
    }
    createClass(Data, null, [{
            key: 'create',
            /**
             * Create a new `Data` with `attrs`.
             *
             * @param {Object|Data|Map} attrs
             * @return {Data} data
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Data.fromJSON(attrs);
                }
                throw new Error('`Data.create` only accepts objects or maps, but you passed it: ' + attrs);
            }
            /**
             * Create a `Data` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Data}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                return new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"](object);
            }
            /**
             * Alias `fromJS`.
             */
        }]);
    return Data;
}();
/**
 * Export.
 *
 * @type {Object}
 */
Data.fromJS = Data.fromJSON;
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$1 = {
    data: undefined,
    type: undefined
    /**
     * Mark.
     *
     * @type {Mark}
     */
};
var Mark = function (_Record) {
    inherits(Mark, _Record);
    function Mark() {
        classCallCheck(this, Mark);
        return possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
    }
    createClass(Mark, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the mark.
             *
             * @return {Object}
             */
            value: function toJSON() {
                var object = {
                    object: this.object,
                    type: this.type,
                    data: this.data.toJSON()
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Mark` with `attrs`.
             *
             * @param {Object|Mark} attrs
             * @return {Mark}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Mark.isMark(attrs)) {
                    return attrs;
                }
                if (typeof attrs === 'string') {
                    attrs = { type: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Mark.fromJSON(attrs);
                }
                throw new Error('`Mark.create` only accepts objects, strings or marks, but you passed it: ' + attrs);
            }
            /**
             * Create a set of marks.
             *
             * @param {Array<Object|Mark>} elements
             * @return {Set<Mark>}
             */
        }, {
            key: 'createSet',
            value: function createSet(elements) {
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["Set"].isSet(elements) || Array.isArray(elements)) {
                    var marks = new immutable__WEBPACK_IMPORTED_MODULE_0__["Set"](elements.map(Mark.create));
                    return marks;
                }
                if (elements == null) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])();
                }
                throw new Error('`Mark.createSet` only accepts sets, arrays or null, but you passed it: ' + elements);
            }
            /**
             * Create a dictionary of settable mark properties from `attrs`.
             *
             * @param {Object|String|Mark} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Mark.isMark(attrs)) {
                    return {
                        data: attrs.data,
                        type: attrs.type
                    };
                }
                if (typeof attrs === 'string') {
                    return { type: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    var props = {};
                    if ('type' in attrs)
                        props.type = attrs.type;
                    if ('data' in attrs)
                        props.data = Data.create(attrs.data);
                    return props;
                }
                throw new Error('`Mark.createProperties` only accepts objects, strings or marks, but you passed it: ' + attrs);
            }
            /**
             * Create a `Mark` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Mark}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var _object$data = object.data, data = _object$data === undefined ? {} : _object$data, type = object.type;
                if (typeof type !== 'string') {
                    throw new Error('`Mark.fromJS` requires a `type` string.');
                }
                var mark = new Mark({
                    type: type,
                    data: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"](data)
                });
                return mark;
            }
            /**
             * Check if `any` is a set of marks.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isMarkSet',
            value: function isMarkSet(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["Set"].isSet(any) && any.every(function (item) {
                    return Mark.isMark(item);
                });
            }
        }]);
    return Mark;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$1));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$2 = {
    type: undefined,
    data: undefined,
    anchor: undefined,
    focus: undefined
    /**
     * Decoration.
     *
     * @type {Decoration}
     */
};
var Decoration = function (_Record) {
    inherits(Decoration, _Record);
    function Decoration() {
        classCallCheck(this, Decoration);
        return possibleConstructorReturn(this, (Decoration.__proto__ || Object.getPrototypeOf(Decoration)).apply(this, arguments));
    }
    createClass(Decoration, [{
            key: 'setProperties',
            /**
             * Set new `properties` on the decoration.
             *
             * @param {Object|Range|Selection} properties
             * @return {Range}
             */
            value: function setProperties(properties) {
                properties = Decoration.createProperties(properties);
                var decoration = this.merge(properties);
                return decoration;
            }
            /**
             * Return a JSON representation of the decoration.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    type: this.type,
                    data: this.data.toJSON(),
                    anchor: this.anchor.toJSON(options),
                    focus: this.focus.toJSON(options)
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Decoration` with `attrs`.
             *
             * @param {Object|Decoration} attrs
             * @return {Decoration}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Decoration.isDecoration(attrs)) {
                    return attrs;
                }
                if (Range.isRange(attrs)) {
                    return Decoration.fromJSON(Range.createProperties(attrs));
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Decoration.fromJSON(attrs);
                }
                throw new Error('`Decoration.create` only accepts objects or decorations, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Ranges` from `elements`.
             *
             * @param {Array<Decoration|Object>|List<Decoration|Object>} elements
             * @return {List<Decoration>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](elements.map(Decoration.create));
                    return list;
                }
                throw new Error('`Decoration.createList` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a dictionary of settable decoration properties from `attrs`.
             *
             * @param {Object|String|Decoration} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Decoration.isDecoration(a)) {
                    return {
                        type: a.type,
                        data: a.data,
                        anchor: Point.createProperties(a.anchor),
                        focus: Point.createProperties(a.focus),
                        mark: Mark.create(a.mark)
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('type' in a)
                        p.type = a.type;
                    if ('data' in a)
                        p.data = Data.create(a.data);
                    if ('anchor' in a)
                        p.anchor = Point.create(a.anchor);
                    if ('focus' in a)
                        p.focus = Point.create(a.focus);
                    return p;
                }
                throw new Error('`Decoration.createProperties` only accepts objects or decorations, but you passed it: ' + a);
            }
            /**
             * Create a `Decoration` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Decoration}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var anchor = object.anchor, focus = object.focus;
                var type = object.type, data = object.data;
                if (object.mark && !type) {
                    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47 the `decoration.mark` property has been changed to `decoration.type` and `decoration.data` directly.');
                    type = object.mark.type;
                    data = object.mark.data;
                }
                if (!type) {
                    throw new Error('Decorations must be created with a `type`, but you passed: ' + JSON.stringify(object));
                }
                var decoration = new Decoration({
                    type: type,
                    data: Data.create(data || {}),
                    anchor: Point.fromJSON(anchor || {}),
                    focus: Point.fromJSON(focus || {})
                });
                return decoration;
            }
        }]);
    return Decoration;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$2));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$3 = {
    anchor: undefined,
    focus: undefined,
    isFocused: undefined,
    marks: undefined
    /**
     * Selection.
     *
     * @type {Selection}
     */
};
var Selection = function (_Record) {
    inherits(Selection, _Record);
    function Selection() {
        classCallCheck(this, Selection);
        return possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).apply(this, arguments));
    }
    createClass(Selection, [{
            key: 'setIsFocused',
            /**
             * Set the `isFocused` property to a new `value`.
             *
             * @param {Boolean} value
             * @return {Selection}
             */
            value: function setIsFocused(value) {
                var selection = this.set('isFocused', value);
                return selection;
            }
            /**
             * Set the `marks` property to a new set of `marks`.
             *
             * @param {Set} marks
             * @return {Selection}
             */
        }, {
            key: 'setMarks',
            value: function setMarks(marks) {
                var selection = this.set('marks', marks);
                return selection;
            }
            /**
             * Set new `properties` on the selection.
             *
             * @param {Object|Range|Selection} properties
             * @return {Range}
             */
        }, {
            key: 'setProperties',
            value: function setProperties(properties) {
                properties = Selection.createProperties(properties);
                var _properties = properties, anchor = _properties.anchor, focus = _properties.focus, props = objectWithoutProperties(_properties, ['anchor', 'focus']);
                if (anchor) {
                    props.anchor = Point.create(anchor);
                }
                if (focus) {
                    props.focus = Point.create(focus);
                }
                var selection = this.merge(props);
                return selection;
            }
            /**
             * Return a JSON representation of the selection.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    anchor: this.anchor.toJSON(options),
                    focus: this.focus.toJSON(options),
                    isFocused: this.isFocused,
                    marks: this.marks == null ? null : this.marks.toArray().map(function (m) {
                        return m.toJSON();
                    })
                };
                return object;
            }
        }, {
            key: 'isBlurred',
            /**
             * Check whether the selection is blurred.
             *
             * @return {Boolean}
             */
            get: function get$$1() {
                return !this.isFocused;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Selection` with `attrs`.
             *
             * @param {Object|Selection} attrs
             * @return {Selection}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Selection.isSelection(attrs)) {
                    return attrs;
                }
                if (Range.isRange(attrs)) {
                    return Selection.fromJSON(Range.createProperties(attrs));
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Selection.fromJSON(attrs);
                }
                throw new Error('`Selection.create` only accepts objects, ranges or selections, but you passed it: ' + attrs);
            }
            /**
             * Create a dictionary of settable selection properties from `attrs`.
             *
             * @param {Object|String|Selection} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Selection.isSelection(a)) {
                    return {
                        anchor: Point.createProperties(a.anchor),
                        focus: Point.createProperties(a.focus),
                        isFocused: a.isFocused,
                        marks: a.marks
                    };
                }
                if (Range.isRange(a)) {
                    return {
                        anchor: Point.createProperties(a.anchor),
                        focus: Point.createProperties(a.focus)
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('anchor' in a)
                        p.anchor = Point.create(a.anchor);
                    if ('focus' in a)
                        p.focus = Point.create(a.focus);
                    if ('isFocused' in a)
                        p.isFocused = a.isFocused;
                    if ('marks' in a)
                        p.marks = a.marks == null ? null : Mark.createSet(a.marks);
                    return p;
                }
                throw new Error('`Selection.createProperties` only accepts objects, ranges or selections, but you passed it: ' + a);
            }
            /**
             * Create a `Selection` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Selection}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var anchor = object.anchor, focus = object.focus, _object$isFocused = object.isFocused, isFocused = _object$isFocused === undefined ? false : _object$isFocused, _object$marks = object.marks, marks = _object$marks === undefined ? null : _object$marks;
                var selection = new Selection({
                    anchor: Point.fromJSON(anchor || {}),
                    focus: Point.fromJSON(focus || {}),
                    isFocused: isFocused,
                    marks: marks == null ? null : new immutable__WEBPACK_IMPORTED_MODULE_0__["Set"](marks.map(Mark.fromJSON))
                });
                return selection;
            }
        }]);
    return Selection;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$3));
/**
 * Slate-specific object types.
 *
 * @type {Object}
 */
var TYPES = {
    annotation: '@@__SLATE_ANNOTATION__@@',
    block: '@@__SLATE_BLOCK__@@',
    change: '@@__SLATE_CHANGE__@@',
    decoration: '@@__SLATE_DECORATION__@@',
    document: '@@__SLATE_DOCUMENT__@@',
    editor: '@@__SLATE_EDITOR__@@',
    inline: '@@__SLATE_INLINE__@@',
    leaf: '@@__SLATE_LEAF__@@',
    mark: '@@__SLATE_MARK__@@',
    operation: '@@__SLATE_OPERATION__@@',
    point: '@@__SLATE_POINT__@@',
    range: '@@__SLATE_RANGE__@@',
    selection: '@@__SLATE_SELECTION__@@',
    text: '@@__SLATE_TEXT__@@',
    value: '@@__SLATE_VALUE__@@'
    /**
     * Determine whether a `value` is of `type`.
     *
     * @param {string} type
     * @param {any} value
     * @return {boolean}
     */
};
function isObject(type, value) {
    return !!(value && value[TYPES[type]]);
}
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$4 = {
    anchor: undefined,
    focus: undefined
    /**
     * Range.
     *
     * @type {Range}
     */
};
var Range = function (_Record) {
    inherits(Range, _Record);
    function Range() {
        classCallCheck(this, Range);
        return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
    }
    createClass(Range, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the range.
             *
             * @param {Object} options
             * @return {Object}
             */
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    anchor: this.anchor.toJSON(options),
                    focus: this.focus.toJSON(options)
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Range` with `attrs`.
             *
             * @param {Object|Range} attrs
             * @return {Range}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Range.isRange(attrs)) {
                    if (attrs.object === 'range') {
                        return attrs;
                    }
                    else {
                        return Range.fromJSON(Range.createProperties(attrs));
                    }
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Range.fromJSON(attrs);
                }
                throw new Error('`Range.create` only accepts objects or ranges, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Ranges` from `elements`.
             *
             * @param {Array<Range|Object>|List<Range|Object>} elements
             * @return {List<Range>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](elements.map(Range.create));
                    return list;
                }
                throw new Error('`Range.createList` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a dictionary of settable range properties from `attrs`.
             *
             * @param {Object|String|Range} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Range.isRange(a)) {
                    return {
                        anchor: Point.createProperties(a.anchor),
                        focus: Point.createProperties(a.focus)
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('anchor' in a)
                        p.anchor = Point.create(a.anchor);
                    if ('focus' in a)
                        p.focus = Point.create(a.focus);
                    return p;
                }
                throw new Error('`Range.createProperties` only accepts objects, annotations, decorations, ranges or selections, but you passed it: ' + a);
            }
            /**
             * Create a `Range` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Range}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var anchor = object.anchor, focus = object.focus;
                var range = new Range({
                    anchor: Point.fromJSON(anchor || {}),
                    focus: Point.fromJSON(focus || {})
                });
                return range;
            }
            /**
             * Check if a `value` is a `Range`, or is range-like.
             *
             * @param {Any} value
             * @return {Boolean}
             */
        }, {
            key: 'isRange',
            value: function isRange(value) {
                return isObject('range', value) || Decoration.isDecoration(value) || Selection.isSelection(value);
            }
        }]);
    return Range;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$4));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$5 = {
    key: undefined,
    type: undefined,
    data: undefined,
    anchor: undefined,
    focus: undefined
    /**
     * Annotation.
     *
     * @type {Annotation}
     */
};
var Annotation = function (_Record) {
    inherits(Annotation, _Record);
    function Annotation() {
        classCallCheck(this, Annotation);
        return possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
    }
    createClass(Annotation, [{
            key: 'setProperties',
            /**
             * Set new `properties` on the annotation.
             *
             * @param {Object|Range|Selection} properties
             * @return {Range}
             */
            value: function setProperties(properties) {
                properties = Annotation.createProperties(properties);
                var annotation = this.merge(properties);
                return annotation;
            }
            /**
             * Return a JSON representation of the annotation.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    key: this.key,
                    type: this.type,
                    data: this.data.toJSON(),
                    anchor: this.anchor.toJSON(options),
                    focus: this.focus.toJSON(options)
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Annotation` with `attrs`.
             *
             * @param {Object|Annotation} attrs
             * @return {Annotation}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Annotation.isAnnotation(attrs)) {
                    return attrs;
                }
                if (Range.isRange(attrs)) {
                    return Annotation.fromJSON(Range.createProperties(attrs));
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Annotation.fromJSON(attrs);
                }
                throw new Error('`Annotation.create` only accepts objects or annotations, but you passed it: ' + attrs);
            }
            /**
             * Create a map of annotations from `elements`.
             *
             * @param {Object<String,Annotation>|Map<String,Annotation>} elements
             * @return {Map<String,Annotation>}
             */
        }, {
            key: 'createMap',
            value: function createMap() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(elements)) {
                    return elements;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(elements)) {
                    var obj = {};
                    for (var key in elements) {
                        var value = elements[key];
                        var annotation = Annotation.create(value);
                        obj[key] = annotation;
                    }
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(obj);
                }
                throw new Error('`Annotation.createMap` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a dictionary of settable annotation properties from `attrs`.
             *
             * @param {Object|String|Annotation} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Annotation.isAnnotation(a)) {
                    return {
                        key: a.key,
                        type: a.type,
                        data: a.data,
                        anchor: Point.createProperties(a.anchor),
                        focus: Point.createProperties(a.focus)
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('key' in a)
                        p.key = a.key;
                    if ('type' in a)
                        p.type = a.type;
                    if ('data' in a)
                        p.data = Data.create(a.data);
                    if ('anchor' in a)
                        p.anchor = Point.create(a.anchor);
                    if ('focus' in a)
                        p.focus = Point.create(a.focus);
                    return p;
                }
                throw new Error('`Annotation.createProperties` only accepts objects or annotations, but you passed it: ' + a);
            }
            /**
             * Create a `Annotation` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Annotation}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var key = object.key, type = object.type, data = object.data, anchor = object.anchor, focus = object.focus;
                if (!key) {
                    throw new Error('Annotations must be created with a `key`, but you passed: ' + JSON.stringify(object));
                }
                if (!type) {
                    throw new Error('Annotations must be created with a `type`, but you passed: ' + JSON.stringify(object));
                }
                var annotation = new Annotation({
                    key: key,
                    type: type,
                    data: Data.create(data || {}),
                    anchor: Point.fromJSON(anchor || {}),
                    focus: Point.fromJSON(focus || {})
                });
                return annotation;
            }
        }]);
    return Annotation;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$5));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$6 = {
    data: undefined,
    key: undefined,
    nodes: undefined
    /**
     * Document.
     *
     * @type {Document}
     */
};
var Document = function (_Record) {
    inherits(Document, _Record);
    function Document() {
        classCallCheck(this, Document);
        return possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
    }
    createClass(Document, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the document.
             *
             * @param {Object} options
             * @return {Object}
             */
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    data: this.data.toJSON(),
                    nodes: this.nodes.toArray().map(function (n) {
                        return n.toJSON(options);
                    })
                };
                if (options.preserveKeys) {
                    object.key = this.key;
                }
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Document` with `attrs`.
             *
             * @param {Object|Array|List|Text} attrs
             * @return {Document}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Document.isDocument(attrs)) {
                    return attrs;
                }
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(attrs) || Array.isArray(attrs)) {
                    attrs = { nodes: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Document.fromJSON(attrs);
                }
                throw new Error('`Document.create` only accepts objects, arrays, lists or documents, but you passed it: ' + attrs);
            }
            /**
             * Create a `Document` from a JSON `object`.
             *
             * @param {Object|Document} object
             * @return {Document}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                if (Document.isDocument(object)) {
                    return object;
                }
                var _object$data = object.data, data = _object$data === undefined ? {} : _object$data, _object$key = object.key, key = _object$key === undefined ? KeyUtils.create() : _object$key, _object$nodes = object.nodes, nodes = _object$nodes === undefined ? [] : _object$nodes;
                var document = new Document({
                    key: key,
                    data: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"](data),
                    nodes: Node.createList(nodes)
                });
                return document;
            }
        }]);
    return Document;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$6));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$7 = {
    data: undefined,
    key: undefined,
    nodes: undefined,
    type: undefined
    /**
     * Inline.
     *
     * @type {Inline}
     */
};
var Inline = function (_Record) {
    inherits(Inline, _Record);
    function Inline() {
        classCallCheck(this, Inline);
        return possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
    }
    createClass(Inline, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the inline.
             *
             * @param {Object} options
             * @return {Object}
             */
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    type: this.type,
                    data: this.data.toJSON(),
                    nodes: this.nodes.toArray().map(function (n) {
                        return n.toJSON(options);
                    })
                };
                if (options.preserveKeys) {
                    object.key = this.key;
                }
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Inline` with `attrs`.
             *
             * @param {Object|String|Inline} attrs
             * @return {Inline}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Inline.isInline(attrs)) {
                    return attrs;
                }
                if (typeof attrs === 'string') {
                    attrs = { type: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Inline.fromJSON(attrs);
                }
                throw new Error('`Inline.create` only accepts objects, strings or inlines, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Inlines` from an array.
             *
             * @param {Array<Inline|Object>|List<Inline|Object>} elements
             * @return {List<Inline>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](elements.map(Inline.create));
                    return list;
                }
                throw new Error('`Inline.createList` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a `Inline` from a JSON `object`.
             *
             * @param {Object|Inline} object
             * @return {Inline}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                if (Inline.isInline(object)) {
                    return object;
                }
                var _object$data = object.data, data = _object$data === undefined ? {} : _object$data, _object$key = object.key, key = _object$key === undefined ? KeyUtils.create() : _object$key, _object$nodes = object.nodes, nodes = _object$nodes === undefined ? [] : _object$nodes, type = object.type;
                if (typeof type !== 'string') {
                    throw new Error('`Inline.fromJS` requires a `type` string.');
                }
                var inline = new Inline({
                    key: key,
                    type: type,
                    data: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"](data),
                    nodes: Node.createList(nodes)
                });
                return inline;
            }
            /**
             * Check if `any` is a list of inlines.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isInlineList',
            value: function isInlineList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Inline.isInline(item);
                });
            }
        }]);
    return Inline;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$7));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$8 = {
    key: undefined,
    marks: undefined,
    text: undefined
};
var Leaf = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    text: undefined,
    marks: undefined,
    annotations: undefined,
    decorations: undefined
});
/**
 * Text.
 *
 * @type {Text}
 */
var Text = function (_Record) {
    inherits(Text, _Record);
    function Text() {
        classCallCheck(this, Text);
        return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }
    createClass(Text, [{
            key: 'addMark',
            /**
             * Add a `mark`.
             *
             * @param {Mark} mark
             * @return {Text}
             */
            value: function addMark(mark) {
                mark = Mark.create(mark);
                var marks = this.marks;
                var next = marks.add(mark);
                var node = this.set('marks', next);
                return node;
            }
            /**
             * Add a set of `marks`.
             *
             * @param {Set<Mark>} marks
             * @return {Text}
             */
        }, {
            key: 'addMarks',
            value: function addMarks(marks) {
                marks = Mark.createSet(marks);
                var node = this.set('marks', this.marks.union(marks));
                return node;
            }
            /**
             * Get a list of uniquely-formatted leaves for the text node, given its
             * existing marks, and its current `annotations` and `decorations`.
             *
             * @param {Map<String,Annotation>} annotations
             * @param {List<Decoration>} decorations
             * @return {List<Leaf>}
             */
        }, {
            key: 'getLeaves',
            value: function getLeaves(annotations, decorations) {
                var text = this.text, marks = this.marks;
                var leaves = [{ text: text, marks: marks, annotations: [], decorations: [] }];
                // Helper to split a leaf into two `at` an offset.
                var split = function split(leaf, at) {
                    return [{
                            text: leaf.text.slice(0, at),
                            marks: leaf.marks,
                            annotations: [].concat(toConsumableArray(leaf.annotations)),
                            decorations: [].concat(toConsumableArray(leaf.decorations))
                        }, {
                            text: leaf.text.slice(at),
                            marks: leaf.marks,
                            annotations: [].concat(toConsumableArray(leaf.annotations)),
                            decorations: [].concat(toConsumableArray(leaf.decorations))
                        }];
                };
                // Helper to compile the leaves for a `kind` of format.
                var compile = function compile(kind) {
                    var formats = kind === 'annotations' ? annotations.values() : decorations;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = formats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var format = _step.value;
                            var start = format.start, end = format.end;
                            var next = [];
                            var o = 0;
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;
                            try {
                                for (var _iterator2 = leaves[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var leaf = _step2.value;
                                    var length = leaf.text.length;
                                    var offset = o;
                                    o += length;
                                    // If the range starts after the leaf, or ends before it, continue.
                                    if (start.offset > offset + length || end.offset <= offset) {
                                        next.push(leaf);
                                        continue;
                                    }
                                    // If the range encompases the entire leaf, add the format.
                                    if (start.offset <= offset && end.offset >= offset + length) {
                                        leaf[kind].push(format);
                                        next.push(leaf);
                                        continue;
                                    }
                                    // Otherwise we need to split the leaf, at the start, end, or both,
                                    // and add the format to the middle intersecting section. Do the end
                                    // split first since we don't need to update the offset that way.
                                    var middle = leaf;
                                    var before = void 0;
                                    var after = void 0;
                                    if (end.offset < offset + length) {
                                        var _split = split(middle, end.offset - offset);
                                        var _split2 = slicedToArray(_split, 2);
                                        middle = _split2[0];
                                        after = _split2[1];
                                    }
                                    if (start.offset > offset) {
                                        var _split3 = split(middle, start.offset - offset);
                                        var _split4 = slicedToArray(_split3, 2);
                                        before = _split4[0];
                                        middle = _split4[1];
                                    }
                                    middle[kind].push(format);
                                    if (before) {
                                        next.push(before);
                                    }
                                    next.push(middle);
                                    if (after) {
                                        next.push(after);
                                    }
                                }
                            }
                            catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            }
                            finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                }
                                finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
                            leaves = next;
                        }
                    }
                    catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    }
                    finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        }
                        finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
                compile('annotations');
                compile('decorations');
                leaves = leaves.map(function (leaf) {
                    return new Leaf(_extends({}, leaf, {
                        annotations: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(leaf.annotations),
                        decorations: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(leaf.decorations)
                    }));
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(leaves);
                return list;
            }
            /**
             * Insert `text` at `index`.
             *
             * @param {Number} index
             * @param {String} string
             * @return {Text}
             */
        }, {
            key: 'insertText',
            value: function insertText(index, string) {
                var text = this.text;
                var next = text.slice(0, index) + string + text.slice(index);
                var node = this.set('text', next);
                return node;
            }
            /**
             * Remove a `mark`.
             *
             * @param {Mark} mark
             * @return {Text}
             */
        }, {
            key: 'removeMark',
            value: function removeMark(mark) {
                mark = Mark.create(mark);
                var marks = this.marks;
                var next = marks.remove(mark);
                var node = this.set('marks', next);
                return node;
            }
            /**
             * Remove text from the text node at `index` for `length`.
             *
             * @param {Number} index
             * @param {Number} length
             * @return {Text}
             */
        }, {
            key: 'removeText',
            value: function removeText(index, length) {
                var text = this.text;
                var next = text.slice(0, index) + text.slice(index + length);
                var node = this.set('text', next);
                return node;
            }
            /**
             * Return a JSON representation of the text.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    text: this.text,
                    marks: this.marks.toArray().map(function (m) {
                        return m.toJSON();
                    })
                };
                if (options.preserveKeys) {
                    object.key = this.key;
                }
                return object;
            }
            /**
             * Set a `newProperties` on an existing `mark`.
             *
             * @param {Object} mark
             * @param {Object} newProperties
             * @return {Text}
             */
        }, {
            key: 'setMark',
            value: function setMark(properties, newProperties) {
                var marks = this.marks;
                var mark = Mark.create(properties);
                var newMark = mark.merge(newProperties);
                var next = marks.remove(mark).add(newMark);
                var node = this.set('marks', next);
                return node;
            }
            /**
             * Split the node into two at `index`.
             *
             * @param {Number} index
             * @returns {Array<Text>}
             */
        }, {
            key: 'splitText',
            value: function splitText(index) {
                var text = this.text;
                var one = this.set('text', text.slice(0, index));
                var two = this.set('text', text.slice(index)).regenerateKey();
                return [one, two];
            }
            /**
             * Merge the node with an `other` text node.
             *
             * @param {Text} other
             * @returns {Text}
             */
        }, {
            key: 'mergeText',
            value: function mergeText(other) {
                var next = this.text + other.text;
                var node = this.set('text', next);
                return node;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Text` with `attrs`.
             *
             * @param {Object|Array|List|String|Text} attrs
             * @return {Text}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                if (Text.isText(attrs)) {
                    return attrs;
                }
                if (typeof attrs === 'string') {
                    attrs = { text: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Text.fromJSON(attrs);
                }
                throw new Error('`Text.create` only accepts objects, arrays, strings or texts, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Texts` from `elements`.
             *
             * @param {Array<Text|Object>|List<Text|Object>} elements
             * @return {List<Text>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](elements.map(Text.create));
                    return list;
                }
                throw new Error('`Text.createList` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a `Text` from a JSON `object`.
             *
             * @param {Object|Text} object
             * @return {Text}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                if (Text.isText(object)) {
                    return object;
                }
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(object.leaves == null, 'As of slate@0.46, the `leaves` property of text nodes has been removed! Each individual leaf should be created as a text node instead.');
                var _object$text = object.text, text = _object$text === undefined ? '' : _object$text, _object$marks = object.marks, marks = _object$marks === undefined ? [] : _object$marks, _object$key = object.key, key = _object$key === undefined ? KeyUtils.create() : _object$key;
                var node = new Text({
                    key: key,
                    text: text,
                    marks: Mark.createSet(marks)
                });
                return node;
            }
            /**
             * Check if `any` is a list of texts.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isTextList',
            value: function isTextList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Text.isText(item);
                });
            }
        }]);
    return Text;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$8));
/**
 * A pseudo-model that is used for its static methods only.
 *
 * @type {Node}
 */
var Node = function () {
    function Node() {
        classCallCheck(this, Node);
    }
    createClass(Node, null, [{
            key: 'create',
            /**
             * Create a new `Node` with `attrs`.
             *
             * @param {Object|Node} attrs
             * @return {Node}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Node.isNode(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    var object = attrs.object;
                    if (!object && attrs.kind) {
                        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');
                        object = attrs.kind;
                    }
                    switch (object) {
                        case 'block':
                            return Block.create(attrs);
                        case 'document':
                            return Document.create(attrs);
                        case 'inline':
                            return Inline.create(attrs);
                        case 'text':
                            return Text.create(attrs);
                        default:
                            {
                                throw new Error('`Node.create` requires a `object` string.');
                            }
                    }
                }
                throw new Error('`Node.create` only accepts objects or nodes but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Nodes` from an array.
             *
             * @param {Array<Object|Node>} elements
             * @return {List<Node>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var array = [];
                    elements.forEach(function (el) {
                        if (el && el.object === 'text' && el.leaves && Array.isArray(el.leaves)) {
                            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.46, the `leaves` property of Text nodes has been removed. Instead, each text node contains a string of text and a unique set of marks and leaves are unnecessary.');
                            var texts = Text.createList(el.leaves).toArray();
                            array = array.concat(texts);
                            return;
                        }
                        var node = Node.create(el);
                        array.push(node);
                    });
                    var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                    return list;
                }
                throw new Error('`Node.createList` only accepts lists or arrays, but you passed it: ' + elements);
            }
            /**
             * Create a dictionary of settable node properties from `attrs`.
             *
             * @param {Object|String|Node} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Block.isBlock(attrs) || Inline.isInline(attrs)) {
                    return {
                        data: attrs.data,
                        type: attrs.type
                    };
                }
                if (typeof attrs === 'string') {
                    return { type: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    var props = {};
                    if ('type' in attrs)
                        props.type = attrs.type;
                    if ('data' in attrs)
                        props.data = Data.create(attrs.data);
                    return props;
                }
                throw new Error('`Node.createProperties` only accepts objects, strings, blocks or inlines, but you passed it: ' + attrs);
            }
            /**
             * Create a `Node` from a JSON `value`.
             *
             * @param {Object} value
             * @return {Node}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(value) {
                var object = value.object;
                if (!object && value.kind) {
                    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');
                    object = value.kind;
                }
                switch (object) {
                    case 'block':
                        return Block.fromJSON(value);
                    case 'document':
                        return Document.fromJSON(value);
                    case 'inline':
                        return Inline.fromJSON(value);
                    case 'text':
                        return Text.fromJSON(value);
                    default:
                        {
                            throw new Error('`Node.fromJSON` requires an `object` of either \'block\', \'document\', \'inline\' or \'text\', but you passed: ' + value);
                        }
                }
            }
            /**
             * Check if `any` is a `Node`.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isNode',
            value: function isNode(any) {
                return Block.isBlock(any) || Document.isDocument(any) || Inline.isInline(any) || Text.isText(any);
            }
            /**
             * Check if `any` is a list of nodes.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isNodeList',
            value: function isNodeList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Node.isNode(item);
                });
            }
        }]);
    return Node;
}();
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$9 = {
    data: undefined,
    key: undefined,
    nodes: undefined,
    type: undefined
    /**
     * Block.
     *
     * @type {Block}
     */
};
var Block = function (_Record) {
    inherits(Block, _Record);
    function Block() {
        classCallCheck(this, Block);
        return possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
    }
    createClass(Block, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the block.
             *
             * @param {Object} options
             * @return {Object}
             */
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    type: this.type,
                    data: this.data.toJSON(),
                    nodes: this.nodes.toArray().map(function (n) {
                        return n.toJSON(options);
                    })
                };
                if (options.preserveKeys) {
                    object.key = this.key;
                }
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Block` from `attrs`.
             *
             * @param {Object|String|Block} attrs
             * @return {Block}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Block.isBlock(attrs)) {
                    return attrs;
                }
                if (typeof attrs === 'string') {
                    attrs = { type: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Block.fromJSON(attrs);
                }
                throw new Error('`Block.create` only accepts objects, strings or blocks, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Blocks` from `attrs`.
             *
             * @param {Array<Block|Object>|List<Block|Object>} attrs
             * @return {List<Block>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(attrs) || Array.isArray(attrs)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](attrs.map(Block.create));
                    return list;
                }
                throw new Error('`Block.createList` only accepts arrays or lists, but you passed it: ' + attrs);
            }
            /**
             * Create a `Block` from a JSON `object`.
             *
             * @param {Object|Block} object
             * @return {Block}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                if (Block.isBlock(object)) {
                    return object;
                }
                var _object$data = object.data, data = _object$data === undefined ? {} : _object$data, _object$key = object.key, key = _object$key === undefined ? KeyUtils.create() : _object$key, _object$nodes = object.nodes, nodes = _object$nodes === undefined ? [] : _object$nodes, type = object.type;
                if (typeof type !== 'string') {
                    throw new Error('`Block.fromJSON` requires a `type` string.');
                }
                var block = new Block({
                    key: key,
                    type: type,
                    data: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(data),
                    nodes: Node.createList(nodes)
                });
                return block;
            }
            /**
             * Check if `any` is a block list.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isBlockList',
            value: function isBlockList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Block.isBlock(item);
                });
            }
        }]);
    return Block;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$9));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$10 = {
    annotations: undefined,
    data: undefined,
    document: undefined,
    selection: undefined
    /**
     * Value.
     *
     * @type {Value}
     */
};
var Value = function (_Record) {
    inherits(Value, _Record);
    function Value() {
        classCallCheck(this, Value);
        return possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
    }
    createClass(Value, [{
            key: 'addAnnotation',
            /**
             * Add an `annotation` to the value.
             *
             * @param {Annotation} annotation
             * @param {Mark} mark
             * @return {Value}
             */
            value: function addAnnotation(annotation) {
                annotation = Annotation.create(annotation);
                var value = this;
                var _value = value, annotations = _value.annotations;
                var _annotation = annotation, key = _annotation.key;
                annotations = annotations.set(key, annotation);
                value = value.set('annotations', annotations);
                return value;
            }
            /**
             * Add `mark` to text at `path`.
             *
             * @param {List|String} path
             * @param {Mark} mark
             * @return {Value}
             */
        }, {
            key: 'addMark',
            value: function addMark(path, mark) {
                mark = Mark.create(mark);
                var value = this;
                var _value2 = value, document = _value2.document;
                document = document.addMark(path, mark);
                value = value.set('document', document);
                return value;
            }
            /**
             * Insert a `node`.
             *
             * @param {List|String} path
             * @param {Node} node
             * @return {Value}
             */
        }, {
            key: 'insertNode',
            value: function insertNode(path, node) {
                var value = this;
                var _value3 = value, document = _value3.document;
                document = document.insertNode(path, node);
                value = value.set('document', document);
                value = value.mapRanges(function (range) {
                    return range.updatePoints(function (point) {
                        return point.setPath(null);
                    });
                });
                return value;
            }
            /**
             * Insert `text` at `offset` in node by `path`.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @param {String} text
             * @return {Value}
             */
        }, {
            key: 'insertText',
            value: function insertText(path, offset, text) {
                var value = this;
                var _value4 = value, document = _value4.document;
                var node = document.assertNode(path);
                document = document.insertText(path, offset, text);
                node = document.assertNode(path);
                value = value.set('document', document);
                value = value.mapPoints(function (point) {
                    if (point.key === node.key && point.offset >= offset) {
                        return point.setOffset(point.offset + text.length);
                    }
                    else {
                        return point;
                    }
                });
                return value;
            }
            /**
             * Merge a node backwards its previous sibling.
             *
             * @param {List|Key} path
             * @return {Value}
             */
        }, {
            key: 'mergeNode',
            value: function mergeNode(path) {
                var value = this;
                var _value5 = value, document = _value5.document;
                var newDocument = document.mergeNode(path);
                path = document.resolvePath(path);
                var withPath = PathUtils.decrement(path);
                var one = document.getNode(withPath);
                var two = document.getNode(path);
                value = value.set('document', newDocument);
                value = value.mapRanges(function (range) {
                    if (two.object === 'text') {
                        var max = one.text.length;
                        if (range.anchor.key === two.key) {
                            range = range.moveAnchorTo(one.key, max + range.anchor.offset);
                        }
                        if (range.focus.key === two.key) {
                            range = range.moveFocusTo(one.key, max + range.focus.offset);
                        }
                    }
                    range = range.updatePoints(function (point) {
                        return point.setPath(null);
                    });
                    return range;
                });
                return value;
            }
            /**
             * Move a node by `path` to `newPath`.
             *
             * A `newIndex` can be provided when move nodes by `key`, to account for not
             * being able to have a key for a location in the tree that doesn't exist yet.
             *
             * @param {List|Key} path
             * @param {List|Key} newPath
             * @param {Number} newIndex
             * @return {Value}
             */
        }, {
            key: 'moveNode',
            value: function moveNode(path, newPath) {
                var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var value = this;
                var _value6 = value, document = _value6.document;
                if (PathUtils.isEqual(path, newPath)) {
                    return value;
                }
                document = document.moveNode(path, newPath, newIndex);
                value = value.set('document', document);
                value = value.mapPoints(function (point) {
                    return point.setPath(null);
                });
                return value;
            }
            /**
             * Remove an `annotation` from the value.
             *
             * @param {Annotation} annotation
             * @param {Mark} mark
             * @return {Value}
             */
        }, {
            key: 'removeAnnotation',
            value: function removeAnnotation(annotation) {
                annotation = Annotation.create(annotation);
                var value = this;
                var _value7 = value, annotations = _value7.annotations;
                var _annotation2 = annotation, key = _annotation2.key;
                annotations = annotations.delete(key);
                value = value.set('annotations', annotations);
                return value;
            }
            /**
             * Remove `mark` at `path`.
             *
             * @param {List|String} path
             * @param {Mark} mark
             * @return {Value}
             */
        }, {
            key: 'removeMark',
            value: function removeMark(path, mark) {
                mark = Mark.create(mark);
                var value = this;
                var _value8 = value, document = _value8.document;
                document = document.removeMark(path, mark);
                value = value.set('document', document);
                return value;
            }
            /**
             * Remove a node by `path`.
             *
             * @param {List|String} path
             * @return {Value}
             */
        }, {
            key: 'removeNode',
            value: function removeNode(path) {
                var value = this;
                var _value9 = value, document = _value9.document;
                var node = document.assertNode(path);
                var first = node.object === 'text' ? node : node.getFirstText() || node;
                var last = node.object === 'text' ? node : node.getLastText() || node;
                var prev = document.getPreviousText(first.key);
                var next = document.getNextText(last.key);
                document = document.removeNode(path);
                value = value.set('document', document);
                value = value.mapRanges(function (range) {
                    var _range = range, start = _range.start, end = _range.end;
                    if (node.hasNode(start.key)) {
                        range = prev ? range.moveStartTo(prev.key, prev.text.length) : next ? range.moveStartTo(next.key, 0) : range.unset();
                    }
                    if (node.hasNode(end.key)) {
                        range = prev ? range.moveEndTo(prev.key, prev.text.length) : next ? range.moveEndTo(next.key, 0) : range.unset();
                    }
                    range = range.updatePoints(function (point) {
                        return point.setPath(null);
                    });
                    return range;
                });
                return value;
            }
            /**
             * Remove `text` at `offset` in node by `path`.
             *
             * @param {List|Key} path
             * @param {Number} offset
             * @param {String} text
             * @return {Value}
             */
        }, {
            key: 'removeText',
            value: function removeText(path, offset, text) {
                var value = this;
                var _value10 = value, document = _value10.document;
                var node = document.assertNode(path);
                document = document.removeText(path, offset, text);
                value = value.set('document', document);
                var length = text.length;
                var start = offset;
                var end = offset + length;
                value = value.mapPoints(function (point) {
                    if (point.key !== node.key) {
                        return point;
                    }
                    if (point.offset >= end) {
                        return point.setOffset(point.offset - length);
                    }
                    if (point.offset > start) {
                        return point.setOffset(start);
                    }
                    return point;
                });
                return value;
            }
            /**
             * Add an `annotation` to the value.
             *
             * @param {Annotation} annotation
             * @param {Mark} mark
             * @return {Value}
             */
        }, {
            key: 'setAnnotation',
            value: function setAnnotation(properties, newProperties) {
                newProperties = Annotation.createProperties(newProperties);
                var annotation = Annotation.create(properties);
                var next = annotation.merge(newProperties);
                var value = this;
                var _value11 = value, annotations = _value11.annotations;
                var key = annotation.key;
                annotations = annotations.set(key, next);
                value = value.set('annotations', annotations);
                return value;
            }
            /**
             * Set `properties` on a node.
             *
             * @param {List|String} path
             * @param {Object} properties
             * @return {Value}
             */
        }, {
            key: 'setNode',
            value: function setNode(path, properties) {
                var value = this;
                var _value12 = value, document = _value12.document;
                document = document.setNode(path, properties);
                value = value.set('document', document);
                return value;
            }
            /**
             * Set `properties` on `mark` on text at `offset` and `length` in node.
             *
             * @param {List|String} path
             * @param {Mark} mark
             * @param {Object} properties
             * @return {Value}
             */
        }, {
            key: 'setMark',
            value: function setMark(path, mark, properties) {
                var value = this;
                var _value13 = value, document = _value13.document;
                document = document.setMark(path, mark, properties);
                value = value.set('document', document);
                return value;
            }
            /**
             * Set `properties` on the value.
             *
             * @param {Object} properties
             * @return {Value}
             */
        }, {
            key: 'setProperties',
            value: function setProperties(properties) {
                var value = this;
                var _value14 = value, document = _value14.document;
                var data = properties.data, annotations = properties.annotations;
                var props = {};
                if (data) {
                    props.data = data;
                }
                if (annotations) {
                    props.annotations = annotations.map(function (a) {
                        return a.isSet ? a : document.resolveAnnotation(a);
                    });
                }
                value = value.merge(props);
                return value;
            }
            /**
             * Set `properties` on the selection.
             *
             * @param {Value} value
             * @param {Operation} operation
             * @return {Value}
             */
        }, {
            key: 'setSelection',
            value: function setSelection(properties) {
                var value = this;
                var _value15 = value, document = _value15.document, selection = _value15.selection;
                var next = selection.setProperties(properties);
                selection = document.resolveSelection(next);
                value = value.set('selection', selection);
                return value;
            }
            /**
             * Split a node by `path` at `position` with optional `properties` to apply
             * to the newly split node.
             *
             * @param {List|String} path
             * @param {Number} position
             * @param {Object} properties
             * @return {Value}
             */
        }, {
            key: 'splitNode',
            value: function splitNode(path, position, properties) {
                var value = this;
                var _value16 = value, document = _value16.document;
                var newDocument = document.splitNode(path, position, properties);
                var node = document.assertNode(path);
                value = value.set('document', newDocument);
                value = value.mapRanges(function (range) {
                    var next = newDocument.getNextText(node.key);
                    var _range2 = range, start = _range2.start, end = _range2.end;
                    // If the start was after the split, move it to the next node.
                    if (node.key === start.key && position <= start.offset) {
                        range = range.moveStartTo(next.key, start.offset - position);
                    }
                    // If the end was after the split, move it to the next node.
                    if (node.key === end.key && position <= end.offset) {
                        range = range.moveEndTo(next.key, end.offset - position);
                    }
                    range = range.updatePoints(function (point) {
                        return point.setPath(null);
                    });
                    return range;
                });
                return value;
            }
            /**
             * Map all range objects to apply adjustments with an `iterator`.
             *
             * @param {Function} iterator
             * @return {Value}
             */
        }, {
            key: 'mapRanges',
            value: function mapRanges(iterator) {
                var value = this;
                var _value17 = value, document = _value17.document, selection = _value17.selection, annotations = _value17.annotations;
                var sel = selection.isSet ? iterator(selection) : selection;
                if (!sel)
                    sel = selection.unset();
                if (sel !== selection)
                    sel = document.createSelection(sel);
                value = value.set('selection', sel);
                var anns = annotations.map(function (annotation) {
                    var n = annotation.isSet ? iterator(annotation) : annotation;
                    if (n && n !== annotation)
                        n = document.createAnnotation(n);
                    return n;
                });
                anns = anns.filter(function (annotation) {
                    return !!annotation;
                });
                value = value.set('annotations', anns);
                return value;
            }
        }, {
            key: 'mapPoints',
            value: function mapPoints(iterator) {
                return this.mapRanges(function (range) {
                    return range.updatePoints(iterator);
                });
            }
            /**
             * Return a JSON representation of the value.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    document: this.document.toJSON(options)
                };
                if (options.preserveData) {
                    object.data = this.data.toJSON(options);
                }
                if (options.preserveAnnotations) {
                    object.annotations = this.annotations.map(function (a) {
                        return a.toJSON(options);
                    }).toObject();
                }
                if (options.preserveSelection) {
                    object.selection = this.selection.toJSON(options);
                }
                return object;
            }
            /**
             * Deprecated.
             */
        }, {
            key: 'change',
            value: function change() {
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42.0, value object are no longer schema-aware, and the `value.change()` method is no longer available. Use the `editor.change()` method on the new `Editor` controller instead.');
            }
        }, {
            key: 'startBlock',
            /**
             * Get the current start text node's closest block parent.
             *
             * @return {Block}
             */
            get: function get$$1() {
                return this.selection.start.key && this.document.getClosestBlock(this.selection.start.key);
            }
            /**
             * Get the current end text node's closest block parent.
             *
             * @return {Block}
             */
        }, {
            key: 'endBlock',
            get: function get$$1() {
                return this.selection.end.key && this.document.getClosestBlock(this.selection.end.key);
            }
            /**
             * Get the current anchor text node's closest block parent.
             *
             * @return {Block}
             */
        }, {
            key: 'anchorBlock',
            get: function get$$1() {
                return this.selection.anchor.key && this.document.getClosestBlock(this.selection.anchor.key);
            }
            /**
             * Get the current focus text node's closest block parent.
             *
             * @return {Block}
             */
        }, {
            key: 'focusBlock',
            get: function get$$1() {
                return this.selection.focus.key && this.document.getClosestBlock(this.selection.focus.key);
            }
            /**
             * Get the current start text node's closest inline parent.
             *
             * @return {Inline}
             */
        }, {
            key: 'startInline',
            get: function get$$1() {
                return this.selection.start.key && this.document.getClosestInline(this.selection.start.key);
            }
            /**
             * Get the current end text node's closest inline parent.
             *
             * @return {Inline}
             */
        }, {
            key: 'endInline',
            get: function get$$1() {
                return this.selection.end.key && this.document.getClosestInline(this.selection.end.key);
            }
            /**
             * Get the current anchor text node's closest inline parent.
             *
             * @return {Inline}
             */
        }, {
            key: 'anchorInline',
            get: function get$$1() {
                return this.selection.anchor.key && this.document.getClosestInline(this.selection.anchor.key);
            }
            /**
             * Get the current focus text node's closest inline parent.
             *
             * @return {Inline}
             */
        }, {
            key: 'focusInline',
            get: function get$$1() {
                return this.selection.focus.key && this.document.getClosestInline(this.selection.focus.key);
            }
            /**
             * Get the current start text node.
             *
             * @return {Text}
             */
        }, {
            key: 'startText',
            get: function get$$1() {
                return this.selection.start.key && this.document.getDescendant(this.selection.start.key);
            }
            /**
             * Get the current end node.
             *
             * @return {Text}
             */
        }, {
            key: 'endText',
            get: function get$$1() {
                return this.selection.end.key && this.document.getDescendant(this.selection.end.key);
            }
            /**
             * Get the current anchor node.
             *
             * @return {Text}
             */
        }, {
            key: 'anchorText',
            get: function get$$1() {
                return this.selection.anchor.key && this.document.getDescendant(this.selection.anchor.key);
            }
            /**
             * Get the current focus node.
             *
             * @return {Text}
             */
        }, {
            key: 'focusText',
            get: function get$$1() {
                return this.selection.focus.key && this.document.getDescendant(this.selection.focus.key);
            }
            /**
             * Get the next block node.
             *
             * @return {Block}
             */
        }, {
            key: 'nextBlock',
            get: function get$$1() {
                return this.selection.end.key && this.document.getNextBlock(this.selection.end.key);
            }
            /**
             * Get the previous block node.
             *
             * @return {Block}
             */
        }, {
            key: 'previousBlock',
            get: function get$$1() {
                return this.selection.start.key && this.document.getPreviousBlock(this.selection.start.key);
            }
            /**
             * Get the next inline node.
             *
             * @return {Inline}
             */
        }, {
            key: 'nextInline',
            get: function get$$1() {
                return this.selection.end.key && this.document.getNextInline(this.selection.end.key);
            }
            /**
             * Get the previous inline node.
             *
             * @return {Inline}
             */
        }, {
            key: 'previousInline',
            get: function get$$1() {
                return this.selection.start.key && this.document.getPreviousInline(this.selection.start.key);
            }
            /**
             * Get the next text node.
             *
             * @return {Text}
             */
        }, {
            key: 'nextText',
            get: function get$$1() {
                return this.selection.end.key && this.document.getNextText(this.selection.end.key);
            }
            /**
             * Get the previous text node.
             *
             * @return {Text}
             */
        }, {
            key: 'previousText',
            get: function get$$1() {
                return this.selection.start.key && this.document.getPreviousText(this.selection.start.key);
            }
            /**
             * Get the marks of the current selection.
             *
             * @return {Set<Mark>}
             */
        }, {
            key: 'marks',
            get: function get$$1() {
                return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_0__["Set"]() : this.selection.marks || this.document.getMarksAtRange(this.selection);
            }
            /**
             * Get the active marks of the current selection.
             *
             * @return {Set<Mark>}
             */
        }, {
            key: 'activeMarks',
            get: function get$$1() {
                return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_0__["Set"]() : this.selection.marks || this.document.getActiveMarksAtRange(this.selection);
            }
            /**
             * Get the block nodes in the current selection.
             *
             * @return {List<Block>}
             */
        }, {
            key: 'blocks',
            get: function get$$1() {
                return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_0__["List"]() : this.document.getLeafBlocksAtRange(this.selection);
            }
            /**
             * Get the fragment of the current selection.
             *
             * @return {Document}
             */
        }, {
            key: 'fragment',
            get: function get$$1() {
                return this.selection.isUnset ? Document.create() : this.document.getFragmentAtRange(this.selection);
            }
            /**
             * Get the bottom-most inline nodes in the current selection.
             *
             * @return {List<Inline>}
             */
        }, {
            key: 'inlines',
            get: function get$$1() {
                return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_0__["List"]() : this.document.getLeafInlinesAtRange(this.selection);
            }
            /**
             * Get the text nodes in the current selection.
             *
             * @return {List<Text>}
             */
        }, {
            key: 'texts',
            get: function get$$1() {
                return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_0__["List"]() : this.document.getTextsAtRange(this.selection);
            }
        }, {
            key: 'history',
            get: function get$$1() {
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42.0, the `value.history` model no longer exists, and the history is stored in `value.data` instead using plugins.');
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Value` with `attrs`.
             *
             * @param {Object|Value} attrs
             * @param {Object} options
             * @return {Value}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (Value.isValue(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Value.fromJSON(attrs, options);
                }
                throw new Error('`Value.create` only accepts objects or values, but you passed it: ' + attrs);
            }
            /**
             * Create a dictionary of settable value properties from `attrs`.
             *
             * @param {Object|Value} attrs
             * @return {Object}
             */
        }, {
            key: 'createProperties',
            value: function createProperties() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Value.isValue(a)) {
                    return {
                        annotations: a.annotations,
                        data: a.data
                    };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
                    var p = {};
                    if ('annotations' in a)
                        p.annotations = Annotation.createList(a.annotations);
                    if ('data' in a)
                        p.data = Data.create(a.data);
                    return p;
                }
                throw new Error('`Value.createProperties` only accepts objects or values, but you passed it: ' + a);
            }
            /**
             * Create a `Value` from a JSON `object`.
             *
             * @param {Object} object
             * @param {Object} options
             *   @property {Boolean} normalize
             *   @property {Array} plugins
             * @return {Value}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var _object$data = object.data, data = _object$data === undefined ? {} : _object$data, _object$annotations = object.annotations, annotations = _object$annotations === undefined ? {} : _object$annotations, _object$document = object.document, document = _object$document === undefined ? {} : _object$document, _object$selection = object.selection, selection = _object$selection === undefined ? {} : _object$selection;
                data = Data.fromJSON(data);
                document = Document.fromJSON(document);
                selection = document.createSelection(selection);
                annotations = Annotation.createMap(annotations);
                if (selection.isUnset) {
                    var text = document.getFirstText();
                    if (text)
                        selection = selection.moveToStartOfNode(text);
                    selection = document.createSelection(selection);
                }
                var value = new Value({
                    annotations: annotations,
                    data: data,
                    document: document,
                    selection: selection
                });
                return value;
            }
        }]);
    return Value;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$10));
/**
 * Debug.
 *
 * @type {Function}
 */
var debug = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:operation:apply');
/**
 * Apply an `op` to a `value`.
 *
 * @param {Value} value
 * @param {Object|Operation} op
 * @return {Value} value
 */
function applyOperation(value, op) {
    op = Operation.create(op);
    var _op = op, type = _op.type;
    debug(type, op);
    switch (type) {
        case 'add_annotation':
            {
                var _op2 = op, annotation = _op2.annotation;
                var next = value.addAnnotation(annotation);
                return next;
            }
        case 'add_mark':
            {
                var _op3 = op, path = _op3.path, mark = _op3.mark;
                var _next = value.addMark(path, mark);
                return _next;
            }
        case 'insert_node':
            {
                var _op4 = op, _path = _op4.path, node = _op4.node;
                var _next2 = value.insertNode(_path, node);
                return _next2;
            }
        case 'insert_text':
            {
                var _op5 = op, _path2 = _op5.path, offset = _op5.offset, text = _op5.text, marks = _op5.marks;
                var _next3 = value.insertText(_path2, offset, text, marks);
                return _next3;
            }
        case 'merge_node':
            {
                var _op6 = op, _path3 = _op6.path;
                var _next4 = value.mergeNode(_path3);
                return _next4;
            }
        case 'move_node':
            {
                var _op7 = op, _path4 = _op7.path, newPath = _op7.newPath;
                var _next5 = value.moveNode(_path4, newPath);
                return _next5;
            }
        case 'remove_annotation':
            {
                var _op8 = op, _annotation = _op8.annotation;
                var _next6 = value.removeAnnotation(_annotation);
                return _next6;
            }
        case 'remove_mark':
            {
                var _op9 = op, _path5 = _op9.path, _mark = _op9.mark;
                var _next7 = value.removeMark(_path5, _mark);
                return _next7;
            }
        case 'remove_node':
            {
                var _op10 = op, _path6 = _op10.path;
                var _next8 = value.removeNode(_path6);
                return _next8;
            }
        case 'remove_text':
            {
                var _op11 = op, _path7 = _op11.path, _offset = _op11.offset, _text = _op11.text;
                var _next9 = value.removeText(_path7, _offset, _text);
                return _next9;
            }
        case 'set_annotation':
            {
                var _op12 = op, properties = _op12.properties, newProperties = _op12.newProperties;
                var _next10 = value.setAnnotation(properties, newProperties);
                return _next10;
            }
        case 'set_mark':
            {
                var _op13 = op, _path8 = _op13.path, _properties = _op13.properties, _newProperties = _op13.newProperties;
                var _next11 = value.setMark(_path8, _properties, _newProperties);
                return _next11;
            }
        case 'set_node':
            {
                var _op14 = op, _path9 = _op14.path, _newProperties2 = _op14.newProperties;
                var _next12 = value.setNode(_path9, _newProperties2);
                return _next12;
            }
        case 'set_selection':
            {
                var _op15 = op, _newProperties3 = _op15.newProperties;
                var _next13 = value.setSelection(_newProperties3);
                return _next13;
            }
        case 'set_value':
            {
                var _op16 = op, _newProperties4 = _op16.newProperties;
                var _next14 = value.setProperties(_newProperties4);
                return _next14;
            }
        case 'split_node':
            {
                var _op17 = op, _path10 = _op17.path, position = _op17.position, _properties2 = _op17.properties;
                var _next15 = value.splitNode(_path10, position, _properties2);
                return _next15;
            }
        default:
            {
                throw new Error('Unknown operation type: "' + type + '".');
            }
    }
}
/**
 * Debug.
 *
 * @type {Function}
 */
var debug$1 = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:operation:invert');
/**
 * Invert an `op`.
 *
 * @param {Object} op
 * @return {Object}
 */
function invertOperation(op) {
    op = Operation.create(op);
    var _op = op, type = _op.type;
    debug$1(type, op);
    switch (type) {
        case 'move_node':
            {
                var _op2 = op, newPath = _op2.newPath, path = _op2.path;
                // PERF: this case can exit early.
                if (PathUtils.isEqual(newPath, path)) {
                    return op;
                }
                var inversePath = PathUtils.transform(path, op).first();
                // Get the true path we are trying to move back to
                // We transform the right-sibling of the path
                // This will end up at the operation.path most of the time
                // But if the newPath is a left-sibling or left-ancestor-sibling, this will account for it
                var inverseNewPath = PathUtils.transform(PathUtils.increment(path), op).first();
                var inverse = op.set('path', inversePath).set('newPath', inverseNewPath);
                return inverse;
            }
        case 'merge_node':
            {
                var _op3 = op, _path = _op3.path;
                var _inversePath = PathUtils.decrement(_path);
                var _inverse = op.set('type', 'split_node').set('path', _inversePath);
                return _inverse;
            }
        case 'split_node':
            {
                var _op4 = op, _path2 = _op4.path;
                var _inversePath2 = PathUtils.increment(_path2);
                var _inverse2 = op.set('type', 'merge_node').set('path', _inversePath2);
                return _inverse2;
            }
        case 'set_annotation':
        case 'set_node':
        case 'set_value':
        case 'set_selection':
        case 'set_mark':
            {
                var _op5 = op, properties = _op5.properties, newProperties = _op5.newProperties;
                var _inverse3 = op.set('properties', newProperties).set('newProperties', properties);
                return _inverse3;
            }
        case 'insert_node':
        case 'insert_text':
            {
                var _inverse4 = op.set('type', type.replace('insert_', 'remove_'));
                return _inverse4;
            }
        case 'remove_node':
        case 'remove_text':
            {
                var _inverse5 = op.set('type', type.replace('remove_', 'insert_'));
                return _inverse5;
            }
        case 'add_annotation':
        case 'add_mark':
            {
                var _inverse6 = op.set('type', type.replace('add_', 'remove_'));
                return _inverse6;
            }
        case 'remove_annotation':
        case 'remove_mark':
            {
                var _inverse7 = op.set('type', type.replace('remove_', 'add_'));
                return _inverse7;
            }
        default:
            {
                throw new Error('Unknown operation type: "' + type + '".');
            }
    }
}
/**
 * Operation attributes.
 *
 * @type {Array}
 */
var OPERATION_ATTRIBUTES = {
    add_mark: ['path', 'mark', 'data'],
    add_annotation: ['annotation', 'data'],
    insert_node: ['path', 'node', 'data'],
    insert_text: ['path', 'offset', 'text', 'data'],
    merge_node: ['path', 'position', 'properties', 'target', 'data'],
    move_node: ['path', 'newPath', 'data'],
    remove_annotation: ['annotation', 'data'],
    remove_mark: ['path', 'mark', 'data'],
    remove_node: ['path', 'node', 'data'],
    remove_text: ['path', 'offset', 'text', 'data'],
    set_annotation: ['properties', 'newProperties', 'data'],
    set_mark: ['path', 'properties', 'newProperties', 'data'],
    set_node: ['path', 'properties', 'newProperties', 'data'],
    set_selection: ['properties', 'newProperties', 'data'],
    set_value: ['properties', 'newProperties', 'data'],
    split_node: ['path', 'position', 'properties', 'target', 'data']
    /**
     * Default properties.
     *
     * @type {Object}
     */
};
var DEFAULTS$11 = {
    annotation: undefined,
    data: undefined,
    length: undefined,
    mark: undefined,
    marks: undefined,
    newPath: undefined,
    newProperties: undefined,
    node: undefined,
    offset: undefined,
    path: undefined,
    position: undefined,
    properties: undefined,
    target: undefined,
    text: undefined,
    type: undefined
    /**
     * Operation.
     *
     * @type {Operation}
     */
};
var Operation = function (_Record) {
    inherits(Operation, _Record);
    function Operation() {
        classCallCheck(this, Operation);
        return possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).apply(this, arguments));
    }
    createClass(Operation, [{
            key: 'apply',
            /**
             * Apply the operation to a `value`.
             *
             * @param {Value} value
             * @return {Value}
             */
            value: function apply(value) {
                var next = applyOperation(value, this);
                return next;
            }
            /**
             * Invert the operation.
             *
             * @return {Operation}
             */
        }, {
            key: 'invert',
            value: function invert() {
                var inverted = invertOperation(this);
                return inverted;
            }
            /**
             * Return a JSON representation of the operation.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var object = this.object, type = this.type;
                var json = { object: object, type: type };
                var ATTRIBUTES = OPERATION_ATTRIBUTES[type];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = ATTRIBUTES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;
                        var value = this[key];
                        if (key === 'annotation' || key === 'mark' || key === 'marks' || key === 'node' || key === 'path' || key === 'newPath') {
                            value = value.toJSON();
                        }
                        if (key === 'properties' && type === 'merge_node') {
                            var v = {};
                            if ('data' in value)
                                v.data = value.data.toJS();
                            if ('type' in value)
                                v.type = value.type;
                            value = v;
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_annotation') {
                            var _v = {};
                            if ('anchor' in value)
                                _v.anchor = value.anchor.toJS();
                            if ('focus' in value)
                                _v.focus = value.focus.toJS();
                            if ('key' in value)
                                _v.key = value.key;
                            if ('mark' in value)
                                _v.mark = value.mark.toJS();
                            value = _v;
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_mark') {
                            var _v2 = {};
                            if ('data' in value)
                                _v2.data = value.data.toJS();
                            if ('type' in value)
                                _v2.type = value.type;
                            value = _v2;
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_node') {
                            var _v3 = {};
                            if ('data' in value)
                                _v3.data = value.data.toJS();
                            if ('type' in value)
                                _v3.type = value.type;
                            value = _v3;
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_selection') {
                            var _v4 = {};
                            if ('anchor' in value)
                                _v4.anchor = value.anchor.toJSON();
                            if ('focus' in value)
                                _v4.focus = value.focus.toJSON();
                            if ('isFocused' in value)
                                _v4.isFocused = value.isFocused;
                            if ('marks' in value)
                                _v4.marks = value.marks && value.marks.toJSON();
                            value = _v4;
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_value') {
                            var _v5 = {};
                            if ('data' in value)
                                _v5.data = value.data.toJS();
                            value = _v5;
                        }
                        if (key === 'properties' && type === 'split_node') {
                            var _v6 = {};
                            if ('data' in value)
                                _v6.data = value.data.toJS();
                            if ('type' in value)
                                _v6.type = value.type;
                            value = _v6;
                        }
                        if (key === 'data') {
                            value = value.toJSON();
                        }
                        json[key] = value;
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return json;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Operation` with `attrs`.
             *
             * @param {Object|Array|List|String|Operation} attrs
             * @return {Operation}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Operation.isOperation(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Operation.fromJSON(attrs);
                }
                throw new Error('`Operation.create` only accepts objects or operations, but you passed it: ' + attrs);
            }
            /**
             * Create a list of `Operations` from `elements`.
             *
             * @param {Array<Operation|Object>|List<Operation|Object>} elements
             * @return {List<Operation>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(elements) || Array.isArray(elements)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](elements.map(Operation.create));
                    return list;
                }
                throw new Error('`Operation.createList` only accepts arrays or lists, but you passed it: ' + elements);
            }
            /**
             * Create a `Operation` from a JSON `object`.
             *
             * @param {Object|Operation} object
             * @return {Operation}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                if (Operation.isOperation(object)) {
                    return object;
                }
                var type = object.type;
                var ATTRIBUTES = OPERATION_ATTRIBUTES[type];
                var attrs = { type: type };
                if (!ATTRIBUTES) {
                    throw new Error('`Operation.fromJSON` was passed an unrecognized operation type: "' + type + '"');
                }
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
                try {
                    for (var _iterator2 = ATTRIBUTES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var key = _step2.value;
                        var v = object[key];
                        // Default `data` to an empty object.
                        if (key === 'data' && v === undefined) {
                            v = {};
                        }
                        if (v === undefined) {
                            throw new Error('`Operation.fromJSON` was passed a "' + type + '" operation without the required "' + key + '" attribute.');
                        }
                        if (key === 'annotation') {
                            v = Annotation.create(v);
                        }
                        if (key === 'path' || key === 'newPath') {
                            v = PathUtils.create(v);
                        }
                        if (key === 'mark') {
                            v = Mark.create(v);
                        }
                        if (key === 'node') {
                            v = Node.create(v);
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_annotation') {
                            v = Annotation.createProperties(v);
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_mark') {
                            v = Mark.createProperties(v);
                        }
                        if ((key === 'properties' || key === 'newProperties') && (type === 'set_node' || type === 'merge_node' || type === 'split_node')) {
                            v = Node.createProperties(v);
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_selection') {
                            v = Selection.createProperties(v);
                        }
                        if ((key === 'properties' || key === 'newProperties') && type === 'set_value') {
                            v = Value.createProperties(v);
                        }
                        if (key === 'data') {
                            v = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(v);
                        }
                        attrs[key] = v;
                    }
                }
                catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    }
                    finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var op = new Operation(attrs);
                return op;
            }
            /**
             * Check if `any` is a list of operations.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isOperationList',
            value: function isOperationList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Operation.isOperation(item);
                });
            }
        }]);
    return Operation;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$11));
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$12 = {
    operations: undefined,
    value: undefined
    /**
     * Change.
     *
     * @type {Change}
     */
};
var Change = function (_Record) {
    inherits(Change, _Record);
    function Change() {
        classCallCheck(this, Change);
        return possibleConstructorReturn(this, (Change.__proto__ || Object.getPrototypeOf(Change)).apply(this, arguments));
    }
    createClass(Change, [{
            key: 'toJSON',
            /**
             * Return a JSON representation of the change.
             *
             * @param {Object} options
             * @return {Object}
             */
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    value: this.value.toJSON(options),
                    operations: this.operations.toArray().map(function (o) {
                        return o.toJSON(options);
                    })
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Change` with `attrs`.
             *
             * @param {Object|Change} attrs
             * @return {Change}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (Change.isChange(attrs)) {
                    return attrs;
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Change.fromJSON(attrs);
                }
                throw new Error('`Change.create` only accepts objects or changes, but you passed it: ' + attrs);
            }
            /**
             * Create a `Change` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Change}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var value = object.value, _object$operations = object.operations, operations = _object$operations === undefined ? [] : _object$operations;
                var change = new Change({
                    value: Value.create(value),
                    operations: Operation.createList(operations)
                });
                return change;
            }
        }]);
    return Change;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$12));
/**
 * A plugin that adds a set of commands to the editor.
 *
 * @param {Object} commands
 * @return {Object}
 */
function CommandsPlugin() {
    var commands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    /**
     * On command, if it exists in our list of commands, call it.
     *
     * @param {Object} command
     * @param {Editor} editor
     * @param {Function} next
     */
    function onCommand(command, editor, next) {
        var type = command.type, args = command.args;
        var fn = commands[type];
        if (!fn)
            return next();
        editor.command.apply(editor, [fn].concat(toConsumableArray(args)));
    }
    /**
     * On construct, register all the commands.
     *
     * @param {Editor} editor
     * @param {Function} next
     */
    function onConstruct(editor, next) {
        for (var command in commands) {
            editor.registerCommand(command);
        }
        return next();
    }
    /**
     * Return the plugin.
     *
     * @type {Object}
     */
    return {
        onCommand: onCommand,
        onConstruct: onConstruct
    };
}
/**
 * Surrogate pair start and end points.
 *
 * @type {Number}
 */
var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;
/**
 * A regex to match space characters.
 *
 * @type {RegExp}
 */
var SPACE = /\s/;
/**
 * A regex to match chameleon characters, that count as word characters as long
 * as they are inside of a word.
 *
 * @type {RegExp}
 */
var CHAMELEON = /['\u2018\u2019]/;
/**
 * A regex that matches punctuation.
 *
 * @type {RegExp}
 */
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
/**
 * Is a character `code` in a surrogate character.
 *
 * @param {Number} code
 * @return {Boolean}
 */
function isSurrogate(code) {
    return SURROGATE_START <= code && code <= SURROGATE_END;
}
/**
 * Is a character a word character? Needs the `remaining` characters too.
 *
 * @param {String} char
 * @param {String|Void} remaining
 * @return {Boolean}
 */
function isWord(char, remaining) {
    if (SPACE.test(char))
        return false;
    // If it's a chameleon character, recurse to see if the next one is or not.
    if (CHAMELEON.test(char)) {
        var next = remaining.charAt(0);
        var length = getCharLength(next);
        next = remaining.slice(0, length);
        var rest = remaining.slice(length);
        if (isWord(next, rest))
            return true;
    }
    if (PUNCTUATION.test(char))
        return false;
    return true;
}
/**
 * Get the length of a `character`.
 *
 * @param {String} char
 * @return {Number}
 */
function getCharLength(char) {
    return isSurrogate(char.charCodeAt(0)) ? 2 : 1;
}
/**
 * Get the offset to the end of the first character in `text`.
 *
 * @param {String} text
 * @return {Number}
 */
function getCharOffset(text) {
    var char = text.charAt(0);
    return getCharLength(char);
}
/**
 * Get the offset to the end of the character before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */
function getCharOffsetBackward(text, offset) {
    text = text.slice(0, offset);
    text = Object(esrever__WEBPACK_IMPORTED_MODULE_5__["reverse"])(text);
    return getCharOffset(text);
}
/**
 * Get the offset to the end of the character after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */
function getCharOffsetForward(text, offset) {
    text = text.slice(offset);
    return getCharOffset(text);
}
/**
 * Get the offset to the end of the first word in `text`.
 *
 * @param {String} text
 * @return {Number}
 */
function getWordOffset(text) {
    var length = 0;
    var i = 0;
    var started = false;
    var char = void 0;
    while (char = text.charAt(i)) {
        var l = getCharLength(char);
        char = text.slice(i, i + l);
        var rest = text.slice(i + l);
        if (isWord(char, rest)) {
            started = true;
            length += l;
        }
        else if (!started) {
            length += l;
        }
        else {
            break;
        }
        i += l;
    }
    return length;
}
/**
 * Get the offset to the end of the word before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */
function getWordOffsetBackward(text, offset) {
    text = text.slice(0, offset);
    text = Object(esrever__WEBPACK_IMPORTED_MODULE_5__["reverse"])(text);
    var o = getWordOffset(text);
    return o;
}
/**
 * Get the offset to the end of the word after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */
function getWordOffsetForward(text, offset) {
    text = text.slice(offset);
    var o = getWordOffset(text);
    return o;
}
/**
 * Export.
 *
 * @type {Object}
 */
var TextUtils = {
    getCharLength: getCharLength,
    getCharOffset: getCharOffset,
    getCharOffsetBackward: getCharOffsetBackward,
    getCharOffsetForward: getCharOffsetForward,
    getWordOffset: getWordOffset,
    getWordOffsetBackward: getWordOffsetBackward,
    getWordOffsetForward: getWordOffsetForward,
    isSurrogate: isSurrogate,
    isWord: isWord
};
/**
 * Ensure that an expanded selection is deleted first, and return the updated
 * range to account for the deleted part.
 *
 * @param {Editor}
 */
function deleteExpandedAtRange(editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
    }
    var value = editor.value;
    var document = value.document;
    var _range = range, start = _range.start, end = _range.end;
    if (document.hasDescendant(start.path)) {
        range = range.moveToStart();
    }
    else {
        range = range.moveTo(end.path, 0).normalize(document);
    }
    return range;
}
/**
 * Commands.
 *
 * @type {Object}
 */
var Commands$1 = {};
/**
 * Add a new `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */
Commands$1.addMarkAtRange = function (editor, range, mark) {
    if (range.isCollapsed)
        return;
    var value = editor.value;
    var document = value.document;
    var start = range.start, end = range.end;
    var texts = document.getTextsAtRange(range);
    editor.withoutNormalizing(function () {
        texts.forEach(function (node) {
            var key = node.key;
            var index = 0;
            var length = node.text.length;
            if (key === start.key)
                index = start.offset;
            if (key === end.key)
                length = end.offset;
            if (key === start.key && key === end.key)
                length = end.offset - start.offset;
            editor.addMarkByKey(key, index, length, mark);
        });
    });
};
/**
 * Add a list of `marks` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Array<Mixed>} mark
 */
Commands$1.addMarksAtRange = function (editor, range, marks) {
    marks.forEach(function (mark) {
        return editor.addMarkAtRange(range, mark);
    });
};
/**
 * Delete everything in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteAtRange = function (editor, range) {
    // Snapshot the selection, which creates an extra undo save point, so that
    // when you undo a delete, the expanded selection will be retained.
    editor.snapshotSelection();
    var value = editor.value;
    var start = range.start, end = range.end;
    var startKey = start.key;
    var startOffset = start.offset;
    var endKey = end.key;
    var endOffset = end.offset;
    var document = value.document;
    var isStartVoid = document.hasVoidParent(startKey, editor);
    var isEndVoid = document.hasVoidParent(endKey, editor);
    var startBlock = document.getClosestBlock(startKey);
    var endBlock = document.getClosestBlock(endKey);
    // Check if we have a "hanging" selection case where the even though the
    // selection extends into the start of the end node, we actually want to
    // ignore that for UX reasons.
    var isHanging = startOffset === 0 && endOffset === 0 && isStartVoid === false && startKey === startBlock.getFirstText().key && endKey === endBlock.getFirstText().key && startKey !== endKey;
    // If it's a hanging selection, nudge it back to end in the previous text.
    if (isHanging && isEndVoid) {
        var prevText = document.getPreviousText(endKey);
        endKey = prevText.key;
        endOffset = prevText.text.length;
        isEndVoid = document.hasVoidParent(endKey, editor);
    }
    editor.withoutNormalizing(function () {
        // If the start node is inside a void node, remove the void node and update
        // the starting point to be right after it, continuously until the start point
        // is not a void, or until the entire range is handled.
        while (isStartVoid) {
            var startVoid = document.getClosestVoid(startKey, editor);
            var nextText = document.getNextText(startKey);
            editor.removeNodeByKey(startVoid.key);
            // If the start and end keys are the same, we're done.
            if (startKey === endKey)
                return;
            // If there is no next text node, we're done.
            if (!nextText)
                return;
            // Continue...
            document = editor.value.document;
            startKey = nextText.key;
            startOffset = 0;
            isStartVoid = document.hasVoidParent(startKey, editor);
        }
        // If the end node is inside a void node, do the same thing but backwards. But
        // we don't need any aborting checks because if we've gotten this far there
        // must be a non-void node that will exit the loop.
        while (isEndVoid) {
            var endVoid = document.getClosestVoid(endKey, editor);
            var _prevText = document.getPreviousText(endKey);
            editor.removeNodeByKey(endVoid.key);
            // Continue...
            document = editor.value.document;
            endKey = _prevText.key;
            endOffset = _prevText.text.length;
            isEndVoid = document.hasVoidParent(endKey, editor);
        }
        // If the start and end key are the same, and it was a hanging selection, we
        // can just remove the entire block.
        if (startKey === endKey && isHanging) {
            editor.removeNodeByKey(startBlock.key);
            return;
        }
        else if (startKey === endKey) {
            // Otherwise, if it wasn't hanging, we're inside a single text node, so we can
            // simply remove the text in the range.
            var index = startOffset;
            var length = endOffset - startOffset;
            editor.removeTextByKey(startKey, index, length);
            return;
        }
        else {
            // Otherwise, we need to recursively remove text and nodes inside the start
            // block after the start offset and inside the end block before the end
            // offset. Then remove any blocks that are in between the start and end
            // blocks. Then finally merge the start and end nodes.
            startBlock = document.getClosestBlock(startKey);
            endBlock = document.getClosestBlock(endKey);
            var startText = document.getNode(startKey);
            var endText = document.getNode(endKey);
            var startLength = startText.text.length - startOffset;
            var endLength = endOffset;
            var ancestor = document.getCommonAncestor(startKey, endKey);
            var startChild = ancestor.getFurthestChild(startKey);
            var endChild = ancestor.getFurthestChild(endKey);
            var startParent = document.getParent(startBlock.key);
            var startParentIndex = startParent.nodes.indexOf(startBlock);
            var endParentIndex = startParent.nodes.indexOf(endBlock);
            var child = void 0;
            // Iterate through all of the nodes in the tree after the start text node
            // but inside the end child, and remove them.
            child = startText;
            while (child.key !== startChild.key) {
                var parent = document.getParent(child.key);
                var _index = parent.nodes.indexOf(child);
                var afters = parent.nodes.slice(_index + 1);
                afters.reverse().forEach(function (node) {
                    editor.removeNodeByKey(node.key);
                });
                child = parent;
            }
            // Remove all of the middle children.
            var startChildIndex = ancestor.nodes.indexOf(startChild);
            var endChildIndex = ancestor.nodes.indexOf(endChild);
            var middles = ancestor.nodes.slice(startChildIndex + 1, endChildIndex);
            middles.reverse().forEach(function (node) {
                editor.removeNodeByKey(node.key);
            });
            // Remove the nodes before the end text node in the tree.
            child = endText;
            while (child.key !== endChild.key) {
                var _parent = document.getParent(child.key);
                var _index2 = _parent.nodes.indexOf(child);
                var befores = _parent.nodes.slice(0, _index2);
                befores.reverse().forEach(function (node) {
                    editor.removeNodeByKey(node.key);
                });
                child = _parent;
            }
            // Remove any overlapping text content from the leaf text nodes.
            if (startLength !== 0) {
                editor.removeTextByKey(startKey, startOffset, startLength);
            }
            if (endLength !== 0) {
                editor.removeTextByKey(endKey, 0, endOffset);
            }
            // If the start and end blocks aren't the same, move and merge the end block
            // into the start block.
            if (startBlock.key !== endBlock.key) {
                document = editor.value.document;
                var onlyChildAncestor = void 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = document.ancestors(endBlock.key)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _ref = _step.value;
                        var _ref2 = slicedToArray(_ref, 1);
                        var node = _ref2[0];
                        if (node.nodes.size > 1) {
                            break;
                        }
                        else {
                            onlyChildAncestor = node;
                        }
                    }
                    // Move the end block to be right after the start block.
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (endParentIndex !== startParentIndex + 1) {
                    editor.moveNodeByKey(endBlock.key, startParent.key, startParentIndex + 1);
                }
                // If the selection is hanging, just remove the start block, otherwise
                // merge the end block into it.
                if (isHanging) {
                    editor.removeNodeByKey(startBlock.key);
                }
                else {
                    editor.mergeNodeByKey(endBlock.key);
                }
                // If nested empty blocks are left over above the end block, remove them.
                if (onlyChildAncestor) {
                    editor.removeNodeByKey(onlyChildAncestor.key);
                }
            }
        }
    });
};
/**
 * Delete backward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */
Commands$1.deleteBackwardAtRange = function (editor, range) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    if (n === 0)
        return;
    var value = editor.value;
    var document = value.document;
    var _range2 = range, start = _range2.start, focus = _range2.focus;
    // If the range is expanded, perform a regular delete instead.
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var voidParent = document.getClosestVoid(start.path, editor);
    // If there is a void parent, delete it.
    if (voidParent) {
        editor.removeNodeByKey(voidParent.key);
        return;
    }
    // If the range is at the start of the document, abort.
    if (start.isAtStartOfNode(document)) {
        return;
    }
    var block = document.getClosestBlock(start.path);
    // PERF: If the closest block is empty, remove it. This is just a shortcut,
    // since merging it would result in the same outcome.
    if (document.nodes.size !== 1 && block && block.text === '' && block.nodes.size === 1) {
        editor.removeNodeByKey(block.key);
        return;
    }
    // If the range is at the start of the text node, we need to figure out what
    // is behind it to know how to delete...
    var text = document.getDescendant(start.path);
    if (start.isAtStartOfNode(text)) {
        var prev = document.getPreviousText(text.key);
        var inline = document.getClosestInline(text.key);
        // If the range is at the start of the inline node, and previous text node
        // is empty, take the text node before that, or "prevBlock" would be the
        // same node as "block"
        if (inline && prev.text === '') {
            prev = document.getPreviousText(prev.key);
        }
        var prevBlock = document.getClosestBlock(prev.key);
        var prevVoid = document.getClosestVoid(prev.key, editor);
        // If the previous text node has a void parent, remove it.
        if (prevVoid) {
            editor.removeNodeByKey(prevVoid.key);
            return;
        }
        // If we're deleting by one character and the previous text node is not
        // inside the current block, we need to merge the two blocks together.
        if (n === 1 && prevBlock !== block) {
            range = range.moveAnchorTo(prev.key, prev.text.length);
            editor.deleteAtRange(range);
            return;
        }
    }
    // If the focus offset is farther than the number of characters to delete,
    // just remove the characters backwards inside the current node.
    if (n < focus.offset) {
        range = range.moveFocusBackward(n);
        editor.deleteAtRange(range);
        return;
    }
    // Otherwise, we need to see how many nodes backwards to go.
    var node = text;
    var offset = 0;
    var traversed = focus.offset;
    while (n > traversed) {
        node = document.getPreviousText(node.key);
        var next = traversed + node.text.length;
        if (n <= next) {
            offset = next - n;
            break;
        }
        else {
            traversed = next;
        }
    }
    range = range.moveAnchorTo(node.key, offset);
    editor.deleteAtRange(range);
};
/**
 * Delete backward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteCharBackwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    var text = startBlock.text;
    var n = TextUtils.getCharOffsetBackward(text, o);
    editor.deleteBackwardAtRange(range, n);
};
/**
 * Delete forward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteCharForwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    var text = startBlock.text;
    var n = TextUtils.getCharOffsetForward(text, o);
    editor.deleteForwardAtRange(range, n);
};
/**
 * Delete forward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */
Commands$1.deleteForwardAtRange = function (editor, range) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    if (n === 0)
        return;
    var value = editor.value;
    var document = value.document;
    var _range3 = range, start = _range3.start, focus = _range3.focus;
    // If the range is expanded, perform a regular delete instead.
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var voidParent = document.getClosestVoid(start.path, editor);
    // If the node has a void parent, delete it.
    if (voidParent) {
        editor.removeNodeByKey(voidParent.key);
        return;
    }
    var block = document.getClosestBlock(start.path);
    // If the closest is not void, but empty, remove it
    if (block && !editor.isVoid(block) && block.text === '' && document.nodes.size !== 1) {
        var nextBlock = document.getNextBlock(block.key);
        editor.removeNodeByKey(block.key);
        if (nextBlock && nextBlock.key) {
            editor.moveToStartOfNode(nextBlock);
        }
        return;
    }
    // If the range is at the start of the document, abort.
    if (start.isAtEndOfNode(document)) {
        return;
    }
    // If the range is at the start of the text node, we need to figure out what
    // is behind it to know how to delete...
    var text = document.getDescendant(start.path);
    if (start.isAtEndOfNode(text)) {
        var next = document.getNextText(text.key);
        var _nextBlock = document.getClosestBlock(next.key);
        var nextVoid = document.getClosestVoid(next.key, editor);
        // If the next text node has a void parent, remove it.
        if (nextVoid) {
            editor.removeNodeByKey(nextVoid.key);
            return;
        }
        // If we're deleting by one character and the previous text node is not
        // inside the current block, we need to merge the two blocks together.
        if (n === 1 && _nextBlock !== block) {
            range = range.moveFocusTo(next.key, 0);
            editor.deleteAtRange(range);
            return;
        }
    }
    // If the remaining characters to the end of the node is greater than or equal
    // to the number of characters to delete, just remove the characters forwards
    // inside the current node.
    if (n <= text.text.length - focus.offset) {
        range = range.moveFocusForward(n);
        editor.deleteAtRange(range);
        return;
    }
    // Otherwise, we need to see how many nodes forwards to go.
    var node = text;
    var offset = focus.offset;
    var traversed = text.text.length - focus.offset;
    while (n > traversed) {
        node = document.getNextText(node.key);
        var _next = traversed + node.text.length;
        if (n <= _next) {
            offset = n - traversed;
            break;
        }
        else {
            traversed = _next;
        }
    }
    range = range.moveFocusTo(node.key, offset);
    editor.deleteAtRange(range);
};
/**
 * Delete backward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteLineBackwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    editor.deleteBackwardAtRange(range, o);
};
/**
 * Delete forward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteLineForwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    editor.deleteForwardAtRange(range, startBlock.text.length - o);
};
/**
 * Delete backward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteWordBackwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    var text = startBlock.text;
    var n = o === 0 ? 1 : TextUtils.getWordOffsetBackward(text, o);
    editor.deleteBackwardAtRange(range, n);
};
/**
 * Delete forward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
Commands$1.deleteWordForwardAtRange = function (editor, range) {
    if (range.isExpanded) {
        editor.deleteAtRange(range);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startBlock = document.getClosestBlock(start.path);
    var offset = startBlock.getOffset(start.key);
    var o = offset + start.offset;
    var text = startBlock.text;
    var wordOffset = TextUtils.getWordOffsetForward(text, o);
    var n = wordOffset === 0 ? 1 : wordOffset;
    editor.deleteForwardAtRange(range, n);
};
/**
 * Insert a `block` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|String|Object} block
 */
Commands$1.insertBlockAtRange = function (editor, range, block) {
    range = deleteExpandedAtRange(editor, range);
    block = Block.create(block);
    var value = editor.value;
    var document = value.document;
    var _range4 = range, start = _range4.start;
    var startKey = start.key;
    var startOffset = start.offset;
    var startBlock = document.getClosestBlock(startKey);
    var startInline = document.getClosestInline(startKey);
    var parent = document.getParent(startBlock.key);
    var index = parent.nodes.indexOf(startBlock);
    var insertionMode = getInsertionMode(editor, range);
    if (insertionMode === 'before') {
        editor.insertNodeByKey(parent.key, index, block);
    }
    else if (insertionMode === 'behind') {
        editor.insertNodeByKey(parent.key, index + 1, block);
    }
    else {
        if (startInline && editor.isVoid(startInline)) {
            var atEnd = start.isAtEndOfNode(startInline);
            var siblingText = atEnd ? document.getNextText(startKey) : document.getPreviousText(startKey);
            var splitRange = atEnd ? range.moveToStartOfNode(siblingText) : range.moveToEndOfNode(siblingText);
            startKey = splitRange.start.key;
            startOffset = splitRange.start.offset;
        }
        editor.withoutNormalizing(function () {
            editor.splitDescendantsByKey(startBlock.key, startKey, startOffset);
            editor.insertNodeByKey(parent.key, index + 1, block);
        });
    }
};
/**
 * Check if current block should be split or new block should be added before or behind it.
 *
 * @param {Editor} editor
 * @param {Range} range
 */
var getInsertionMode = function getInsertionMode(editor, range) {
    var value = editor.value;
    var document = value.document;
    var start = range.start;
    var startKey = start.key;
    var startBlock = document.getClosestBlock(startKey);
    var startInline = document.getClosestInline(startKey);
    if (editor.isVoid(startBlock)) {
        if (start.isAtEndOfNode(startBlock))
            return 'behind';
        else
            return 'before';
    }
    else if (!startInline && startBlock.text === '') {
        return 'behind';
    }
    else if (start.isAtStartOfNode(startBlock)) {
        return 'before';
    }
    else if (start.isAtEndOfNode(startBlock)) {
        return 'behind';
    }
    return 'split';
};
/**
 * Insert a `fragment` at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Document} fragment
 */
Commands$1.insertFragmentAtRange = function (editor, range, fragment) {
    editor.withoutNormalizing(function () {
        range = deleteExpandedAtRange(editor, range);
        // If the fragment is empty, there's nothing to do after deleting.
        if (!fragment.nodes.size)
            return;
        // Regenerate the keys for all of the fragments nodes, so that they're
        // guaranteed not to collide with the existing keys in the document. Otherwise
        // they will be rengerated automatically and we won't have an easy way to
        // reference them.
        fragment = fragment.mapDescendants(function (child) {
            return child.regenerateKey();
        });
        // Calculate a few things...
        var _range5 = range, start = _range5.start;
        var value = editor.value;
        var document = value.document;
        var startText = document.getDescendant(start.path);
        var startBlock = document.getClosestBlock(startText.key);
        var startChild = startBlock.getFurthestChild(startText.key);
        var isAtStart = start.isAtStartOfNode(startBlock);
        var parent = document.getParent(startBlock.key);
        var index = parent.nodes.indexOf(startBlock);
        var blocks = fragment.getBlocks();
        var firstChild = fragment.nodes.first();
        var lastChild = fragment.nodes.last();
        var firstBlock = blocks.first();
        var lastBlock = blocks.last();
        var insertionNode = findInsertionNode(fragment, document, startBlock.key);
        // If the fragment only contains a void block, use `insertBlock` instead.
        if (firstBlock === lastBlock && editor.isVoid(firstBlock)) {
            editor.insertBlockAtRange(range, firstBlock);
            return;
        }
        // If inserting the entire fragment and it starts or ends with a single
        // nested block, e.g. a table, we do not merge it with existing blocks.
        if (insertionNode === fragment && (firstChild.hasBlockChildren() || lastChild.hasBlockChildren())) {
            // check if reversal is necessary or not
            var insertionMode = getInsertionMode(editor, range);
            var nodes = insertionMode === 'before' ? fragment.nodes : fragment.nodes.reverse();
            nodes.forEach(function (node) {
                editor.insertBlockAtRange(range, node);
            });
            return;
        }
        // If the first and last block aren't the same, we need to insert all of the
        // nodes after the insertion node's first block at the index.
        if (firstBlock !== lastBlock) {
            var lonelyParent = insertionNode.getFurthest(firstBlock.key, function (p) {
                return p.nodes.size === 1;
            });
            var lonelyChild = lonelyParent || firstBlock;
            var startIndex = parent.nodes.indexOf(startBlock);
            var excludingLonelyChild = insertionNode.removeNode(lonelyChild.key);
            excludingLonelyChild.nodes.forEach(function (node, i) {
                var newIndex = startIndex + i + 1;
                editor.insertNodeByKey(parent.key, newIndex, node);
            });
        }
        // Check if we need to split the node.
        if (start.offset !== 0) {
            editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
        }
        // Update our variables with the new value.
        document = editor.value.document;
        startText = document.getDescendant(start.key);
        startBlock = document.getClosestBlock(start.key);
        startChild = startBlock.getFurthestChild(startText.key);
        // If the first and last block aren't the same, we need to move any of the
        // starting block's children after the split into the last block of the
        // fragment, which has already been inserted.
        if (firstBlock !== lastBlock) {
            var nextChild = isAtStart ? startChild : startBlock.getNextSibling(startChild.key);
            var nextNodes = nextChild ? startBlock.nodes.skipUntil(function (n) {
                return n.key === nextChild.key;
            }) : Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
            var lastIndex = lastBlock.nodes.size;
            nextNodes.forEach(function (node, i) {
                var newIndex = lastIndex + i;
                editor.moveNodeByKey(node.key, lastBlock.key, newIndex);
            });
        }
        // If the starting block is empty, we replace it entirely with the first block
        // of the fragment, since this leads to a more expected behavior for the user.
        if (!editor.isVoid(startBlock) && startBlock.text === '' && !startBlock.findDescendant(function (n) {
            return editor.isVoid(n);
        })) {
            editor.removeNodeByKey(startBlock.key);
            editor.insertNodeByKey(parent.key, index, firstBlock);
        }
        else {
            // Otherwise, we maintain the starting block, and insert all of the first
            // block's inline nodes into it at the split point.
            var inlineChild = startBlock.getFurthestChild(startText.key);
            var inlineIndex = startBlock.nodes.indexOf(inlineChild);
            firstBlock.nodes.forEach(function (inline, i) {
                var o = start.offset === 0 ? 0 : 1;
                var newIndex = inlineIndex + i + o;
                editor.insertNodeByKey(startBlock.key, newIndex, inline);
            });
        }
    });
};
var findInsertionNode = function findInsertionNode(fragment, document, startKey) {
    var hasSingleNode = function hasSingleNode(object) {
        if (!object || object.object === 'text')
            return;
        return object.nodes.size === 1;
    };
    var firstNode = function firstNode(object) {
        return object && object.nodes.first();
    };
    var node = fragment;
    if (hasSingleNode(fragment)) {
        var fragmentInner = firstNode(fragment);
        var matches = function matches(documentNode) {
            return documentNode.type === fragmentInner.type;
        };
        var documentInner = document.getFurthest(startKey, matches);
        if (documentInner === document.getParent(startKey))
            node = fragmentInner;
        while (hasSingleNode(fragmentInner) && hasSingleNode(documentInner)) {
            fragmentInner = firstNode(fragmentInner);
            documentInner = firstNode(documentInner);
            if (fragmentInner.type === documentInner.type) {
                node = fragmentInner;
            }
            else {
                break;
            }
        }
    }
    return node;
};
/**
 * Insert an `inline` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|String|Object} inline
 */
Commands$1.insertInlineAtRange = function (editor, range, inline) {
    inline = Inline.create(inline);
    editor.withoutNormalizing(function () {
        range = deleteExpandedAtRange(editor, range);
        var value = editor.value;
        var document = value.document;
        var _range6 = range, start = _range6.start;
        var parent = document.getParent(start.path);
        var startText = document.assertDescendant(start.path);
        var index = parent.nodes.indexOf(startText);
        if (editor.isVoid(parent)) {
            return;
        }
        editor.splitNodeByPath(start.path, start.offset);
        editor.insertNodeByKey(parent.key, index + 1, inline);
    });
};
/**
 * Insert `text` at a `range`, with optional `marks`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */
Commands$1.insertTextAtRange = function (editor, range, text, marks) {
    editor.withoutNormalizing(function () {
        range = deleteExpandedAtRange(editor, range);
        var value = editor.value;
        var document = value.document;
        var _range7 = range, start = _range7.start;
        var offset = start.offset;
        var parent = document.getParent(start.path);
        if (editor.isVoid(parent)) {
            return;
        }
        editor.insertTextByPath(start.path, offset, text, marks);
    });
};
/**
 * Remove an existing `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mark|String} mark (optional)
 */
Commands$1.removeMarkAtRange = function (editor, range, mark) {
    if (range.isCollapsed)
        return;
    var value = editor.value;
    var document = value.document;
    var texts = document.getTextsAtRange(range);
    var start = range.start, end = range.end;
    editor.withoutNormalizing(function () {
        texts.forEach(function (node) {
            var key = node.key;
            var index = 0;
            var length = node.text.length;
            if (key === start.key)
                index = start.offset;
            if (key === end.key)
                length = end.offset;
            if (key === start.key && key === end.key)
                length = end.offset - start.offset;
            editor.removeMarkByKey(key, index, length, mark);
        });
    });
};
/**
 * Set the `properties` of block nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */
Commands$1.setBlocksAtRange = function (editor, range, properties) {
    var value = editor.value;
    var document = value.document;
    var blocks = document.getLeafBlocksAtRange(range);
    var start = range.start, end = range.end, isCollapsed = range.isCollapsed;
    var isStartVoid = document.hasVoidParent(start.path, editor);
    var startBlock = document.getClosestBlock(start.path);
    var endBlock = document.getClosestBlock(end.key);
    // Check if we have a "hanging" selection case where the even though the
    // selection extends into the start of the end node, we actually want to
    // ignore that for UX reasons.
    var isHanging = isCollapsed === false && start.offset === 0 && end.offset === 0 && isStartVoid === false && start.key === startBlock.getFirstText().key && end.key === endBlock.getFirstText().key;
    // If it's a hanging selection, ignore the last block.
    var sets = isHanging ? blocks.slice(0, -1) : blocks;
    editor.withoutNormalizing(function () {
        sets.forEach(function (block) {
            editor.setNodeByKey(block.key, properties);
        });
    });
};
/**
 * Set the `properties` of inline nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */
Commands$1.setInlinesAtRange = function (editor, range, properties) {
    var value = editor.value;
    var document = value.document;
    var inlines = document.getLeafInlinesAtRange(range);
    editor.withoutNormalizing(function () {
        inlines.forEach(function (inline) {
            editor.setNodeByKey(inline.key, properties);
        });
    });
};
/**
 * Split the block nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */
Commands$1.splitBlockAtRange = function (editor, range) {
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    range = deleteExpandedAtRange(editor, range);
    var _range8 = range, start = _range8.start, end = _range8.end;
    var value = editor.value;
    var _value = value, document = _value.document;
    var node = document.assertDescendant(start.path);
    var parent = document.getClosestBlock(node.key);
    var h = 0;
    while (parent && parent.object === 'block' && h < height) {
        node = parent;
        parent = document.getClosestBlock(parent.key);
        h++;
    }
    editor.withoutNormalizing(function () {
        editor.splitDescendantsByKey(node.key, start.path, start.offset);
        value = editor.value;
        document = value.document;
        if (range.isExpanded) {
            if (range.isBackward)
                range = range.flip();
            var nextBlock = document.getNextBlock(node.key);
            range = range.moveAnchorToStartOfNode(nextBlock);
            range = range.setFocus(range.focus.setPath(null));
            if (start.path.equals(end.path)) {
                range = range.moveFocusTo(range.anchor.key, end.offset - start.offset);
            }
            range = document.resolveRange(range);
            editor.deleteAtRange(range);
        }
    });
};
/**
 * Split the inline nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */
Commands$1.splitInlineAtRange = function (editor, range) {
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    range = deleteExpandedAtRange(editor, range);
    var _range9 = range, start = _range9.start;
    var value = editor.value;
    var document = value.document;
    var node = document.assertDescendant(start.path);
    var parent = document.getClosestInline(node.key);
    var h = 0;
    while (parent && parent.object === 'inline' && h < height) {
        node = parent;
        parent = document.getClosestInline(parent.key);
        h++;
    }
    editor.splitDescendantsByKey(node.key, start.path, start.offset);
};
/**
 * Add or remove a `mark` from the characters at `range`, depending on whether
 * it's already there.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */
Commands$1.toggleMarkAtRange = function (editor, range, mark) {
    if (range.isCollapsed)
        return;
    mark = Mark.create(mark);
    var value = editor.value;
    var document = value.document;
    var marks = document.getActiveMarksAtRange(range);
    var exists = marks.some(function (m) {
        return m.equals(mark);
    });
    if (exists) {
        editor.removeMarkAtRange(range, mark);
    }
    else {
        editor.addMarkAtRange(range, mark);
    }
};
/**
 * Unwrap all of the block nodes in a `range` from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */
Commands$1.unwrapBlockAtRange = function (editor, range, properties) {
    properties = Node.createProperties(properties);
    var value = editor.value;
    var document = value.document;
    var blocks = document.getLeafBlocksAtRange(range);
    var wrappers = blocks.map(function (block) {
        return document.getClosest(block.key, function (parent) {
            if (parent.object !== 'block')
                return false;
            if (properties.type != null && parent.type !== properties.type)
                return false;
            if (properties.data != null && !parent.data.isSuperset(properties.data))
                return false;
            return true;
        });
    }).filter(function (exists) {
        return exists;
    }).toOrderedSet().toList();
    editor.withoutNormalizing(function () {
        wrappers.forEach(function (block) {
            var first = block.nodes.first();
            var last = block.nodes.last();
            var parent = editor.value.document.getParent(block.key);
            var index = parent.nodes.indexOf(block);
            var children = block.nodes.filter(function (child) {
                return blocks.some(function (b) {
                    return child === b || child.hasDescendant(b.key);
                });
            });
            var firstMatch = children.first();
            var lastMatch = children.last();
            if (first === firstMatch && last === lastMatch) {
                block.nodes.forEach(function (child, i) {
                    editor.moveNodeByKey(child.key, parent.key, index + i);
                });
                editor.removeNodeByKey(block.key);
            }
            else if (last === lastMatch) {
                block.nodes.skipUntil(function (n) {
                    return n === firstMatch;
                }).forEach(function (child, i) {
                    editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
                });
            }
            else if (first === firstMatch) {
                block.nodes.takeUntil(function (n) {
                    return n === lastMatch;
                }).push(lastMatch).forEach(function (child, i) {
                    editor.moveNodeByKey(child.key, parent.key, index + i);
                });
            }
            else {
                var firstText = firstMatch.getFirstText();
                editor.splitDescendantsByKey(block.key, firstText.key, 0);
                document = editor.value.document;
                children.forEach(function (child, i) {
                    if (i === 0) {
                        var extra = child;
                        child = document.getNextBlock(child.key);
                        editor.removeNodeByKey(extra.key);
                    }
                    editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
                });
            }
        });
    });
};
/**
 * Unwrap the inline nodes in a `range` from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */
Commands$1.unwrapInlineAtRange = function (editor, range, properties) {
    properties = Node.createProperties(properties);
    var value = editor.value;
    var document = value.document;
    var texts = document.getTextsAtRange(range);
    var inlines = texts.map(function (text) {
        return document.getClosest(text.key, function (parent) {
            if (parent.object !== 'inline')
                return false;
            if (properties.type != null && parent.type !== properties.type)
                return false;
            if (properties.data != null && !parent.data.isSuperset(properties.data))
                return false;
            return true;
        });
    }).filter(function (exists) {
        return exists;
    }).toOrderedSet().toList();
    editor.withoutNormalizing(function () {
        inlines.forEach(function (inline) {
            var parent = editor.value.document.getParent(inline.key);
            var index = parent.nodes.indexOf(inline);
            inline.nodes.forEach(function (child, i) {
                editor.moveNodeByKey(child.key, parent.key, index + i);
            });
            editor.removeNodeByKey(inline.key);
        });
    });
};
/**
 * Wrap all of the blocks in a `range` in a new `block`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|Object|String} block
 */
Commands$1.wrapBlockAtRange = function (editor, range, block) {
    block = Block.create(block);
    block = block.set('nodes', block.nodes.clear());
    var value = editor.value;
    var document = value.document;
    var blocks = document.getLeafBlocksAtRange(range);
    var firstblock = blocks.first();
    var lastblock = blocks.last();
    var parent = void 0, siblings = void 0, index = void 0;
    // If there is only one block in the selection then we know the parent and
    // siblings.
    if (blocks.length === 1) {
        parent = document.getParent(firstblock.key);
        siblings = blocks;
    }
    else {
        // Determine closest shared parent to all blocks in selection.
        parent = document.getClosest(firstblock.key, function (p1) {
            return !!document.getClosest(lastblock.key, function (p2) {
                return p1 === p2;
            });
        });
    }
    // If no shared parent could be found then the parent is the document.
    if (parent == null)
        parent = document;
    // Create a list of direct children siblings of parent that fall in the
    // selection.
    if (siblings == null) {
        var indexes = parent.nodes.reduce(function (ind, node, i) {
            if (node === firstblock || node.hasDescendant(firstblock.key))
                ind[0] = i;
            if (node === lastblock || node.hasDescendant(lastblock.key))
                ind[1] = i;
            return ind;
        }, []);
        index = indexes[0];
        siblings = parent.nodes.slice(indexes[0], indexes[1] + 1);
    }
    // Get the index to place the new wrapped node at.
    if (index == null) {
        index = parent.nodes.indexOf(siblings.first());
    }
    editor.withoutNormalizing(function () {
        // Inject the new block node into the parent.
        editor.insertNodeByKey(parent.key, index, block);
        // Move the sibling nodes into the new block node.
        siblings.forEach(function (node, i) {
            editor.moveNodeByKey(node.key, block.key, i);
        });
    });
};
/**
 * Wrap the text and inlines in a `range` in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|Object|String} inline
 */
Commands$1.wrapInlineAtRange = function (editor, range, inline) {
    var value = editor.value;
    var document = value.document;
    var start = range.start, end = range.end;
    if (range.isCollapsed) {
        // Wrapping an inline void
        var inlineParent = document.getClosestInline(start.path);
        if (!inlineParent) {
            return;
        }
        if (!editor.isVoid(inlineParent)) {
            return;
        }
        return editor.wrapInlineByKey(inlineParent.key, inline);
    }
    inline = Inline.create(inline);
    inline = inline.set('nodes', inline.nodes.clear());
    var blocks = document.getLeafBlocksAtRange(range);
    var startBlock = document.getClosestBlock(start.path);
    var endBlock = document.getClosestBlock(end.path);
    var startInline = document.getClosestInline(start.path);
    var endInline = document.getClosestInline(end.path);
    var startChild = startBlock.getFurthestChild(start.key);
    var endChild = endBlock.getFurthestChild(end.key);
    editor.withoutNormalizing(function () {
        if (!startInline || startInline !== endInline) {
            editor.splitDescendantsByKey(endChild.key, end.key, end.offset);
            editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
        }
        document = editor.value.document;
        startBlock = document.getDescendant(startBlock.key);
        endBlock = document.getDescendant(endBlock.key);
        startChild = startBlock.getFurthestChild(start.key);
        endChild = endBlock.getFurthestChild(end.key);
        var startIndex = startBlock.nodes.indexOf(startChild);
        var endIndex = endBlock.nodes.indexOf(endChild);
        if (startInline && startInline === endInline) {
            var texts = startBlock.getTextsAtRange(range).map(function (text) {
                if (start.key === text.key && end.key === text.key) {
                    return text.splitText(start.offset)[1].splitText(end.offset - start.offset)[0].regenerateKey();
                }
                else if (start.key === text.key) {
                    return text.splitText(start.offset)[1].regenerateKey();
                }
                else if (end.key === text.key) {
                    return text.splitText(end.offset)[0].regenerateKey();
                }
                else {
                    return text.regenerateKey();
                }
            });
            inline = inline.set('nodes', texts);
            editor.insertInlineAtRange(range, inline);
        }
        else if (startBlock === endBlock) {
            document = editor.value.document;
            startBlock = document.getClosestBlock(start.key);
            startChild = startBlock.getFurthestChild(start.key);
            var startInner = document.getNextSibling(startChild.key);
            var startInnerIndex = startBlock.nodes.indexOf(startInner);
            var endInner = start.key === end.key ? startInner : startBlock.getFurthestChild(end.key);
            var inlines = startBlock.nodes.skipUntil(function (n) {
                return n === startInner;
            }).takeUntil(function (n) {
                return n === endInner;
            }).push(endInner);
            var node = inline.regenerateKey();
            editor.insertNodeByKey(startBlock.key, startInnerIndex, node);
            inlines.forEach(function (child, i) {
                editor.moveNodeByKey(child.key, node.key, i);
            });
        }
        else {
            var startInlines = startBlock.nodes.slice(startIndex + 1);
            var endInlines = endBlock.nodes.slice(0, endIndex + 1);
            var startNode = inline.regenerateKey();
            var endNode = inline.regenerateKey();
            editor.insertNodeByKey(startBlock.key, startIndex + 1, startNode);
            editor.insertNodeByKey(endBlock.key, endIndex, endNode);
            startInlines.forEach(function (child, i) {
                editor.moveNodeByKey(child.key, startNode.key, i);
            });
            endInlines.forEach(function (child, i) {
                editor.moveNodeByKey(child.key, endNode.key, i);
            });
            blocks.slice(1, -1).forEach(function (block) {
                var node = inline.regenerateKey();
                editor.insertNodeByKey(block.key, 0, node);
                block.nodes.forEach(function (child, i) {
                    editor.moveNodeByKey(child.key, node.key, i);
                });
            });
        }
    });
};
/**
 * Wrap the text in a `range` in a prefix/suffix.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} prefix
 * @param {String} suffix (optional)
 */
Commands$1.wrapTextAtRange = function (editor, range, prefix) {
    var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : prefix;
    var start = range.start, end = range.end;
    var startRange = range.moveToStart();
    var endRange = range.moveToEnd();
    if (start.path.equals(end.path)) {
        endRange = endRange.moveForward(prefix.length);
    }
    editor.withoutNormalizing(function () {
        editor.insertTextAtRange(startRange, prefix);
        editor.insertTextAtRange(endRange, suffix);
    });
};
/**
 * Commands.
 *
 * @type {Object}
 */
var Commands$2 = {};
/**
 * Add mark to text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mixed} mark
 */
Commands$2.addMarkByPath = function (editor, path, offset, length, mark) {
    mark = Mark.create(mark);
    editor.addMarksByPath(path, offset, length, [mark]);
};
Commands$2.addMarksByPath = function (editor, path, offset, length, marks) {
    marks = Mark.createSet(marks);
    if (!marks.size) {
        return;
    }
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    editor.withoutNormalizing(function () {
        // If it ends before the end of the node, we'll need to split to create a new
        // text with different marks.
        if (offset + length < node.text.length) {
            editor.splitNodeByPath(path, offset + length);
        }
        // Same thing if it starts after the start. But in that case, we need to
        // update our path and offset to point to the new start.
        if (offset > 0) {
            editor.splitNodeByPath(path, offset);
            path = PathUtils.increment(path);
            offset = 0;
        }
        marks.forEach(function (mark) {
            editor.applyOperation({
                type: 'add_mark',
                path: path,
                mark: Mark.create(mark)
            });
        });
    });
};
/**
 * Insert a `fragment` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Fragment} fragment
 */
Commands$2.insertFragmentByPath = function (editor, path, index, fragment) {
    fragment.nodes.forEach(function (node, i) {
        editor.insertNodeByPath(path, index + i, node);
    });
};
/**
 * Insert a `node` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Node} node
 */
Commands$2.insertNodeByPath = function (editor, path, index, node) {
    editor.applyOperation({
        type: 'insert_node',
        path: path.concat(index),
        node: node
    });
};
/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */
Commands$2.insertTextByPath = function (editor, path, offset, text, marks) {
    marks = Mark.createSet(marks);
    var value = editor.value;
    var annotations = value.annotations, document = value.document;
    document.assertNode(path);
    editor.withoutNormalizing(function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for (var _iterator = annotations.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var annotation = _step.value;
                var start = annotation.start, end = annotation.end;
                var isAtomic = editor.isAtomic(annotation);
                if (!isAtomic) {
                    continue;
                }
                if (!start.path.equals(path)) {
                    continue;
                }
                if (start.offset < offset && (!end.path.equals(path) || end.offset > offset)) {
                    editor.removeAnnotation(annotation);
                }
            }
        }
        catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        }
        finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            }
            finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        editor.applyOperation({
            type: 'insert_text',
            path: path,
            offset: offset,
            text: text
        });
        if (marks.size) {
            editor.addMarksByPath(path, offset, text.length, marks);
        }
    });
};
/**
 * Merge a node by `path` with the previous node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
Commands$2.mergeNodeByPath = function (editor, path) {
    var value = editor.value;
    var document = value.document;
    var original = document.getDescendant(path);
    var previous = document.getPreviousSibling(path);
    if (!previous) {
        throw new Error('Unable to merge node with path "' + path + '", because it has no previous sibling.');
    }
    var position = previous.object === 'text' ? previous.text.length : previous.nodes.size;
    editor.applyOperation({
        type: 'merge_node',
        path: path,
        position: position,
        // for undos to succeed we only need the type and data because
        // these are the only properties that get changed in the merge operation
        properties: {
            type: original.type,
            data: original.data
        },
        target: null
    });
};
/**
 * Move a node by `path` to a new parent by `newParentPath` and `newIndex`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} newParentPath
 * @param {Number} newIndex
 */
Commands$2.moveNodeByPath = function (editor, path, newParentPath, newIndex) {
    // If the operation path and newParentPath are the same,
    // this should be considered a NOOP
    if (PathUtils.isEqual(path, newParentPath)) {
        return editor;
    }
    var newPath = newParentPath.concat(newIndex);
    if (PathUtils.isEqual(path, newPath)) {
        return editor;
    }
    editor.applyOperation({
        type: 'move_node',
        path: path,
        newPath: newPath
    });
};
/**
 * Remove mark from text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 */
Commands$2.removeMarkByPath = function (editor, path, offset, length, mark) {
    mark = Mark.create(mark);
    editor.removeMarksByPath(path, offset, length, [mark]);
};
Commands$2.removeMarksByPath = function (editor, path, offset, length, marks) {
    marks = Mark.createSet(marks);
    if (!marks.size) {
        return;
    }
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    editor.withoutNormalizing(function () {
        // If it ends before the end of the node, we'll need to split to create a new
        // text with different marks.
        if (offset + length < node.text.length) {
            editor.splitNodeByPath(path, offset + length);
        }
        // Same thing if it starts after the start. But in that case, we need to
        // update our path and offset to point to the new start.
        if (offset > 0) {
            editor.splitNodeByPath(path, offset);
            path = PathUtils.increment(path);
            offset = 0;
        }
        marks.forEach(function (mark) {
            editor.applyOperation({
                type: 'remove_mark',
                path: path,
                offset: offset,
                length: length,
                mark: mark
            });
        });
    });
};
/**
 * Remove all `marks` from node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
Commands$2.removeAllMarksByPath = function (editor, path) {
    var state = editor.state;
    var document = state.document;
    var node = document.assertNode(path);
    editor.withoutNormalizing(function () {
        if (node.object === 'text') {
            editor.removeMarksByPath(path, 0, node.text.length, node.marks);
            return;
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
        try {
            for (var _iterator2 = node.texts()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref = _step2.value;
                var _ref2 = slicedToArray(_ref, 2);
                var n = _ref2[0];
                var p = _ref2[1];
                var pth = path.concat(p);
                editor.removeMarksByPath(pth, 0, n.text.length, n.marks);
            }
        }
        catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        }
        finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            }
            finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });
};
/**
 * Remove a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
Commands$2.removeNodeByPath = function (editor, path) {
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    editor.applyOperation({
        type: 'remove_node',
        path: path,
        node: node
    });
};
/**
 * Remove text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 */
Commands$2.removeTextByPath = function (editor, path, offset, length) {
    var value = editor.value;
    var document = value.document, annotations = value.annotations;
    var node = document.assertNode(path);
    var text = node.text.slice(offset, offset + length);
    editor.withoutNormalizing(function () {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;
        try {
            for (var _iterator3 = annotations.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var annotation = _step3.value;
                var start = annotation.start, end = annotation.end;
                var isAtomic = editor.isAtomic(annotation);
                if (!isAtomic) {
                    continue;
                }
                if (!start.path.equals(path)) {
                    continue;
                }
                if (start.offset < offset && (!end.path.equals(path) || end.offset > offset)) {
                    editor.removeAnnotation(annotation);
                }
            }
        }
        catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        }
        finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            }
            finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
        editor.applyOperation({
            type: 'remove_text',
            path: path,
            offset: offset,
            text: text
        });
    });
};
/**
`* Replace a `node` with another `node`
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|Node} node
 */
Commands$2.replaceNodeByPath = function (editor, path, newNode) {
    newNode = Node.create(newNode);
    var index = path.last();
    var parentPath = PathUtils.lift(path);
    editor.withoutNormalizing(function () {
        editor.removeNodeByPath(path);
        editor.insertNodeByPath(parentPath, index, newNode);
    });
};
/**
 * Replace a `length` of text at `offset` with new `text` and optional `marks`.
 *
 * @param {Editor} editor
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {string} text
 * @param {Set<Mark>} marks (optional)
 */
Commands$2.replaceTextByPath = function (editor, path, offset, length, text, marks) {
    editor.withoutNormalizing(function () {
        editor.removeTextByPath(path, offset, length);
        editor.insertTextByPath(path, offset, text, marks);
    });
};
/**
 * Set `newProperties` on mark on text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Object|Mark} properties
 * @param {Object} newProperties
 */
Commands$2.setMarkByPath = function (editor, path, offset, length, properties, newProperties) {
    properties = Mark.create(properties);
    newProperties = Mark.createProperties(newProperties);
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    editor.withoutNormalizing(function () {
        // If it ends before the end of the node, we'll need to split to create a new
        // text with different marks.
        if (offset + length < node.text.length) {
            editor.splitNodeByPath(path, offset + length);
        }
        // Same thing if it starts after the start. But in that case, we need to
        // update our path and offset to point to the new start.
        if (offset > 0) {
            editor.splitNodeByPath(path, offset);
            path = PathUtils.increment(path);
            offset = 0;
        }
        editor.applyOperation({
            type: 'set_mark',
            path: path,
            properties: properties,
            newProperties: newProperties
        });
    });
};
/**
 * Set `properties` on a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} newProperties
 */
Commands$2.setNodeByPath = function (editor, path, newProperties) {
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    newProperties = Node.createProperties(newProperties);
    var prevProperties = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(node, Object.keys(newProperties));
    editor.applyOperation({
        type: 'set_node',
        path: path,
        properties: prevProperties,
        newProperties: newProperties
    });
};
/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */
Commands$2.setTextByPath = function (editor, path, text, marks) {
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    var end = node.text.length;
    editor.replaceTextByPath(path, 0, end, text, marks);
};
/**
 * Split a node by `path` at `position`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} position
 * @param {Object} options
 */
Commands$2.splitNodeByPath = function (editor, path, position) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _options$target = options.target, target = _options$target === undefined ? null : _options$target;
    var value = editor.value;
    var document = value.document;
    var node = document.getDescendant(path);
    editor.applyOperation({
        type: 'split_node',
        path: path,
        position: position,
        target: target,
        properties: {
            type: node.type,
            data: node.data
        }
    });
};
/**
 * Split a node deeply down the tree by `path`, `textPath` and `textOffset`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Array} textPath
 * @param {Number} textOffset
 */
Commands$2.splitDescendantsByPath = function (editor, path, textPath, textOffset) {
    if (path.equals(textPath)) {
        editor.splitNodeByPath(textPath, textOffset);
        return;
    }
    var value = editor.value;
    var document = value.document;
    var index = textOffset;
    var lastPath = textPath;
    editor.withoutNormalizing(function () {
        editor.splitNodeByKey(textPath, textOffset);
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;
        try {
            for (var _iterator4 = document.ancestors(textPath)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _ref3 = _step4.value;
                var _ref4 = slicedToArray(_ref3, 2);
                var ancestorPath = _ref4[1];
                var target = index;
                index = lastPath.last() + 1;
                lastPath = ancestorPath;
                editor.splitNodeByPath(ancestorPath, index, { target: target });
                if (ancestorPath.equals(path)) {
                    break;
                }
            }
        }
        catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        }
        finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            }
            finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    });
};
/**
 * Unwrap content from an inline parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */
Commands$2.unwrapInlineByPath = function (editor, path, properties) {
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var node = document.assertNode(path);
    var first = node.getFirstText();
    var last = node.getLastText();
    var range = selection.moveToRangeOfNode(first, last);
    editor.unwrapInlineAtRange(range, properties);
};
/**
 * Unwrap content from a block parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */
Commands$2.unwrapBlockByPath = function (editor, path, properties) {
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var node = document.assertNode(path);
    var first = node.getFirstText();
    var last = node.getLastText();
    var range = selection.moveToRangeOfNode(first, last);
    editor.unwrapBlockAtRange(range, properties);
};
/**
 * Unwrap a single node from its parent.
 *
 * If the node is surrounded with siblings, its parent will be
 * split. If the node is the only child, the parent is removed, and
 * simply replaced by the node itself.  Cannot unwrap a root node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
Commands$2.unwrapNodeByPath = function (editor, path) {
    var value = editor.value;
    var document = value.document;
    document.assertNode(path);
    var parentPath = PathUtils.lift(path);
    var parent = document.assertNode(parentPath);
    var index = path.last();
    var parentIndex = parentPath.last();
    var grandPath = PathUtils.lift(parentPath);
    var isFirst = index === 0;
    var isLast = index === parent.nodes.size - 1;
    editor.withoutNormalizing(function () {
        if (parent.nodes.size === 1) {
            editor.moveNodeByPath(path, grandPath, parentIndex + 1);
            editor.removeNodeByPath(parentPath);
        }
        else if (isFirst) {
            editor.moveNodeByPath(path, grandPath, parentIndex);
        }
        else if (isLast) {
            editor.moveNodeByPath(path, grandPath, parentIndex + 1);
        }
        else {
            var updatedPath = PathUtils.increment(path, 1, parentPath.size - 1);
            updatedPath = updatedPath.set(updatedPath.size - 1, 0);
            editor.splitNodeByPath(parentPath, index);
            editor.moveNodeByPath(updatedPath, grandPath, parentIndex + 1);
        }
    });
};
/**
 * Unwrap all of the children of a node, by removing the node and replacing it
 * with the children in the tree.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
Commands$2.unwrapChildrenByPath = function (editor, path) {
    path = PathUtils.create(path);
    var value = editor.value;
    var document = value.document;
    var node = document.assertNode(path);
    var parentPath = PathUtils.lift(path);
    var index = path.last();
    var nodes = node.nodes;
    editor.withoutNormalizing(function () {
        nodes.reverse().forEach(function (child, i) {
            var childIndex = nodes.size - i - 1;
            var childPath = path.push(childIndex);
            editor.moveNodeByPath(childPath, parentPath, index + 1);
        });
        editor.removeNodeByPath(path);
    });
};
/**
 * Wrap a node in a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} block
 */
Commands$2.wrapBlockByPath = function (editor, path, block) {
    block = Block.create(block);
    block = block.set('nodes', block.nodes.clear());
    var parentPath = PathUtils.lift(path);
    var index = path.last();
    var newPath = PathUtils.increment(path);
    editor.withoutNormalizing(function () {
        editor.insertNodeByPath(parentPath, index, block);
        editor.moveNodeByPath(newPath, path, 0);
    });
};
/**
 * Wrap a node in an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} inline
 */
Commands$2.wrapInlineByPath = function (editor, path, inline) {
    inline = Inline.create(inline);
    inline = inline.set('nodes', inline.nodes.clear());
    var parentPath = PathUtils.lift(path);
    var index = path.last();
    var newPath = PathUtils.increment(path);
    editor.withoutNormalizing(function () {
        editor.insertNodeByPath(parentPath, index, inline);
        editor.moveNodeByPath(newPath, path, 0);
    });
};
/**
 * Wrap a node by `path` with `node`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Node|Object} node
 */
Commands$2.wrapNodeByPath = function (editor, path, node) {
    node = Node.create(node);
    if (node.object === 'block') {
        editor.wrapBlockByPath(path, node);
    }
    else if (node.object === 'inline') {
        editor.wrapInlineByPath(path, node);
    }
};
/**
 * Mix in `*ByKey` variants.
 */
var COMMANDS = ['addMark', 'insertFragment', 'insertNode', 'insertText', 'mergeNode', 'removeAllMarks', 'removeMark', 'removeNode', 'removeText', 'replaceNode', 'replaceText', 'setMark', 'setNode', 'setText', 'splitNode', 'unwrapBlock', 'unwrapChildren', 'unwrapInline', 'unwrapNode', 'wrapBlock', 'wrapInline', 'wrapNode'];
var _loop = function _loop(method) {
    Commands$2[method + 'ByKey'] = function (editor, key) {
        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            args[_key3 - 2] = arguments[_key3];
        }
        var value = editor.value;
        var document = value.document;
        var path = document.assertPath(key);
        editor[method + 'ByPath'].apply(editor, [path].concat(args));
    };
};
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;
try {
    for (var _iterator5 = COMMANDS[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var method = _step5.value;
        _loop(method);
    }
    // Moving nodes takes two keys, so it's slightly different.
}
catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
}
finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    }
    finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}
Commands$2.moveNodeByKey = function (editor, key, newKey) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
    }
    var value = editor.value;
    var document = value.document;
    var path = document.assertPath(key);
    var newPath = document.assertPath(newKey);
    editor.moveNodeByPath.apply(editor, [path, newPath].concat(args));
};
// Splitting descendants takes two keys, so it's slightly different.
Commands$2.splitDescendantsByKey = function (editor, key, textKey) {
    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
    }
    var value = editor.value;
    var document = value.document;
    var path = document.assertPath(key);
    var textPath = document.assertPath(textKey);
    editor.splitDescendantsByPath.apply(editor, [path, textPath].concat(args));
};
/**
 * Commands.
 *
 * @type {Object}
 */
var Commands$3 = {};
/**
 * Save an `operation` into the history.
 *
 * @param {Editor} editor
 * @param {Object} operation
 */
Commands$3.save = function (editor, operation) {
    var operations = editor.operations, value = editor.value;
    var data = value.data;
    var _editor$tmp = editor.tmp, save = _editor$tmp.save, merge = _editor$tmp.merge;
    if (save === false)
        return;
    var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
    var lastBatch = undos.last();
    var lastOperation = lastBatch && lastBatch.last();
    // If `merge` is non-commital, and this is not the first operation in a new
    // editor, then merge, otherwise merge based on the last operation.
    if (merge == null) {
        if (operations.size !== 0) {
            merge = true;
        }
        else {
            merge = shouldMerge(operation, lastOperation);
        }
    }
    // If the `merge` flag is true, add the operation to the last batch.
    if (merge && lastBatch) {
        var batch = lastBatch.push(operation);
        undos = undos.pop();
        undos = undos.push(batch);
    }
    else {
        // Otherwise, create a new batch with the operation.
        var _batch = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])([operation]);
        undos = undos.push(_batch);
    }
    // Constrain the history to 100 entries for memory's sake.
    if (undos.size > 100) {
        undos = undos.takeLast(100);
    }
    // Clear the redos and update the history.
    editor.withoutSaving(function () {
        var redos = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
        var newData = data.set('undos', undos).set('redos', redos);
        editor.setData(newData);
    });
};
/**
 * Redo to the next value in the history.
 *
 * @param {Editor} editor
 */
Commands$3.redo = function (editor) {
    var value = editor.value;
    var data = value.data;
    var redos = data.get('redos') || Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
    var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
    var batch = redos.last();
    if (!batch)
        return;
    editor.withoutSaving(function () {
        editor.withoutNormalizing(function () {
            // Replay the batch of operations.
            batch.forEach(function (op) {
                var _op = op, type = _op.type, properties = _op.properties;
                // When the operation mutates the selection, omit its `isFocused` value to
                // prevent the editor focus from changing during redoing.
                if (type === 'set_selection') {
                    op = op.set('properties', lodash_omit__WEBPACK_IMPORTED_MODULE_7___default()(properties, 'isFocused'));
                }
                editor.applyOperation(op);
            });
            // Shift the next value into the undo stack.
            redos = redos.pop();
            undos = undos.push(batch);
            var newData = data.set('undos', undos).set('redos', redos);
            editor.setData(newData);
        });
    });
};
/**
 * Undo the previous operations in the history.
 *
 * @param {Editor} editor
 */
Commands$3.undo = function (editor) {
    var value = editor.value;
    var data = value.data;
    var redos = data.get('redos') || Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
    var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
    var batch = undos.last();
    if (!batch)
        return;
    editor.withoutSaving(function () {
        editor.withoutNormalizing(function () {
            // Replay the inverse of the previous operations.
            batch.slice().reverse().map(function (op) {
                return op.invert();
            }).forEach(function (inverse) {
                var _inverse = inverse, type = _inverse.type, properties = _inverse.properties;
                // When the operation mutates the selection, omit its `isFocused` value to
                // prevent the editor focus from changing during undoing.
                if (type === 'set_selection') {
                    inverse = inverse.set('properties', lodash_omit__WEBPACK_IMPORTED_MODULE_7___default()(properties, 'isFocused'));
                }
                editor.applyOperation(inverse);
            });
            // Shift the previous operations into the redo stack.
            redos = redos.push(batch);
            undos = undos.pop();
            var newData = data.set('undos', undos).set('redos', redos);
            editor.setData(newData);
        });
    });
};
/**
 * Apply a series of changes inside a synchronous `fn`, without merging any of
 * the new operations into previous save point in the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */
Commands$3.withoutMerging = function (editor, fn) {
    var value = editor.tmp.merge;
    editor.tmp.merge = false;
    fn(editor);
    editor.tmp.merge = value;
};
/**
 * Apply a series of changes inside a synchronous `fn`, without saving any of
 * their operations into the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */
Commands$3.withoutSaving = function (editor, fn) {
    var value = editor.tmp.save;
    editor.tmp.save = false;
    fn(editor);
    editor.tmp.save = value;
};
/**
 * Check whether to merge a new operation `o` into the previous operation `p`.
 *
 * @param {Object} o
 * @param {Object} p
 * @return {Boolean}
 */
function shouldMerge(o, p) {
    if (!p)
        return false;
    var merge = o.type === 'set_selection' && p.type === 'set_selection' || o.type === 'insert_text' && p.type === 'insert_text' && o.offset === p.offset + p.text.length && o.path.equals(p.path) || o.type === 'remove_text' && p.type === 'remove_text' && o.offset + o.text.length === p.offset && o.path.equals(p.path);
    return merge;
}
var Commands$4 = {};
Commands$4.blur = function (editor) {
    editor.select({ isFocused: false });
};
Commands$4.deselect = function (editor) {
    var range = Selection.create();
    editor.select(range);
};
Commands$4.focus = function (editor) {
    editor.select({ isFocused: true });
};
Commands$4.flip = function (editor) {
    editor.command(proxy, 'flip');
};
Commands$4.moveAnchorBackward = function (editor) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }
    editor.command.apply(editor, [pointBackward, 'anchor'].concat(args));
};
Commands$4.moveAnchorWordBackward = function (editor) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }
    editor.command.apply(editor, [pointWordBackward, 'anchor'].concat(args));
};
Commands$4.moveAnchorForward = function (editor) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }
    editor.command.apply(editor, [pointForward, 'anchor'].concat(args));
};
Commands$4.moveAnchorWordForward = function (editor) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
    }
    editor.command.apply(editor, [pointWordForward, 'anchor'].concat(args));
};
Commands$4.moveAnchorTo = function (editor) {
    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
    }
    editor.command.apply(editor, [proxy, 'moveAnchorTo'].concat(args));
};
Commands$4.moveAnchorToEndOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'end', 'block');
};
Commands$4.moveAnchorToEndOfInline = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'end', 'inline');
};
Commands$4.moveAnchorToEndOfDocument = function (editor) {
    editor.moveAnchorToEndOfNode(editor.value.document).moveToAnchor();
};
Commands$4.moveAnchorToEndOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'block');
};
Commands$4.moveAnchorToEndOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'inline');
};
Commands$4.moveAnchorToEndOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'text');
};
Commands$4.moveAnchorToEndOfNode = function (editor) {
    for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
    }
    editor.command.apply(editor, [proxy, 'moveAnchorToEndOfNode'].concat(args));
};
Commands$4.moveAnchorToEndOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'block');
};
Commands$4.moveAnchorToEndOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'inline');
};
Commands$4.moveAnchorToEndOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'text');
};
Commands$4.moveAnchorToEndOfText = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'end', 'text');
};
Commands$4.moveAnchorToStartOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'start', 'block');
};
Commands$4.moveAnchorToStartOfDocument = function (editor) {
    editor.moveAnchorToStartOfNode(editor.value.document).moveToAnchor();
};
Commands$4.moveAnchorToStartOfInline = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'start', 'inline');
};
Commands$4.moveAnchorToStartOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'block');
};
Commands$4.moveAnchorToStartOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'inline');
};
Commands$4.moveAnchorToStartOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'text');
};
Commands$4.moveAnchorToStartOfNode = function (editor) {
    for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
    }
    editor.command.apply(editor, [proxy, 'moveAnchorToStartOfNode'].concat(args));
};
Commands$4.moveAnchorToStartOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'block');
};
Commands$4.moveAnchorToStartOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'inline');
};
Commands$4.moveAnchorToStartOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'text');
};
Commands$4.moveAnchorToStartOfText = function (editor) {
    editor.command(pointEdgeObject, 'anchor', 'start', 'text');
};
Commands$4.moveBackward = function (editor) {
    var _editor$moveAnchorBac;
    for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        args[_key8 - 1] = arguments[_key8];
    }
    (_editor$moveAnchorBac = editor.moveAnchorBackward.apply(editor, args)).moveFocusBackward.apply(_editor$moveAnchorBac, args);
};
Commands$4.moveWordBackward = function (editor) {
    for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        args[_key9 - 1] = arguments[_key9];
    }
    editor.moveFocusWordBackward.apply(editor, args).moveToFocus();
};
Commands$4.moveEndBackward = function (editor) {
    for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
        args[_key10 - 1] = arguments[_key10];
    }
    editor.command.apply(editor, [pointBackward, 'end'].concat(args));
};
Commands$4.moveEndWordBackward = function (editor) {
    for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
        args[_key11 - 1] = arguments[_key11];
    }
    editor.command.apply(editor, [pointWordBackward, 'end'].concat(args));
};
Commands$4.moveEndForward = function (editor) {
    for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
        args[_key12 - 1] = arguments[_key12];
    }
    editor.command.apply(editor, [pointForward, 'end'].concat(args));
};
Commands$4.moveEndWordForward = function (editor) {
    for (var _len13 = arguments.length, args = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
        args[_key13 - 1] = arguments[_key13];
    }
    editor.command.apply(editor, [pointWordForward, 'end'].concat(args));
};
Commands$4.moveEndTo = function (editor) {
    for (var _len14 = arguments.length, args = Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
        args[_key14 - 1] = arguments[_key14];
    }
    editor.command.apply(editor, [proxy, 'moveEndTo'].concat(args));
};
Commands$4.moveEndToEndOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'end', 'end', 'block');
};
Commands$4.moveEndToEndOfDocument = function (editor) {
    editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};
Commands$4.moveEndToEndOfInline = function (editor) {
    editor.command(pointEdgeObject, 'end', 'end', 'inline');
};
Commands$4.moveEndToEndOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'block');
};
Commands$4.moveEndToEndOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'inline');
};
Commands$4.moveEndToEndOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'text');
};
Commands$4.moveEndToEndOfNode = function (editor) {
    for (var _len15 = arguments.length, args = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        args[_key15 - 1] = arguments[_key15];
    }
    editor.command.apply(editor, [proxy, 'moveEndToEndOfNode'].concat(args));
};
Commands$4.moveEndToEndOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'block');
};
Commands$4.moveEndToEndOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'inline');
};
Commands$4.moveEndToEndOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'text');
};
Commands$4.moveEndToEndOfText = function (editor) {
    editor.command(pointEdgeObject, 'end', 'end', 'text');
};
Commands$4.moveEndToStartOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'end', 'start', 'block');
};
Commands$4.moveEndToStartOfDocument = function (editor) {
    editor.moveEndToStartOfNode(editor.value.document).moveToEnd();
};
Commands$4.moveEndToStartOfInline = function (editor) {
    editor.command(pointEdgeObject, 'end', 'start', 'inline');
};
Commands$4.moveEndToStartOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'block');
};
Commands$4.moveEndToStartOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'inline');
};
Commands$4.moveEndToStartOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'text');
};
Commands$4.moveEndToStartOfNode = function (editor) {
    for (var _len16 = arguments.length, args = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
        args[_key16 - 1] = arguments[_key16];
    }
    editor.command.apply(editor, [proxy, 'moveEndToStartOfNode'].concat(args));
};
Commands$4.moveEndToStartOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'block');
};
Commands$4.moveEndToStartOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'inline');
};
Commands$4.moveEndToStartOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'text');
};
Commands$4.moveEndToStartOfText = function (editor) {
    editor.command(pointEdgeObject, 'end', 'start', 'text');
};
Commands$4.moveFocusBackward = function (editor) {
    for (var _len17 = arguments.length, args = Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
        args[_key17 - 1] = arguments[_key17];
    }
    editor.command.apply(editor, [pointBackward, 'focus'].concat(args));
};
Commands$4.moveFocusWordBackward = function (editor) {
    for (var _len18 = arguments.length, args = Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
        args[_key18 - 1] = arguments[_key18];
    }
    editor.command.apply(editor, [pointWordBackward, 'focus'].concat(args));
};
Commands$4.moveFocusForward = function (editor) {
    for (var _len19 = arguments.length, args = Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
        args[_key19 - 1] = arguments[_key19];
    }
    editor.command.apply(editor, [pointForward, 'focus'].concat(args));
};
Commands$4.moveFocusWordForward = function (editor) {
    for (var _len20 = arguments.length, args = Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
        args[_key20 - 1] = arguments[_key20];
    }
    editor.command.apply(editor, [pointWordForward, 'focus'].concat(args));
};
Commands$4.moveFocusTo = function (editor) {
    for (var _len21 = arguments.length, args = Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
        args[_key21 - 1] = arguments[_key21];
    }
    editor.command.apply(editor, [proxy, 'moveFocusTo'].concat(args));
};
Commands$4.moveFocusToEndOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'end', 'block');
};
Commands$4.moveFocusToEndOfDocument = function (editor) {
    editor.moveFocusToEndOfNode(editor.value.document).moveToFocus();
};
Commands$4.moveFocusToEndOfInline = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'end', 'inline');
};
Commands$4.moveFocusToEndOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'block');
};
Commands$4.moveFocusToEndOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'inline');
};
Commands$4.moveFocusToEndOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'text');
};
Commands$4.moveFocusToEndOfNode = function (editor) {
    for (var _len22 = arguments.length, args = Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
        args[_key22 - 1] = arguments[_key22];
    }
    editor.command.apply(editor, [proxy, 'moveFocusToEndOfNode'].concat(args));
};
Commands$4.moveFocusToEndOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'block');
};
Commands$4.moveFocusToEndOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'inline');
};
Commands$4.moveFocusToEndOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'text');
};
Commands$4.moveFocusToEndOfText = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'end', 'text');
};
Commands$4.moveFocusToStartOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'start', 'block');
};
Commands$4.moveFocusToStartOfDocument = function (editor) {
    editor.moveFocusToStartOfNode(editor.value.document).moveToFocus();
};
Commands$4.moveFocusToStartOfInline = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'start', 'inline');
};
Commands$4.moveFocusToStartOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'block');
};
Commands$4.moveFocusToStartOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'inline');
};
Commands$4.moveFocusToStartOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'text');
};
Commands$4.moveFocusToStartOfNode = function (editor) {
    for (var _len23 = arguments.length, args = Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
        args[_key23 - 1] = arguments[_key23];
    }
    editor.command.apply(editor, [proxy, 'moveFocusToStartOfNode'].concat(args));
};
Commands$4.moveFocusToStartOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'block');
};
Commands$4.moveFocusToStartOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'inline');
};
Commands$4.moveFocusToStartOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'text');
};
Commands$4.moveFocusToStartOfText = function (editor) {
    editor.command(pointEdgeObject, 'focus', 'start', 'text');
};
Commands$4.moveForward = function (editor) {
    var _editor$moveAnchorFor;
    for (var _len24 = arguments.length, args = Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
        args[_key24 - 1] = arguments[_key24];
    }
    (_editor$moveAnchorFor = editor.moveAnchorForward.apply(editor, args)).moveFocusForward.apply(_editor$moveAnchorFor, args);
};
Commands$4.moveWordForward = function (editor) {
    var _editor$moveFocusWord;
    for (var _len25 = arguments.length, args = Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
        args[_key25 - 1] = arguments[_key25];
    }
    (_editor$moveFocusWord = editor.moveFocusWordForward.apply(editor, args)).moveToFocus.apply(_editor$moveFocusWord, args);
};
Commands$4.moveStartBackward = function (editor) {
    for (var _len26 = arguments.length, args = Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
        args[_key26 - 1] = arguments[_key26];
    }
    editor.command.apply(editor, [pointBackward, 'start'].concat(args));
};
Commands$4.moveStartWordBackward = function (editor) {
    for (var _len27 = arguments.length, args = Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
        args[_key27 - 1] = arguments[_key27];
    }
    editor.command.apply(editor, [pointWordBackward, 'start'].concat(args));
};
Commands$4.moveStartForward = function (editor) {
    for (var _len28 = arguments.length, args = Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
        args[_key28 - 1] = arguments[_key28];
    }
    editor.command.apply(editor, [pointForward, 'start'].concat(args));
};
Commands$4.moveStartWordForward = function (editor) {
    for (var _len29 = arguments.length, args = Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
        args[_key29 - 1] = arguments[_key29];
    }
    editor.command.apply(editor, [pointWordForward, 'start'].concat(args));
};
Commands$4.moveStartTo = function (editor) {
    for (var _len30 = arguments.length, args = Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
        args[_key30 - 1] = arguments[_key30];
    }
    editor.command.apply(editor, [proxy, 'moveStartTo'].concat(args));
};
Commands$4.moveStartToEndOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'start', 'end', 'block');
};
Commands$4.moveStartToEndOfDocument = function (editor) {
    editor.moveStartToEndOfNode(editor.value.document).moveToStart();
};
Commands$4.moveStartToEndOfInline = function (editor) {
    editor.command(pointEdgeObject, 'start', 'end', 'inline');
};
Commands$4.moveStartToEndOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'block');
};
Commands$4.moveStartToEndOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'inline');
};
Commands$4.moveStartToEndOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'text');
};
Commands$4.moveStartToEndOfNode = function (editor) {
    for (var _len31 = arguments.length, args = Array(_len31 > 1 ? _len31 - 1 : 0), _key31 = 1; _key31 < _len31; _key31++) {
        args[_key31 - 1] = arguments[_key31];
    }
    editor.command.apply(editor, [proxy, 'moveStartToEndOfNode'].concat(args));
};
Commands$4.moveStartToEndOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'block');
};
Commands$4.moveStartToEndOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'inline');
};
Commands$4.moveStartToEndOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'text');
};
Commands$4.moveStartToEndOfText = function (editor) {
    editor.command(pointEdgeObject, 'start', 'end', 'text');
};
Commands$4.moveStartToStartOfBlock = function (editor) {
    editor.command(pointEdgeObject, 'start', 'start', 'block');
};
Commands$4.moveStartToStartOfDocument = function (editor) {
    editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};
Commands$4.moveStartToStartOfInline = function (editor) {
    editor.command(pointEdgeObject, 'start', 'start', 'inline');
};
Commands$4.moveStartToStartOfNextBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'block');
};
Commands$4.moveStartToStartOfNextInline = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'inline');
};
Commands$4.moveStartToStartOfNextText = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'text');
};
Commands$4.moveStartToStartOfNode = function (editor) {
    for (var _len32 = arguments.length, args = Array(_len32 > 1 ? _len32 - 1 : 0), _key32 = 1; _key32 < _len32; _key32++) {
        args[_key32 - 1] = arguments[_key32];
    }
    editor.command.apply(editor, [proxy, 'moveStartToStartOfNode'].concat(args));
};
Commands$4.moveStartToStartOfPreviousBlock = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'block');
};
Commands$4.moveStartToStartOfPreviousInline = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'inline');
};
Commands$4.moveStartToStartOfPreviousText = function (editor) {
    editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'text');
};
Commands$4.moveStartToStartOfText = function (editor) {
    editor.command(pointEdgeObject, 'start', 'start', 'text');
};
Commands$4.moveTo = function (editor) {
    for (var _len33 = arguments.length, args = Array(_len33 > 1 ? _len33 - 1 : 0), _key33 = 1; _key33 < _len33; _key33++) {
        args[_key33 - 1] = arguments[_key33];
    }
    editor.command.apply(editor, [proxy, 'moveTo'].concat(args));
};
Commands$4.moveToAnchor = function (editor) {
    editor.command(proxy, 'moveToAnchor');
};
Commands$4.moveToEnd = function (editor) {
    editor.command(proxy, 'moveToEnd');
};
Commands$4.moveToEndOfBlock = function (editor) {
    editor.moveEndToEndOfBlock().moveToEnd();
};
Commands$4.moveToEndOfDocument = function (editor) {
    editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};
Commands$4.moveToEndOfInline = function (editor) {
    editor.moveEndToEndOfInline().moveToEnd();
};
Commands$4.moveToEndOfNextBlock = function (editor) {
    editor.moveEndToEndOfNextBlock().moveToEnd();
};
Commands$4.moveToEndOfNextInline = function (editor) {
    editor.moveEndToEndOfNextInline().moveToEnd();
};
Commands$4.moveToEndOfNextText = function (editor) {
    editor.moveEndToEndOfNextText().moveToEnd();
};
Commands$4.moveToEndOfNode = function (editor) {
    for (var _len34 = arguments.length, args = Array(_len34 > 1 ? _len34 - 1 : 0), _key34 = 1; _key34 < _len34; _key34++) {
        args[_key34 - 1] = arguments[_key34];
    }
    editor.command.apply(editor, [proxy, 'moveToEndOfNode'].concat(args));
};
Commands$4.moveToEndOfPreviousBlock = function (editor) {
    editor.moveStartToEndOfPreviousBlock().moveToStart();
};
Commands$4.moveToEndOfPreviousInline = function (editor) {
    editor.moveStartToEndOfPreviousInline().moveToStart();
};
Commands$4.moveToEndOfPreviousText = function (editor) {
    editor.moveStartToEndOfPreviousText().moveToStart();
};
Commands$4.moveToEndOfText = function (editor) {
    editor.moveEndToEndOfText().moveToEnd();
};
Commands$4.moveToFocus = function (editor) {
    editor.command(proxy, 'moveToFocus');
};
Commands$4.moveToRangeOfDocument = function (editor) {
    editor.moveToRangeOfNode(editor.value.document);
};
Commands$4.moveToRangeOfNode = function (editor) {
    for (var _len35 = arguments.length, args = Array(_len35 > 1 ? _len35 - 1 : 0), _key35 = 1; _key35 < _len35; _key35++) {
        args[_key35 - 1] = arguments[_key35];
    }
    editor.command.apply(editor, [proxy, 'moveToRangeOfNode'].concat(args));
};
Commands$4.moveToStart = function (editor) {
    editor.command(proxy, 'moveToStart');
};
Commands$4.moveToStartOfBlock = function (editor) {
    editor.moveStartToStartOfBlock().moveToStart();
};
Commands$4.moveToStartOfDocument = function (editor) {
    editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};
Commands$4.moveToStartOfInline = function (editor) {
    editor.moveStartToStartOfInline().moveToStart();
};
Commands$4.moveToStartOfNextBlock = function (editor) {
    editor.moveEndToStartOfNextBlock().moveToEnd();
};
Commands$4.moveToStartOfNextInline = function (editor) {
    editor.moveEndToStartOfNextInline().moveToEnd();
};
Commands$4.moveToStartOfNextText = function (editor) {
    editor.moveEndToStartOfNextText().moveToEnd();
};
Commands$4.moveToStartOfNode = function (editor) {
    for (var _len36 = arguments.length, args = Array(_len36 > 1 ? _len36 - 1 : 0), _key36 = 1; _key36 < _len36; _key36++) {
        args[_key36 - 1] = arguments[_key36];
    }
    editor.command.apply(editor, [proxy, 'moveToStartOfNode'].concat(args));
};
Commands$4.moveToStartOfPreviousBlock = function (editor) {
    editor.moveStartToStartOfPreviousBlock().moveToStart();
};
Commands$4.moveToStartOfPreviousInline = function (editor) {
    editor.moveStartToStartOfPreviousInline().moveToStart();
};
Commands$4.moveToStartOfPreviousText = function (editor) {
    editor.moveStartToStartOfPreviousText().moveToStart();
};
Commands$4.moveToStartOfText = function (editor) {
    editor.moveStartToStartOfText().moveToStart();
};
Commands$4.select = function (editor, properties) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    properties = Selection.createProperties(properties);
    var _options$snapshot = options.snapshot, snapshot = _options$snapshot === undefined ? false : _options$snapshot;
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var newProperties = {};
    var next = selection.setProperties(properties);
    next = document.resolveSelection(next);
    // Re-compute the properties, to ensure that we get their normalized values.
    properties = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(next, Object.keys(properties));
    // Remove any properties that are already equal to the current selection. And
    // create a dictionary of the previous values for all of the properties that
    // are being changed, for the inverse operation.
    for (var k in properties) {
        if (snapshot === true || !Object(immutable__WEBPACK_IMPORTED_MODULE_0__["is"])(properties[k], selection[k])) {
            newProperties[k] = properties[k];
        }
    }
    // If the selection moves, clear any marks, unless the new selection
    // properties change the marks in some way.
    if (selection.marks && !newProperties.marks && (newProperties.anchor || newProperties.focus)) {
        newProperties.marks = null;
    }
    // If there are no new properties to set, abort to avoid extra operations.
    if (Object.keys(newProperties).length === 0) {
        return;
    }
    // TODO: for some reason toJSON() is required here (it breaks selections between blocks)? - 2018-10-10
    var prevProperties = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(selection.toJSON(), Object.keys(newProperties));
    editor.applyOperation({
        type: 'set_selection',
        value: value,
        properties: prevProperties,
        newProperties: newProperties
    }, snapshot ? { skip: false, merge: false } : {});
};
Commands$4.setAnchor = function (editor) {
    for (var _len37 = arguments.length, args = Array(_len37 > 1 ? _len37 - 1 : 0), _key37 = 1; _key37 < _len37; _key37++) {
        args[_key37 - 1] = arguments[_key37];
    }
    editor.command.apply(editor, [proxy, 'setAnchor'].concat(args));
};
Commands$4.setEnd = function (editor) {
    for (var _len38 = arguments.length, args = Array(_len38 > 1 ? _len38 - 1 : 0), _key38 = 1; _key38 < _len38; _key38++) {
        args[_key38 - 1] = arguments[_key38];
    }
    editor.command.apply(editor, [proxy, 'setEnd'].concat(args));
};
Commands$4.setFocus = function (editor) {
    for (var _len39 = arguments.length, args = Array(_len39 > 1 ? _len39 - 1 : 0), _key39 = 1; _key39 < _len39; _key39++) {
        args[_key39 - 1] = arguments[_key39];
    }
    editor.command.apply(editor, [proxy, 'setFocus'].concat(args));
};
Commands$4.setStart = function (editor) {
    for (var _len40 = arguments.length, args = Array(_len40 > 1 ? _len40 - 1 : 0), _key40 = 1; _key40 < _len40; _key40++) {
        args[_key40 - 1] = arguments[_key40];
    }
    editor.command.apply(editor, [proxy, 'setStart'].concat(args));
};
Commands$4.snapshotSelection = function (editor) {
    editor.withoutMerging(function () {
        editor.select(editor.value.selection, { snapshot: true });
    });
};
/**
 * Helpers.
 */
function proxy(editor, method) {
    var _editor$value$selecti;
    for (var _len41 = arguments.length, args = Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
        args[_key41 - 2] = arguments[_key41];
    }
    var range = (_editor$value$selecti = editor.value.selection)[method].apply(_editor$value$selecti, args);
    editor.select(range);
}
function pointEdgeObject(editor, point, edge, object) {
    var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
    var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
    var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
    var method = 'move' + Point + 'To' + Edge + 'OfNode';
    var getNode = object === 'text' ? 'getNode' : 'getClosest' + Object;
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var p = selection[point];
    var node = document[getNode](p.key);
    if (!node)
        return;
    editor[method](node);
}
function pointEdgeSideObject(editor, point, edge, side, object) {
    var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
    var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
    var Side = side.slice(0, 1).toUpperCase() + side.slice(1);
    var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
    var method = 'move' + Point + 'To' + Edge + 'OfNode';
    var getNode = object === 'text' ? 'getNode' : 'getClosest' + Object;
    var getDirectionNode = 'get' + Side + Object;
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var p = selection[point];
    var node = document[getNode](p.key);
    if (!node)
        return;
    var target = document[getDirectionNode](node.key);
    if (!target)
        return;
    editor[method](target);
}
function pointBackward(editor, point) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    if (n === 0)
        return;
    if (n < 0)
        return pointForward(editor, point, -n);
    var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var p = selection[point];
    var hasVoidParent = document.hasVoidParent(p.path, editor);
    // what is this?
    if (!hasVoidParent && p.offset - n >= 0) {
        var range = selection['move' + Point + 'Backward'](n);
        editor.select(range);
        return;
    }
    var previous = document.getPreviousText(p.path);
    if (!previous)
        return;
    var block = document.getClosestBlock(p.path);
    var isInBlock = block.hasNode(previous.key);
    var isPreviousInVoid = previous && document.hasVoidParent(previous.key, editor);
    editor['move' + Point + 'ToEndOfNode'](previous);
    // when is this called?
    if (!hasVoidParent && !isPreviousInVoid && isInBlock) {
        var _range = editor.value.selection['move' + Point + 'Backward'](n);
        editor.select(_range);
    }
}
function pointForward(editor, point) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    if (n === 0)
        return;
    if (n < 0)
        return pointBackward(editor, point, -n);
    var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var p = selection[point];
    var text = document.getNode(p.path);
    var hasVoidParent = document.hasVoidParent(p.path, editor);
    // what is this?
    if (!hasVoidParent && p.offset + n <= text.text.length) {
        var range = selection['move' + Point + 'Forward'](n);
        editor.select(range);
        return;
    }
    var next = document.getNextText(p.path);
    if (!next)
        return;
    var block = document.getClosestBlock(p.path);
    var isInBlock = block.hasNode(next.key);
    var isNextInVoid = document.hasVoidParent(next.key, editor);
    editor['move' + Point + 'ToStartOfNode'](next);
    // when is this called?
    if (!hasVoidParent && !isNextInVoid && isInBlock) {
        var _range2 = editor.value.selection['move' + Point + 'Forward'](n);
        editor.select(_range2);
    }
}
function pointWordBackward(editor, pointName) {
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var point = selection[pointName];
    var block = document.getClosestBlock(point.key);
    var offset = block.getOffset(point.key);
    var o = offset + point.offset;
    var text = block.text;
    var n = TextUtils.getWordOffsetBackward(text, o);
    editor.command(pointBackward, pointName, n > 0 ? n : 1);
}
function pointWordForward(editor, pointName) {
    var value = editor.value;
    var document = value.document, selection = value.selection;
    var point = selection[pointName];
    var block = document.getClosestBlock(point.key);
    var offset = block.getOffset(point.key);
    var o = offset + point.offset;
    var text = block.text;
    var n = TextUtils.getWordOffsetForward(text, o);
    editor.command(pointForward, pointName, n > 0 ? n : 1);
}
/**
 * Commands.
 *
 * @type {Object}
 */
var Commands$5 = {};
/**
 * Set `properties` on the value.
 *
 * @param {Editor} editor
 * @param {Object|Value} properties
 */
Commands$5.setData = function (editor) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = editor.value;
    var newProperties = Value.createProperties({ data: data });
    var prevProperties = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(value, Object.keys(newProperties));
    editor.applyOperation({
        type: 'set_value',
        properties: prevProperties,
        newProperties: newProperties
    });
};
Commands$5.addAnnotation = function (editor, annotation) {
    annotation = Annotation.create(annotation);
    editor.applyOperation({
        type: 'add_annotation',
        annotation: annotation
    });
};
Commands$5.removeAnnotation = function (editor, annotation) {
    annotation = Annotation.create(annotation);
    editor.applyOperation({
        type: 'remove_annotation',
        annotation: annotation
    });
};
Commands$5.setAnnotation = function (editor, annotation, newProperties) {
    annotation = Annotation.create(annotation);
    newProperties = Annotation.createProperties(newProperties);
    editor.applyOperation({
        type: 'set_annotation',
        properties: annotation,
        newProperties: newProperties
    });
};
/**
 * A plugin that adds a set of queries to the editor.
 *
 * @param {Object} queries
 * @return {Object}
 */
function QueriesPlugin() {
    var queries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    /**
     * On construct, register all the queries.
     *
     * @param {Editor} editor
     * @param {Function} next
     */
    function onConstruct(editor, next) {
        for (var query in queries) {
            editor.registerQuery(query);
        }
        return next();
    }
    /**
     * On query, if it exists in our list of queries, call it.
     *
     * @param {Object} query
     * @param {Editor} editor
     * @param {Function} next
     */
    function onQuery(query, editor, next) {
        var type = query.type, args = query.args;
        var fn = queries[type];
        if (!fn)
            return next();
        var ret = fn.apply(undefined, [editor].concat(toConsumableArray(args)));
        return ret === undefined ? next() : ret;
    }
    /**
     * Return the plugin.
     *
     * @type {Object}
     */
    return {
        onConstruct: onConstruct,
        onQuery: onQuery
    };
}
/**
 * Define a Slate error.
 *
 * @type {SlateError}
 */
var SlateError = function (_Error) {
    inherits(SlateError, _Error);
    function SlateError(code) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, SlateError);
        var _this = possibleConstructorReturn(this, (SlateError.__proto__ || Object.getPrototypeOf(SlateError)).call(this, code));
        _this.code = code;
        for (var key in attrs) {
            _this[key] = attrs[key];
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        else {
            _this.stack = new Error().stack;
        }
        return _this;
    }
    return SlateError;
}(Error);
/**
 * Create a plugin from a `schema` definition.
 *
 * @param {Object} schema
 * @return {Object}
 */
function SchemaPlugin(schema) {
    var rules = schema.rules, document = schema.document, blocks = schema.blocks, inlines = schema.inlines, marks = schema.marks, annotations = schema.annotations, decorations = schema.decorations;
    var schemaRules = [];
    if (rules) {
        schemaRules = schemaRules.concat(rules);
    }
    if (document) {
        schemaRules.push(_extends({
            match: [{ object: 'document' }]
        }, document));
    }
    if (blocks) {
        for (var key in blocks) {
            schemaRules.push(_extends({
                match: [{ object: 'block', type: key }]
            }, blocks[key]));
        }
    }
    if (inlines) {
        for (var _key in inlines) {
            schemaRules.push(_extends({
                match: [{ object: 'inline', type: _key }]
            }, inlines[_key]));
        }
    }
    if (marks) {
        for (var _key2 in marks) {
            schemaRules.push(_extends({
                match: [{ object: 'mark', type: _key2 }]
            }, marks[_key2]));
        }
    }
    if (annotations) {
        for (var _key3 in annotations) {
            schemaRules.push(_extends({
                match: [{ object: 'annotation', type: _key3 }]
            }, annotations[_key3]));
        }
    }
    if (decorations) {
        for (var _key4 in decorations) {
            schemaRules.push(_extends({
                match: [{ object: 'decoration', type: _key4 }]
            }, decorations[_key4]));
        }
    }
    /**
     * Check if a `format` is atomic based on the schema rules.
     *
     * @param {Editor} editor
     * @param {Format} format
     * @return {Boolean}
     */
    function isAtomic(editor, format) {
        var rule = schemaRules.find(function (r) {
            return 'isAtomic' in r && testRules(format, r.match);
        });
        return rule && rule.isAtomic;
    }
    /**
     * Check if a `node` is void based on the schema rules.
     *
     * @param {Editor} editor
     * @param {Node} node
     * @return {Boolean}
     */
    function isVoid(editor, node) {
        var rule = schemaRules.find(function (r) {
            return 'isVoid' in r && testRules(node, r.match);
        });
        return rule && rule.isVoid;
    }
    /**
     * Normalize a `node` with the schema rules, returning a function that will
     * fix the invalid node, or void if the node is valid.
     *
     * @param {Node} node
     * @param {Editor} editor
     * @param {Function} next
     * @return {Function|Void}
     */
    function normalizeNode(node, editor, next) {
        var error = validateNode(node, editor, function () { });
        if (!error)
            return next();
        return function () {
            var rule = error.rule;
            var size = editor.operations.size;
            // First run the user-provided `normalize` function if one exists...
            if (rule.normalize) {
                rule.normalize(editor, error);
            }
            // If the `normalize` function did not add any operations to the editor
            // object, it can't have normalized, so run the default one.
            if (editor.operations.size === size) {
                defaultNormalize(editor, error);
            }
        };
    }
    /**
     * Validate a `node` with the schema rules, returning a `SlateError` if it's
     * invalid.
     *
     * @param {Node} node
     * @param {Editor} editor
     * @param {Function} next
     * @return {Error|Void}
     */
    function validateNode(node, editor, next) {
        var matches = schemaRules.filter(function (r) {
            return testRules(node, r.match);
        });
        var failure = validateRules(node, matches, schemaRules, { every: true });
        if (!failure)
            return next();
        var error = new SlateError(failure.code, failure);
        return error;
    }
    /**
     * On schema-related queries, respond if we can.
     *
     * @param {Object} query
     * @param {Function} next
     */
    var queries = QueriesPlugin({ isAtomic: isAtomic, isVoid: isVoid });
    /**
     * Return the plugins.
     *
     * @type {Object}
     */
    return [{ normalizeNode: normalizeNode, validateNode: validateNode }, queries];
}
/**
 * Normalize an invalid value with `error` with default remedies.
 *
 * @param {Editor} editor
 * @param {SlateError} error
 */
function defaultNormalize(editor, error) {
    var code = error.code, node = error.node, child = error.child, next = error.next, previous = error.previous, key = error.key, mark = error.mark;
    switch (code) {
        case 'child_max_invalid':
        case 'child_object_invalid':
        case 'child_type_invalid':
        case 'child_unknown':
        case 'first_child_object_invalid':
        case 'first_child_type_invalid':
        case 'last_child_object_invalid':
        case 'last_child_type_invalid':
            {
                return child.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(child.key);
            }
        case 'previous_sibling_object_invalid':
        case 'previous_sibling_type_invalid':
            {
                return previous.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(previous.key);
            }
        case 'next_sibling_object_invalid':
        case 'next_sibling_type_invalid':
            {
                return next.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(next.key);
            }
        case 'child_min_invalid':
        case 'node_text_invalid':
        case 'parent_object_invalid':
        case 'parent_type_invalid':
            {
                return node.object === 'document' ? node.nodes.forEach(function (n) {
                    return editor.removeNodeByKey(n.key);
                }) : editor.removeNodeByKey(node.key);
            }
        case 'node_data_invalid':
            {
                return node.data.get(key) === undefined && node.object !== 'document' ? editor.removeNodeByKey(node.key) : editor.setNodeByKey(node.key, { data: node.data.delete(key) });
            }
        case 'node_mark_invalid':
            {
                return node.getTexts().forEach(function (t) {
                    return editor.removeMarkByKey(t.key, 0, t.text.length, mark);
                });
            }
        default:
            {
                return editor.removeNodeByKey(node.key);
            }
    }
}
/**
 * Check that an `object` matches one of a set of `rules`.
 *
 * @param {Mixed} object
 * @param {Object|Array} rules
 * @return {Boolean}
 */
function testRules(object, rules) {
    var error = validateRules(object, rules);
    return !error;
}
/**
 * Validate that a `object` matches a `rule` object or array.
 *
 * @param {Mixed} object
 * @param {Object|Array} rule
 * @param {Array|Void} rules
 * @return {Error|Void}
 */
function validateRules(object, rule, rules) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _options$every = options.every, every = _options$every === undefined ? false : _options$every, _options$match = options.match, match = _options$match === undefined ? null : _options$match;
    if (typeof rule === 'function') {
        var valid = rule(object, match);
        return valid ? null : fail('node_invalid', { rule: rule, node: object });
    }
    if (Array.isArray(rule)) {
        var array = rule.length ? rule : [{}];
        var first = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var r = _step.value;
                var _error = validateRules(object, r, rules);
                first = first || _error;
                if (every && _error)
                    return _error;
                if (!every && !_error)
                    return;
            }
        }
        catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        }
        finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            }
            finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return first;
    }
    var error = validateObject(object, rule) || validateType(object, rule) || validateData(object, rule) || validateMarks(object, rule) || validateText(object, rule) || validateFirst(object, rule) || validateLast(object, rule) || validateNodes(object, rule, rules);
    return error;
}
function validateObject(node, rule) {
    if (rule.object == null)
        return;
    if (rule.object === node.object)
        return;
    if (typeof rule.object === 'function' && rule.object(node.object))
        return;
    return fail('node_object_invalid', { rule: rule, node: node });
}
function validateType(node, rule) {
    if (rule.type == null)
        return;
    if (rule.type === node.type)
        return;
    if (typeof rule.type === 'function' && rule.type(node.type))
        return;
    return fail('node_type_invalid', { rule: rule, node: node });
}
function validateData(node, rule) {
    if (rule.data == null)
        return;
    if (node.data == null)
        return;
    if (typeof rule.data === 'function') {
        if (rule.data(node.data))
            return;
        return fail('node_data_invalid', { rule: rule, node: node });
    }
    for (var key in rule.data) {
        var fn = rule.data[key];
        var value = node.data && node.data.get(key);
        var valid = typeof fn === 'function' ? fn(value) : fn === value;
        if (valid)
            continue;
        return fail('node_data_invalid', { rule: rule, node: node, key: key, value: value });
    }
}
function validateMarks(node, rule) {
    if (rule.marks == null)
        return;
    var marks = node.object === 'text' ? node.marks.toArray() : node.getMarks().toArray();
    var _loop = function _loop(mark) {
        var valid = rule.marks.some(function (def) {
            return typeof def.type === 'function' ? def.type(mark.type) : def.type === mark.type;
        });
        if (valid)
            return 'continue';
        return {
            v: fail('node_mark_invalid', { rule: rule, node: node, mark: mark })
        };
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for (var _iterator2 = marks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var mark = _step2.value;
            var _ret = _loop(mark);
            switch (_ret) {
                case 'continue':
                    continue;
                default:
                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")
                        return _ret.v;
            }
        }
    }
    catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        }
        finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
function validateText(node, rule) {
    if (rule.text == null)
        return;
    var text = node.text;
    var valid = typeof rule.text === 'function' ? rule.text(text) : rule.text.test(text);
    if (valid)
        return;
    return fail('node_text_invalid', { rule: rule, node: node, text: text });
}
function validateFirst(node, rule) {
    if (rule.first == null)
        return;
    var first = node.nodes.first();
    if (!first)
        return;
    var error = validateRules(first, rule.first);
    if (!error)
        return;
    error.rule = rule;
    error.node = node;
    error.child = first;
    error.code = error.code.replace('node_', 'first_child_');
    return error;
}
function validateLast(node, rule) {
    if (rule.last == null)
        return;
    var last = node.nodes.last();
    if (!last)
        return;
    var error = validateRules(last, rule.last);
    if (!error)
        return;
    error.rule = rule;
    error.node = node;
    error.child = last;
    error.code = error.code.replace('node_', 'last_child_');
    return error;
}
function validateNodes(node, rule) {
    var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (node.nodes == null)
        return;
    var children = node.nodes;
    var defs = rule.nodes != null ? rule.nodes.slice() : [];
    var count = 0;
    var lastCount = 0;
    var min = null;
    var index = -1;
    var def = null;
    var max = null;
    var child = null;
    var previous = null;
    var next = null;
    function nextDef() {
        if (defs.length === 0)
            return false;
        def = defs.shift();
        lastCount = count;
        count = 0;
        min = def.min || null;
        max = def.max || null;
        return true;
    }
    function nextChild() {
        index += 1;
        previous = index ? children.get(index - 1) : null;
        child = children.get(index);
        next = children.get(index + 1);
        if (!child)
            return false;
        lastCount = count;
        count += 1;
        return true;
    }
    function rewind() {
        if (index > 0) {
            index -= 1;
            count = lastCount;
        }
    }
    if (rule.nodes != null) {
        nextDef();
    }
    while (nextChild()) {
        var err = validateParent(node, child, rules) || validatePrevious(node, child, previous, index, rules) || validateNext(node, child, next, index, rules);
        if (err)
            return err;
        if (rule.nodes != null) {
            if (!def) {
                return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
            }
            if (def.match) {
                var error = validateRules(child, def.match);
                if (error) {
                    // Since we want to report overflow on last matching child we don't
                    // immediately check for count > max, but instead do so once we find
                    // a child that doesn't match.
                    if (max != null && count - 1 > max) {
                        rewind();
                        return fail('child_max_invalid', {
                            rule: rule,
                            node: node,
                            index: index,
                            child: children.get(index),
                            count: count,
                            limit: max
                        });
                    }
                    var lastMin = min;
                    // If there are more groups after this one then child might actually
                    // be valid.
                    if (nextDef()) {
                        // If we've already satisfied the minimum for the current group,
                        // then we can rewind and proceed to the next group.
                        if (lastCount - 1 >= lastMin) {
                            index -= 1;
                            continue;
                        }
                        // Otherwise we know that current value is underflowing. There are
                        // three possible causes for this...
                        // 1. There might just not be enough elements for current group, and
                        // current child is in fact the first of the next group. If so, the
                        // next def will not report errors, in which case we can rewind and
                        // report an minimum error.
                        if (validateRules(child, def.match) == null) {
                            rewind();
                            return fail('child_min_invalid', {
                                rule: rule,
                                node: node,
                                index: index,
                                count: lastCount - 1,
                                limit: lastMin
                            });
                        }
                        // 2. The current group is underflowing, but there is also an
                        // invalid child before the next group.
                        // 3. Or the current group is not underflowing but it appears so
                        // because there's an invalid child between its members.
                        // It's either the second or third case. If it's the second then
                        // we could report an underflow, but presence of an invalid child
                        // is arguably more important, so we report it first. It also lets
                        // us avoid checking for which case exactly is it.
                        error.rule = rule;
                        error.node = node;
                        error.child = child;
                        error.index = index;
                        error.code = error.code.replace('node_', 'child_');
                        return error;
                    }
                    // Otherwise either we exhausted the last group, in which case it's
                    // an unknown child, ...
                    if (max != null && count > max) {
                        return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
                    }
                    // ... or it's an invalid child for the last group.
                    error.rule = rule;
                    error.node = node;
                    error.child = child;
                    error.index = index;
                    error.code = error.code.replace('node_', 'child_');
                    return error;
                }
            }
        }
    }
    // Since we want to report overflow on last matching child we don't
    // immediately check for count > max, but do so after processing all nodes.
    if (max != null && count > max) {
        return fail('child_max_invalid', {
            rule: rule,
            node: node,
            index: index - 1,
            count: count,
            child: children.get(index - 1),
            limit: max
        });
    }
    if (rule.nodes != null) {
        do {
            if (count < min) {
                return fail('child_min_invalid', {
                    rule: rule,
                    node: node,
                    index: index,
                    count: count,
                    limit: min
                });
            }
        } while (nextDef());
    }
}
function validateParent(node, child, rules) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;
    try {
        for (var _iterator3 = rules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var rule = _step3.value;
            if (rule.parent == null)
                continue;
            if (!testRules(child, rule.match))
                continue;
            var error = validateRules(node, rule.parent);
            if (!error)
                continue;
            error.rule = rule;
            error.parent = node;
            error.node = child;
            error.code = error.code.replace('node_', 'parent_');
            return error;
        }
    }
    catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        }
        finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
function validatePrevious(node, child, previous, index, rules) {
    if (!previous)
        return;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;
    try {
        for (var _iterator4 = rules[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var rule = _step4.value;
            if (rule.previous == null)
                continue;
            if (!testRules(child, rule.match))
                continue;
            var error = validateRules(previous, rule.previous);
            if (!error)
                continue;
            error.rule = rule;
            error.node = node;
            error.child = child;
            error.index = index;
            error.previous = previous;
            error.code = error.code.replace('node_', 'previous_sibling_');
            return error;
        }
    }
    catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        }
        finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}
function validateNext(node, child, next, index, rules) {
    if (!next)
        return;
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;
    try {
        for (var _iterator5 = rules[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var rule = _step5.value;
            if (rule.next == null)
                continue;
            if (!testRules(child, rule.match))
                continue;
            var error = validateRules(next, rule.next, [], { match: child });
            if (!error)
                continue;
            error.rule = rule;
            error.node = node;
            error.child = child;
            error.index = index;
            error.next = next;
            error.code = error.code.replace('node_', 'next_sibling_');
            return error;
        }
    }
    catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        }
        finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
}
/**
 * Create an interim failure object with `code` and `attrs`.
 *
 * @param {String} code
 * @param {Object} attrs
 * @return {Object}
 */
function fail(code, attrs) {
    return _extends({ code: code }, attrs);
}
/**
 * Ensure that an expanded selection is deleted first using the `editor.delete`
 * command. This guarantees that it uses the proper semantic "intent" instead of
 * using `deleteAtRange` under the covers and skipping `delete`.
 *
 * @param {Editor}
 */
function deleteExpanded(editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
}
/**
 * Commands.
 *
 * @type {Object}
 */
var Commands$6 = {};
/**
 * Add a `mark` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */
Commands$6.addMark = function (editor, mark) {
    mark = Mark.create(mark);
    var value = editor.value;
    var document = value.document, selection = value.selection;
    if (selection.isExpanded) {
        editor.addMarkAtRange(selection, mark);
    }
    else if (selection.marks) {
        var marks = selection.marks.add(mark);
        var sel = selection.set('marks', marks);
        editor.select(sel);
    }
    else {
        var _marks = document.getActiveMarksAtRange(selection).add(mark);
        var _sel = selection.set('marks', _marks);
        editor.select(_sel);
    }
};
/**
 * Add a list of `marks` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Set<Mark>|Array<Object>} marks
 */
Commands$6.addMarks = function (editor, marks) {
    marks.forEach(function (mark) {
        return editor.addMark(mark);
    });
};
/**
 * Delete at the current selection.
 *
 * @param {Editor} editor
 */
Commands$6.delete = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    editor.deleteAtRange(selection);
    // COMPAT: Ensure that the selection is collapsed, because in certain cases
    // when deleting across inline nodes, when splitting the inline node the end
    // point of the selection will end up after the split point.
    editor.moveToFocus();
};
/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */
Commands$6.deleteBackward = function (editor) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteBackwardAtRange(selection, n);
    }
};
/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */
Commands$6.deleteCharBackward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteCharBackwardAtRange(selection);
    }
};
/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */
Commands$6.deleteLineBackward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteLineBackwardAtRange(selection);
    }
};
/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */
Commands$6.deleteWordBackward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteWordBackwardAtRange(selection);
    }
};
/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */
Commands$6.deleteForward = function (editor) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteForwardAtRange(selection, n);
    }
};
/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */
Commands$6.deleteCharForward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteCharForwardAtRange(selection);
    }
};
/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */
Commands$6.deleteLineForward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteLineForwardAtRange(selection);
    }
};
/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */
Commands$6.deleteWordForward = function (editor) {
    var value = editor.value;
    var selection = value.selection;
    if (selection.isExpanded) {
        editor.delete();
    }
    else {
        editor.deleteWordForwardAtRange(selection);
    }
};
/**
 * Insert a `block` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Block} block
 */
Commands$6.insertBlock = function (editor, block) {
    deleteExpanded(editor);
    block = Block.create(block);
    var value = editor.value;
    var selection = value.selection;
    editor.insertBlockAtRange(selection, block);
    // If the node was successfully inserted, update the selection.
    var node = editor.value.document.getNode(block.key);
    if (node)
        editor.moveToEndOfNode(node);
};
/**
 * Insert a `fragment` at the current selection.
 *
 * @param {Editor} editor
 * @param {Document} fragment
 */
Commands$6.insertFragment = function (editor, fragment) {
    if (!fragment.nodes.size)
        return;
    deleteExpanded(editor);
    var value = editor.value;
    var _value = value, document = _value.document, selection = _value.selection;
    var start = selection.start, end = selection.end;
    var _value2 = value, startText = _value2.startText, endText = _value2.endText, startInline = _value2.startInline;
    var lastText = fragment.getLastText();
    var lastInline = fragment.getClosestInline(lastText.key);
    var lastBlock = fragment.getClosestBlock(lastText.key);
    var firstChild = fragment.nodes.first();
    var lastChild = fragment.nodes.last();
    var keys = Array.from(document.texts(), function (_ref) {
        var _ref2 = slicedToArray(_ref, 1), text = _ref2[0];
        return text.key;
    });
    var isAppending = !startInline || start.isAtStartOfNode(startText) || end.isAtStartOfNode(startText) || start.isAtEndOfNode(endText) || end.isAtEndOfNode(endText);
    var isInserting = firstChild.hasBlockChildren() || lastChild.hasBlockChildren();
    editor.insertFragmentAtRange(selection, fragment);
    value = editor.value;
    document = value.document;
    var newTexts = document.getTexts().filter(function (n) {
        return !keys.includes(n.key);
    });
    var newText = isAppending ? newTexts.last() : newTexts.takeLast(2).first();
    if (newText && (lastInline || isInserting)) {
        editor.moveToEndOfNode(newText);
    }
    else if (newText) {
        // The position within the last text node needs to be calculated. This is the length
        // of all text nodes within the last block, but if the last block contains inline nodes,
        // these have to be skipped.
        var nodes = lastBlock.nodes;
        var lastIndex = nodes.findLastIndex(function (node) {
            return node && node.object === 'inline';
        });
        var remainingTexts = nodes.takeLast(nodes.size - lastIndex - 1);
        var remainingTextLength = remainingTexts.reduce(function (acc, val) {
            return acc + val.text.length;
        }, 0);
        editor.moveToStartOfNode(newText).moveForward(remainingTextLength);
    }
};
/**
 * Insert an `inline` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Inline} inline
 */
Commands$6.insertInline = function (editor, inline) {
    deleteExpanded(editor);
    inline = Inline.create(inline);
    var value = editor.value;
    var selection = value.selection;
    editor.insertInlineAtRange(selection, inline);
    // If the node was successfully inserted, update the selection.
    var node = editor.value.document.getNode(inline.key);
    if (node)
        editor.moveToEndOfNode(node);
};
/**
 * Insert a string of `text` with optional `marks` at the current selection.
 *
 * @param {Editor} editor
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */
Commands$6.insertText = function (editor, text, marks) {
    deleteExpanded(editor);
    var value = editor.value;
    var document = value.document, selection = value.selection;
    marks = marks || selection.marks || document.getInsertMarksAtRange(selection);
    editor.withoutNormalizing(function () {
        editor.insertTextAtRange(selection, text, marks);
        // If the text was successfully inserted, and the selection had marks on it,
        // unset the selection's marks.
        if (selection.marks && document !== editor.value.document) {
            editor.select({ marks: null });
        }
    });
};
/**
 * Remove a `mark` from the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */
Commands$6.removeMark = function (editor, mark) {
    mark = Mark.create(mark);
    var value = editor.value;
    var document = value.document, selection = value.selection;
    if (selection.isExpanded) {
        editor.removeMarkAtRange(selection, mark);
    }
    else if (selection.marks) {
        var marks = selection.marks.remove(mark);
        var sel = selection.set('marks', marks);
        editor.select(sel);
    }
    else {
        var _marks2 = document.getActiveMarksAtRange(selection).remove(mark);
        var _sel2 = selection.set('marks', _marks2);
        editor.select(_sel2);
    }
};
/**
 * Replace an `oldMark` with a `newMark` in the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} oldMark
 * @param {Mark} newMark
 */
Commands$6.replaceMark = function (editor, oldMark, newMark) {
    editor.removeMark(oldMark);
    editor.addMark(newMark);
};
/**
 * Set the `properties` of block nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */
Commands$6.setBlocks = function (editor, properties) {
    var value = editor.value;
    var selection = value.selection;
    editor.setBlocksAtRange(selection, properties);
};
/**
 * Set the `properties` of inline nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */
Commands$6.setInlines = function (editor, properties) {
    var value = editor.value;
    var selection = value.selection;
    editor.setInlinesAtRange(selection, properties);
};
/**
 * Split the block node at the current selection, to optional `depth`.
 *
 * @param {Editor} editor
 * @param {Number} depth (optional)
 */
Commands$6.splitBlock = function (editor) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    deleteExpanded(editor);
    var value = editor.value;
    var selection = value.selection, document = value.document;
    var marks = selection.marks || document.getInsertMarksAtRange(selection);
    editor.splitBlockAtRange(selection, depth).moveToEnd();
    if (marks && marks.size !== 0) {
        editor.select({ marks: marks });
    }
};
/**
 * Split the inline nodes to optional `height`.
 *
 * @param {Editor} editor
 * @param {Number} height (optional)
 */
Commands$6.splitInline = function (editor, height) {
    deleteExpanded(editor);
    var value = editor.value;
    var selection = value.selection;
    editor.splitInlineAtRange(selection, height);
};
/**
 * Add or remove a `mark` from the characters in the current selection,
 * depending on whether it's already there.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */
Commands$6.toggleMark = function (editor, mark) {
    mark = Mark.create(mark);
    var value = editor.value;
    var exists = value.activeMarks.has(mark);
    if (exists) {
        editor.removeMark(mark);
    }
    else {
        editor.addMark(mark);
    }
};
/**
 * Unwrap nodes from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */
Commands$6.unwrapBlock = function (editor, properties) {
    var value = editor.value;
    var selection = value.selection;
    editor.unwrapBlockAtRange(selection, properties);
};
/**
 * Unwrap nodes from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */
Commands$6.unwrapInline = function (editor, properties) {
    var value = editor.value;
    var selection = value.selection;
    editor.unwrapInlineAtRange(selection, properties);
};
/**
 * Wrap nodes in a new `block`.
 *
 * @param {Editor} editor
 * @param {Block|Object|String} block
 */
Commands$6.wrapBlock = function (editor, block) {
    var value = editor.value;
    var selection = value.selection;
    editor.wrapBlockAtRange(selection, block);
};
/**
 * Wrap nodes in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Inline|Object|String} inline
 */
Commands$6.wrapInline = function (editor, inline) {
    var value = editor.value;
    var selection = value.selection;
    editor.wrapInlineAtRange(selection, inline);
};
/**
 * Wrap the current selection with prefix/suffix.
 *
 * @param {Editor} editor
 * @param {String} prefix
 * @param {String} suffix
 */
Commands$6.wrapText = function (editor, prefix) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : prefix;
    var value = editor.value;
    var selection = value.selection;
    editor.wrapTextAtRange(selection, prefix, suffix);
    // If the selection was collapsed, it will have moved the start offset too.
    if (selection.isCollapsed) {
        editor.moveStartBackward(prefix.length);
    }
    // Adding the suffix will have pushed the end of the selection further on, so
    // we need to move it back to account for this.
    editor.moveEndBackward(suffix.length);
    // There's a chance that the selection points moved "through" each other,
    // resulting in a now-incorrect selection direction.
    if (selection.isForward !== editor.value.selection.isForward) {
        editor.flip();
    }
};
/**
 * A plugin that defines the core Slate logic.
 *
 * @param {Object} options
 * @return {Object}
 */
function CorePlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$plugins = options.plugins, plugins = _options$plugins === undefined ? [] : _options$plugins;
    /**
     * The core Slate commands.
     *
     * @type {Object}
     */
    var commands = CommandsPlugin(_extends({}, Commands$1, Commands$2, Commands$3, Commands$4, Commands$5, Commands$6));
    /**
     * The core Slate queries.
     *
     * @type {Object}
     */
    var queries = QueriesPlugin({
        isAtomic: function isAtomic() {
            return false;
        },
        isVoid: function isVoid() {
            return false;
        }
    });
    /**
     * The core Slate schema.
     *
     * @type {Object}
     */
    var schema = SchemaPlugin({
        rules: [
            // Only allow block nodes in documents.
            {
                match: { object: 'document' },
                nodes: [{
                        match: { object: 'block' }
                    }]
            },
            // Only allow block nodes or inline and text nodes in blocks.
            {
                match: {
                    object: 'block',
                    first: { object: 'block' }
                },
                nodes: [{
                        match: { object: 'block' }
                    }]
            }, {
                match: {
                    object: 'block',
                    first: [{ object: 'inline' }, { object: 'text' }]
                },
                nodes: [{
                        match: [{ object: 'inline' }, { object: 'text' }]
                    }]
            },
            // Only allow inline and text nodes in inlines.
            {
                match: { object: 'inline' },
                nodes: [{ match: [{ object: 'inline' }, { object: 'text' }] }]
            },
            // Ensure that block and inline nodes have at least one text child.
            {
                match: [{ object: 'block' }, { object: 'inline' }],
                nodes: [{ min: 1 }],
                normalize: function normalize(editor, error) {
                    var code = error.code, node = error.node;
                    if (code === 'child_min_invalid' && node.nodes.isEmpty()) {
                        editor.insertNodeByKey(node.key, 0, Text.create());
                    }
                }
            },
            // Ensure that inline nodes are surrounded by text nodes.
            {
                match: { object: 'block' },
                first: [{ object: 'block' }, { object: 'text' }],
                last: [{ object: 'block' }, { object: 'text' }],
                normalize: function normalize(editor, error) {
                    var code = error.code, node = error.node;
                    var text = Text.create();
                    var i = void 0;
                    if (code === 'first_child_object_invalid') {
                        i = 0;
                    }
                    else if (code === 'last_child_object_invalid') {
                        i = node.nodes.size;
                    }
                    else {
                        return;
                    }
                    editor.insertNodeByKey(node.key, i, text);
                }
            }, {
                match: { object: 'inline' },
                first: [{ object: 'block' }, { object: 'text' }],
                last: [{ object: 'block' }, { object: 'text' }],
                previous: [{ object: 'block' }, { object: 'text' }],
                next: [{ object: 'block' }, { object: 'text' }],
                normalize: function normalize(editor, error) {
                    var code = error.code, node = error.node, index = error.index;
                    var text = Text.create();
                    var i = void 0;
                    if (code === 'first_child_object_invalid') {
                        i = 0;
                    }
                    else if (code === 'last_child_object_invalid') {
                        i = node.nodes.size;
                    }
                    else if (code === 'previous_sibling_object_invalid') {
                        i = index;
                    }
                    else if (code === 'next_sibling_object_invalid') {
                        i = index + 1;
                    }
                    else {
                        return;
                    }
                    editor.insertNodeByKey(node.key, i, text);
                }
            },
            // Merge adjacent text nodes with the same marks.
            {
                match: { object: 'text' },
                next: function next(_next, match) {
                    return _next.object !== 'text' || !match.marks.equals(_next.marks);
                },
                normalize: function normalize(editor, error) {
                    var code = error.code, next = error.next;
                    if (code === 'next_sibling_invalid') {
                        editor.mergeNodeByKey(next.key);
                    }
                }
            },
            // Remove extra adjacent empty text nodes.
            {
                match: { object: 'text' },
                previous: function previous(prev) {
                    return prev.object !== 'text' || prev.text !== '';
                },
                next: function next(_next2) {
                    return _next2.object !== 'text' || _next2.text !== '';
                },
                normalize: function normalize(editor, error) {
                    var code = error.code, next = error.next, previous = error.previous;
                    if (code === 'next_sibling_invalid') {
                        editor.removeNodeByKey(next.key);
                    }
                    else if (code === 'previous_sibling_invalid') {
                        editor.removeNodeByKey(previous.key);
                    }
                }
            }
        ]
    });
    /**
     * Return the plugins.
     *
     * @type {Array}
     */
    return [schema].concat(toConsumableArray(plugins), [commands, queries]);
}
/**
 * Debug.
 *
 * @type {Function}
 */
var debug$2 = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:editor');
/**
 * Editor.
 *
 * @type {Editor}
 */
var Editor = function () {
    /**
     * Create a new `Editor` with `attrs`.
     *
     * @param {Object} attrs
     * @param {Object} options
     */
    function Editor() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, Editor);
        var _options$controller = options.controller, controller = _options$controller === undefined ? this : _options$controller, _options$construct = options.construct, construct = _options$construct === undefined ? true : _options$construct;
        var _attrs$onChange = attrs.onChange, onChange = _attrs$onChange === undefined ? function () { } : _attrs$onChange, _attrs$plugins = attrs.plugins, plugins = _attrs$plugins === undefined ? [] : _attrs$plugins, _attrs$readOnly = attrs.readOnly, readOnly = _attrs$readOnly === undefined ? false : _attrs$readOnly, _attrs$value = attrs.value, value = _attrs$value === undefined ? Value.create() : _attrs$value;
        this.controller = controller;
        this.middleware = {};
        this.onChange = onChange;
        this.operations = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
        this.readOnly = null;
        this.value = null;
        this.tmp = {
            dirty: [],
            flushing: false,
            merge: null,
            normalize: true,
            save: true
        };
        var core = CorePlugin({ plugins: plugins });
        registerPlugin(this, core);
        if (construct) {
            this.run('onConstruct');
            this.setReadOnly(readOnly);
            this.setValue(value, options);
        }
    }
    /**
     * Apply an `operation` to the editor, updating its value.
     *
     * @param {Operation|Object} operation
     * @return {Editor}
     */
    createClass(Editor, [{
            key: 'applyOperation',
            value: function applyOperation(operation) {
                var _this = this;
                var operations = this.operations, controller = this.controller;
                var value = this.value;
                // Add in the current `value` in case the operation was serialized.
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(operation)) {
                    operation = _extends({}, operation, { value: value });
                }
                operation = Operation.create(operation);
                // Save the operation into the history. Since `save` is a command, we need
                // to do it without normalizing, since it would have side effects.
                this.withoutNormalizing(function () {
                    controller.save(operation);
                    value = _this.value;
                });
                // Apply the operation to the value.
                debug$2('apply', { operation: operation });
                this.value = operation.apply(value);
                this.operations = operations.push(operation);
                // Get the paths of the affected nodes, and mark them as dirty.
                var newDirtyPaths = getDirtyPaths(operation);
                var dirty = this.tmp.dirty.reduce(function (memo, path) {
                    path = PathUtils.create(path);
                    var transformed = PathUtils.transform(path, operation);
                    memo = memo.concat(transformed.toArray());
                    return memo;
                }, newDirtyPaths);
                this.tmp.dirty = dirty;
                // If we're not already, queue the flushing process on the next tick.
                if (!this.tmp.flushing) {
                    this.tmp.flushing = true;
                    Promise.resolve().then(function () {
                        return _this.flush();
                    });
                }
                return controller;
            }
            /**
             * Flush the editor's current change.
             *
             * @return {Editor}
             */
        }, {
            key: 'flush',
            value: function flush() {
                this.run('onChange');
                var value = this.value, operations = this.operations, controller = this.controller;
                var change = { value: value, operations: operations };
                this.operations = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
                this.tmp.flushing = false;
                this.onChange(change);
                return controller;
            }
            /**
             * Trigger a command by `type` with `...args`.
             *
             * @param {String|Function} type
             * @param {Any} ...args
             * @return {Editor}
             */
        }, {
            key: 'command',
            value: function command(type) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                var controller = this.controller;
                if (typeof type === 'function') {
                    type.apply(undefined, [controller].concat(args));
                    normalizeDirtyPaths(this);
                    return controller;
                }
                debug$2('command', { type: type, args: args });
                var obj = { type: type, args: args };
                this.run('onCommand', obj);
                normalizeDirtyPaths(this);
                return controller;
            }
            /**
             * Checks if a command by `type` has been registered.
             *
             * @param {String} type
             * @return {Boolean}
             */
        }, {
            key: 'hasCommand',
            value: function hasCommand(type) {
                var controller = this.controller;
                var has = type in controller && controller[type].__command;
                return has;
            }
            /**
             * Checks if a query by `type` has been registered.
             *
             * @param {String} type
             * @return {Boolean}
             */
        }, {
            key: 'hasQuery',
            value: function hasQuery(type) {
                var controller = this.controller;
                var has = type in controller && controller[type].__query;
                return has;
            }
            /**
             * Normalize all of the nodes in the document from scratch.
             *
             * @return {Editor}
             */
        }, {
            key: 'normalize',
            value: function normalize() {
                var value = this.value, controller = this.controller;
                var document = value.document;
                var table = document.getKeysToPathsTable();
                var paths = Object.values(table).map(PathUtils.create);
                this.tmp.dirty = this.tmp.dirty.concat(paths);
                normalizeDirtyPaths(this);
                var selection = value.selection;
                document = value.document;
                if (selection.isUnset && document.nodes.size) {
                    controller.moveToStartOfDocument();
                }
                return controller;
            }
            /**
             * Ask a query by `type` with `...args`.
             *
             * @param {String|Function} type
             * @param {Any} ...args
             * @return {Any}
             */
        }, {
            key: 'query',
            value: function query(type) {
                for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                }
                var controller = this.controller;
                if (typeof type === 'function') {
                    return type.apply(undefined, [controller].concat(args));
                }
                debug$2('query', { type: type, args: args });
                var obj = { type: type, args: args };
                return this.run('onQuery', obj);
            }
            /**
             * Register a command `type` with the editor.
             *
             * @param {String} type
             * @return {Editor}
             */
        }, {
            key: 'registerCommand',
            value: function registerCommand(type) {
                var _this2 = this;
                var controller = this.controller;
                if (type in controller && controller[type].__command) {
                    return controller;
                }
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!(type in controller), 'You cannot register a `' + type + '` command because it would overwrite an existing property of the `Editor`.');
                var method = function method() {
                    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        args[_key3] = arguments[_key3];
                    }
                    return _this2.command.apply(_this2, [type].concat(args));
                };
                controller[type] = method;
                method.__command = true;
                return controller;
            }
            /**
             * Register a query `type` with the editor.
             *
             * @param {String} type
             * @return {Editor}
             */
        }, {
            key: 'registerQuery',
            value: function registerQuery(type) {
                var _this3 = this;
                var controller = this.controller;
                if (type in controller && controller[type].__query) {
                    return controller;
                }
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!(type in controller), 'You cannot register a `' + type + '` query because it would overwrite an existing property of the `Editor`.');
                var method = function method() {
                    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                        args[_key4] = arguments[_key4];
                    }
                    return _this3.query.apply(_this3, [type].concat(args));
                };
                controller[type] = method;
                method.__query = true;
                return controller;
            }
            /**
             * Run through the middleware stack by `key` with `args`.
             *
             * @param {String} key
             * @param {Any} ...args
             * @return {Any}
             */
        }, {
            key: 'run',
            value: function run(key) {
                for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                    args[_key5 - 1] = arguments[_key5];
                }
                var controller = this.controller, middleware = this.middleware;
                var fns = middleware[key] || [];
                var i = 0;
                function next() {
                    var fn = fns[i++];
                    if (!fn)
                        return;
                    for (var _len6 = arguments.length, overrides = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                        overrides[_key6] = arguments[_key6];
                    }
                    if (overrides.length) {
                        args = overrides;
                    }
                    var ret = fn.apply(undefined, toConsumableArray(args).concat([controller, next]));
                    return ret;
                }
                Object.defineProperty(next, 'change', {
                    get: function get$$1() {
                        Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
                    }
                });
                Object.defineProperty(next, 'onChange', {
                    get: function get$$1() {
                        Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
                    }
                });
                Object.defineProperty(next, 'props', {
                    get: function get$$1() {
                        Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
                    }
                });
                Object.defineProperty(next, 'schema', {
                    get: function get$$1() {
                        Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
                    }
                });
                Object.defineProperty(next, 'stack', {
                    get: function get$$1() {
                        Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
                    }
                });
                return next();
            }
            /**
             * Set the `readOnly` flag.
             *
             * @param {Boolean} readOnly
             * @return {Editor}
             */
        }, {
            key: 'setReadOnly',
            value: function setReadOnly(readOnly) {
                this.readOnly = readOnly;
                return this;
            }
            /**
             * Set the editor's `value`.
             *
             * @param {Value} value
             * @param {Options} options
             * @return {Editor}
             */
        }, {
            key: 'setValue',
            value: function setValue(value) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _options$normalize = options.normalize, normalize = _options$normalize === undefined ? value !== this.value : _options$normalize;
                this.value = value;
                if (normalize) {
                    this.normalize();
                }
                return this;
            }
            /**
             * Apply a series of changes inside a synchronous `fn`, deferring
             * normalization until after the function has finished executing.
             *
             * @param {Function} fn
             * @return {Editor}
             */
        }, {
            key: 'withoutNormalizing',
            value: function withoutNormalizing(fn) {
                var controller = this.controller;
                var value = this.tmp.normalize;
                this.tmp.normalize = false;
                fn(controller);
                this.tmp.normalize = value;
                normalizeDirtyPaths(this);
                return controller;
            }
            /**
             * Deprecated.
             */
        }, {
            key: 'change',
            value: function change(fn) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `change` object has been replaced with `editor`, so the `editor.change()` method is deprecated.`');
                for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                    args[_key7 - 1] = arguments[_key7];
                }
                fn.apply(undefined, [this.controller].concat(args));
            }
        }, {
            key: 'call',
            value: function call(fn) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `editor.call(fn)` method has been deprecated, please use `editor.command(fn)` instead.');
                for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
                    args[_key8 - 1] = arguments[_key8];
                }
                fn.apply(undefined, [this.controller].concat(args));
                return this.controller;
            }
        }, {
            key: 'applyOperations',
            value: function applyOperations(operations) {
                var _this4 = this;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `applyOperations` method is deprecated, please apply each operation in a loop instead.');
                operations.forEach(function (op) {
                    return _this4.applyOperation(op);
                });
                return this.controller;
            }
        }, {
            key: 'setOperationFlag',
            value: function setOperationFlag(key, value) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.setOperationFlag` method has been deprecated.');
                this.tmp[key] = value;
                return this;
            }
        }, {
            key: 'getFlag',
            value: function getFlag(key) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.getFlag` method has been deprecated.');
                return options[key] !== undefined ? options[key] : this.tmp[key];
            }
        }, {
            key: 'unsetOperationFlag',
            value: function unsetOperationFlag(key) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.unsetOperationFlag` method has been deprecated.');
                delete this.tmp[key];
                return this;
            }
        }, {
            key: 'withoutNormalization',
            value: function withoutNormalization(fn) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.withoutNormalization` helper has been renamed to `change.withoutNormalizing`.');
                return this.withoutNormalizing(fn);
            }
        }, {
            key: 'editor',
            get: function get$$1() {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "As of Slate 0.43 the `change` object has been replaced with `editor`, so you don't need to access `change.editor`.");
                return this.controller;
            }
        }]);
    return Editor;
}();
/**
 * Get the "dirty" paths for a given `operation`.
 *
 * @param {Operation} operation
 * @return {Array}
 */
function getDirtyPaths(operation) {
    var type = operation.type, node = operation.node, path = operation.path, newPath = operation.newPath;
    switch (type) {
        case 'add_mark':
        case 'insert_text':
        case 'remove_mark':
        case 'remove_text':
        case 'set_mark':
        case 'set_node':
            {
                var ancestors = PathUtils.getAncestors(path).toArray();
                return [].concat(toConsumableArray(ancestors), [path]);
            }
        case 'insert_node':
            {
                var table = node.getKeysToPathsTable();
                var paths = Object.values(table).map(function (p) {
                    return path.concat(p);
                });
                var _ancestors = PathUtils.getAncestors(path).toArray();
                return [].concat(toConsumableArray(_ancestors), [path], toConsumableArray(paths));
            }
        case 'split_node':
            {
                var _ancestors2 = PathUtils.getAncestors(path).toArray();
                var nextPath = PathUtils.increment(path);
                return [].concat(toConsumableArray(_ancestors2), [path, nextPath]);
            }
        case 'merge_node':
            {
                var _ancestors3 = PathUtils.getAncestors(path).toArray();
                var previousPath = PathUtils.decrement(path);
                return [].concat(toConsumableArray(_ancestors3), [previousPath]);
            }
        case 'move_node':
            {
                if (PathUtils.isEqual(path, newPath)) {
                    return [];
                }
                var oldAncestors = PathUtils.getAncestors(path).reduce(function (arr, p) {
                    arr.push.apply(arr, toConsumableArray(PathUtils.transform(p, operation).toArray()));
                    return arr;
                }, []);
                var newAncestors = PathUtils.getAncestors(newPath).reduce(function (arr, p) {
                    arr.push.apply(arr, toConsumableArray(PathUtils.transform(p, operation).toArray()));
                    return arr;
                }, []);
                return [].concat(toConsumableArray(oldAncestors), toConsumableArray(newAncestors));
            }
        case 'remove_node':
            {
                var _ancestors4 = PathUtils.getAncestors(path).toArray();
                return [].concat(toConsumableArray(_ancestors4));
            }
        default:
            {
                return [];
            }
    }
}
/**
 * Normalize any new "dirty" paths that have been added to the change.
 *
 * @param {Editor}
 */
function normalizeDirtyPaths(editor) {
    if (!editor.tmp.normalize) {
        return;
    }
    if (!editor.tmp.dirty.length) {
        return;
    }
    editor.withoutNormalizing(function () {
        while (editor.tmp.dirty.length) {
            var path = editor.tmp.dirty.pop();
            normalizeNodeByPath(editor, path);
        }
    });
}
/**
 * Normalize the node at a specific `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */
function normalizeNodeByPath(editor, path) {
    var controller = editor.controller;
    var value = editor.value;
    var _value = value, document = _value.document;
    var node = document.assertNode(path);
    var iterations = 0;
    var max = 100 + (node.object === 'text' ? 1 : node.nodes.size);
    while (node) {
        var fn = node.normalize(controller);
        if (!fn) {
            break;
        }
        // Run the normalize `fn` to fix the node.
        fn(controller);
        // Attempt to re-find the node by path, or by key if it has changed
        // locations in the tree continue iterating.
        value = editor.value;
        document = value.document;
        var _node = node, key = _node.key;
        var found = document.getDescendant(path);
        if (found && found.key === key) {
            node = found;
        }
        else {
            found = document.getDescendant(key);
            if (found) {
                node = found;
                path = document.getPath(key);
            }
            else {
                // If it no longer exists by key, it was removed, so we're done.
                break;
            }
        }
        // Increment the iterations counter, and check to make sure that we haven't
        // exceeded the max. Without this check, it's easy for the `normalize`
        // function of a schema rule to be written incorrectly and for an infinite
        // invalid loop to occur.
        iterations++;
        if (iterations > max) {
            throw new Error('A schema rule could not be normalized after sufficient iterations. This is usually due to a `rule.normalize` or `plugin.normalizeNode` function of a schema being incorrectly written, causing an infinite loop.');
        }
    }
}
/**
 * Register a `plugin` with the editor.
 *
 * @param {Editor} editor
 * @param {Object|Array|Null} plugin
 */
function registerPlugin(editor, plugin) {
    if (Array.isArray(plugin)) {
        plugin.forEach(function (p) {
            return registerPlugin(editor, p);
        });
        return;
    }
    if (plugin == null) {
        return;
    }
    var commands = plugin.commands, queries = plugin.queries, schema = plugin.schema, rest = objectWithoutProperties(plugin, ['commands', 'queries', 'schema']);
    if (commands) {
        var commandsPlugin = CommandsPlugin(commands);
        registerPlugin(editor, commandsPlugin);
    }
    if (queries) {
        var queriesPlugin = QueriesPlugin(queries);
        registerPlugin(editor, queriesPlugin);
    }
    if (schema) {
        var schemaPlugin = SchemaPlugin(schema);
        registerPlugin(editor, schemaPlugin);
    }
    for (var key in rest) {
        var fn = rest[key];
        var middleware = editor.middleware[key] = editor.middleware[key] || [];
        middleware.push(fn);
    }
}
/**
 * Default properties.
 *
 * @type {Object}
 */
var DEFAULTS$13 = {
    marks: undefined,
    text: undefined
    /**
     * Leaf.
     *
     * @type {Leaf}
     */
};
var Leaf$1 = function (_Record) {
    inherits(Leaf, _Record);
    function Leaf() {
        classCallCheck(this, Leaf);
        return possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).apply(this, arguments));
    }
    createClass(Leaf, [{
            key: 'updateMark',
            /**
             * Update a `mark` at leaf, replace with newMark
             *
             * @param {Mark} mark
             * @param {Mark} newMark
             * @returns {Leaf}
             */
            value: function updateMark(mark, newMark) {
                var marks = this.marks;
                if (newMark.equals(mark))
                    return this;
                if (!marks.has(mark))
                    return this;
                var newMarks = marks.withMutations(function (collection) {
                    collection.remove(mark).add(newMark);
                });
                return this.set('marks', newMarks);
            }
            /**
             * Add a `mark` to the leaf.
             *
             * @param {Mark} mark
             * @returns {Text}
             */
        }, {
            key: 'addMark',
            value: function addMark(mark) {
                var marks = this.marks;
                return this.set('marks', marks.add(mark));
            }
            /**
             * Add a `set` of marks to the leaf.
             *
             * @param {Set<Mark>} set
             * @returns {Text}
             */
        }, {
            key: 'addMarks',
            value: function addMarks(set$$1) {
                var marks = this.marks;
                return this.set('marks', marks.union(set$$1));
            }
            /**
             * Insert a text `string` into the leaf at `offset`.
             *
             * @param {Number} offset
             * @param {String} string
             * @return {Leaf}
             */
        }, {
            key: 'insertText',
            value: function insertText(offset, string) {
                var text = this.text;
                var next = text.slice(0, offset) + string + text.slice(offset);
                return this.set('text', next);
            }
            /**
             * Remove a `mark` from the leaf.
             *
             * @param {Mark} mark
             * @returns {Text}
             */
        }, {
            key: 'removeMark',
            value: function removeMark(mark) {
                var marks = this.marks;
                return this.set('marks', marks.remove(mark));
            }
            /**
             * Return a JSON representation of the leaf.
             *
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var object = {
                    object: this.object,
                    text: this.text,
                    marks: this.marks.toArray().map(function (m) {
                        return m.toJSON();
                    })
                };
                return object;
            }
        }], [{
            key: 'create',
            /**
             * Create a new `Leaf` with `attrs`.
             *
             * @param {Object|Leaf} attrs
             * @return {Leaf}
             */
            value: function create() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47 the `Leaf` model is deprecated.');
                if (Leaf.isLeaf(attrs)) {
                    return attrs;
                }
                if (typeof attrs === 'string') {
                    attrs = { text: attrs };
                }
                if (is_plain_object__WEBPACK_IMPORTED_MODULE_1___default()(attrs)) {
                    return Leaf.fromJSON(attrs);
                }
                throw new Error('`Leaf.create` only accepts objects, strings or leaves, but you passed it: ' + attrs);
            }
            /**
             * Create a valid List of `Leaf` from `leaves`
             *
             * @param {List<Leaf>} leaves
             * @return {List<Leaf>}
             */
        }, {
            key: 'createLeaves',
            value: function createLeaves(leaves) {
                if (leaves.size <= 1)
                    return leaves;
                var invalid = false;
                // TODO: we can make this faster with [List] and then flatten
                var result = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])().withMutations(function (cache) {
                    // Search from the leaves left end to find invalid node;
                    leaves.findLast(function (leaf, index) {
                        var firstLeaf = cache.first();
                        // If the first leaf of cache exist, check whether the first leaf is connectable with the current leaf
                        if (firstLeaf) {
                            // If marks equals, then the two leaves can be connected
                            if (firstLeaf.marks.equals(leaf.marks)) {
                                invalid = true;
                                cache.set(0, firstLeaf.set('text', '' + leaf.text + firstLeaf.text));
                                return;
                            }
                            // If the cached leaf is empty, drop the empty leaf with the upcoming leaf
                            if (firstLeaf.text === '') {
                                invalid = true;
                                cache.set(0, leaf);
                                return;
                            }
                            // If the current leaf is empty, drop the leaf
                            if (leaf.text === '') {
                                invalid = true;
                                return;
                            }
                        }
                        cache.unshift(leaf);
                    });
                });
                if (!invalid)
                    return leaves;
                return result;
            }
            /**
             * Split a list of leaves to two lists; if the leaves are valid leaves, the returned leaves are also valid
             * Corner Cases:
             *   1. if offset is smaller than 0, then return [List(), leaves]
             *   2. if offset is bigger than the text length, then return [leaves, List()]
             *
             * @param {List<Leaf> leaves
             * @return {Array<List<Leaf>>}
             */
        }, {
            key: 'splitLeaves',
            value: function splitLeaves(leaves, offset) {
                if (offset < 0)
                    return [Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(), leaves];
                if (leaves.size === 0) {
                    return [Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(), Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])()];
                }
                var endOffset = 0;
                var index = -1;
                var left = void 0, right = void 0;
                leaves.find(function (leaf) {
                    index++;
                    var startOffset = endOffset;
                    var text = leaf.text;
                    endOffset += text.length;
                    if (endOffset < offset)
                        return false;
                    if (startOffset > offset)
                        return false;
                    var length = offset - startOffset;
                    left = leaf.set('text', text.slice(0, length));
                    right = leaf.set('text', text.slice(length));
                    return true;
                });
                if (!left)
                    return [leaves, Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])()];
                if (left.text === '') {
                    if (index === 0) {
                        return [immutable__WEBPACK_IMPORTED_MODULE_0__["List"].of(left), leaves];
                    }
                    return [leaves.take(index), leaves.skip(index)];
                }
                if (right.text === '') {
                    if (index === leaves.size - 1) {
                        return [leaves, immutable__WEBPACK_IMPORTED_MODULE_0__["List"].of(right)];
                    }
                    return [leaves.take(index + 1), leaves.skip(index + 1)];
                }
                return [leaves.take(index).push(left), leaves.skip(index + 1).unshift(right)];
            }
            /**
             * Create a `Leaf` list from `attrs`.
             *
             * @param {Array<Leaf|Object>|List<Leaf|Object>} attrs
             * @return {List<Leaf>}
             */
        }, {
            key: 'createList',
            value: function createList() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(attrs) || Array.isArray(attrs)) {
                    var list = new immutable__WEBPACK_IMPORTED_MODULE_0__["List"](attrs.map(Leaf.create));
                    return list;
                }
                throw new Error('`Leaf.createList` only accepts arrays or lists, but you passed it: ' + attrs);
            }
            /**
             * Create a `Leaf` from a JSON `object`.
             *
             * @param {Object} object
             * @return {Leaf}
             */
        }, {
            key: 'fromJSON',
            value: function fromJSON(object) {
                var _object$text = object.text, text = _object$text === undefined ? '' : _object$text, _object$marks = object.marks, marks = _object$marks === undefined ? [] : _object$marks;
                var leaf = new Leaf({
                    text: text,
                    marks: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])(marks.map(Mark.fromJSON))
                });
                return leaf;
            }
            /**
             * Check if `any` is a list of leaves.
             *
             * @param {Any} any
             * @return {Boolean}
             */
        }, {
            key: 'isLeafList',
            value: function isLeafList(any) {
                return immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(any) && any.every(function (item) {
                    return Leaf.isLeaf(item);
                });
            }
        }]);
    return Leaf;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(DEFAULTS$13));
/**
 * Mix in an `Interface` to a `Class`.
 *
 * @param {Class} Interface
 * @param {Class} Class
 */
function mixin(Interface, Classes) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for (var _iterator = Classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var Class = _step.value;
            // Copy static properties from the interface.
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            try {
                for (var _iterator2 = Object.getOwnPropertyNames(Interface)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var name = _step2.value;
                    if (Class.hasOwnProperty(name))
                        continue;
                    var desc = Object.getOwnPropertyDescriptor(Interface, name);
                    Object.defineProperty(Class, name, desc);
                }
                // Copy instance properties from the interface.
            }
            catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            }
            finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                }
                finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;
            try {
                for (var _iterator3 = Object.getOwnPropertyNames(Interface.prototype)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _name = _step3.value;
                    if (Class.prototype.hasOwnProperty(_name))
                        continue;
                    var desc = Object.getOwnPropertyDescriptor(Interface.prototype, _name);
                    Object.defineProperty(Class.prototype, _name, desc);
                }
            }
            catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            }
            finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                }
                finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
    catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        }
        finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
/**
 * A factory for the interface that all Slate objects implement.
 *
 * @type {Function}
 */
function create$2(type) {
    var TYPE = TYPES[type];
    var camel = '' + type.charAt(0).toUpperCase() + type.slice(1);
    var is$$1 = 'is' + camel;
    var ObjectInterface = function () {
        function ObjectInterface() {
            classCallCheck(this, ObjectInterface);
        }
        createClass(ObjectInterface, [{
                key: 'object',
                /**
                 * Return the type of the object.
                 *
                 * @return {String}
                 */
                get: function get$$1() {
                    return type;
                }
            }]);
        return ObjectInterface;
    }();
    ObjectInterface[is$$1] = isObject.bind(null, type);
    ObjectInterface.prototype[TYPE] = true;
    return ObjectInterface;
}
/**
 * Mix in the object interfaces.
 */
Object.entries({
    Annotation: Annotation,
    Block: Block,
    Change: Change,
    Decoration: Decoration,
    Document: Document,
    Editor: Editor,
    Inline: Inline,
    Leaf: Leaf$1,
    Mark: Mark,
    Node: Node,
    Operation: Operation,
    Point: Point,
    Range: Range,
    Selection: Selection,
    Text: Text,
    Value: Value
}).forEach(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2), camel = _ref2[0], obj = _ref2[1];
    return mixin(create$2(camel.toLowerCase()), [obj]);
});
/**
 * The interface that all Slate models implement.
 *
 * @type {Class}
 */
var ModelInterface = function () {
    function ModelInterface() {
        classCallCheck(this, ModelInterface);
    }
    createClass(ModelInterface, [{
            key: 'toJS',
            /**
             * Alias `toJS`.
             */
            value: function toJS() {
                return this.toJSON.apply(this, arguments);
            }
        }], [{
            key: 'fromJS',
            /**
             * Alias `fromJS`.
             */
            value: function fromJS() {
                return this.fromJSON.apply(this, arguments);
            }
        }]);
    return ModelInterface;
}();
/**
 * Mix in the common interface.
 *
 * @param {Record}
 */
mixin(ModelInterface, [Annotation, Block, Decoration, Document, Inline, Leaf$1, Mark, Node, Operation, Point, Range, Selection, Text, Value]);
/* global WeakMap, Map, Symbol */
/**
 * GLOBAL: True if memoization should is enabled.
 *
 * @type {Boolean}
 */
var ENABLED = true;
/**
 * The leaf node of a cache tree. Used to support variable argument length. A
 * unique object, so that native Maps will key it by reference.
 *
 * @type {Symbol}
 */
var LEAF = Symbol('LEAF');
/**
 * The node of a cache tree for a WeakMap to store cache visited by objects
 *
 * @type {Symbol}
 */
var STORE_KEY = Symbol('STORE_KEY');
/**
 * Values to represent a memoized undefined and null value. Allows efficient value
 * retrieval using Map.get only.
 *
 * @type {Symbol}
 */
var UNDEFINED = Symbol('undefined');
var NULL = Symbol('null');
/**
 * Default value for unset keys in native Maps
 *
 * @type {Undefined}
 */
var UNSET = undefined;
/**
 * Global Store for all cached values
 *
 * @type {WeakMap}
 */
var memoizeStore = new WeakMap();
/**
 * Memoize all of the `properties` on a `object`.
 *
 * @param {Object} object
 * @param {Array} properties
 * @return {Record}
 */
function memoize(object, properties) {
    var _loop = function _loop(property) {
        var original = object[property];
        if (!original) {
            throw new Error('Object does not have a property named "' + property + '".');
        }
        object[property] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            // If memoization is disabled, call into the original method.
            if (!ENABLED)
                return original.apply(this, args);
            if (!memoizeStore.has(this)) {
                memoizeStore.set(this, {
                    noArgs: {},
                    hasArgs: {}
                });
            }
            var _memoizeStore$get = memoizeStore.get(this), noArgs = _memoizeStore$get.noArgs, hasArgs = _memoizeStore$get.hasArgs;
            var takesArguments = args.length !== 0;
            var cachedValue = void 0;
            var keys = void 0;
            if (takesArguments) {
                keys = [property].concat(args);
                cachedValue = getIn(hasArgs, keys);
            }
            else {
                cachedValue = noArgs[property];
            }
            // If we've got a result already, return it.
            if (cachedValue !== UNSET) {
                return cachedValue === UNDEFINED ? undefined : cachedValue;
            }
            // Otherwise calculate what it should be once and cache it.
            var value = original.apply(this, args);
            var v = value === undefined ? UNDEFINED : value;
            if (takesArguments) {
                setIn(hasArgs, keys, v);
            }
            else {
                noArgs[property] = v;
            }
            return value;
        };
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var property = _step.value;
            _loop(property);
        }
    }
    catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        }
        finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
/**
 * Get a value at a key path in a tree of Map.
 *
 * If not set, returns UNSET.
 * If the set value is undefined, returns UNDEFINED.
 *
 * @param {Map} map
 * @param {Array} keys
 * @return {Any|UNSET|UNDEFINED}
 */
function getIn(map, keys) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;
            if (key === undefined) {
                key = UNDEFINED;
            }
            else if (key == null) {
                key = NULL;
            }
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                map = map[STORE_KEY] && map[STORE_KEY].get(key);
            }
            else {
                map = map[key];
            }
            if (map === UNSET)
                return UNSET;
        }
    }
    catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        }
        finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return map[LEAF];
}
/**
 * Set a value at a key path in a tree of Map, creating Maps on the go.
 *
 * @param {Map} map
 * @param {Array} keys
 * @param {Any} value
 * @return {Map}
 */
function setIn(map, keys, value) {
    var child = map;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;
    try {
        for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;
            if (key === undefined) {
                key = UNDEFINED;
            }
            else if (key == null) {
                key = NULL;
            }
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'object') {
                if (!child[key]) {
                    child[key] = {};
                }
                child = child[key];
                continue;
            }
            if (!child[STORE_KEY]) {
                child[STORE_KEY] = new WeakMap();
            }
            if (!child[STORE_KEY].has(key)) {
                var newChild = {};
                child[STORE_KEY].set(key, newChild);
                child = newChild;
                continue;
            }
            child = child[STORE_KEY].get(key);
        }
        // The whole path has been created, so set the value to the bottom most map.
    }
    catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    }
    finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        }
        finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    child[LEAF] = value;
    return map;
}
/**
 * In DEV mode, clears the previously memoized values, globally.
 *
 * @return {Void}
 */
function resetMemoization() {
    memoizeStore = new WeakMap();
}
/**
 * In DEV mode, enable or disable the use of memoize values, globally.
 *
 * @param {Boolean} enabled
 * @return {Void}
 */
function useMemoization(enabled) {
    ENABLED = enabled;
}
/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */
var NodeInterface = function () {
    function NodeInterface() {
        classCallCheck(this, NodeInterface);
    }
    createClass(NodeInterface, [{
            key: 'getFirstText',
            /**
             * Get the first text node of a node, or the node itself.
             *
             * @return {Node|Null}
             */
            value: function getFirstText() {
                if (this.object === 'text') {
                    return this;
                }
                var descendant = null;
                var found = this.nodes.find(function (node) {
                    if (node.object === 'text')
                        return true;
                    descendant = node.getFirstText();
                    return !!descendant;
                });
                return descendant || found;
            }
            /**
             * Get an object mapping all the keys in the node to their paths.
             *
             * @return {Object}
             */
        }, {
            key: 'getKeysToPathsTable',
            value: function getKeysToPathsTable() {
                var ret = defineProperty({}, this.key, []);
                if (this.nodes) {
                    this.nodes.forEach(function (node, i) {
                        var nested = node.getKeysToPathsTable();
                        for (var key in nested) {
                            var path = nested[key];
                            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!(key in ret), 'A node with a duplicate key of "' + key + '" was found! Duplicate keys are not allowed, you should use `node.regenerateKey` before inserting if you are reusing an existing node.');
                            ret[key] = [i].concat(toConsumableArray(path));
                        }
                    });
                }
                return ret;
            }
            /**
             * Get the last text node of a node, or the node itself.
             *
             * @return {Node|Null}
             */
        }, {
            key: 'getLastText',
            value: function getLastText() {
                if (this.object === 'text') {
                    return this;
                }
                var descendant = null;
                var found = this.nodes.findLast(function (node) {
                    if (node.object === 'text')
                        return true;
                    descendant = node.getLastText();
                    return descendant;
                });
                return descendant || found;
            }
            /**
             * Get a node in the tree, or the node itself.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getNode',
            value: function getNode(path) {
                path = this.resolvePath(path);
                if (!path)
                    return null;
                if (this.object === 'text' && path.size)
                    return null;
                var node = path.size ? this.getDescendant(path) : this;
                return node;
            }
            /**
             * Find the path to a node.
             *
             * @param {String|List} key
             * @return {List}
             */
        }, {
            key: 'getPath',
            value: function getPath(key) {
                // COMPAT: Handle passing in a path, to match other methods.
                if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(key)) {
                    return key;
                }
                // COMPAT: Handle a node object by iterating the descendants tree, so that
                // we avoid using keys for the future.
                if (Node.isNode(key) && this.descendants) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = this.descendants()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _ref = _step.value;
                            var _ref2 = slicedToArray(_ref, 2);
                            var node = _ref2[0];
                            var _path = _ref2[1];
                            if (key === node)
                                return _path;
                        }
                    }
                    catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    }
                    finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        }
                        finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                var dict = this.getKeysToPathsTable();
                var path = dict[key];
                return path ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(path) : null;
            }
            /**
             * Get the concatenated text string of a node.
             *
             * @return {String}
             */
        }, {
            key: 'getText',
            value: function getText() {
                if (this.object === 'text') {
                    return this.text;
                }
                var text = this.nodes.reduce(function (memo, c) {
                    return memo + c.text;
                }, '');
                return text;
            }
            /**
             * Check if a node exists.
             *
             * @param {List|String} path
             * @return {Boolean}
             */
        }, {
            key: 'hasNode',
            value: function hasNode(path) {
                var node = this.getNode(path);
                return !!node;
            }
            /**
             * Normalize the text node with an `editor`.
             *
             * @param {Editor} editor
             * @return {Function|Void}
             */
        }, {
            key: 'normalize',
            value: function normalize(editor) {
                var normalizer = editor.run('normalizeNode', this);
                return normalizer;
            }
            /**
             * Regenerate the node's key.
             *
             * @return {Node}
             */
        }, {
            key: 'regenerateKey',
            value: function regenerateKey() {
                var key = KeyUtils.create();
                var node = this.set('key', key);
                return node;
            }
            /**
             * Resolve a path from a path list or key string.
             *
             * An `index` can be provided, in which case paths created from a key string
             * will have the index pushed onto them. This is helpful in cases where you
             * want to accept either a `path` or a `key, index` combination for targeting
             * a location in the tree that doesn't exist yet, like when inserting.
             *
             * @param {List|String} value
             * @param {Number} index
             * @return {List}
             */
        }, {
            key: 'resolvePath',
            value: function resolvePath(path, index) {
                if (typeof path === 'string') {
                    path = this.getPath(path);
                    if (index != null) {
                        path = path.concat(index);
                    }
                }
                else {
                    path = PathUtils.create(path);
                }
                return path;
            }
            /**
             * Validate the node with an `editor`.
             *
             * @param {Editor} editor
             * @return {Error|Void}
             */
        }, {
            key: 'validate',
            value: function validate(editor) {
                var error = editor.run('validateNode', this);
                return error;
            }
        }]);
    return NodeInterface;
}();
/**
 * Memoize read methods.
 */
memoize(NodeInterface.prototype, ['getFirstText', 'getKeysToPathsTable', 'getLastText', 'getText', 'normalize', 'validate']);
/**
 * Mix in the node interface.
 */
mixin(NodeInterface, [Block, Document, Inline, Text]);
var global$1 = typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
        typeof window !== "undefined" ? window : {};
function identity() {
    return true;
}
/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */
var ElementInterface = function () {
    function ElementInterface() {
        classCallCheck(this, ElementInterface);
    }
    createClass(ElementInterface, [{
            key: 'addMark',
            /**
             * Add `mark` to text at `path`.
             *
             * @param {List|String} path
             * @param {Mark} mark
             * @return {Node}
             */
            value: function addMark(path, mark) {
                path = this.resolvePath(path);
                var node = this.assertDescendant(path);
                node = node.addMark(mark);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Create an iteratable for all of the ancestors of the node.
             *
             * @return {Iterable}
             */
        }, {
            key: 'ancestors',
            value: function ancestors(path) {
                var iterable = this.createIterable({
                    path: path,
                    direction: null,
                    downward: false,
                    includeTargetAncestors: true,
                    includeRoot: true
                });
                return iterable;
            }
            /**
             * Create an iteratable for all of the blocks of a node with `options`.
             *
             * @param {Options}
             * @return {Iterable}
             */
        }, {
            key: 'blocks',
            value: function blocks() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var onlyLeaves = options.onlyLeaves, onlyRoots = options.onlyRoots, onlyTypes = options.onlyTypes, _match = options.match, rest = objectWithoutProperties(options, ['onlyLeaves', 'onlyRoots', 'onlyTypes', 'match']);
                var iterable = this.descendants(_extends({
                    includeDocument: false,
                    includeInlines: false,
                    includeTexts: false
                }, rest, {
                    match: function match(node, path) {
                        if (onlyTypes && !onlyTypes.includes(node.type)) {
                            return false;
                        }
                        else if (onlyRoots && path.size !== 1) {
                            return false;
                        }
                        else if (onlyLeaves && !node.isLeafBlock()) {
                            return false;
                        }
                        else if (_match && !_match(node, path)) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }));
                return iterable;
            }
            /**
             * Create an annotation with `properties` relative to the node.
             *
             * @param {Object|Annotation} properties
             * @return {Annotation}
             */
        }, {
            key: 'createAnnotation',
            value: function createAnnotation(properties) {
                properties = Annotation.createProperties(properties);
                var annotation = this.resolveAnnotation(properties);
                return annotation;
            }
            /**
             * Create a decoration with `properties` relative to the node.
             *
             * @param {Object|Decoration} properties
             * @return {Decoration}
             */
        }, {
            key: 'createDecoration',
            value: function createDecoration(properties) {
                properties = Decoration.createProperties(properties);
                var decoration = this.resolveDecoration(properties);
                return decoration;
            }
            /**
             * Create an iteratable function starting at `target` path with `options`.
             *
             * @param {Object} options (optional)
             * @return {Function}
             */
        }, {
            key: 'createIterable',
            value: function createIterable() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _options$direction = options.direction, direction = _options$direction === undefined ? 'forward' : _options$direction, _options$downward = options.downward, downward = _options$downward === undefined ? true : _options$downward, _options$upward = options.upward, upward = _options$upward === undefined ? true : _options$upward, _options$includeBlock = options.includeBlocks, includeBlocks = _options$includeBlock === undefined ? true : _options$includeBlock, _options$includeDocum = options.includeDocument, includeDocument = _options$includeDocum === undefined ? true : _options$includeDocum, _options$includeInlin = options.includeInlines, includeInlines = _options$includeInlin === undefined ? true : _options$includeInlin, _options$includeRoot = options.includeRoot, includeRoot = _options$includeRoot === undefined ? false : _options$includeRoot, _options$includeTarge = options.includeTarget, includeTarget = _options$includeTarge === undefined ? !!options.range : _options$includeTarge, _options$includeTarge2 = options.includeTargetAncestors, includeTargetAncestors = _options$includeTarge2 === undefined ? false : _options$includeTarge2, _options$includeTexts = options.includeTexts, includeTexts = _options$includeTexts === undefined ? true : _options$includeTexts, _options$match = options.match, match = _options$match === undefined ? null : _options$match;
                var root = this;
                var targetPath = null;
                var targetRange = null;
                // You can iterate over either a range or a path, but not both.
                if (options.range) {
                    targetRange = root.resolveRange(options.range);
                    targetPath = root.resolvePath(targetRange.start.path);
                }
                else if (options.path) {
                    targetPath = root.resolvePath(options.path);
                }
                var targetNode = targetPath && root.assertNode(targetPath);
                var NativeSet = typeof window === 'undefined' ? global$1.Set : window.Set;
                // Return an object that implements the iterable interface.
                return defineProperty({}, Symbol.iterator, function () {
                    var visited = new NativeSet();
                    var startPath = targetRange && targetRange.start.path;
                    var endPath = targetRange && targetRange.end.path;
                    var path = targetPath;
                    var node = targetNode;
                    var includedTarget = false;
                    var includedStart = false;
                    var includingStart = false;
                    var result = function result() {
                        // When these are nulled out we've finished iterating.
                        if (!path || !node) {
                            return { done: true };
                        }
                        // We often don't want to include the root node itself.
                        if (!includeRoot && node === root) {
                            return next();
                        }
                        if (!includeBlocks && node.object === 'block') {
                            return next();
                        }
                        if (!includeDocument && node.object === 'document') {
                            return next();
                        }
                        if (!includeInlines && node.object === 'inline') {
                            return next();
                        }
                        if (!includeTexts && node.object === 'text') {
                            return next();
                        }
                        if (match && !match(node, path)) {
                            return next();
                        }
                        return { value: [node, path], done: false };
                    };
                    var next = function next() {
                        if (!path || !node) {
                            return result();
                        }
                        // When iterating over a range, we need to include the specific
                        // ancestors in the start path of the range manually.
                        if (startPath && !includedStart) {
                            if (!includingStart) {
                                includingStart = true;
                                path = PathUtils.create([]);
                                node = root;
                                return result();
                            }
                            if (path.size === startPath.size - 1) {
                                includedStart = true;
                                path = targetPath;
                                node = targetNode;
                                return next();
                            }
                            path = startPath.slice(0, path.size + 1);
                            node = root.assertNode(path);
                            return result();
                        }
                        // Sometimes we want to include the target itself.
                        if (includeTarget && !includedTarget) {
                            includedTarget = true;
                            return result();
                        }
                        // When iterating over a range, if we get to the end path then exit.
                        if (endPath && path.equals(endPath)) {
                            node = null;
                            path = null;
                            return next();
                        }
                        // If we're allowed to go downward, and we haven't decsended yet, do so.
                        if (downward && node.nodes && node.nodes.size && !visited.has(node)) {
                            visited.add(node);
                            var nextIndex = direction === 'forward' ? 0 : node.nodes.size - 1;
                            path = path.push(nextIndex);
                            node = root.assertNode(path);
                            return result();
                        }
                        // If we're going forward...
                        if (direction === 'forward') {
                            var newPath = PathUtils.increment(path);
                            var newNode = root.getNode(newPath);
                            if (newNode) {
                                path = newPath;
                                node = newNode;
                                return result();
                            }
                        }
                        // If we're going backward...
                        if (direction === 'backward' && path.last() !== 0) {
                            var _newPath = PathUtils.decrement(path);
                            var _newNode = root.getNode(_newPath);
                            if (_newNode) {
                                path = _newPath;
                                node = _newNode;
                                return result();
                            }
                        }
                        // If we're going upward...
                        if (upward && path.size) {
                            path = PathUtils.lift(path);
                            node = root.assertNode(path);
                            // Sometimes we'll have already visited the node on the way down
                            // so we don't want to double count it.
                            if (visited.has(node)) {
                                return next();
                            }
                            visited.add(node);
                            // If ancestors of the target node shouldn't be included, skip them.
                            if (!includeTargetAncestors) {
                                return next();
                            }
                            else {
                                return result();
                            }
                        }
                        path = null;
                        node = null;
                        return next();
                    };
                    return { next: next };
                });
            }
            /**
             * Create a point with `properties` relative to the node.
             *
             * @param {Object|Point} properties
             * @return {Range}
             */
        }, {
            key: 'createPoint',
            value: function createPoint(properties) {
                properties = Point.createProperties(properties);
                var point = this.resolvePoint(properties);
                return point;
            }
            /**
             * Create a range with `properties` relative to the node.
             *
             * @param {Object|Range} properties
             * @return {Range}
             */
        }, {
            key: 'createRange',
            value: function createRange(properties) {
                properties = Range.createProperties(properties);
                var range = this.resolveRange(properties);
                return range;
            }
            /**
             * Create a selection with `properties` relative to the node.
             *
             * @param {Object|Selection} properties
             * @return {Selection}
             */
        }, {
            key: 'createSelection',
            value: function createSelection(properties) {
                properties = Selection.createProperties(properties);
                var selection = this.resolveSelection(properties);
                return selection;
            }
            /**
             * Create an iteratable for all of the descendants of the node.
             *
             * @param {Object} options
             * @return {Iterable}
             */
        }, {
            key: 'descendants',
            value: function descendants(options) {
                var iterable = this.createIterable(_extends({ path: [] }, options));
                return iterable;
            }
            /**
             * Find all of the descendants that match a `predicate`.
             *
             * @param {Function} predicate
             * @return {List<Node>}
             */
        }, {
            key: 'filterDescendants',
            value: function filterDescendants() {
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
                var matches = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = this.descendants()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _ref2 = _step.value;
                        var _ref3 = slicedToArray(_ref2, 2);
                        var node = _ref3[0];
                        var path = _ref3[1];
                        if (predicate(node, path)) {
                            matches.push(node);
                        }
                    }
                }
                catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    }
                    finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(matches);
            }
            /**
             * Find the first descendant that matches a `predicate`.
             *
             * @param {Function} predicate
             * @return {Node|Null}
             */
        }, {
            key: 'findDescendant',
            value: function findDescendant() {
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
                try {
                    for (var _iterator2 = this.descendants()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _ref4 = _step2.value;
                        var _ref5 = slicedToArray(_ref4, 2);
                        var node = _ref5[0];
                        var path = _ref5[1];
                        if (predicate(node, path)) {
                            return node;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    }
                    finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                return null;
            }
            /**
             * Iterate over all descendants, breaking if `predicate` returns false.
             *
             * @param {Function} predicate
             */
        }, {
            key: 'forEachDescendant',
            value: function forEachDescendant() {
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;
                try {
                    for (var _iterator3 = this.descendants()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _next = _step3.value;
                        var ret = predicate.apply(undefined, toConsumableArray(_next));
                        if (ret === false) {
                            return;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    }
                    finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
            /**
             * Get a set of the active marks in a `range`. Active marks are marks that are
             * on every text node in a given range. This is a common distinction for
             * highlighting toolbar buttons for example.
             *
             * TODO: this method needs to be cleaned up, it's very hard to follow and
             * probably doing unnecessary work.
             *
             * @param {Range} range
             * @return {Set<Mark>}
             */
        }, {
            key: 'getActiveMarksAtRange',
            value: function getActiveMarksAtRange(range) {
                range = this.resolveRange(range);
                if (range.isUnset) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])();
                }
                if (range.isCollapsed) {
                    var _range = range, _start = _range.start;
                    return this.getInsertMarksAtPoint(_start);
                }
                var _range2 = range, start = _range2.start, end = _range2.end;
                var startPath = start.path;
                var startOffset = start.offset;
                var endPath = end.path;
                var endOffset = end.offset;
                var startText = this.getDescendant(startPath);
                var endText = this.getDescendant(endPath);
                if (!startPath.equals(endPath)) {
                    while (!startPath.equals(endPath) && endOffset === 0) {
                        var _texts = this.texts({
                            path: endPath,
                            direction: 'backward'
                        });
                        var _texts2 = slicedToArray(_texts, 1);
                        var _texts2$ = slicedToArray(_texts2[0], 2);
                        endText = _texts2$[0];
                        endPath = _texts2$[1];
                        endOffset = endText.text.length;
                    }
                    while (!startPath.equals(endPath) && startOffset === startText.text.length) {
                        var _texts3 = this.texts({ path: startPath });
                        var _texts4 = slicedToArray(_texts3, 1);
                        var _texts4$ = slicedToArray(_texts4[0], 2);
                        startText = _texts4$[0];
                        startPath = _texts4$[1];
                        startOffset = 0;
                    }
                }
                if (startPath.equals(endPath)) {
                    return startText.marks;
                }
                var startMarks = startText.marks;
                // PERF: if start marks is empty we can return early.
                if (startMarks.size === 0) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])();
                }
                var endMarks = endText.marks;
                var marks = startMarks.intersect(endMarks);
                // If marks is already empty, the active marks is empty
                if (marks.size === 0) {
                    return marks;
                }
                var _texts5 = this.texts({ path: startPath });
                var _texts6 = slicedToArray(_texts5, 1);
                var _texts6$ = slicedToArray(_texts6[0], 2);
                startText = _texts6$[0];
                startPath = _texts6$[1];
                while (!startPath.equals(endPath)) {
                    if (startText.text.length !== 0) {
                        marks = marks.intersect(startText.marks);
                        if (marks.size === 0) {
                            return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])();
                        }
                    }
                    var _texts7 = this.texts({ path: startPath });
                    var _texts8 = slicedToArray(_texts7, 1);
                    var _texts8$ = slicedToArray(_texts8[0], 2);
                    startText = _texts8$[0];
                    startPath = _texts8$[1];
                }
                return marks;
            }
            /**
             * Get a list of the ancestors of a descendant.
             *
             * @param {List|String} path
             * @return {List<Node>|Null}
             */
        }, {
            key: 'getAncestors',
            value: function getAncestors(path) {
                var iterable = this.ancestors(path);
                var array = Array.from(iterable, function (_ref6) {
                    var _ref7 = slicedToArray(_ref6, 1), node = _ref7[0];
                    return node;
                }).reverse();
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get the leaf block descendants of the node.
             *
             * @return {List<Node>}
             */
        }, {
            key: 'getBlocks',
            value: function getBlocks() {
                var iterable = this.blocks({ onlyLeaves: true });
                var array = Array.from(iterable, function (_ref8) {
                    var _ref9 = slicedToArray(_ref8, 1), node = _ref9[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get all of the leaf blocks that match a `type`.
             *
             * @param {String} type
             * @return {List<Node>}
             */
        }, {
            key: 'getBlocksByType',
            value: function getBlocksByType(type) {
                var iterable = this.blocks({ onlyLeaves: true, onlyTypes: [type] });
                var array = Array.from(iterable, function (_ref10) {
                    var _ref11 = slicedToArray(_ref10, 1), node = _ref11[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get a child node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getChild',
            value: function getChild(path) {
                path = this.resolvePath(path);
                if (!path || path.size > 1) {
                    return null;
                }
                var child = this.nodes.get(path.first());
                return child;
            }
            /**
             * Get closest parent of node that matches a `predicate`.
             *
             * @param {List|String} path
             * @param {Function} predicate
             * @return {Node|Null}
             */
        }, {
            key: 'getClosest',
            value: function getClosest(path, predicate) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;
                try {
                    for (var _iterator4 = this.ancestors(path)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _ref12 = _step4.value;
                        var _ref13 = slicedToArray(_ref12, 2);
                        var n = _ref13[0];
                        var p = _ref13[1];
                        if (predicate(n, p)) {
                            return n;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    }
                    finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
                return null;
            }
            /**
             * Get the closest block parent of a node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getClosestBlock',
            value: function getClosestBlock(path) {
                var closest = this.getClosest(path, function (n) {
                    return n.object === 'block';
                });
                return closest;
            }
            /**
             * Get the closest inline parent of a node by `path`.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getClosestInline',
            value: function getClosestInline(path) {
                var closest = this.getClosest(path, function (n) {
                    return n.object === 'inline';
                });
                return closest;
            }
            /**
             * Get the closest void parent of a node by `path`.
             *
             * @param {List|String} path
             * @param {Editor} editor
             * @return {Node|Null}
             */
        }, {
            key: 'getClosestVoid',
            value: function getClosestVoid(path, editor) {
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.getClosestVoid` method takes an `editor` instead of a `value`.');
                var closest = this.getClosest(path, function (n) {
                    return editor.isVoid(n);
                });
                return closest;
            }
            /**
             * Get the common ancestor of nodes `a` and `b`.
             *
             * @param {List} a
             * @param {List} b
             * @return {Node}
             */
        }, {
            key: 'getCommonAncestor',
            value: function getCommonAncestor(a, b) {
                a = this.resolvePath(a);
                b = this.resolvePath(b);
                if (!a || !b) {
                    return null;
                }
                var path = PathUtils.relate(a, b);
                var node = this.getNode(path);
                return node;
            }
            /**
             * Get the decorations for the node from an `editor`.
             *
             * @param {Editor} editor
             * @return {List}
             */
        }, {
            key: 'getDecorations',
            value: function getDecorations(editor) {
                var decorations = editor.run('decorateNode', this);
                decorations = Decoration.createList(decorations);
                return decorations;
            }
            /**
             * Get the depth of a descendant, with optional `startAt`.
             *
             * @param {List|String} path
             * @param {Number} startAt
             * @return {Number|Null}
             */
        }, {
            key: 'getDepth',
            value: function getDepth(path) {
                var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                path = this.resolvePath(path);
                if (!path) {
                    return null;
                }
                var node = this.getNode(path);
                var depth = node ? path.size - 1 + startAt : null;
                return depth;
            }
            /**
             * Get a descendant node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getDescendant',
            value: function getDescendant(path) {
                path = this.resolvePath(path);
                if (!path || !path.size) {
                    return null;
                }
                var node = this;
                path.forEach(function (index) {
                    node = node.getIn(['nodes', index]);
                    return !!node;
                });
                return node;
            }
            /**
             * Get all of the descendant nodes in a `range`.
             *
             * @param {Range} range
             * @return {List<Node>}
             */
        }, {
            key: 'getDescendantsAtRange',
            value: function getDescendantsAtRange(range) {
                var iterable = this.descendants({ range: range });
                var array = Array.from(iterable, function (_ref14) {
                    var _ref15 = slicedToArray(_ref14, 1), node = _ref15[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get a fragment of the node at a `range`.
             *
             * @param {Range} range
             * @return {Document}
             */
        }, {
            key: 'getFragmentAtRange',
            value: function getFragmentAtRange(range) {
                range = this.resolveRange(range);
                if (range.isUnset) {
                    return Document.create();
                }
                var _range3 = range, start = _range3.start, end = _range3.end;
                var node = this;
                var targetPath = end.path;
                var targetPosition = end.offset;
                var side = 'end';
                while (targetPath.size) {
                    var index = targetPath.last();
                    node = node.splitNode(targetPath, targetPosition);
                    targetPosition = index + 1;
                    targetPath = PathUtils.lift(targetPath);
                    if (!targetPath.size && side === 'end') {
                        targetPath = start.path;
                        targetPosition = start.offset;
                        side = 'start';
                    }
                }
                var startIndex = start.path.first() + 1;
                var endIndex = end.path.first() + 2;
                var nodes = node.nodes.slice(startIndex, endIndex);
                var fragment = Document.create({ nodes: nodes });
                return fragment;
            }
            /**
             * Get the furthest ancestors of a node that matches a `predicate`.
             *
             * @param {Path} path
             * @param {Function} predicate
             * @return {Node|Null}
             */
        }, {
            key: 'getFurthest',
            value: function getFurthest(path) {
                var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
                var iterable = this.ancestors(path);
                var results = Array.from(iterable).reverse();
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;
                try {
                    for (var _iterator5 = results[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var _ref16 = _step5.value;
                        var _ref17 = slicedToArray(_ref16, 2);
                        var n = _ref17[0];
                        var p = _ref17[1];
                        if (predicate(n, p)) {
                            return n;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    }
                    finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
                return null;
            }
            /**
             * Get the furthest block parent of a node.
             *
             * @param {Path} path
             * @return {Node|Null}
             */
        }, {
            key: 'getFurthestBlock',
            value: function getFurthestBlock(path) {
                var furthest = this.getFurthest(path, function (n) {
                    return n.object === 'block';
                });
                return furthest;
            }
            /**
             * Get the furthest child ancestor of a node at `path`.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getFurthestChild',
            value: function getFurthestChild(path) {
                path = this.resolvePath(path);
                if (!path || !path.size) {
                    return null;
                }
                var furthest = this.nodes.get(path.first());
                return furthest;
            }
            /**
             * Get the furthest inline parent of a node.
             *
             * @param {Path} path
             * @return {Node|Null}
             */
        }, {
            key: 'getFurthestInline',
            value: function getFurthestInline(path) {
                var furthest = this.getFurthest(path, function (n) {
                    return n.object === 'inline';
                });
                return furthest;
            }
            /**
             * Get the closest inline nodes for each text node in the node.
             *
             * @return {List<Node>}
             */
        }, {
            key: 'getInlines',
            value: function getInlines() {
                var iterable = this.inlines({ onlyLeaves: true });
                var array = Array.from(iterable, function (_ref18) {
                    var _ref19 = slicedToArray(_ref18, 1), node = _ref19[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get all of the leaf inline nodes that match a `type`.
             *
             * @param {String} type
             * @return {List<Node>}
             */
        }, {
            key: 'getInlinesByType',
            value: function getInlinesByType(type) {
                var iterable = this.inlines({ onlyLeaves: true, onlyTypes: [type] });
                var array = Array.from(iterable, function (_ref20) {
                    var _ref21 = slicedToArray(_ref20, 1), node = _ref21[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get a set of marks that would occur on the next insert at a `point` in the
             * node. This mimics expected rich text editing behaviors of mark contiuation.
             *
             * @param {Point} point
             * @return {Set<Mark>}
             */
        }, {
            key: 'getInsertMarksAtPoint',
            value: function getInsertMarksAtPoint(point) {
                point = this.resolvePoint(point);
                var _point = point, path = _point.path, offset = _point.offset;
                var text = this.getDescendant(path);
                // PERF: we can exit early if the offset isn't at the start of the node.
                if (offset !== 0) {
                    return text.marks;
                }
                var blockNode = void 0;
                var blockPath = void 0;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;
                try {
                    for (var _iterator6 = this.ancestors(path)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var entry = _step6.value;
                        var _entry = slicedToArray(entry, 2), n = _entry[0], p = _entry[1];
                        if (n.object === 'block') {
                            blockNode = n;
                            blockPath = p;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    }
                    finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
                var relativePath = PathUtils.drop(path, blockPath.size);
                var _blockNode$texts = blockNode.texts({
                    path: relativePath,
                    direction: 'backward'
                }), _blockNode$texts2 = slicedToArray(_blockNode$texts, 1), previous = _blockNode$texts2[0];
                // If there's no previous text, we're at the start of the block, so use
                // the current text nodes marks.
                if (!previous) {
                    return text.marks;
                }
                // Otherwise, continue with the previous text node's marks instead.
                var _previous = slicedToArray(previous, 1), previousText = _previous[0];
                return previousText.marks;
            }
            /**
             * Get a set of marks that would occur on the next insert at a `range`.
             * This mimics expected rich text editing behaviors of mark contiuation.
             *
             * @param {Range} range
             * @return {Set<Mark>}
             */
        }, {
            key: 'getInsertMarksAtRange',
            value: function getInsertMarksAtRange(range) {
                range = this.resolveRange(range);
                var _range4 = range, start = _range4.start;
                if (range.isUnset) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Set"])();
                }
                if (range.isCollapsed) {
                    return this.getInsertMarksAtPoint(start);
                }
                var text = this.getDescendant(start.path);
                return text.marks;
            }
            /**
             * Get the bottom-most block descendants in a `range`.
             *
             * @param {Range} range
             * @return {List<Node>}
             */
        }, {
            key: 'getLeafBlocksAtRange',
            value: function getLeafBlocksAtRange(range) {
                var iterable = this.blocks({ range: range, onlyLeaves: true });
                var array = Array.from(iterable, function (_ref22) {
                    var _ref23 = slicedToArray(_ref22, 1), node = _ref23[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get the bottom-most inline nodes for each text node in a `range`.
             *
             * @param {Range} range
             * @return {List<Node>}
             */
        }, {
            key: 'getLeafInlinesAtRange',
            value: function getLeafInlinesAtRange(range) {
                var iterable = this.inlines({ range: range, onlyLeaves: true });
                var array = Array.from(iterable, function (_ref24) {
                    var _ref25 = slicedToArray(_ref24, 1), node = _ref25[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get an object mapping all the keys in the node to their paths.
             *
             * @return {Map}
             */
        }, {
            key: 'getNodesToPathsMap',
            value: function getNodesToPathsMap() {
                var root = this;
                var map = typeof window === 'undefined' ? new global$1.Map() : new window.Map();
                map.set(root, PathUtils.create([]));
                root.forEachDescendant(function (node, path) {
                    map.set(node, path);
                });
                return map;
            }
            /**
             * Get all of the marks for all of the characters of every text node.
             *
             * @return {OrderedSet<Mark>}
             */
        }, {
            key: 'getMarks',
            value: function getMarks() {
                var iterable = this.marks();
                var array = Array.from(iterable, function (_ref26) {
                    var _ref27 = slicedToArray(_ref26, 1), mark = _ref27[0];
                    return mark;
                });
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(array);
            }
            /**
             * Get a set of the marks in a `range`.
             *
             * @param {Range} range
             * @return {OrderedSet<Mark>}
             */
        }, {
            key: 'getMarksAtRange',
            value: function getMarksAtRange(range) {
                var iterable = this.marks({ range: range });
                var array = Array.from(iterable, function (_ref28) {
                    var _ref29 = slicedToArray(_ref28, 1), mark = _ref29[0];
                    return mark;
                });
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(array);
            }
            /**
             * Get all of the marks that match a `type`.
             *
             * @param {String} type
             * @return {OrderedSet<Mark>}
             */
        }, {
            key: 'getMarksByType',
            value: function getMarksByType(type) {
                var iterable = this.marks({ onlyTypes: [type] });
                var array = Array.from(iterable, function (_ref30) {
                    var _ref31 = slicedToArray(_ref30, 1), mark = _ref31[0];
                    return mark;
                });
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(array);
            }
            /**
             * Get the block node after a descendant text node by `path`.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getNextBlock',
            value: function getNextBlock(path) {
                var _blocks = this.blocks({ path: path, onlyLeaves: true }), _blocks2 = slicedToArray(_blocks, 1), entry = _blocks2[0];
                var block = entry ? entry[0] : null;
                return block;
            }
            /**
             * Get the next node in the tree, returning siblings or ancestor siblings.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getNextNode',
            value: function getNextNode(path) {
                var iterable = this.createIterable({ path: path, downward: false });
                var _iterable = slicedToArray(iterable, 1), entry = _iterable[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get the next sibling of a node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getNextSibling',
            value: function getNextSibling(path) {
                var _siblings = this.siblings(path), _siblings2 = slicedToArray(_siblings, 1), entry = _siblings2[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get the text node after a descendant text node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getNextText',
            value: function getNextText(path) {
                var _texts9 = this.texts({ path: path }), _texts10 = slicedToArray(_texts9, 1), entry = _texts10[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get the offset for a descendant text node by `path` or `key`.
             *
             * @param {List|string} path
             * @return {Number}
             */
        }, {
            key: 'getOffset',
            value: function getOffset(path) {
                path = this.resolvePath(path);
                this.assertDescendant(path);
                // Calculate the offset of the nodes before the highest child.
                var index = path.first();
                var offset = this.nodes.slice(0, index).reduce(function (memo, n) {
                    return memo + n.text.length;
                }, 0);
                // Recurse if need be.
                var ret = path.size === 1 ? offset : offset + this.nodes.get(index).getOffset(PathUtils.drop(path));
                return ret;
            }
            /**
             * Get the offset from a `range`.
             *
             * @param {Range} range
             * @return {Number}
             */
        }, {
            key: 'getOffsetAtRange',
            value: function getOffsetAtRange(range) {
                range = this.resolveRange(range);
                if (range.isUnset) {
                    throw new Error('The range cannot be unset to calculcate its offset.');
                }
                if (range.isExpanded) {
                    throw new Error('The range must be collapsed to calculcate its offset.');
                }
                var _range5 = range, start = _range5.start;
                var offset = this.getOffset(start.path) + start.offset;
                return offset;
            }
            /**
             * Get the parent of a descendant node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getParent',
            value: function getParent(path) {
                path = this.resolvePath(path);
                if (!path)
                    return null;
                if (!path.size)
                    return null;
                var parentPath = PathUtils.lift(path);
                var parent = this.getNode(parentPath);
                return parent;
            }
            /**
             * Get the block node before a descendant text node by `path`.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getPreviousBlock',
            value: function getPreviousBlock(path) {
                var _blocks3 = this.blocks({
                    path: path,
                    onlyLeaves: true,
                    direction: 'backward'
                }), _blocks4 = slicedToArray(_blocks3, 1), entry = _blocks4[0];
                var block = entry ? entry[0] : null;
                return block;
            }
            /**
             * Get the previous node from a node in the tree.
             *
             * This will not only check for siblings but instead move up the tree
             * returning the previous ancestor if no sibling is found.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getPreviousNode',
            value: function getPreviousNode(path) {
                var iterable = this.createIterable({
                    path: path,
                    downward: false,
                    direction: 'backward'
                });
                var _iterable2 = slicedToArray(iterable, 1), entry = _iterable2[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get the previous sibling of a node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getPreviousSibling',
            value: function getPreviousSibling(path) {
                var _siblings3 = this.siblings(path, { direction: 'backward' }), _siblings4 = slicedToArray(_siblings3, 1), entry = _siblings4[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get the text node before a descendant text node.
             *
             * @param {List|String} path
             * @return {Node|Null}
             */
        }, {
            key: 'getPreviousText',
            value: function getPreviousText(path) {
                var _texts11 = this.texts({ path: path, direction: 'backward' }), _texts12 = slicedToArray(_texts11, 1), entry = _texts12[0];
                var node = entry ? entry[0] : null;
                return node;
            }
            /**
             * Get only the root block nodes in a `range`.
             *
             * @param {Range} range
             * @return {List}
             */
        }, {
            key: 'getRootBlocksAtRange',
            value: function getRootBlocksAtRange(range) {
                var iterable = this.blocks({ range: range, onlyRoots: true });
                var array = Array.from(iterable, function (_ref32) {
                    var _ref33 = slicedToArray(_ref32, 1), node = _ref33[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get only the root inline nodes in a `range`.
             *
             * @param {Range} range
             * @return {List}
             */
        }, {
            key: 'getRootInlinesAtRange',
            value: function getRootInlinesAtRange(range) {
                var iterable = this.inlines({ range: range, onlyRoots: true });
                var array = Array.from(iterable, function (_ref34) {
                    var _ref35 = slicedToArray(_ref34, 1), node = _ref35[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get the descendent text node at an `offset`.
             *
             * @param {String} offset
             * @return {Node|Null}
             */
        }, {
            key: 'getTextAtOffset',
            value: function getTextAtOffset(offset) {
                // PERF: Add a few shortcuts for the obvious cases.
                if (offset === 0)
                    return this.getFirstText();
                if (offset === this.text.length)
                    return this.getLastText();
                if (offset < 0 || offset > this.text.length)
                    return null;
                var length = 0;
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;
                try {
                    for (var _iterator7 = this.texts()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _ref36 = _step7.value;
                        var _ref37 = slicedToArray(_ref36, 1);
                        var node = _ref37[0];
                        length += node.text.length;
                        if (length > offset) {
                            return node;
                        }
                    }
                }
                catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    }
                    finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
                return null;
            }
            /**
             * Get the direction of the node's text.
             *
             * @return {String}
             */
        }, {
            key: 'getTextDirection',
            value: function getTextDirection() {
                var dir = direction__WEBPACK_IMPORTED_MODULE_8___default()(this.text);
                return dir === 'neutral' ? null : dir;
            }
            /**
             * Recursively get all of the child text nodes in order of appearance.
             *
             * @return {List<Node>}
             */
        }, {
            key: 'getTexts',
            value: function getTexts() {
                var iterable = this.texts();
                var array = Array.from(iterable, function (_ref38) {
                    var _ref39 = slicedToArray(_ref38, 1), node = _ref39[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Get all of the text nodes in a `range` as a List.
             *
             * @param {Range} range
             * @return {List<Node>}
             */
        }, {
            key: 'getTextsAtRange',
            value: function getTextsAtRange(range) {
                var iterable = this.texts({ range: range });
                var array = Array.from(iterable, function (_ref40) {
                    var _ref41 = slicedToArray(_ref40, 1), node = _ref41[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
            /**
             * Check if the node has block children.
             *
             * @return {Boolean}
             */
        }, {
            key: 'hasBlockChildren',
            value: function hasBlockChildren() {
                return !!(this.nodes && this.nodes.find(function (n) {
                    return n.object === 'block';
                }));
            }
            /**
             * Check if a child node exists.
             *
             * @param {List|String} path
             * @return {Boolean}
             */
        }, {
            key: 'hasChild',
            value: function hasChild(path) {
                var child = this.getChild(path);
                return !!child;
            }
            /**
             * Check if a node has inline children.
             *
             * @return {Boolean}
             */
        }, {
            key: 'hasInlineChildren',
            value: function hasInlineChildren() {
                return !!(this.nodes && this.nodes.find(function (n) {
                    return n.object === 'inline' || n.object === 'text';
                }));
            }
            /**
             * Recursively check if a child node exists.
             *
             * @param {List|String} path
             * @return {Boolean}
             */
        }, {
            key: 'hasDescendant',
            value: function hasDescendant(path) {
                var descendant = this.getDescendant(path);
                return !!descendant;
            }
            /**
             * Check if a node has a void parent.
             *
             * @param {List|String} path
             * @param {Editor} editor
             * @return {Boolean}
             */
        }, {
            key: 'hasVoidParent',
            value: function hasVoidParent(path, editor) {
                Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.hasVoidParent` method takes an `editor` instead of a `value`.');
                var closest = this.getClosestVoid(path, editor);
                return !!closest;
            }
            /**
             * Create an iteratable for all of the inlines of a node with `options`.
             *
             * @param {Options}
             * @return {Iterable}
             */
        }, {
            key: 'inlines',
            value: function inlines() {
                var _this = this;
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var onlyLeaves = options.onlyLeaves, onlyRoots = options.onlyRoots, onlyTypes = options.onlyTypes, _match2 = options.match, rest = objectWithoutProperties(options, ['onlyLeaves', 'onlyRoots', 'onlyTypes', 'match']);
                var iterable = this.descendants(_extends({
                    includeBlocks: false,
                    includeTexts: false,
                    includeDocument: false
                }, rest, {
                    match: function match(node, path) {
                        if (onlyTypes && !onlyTypes.includes(node.type)) {
                            return false;
                        }
                        else if (onlyLeaves && !node.isLeafInline()) {
                            return false;
                        }
                        else if (onlyRoots && _this.getParent(path).object !== 'block') {
                            return false;
                        }
                        else if (_match2 && !_match2(node, path)) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }));
                return iterable;
            }
            /**
             * Insert a `node`.
             *
             * @param {List|String} path
             * @param {Node} node
             * @return {Node}
             */
        }, {
            key: 'insertNode',
            value: function insertNode(path, node) {
                path = this.resolvePath(path);
                var index = path.last();
                var parentPath = PathUtils.lift(path);
                var parent = this.assertNode(parentPath);
                var nodes = parent.nodes.splice(index, 0, node);
                parent = parent.set('nodes', nodes);
                var ret = this.replaceNode(parentPath, parent);
                return ret;
            }
            /**
             * Insert `text` at `offset` in node by `path`.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @param {String} text
             * @return {Node}
             */
        }, {
            key: 'insertText',
            value: function insertText(path, offset, text) {
                path = this.resolvePath(path);
                var node = this.assertDescendant(path);
                node = node.insertText(offset, text);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Check whether the node is a leaf block.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isLeafBlock',
            value: function isLeafBlock() {
                if (this.object !== 'block') {
                    return false;
                }
                if (this.nodes.some(function (n) {
                    return n.object === 'block';
                })) {
                    return false;
                }
                return true;
            }
            /**
             * Check whether the node is a leaf inline.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isLeafInline',
            value: function isLeafInline() {
                if (this.object !== 'inline') {
                    return false;
                }
                if (this.nodes.some(function (n) {
                    return n.object === 'inline';
                })) {
                    return false;
                }
                return true;
            }
            /**
             * Check whether a descendant node is inside a `range` by `path`.
             *
             * @param {List|String} path
             * @param {Range} range
             * @return {Node}
             */
        }, {
            key: 'isInRange',
            value: function isInRange(path, range) {
                path = this.resolvePath(path);
                range = this.resolveRange(range);
                if (range.isUnset) {
                    return false;
                }
                var toStart = PathUtils.compare(path, range.start.path);
                var toEnd = PathUtils.compare(path, range.end.path);
                var isInRange = toStart !== -1 && toEnd !== 1;
                return isInRange;
            }
            /**
             * Map all child nodes, updating them in their parents. This method is
             * optimized to not return a new node if no changes are made.
             *
             * @param {Function} predicate
             * @return {Node}
             */
        }, {
            key: 'mapChildren',
            value: function mapChildren() {
                var _this2 = this;
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
                var nodes = this.nodes;
                nodes.forEach(function (node, i) {
                    var ret = predicate(node, i, _this2.nodes);
                    if (ret !== node)
                        nodes = nodes.set(ret.key, ret);
                });
                var ret = this.set('nodes', nodes);
                return ret;
            }
            /**
             * Map all descendant nodes, updating them in their parents. This method is
             * optimized to not return a new node if no changes are made.
             *
             * @param {Function} predicate
             * @return {Node}
             */
        }, {
            key: 'mapDescendants',
            value: function mapDescendants() {
                var _this3 = this;
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
                var nodes = this.nodes;
                nodes.forEach(function (node, index) {
                    var ret = node;
                    if (ret.object !== 'text')
                        ret = ret.mapDescendants(predicate);
                    ret = predicate(ret, index, _this3.nodes);
                    if (ret === node)
                        return;
                    nodes = nodes.set(index, ret);
                });
                var ret = this.set('nodes', nodes);
                return ret;
            }
            /**
             * Create an iteratable for all the marks in text nodes with `options`.
             *
             * @param {Options}
             * @return {Iterable}
             */
        }, {
            key: 'marks',
            value: function marks() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _options$onlyTypes = options.onlyTypes, onlyTypes = _options$onlyTypes === undefined ? null : _options$onlyTypes, match = options.match, rest = objectWithoutProperties(options, ['onlyTypes', 'match']);
                var texts = this.texts(rest);
                return defineProperty({}, Symbol.iterator, function () {
                    var iterator = texts[Symbol.iterator]();
                    var node = null;
                    var path = null;
                    var remaining = [];
                    var next = function next() {
                        if (remaining.length) {
                            var mark = remaining.shift();
                            if (onlyTypes && !onlyTypes.includes(mark.type)) {
                                return next();
                            }
                            else if (match && !match(mark, node, path)) {
                                return next();
                            }
                            return { value: [mark, node, path], done: false };
                        }
                        var _iterator$next = iterator.next(), value = _iterator$next.value, done = _iterator$next.done;
                        if (done) {
                            return { done: true };
                        }
                        var _value = slicedToArray(value, 2);
                        node = _value[0];
                        path = _value[1];
                        remaining = node.marks.toArray();
                        return next();
                    };
                    return { next: next };
                });
            }
            /**
             * Merge a node backwards its previous sibling.
             *
             * @param {List|Key} path
             * @return {Node}
             */
        }, {
            key: 'mergeNode',
            value: function mergeNode(path) {
                var b = this.assertNode(path);
                path = this.resolvePath(path);
                if (path.last() === 0) {
                    throw new Error('Unable to merge node because it has no previous sibling: ' + b);
                }
                var withPath = PathUtils.decrement(path);
                var a = this.assertNode(withPath);
                if (a.object !== b.object) {
                    throw new Error('Unable to merge two different kinds of nodes: ' + a + ' and ' + b);
                }
                var newNode = a.object === 'text' ? a.mergeText(b) : a.set('nodes', a.nodes.concat(b.nodes));
                var ret = this;
                ret = ret.removeNode(path);
                ret = ret.removeNode(withPath);
                ret = ret.insertNode(withPath, newNode);
                return ret;
            }
            /**
             * Move a node by `path` to `newPath`.
             *
             * A `newIndex` can be provided when move nodes by `key`, to account for not
             * being able to have a key for a location in the tree that doesn't exist yet.
             *
             * @param {List|Key} path
             * @param {List|Key} newPath
             * @param {Number} newIndex
             * @return {Node}
             */
        }, {
            key: 'moveNode',
            value: function moveNode(path, newPath) {
                var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var node = this.assertNode(path);
                path = this.resolvePath(path);
                newPath = this.resolvePath(newPath, newIndex);
                var newParentPath = PathUtils.lift(newPath);
                this.assertNode(newParentPath);
                // TODO: this is a bit hacky, re-creating the operation that led to this method being called
                // Alternative 1: pass the operation through from apply -> value.moveNode
                // Alternative 2: add a third property to the operation called "transformedNewPath", pass that through
                var op = Operation.create({
                    type: 'move_node',
                    path: path,
                    newPath: newPath
                });
                newPath = PathUtils.transform(path, op).first();
                var ret = this;
                ret = ret.removeNode(path);
                ret = ret.insertNode(newPath, node);
                return ret;
            }
            /**
             * Remove `mark` from text at `path`.
             *
             * @param {List} path
             * @param {Mark} mark
             * @return {Node}
             */
        }, {
            key: 'removeMark',
            value: function removeMark(path, mark) {
                path = this.resolvePath(path);
                var node = this.assertDescendant(path);
                node = node.removeMark(mark);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Remove a node.
             *
             * @param {List|String} path
             * @return {Node}
             */
        }, {
            key: 'removeNode',
            value: function removeNode(path) {
                this.assertDescendant(path);
                path = this.resolvePath(path);
                var deep = path.flatMap(function (x) {
                    return ['nodes', x];
                });
                var ret = this.deleteIn(deep);
                return ret;
            }
            /**
             * Remove `text` at `offset` in node.
             *
             * @param {List|Key} path
             * @param {Number} offset
             * @param {String} text
             * @return {Node}
             */
        }, {
            key: 'removeText',
            value: function removeText(path, offset, text) {
                var node = this.assertDescendant(path);
                node = node.removeText(offset, text.length);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Replace a `node` in the tree.
             *
             * @param {List|Key} path
             * @param {Node} node
             * @return {Node}
             */
        }, {
            key: 'replaceNode',
            value: function replaceNode(path, node) {
                path = this.resolvePath(path);
                if (!path) {
                    throw new Error('Unable to replace a node because it could not be found in the first place: ' + path);
                }
                if (!path.size)
                    return node;
                this.assertNode(path);
                var deep = path.flatMap(function (x) {
                    return ['nodes', x];
                });
                var ret = this.setIn(deep, node);
                return ret;
            }
            /**
             * Resolve a `annotation`, relative to the node, ensuring that the keys and
             * offsets in the annotation exist and that they are synced with the paths.
             *
             * @param {Annotation|Object} annotation
             * @return {Annotation}
             */
        }, {
            key: 'resolveAnnotation',
            value: function resolveAnnotation(annotation) {
                annotation = Annotation.create(annotation);
                annotation = annotation.normalize(this);
                return annotation;
            }
            /**
             * Resolve a `decoration`, relative to the node, ensuring that the keys and
             * offsets in the decoration exist and that they are synced with the paths.
             *
             * @param {Decoration|Object} decoration
             * @return {Decoration}
             */
        }, {
            key: 'resolveDecoration',
            value: function resolveDecoration(decoration) {
                decoration = Decoration.create(decoration);
                decoration = decoration.normalize(this);
                return decoration;
            }
            /**
             * Resolve a `point`, relative to the node, ensuring that the keys and
             * offsets in the point exist and that they are synced with the paths.
             *
             * @param {Point|Object} point
             * @return {Point}
             */
        }, {
            key: 'resolvePoint',
            value: function resolvePoint(point) {
                point = Point.create(point);
                point = point.normalize(this);
                return point;
            }
            /**
             * Resolve a `range`, relative to the node, ensuring that the keys and
             * offsets in the range exist and that they are synced with the paths.
             *
             * @param {Range|Object} range
             * @return {Range}
             */
        }, {
            key: 'resolveRange',
            value: function resolveRange(range) {
                range = Range.create(range);
                range = range.normalize(this);
                return range;
            }
            /**
             * Resolve a `selection`, relative to the node, ensuring that the keys and
             * offsets in the selection exist and that they are synced with the paths.
             *
             * @param {Selection|Object} selection
             * @return {Selection}
             */
        }, {
            key: 'resolveSelection',
            value: function resolveSelection(selection) {
                selection = Selection.create(selection);
                selection = selection.normalize(this);
                return selection;
            }
            /**
             * Set `properties` on a node.
             *
             * @param {List|String} path
             * @param {Object} properties
             * @return {Node}
             */
        }, {
            key: 'setNode',
            value: function setNode(path, properties) {
                var node = this.assertNode(path);
                node = node.merge(properties);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Set `properties` on `mark` on text at `offset` and `length` in node.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @param {Number} length
             * @param {Mark} mark
             * @param {Object} properties
             * @return {Node}
             */
        }, {
            key: 'setMark',
            value: function setMark(path, properties, newProperties) {
                path = this.resolvePath(path);
                var node = this.assertDescendant(path);
                node = node.setMark(properties, newProperties);
                var ret = this.replaceNode(path, node);
                return ret;
            }
            /**
             * Create an iteratable for the siblings in the tree at `path`.
             *
             * @param {List|Array} path
             * @return {Iterable}
             */
        }, {
            key: 'siblings',
            value: function siblings(path, options) {
                var iterable = this.createIterable(_extends({
                    path: path,
                    upward: false,
                    downward: false
                }, options));
                return iterable;
            }
            /**
             * Split a node by `path` at `position` with optional `properties` to apply
             * to the newly split node.
             *
             * @param {List|String} path
             * @param {Number} position
             * @param {Object} properties
             * @return {Node}
             */
        }, {
            key: 'splitNode',
            value: function splitNode(path, position, properties) {
                var child = this.assertNode(path);
                path = this.resolvePath(path);
                var a = void 0;
                var b = void 0;
                if (child.object === 'text') {
                    var _child$splitText = child.splitText(position);
                    var _child$splitText2 = slicedToArray(_child$splitText, 2);
                    a = _child$splitText2[0];
                    b = _child$splitText2[1];
                }
                else {
                    var befores = child.nodes.take(position);
                    var afters = child.nodes.skip(position);
                    a = child.set('nodes', befores);
                    b = child.set('nodes', afters).regenerateKey();
                }
                if (properties && child.object !== 'text') {
                    b = b.merge(properties);
                }
                var ret = this;
                ret = ret.removeNode(path);
                ret = ret.insertNode(path, b);
                ret = ret.insertNode(path, a);
                return ret;
            }
            /**
             * Create an iteratable for all the text node descendants.
             *
             * @param {Object} options
             * @return {Iterable}
             */
        }, {
            key: 'texts',
            value: function texts(options) {
                var iterable = this.descendants(_extends({
                    includeBlocks: false,
                    includeInlines: false,
                    includeDocument: false
                }, options));
                return iterable;
            }
            /**
             * Deprecated.
             */
        }, {
            key: 'getBlocksAtRange',
            value: function getBlocksAtRange(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getBlocksAtRange` method has been renamed to `getLeafBlocksAtRange`.');
                return this.getLeafBlocksAtRange(range);
            }
        }, {
            key: 'getBlocksAtRangeAsArray',
            value: function getBlocksAtRangeAsArray(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getBlocksAtRangeAsArray` method has been renamed to `getLeafBlocksAtRangeAsArray`.');
                return this.getLeafBlocksAtRangeAsArray(range);
            }
        }, {
            key: 'getInlinesAtRange',
            value: function getInlinesAtRange(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getInlinesAtRange` method has been renamed to `getLeafInlinesAtRange`.');
                return this.getLeafInlinesAtRange(range);
            }
        }, {
            key: 'getInlinesAtRangeAsArray',
            value: function getInlinesAtRangeAsArray(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getInlinesAtRangeAsArray` method has been renamed to `getLeafInlinesAtRangeAsArray`.');
                return this.getLeafInlinesAtRangeAsArray(range);
            }
        }, {
            key: 'getNextTextAndPath',
            value: function getNextTextAndPath(path) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getNextTextAndPath` method has been renamed to `getNextTextEntry`.');
                return this.getNextTextEntry(path);
            }
        }, {
            key: 'getNextDeepMatchingNodeAndPath',
            value: function getNextDeepMatchingNodeAndPath(path) {
                var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
                    return true;
                };
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getNextDeepMatchingNodeAndPath` method is deprecated.');
                var match = this.getNextMatchingNodeAndPath(path);
                if (!match)
                    return null;
                var _match3 = slicedToArray(match, 2), nextNode = _match3[0], nextPath = _match3[1];
                var childMatch = void 0;
                var assign = function assign() {
                    childMatch = nextNode.object !== 'text' && nextNode.findFirstDescendantAndPath(iterator, nextPath);
                    return childMatch;
                };
                while (assign(childMatch)) {
                    var _childMatch = childMatch;
                    var _childMatch2 = slicedToArray(_childMatch, 2);
                    nextNode = _childMatch2[0];
                    nextPath = _childMatch2[1];
                }
                if (!nextNode)
                    return null;
                return iterator(nextNode) ? [nextNode, nextPath] : this.getNextDeepMatchingNodeAndPath(match[1], iterator);
            }
        }, {
            key: 'getPreviousTextAndPath',
            value: function getPreviousTextAndPath(path) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getPreviousTextAndPath` method has been renamed to `getPreviousTextEntry`.');
                return this.getPreviousTextEntry(path);
            }
        }, {
            key: 'findFirstDescendantAndPath',
            value: function findFirstDescendantAndPath(iterator, pathToThisNode) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `findFirstDescendantAndPath` method is deprecated.');
                return this.findDescendantAndPath(iterator, pathToThisNode, false);
            }
        }, {
            key: 'getPreviousMatchingNodeAndPath',
            value: function getPreviousMatchingNodeAndPath(path) {
                var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
                    return true;
                };
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getPreviousMatchingNodeAndPath` method is deprecated.');
                if (!path)
                    return null;
                for (var i = path.size; i > 0; i--) {
                    var p = path.slice(0, i);
                    if (p.last() === 0)
                        continue;
                    var previousPath = PathUtils.decrement(p);
                    var previousNode = this.getNode(previousPath);
                    while (previousNode && !iterator(previousNode)) {
                        previousPath = PathUtils.decrement(previousPath);
                        previousNode = this.getNode(previousPath);
                    }
                    if (previousNode)
                        return [previousNode, previousPath];
                }
                return null;
            }
        }, {
            key: 'getPreviousDeepMatchingNodeAndPath',
            value: function getPreviousDeepMatchingNodeAndPath(path) {
                var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
                    return true;
                };
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getPreviousDeepMatchingNodeAndPath` method is deprecated.');
                var match = this.getPreviousMatchingNodeAndPath(path);
                if (!match)
                    return null;
                var _match4 = slicedToArray(match, 2), previousNode = _match4[0], previousPath = _match4[1];
                var childMatch = void 0;
                var assign = function assign() {
                    childMatch = previousNode.object !== 'text' && previousNode.findLastDescendantAndPath(iterator, previousPath);
                    return childMatch;
                };
                while (assign(childMatch)) {
                    var _childMatch3 = childMatch;
                    var _childMatch4 = slicedToArray(_childMatch3, 2);
                    previousNode = _childMatch4[0];
                    previousPath = _childMatch4[1];
                }
                if (!previousNode)
                    return null;
                return iterator(previousNode) ? [previousNode, previousPath] : this.getPreviousDeepMatchingNodeAndPath(match[1], iterator);
            }
        }, {
            key: 'findLastDescendantAndPath',
            value: function findLastDescendantAndPath(iterator, pathToThisNode) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `findLastDescendantAndPath` method is deprecated.');
                return this.findDescendantAndPath(iterator, pathToThisNode, true);
            }
        }, {
            key: 'findDescendantAndPath',
            value: function findDescendantAndPath(iterator) {
                var pathToThisNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PathUtils.create([]);
                var findLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `findDescendantAndPath` method is deprecated.');
                var found = void 0;
                var foundPath = void 0;
                this.forEachDescendantWithPath(function (node, path, nodes) {
                    if (iterator(node, path, nodes)) {
                        found = node;
                        foundPath = path;
                        return false;
                    }
                }, pathToThisNode, findLast);
                return found ? [found, foundPath] : null;
            }
        }, {
            key: 'forEachDescendantWithPath',
            value: function forEachDescendantWithPath(iterator) {
                var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PathUtils.create([]);
                var findLast = arguments[2];
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `forEachDescendantWithPath` method is deprecated.');
                var nodes = this.nodes;
                var ret = void 0;
                if (findLast)
                    nodes = nodes.reverse();
                nodes.forEach(function (child, i) {
                    var childPath = path.concat(i);
                    if (iterator(child, childPath, nodes) === false) {
                        ret = false;
                        return false;
                    }
                    if (child.object !== 'text') {
                        ret = child.forEachDescendantWithPath(iterator, childPath, findLast);
                        return ret;
                    }
                });
                return ret;
            }
        }, {
            key: 'getNextMatchingNodeAndPath',
            value: function getNextMatchingNodeAndPath(path) {
                var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
                    return true;
                };
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getNextMatchingNodeAndPath` method is deprecated.');
                if (!path)
                    return null;
                for (var i = path.size; i > 0; i--) {
                    var p = path.slice(0, i);
                    var nextPath = PathUtils.increment(p);
                    var nextNode = this.getNode(nextPath);
                    while (nextNode && !iterator(nextNode)) {
                        nextPath = PathUtils.increment(nextPath);
                        nextNode = this.getNode(nextPath);
                    }
                    if (nextNode)
                        return [nextNode, nextPath];
                }
                return null;
            }
        }, {
            key: 'getSelectionIndexes',
            value: function getSelectionIndexes(range) {
                var isSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getSelectionIndexes` method is deprecated.');
                var start = range.start, end = range.end;
                // PERF: if we're not selected, we can exit early.
                if (!isSelected) {
                    return null;
                }
                // PERF: if we've been given an invalid selection we can exit early.
                if (range.isUnset) {
                    return null;
                }
                // PERF: if the start and end keys are the same, just check for the child
                // that contains that single key.
                if (start.path.equals(end.path)) {
                    var child = this.getFurthestAncestor(start.path);
                    var index = child ? this.nodes.indexOf(child) : null;
                    return { start: index, end: index + 1 };
                }
                // Otherwise, check all of the children...
                var startIndex = null;
                var endIndex = null;
                this.nodes.forEach(function (child, i) {
                    if (child.object === 'text') {
                        if (startIndex == null && child.key === start.key)
                            startIndex = i;
                        if (endIndex == null && child.key === end.key)
                            endIndex = i + 1;
                    }
                    else {
                        if (startIndex == null && child.hasDescendant(start.key))
                            startIndex = i;
                        if (endIndex == null && child.hasDescendant(end.key))
                            endIndex = i + 1;
                    }
                    // PERF: exit early if both start and end have been found.
                    return startIndex == null || endIndex == null;
                });
                if (isSelected && startIndex == null) {
                    startIndex = 0;
                }
                if (isSelected && endIndex == null) {
                    endIndex = this.nodes.size;
                }
                if (startIndex == null) {
                    return null;
                }
                return { start: startIndex, end: endIndex };
            }
        }, {
            key: 'getTextsBetweenPositionsAsArray',
            value: function getTextsBetweenPositionsAsArray(startPath, endPath) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getTextsBetweenPositionsAsArray` method is deprecated.');
                startPath = this.resolvePath(startPath);
                endPath = this.resolvePath(endPath);
                return this.getTextsBetweenPathPositionsAsArray(startPath, endPath);
            }
        }, {
            key: 'getOrderedMarksBetweenPositions',
            value: function getOrderedMarksBetweenPositions(startPath, startOffset, endPath, endOffset) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getOrderedMarksBetweenPositions` method is deprecated.');
                startPath = this.resolvePath(startPath);
                endPath = this.resolvePath(endPath);
                var startText = this.getDescendant(startPath);
                // PERF: if the paths are equal, we can just use the start.
                if (PathUtils.isEqual(startPath, endPath)) {
                    return startText.marks;
                }
                var texts = this.getTextsBetweenPathPositionsAsArray(startPath, endPath);
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])().withMutations(function (result) {
                    texts.forEach(function (text) {
                        result.union(text.marks);
                    });
                });
            }
        }, {
            key: 'getTextsBetweenPathPositionsAsArray',
            value: function getTextsBetweenPathPositionsAsArray(startPath, endPath) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getTextsBetweenPathPositionsAsArray` method is deprecated.');
                // PERF: the most common case is when the range is in a single text node,
                // where we can avoid a lot of iterating of the tree.
                if (startPath && endPath && PathUtils.isEqual(startPath, endPath)) {
                    return [this.getDescendant(startPath)];
                }
                else if (!startPath && !endPath) {
                    return this.getTextsAsArray();
                }
                var startIndex = startPath ? startPath.get(0, 0) : 0;
                var endIndex = endPath ? endPath.get(0, this.nodes.size - 1) : this.nodes.size - 1;
                var array = [];
                this.nodes.slice(startIndex, endIndex + 1).forEach(function (node, i) {
                    if (node.object === 'text') {
                        array.push(node);
                    }
                    else {
                        // For the node at start and end of this list, we want to provide a start and end path
                        // For other nodes, we can just get all their text nodes, they are between the paths
                        var childStartPath = startPath && i === 0 ? PathUtils.drop(startPath) : null;
                        var childEndPath = endPath && i === endIndex - startIndex ? PathUtils.drop(endPath) : null;
                        array = array.concat(node.getTextsBetweenPathPositionsAsArray(childStartPath, childEndPath));
                    }
                });
                return array;
            }
        }, {
            key: 'getFurthestAncestor',
            value: function getFurthestAncestor(path) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getFurthestAncestor` method has been renamed to `getFurthestChild`.');
                return this.getFurthestChild(path);
            }
        }, {
            key: 'getLeafBlocksAtRangeAsArray',
            value: function getLeafBlocksAtRangeAsArray(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getLeafBlocksAtRangeAsArray` method is deprecated.');
                range = this.resolveRange(range);
                if (range.isUnset)
                    return [];
                var _range6 = range, start = _range6.start, end = _range6.end;
                return this.getLeafBlocksBetweenPathPositionsAsArray(start.path, end.path);
            }
        }, {
            key: 'getLeafBlocksBetweenPathPositionsAsArray',
            value: function getLeafBlocksBetweenPathPositionsAsArray(startPath, endPath) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getLeafBlocksBetweenPathPositionsAsArray` method is deprecated.');
                // PERF: the most common case is when the range is in a single block node,
                // where we can avoid a lot of iterating of the tree.
                if (startPath && endPath && PathUtils.isEqual(startPath, endPath)) {
                    return [this.getClosestBlock(startPath)];
                }
                else if (!startPath && !endPath) {
                    return this.getBlocksAsArray();
                }
                var startIndex = startPath ? startPath.get(0, 0) : 0;
                var endIndex = endPath ? endPath.get(0, this.nodes.size - 1) : this.nodes.size - 1;
                var array = [];
                this.nodes.slice(startIndex, endIndex + 1).forEach(function (node, i) {
                    if (node.object !== 'block') {
                        return;
                    }
                    else if (node.isLeafBlock()) {
                        array.push(node);
                    }
                    else {
                        var childStartPath = startPath && i === 0 ? PathUtils.drop(startPath) : null;
                        var childEndPath = endPath && i === endIndex - startIndex ? PathUtils.drop(endPath) : null;
                        array = array.concat(node.getLeafBlocksBetweenPathPositionsAsArray(childStartPath, childEndPath));
                    }
                });
                return array;
            }
        }, {
            key: 'getBlocksAsArray',
            value: function getBlocksAsArray() {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getBlocksAsArray` method is deprecated.');
                var iterable = this.blocks({ onlyLeaves: true });
                var array = Array.from(iterable, function (_ref43) {
                    var _ref44 = slicedToArray(_ref43, 1), node = _ref44[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getBlocksByTypeAsArray',
            value: function getBlocksByTypeAsArray(type) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getBlocksByTypeAsArray` method is deprecated.');
                var iterable = this.blocks({ onlyLeaves: true, onlyTypes: [type] });
                var array = Array.from(iterable, function (_ref45) {
                    var _ref46 = slicedToArray(_ref45, 1), node = _ref46[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getFurthestOnlyChildAncestor',
            value: function getFurthestOnlyChildAncestor(path) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getFurthestOnlyChildAncestor` method is deprecated.');
                var ancestors = this.getAncestors(path);
                if (!ancestors)
                    return null;
                var furthest = ancestors.rest().reverse().takeUntil(function (p) {
                    return p.nodes.size > 1;
                }).last();
                return furthest || null;
            }
        }, {
            key: 'getInlinesAsArray',
            value: function getInlinesAsArray() {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getInlinesAsArray` method is deprecated.');
                var array = Array.from(this.inlines({ onlyLeaves: true }), function (_ref47) {
                    var _ref48 = slicedToArray(_ref47, 1), node = _ref48[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getInlinesByTypeAsArray',
            value: function getInlinesByTypeAsArray(type) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getInlinesByTypeAsArray` method is deprecated.');
                var array = Array.from(this.inlines({ onlyLeaves: true, onlyTypes: [type] }), function (_ref49) {
                    var _ref50 = slicedToArray(_ref49, 1), node = _ref50[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getLeafInlinesAtRangeAsArray',
            value: function getLeafInlinesAtRangeAsArray(range) {
                var _this4 = this;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getLeafInlinesAtRangeAsArray` method is deprecated.');
                range = this.resolveRange(range);
                if (range.isUnset)
                    return [];
                var array = this.getTextsAtRangeAsArray(range).map(function (text) {
                    return _this4.getClosestInline(text.key);
                }).filter(function (exists) {
                    return exists;
                });
                return array;
            }
        }, {
            key: 'getOrderedMarks',
            value: function getOrderedMarks() {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getOrderedMarks` method has been folded into `getMarks`, which will now return an ordered set.');
                return this.getMarks();
            }
        }, {
            key: 'getOrderedMarksAtRange',
            value: function getOrderedMarksAtRange(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getOrderedMarksAtRange` method has been folded into `getMarksAtRange`, which will now return an ordered set.');
                return this.getMarksAtRange(range);
            }
        }, {
            key: 'getOrderedMarksByType',
            value: function getOrderedMarksByType(type) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getOrderedMarksByType` method has been folded into `getMarksByType`, which will now return an ordered set.');
                return this.getMarksByType(type);
            }
        }, {
            key: 'getMarksByTypeAsArray',
            value: function getMarksByTypeAsArray(type) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getMarksByTypeAsArray` method is deprecated.');
                var array = this.nodes.reduce(function (memo, node) {
                    return node.object === 'text' ? memo.concat(node.marks.filter(function (m) {
                        return m.type === type;
                    })) : memo.concat(node.getMarksByTypeAsArray(type));
                }, []);
                return array;
            }
        }, {
            key: 'getMarksAsArray',
            value: function getMarksAsArray() {
                var _ref53;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getMarksAsArray` method is deprecated.');
                var result = [];
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;
                try {
                    for (var _iterator8 = this.texts()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var _ref51 = _step8.value;
                        var _ref52 = slicedToArray(_ref51, 1);
                        var node = _ref52[0];
                        result.push(node.marks.toArray());
                    }
                    // PERF: use only one concat rather than multiple for speed.
                }
                catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                }
                finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    }
                    finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
                var array = (_ref53 = []).concat.apply(_ref53, result);
                return array;
            }
        }, {
            key: 'getRootInlinesAtRangeAsArray',
            value: function getRootInlinesAtRangeAsArray(range) {
                var _this5 = this;
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getRootInlinesAtRangeAsArray` method is deprecated.');
                range = this.resolveRange(range);
                if (range.isUnset)
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
                var array = this.getTextsAtRangeAsArray(range).map(function (text) {
                    return _this5.getFurthestInline(text.key);
                }).filter(function (exists) {
                    return exists;
                });
                return array;
            }
        }, {
            key: 'getTextsAsArray',
            value: function getTextsAsArray() {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getTextsAsArray` method is deprecated.');
                var iterable = this.texts();
                var array = Array.from(iterable, function (_ref54) {
                    var _ref55 = slicedToArray(_ref54, 1), node = _ref55[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getTextsAtRangeAsArray',
            value: function getTextsAtRangeAsArray(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getTextsAtRangeAsArray` method is deprecated.');
                var iterable = this.texts({ range: range });
                var array = Array.from(iterable, function (_ref56) {
                    var _ref57 = slicedToArray(_ref56, 1), node = _ref57[0];
                    return node;
                });
                return array;
            }
        }, {
            key: 'getMarksAtPosition',
            value: function getMarksAtPosition(path, offset) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getMarksAtPosition` method is deprecated.');
                path = this.resolvePath(path);
                var text = this.getDescendant(path);
                var currentMarks = text.marks;
                if (offset !== 0) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(currentMarks);
                }
                var closestBlock = this.getClosestBlock(path);
                // insert mark for empty block; the empty block are often created by split node or add marks in a range including empty blocks
                if (closestBlock.text === '') {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(currentMarks);
                }
                var _texts13 = this.texts({ path: path, direction: 'backward' }), _texts14 = slicedToArray(_texts13, 1), previous = _texts14[0];
                if (!previous) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])();
                }
                var _previous2 = slicedToArray(previous, 2), previousText = _previous2[0], previousPath = _previous2[1];
                if (closestBlock.hasDescendant(previousPath)) {
                    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(previousText.marks);
                }
                return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"])(currentMarks);
            }
        }, {
            key: 'getNodesAtRange',
            value: function getNodesAtRange(range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `getNodesAtRange` method has been renamed to `getDescendantsAtRange`.');
                var iterable = this.descendants({ range: range });
                var array = Array.from(iterable, function (_ref58) {
                    var _ref59 = slicedToArray(_ref58, 1), node = _ref59[0];
                    return node;
                });
                var list = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(array);
                return list;
            }
        }, {
            key: 'isNodeInRange',
            value: function isNodeInRange(path, range) {
                Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.47, the `isNodeInRange` method has been renamed to `isInRange`.');
                return this.isInRange(path, range);
            }
        }, {
            key: 'text',
            /**
             * Get the concatenated text of the node.
             *
             * @return {String}
             */
            get: function get$$1() {
                return this.getText();
            }
        }]);
    return ElementInterface;
}();
/**
 * Mix in assertion variants.
 */
var ASSERTS = ['Child', 'Depth', 'Descendant', 'Node', 'Parent', 'Path'];
var _loop$1 = function _loop(method) {
    ElementInterface.prototype['assert' + method] = function (path) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }
        var ret = this['get' + method].apply(this, [path].concat(args));
        if (ret == null) {
            throw new Error('`Node.assert' + method + '` could not find node with path or key: ' + path);
        }
        return ret;
    };
};
var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;
try {
    for (var _iterator9 = ASSERTS[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var method$1 = _step9.value;
        _loop$1(method$1);
    }
    /**
     * Memoize read methods.
     */
}
catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
}
finally {
    try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
            _iterator9.return();
        }
    }
    finally {
        if (_didIteratorError9) {
            throw _iteratorError9;
        }
    }
}
memoize(ElementInterface.prototype, ['getBlocksAsArray', 'getBlocksByTypeAsArray', 'getDecorations', 'getFragmentAtRange', 'getInlinesAsArray', 'getInlinesByTypeAsArray', 'getInsertMarksAtRange', 'getLeafBlocksAtRangeAsArray', 'getLeafBlocksAtRangeAsArray', 'getLeafInlinesAtRangeAsArray', 'getMarksAsArray', 'getMarksAtPosition', 'getMarksByTypeAsArray', 'getNextBlock', 'getNodesAtRange', 'getNodesToPathsMap', 'getOffset', 'getOffsetAtRange', 'getOrderedMarksBetweenPositions', 'getPreviousBlock', 'getRootBlocksAtRange', 'getRootInlinesAtRangeAsArray', 'getTextAtOffset', 'getTextDirection', 'getTextsAsArray', 'getTextsBetweenPathPositionsAsArray']);
/**
 * Mix in the element interface.
 */
mixin(ElementInterface, [Block, Document, Inline]);
/**
 * The interface that `Decoration`, `Range` and `Selection` all implement, to make
 * working anchor and focus points easier.
 *
 * @type {Class}
 */
var RangeInterface = function () {
    function RangeInterface() {
        classCallCheck(this, RangeInterface);
    }
    createClass(RangeInterface, [{
            key: 'flip',
            /**
             * Flip the range.
             *
             * @return {Range}
             */
            value: function flip() {
                var range = this.setPoints([this.focus, this.anchor]);
                return range;
            }
            /**
             * Move the anchor and focus offsets forward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveForward',
            value: function moveForward(n) {
                return this.updatePoints(function (point) {
                    return point.moveForward(n);
                });
            }
            /**
             * Move the anchor and focus offsets backward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveBackward',
            value: function moveBackward(n) {
                return this.updatePoints(function (point) {
                    return point.moveBackward(n);
                });
            }
            /**
             * Move the anchor offset backward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveAnchorBackward',
            value: function moveAnchorBackward(n) {
                var range = this.setAnchor(this.anchor.moveBackward(n));
                return range;
            }
            /**
             * Move the anchor offset forward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveAnchorForward',
            value: function moveAnchorForward(n) {
                var range = this.setAnchor(this.anchor.moveForward(n));
                return range;
            }
            /**
             * Move the range's anchor point to a new `path` and `offset`.
             *
             * Optionally, the `path` can be a key string, or omitted entirely in which
             * case it would be the offset number.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @return {Range}
             */
        }, {
            key: 'moveAnchorTo',
            value: function moveAnchorTo(path, offset) {
                var range = this.setAnchor(this.anchor.moveTo(path, offset));
                return range;
            }
            /**
             * Move the range's anchor point to the start of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveAnchorToStartOfNode',
            value: function moveAnchorToStartOfNode(node) {
                var range = this.setAnchor(this.anchor.moveToStartOfNode(node));
                return range;
            }
            /**
             * Move the range's anchor point to the end of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveAnchorToEndOfNode',
            value: function moveAnchorToEndOfNode(node) {
                var range = this.setAnchor(this.anchor.moveToEndOfNode(node));
                return range;
            }
            /**
             * Move the end offset backward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveEndBackward',
            value: function moveEndBackward(n) {
                var range = this.setEnd(this.end.moveBackward(n));
                return range;
            }
            /**
             * Move the end offset forward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveEndForward',
            value: function moveEndForward(n) {
                var range = this.setEnd(this.end.moveForward(n));
                return range;
            }
            /**
             * Move the range's end point to a new `path` and `offset`.
             *
             * Optionally, the `path` can be a key string, or omitted entirely in which
             * case it would be the offset number.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @return {Range}
             */
        }, {
            key: 'moveEndTo',
            value: function moveEndTo(path, offset) {
                var range = this.setEnd(this.end.moveTo(path, offset));
                return range;
            }
            /**
             * Move the range's end point to the start of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveEndToStartOfNode',
            value: function moveEndToStartOfNode(node) {
                var range = this.setEnd(this.end.moveToStartOfNode(node));
                return range;
            }
            /**
             * Move the range's end point to the end of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveEndToEndOfNode',
            value: function moveEndToEndOfNode(node) {
                var range = this.setEnd(this.end.moveToEndOfNode(node));
                return range;
            }
            /**
             * Move the focus offset backward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveFocusBackward',
            value: function moveFocusBackward(n) {
                var range = this.setFocus(this.focus.moveBackward(n));
                return range;
            }
            /**
             * Move the focus offset forward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveFocusForward',
            value: function moveFocusForward(n) {
                var range = this.setFocus(this.focus.moveForward(n));
                return range;
            }
            /**
             * Move the range's focus point to a new `path` and `offset`.
             *
             * Optionally, the `path` can be a key string, or omitted entirely in which
             * case it would be the offset number.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @return {Range}
             */
        }, {
            key: 'moveFocusTo',
            value: function moveFocusTo(path, offset) {
                var range = this.setFocus(this.focus.moveTo(path, offset));
                return range;
            }
            /**
             * Move the range's focus point to the start of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveFocusToStartOfNode',
            value: function moveFocusToStartOfNode(node) {
                var range = this.setFocus(this.focus.moveToStartOfNode(node));
                return range;
            }
            /**
             * Move the range's focus point to the end of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveFocusToEndOfNode',
            value: function moveFocusToEndOfNode(node) {
                var range = this.setFocus(this.focus.moveToEndOfNode(node));
                return range;
            }
            /**
             * Move the start offset backward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveStartBackward',
            value: function moveStartBackward(n) {
                var range = this.setStart(this.start.moveBackward(n));
                return range;
            }
            /**
             * Move the start offset forward `n` characters.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveStartForward',
            value: function moveStartForward(n) {
                var range = this.setStart(this.start.moveForward(n));
                return range;
            }
            /**
             * Move the range's start point to a new `path` and `offset`.
             *
             * Optionally, the `path` can be a key string, or omitted entirely in which
             * case it would be the offset number.
             *
             * @param {List|String} path
             * @param {Number} offset
             * @return {Range}
             */
        }, {
            key: 'moveStartTo',
            value: function moveStartTo(path, offset) {
                var range = this.setStart(this.start.moveTo(path, offset));
                return range;
            }
            /**
             * Move the range's start point to the start of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveStartToStartOfNode',
            value: function moveStartToStartOfNode(node) {
                var range = this.setStart(this.start.moveToStartOfNode(node));
                return range;
            }
            /**
             * Move the range's start point to the end of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveStartToEndOfNode',
            value: function moveStartToEndOfNode(node) {
                var range = this.setStart(this.start.moveToEndOfNode(node));
                return range;
            }
            /**
             * Move range's points to a new `path` and `offset`.
             *
             * @param {Number} n
             * @return {Range}
             */
        }, {
            key: 'moveTo',
            value: function moveTo(path, offset) {
                return this.updatePoints(function (point) {
                    return point.moveTo(path, offset);
                });
            }
            /**
             * Move the focus point to the anchor point.
             *
             * @return {Range}
             */
        }, {
            key: 'moveToAnchor',
            value: function moveToAnchor() {
                var range = this.setFocus(this.anchor);
                return range;
            }
            /**
             * Move the start point to the end point.
             *
             * @return {Range}
             */
        }, {
            key: 'moveToEnd',
            value: function moveToEnd() {
                var range = this.setStart(this.end);
                return range;
            }
            /**
             * Move the range's points to the end of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveToEndOfNode',
            value: function moveToEndOfNode(node) {
                return this.updatePoints(function (point) {
                    return point.moveToEndOfNode(node);
                });
            }
            /**
             * Move the anchor point to the focus point.
             *
             * @return {Range}
             */
        }, {
            key: 'moveToFocus',
            value: function moveToFocus() {
                var range = this.setAnchor(this.focus);
                return range;
            }
            /**
             * Move to the entire range of `start` and `end` nodes.
             *
             * @param {Node} start
             * @param {Node} end (optional)
             * @return {Range}
             */
        }, {
            key: 'moveToRangeOfNode',
            value: function moveToRangeOfNode(start) {
                var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
                var range = this.setPoints([this.anchor.moveToStartOfNode(start), this.focus.moveToEndOfNode(end)]);
                return range;
            }
            /**
             * Move the end point to the start point.
             *
             * @return {Range}
             */
        }, {
            key: 'moveToStart',
            value: function moveToStart() {
                var range = this.setEnd(this.start);
                return range;
            }
            /**
             * Move the range's points to the start of a `node`.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'moveToStartOfNode',
            value: function moveToStartOfNode(node) {
                return this.updatePoints(function (point) {
                    return point.moveToStartOfNode(node);
                });
            }
            /**
             * Normalize the range, relative to a `node`, ensuring that the anchor
             * and focus nodes of the range always refer to leaf text nodes.
             *
             * @param {Node} node
             * @return {Range}
             */
        }, {
            key: 'normalize',
            value: function normalize(node) {
                return this.updatePoints(function (point) {
                    return point.normalize(node);
                });
            }
            /**
             * Set the anchor point to a new `anchor`.
             *
             * @param {Point} anchor
             * @return {Range}
             */
        }, {
            key: 'setAnchor',
            value: function setAnchor(anchor) {
                var range = this.set('anchor', anchor);
                return range;
            }
            /**
             * Set the end point to a new `point`.
             *
             * @param {Point} point
             * @return {Range}
             */
        }, {
            key: 'setEnd',
            value: function setEnd(point) {
                var range = this.isBackward ? this.setAnchor(point) : this.setFocus(point);
                return range;
            }
            /**
             * Set the focus point to a new `focus`.
             *
             * @param {Point} focus
             * @return {Range}
             */
        }, {
            key: 'setFocus',
            value: function setFocus(focus) {
                var range = this.set('focus', focus);
                return range;
            }
            /**
             * Set the anchor and focus points to new `values`.
             *
             * @param {Array<Point>} values
             * @return {Range}
             */
        }, {
            key: 'setPoints',
            value: function setPoints(values) {
                var _values = slicedToArray(values, 2), anchor = _values[0], focus = _values[1];
                var range = this.set('anchor', anchor).set('focus', focus);
                return range;
            }
            /**
             * Set the anchor and focus points with `updater` callback
             *
             * @param {Function} updater
             * @return {Range}
             */
        }, {
            key: 'updatePoints',
            value: function updatePoints(updater) {
                var anchor = this.anchor, focus = this.focus;
                anchor = updater(anchor);
                focus = updater(focus);
                return this.merge({ anchor: anchor, focus: focus });
            }
            /**
             * Set the start point to a new `point`.
             *
             * @param {Point} point
             * @return {Range}
             */
        }, {
            key: 'setStart',
            value: function setStart(point) {
                var range = this.isBackward ? this.setFocus(point) : this.setAnchor(point);
                return range;
            }
            /**
             * Set new `properties` on the range.
             *
             * @param {Object|Range} properties
             * @return {Range}
             */
        }, {
            key: 'setProperties',
            value: function setProperties(properties) {
                properties = Range.createProperties(properties);
                var _properties = properties, anchor = _properties.anchor, focus = _properties.focus, props = objectWithoutProperties(_properties, ['anchor', 'focus']);
                if (anchor) {
                    props.anchor = Point.create(anchor);
                }
                if (focus) {
                    props.focus = Point.create(focus);
                }
                var range = this.merge(props);
                return range;
            }
            /**
             * Return a JSON representation of the range.
             *
             * @param {Object} options
             * @return {Object}
             */
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var object = {
                    object: this.object,
                    anchor: this.anchor.toJSON(options),
                    focus: this.focus.toJSON(options)
                };
                return object;
            }
            /**
             * Return a `Range` instance from any range-like instance.
             *
             * @return {Range}
             */
        }, {
            key: 'toRange',
            value: function toRange() {
                var properties = Range.createProperties(this);
                var range = Range.create(properties);
                return range;
            }
            /**
             * Unset the range.
             *
             * @return {Range}
             */
        }, {
            key: 'unset',
            value: function unset() {
                var range = this.updatePoints(function (p) {
                    return p.unset();
                });
                return range;
            }
        }, {
            key: 'isCollapsed',
            /**
             * Check whether the range is collapsed.
             *
             * @return {Boolean}
             */
            get: function get$$1() {
                return this.anchor === this.focus || this.anchor.key === this.focus.key && this.anchor.offset === this.focus.offset;
            }
            /**
             * Check whether the range is expanded.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isExpanded',
            get: function get$$1() {
                return !this.isCollapsed;
            }
            /**
             * Check whether the range is backward.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isBackward',
            get: function get$$1() {
                var isUnset = this.isUnset, anchor = this.anchor, focus = this.focus;
                if (isUnset) {
                    return null;
                }
                if (anchor.key === focus.key) {
                    return anchor.offset > focus.offset;
                }
                var isBackward = PathUtils.isBefore(focus.path, anchor.path);
                return isBackward;
            }
            /**
             * Check whether the range is forward.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isForward',
            get: function get$$1() {
                var isBackward = this.isBackward;
                var isForward = isBackward == null ? null : !isBackward;
                return isForward;
            }
            /**
             * Check whether the range isn't set.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isUnset',
            get: function get$$1() {
                var anchor = this.anchor, focus = this.focus;
                var isUnset = anchor.isUnset || focus.isUnset;
                return isUnset;
            }
            /**
             * Check whether the range is set.
             *
             * @return {Boolean}
             */
        }, {
            key: 'isSet',
            get: function get$$1() {
                return !this.isUnset;
            }
            /**
             * Get the start point.
             *
             * @return {String}
             */
        }, {
            key: 'start',
            get: function get$$1() {
                return this.isBackward ? this.focus : this.anchor;
            }
            /**
             * Get the end point.
             *
             * @return {String}
             */
        }, {
            key: 'end',
            get: function get$$1() {
                return this.isBackward ? this.anchor : this.focus;
            }
        }]);
    return RangeInterface;
}();
/**
 * Mix in the range interface.
 *
 * @param {Record}
 */
mixin(RangeInterface, [Annotation, Decoration, Range, Selection]);
var index = {
    Annotation: Annotation,
    Block: Block,
    Change: Change,
    Data: Data,
    Decoration: Decoration,
    Document: Document,
    Editor: Editor,
    Inline: Inline,
    KeyUtils: KeyUtils,
    Leaf: Leaf$1,
    Mark: Mark,
    Node: Node,
    Operation: Operation,
    PathUtils: PathUtils,
    Point: Point,
    Range: Range,
    resetMemoization: resetMemoization,
    Selection: Selection,
    Text: Text,
    TextUtils: TextUtils,
    useMemoization: useMemoization,
    Value: Value
};
/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/slate/node_modules/debug/src/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/slate/node_modules/debug/src/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) { return typeof obj; };
}
else {
    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
} return _typeof(obj); }
/* eslint-env browser */
/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */
exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
    } // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */
function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log() {
    var _console;
    // This hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        }
        else {
            exports.storage.removeItem('debug');
        }
    }
    catch (error) { // Swallow
        // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
    var r;
    try {
        r = exports.storage.getItem('debug');
    }
    catch (error) { } // Swallow
    // XXX (@Qix-) should we be logging these?
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */
function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    }
    catch (error) { // Swallow
        // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __webpack_require__(/*! ./common */ "./node_modules/slate/node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */
formatters.j = function (v) {
    try {
        return JSON.stringify(v);
    }
    catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/slate/node_modules/debug/src/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/slate/node_modules/debug/src/common.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
    Object.keys(env).forEach(function (key) {
        createDebug[key] = env[key];
    });
    /**
    * Active `debug` instances.
    */
    createDebug.instances = [];
    /**
    * The currently active debug mode names, and names to skip.
    */
    createDebug.names = [];
    createDebug.skips = [];
    /**
    * Map of special "%n" handling functions, for the debug "format" argument.
    *
    * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    */
    createDebug.formatters = {};
    /**
    * Selects a color for a debug namespace
    * @param {String} namespace The namespace string for the for the debug instance to be colored
    * @return {Number|String} An ANSI color code for the given namespace
    * @api private
    */
    function selectColor(namespace) {
        var hash = 0;
        for (var i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
    * Create a debugger with the given `namespace`.
    *
    * @param {String} namespace
    * @return {Function}
    * @api public
    */
    function createDebug(namespace) {
        var prevTime;
        function debug() {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            var self = debug; // Set `diff` timestamp
            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            } // Apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return match;
                }
                index++;
                var formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    var val = args[index];
                    match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            }); // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        createDebug.instances.push(debug);
        return debug;
    }
    function destroy() {
        var index = createDebug.instances.indexOf(this);
        if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
        }
        return false;
    }
    function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    }
    /**
    * Enables a debug mode by namespaces. This can include modes
    * separated by a colon and wildcards.
    *
    * @param {String} namespaces
    * @api public
    */
    function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;
        for (i = 0; i < len; i++) {
            if (!split[i]) {
                // ignore empty strings
                continue;
            }
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            }
            else {
                createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
        for (i = 0; i < createDebug.instances.length; i++) {
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
        }
    }
    /**
    * Disable debug output.
    *
    * @api public
    */
    function disable() {
        createDebug.enable('');
    }
    /**
    * Returns true if the given mode name is enabled, false otherwise.
    *
    * @param {String} name
    * @return {Boolean}
    * @api public
    */
    function enabled(name) {
        if (name[name.length - 1] === '*') {
            return true;
        }
        var i;
        var len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
    * Coerce `val`.
    *
    * @param {Mixed} val
    * @return {Mixed}
    * @api private
    */
    function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    else {
        throw new Error(prefix + ": " + (message || ''));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var index = (function (condition, message) {
    if (!isProduction) {
        if (condition) {
            return;
        }
        console.warn(message);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var g;
// This works in non-strict mode
g = (function () {
    return this;
})();
try {
    // This works if eval is allowed (see CSP)
    g = g || new Function("return this")();
}
catch (e) {
    // This works if the window reference is available
    if (typeof window === "object")
        g = window;
}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (module) {
    if (!module.webpackPolyfill) {
        module.deprecate = function () { };
        module.paths = [];
        // module.parent = undefined by default
        if (!module.children)
            module.children = [];
        Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function () {
                return module.l;
            }
        });
        Object.defineProperty(module, "id", {
            enumerable: true,
            get: function () {
                return module.i;
            }
        });
        module.webpackPolyfill = 1;
    }
    return module;
};


/***/ }),

/***/ "./src/apply.ts":
/*!**********************!*\
  !*** ./src/apply.ts ***!
  \**********************/
/*! exports provided: applyOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOperation", function() { return applyOperation; });
/* harmony import */ var _ops_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ops/convert */ "./src/ops/convert.ts");
/* harmony import */ var _ops_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ops/text */ "./src/ops/text.ts");
/* harmony import */ var _ops_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ops/node */ "./src/ops/node.ts");
/* harmony import */ var _ops_mark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ops/mark */ "./src/ops/mark.ts");




var applyOperation = function (doc, slateOp) {
    var op = Object(_ops_convert__WEBPACK_IMPORTED_MODULE_0__["toSyncOp"])(slateOp);
    if (!op) {
        return doc;
    }
    switch (op.type) {
        case 'insert_text':
            return Object(_ops_text__WEBPACK_IMPORTED_MODULE_1__["insertText"])(doc, op);
        case 'remove_text':
            return Object(_ops_text__WEBPACK_IMPORTED_MODULE_1__["removeText"])(doc, op);
        case 'insert_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["insertNode"])(doc, op);
        case 'move_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["moveNode"])(doc, op);
        case 'remove_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["removeNode"])(doc, op);
        case 'split_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["splitNode"])(doc, op);
        case 'merge_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["mergeNode"])(doc, op);
        case 'set_node':
            return Object(_ops_node__WEBPACK_IMPORTED_MODULE_2__["setNodeProperties"])(doc, op);
        case 'add_mark':
            return Object(_ops_mark__WEBPACK_IMPORTED_MODULE_3__["addMark"])(doc, op);
        case 'remove_mark':
            return Object(_ops_mark__WEBPACK_IMPORTED_MODULE_3__["removeMark"])(doc, op);
        case 'set_mark':
            return Object(_ops_mark__WEBPACK_IMPORTED_MODULE_3__["setMark"])(doc, op);
    }
    throw new TypeError('invalid op');
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: applyOperation, toSyncDocument, toSlateDocument, CachedSlateTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply */ "./src/apply.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyOperation", function() { return _apply__WEBPACK_IMPORTED_MODULE_0__["applyOperation"]; });

/* harmony import */ var _node_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-convert */ "./src/node-convert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSyncDocument", function() { return _node_convert__WEBPACK_IMPORTED_MODULE_1__["toSyncDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSlateDocument", function() { return _node_convert__WEBPACK_IMPORTED_MODULE_1__["toSlateDocument"]; });

/* harmony import */ var _slate_diff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slate-diff */ "./src/slate-diff/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachedSlateTransformer", function() { return _slate_diff__WEBPACK_IMPORTED_MODULE_2__["CachedSlateTransformer"]; });







/***/ }),

/***/ "./src/node-convert/index.ts":
/*!***********************************!*\
  !*** ./src/node-convert/index.ts ***!
  \***********************************/
/*! exports provided: createSyncNode, toSyncDocument, createSlateNode, toSlateDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sync */ "./src/node-convert/sync.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSyncNode", function() { return _sync__WEBPACK_IMPORTED_MODULE_0__["createSyncNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSyncDocument", function() { return _sync__WEBPACK_IMPORTED_MODULE_0__["toSyncDocument"]; });

/* harmony import */ var _slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slate */ "./src/node-convert/slate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSlateNode", function() { return _slate__WEBPACK_IMPORTED_MODULE_1__["createSlateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSlateDocument", function() { return _slate__WEBPACK_IMPORTED_MODULE_1__["toSlateDocument"]; });





/***/ }),

/***/ "./src/node-convert/slate.ts":
/*!***********************************!*\
  !*** ./src/node-convert/slate.ts ***!
  \***********************************/
/*! exports provided: createSlateNode, toSlateDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlateNode", function() { return createSlateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSlateDocument", function() { return toSlateDocument; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var createSlateNode = function (node) {
    if (!node.object) {
        throw new TypeError("cannot create node with missing type");
    }
    switch (node.object) {
        case 'document':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSlateNode) });
        case 'block':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSlateNode) });
        case 'inline':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSlateNode) });
        case 'text':
            return __assign({}, node, { text: node.text.join('') });
    }
};
var toSlateDocument = function (node) { return createSlateNode(node); };


/***/ }),

/***/ "./src/node-convert/sync.ts":
/*!**********************************!*\
  !*** ./src/node-convert/sync.ts ***!
  \**********************************/
/*! exports provided: createSyncNode, toSyncDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSyncNode", function() { return createSyncNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSyncDocument", function() { return toSyncDocument; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var createSyncNode = function (node) {
    if (!node.object) {
        throw new TypeError("cannot create node with missing type");
    }
    switch (node.object) {
        case 'document':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSyncNode) });
        case 'block':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSyncNode) });
        case 'inline':
            return __assign({}, node, { nodes: node.nodes && node.nodes.map(createSyncNode) });
        case 'text':
            return __assign({}, node, { text: node.text ? Array.from(node.text) : [], marks: node.marks || [] });
    }
};
var toSyncDocument = function (node) { return createSyncNode(node); };


/***/ }),

/***/ "./src/ops/convert.ts":
/*!****************************!*\
  !*** ./src/ops/convert.ts ***!
  \****************************/
/*! exports provided: toSyncOp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSyncOp", function() { return toSyncOp; });
/* harmony import */ var _node_convert_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node-convert/sync */ "./src/node-convert/sync.ts");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./src/ops/path.ts");


var toSyncMarkProperties = function (props) {
    var markProps = {};
    if (props.type) {
        markProps.type = props.type;
    }
    if (props.data) {
        // @ts-ignore
        markProps.data = props.data && (props.data.toJSON ? props.data.toJSON() : props.data);
    }
    return markProps;
};
// DO NOT spread objects here; source is a Immutable Record
var toSyncOp = function (op) {
    switch (op.type) {
        case "insert_text":
            return {
                type: op.type,
                offset: op.offset,
                text: op.text,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                marks: op.marks ? op.marks.map(function (mark) { return mark.toJSON(); }) : []
            };
        case "remove_text":
            return {
                type: op.type,
                offset: op.offset,
                text: op.text,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path)
            };
        case "insert_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                node: Object(_node_convert_sync__WEBPACK_IMPORTED_MODULE_0__["createSyncNode"])(op.node.toJSON())
            };
        case "move_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                newPath: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.newPath)
            };
        case "remove_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path)
            };
        case "split_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                position: op.position,
                properties: op.properties
            };
        case "merge_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path)
            };
        case "add_mark":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                mark: op.mark.toJSON()
            };
        case "remove_mark":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                mark: op.mark.toJSON()
            };
        case "set_node":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                newProperties: op.newProperties
            };
        case "set_mark":
            return {
                type: op.type,
                path: Object(_path__WEBPACK_IMPORTED_MODULE_1__["toNumberPath"])(op.path),
                properties: toSyncMarkProperties(op.properties),
                newProperties: toSyncMarkProperties(op.newProperties)
            };
        case "set_selection":
        case "set_value":
            // Value-specific operations. These don't apply to doc
            return null;
    }
};


/***/ }),

/***/ "./src/ops/mark.ts":
/*!*************************!*\
  !*** ./src/ops/mark.ts ***!
  \*************************/
/*! exports provided: addMark, removeMark, setMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMark", function() { return addMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMark", function() { return removeMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMark", function() { return setMark; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./src/ops/path.ts");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var addMark = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    if (node.object !== 'text') {
        throw new TypeError('cannot set marks on non-text node');
    }
    // emulate Set behaviour
    var existingIdx = node.marks.findIndex(function (existingMark) {
        return existingMark.type === op.mark.type && fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(existingMark.data, op.mark.data);
    });
    if (existingIdx > -1) {
        return doc;
    }
    node.marks.push(op.mark);
    return doc;
};
var removeMark = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    if (node.object !== 'text') {
        throw new TypeError('cannot set marks on non-text node');
    }
    // emulate Set behaviour
    var existingIdx = node.marks.findIndex(function (existingMark) {
        return existingMark.type === op.mark.type && fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(existingMark.data, op.mark.data);
    });
    if (existingIdx === -1) {
        return doc;
    }
    node.marks.splice(existingIdx, 1);
    return doc;
};
var setMark = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    if (node.object !== 'text') {
        throw new TypeError('cannot set marks on non-text node');
    }
    var existingIdx = node.marks.findIndex(function (existingMark) {
        return existingMark.type === op.properties.type && fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(existingMark.data, op.properties.data);
    });
    if (existingIdx === -1) {
        console.warn('did not find old mark with properties', op.properties);
        if (!op.newProperties.type) {
            throw new TypeError('no old mark, and new mark missing type');
        }
        node.marks.push(__assign({ object: 'mark', type: op.newProperties.type }, op.newProperties));
    }
    else {
        node.marks[existingIdx] = __assign({ object: 'mark' }, node.marks[existingIdx], op.newProperties);
    }
    return doc;
};


/***/ }),

/***/ "./src/ops/node.ts":
/*!*************************!*\
  !*** ./src/ops/node.ts ***!
  \*************************/
/*! exports provided: insertNode, moveNode, removeNode, splitNode, mergeNode, setNodeProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNode", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNode", function() { return moveNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitNode", function() { return splitNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeNode", function() { return mergeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNodeProperties", function() { return setNodeProperties; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./src/ops/path.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var insertNode = function (doc, op) {
    var _a = Object(_path__WEBPACK_IMPORTED_MODULE_0__["getAncestor"])(doc, op.path), parentNode = _a[0], index = _a[1];
    if (parentNode.object === "text") {
        throw new TypeError("cannot insert node into text node");
    }
    parentNode.nodes.splice(index, 0, op.node);
    return doc;
};
var moveNode = function (doc, op) {
    var _a;
    var _b = Object(_path__WEBPACK_IMPORTED_MODULE_0__["getAncestor"])(doc, op.path), srcParent = _b[0], srcIndex = _b[1];
    var _c = Object(_path__WEBPACK_IMPORTED_MODULE_0__["getAncestor"])(doc, op.newPath), destParent = _c[0], destIndex = _c[1];
    if (srcParent.object === "text" || destParent.object === "text") {
        throw new TypeError("cannot move node as child of a text node");
    }
    (_a = destParent.nodes).splice.apply(_a, [destIndex,
        0].concat(srcParent.nodes.splice(srcIndex, 1)));
    return doc;
};
var removeNode = function (doc, op) {
    var _a = Object(_path__WEBPACK_IMPORTED_MODULE_0__["getAncestor"])(doc, op.path), parentNode = _a[0], index = _a[1];
    if (parentNode.object === "text") {
        throw new TypeError("cannot remove node from text node");
    }
    parentNode.nodes.splice(index, 1);
    return doc;
};
var splitNode = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    var splitNode;
    if (node.object === "text") {
        splitNode = {
            object: "text",
            text: node.text.splice(op.position),
            marks: JSON.parse(JSON.stringify(node.marks))
        };
    }
    else {
        // @ts-ignore
        splitNode = {
            object: node.object,
            // @ts-ignore
            type: node.type,
            data: node.data ? JSON.parse(JSON.stringify(node.data)) : undefined,
            nodes: node.nodes.splice(op.position)
        };
    }
    return insertNode(doc, {
        type: "insert_node",
        path: Object(_path__WEBPACK_IMPORTED_MODULE_0__["incrementPath"])(op.path),
        node: splitNode
    });
};
var mergeNode = function (doc, op) {
    var _a, _b;
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    var prevNode = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, Object(_path__WEBPACK_IMPORTED_MODULE_0__["decrementPath"])(op.path));
    if (node.object !== prevNode.object) {
        throw new TypeError("cannot merge nodes of differing types " + node.object + " and " + prevNode.object);
    }
    // fold node into prevNode
    // FIXME: please don't cast here
    if (prevNode.object === "text") {
        // detach from parent
        var text = node.text.splice(0, node.text.length);
        // remove next node
        removeNode(doc, {
            type: "remove_node",
            path: op.path
        });
        // add to previous node
        (_a = prevNode.text).push.apply(_a, text);
    }
    else {
        // detach from parent
        var children = node.nodes.splice(0, node.nodes.length);
        // remove old node
        removeNode(doc, {
            type: "remove_node",
            path: op.path
        });
        // add to previous node
        if (prevNode.nodes && children) {
            (_b = prevNode.nodes).push.apply(_b, children);
        }
    }
    return doc;
};
var setNodeProperties = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    var _a = op.newProperties, type = _a.type, data = _a.data;
    if (type) {
        // @ts-ignore
        node.type = type;
    }
    if (node.object !== "text" && data) {
        var jsonData = data.toJSON ? data.toJSON() : __assign({}, data);
        node.data = jsonData;
    }
    return doc;
};


/***/ }),

/***/ "./src/ops/path.ts":
/*!*************************!*\
  !*** ./src/ops/path.ts ***!
  \*************************/
/*! exports provided: isTreeNode, walk, getAncestor, ancestorPath, incrementPath, decrementPath, toNumberPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTreeNode", function() { return isTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAncestor", function() { return getAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ancestorPath", function() { return ancestorPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementPath", function() { return incrementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementPath", function() { return decrementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumberPath", function() { return toNumberPath; });
// @ts-ignore
var isTreeNode = function (node) {
    return node.object !== 'text';
};
var walk = function (node, path) {
    return path.reduce(function (curNode, idx) {
        if (!isTreeNode(curNode) || !curNode.nodes) {
            throw new TypeError("path " + path.toString() + " does not match tree " + JSON.stringify(node));
        }
        return curNode.nodes[idx];
    }, node);
    // FIXME: ^ that cast is odd
};
var getAncestor = function (doc, path, level) {
    if (level === void 0) { level = 1; }
    var _a = ancestorPath(path, level), idx = _a[0], ancestor = _a[1];
    return [walk(doc, ancestor), idx];
};
var ancestorPath = function (path, level) {
    if (level === void 0) { level = 1; }
    if (level > path.length) {
        throw new TypeError('requested ancestor is higher than root');
    }
    return [path[path.length - level], path.slice(0, path.length - level)];
};
var incrementPath = function (path) {
    var _a = ancestorPath(path), idx = _a[0], parentPath = _a[1];
    return parentPath.concat([idx + 1]);
};
var decrementPath = function (path) {
    var _a = ancestorPath(path), idx = _a[0], parentPath = _a[1];
    var prevIdx = idx - 1;
    if (prevIdx < 0) {
        throw new TypeError("node at path " + path + " has no sibling before it");
    }
    return parentPath.concat([prevIdx]);
};
var toNumberPath = function (path) {
    if (typeof path === "string") {
        // return [Number(path)];
        throw new TypeError("cannot handle key-based paths");
    }
    else if (typeof path === "number") {
        return [path];
    }
    else if (Array.isArray(path)) {
        return path;
    }
    else {
        return path.toJS();
    }
};


/***/ }),

/***/ "./src/ops/text.ts":
/*!*************************!*\
  !*** ./src/ops/text.ts ***!
  \*************************/
/*! exports provided: insertText, removeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertText", function() { return insertText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeText", function() { return removeText; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./src/ops/path.ts");

var insertText = function (doc, op) {
    var _a;
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    if (node.object !== 'text') {
        throw new TypeError('did not get text node at path');
    }
    (_a = node.text).splice.apply(_a, [op.offset, 0].concat(Array.from(op.text)));
    return doc;
};
var removeText = function (doc, op) {
    var node = Object(_path__WEBPACK_IMPORTED_MODULE_0__["walk"])(doc, op.path);
    if (node.object !== 'text') {
        throw new TypeError('did not get text node at path');
    }
    node.text.splice(op.offset, Array.from(op.text).length);
    return doc;
};


/***/ }),

/***/ "./src/slate-diff/index.ts":
/*!*********************************!*\
  !*** ./src/slate-diff/index.ts ***!
  \*********************************/
/*! exports provided: CachedSlateTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedSlateTransformer", function() { return CachedSlateTransformer; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var MAX_NODE_DEPTH = 1000;
var CachedSlateTransformer = /** @class */ (function () {
    function CachedSlateTransformer(getObjectId) {
        this.nodeCache = new Map();
        this.parentCache = new Map();
        this.getObjectId = getObjectId;
        if (!getObjectId) {
            throw new Error('getObjectId is required');
        }
    }
    // fillCache(syncDoc: SyncDocument, slateDoc: Document) {
    //   this.fillCacheRecursive(syncDoc, slateDoc, syncDoc);
    // }
    // private fillCacheRecursive(syncNode: SyncNode, slateNode: Node, parentNode: SyncNode) {
    //   // add this node to the cache
    //   const objectId = Automerge.getObjectId(syncNode);
    //   this.nodeCache.set(objectId, slateNode);
    //   // and track the parent
    //   this.parentCache.set(Automerge.getObjectId(parentNode), objectId);
    //   if (syncNode.object === 'text' || slateNode instanceof Text || !syncNode.nodes) {
    //     return;
    //   }
    //   // walk the children and add them
    //   // trees are meant to be a 1-1 map
    //   syncNode.nodes.forEach((syncChild, idx) => {
    //     const slateChild = slateNode.nodes.get(idx);
    //     this.fillCacheRecursive(syncChild, slateChild, syncNode);
    //   });
    // }
    CachedSlateTransformer.prototype.createCachedSlateNode = function (syncNode, parentNode) {
        var _this = this;
        if (!syncNode.object) {
            throw new TypeError("cannot create node with missing type");
        }
        // used cached version if available
        var objectId = this.getObjectId(syncNode);
        if (!objectId) {
            throw new TypeError(JSON.stringify(syncNode) + " is not an automerge object");
        }
        var node = this.nodeCache.get(objectId);
        if (node) {
            // console.log('cache hit', objectId, node.toJSON())
            return node;
        }
        // construct a new one
        var slateNode = this.createSlateNode(syncNode);
        // console.warn('cache miss', objectId, slateNode.toJSON())
        // add to cache
        this.nodeCache.set(objectId, slateNode);
        // link the parent object ids
        var parentObjectId = this.getObjectId(parentNode);
        if (parentObjectId) {
            this.parentCache.set(objectId, parentObjectId);
        }
        // do the same for all other fields that aren't nodes (e.g. text and node arrays)
        // TODO: make this a deep check
        Object.keys(syncNode).forEach(function (attr) {
            // @ts-ignore
            var attrObjectId = _this.getObjectId(syncNode[attr]);
            if (attrObjectId) {
                _this.parentCache.set(attrObjectId, objectId);
            }
        });
        return slateNode;
    };
    ;
    // TODO: memoise
    CachedSlateTransformer.prototype.collectParents = function (objectId) {
        var parents = [];
        var currentId = objectId;
        for (var i = 0; i < MAX_NODE_DEPTH; i++) {
            var parentId = this.parentCache.get(currentId);
            if (parentId) {
                parents.push(parentId);
                currentId = parentId;
            }
            else {
                return parents;
            }
        }
        throw new Error('nodes too deeply nested');
    };
    CachedSlateTransformer.prototype.apply = function (syncdoc, actions) {
        var _this = this;
        if (actions === void 0) { actions = []; }
        // collect the objectIds of objects changed in the document
        var objectIdSet = new Set();
        actions.forEach(function (action) {
            action.ops.forEach(function (op) {
                objectIdSet.add(op.obj);
            });
        });
        var objectIds = Array.from(objectIdSet.values());
        // find all their parents; we want to invalidate them too as their children changed
        var parentObjectIds = Array.from(objectIds.values()).flatMap(function (objectId) {
            return _this.collectParents(objectId);
        });
        // remove each changed object and their ancestors from the cache so that we rebuild them
        var invalidate = parentObjectIds.concat(objectIds);
        invalidate.forEach(function (objectId) {
            _this.nodeCache.delete(objectId);
        });
        // construct a (partially) cached version of the Document
        return this.createCachedDocument(syncdoc);
    };
    CachedSlateTransformer.prototype.createSlateNode = function (node) {
        switch (node.object) {
            case 'block':
                return this.createCachedBlock(node);
            case 'text':
                // @ts-ignore bad types
                return slate__WEBPACK_IMPORTED_MODULE_0__["Text"].fromJSON(__assign({}, node, { text: node.text.join("") }));
            case 'inline':
                return this.createCachedInline(node);
            default: {
                throw new Error("unsupported node type " + node.object);
            }
        }
    };
    CachedSlateTransformer.prototype.createCachedNodeList = function (syncNodes, parent) {
        var _this = this;
        return syncNodes.map(function (child) { return _this.createCachedSlateNode(child, parent); });
    };
    CachedSlateTransformer.prototype.createCachedBlock = function (syncNode) {
        // create children first
        var nodes = syncNode.nodes ? this.createCachedNodeList(syncNode.nodes, syncNode) : [];
        return slate__WEBPACK_IMPORTED_MODULE_0__["Block"].fromJSON(__assign({}, syncNode, { 
            // will end up calling createNodeList which calls Node.create on each element
            // each should already be a Slate Node, so constructor should be a no-op
            // @ts-ignore -- need to exclude Document possibility
            nodes: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(nodes) }));
    };
    CachedSlateTransformer.prototype.createCachedInline = function (syncNode) {
        // create children first
        var nodes = syncNode.nodes ? this.createCachedNodeList(syncNode.nodes, syncNode) : [];
        return slate__WEBPACK_IMPORTED_MODULE_0__["Inline"].fromJSON(__assign({}, syncNode, { 
            // will end up calling createNodeList which calls Node.create on each element
            // each should already be a Slate Node, so constructor should be a no-op
            // @ts-ignore -- need to exclude Document possibility
            nodes: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(nodes) }));
    };
    CachedSlateTransformer.prototype.createCachedDocument = function (syncNode) {
        // create children first
        var nodes = syncNode.nodes ? this.createCachedNodeList(syncNode.nodes, syncNode) : [];
        return slate__WEBPACK_IMPORTED_MODULE_0__["Document"].fromJSON(__assign({}, syncNode, { 
            // @ts-ignore
            nodes: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(nodes) }));
    };
    return CachedSlateTransformer;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map