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
/*! exports provided: applyOperation, toSyncDocument, toSlateDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply */ "./src/apply.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyOperation", function() { return _apply__WEBPACK_IMPORTED_MODULE_0__["applyOperation"]; });

/* harmony import */ var _node_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-convert */ "./src/node-convert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSyncDocument", function() { return _node_convert__WEBPACK_IMPORTED_MODULE_1__["toSyncDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSlateDocument", function() { return _node_convert__WEBPACK_IMPORTED_MODULE_1__["toSlateDocument"]; });






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
            data: JSON.parse(JSON.stringify(node.data)),
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


/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map