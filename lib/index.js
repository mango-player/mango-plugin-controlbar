(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mangoPluginControlbar"] = factory();
	else
		root["mangoPluginControlbar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mangoHelper"] = factory();else root["mangoHelper"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/
                    });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }([
        /* 0 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-predicate-functions v0.1.5
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicPredicateFunctions = {});
            })(this, function (exports) {
                'use strict';

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };
                var asyncGenerator = function () {
                    function AwaitValue(value) {
                        this.value = value;
                    }
                    function AsyncGenerator(gen) {
                        var front, back;
                        function send(key, arg) {
                            return new Promise(function (resolve, reject) {
                                var request = {
                                    key: key,
                                    arg: arg,
                                    resolve: resolve,
                                    reject: reject,
                                    next: null
                                };
                                if (back) {
                                    back = back.next = request;
                                } else {
                                    front = back = request;
                                    resume(key, arg);
                                }
                            });
                        }
                        function resume(key, arg) {
                            try {
                                var result = gen[key](arg);
                                var value = result.value;
                                if (value instanceof AwaitValue) {
                                    Promise.resolve(value.value).then(function (arg) {
                                        resume("next", arg);
                                    }, function (arg) {
                                        resume("throw", arg);
                                    });
                                } else {
                                    settle(result.done ? "return" : "normal", result.value);
                                }
                            } catch (err) {
                                settle("throw", err);
                            }
                        }
                        function settle(type, value) {
                            switch (type) {
                                case "return":
                                    front.resolve({
                                        value: value,
                                        done: true
                                    });
                                    break;
                                case "throw":
                                    front.reject(value);
                                    break;
                                default:
                                    front.resolve({
                                        value: value,
                                        done: false
                                    });
                                    break;
                            }
                            front = front.next;
                            if (front) {
                                resume(front.key, front.arg);
                            } else {
                                back = null;
                            }
                        }
                        this._invoke = send;
                        if (typeof gen.return !== "function") {
                            this.return = undefined;
                        }
                    }
                    if (typeof Symbol === "function" && Symbol.asyncIterator) {
                        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                            return this;
                        };
                    }
                    AsyncGenerator.prototype.next = function (arg) {
                        return this._invoke("next", arg);
                    };
                    AsyncGenerator.prototype.throw = function (arg) {
                        return this._invoke("throw", arg);
                    };
                    AsyncGenerator.prototype.return = function (arg) {
                        return this._invoke("return", arg);
                    };
                    return {
                        wrap: function wrap(fn) {
                            return function () {
                                return new AsyncGenerator(fn.apply(this, arguments));
                            };
                        },
                        await: function _await(value) {
                            return new AwaitValue(value);
                        }
                    };
                }();
                /**
                 * to check whether the object is defined or not
                 */
                function defined(obj) {
                    return typeof obj !== 'undefined';
                }
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * to tell you if the val can be transfer into number
                 */
                function isNumeric(obj) {
                    return !isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
                }
                /**
                 * is it an interget or not
                 */
                function isInteger(num) {
                    return Number.isInteger(num);
                }
                /**
                 * return true when the value is "", {}, [], 0, null, undefined, false.
                 */
                function isEmpty(obj) {
                    if (isArray(obj)) {
                        return obj.length === 0;
                    } else if (isObject(obj)) {
                        return Object.keys(obj).length === 0;
                    } else {
                        return !obj;
                    }
                }
                /**
                 * is it an event or not
                 */
                function isEvent(obj) {
                    return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
                }
                /**
                 * is it a blob
                 */
                function isBlob(obj) {
                    return obj instanceof Blob;
                }
                /**
                 * is it a file uploaded by user through file inpue
                 */
                function isFile(obj) {
                    return isBlob(obj) && isString(obj.name);
                }
                /**
                 * is it a date
                 */
                function isDate(obj) {
                    return Object.prototype.toString.call(obj) === '[object Date]';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is a promise or not
                 */
                function isPromise(obj) {
                    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * is it an url, but this test require the url to have an protocol
                 */
                function isUrl(str) {
                    return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
                }
                /**
                 * to test if a HTML node
                 */
                function isNode(obj) {
                    return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
                }
                /**
                 * to test if a HTML element
                 */
                function isElement(obj) {
                    return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
                }
                /**
                 * check if node A is node B's parent or not
                 */
                function isChildNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    return child.parentNode === parent;
                }
                /**
                 * check if node B is node A's posterrity or not
                 */
                function isPosterityNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    while (child.parentNode) {
                        child = child.parentNode;
                        if (child === parent) {
                            return true;
                        }
                    }
                    return false;
                }
                /**
                 * check if the string is an HTMLString
                 */
                function isHTMLString(str) {
                    return (/<[^>]+?>/.test(str)
                    );
                }
                /**
                 * check if is an error
                 */
                function isError(val) {
                    return val instanceof Error;
                }
                /**
                 * check if is an RegExp
                 */
                function isRegExp(val) {
                    return val instanceof RegExp;
                }
                exports.defined = defined;
                exports.isVoid = isVoid;
                exports.isArray = isArray;
                exports.isFunction = isFunction;
                exports.isObject = isObject;
                exports.isNumber = isNumber;
                exports.isNumeric = isNumeric;
                exports.isInteger = isInteger;
                exports.isEmpty = isEmpty;
                exports.isEvent = isEvent;
                exports.isBlob = isBlob;
                exports.isFile = isFile;
                exports.isDate = isDate;
                exports.isString = isString;
                exports.isBoolean = isBoolean;
                exports.isPromise = isPromise;
                exports.isPrimitive = isPrimitive;
                exports.isUrl = isUrl;
                exports.isNode = isNode;
                exports.isElement = isElement;
                exports.isChildNode = isChildNode;
                exports.isPosterityNode = isPosterityNode;
                exports.isHTMLString = isHTMLString;
                exports.isError = isError;
                exports.isRegExp = isRegExp;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.caf = exports.raf = exports.inBrowser = undefined;
            exports.makeArray = makeArray;
            exports.transObjectAttrIntoArray = transObjectAttrIntoArray;
            exports.runRejectableQueue = runRejectableQueue;
            exports.runStoppableQueue = runStoppableQueue;
            exports.decodeUTF8 = decodeUTF8;
            exports.debounce = debounce;
            exports.throttle = throttle;
            exports.strRepeat = strRepeat;
            exports.formatTime = formatTime;
            exports.appendCSS = appendCSS;
            exports.formatDate = formatDate;
            exports.getLocalStorage = getLocalStorage;
            exports.setLocalStorage = setLocalStorage;
            exports.getUrlParam = getUrlParam;
            exports.getCookie = getCookie;
            var _toxicPredicateFunctions = __webpack_require__(0);
            // **********************  judgement   ************************
            /**
             * check if the code running in browser environment (not include worker env)
             * @returns {Boolean}
             */
            var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
            // **********************  对象操作  ************************
            /**
             * 转变一个类数组对象为数组
             */
            // @flow
            function makeArray(obj) {
                return Array.from(obj);
            }
            /**
             * sort Object attributes by function
             * and transfer them into array
             * @param  {Object} obj Object form from numric
             * @param  {Function} fn sort function
             * @return {Array} the sorted attirbutes array
             */
            function transObjectAttrIntoArray(obj, fn) {
                if (fn === void 0) {
                    fn = function fn(a, b) {
                        return +a - +b;
                    };
                }
                return Object.keys(obj).sort(fn).reduce(function (order, key) {
                    return order.concat(obj[key]);
                }, []);
            }
            /**
             * run a queue one by one.If include function reject or return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {Promise}    tell us whether a queue run finished
             */
            function runRejectableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return new Promise(function (resolve, reject) {
                    var step = function step(index) {
                        if (index >= queue.length) {
                            resolve();
                            return;
                        }
                        var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                        if (result === false) return reject('stop');
                        return Promise.resolve(result).then(function () {
                            return step(index + 1);
                        }).catch(function (err) {
                            return reject(err || 'stop');
                        });
                    };
                    step(0);
                });
            }
            /**
             * run a queue one by one.If include function return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {boolean} tell the user if the queue run finished
             */
            function runStoppableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var step = function step(index) {
                    if (index >= queue.length) {
                        return true;
                    }
                    var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                    if (result === false) return false;
                    return step(++index);
                };
                return step(0);
            }
            function checkContinuation(uint8array, start, checkLength) {
                var array = uint8array;
                if (start + checkLength < array.length) {
                    while (checkLength--) {
                        if ((array[++start] & 0xC0) !== 0x80) {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            }
            // decodeUTF8
            function decodeUTF8(uint8array) {
                var out = [];
                var input = uint8array;
                var i = 0;
                var length = uint8array.length;
                while (i < length) {
                    if (input[i] < 0x80) {
                        out.push(String.fromCharCode(input[i]));
                        ++i;
                        continue;
                    } else if (input[i] < 0xC0) {
                        // fallthrough
                    } else if (input[i] < 0xE0) {
                        if (checkContinuation(input, i, 1)) {
                            var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                            if (ucs4 >= 0x80) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 2;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF0) {
                        if (checkContinuation(input, i, 2)) {
                            var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                            if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 3;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF8) {
                        if (checkContinuation(input, i, 3)) {
                            var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                            if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                                ucs4 -= 0x10000;
                                out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                                out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                                i += 4;
                                continue;
                            }
                        }
                    }
                    out.push(String.fromCharCode(0xFFFD));
                    ++i;
                }
                return out.join('');
            }
            function debounce(func, wait, immediate) {
                // immediate默认为false
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
                    var last = new Date() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        }
                    }
                };
                return function () {
                    context = this;
                    args = arguments;
                    timestamp = new Date();
                    // 第一次调用该方法时，且immediate为true，则调用func函数
                    var callNow = immediate && !timeout;
                    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
                    if (!timeout) timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                        context = args = null;
                    }
                    return result;
                };
            }
            /**
             * 函数节流（控制函数执行频率）
             * @param  {Function} func 要节流控制的函数，必填
             * @return {Number}   wait 等待时长
             * @return {Object}   options {
             *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
             *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
             *                    }
             * @return {Object}   cxt 上下文对象
             * @return {Function}
             */
            function throttle(func, wait, options, cxt) {
                /* options的默认值
                 *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
                 *  options.leading = true;
                 * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
                 *  options.trailing = true;
                 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
                 */
                var context, args, result;
                var timeout = null;
                var previous = 0;
                if (!options) options = {};
                var later = function later() {
                    previous = options.leading === false ? 0 : new Date() - 0;
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                };
                wait = wait || 0;
                return function () {
                    var now = new Date();
                    if (!previous && options.leading === false) previous = now;
                    // 计算剩余时间
                    var remaining = wait - (now - previous);
                    if (cxt) {
                        context = cxt;
                    } else {
                        context = this;
                    }
                    args = arguments;
                    // 当到达wait指定的时间间隔，则调用func函数
                    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
                    if (remaining <= 0 || remaining > wait) {
                        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        previous = now;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        // options.trailing=true时，延时执行func函数
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            }
            // requestAnimationFrame
            var raf = exports.raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
                return setTimeout(cb, 17);
            };
            // cancelAnimationFrame
            var caf = exports.caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
                clearTimeout(id);
            };
            // 根据要求的位数，将9格式化为 09\009\0009...
            function strRepeat(num, bit) {
                var pBit = bit;
                num = "" + (num || '');
                var numLen = num.length;
                bit = (bit || numLen) - numLen;
                var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
                return (paddingStr + num).slice(0, pBit);
            }
            // video 时间格式化
            function formatTime(time) {
                var hh = Math.floor(time / 3600);
                time = Math.floor(time % 3600);
                var mm = strRepeat(Math.floor(time / 60), 2);
                time = Math.floor(time % 60);
                var ss = strRepeat(time, 2);
                return hh >= 1 ? hh + ":" + mm + ":" + ss : mm + ":" + ss;
            }
            /**
             * 追加样式代码到head的style标签，不存在则创建
             * @param {String} cssText 样式文本
             * @return {HTMLElement}
             */
            function appendCSS(cssText) {
                var doc = document;
                var styleEl = doc.querySelector('style');
                if (!styleEl) {
                    styleEl = doc.createElement('style');
                    var header = doc.querySelector('head');
                    header && header.appendChild(styleEl);
                }
                styleEl.appendChild(doc.createTextNode(cssText));
                return styleEl;
            }
            /**
             * 格式化日期对象为：年-月-日 时:分:秒.毫秒
             * @param {Date} date Date日期对象
             * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
             * @return {String}
             */
            function formatDate(date, pattern) {
                if (date === void 0) {
                    date = new Date();
                }
                if (pattern === void 0) {
                    pattern = 'yyyy-MM-dd hh:mm:ss.i';
                }
                var year = date.getFullYear().toString();
                var fields = {
                    M: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    m: date.getMinutes(),
                    s: date.getSeconds(),
                    i: date.getMilliseconds()
                };
                pattern = pattern.replace(/(y+)/ig, function (_, yearPattern) {
                    return year.substr(4 - Math.min(4, yearPattern.length));
                });
                var _loop_1 = function _loop_1(i) {
                    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (_, pattStr) {
                        return (fields[i] < 10 && pattStr.length > 1 ? '0' : '') + fields[i];
                    });
                };
                for (var i in fields) {
                    _loop_1(i);
                }
                return pattern;
            }
            /**
             * 读取本地存储的值（不支持localStorage则降级到cookie）
             * @param {String} key 目标数据key
             * @return {String}
             */
            function getLocalStorage(key) {
                try {
                    return window.localStorage.getItem(key);
                } catch (e) {
                    try {
                        var regRt = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
                        return (0, _toxicPredicateFunctions.isArray)(regRt) ? unescape(regRt[2]) : '';
                    } catch (e) {
                        return '';
                    }
                }
            }
            /**
             * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
             * @param {String} key
             * @param {String} val
             * @return {String}
             */
            function setLocalStorage(key, val) {
                try {
                    window.localStorage.setItem(key, val);
                } catch (e) {
                    var expires = new Date();
                    // 默认存储300天
                    expires.setTime(expires.getTime() + 24 * 3600 * 1000 * 300);
                    try {
                        document.cookie = key + '=' + escape(val) + ';expires=' + expires.toUTCString() + ';path=/;';
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
            function getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
                var r = window.location.search.substr(1).match(reg); //匹配目标参数  
                if (r != null) return unescape(r[2]);
                return null; //返回参数值  
            }
            function getCookie(name) {
                var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
                var m = document.cookie.match(r);
                return !m ? "" : m[1];
            }
            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CustEvent = undefined;
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };
            exports.emitEventCache = emitEventCache;
            exports.addEventCache = addEventCache;
            exports.removeEventCache = removeEventCache;
            var _toxicPredicateFunctions = __webpack_require__(0);
            /**
            * @module event
            * @author huzunjie
            * @description 自定义事件基础类
            */
            /* 缓存事件监听方法及包装，内部数据格式：
             * targetIndex_<type:'click|mouseup|done'>: [ [
             *   function(){ ... handler ... },
             *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
             *   isOnce
             * ]]
             */
            var _evtListenerCache = Object.create(null);
            _evtListenerCache.count = 0;
            /**
             * 得到某对象的某事件类型对应的监听队列数组
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
             * @return {Array}
             */
            function getEvtTypeCache(target, type) {
                var evtId = target.__evt_id;
                if (!evtId) {
                    /* 设置__evt_id不可枚举 */
                    Object.defineProperty(target, '__evt_id', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    /* 空对象初始化绑定索引 */
                    evtId = target.__evt_id = ++_evtListenerCache.count;
                }
                var typeCacheKey = evtId + '_' + type;
                var evtTypeCache = _evtListenerCache[typeCacheKey];
                if (!evtTypeCache) {
                    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
                }
                return evtTypeCache;
            }
            /**
             * 触发事件监听方法
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Object} eventObj 触发事件时要传回的event对象
             * @return {undefined}
             */
            function emitEventCache(target, type, eventObj) {
                var evt = Object.create(null);
                evt.type = type;
                evt.target = target;
                if (eventObj) {
                    Object.assign(evt, (0, _toxicPredicateFunctions.isObject)(eventObj) ? eventObj : { data: eventObj });
                }
                getEvtTypeCache(target, type).forEach(function (item) {
                    (item[1] || item[0]).apply(target, [evt]);
                });
            }
            /**
             * 添加事件监听到缓存
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @param {Boolean} isOnce 是否单次执行
             * @param {Function} handlerWrap
             * @return {undefined}
             */
            function addEventCache(target, type, handler, isOnce, handlerWrap) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                if ((0, _toxicPredicateFunctions.isFunction)(isOnce) && !handlerWrap) {
                    handlerWrap = isOnce;
                    isOnce = undefined;
                }
                var handlers = [handler, undefined, isOnce];
                if (isOnce && !handlerWrap) {
                    handlerWrap = function handlerWrap() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        removeEventCache(target, type, handler, isOnce);
                        handler.apply(target, args);
                    };
                }
                if (handlerWrap) {
                    handlers[1] = handlerWrap;
                }
                getEvtTypeCache(target, type).push(handlers);
            }
            /**
             * 移除事件监听
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @return {undefined}
             */
            function removeEventCache(target, type, handler, isOnce) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                var typeCache = getEvtTypeCache(target, type);
                if (handler || isOnce) {
                    /* 有指定 handler 则清除对应监听 */
                    var handlerId_1 = -1;
                    var handlerWrap_1;
                    typeCache.find(function (item, i) {
                        if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
                            handlerId_1 = i;
                            handlerWrap_1 = item[1];
                            return true;
                        }
                    });
                    if (handlerId_1 !== -1) {
                        typeCache.splice(handlerId_1, 1);
                    }
                    return handlerWrap_1;
                } else {
                    /* 未指定 handler 则清除type对应的所有监听 */
                    typeCache.length = 0;
                }
            }
            /**
             * @class CustEvent
             * @description
             * Event 自定义事件类
             * 1. 可以使用不传参得到的实例作为eventBus使用
             * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
             * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
             * @param  {Object}  target 发生事件的对象（空则默认为event实例）
             * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
             * @return {event}
             */
            var CustEvent = /** @class */function () {
                function CustEvent(target, assign) {
                    var _this = this;
                    /* 设置__target不可枚举 */
                    Object.defineProperty(this, '__target', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    this.__target = this;
                    if (target) {
                        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
                            throw new Error('CusEvent target are not object');
                        }
                        this.__target = target;
                        /* 为target实现on\once\off\emit */
                        if (assign) {
                            ['on', 'once', 'off', 'emit'].forEach(function (mth) {
                                target[mth] = _this[mth];
                            });
                        }
                    }
                }
                /**
                 * 添加事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.on = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    addEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 添加事件监听,并且只执行一次
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @return {event}
                 */
                CustEvent.prototype.once = function (type, handler) {
                    return this.on(type, handler, true);
                };
                /**
                 * 移除事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.off = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    removeEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 触发事件监听函数
                 * @param {String} type 事件类型
                 * @return {event}
                 */
                CustEvent.prototype.emit = function (type, data) {
                    emitEventCache(this.__target, type, { data: data });
                    return this;
                };
                return CustEvent;
            }();
            exports.CustEvent = CustEvent;
            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(4);
            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _toxicUtils = __webpack_require__(5);
            var ToxicUtils = _interopRequireWildcard(_toxicUtils);
            var _toxicPredicateFunctions = __webpack_require__(0);
            var Predicate = _interopRequireWildcard(_toxicPredicateFunctions);
            var _utils = __webpack_require__(1);
            var Util = _interopRequireWildcard(_utils);
            var _events = __webpack_require__(2);
            var Events = _interopRequireWildcard(_events);
            var _dom = __webpack_require__(6);
            var Dom = _interopRequireWildcard(_dom);
            var _fetchJsonp = __webpack_require__(7);
            var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
            var _log = __webpack_require__(8);
            var _log2 = _interopRequireDefault(_log);
            var _uaParserJs = __webpack_require__(9);
            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }
            var __assign = undefined && undefined.__assign || Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) {
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                }
                return t;
            };
            // @flow
            exports.default = __assign({}, ToxicUtils, Predicate, Util, Events, Dom, { Log: _log2.default,
                UAParser: _uaParserJs2.default,
                fetchJsonp: _fetchJsonp2.default });
            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-utils v0.2.0
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicUtils = {});
            })(this, function (exports) {
                'use strict';

                function unwrapExports(x) {
                    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
                }
                function createCommonjsModule(fn, module) {
                    return module = { exports: {} }, fn(module, module.exports), module.exports;
                }
                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                var _toInteger = function _toInteger(it) {
                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                };
                // 7.2.1 RequireObjectCoercible(argument)
                var _defined = function _defined(it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };
                // true  -> String#at
                // false -> String#codePointAt
                var _stringAt = function _stringAt(TO_STRING) {
                    return function (that, pos) {
                        var s = String(_defined(that));
                        var i = _toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                    };
                };
                var _library = true;
                var _global = createCommonjsModule(function (module) {
                    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
                    // eslint-disable-next-line no-new-func
                    : Function('return this')();
                    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
                });
                var _core = createCommonjsModule(function (module) {
                    var core = module.exports = { version: '2.5.1' };
                    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
                });
                var _core_1 = _core.version;
                var _aFunction = function _aFunction(it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };
                // optional / simple context binding
                var _ctx = function _ctx(fn, that, length) {
                    _aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function (a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function (a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function (a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function () /* ...args */{
                        return fn.apply(that, arguments);
                    };
                };
                var _isObject = function _isObject(it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) === 'object' ? it !== null : typeof it === 'function';
                };
                var _anObject = function _anObject(it) {
                    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };
                var _fails = function _fails(exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };
                // Thank's IE8 for his funny defineProperty
                var _descriptors = !_fails(function () {
                    return Object.defineProperty({}, 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                var document = _global.document;
                // typeof document.createElement is 'object' in old IE
                var is = _isObject(document) && _isObject(document.createElement);
                var _domCreate = function _domCreate(it) {
                    return is ? document.createElement(it) : {};
                };
                var _ie8DomDefine = !_descriptors && !_fails(function () {
                    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                // 7.1.1 ToPrimitive(input [, PreferredType])
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                var _toPrimitive = function _toPrimitive(it, S) {
                    if (!_isObject(it)) return it;
                    var fn, val;
                    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };
                var dP = Object.defineProperty;
                var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                    _anObject(O);
                    P = _toPrimitive(P, true);
                    _anObject(Attributes);
                    if (_ie8DomDefine) try {
                        return dP(O, P, Attributes);
                    } catch (e) {/* empty */}
                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                    if ('value' in Attributes) O[P] = Attributes.value;
                    return O;
                };
                var _objectDp = {
                    f: f
                };
                var _propertyDesc = function _propertyDesc(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };
                var _hide = _descriptors ? function (object, key, value) {
                    return _objectDp.f(object, key, _propertyDesc(1, value));
                } : function (object, key, value) {
                    object[key] = value;
                    return object;
                };
                var PROTOTYPE = 'prototype';
                var $export = function $export(type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var IS_WRAP = type & $export.W;
                    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
                    var expProto = exports[PROTOTYPE];
                    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
                    var key, own, out;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        if (own && key in exports) continue;
                        // export native or passed
                        out = own ? target[key] : source[key];
                        // prevent global pollution for namespaces
                        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                        // bind timers to global for call from export context
                        : IS_BIND && own ? _ctx(out, _global)
                        // wrap global constructors for prevent change them in library
                        : IS_WRAP && target[key] == out ? function (C) {
                            var F = function F(a, b, c) {
                                if (this instanceof C) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new C();
                                        case 1:
                                            return new C(a);
                                        case 2:
                                            return new C(a, b);
                                    }
                                    return new C(a, b, c);
                                }
                                return C.apply(this, arguments);
                            };
                            F[PROTOTYPE] = C[PROTOTYPE];
                            return F;
                            // make static versions for prototype methods
                        }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                        if (IS_PROTO) {
                            (exports.virtual || (exports.virtual = {}))[key] = out;
                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                            if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                        }
                    }
                };
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                var _export = $export;
                var _redefine = _hide;
                var hasOwnProperty = {}.hasOwnProperty;
                var _has = function _has(it, key) {
                    return hasOwnProperty.call(it, key);
                };
                var _iterators = {};
                var toString = {}.toString;
                var _cof = function _cof(it) {
                    return toString.call(it).slice(8, -1);
                };
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                // eslint-disable-next-line no-prototype-builtins
                var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                    return _cof(it) == 'String' ? it.split('') : Object(it);
                };
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var _toIobject = function _toIobject(it) {
                    return _iobject(_defined(it));
                };
                // 7.1.15 ToLength
                var min = Math.min;
                var _toLength = function _toLength(it) {
                    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };
                var max = Math.max;
                var min$1 = Math.min;
                var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
                    index = _toInteger(index);
                    return index < 0 ? max(index + length, 0) : min$1(index, length);
                };
                // false -> Array#indexOf
                // true  -> Array#includes
                var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = _toIobject($this);
                        var length = _toLength(O.length);
                        var index = _toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el) while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else for (; length > index; index++) {
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                        }return !IS_INCLUDES && -1;
                    };
                };
                var SHARED = '__core-js_shared__';
                var store = _global[SHARED] || (_global[SHARED] = {});
                var _shared = function _shared(key) {
                    return store[key] || (store[key] = {});
                };
                var id = 0;
                var px = Math.random();
                var _uid = function _uid(key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };
                var shared = _shared('keys');
                var _sharedKey = function _sharedKey(key) {
                    return shared[key] || (shared[key] = _uid(key));
                };
                var arrayIndexOf = _arrayIncludes(false);
                var IE_PROTO$1 = _sharedKey('IE_PROTO');
                var _objectKeysInternal = function _objectKeysInternal(object, names) {
                    var O = _toIobject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O) {
                        if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                    } // Don't enum bug & hidden keys
                    while (names.length > i) {
                        if (_has(O, key = names[i++])) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    }return result;
                };
                // IE 8- don't enum bug keys
                var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var _objectKeys = Object.keys || function keys(O) {
                    return _objectKeysInternal(O, _enumBugKeys);
                };
                var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
                    _anObject(O);
                    var keys = _objectKeys(Properties);
                    var length = keys.length;
                    var i = 0;
                    var P;
                    while (length > i) {
                        _objectDp.f(O, P = keys[i++], Properties[P]);
                    }return O;
                };
                var document$1 = _global.document;
                var _html = document$1 && document$1.documentElement;
                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var IE_PROTO = _sharedKey('IE_PROTO');
                var Empty = function Empty() {};
                var PROTOTYPE$1 = 'prototype';
                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var _createDict = function createDict() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = _domCreate('iframe');
                    var i = _enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    _html.appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    _createDict = iframeDocument.F;
                    while (i--) {
                        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
                    }return _createDict();
                };
                var _objectCreate = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE$1] = _anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE$1] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = _createDict();
                    return Properties === undefined ? result : _objectDps(result, Properties);
                };
                var _wks = createCommonjsModule(function (module) {
                    var store = _shared('wks');
                    var _Symbol = _global.Symbol;
                    var USE_SYMBOL = typeof _Symbol == 'function';
                    var $exports = module.exports = function (name) {
                        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
                    };
                    $exports.store = store;
                });
                var def = _objectDp.f;
                var TAG = _wks('toStringTag');
                var _setToStringTag = function _setToStringTag(it, tag, stat) {
                    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
                };
                var IteratorPrototype = {};
                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                _hide(IteratorPrototype, _wks('iterator'), function () {
                    return this;
                });
                var _iterCreate = function _iterCreate(Constructor, NAME, next) {
                    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
                    _setToStringTag(Constructor, NAME + ' Iterator');
                };
                // 7.1.13 ToObject(argument)
                var _toObject = function _toObject(it) {
                    return Object(_defined(it));
                };
                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var IE_PROTO$2 = _sharedKey('IE_PROTO');
                var ObjectProto = Object.prototype;
                var _objectGpo = Object.getPrototypeOf || function (O) {
                    O = _toObject(O);
                    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };
                var ITERATOR = _wks('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';
                var returnThis = function returnThis() {
                    return this;
                };
                var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    _iterCreate(Constructor, NAME, next);
                    var getMethod = function getMethod(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
                    };
                    var TAG = NAME + ' Iterator';
                    var DEF_VALUES = DEFAULT == VALUES;
                    var VALUES_BUG = false;
                    var proto = Base.prototype;
                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                    var $default = $native || getMethod(DEFAULT);
                    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                    var methods, key, IteratorPrototype;
                    // Fix native
                    if ($anyNative) {
                        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            _setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        _hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    _iterators[NAME] = $default;
                    _iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries
                        };
                        if (FORCED) for (key in methods) {
                            if (!(key in proto)) _redefine(proto, key, methods[key]);
                        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };
                var $at = _stringAt(true);
                // 21.1.3.27 String.prototype[@@iterator]()
                _iterDefine(String, 'String', function (iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length) return { value: undefined, done: true };
                    point = $at(O, index);
                    this._i += point.length;
                    return { value: point, done: false };
                });
                // call something on iterator step with safe closing on error
                var _iterCall = function _iterCall(iterator, fn, value, entries) {
                    try {
                        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) _anObject(ret.call(iterator));
                        throw e;
                    }
                };
                // check on default Array iterator
                var ITERATOR$1 = _wks('iterator');
                var ArrayProto = Array.prototype;
                var _isArrayIter = function _isArrayIter(it) {
                    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
                };
                var _createProperty = function _createProperty(object, index, value) {
                    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
                };
                // getting tag from 19.1.3.6 Object.prototype.toString()
                var TAG$1 = _wks('toStringTag');
                // ES3 wrong here
                var ARG = _cof(function () {
                    return arguments;
                }()) == 'Arguments';
                // fallback for IE11 Script Access Denied error
                var tryGet = function tryGet(it, key) {
                    try {
                        return it[key];
                    } catch (e) {/* empty */}
                };
                var _classof = function _classof(it) {
                    var O, T, B;
                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                    // @@toStringTag case
                    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                    // builtinTag case
                    : ARG ? _cof(O)
                    // ES3 arguments fallback
                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                };
                var ITERATOR$2 = _wks('iterator');
                var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
                    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
                };
                var ITERATOR$3 = _wks('iterator');
                var SAFE_CLOSING = false;
                try {
                    var riter = [7][ITERATOR$3]();
                    riter['return'] = function () {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                } catch (e) {/* empty */}
                var _iterDetect = function _iterDetect(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR$3]();
                        iter.next = function () {
                            return { done: safe = true };
                        };
                        arr[ITERATOR$3] = function () {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) {/* empty */}
                    return safe;
                };
                _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                        var O = _toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = core_getIteratorMethod(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = _toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                });
                var from$2 = _core.Array.from;
                var from = createCommonjsModule(function (module) {
                    module.exports = { "default": from$2, __esModule: true };
                });
                unwrapExports(from);
                var toConsumableArray = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _from2 = _interopRequireDefault(from);
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = function (arr) {
                        if (Array.isArray(arr)) {
                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                                arr2[i] = arr[i];
                            }
                            return arr2;
                        } else {
                            return (0, _from2.default)(arr);
                        }
                    };
                });
                var _toConsumableArray = unwrapExports(toConsumableArray);
                var _iterStep = function _iterStep(done, value) {
                    return { value: value, done: !!done };
                };
                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
                    this._t = _toIobject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return _iterStep(1);
                    }
                    if (kind == 'keys') return _iterStep(0, index);
                    if (kind == 'values') return _iterStep(0, O[index]);
                    return _iterStep(0, [index, O[index]]);
                }, 'values');
                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                _iterators.Arguments = _iterators.Array;
                var TO_STRING_TAG = _wks('toStringTag');
                var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
                for (var i = 0; i < DOMIterables.length; i++) {
                    var NAME = DOMIterables[i];
                    var Collection = _global[NAME];
                    var proto = Collection && Collection.prototype;
                    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                    _iterators[NAME] = _iterators.Array;
                }
                var f$1 = _wks;
                var _wksExt = {
                    f: f$1
                };
                var iterator$2 = _wksExt.f('iterator');
                var iterator = createCommonjsModule(function (module) {
                    module.exports = { "default": iterator$2, __esModule: true };
                });
                unwrapExports(iterator);
                var _meta = createCommonjsModule(function (module) {
                    var META = _uid('meta');
                    var setDesc = _objectDp.f;
                    var id = 0;
                    var isExtensible = Object.isExtensible || function () {
                        return true;
                    };
                    var FREEZE = !_fails(function () {
                        return isExtensible(Object.preventExtensions({}));
                    });
                    var setMeta = function setMeta(it) {
                        setDesc(it, META, { value: {
                                i: 'O' + ++id,
                                w: {} // weak collections IDs
                            } });
                    };
                    var fastKey = function fastKey(it, create) {
                        // return primitive with prefix
                        if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return 'F';
                            // not necessary to add metadata
                            if (!create) return 'E';
                            // add missing metadata
                            setMeta(it);
                            // return object ID
                        }
                        return it[META].i;
                    };
                    var getWeak = function getWeak(it, create) {
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return true;
                            // not necessary to add metadata
                            if (!create) return false;
                            // add missing metadata
                            setMeta(it);
                            // return hash weak collections IDs
                        }
                        return it[META].w;
                    };
                    // add metadata on freeze-family methods calling
                    var onFreeze = function onFreeze(it) {
                        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                        return it;
                    };
                    var meta = module.exports = {
                        KEY: META,
                        NEED: false,
                        fastKey: fastKey,
                        getWeak: getWeak,
                        onFreeze: onFreeze
                    };
                });
                var _meta_1 = _meta.KEY;
                var _meta_2 = _meta.NEED;
                var _meta_3 = _meta.fastKey;
                var _meta_4 = _meta.getWeak;
                var _meta_5 = _meta.onFreeze;
                var defineProperty = _objectDp.f;
                var _wksDefine = function _wksDefine(name) {
                    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
                };
                var f$2 = Object.getOwnPropertySymbols;
                var _objectGops = {
                    f: f$2
                };
                var f$3 = {}.propertyIsEnumerable;
                var _objectPie = {
                    f: f$3
                };
                // all enumerable object keys, includes symbols
                var _enumKeys = function _enumKeys(it) {
                    var result = _objectKeys(it);
                    var getSymbols = _objectGops.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = _objectPie.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i) {
                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                        }
                    }
                    return result;
                };
                // 7.2.2 IsArray(argument)
                var _isArray = Array.isArray || function isArray(arg) {
                    return _cof(arg) == 'Array';
                };
                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
                var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return _objectKeysInternal(O, hiddenKeys);
                };
                var _objectGopn = {
                    f: f$5
                };
                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var gOPN$1 = _objectGopn.f;
                var toString$1 = {}.toString;
                var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                var getWindowNames = function getWindowNames(it) {
                    try {
                        return gOPN$1(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };
                var f$4 = function getOwnPropertyNames(it) {
                    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
                };
                var _objectGopnExt = {
                    f: f$4
                };
                var gOPD$1 = Object.getOwnPropertyDescriptor;
                var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
                    O = _toIobject(O);
                    P = _toPrimitive(P, true);
                    if (_ie8DomDefine) try {
                        return gOPD$1(O, P);
                    } catch (e) {/* empty */}
                    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
                };
                var _objectGopd = {
                    f: f$6
                };
                // ECMAScript 6 symbols shim
                var META = _meta.KEY;
                var gOPD = _objectGopd.f;
                var dP$1 = _objectDp.f;
                var gOPN = _objectGopnExt.f;
                var $Symbol = _global.Symbol;
                var $JSON = _global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE$2 = 'prototype';
                var HIDDEN = _wks('_hidden');
                var TO_PRIMITIVE = _wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = _shared('symbol-registry');
                var AllSymbols = _shared('symbols');
                var OPSymbols = _shared('op-symbols');
                var ObjectProto$1 = Object[PROTOTYPE$2];
                var USE_NATIVE = typeof $Symbol == 'function';
                var QObject = _global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc = _descriptors && _fails(function () {
                    return _objectCreate(dP$1({}, 'a', {
                        get: function get() {
                            return dP$1(this, 'a', { value: 7 }).a;
                        }
                    })).a != 7;
                }) ? function (it, key, D) {
                    var protoDesc = gOPD(ObjectProto$1, key);
                    if (protoDesc) delete ObjectProto$1[key];
                    dP$1(it, key, D);
                    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
                } : dP$1;
                var wrap = function wrap(tag) {
                    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
                    sym._k = tag;
                    return sym;
                };
                var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol';
                } : function (it) {
                    return it instanceof $Symbol;
                };
                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
                    _anObject(it);
                    key = _toPrimitive(key, true);
                    _anObject(D);
                    if (_has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP$1(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    _anObject(it);
                    var keys = _enumKeys(P = _toIobject(P));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) {
                        $defineProperty(it, key = keys[i++], P[key]);
                    }return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, key = _toPrimitive(key, true));
                    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
                    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = _toIobject(it);
                    key = _toPrimitive(key, true);
                    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(_toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto$1;
                    var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };
                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function _Symbol2() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function $set(value) {
                            if (this === ObjectProto$1) $set.call(OPSymbols, value);
                            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, _propertyDesc(1, value));
                        };
                        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                        return wrap(tag);
                    };
                    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                        return this._k;
                    });
                    _objectGopd.f = $getOwnPropertyDescriptor;
                    _objectDp.f = $defineProperty;
                    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
                    _objectPie.f = $propertyIsEnumerable;
                    _objectGops.f = $getOwnPropertySymbols;
                    if (_descriptors && !_library) {
                        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }
                    _wksExt.f = function (name) {
                        return wrap(_wks(name));
                    };
                }
                _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });
                for (var es6Symbols =
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
                    _wks(es6Symbols[j++]);
                }for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
                    _wksDefine(wellKnownSymbols[k++]);
                }_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    'for': function _for(key) {
                        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry) {
                            if (SymbolRegistry[key] === sym) return key;
                        }
                    },
                    useSetter: function useSetter() {
                        setter = true;
                    },
                    useSimple: function useSimple() {
                        setter = false;
                    }
                });
                _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
                    // 19.1.2.2 Object.create(O [, Properties])
                    create: $create,
                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                    defineProperty: $defineProperty,
                    // 19.1.2.3 Object.defineProperties(O, Properties)
                    defineProperties: $defineProperties,
                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                    getOwnPropertyNames: $getOwnPropertyNames,
                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                    getOwnPropertySymbols: $getOwnPropertySymbols
                });
                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                })), 'JSON', {
                    stringify: function stringify(it) {
                        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                        var args = [it];
                        var i = 1;
                        var replacer, $replacer;
                        while (arguments.length > i) {
                            args.push(arguments[i++]);
                        }replacer = args[1];
                        if (typeof replacer == 'function') $replacer = replacer;
                        if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
                            if ($replacer) value = $replacer.call(this, key, value);
                            if (!isSymbol(value)) return value;
                        };
                        args[1] = replacer;
                        return _stringify.apply($JSON, args);
                    }
                });
                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                _setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                _setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                _setToStringTag(_global.JSON, 'JSON', true);
                _wksDefine('asyncIterator');
                _wksDefine('observable');
                var symbol$2 = _core.Symbol;
                var symbol = createCommonjsModule(function (module) {
                    module.exports = { "default": symbol$2, __esModule: true };
                });
                unwrapExports(symbol);
                var _typeof_1 = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _iterator2 = _interopRequireDefault(iterator);
                    var _symbol2 = _interopRequireDefault(symbol);
                    var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    };
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    };
                });
                unwrapExports(_typeof_1);
                // most Object methods by ES6 should accept primitives
                var _objectSap = function _objectSap(KEY, exec) {
                    var fn = (_core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    _export(_export.S + _export.F * _fails(function () {
                        fn(1);
                    }), 'Object', exp);
                };
                // 19.1.2.14 Object.keys(O)
                _objectSap('keys', function () {
                    return function keys(it) {
                        return _objectKeys(_toObject(it));
                    };
                });
                var keys$1 = _core.Object.keys;
                var keys = createCommonjsModule(function (module) {
                    module.exports = { "default": keys$1, __esModule: true };
                });
                unwrapExports(keys);
                // 20.1.2.3 Number.isInteger(number)
                var floor$1 = Math.floor;
                var _isInteger = function isInteger(it) {
                    return !_isObject(it) && isFinite(it) && floor$1(it) === it;
                };
                // 20.1.2.3 Number.isInteger(number)
                _export(_export.S, 'Number', { isInteger: _isInteger });
                var isInteger$2 = _core.Number.isInteger;
                var isInteger$1 = createCommonjsModule(function (module) {
                    module.exports = { "default": isInteger$2, __esModule: true };
                });
                unwrapExports(isInteger$1);
                var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
                var space = '[' + _stringWs + ']';
                var non = '\u200B\x85';
                var ltrim = RegExp('^' + space + space + '*');
                var rtrim = RegExp(space + space + '*$');
                var exporter = function exporter(KEY, exec, ALIAS) {
                    var exp = {};
                    var FORCE = _fails(function () {
                        return !!_stringWs[KEY]() || non[KEY]() != non;
                    });
                    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
                    if (ALIAS) exp[ALIAS] = fn;
                    _export(_export.P + _export.F * FORCE, 'String', exp);
                };
                // 1 -> String#trimLeft
                // 2 -> String#trimRight
                // 3 -> String#trim
                var trim = exporter.trim = function (string, TYPE) {
                    string = String(_defined(string));
                    if (TYPE & 1) string = string.replace(ltrim, '');
                    if (TYPE & 2) string = string.replace(rtrim, '');
                    return string;
                };
                var _stringTrim = exporter;
                var $parseFloat = _global.parseFloat;
                var $trim = _stringTrim.trim;
                var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
                    var string = $trim(String(str), 3);
                    var result = $parseFloat(string);
                    return result === 0 && string.charAt(0) == '-' ? -0 : result;
                } : $parseFloat;
                // 20.1.2.12 Number.parseFloat(string)
                _export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });
                var _parseFloat$1 = parseFloat;
                var _parseFloat = createCommonjsModule(function (module) {
                    module.exports = { "default": _parseFloat$1, __esModule: true };
                });
                unwrapExports(_parseFloat);
                /**
                 * toxic-predicate-functions v0.1.5
                 * (c) 2017 toxic-johann
                 * Released under MIT
                 */
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject$1(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * the handler to generate an deep traversal handler
                 * @param  {Function} fn the function you wanna run when you reach in the deep property
                 * @return {Function}    the handler
                 */
                function genTraversalHandler(fn) {
                    var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
                        target[key] = value;
                    };
                    // use recursive to move what in source to the target
                    // if you do not provide a target, we will create a new target
                    function recursiveFn(source, target, key) {
                        if (isArray(source) || isObject$1(source)) {
                            target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
                            for (var _key in source) {
                                // $FlowFixMe: support computed key here
                                setter(target, _key, recursiveFn(source[_key], target[_key], _key));
                                // target[key] = recursiveFn(source[key], target[key], key);
                            }
                            return target;
                        }
                        return fn(source, target, key);
                    }
                    return recursiveFn;
                }
                var _deepAssign = genTraversalHandler(function (val) {
                    return val;
                });
                /**
                 * deeply clone an object
                 * @param  {Array|Object} source if you pass in other type, it will throw an error
                 * @return {clone-target}        the new Object
                 */
                function deepClone(source) {
                    if (isPrimitive(source)) {
                        throw new TypeError('deepClone only accept non primitive type');
                    }
                    return _deepAssign(source);
                }
                /**
                 * merge multiple objects
                 * @param  {...Object} args [description]
                 * @return {merge-object}         [description]
                 */
                function deepAssign() {
                    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
                    if (args.length < 2) {
                        throw new Error('deepAssign accept two and more argument');
                    }
                    for (var i = args.length - 1; i > -1; i--) {
                        if (isPrimitive(args[i])) {
                            throw new TypeError('deepAssign only accept non primitive type');
                        }
                    }
                    var target = args.shift();
                    args.forEach(function (source) {
                        return _deepAssign(source, target);
                    });
                    return target;
                }
                /**
                 * camelize any string, e.g hello world -> helloWorld
                 * @param  {string} str only accept string!
                 * @return {string}     camelize string
                 */
                function camelize(str, isBig) {
                    return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
                        return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
                    });
                }
                /**
                 * hypenate any string e.g hello world -> hello-world
                 * @param  {string} str only accept string
                 * @return {string}
                 */
                function hypenate(str) {
                    return camelize(str).replace(/([A-Z])/g, function (match) {
                        return '-' + match.toLowerCase();
                    });
                }
                /**
                 * bind the function with some context. we have some fallback strategy here
                 * @param {function} fn the function which we need to bind the context on
                 * @param {any} context the context object
                 */
                function bind(fn, context) {
                    if (fn.bind) {
                        return fn.bind(context);
                    } else if (fn.apply) {
                        return function __autobind__() {
                            for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                                args[_key3] = arguments[_key3];
                            }
                            return fn.apply(context, args);
                        };
                    } else {
                        return function __autobind__() {
                            for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                                args[_key4] = arguments[_key4];
                            }
                            return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
                        };
                    }
                }
                /**
                 * generate an uuid
                 */
                function uuid() {
                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                }
                /**
                 * generate an random number which length is 4
                 */
                function S4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                /**
                 * generate an random number with specific length
                 */
                function rand(length) {
                    var str = '';
                    while (str.length < length) {
                        str += S4();
                    }
                    return str.slice(0, length);
                }
                /**
                 * get an deep property
                 */
                function getDeepProperty(obj, keys) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$throwError = _ref.throwError,
                        throwError = _ref$throwError === undefined ? false : _ref$throwError,
                        backup = _ref.backup;
                    if (isString(keys)) {
                        keys = keys.split('.');
                    }
                    if (!isArray(keys)) {
                        throw new TypeError('keys of getDeepProperty must be string or Array<string>');
                    }
                    var read = [];
                    var target = obj;
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i];
                        if (isVoid(target)) {
                            if (throwError) {
                                throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
                            } else {
                                return backup;
                            }
                        }
                        target = target[key];
                        read.push(key);
                    }
                    return target;
                }
                exports.genTraversalHandler = genTraversalHandler;
                exports.deepClone = deepClone;
                exports.deepAssign = deepAssign;
                exports.camelize = camelize;
                exports.hypenate = hypenate;
                exports.bind = bind;
                exports.uuid = uuid;
                exports.S4 = S4;
                exports.rand = rand;
                exports.getDeepProperty = getDeepProperty;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NodeWrap = exports.supportsPassive = undefined;
            exports.getAttr = getAttr;
            exports.setAttr = setAttr;
            exports.addClassName = addClassName;
            exports.removeClassName = removeClassName;
            exports.hasClassName = hasClassName;
            exports.removeEvent = removeEvent;
            exports.addEvent = addEvent;
            exports.addDelegate = addDelegate;
            exports.removeDelegate = removeDelegate;
            exports.getStyle = getStyle;
            exports.setStyle = setStyle;
            exports.query = query;
            exports.removeEl = removeEl;
            exports.findParents = findParents;
            exports.$ = $;
            var _toxicPredicateFunctions = __webpack_require__(0);
            var _events = __webpack_require__(2);
            var _utils = __webpack_require__(1);
            /**
             * @module dom
             * @author huzunjie
             * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
             */
            var _divEl = _utils.inBrowser ? document.createElement('div') : {};
            var _textAttrName = 'innerText';
            'textContent' in _divEl && (_textAttrName = 'textContent');
            var _arrPrototype = Array.prototype;
            /**
             * 读取HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @return {String}
             */
            function getAttr(el, attrName) {
                return el.getAttribute(attrName);
            }
            /**
             * 设置HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @param {String} attrVal 目标属性值
             */
            function setAttr(el, attrName, attrVal) {
                if (attrVal === undefined) {
                    el.removeAttribute(attrName);
                } else {
                    el.setAttribute(attrName, attrVal);
                }
            }
            /**
             * 为HTML元素添加className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要添加的className（多个以空格分割）
             */
            function addClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.add(c);
                    });
                } else {
                    var curCls_1 = " " + (el.className || '') + " ";
                    clsArr.forEach(function (c) {
                        curCls_1.indexOf(" " + c + " ") === -1 && (curCls_1 += ' ' + c);
                    });
                    el.className = curCls_1.trim();
                }
            }
            /**
             * 为HTML元素移除className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要移除的className（多个以空格分割）
             */
            function removeClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.remove(c);
                    });
                } else {
                    var curCls_2 = " " + el.className + " ";
                    clsArr.forEach(function (c) {
                        var tar = ' ' + c + ' ';
                        while (curCls_2.indexOf(tar) !== -1) {
                            curCls_2 = curCls_2.replace(tar, ' ');
                        }
                    });
                    el.className = curCls_2.trim();
                }
            }
            /**
             * 检查HTML元素是否已设置className
             * @param {HTMLElement} el 目标元素
             * @param {String} className 要检查的className
             * @return {Boolean}
             */
            function hasClassName(el, className) {
                return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
            }
            /**
             * addEventListener 是否已支持 passive
             * @return {Boolean}
             */
            var supportsPassive = exports.supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function get() {
                        exports.supportsPassive = supportsPassive = true;
                    }
                });
                if (_utils.inBrowser) window.addEventListener('test', null, opts);
            } catch (e) {
                console.error(e);
            }
            /**
             * 为HTML元素移除事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean} capture 是否在捕获阶段的监听
             */
            function removeEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    /* 尝试从缓存中读取包装后的方法 */
                    var handlerWrap = (0, _events.removeEventCache)(el, type + '_once', handler);
                    if (handlerWrap) {
                        handler = handlerWrap;
                    }
                }
                el.removeEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
             */
            function addEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    var oldHandler_1 = handler;
                    handler = function () {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            oldHandler_1.apply(this, args);
                            removeEvent(el, type, handler, once, capture);
                        };
                    }();
                    /* 将包装后的方法记录到缓存中 */
                    (0, _events.addEventCache)(el, type + '_once', oldHandler_1, handler);
                }
                el.addEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function addDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                var handlerWrap = function handlerWrap(e) {
                    var targetElsArr = findParents(e.target || e.srcElement, el, true);
                    var targetElArr = query(selector, el, true);
                    var retEl;
                    if (targetElArr.find) {
                        retEl = targetElArr.find(function (seEl) {
                            return targetElsArr.find(function (tgEl) {
                                return seEl === tgEl;
                            });
                        });
                    } else {
                        // Fixed IE11 Array.find not defined bug
                        targetElArr.forEach(function (seEl) {
                            return !retEl && targetElsArr.forEach(function (tgEl) {
                                if (!retEl && seEl === tgEl) {
                                    retEl = tgEl;
                                }
                            });
                        });
                    }
                    retEl && handler.apply(retEl, arguments);
                };
                /* 将包装后的方法记录到缓存中 */
                (0, _events.addEventCache)(el, type + '_delegate_' + selector, handler, handlerWrap);
                el.addEventListener(type, handlerWrap, capture);
            }
            /**
             * 为HTML元素移除事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function removeDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                /* 尝试从缓存中读取包装后的方法 */
                var handlerWrap = (0, _events.removeEventCache)(el, type + '_delegate_' + selector, handler);
                handlerWrap && el.removeEventListener(type, handlerWrap, capture);
            }
            /**
             * 读取HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @return {String}
             */
            function getStyle(el, key) {
                return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
            }
            /**
             * 设置HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @param {String} val 样式值
             */
            function setStyle(el, key, val) {
                if ((0, _toxicPredicateFunctions.isObject)(key)) {
                    for (var k in key) {
                        setStyle(el, k, key[k]);
                    }
                } else {
                    el.style[key] = val;
                }
            }
            /**
             * 根据选择器查询目标元素
             * @param {String} selector 选择器,用于 querySelectorAll
             * @param {HTMLElement} container 父容器
             * @param {Boolean} toArray 强制输出为数组
             * @return {NodeList|Array}
             */
            function query(selector, container, toArray) {
                if (container === void 0) {
                    container = document;
                }
                var retNodeList = container.querySelectorAll(selector);
                return toArray ? Array.from(retNodeList) : retNodeList;
            }
            /**
             * 从DOM树中移除el
             * @param {HTMLElement} el 目标元素
             */
            function removeEl(el) {
                el.parentNode.removeChild(el);
            }
            /**
             * 查找元素的父节点们
             * @param {HTMLElement} el 目标元素
             * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
             * @param {Boolean} haveEl 包含当前元素
             * @param {Boolean} haveEndEl 包含设定的最大父容器
             */
            function findParents(el, endEl, haveEl, haveEndEl) {
                if (endEl === void 0) {
                    endEl = null;
                }
                var retEls = [];
                if (haveEl) {
                    retEls.push(el);
                }
                while (el && el.parentNode !== endEl) {
                    el = el.parentNode;
                    el && retEls.push(el);
                }
                if (haveEndEl) {
                    retEls.push(endEl);
                }
                return retEls;
            }
            /**
             * @class NodeWrap
             * @description
             * NodeWrap DOM包装器，用以实现基本的链式操作
             * new dom.NodeWrap('*') 相当于 dom.$('*')
             * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
             * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
             * @param {HTMLElement} container 父容器（默认为document）
             */
            var NodeWrap = /** @class */function () {
                function NodeWrap(selector, container) {
                    if (container === void 0) {
                        container = document;
                    }
                    var _this = this;
                    _this.selector = selector;
                    /* String||NodeList||HTMLElement 识别处理 */
                    var elsArr;
                    if (selector && selector.constructor === NodeList) {
                        /* 支持直接传入NodeList来构建包装器 */
                        elsArr = (0, _utils.makeArray)(selector);
                    } else if ((0, _toxicPredicateFunctions.isArray)(selector)) {
                        /* 支持直接传入Node数组来构建包装器 */
                        elsArr = selector;
                    } else if ((0, _toxicPredicateFunctions.isString)(selector)) {
                        if (selector.indexOf('<') === 0) {
                            /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
                            _divEl.innerHTML = selector;
                            elsArr = query('*', _divEl, true);
                        } else {
                            /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
                            elsArr = query(selector, container, true);
                        }
                    } else {
                        /* 其他任意对象直接构建包装器 */
                        elsArr = [selector];
                    }
                    Object.assign(_this, elsArr);
                    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
                    _this.length = elsArr.length;
                }
                /**
                 * 循环遍历DOM集合
                 * @param {Function} fn 遍历函数 fn(item, i)
                 * @return {Object}
                 */
                NodeWrap.prototype.each = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.forEach.apply(this, args);
                    return this;
                };
                /**
                 * 添加元素到DOM集合
                 * @param {HTMLElement} el 要加入的元素
                 * @return {this}
                 */
                NodeWrap.prototype.push = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.push.apply(this, args);
                    return this;
                };
                /**
                 * 截取DOM集合片段，并得到新的包装器splice
                 * @param {Nubmer} start
                 * @param {Nubmer} count
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.splice = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return $(_arrPrototype.splice.apply(this, args));
                };
                /**
                 * 查找子元素
                 * @param {String} selector 选择器
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.find = function (selector) {
                    var childs = [];
                    this.each(function (el) {
                        childs = childs.concat(query(selector, el, true));
                    });
                    var childsWrap = $(childs);
                    childsWrap.parent = this;
                    childsWrap.selector = selector;
                    return childsWrap;
                };
                /**
                 * 添加子元素
                 * @param {HTMLElement} childEls 要添加的HTML元素
                 * @return {this}
                 */
                NodeWrap.prototype.append = function (childEls) {
                    var childsWrap = $(childEls);
                    var firstEl = this[0];
                    childsWrap.each(function (newEl) {
                        return firstEl.appendChild(newEl);
                    });
                    return this;
                };
                /**
                 * 将元素集合添加到指定容器
                 * @param {HTMLElement} parentEl 要添加到父容器
                 * @return {this}
                 */
                NodeWrap.prototype.appendTo = function (parentEl) {
                    $(parentEl).append(this);
                    return this;
                };
                /**
                 * DOM集合text内容读写操作
                 * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.text = function (val) {
                    if (arguments.length === 0) {
                        return this[0][_textAttrName];
                    }
                    return this.each(function (el) {
                        el[_textAttrName] = val;
                    });
                };
                /**
                 * DOM集合HTML内容读写操作
                 * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.html = function (html) {
                    if (arguments.length === 0) {
                        return this[0].innerHTML;
                    }
                    return this.each(function (el) {
                        el.innerHTML = html;
                    });
                };
                /**
                 * DOM集合属性读写操作
                 * @param {String} name 属性名称
                 * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.attr = function (name, val) {
                    if (arguments.length === 1) {
                        return getAttr(this[0], name);
                    }
                    return this.each(function (el) {
                        return setAttr(el, name, val);
                    });
                };
                /**
                 * DOM集合dataset读写操作
                 * @param {String} key 键名
                 * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.data = function (key, val) {
                    if (arguments.length === 0) {
                        return this[0].dataset || {};
                    }
                    if (arguments.length === 1) {
                        return (this[0].dataset || {})[key];
                    }
                    return this.each(function (el) {
                        (el.dataset || (el.dataset = {}))[key] = val;
                    });
                };
                /**
                 * DOM集合样式读写操作
                 * @param {String} key 样式key
                 * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.css = function (key, val) {
                    if (arguments.length === 1 && !(0, _toxicPredicateFunctions.isObject)(key)) {
                        return getStyle(this[0], key);
                    }
                    return this.each(function (el) {
                        return setStyle(el, key, val);
                    });
                };
                /**
                 * 为DOM集合增加className
                 * @param {String} cls 要增加的className
                 * @return {this}
                 */
                NodeWrap.prototype.addClass = function (cls) {
                    return this.each(function (el) {
                        return addClassName(el, cls);
                    });
                };
                /**
                 * 移除当前DOM集合的className
                 * @param {String} cls 要移除的className
                 * @return {this}
                 */
                NodeWrap.prototype.removeClass = function (cls) {
                    return this.each(function (el) {
                        return removeClassName(el, cls);
                    });
                };
                /**
                 * 检查索引0的DOM是否有className
                 * @param {String} cls 要检查的className
                 * @return {this}
                 */
                NodeWrap.prototype.hasClass = function (cls) {
                    return hasClassName(this[0], cls);
                };
                /**
                 * 为DOM集合添加事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.on = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合解除事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.off = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合绑定事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.delegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 为DOM集合解绑事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.undelegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 从DOM树中移除
                 * @return {this}
                 */
                NodeWrap.prototype.remove = function () {
                    return this.each(function (el) {
                        return removeEl(el);
                    });
                };
                return NodeWrap;
            }();
            exports.NodeWrap = NodeWrap;
            /**
             * 根据选择器查询并得到目标元素的wrap包装器
             * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
             * @param {HTMLElement} container 父容器
             * @return {Object}
             */
            function $(selector, container) {
                return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
            }
            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
                    factory(exports, module);
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod.exports, mod);
                    global.fetchJsonp = mod.exports;
                }
            })(this, function (exports, module) {
                'use strict';

                var defaultOptions = {
                    timeout: 5000,
                    jsonpCallback: 'callback',
                    jsonpCallbackFunction: null
                };
                function generateCallbackFunction() {
                    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
                }
                function clearFunction(functionName) {
                    // IE8 throws an exception when you try to delete a property on window
                    // http://stackoverflow.com/a/1824228/751089
                    try {
                        delete window[functionName];
                    } catch (e) {
                        window[functionName] = undefined;
                    }
                }
                function removeScript(scriptId) {
                    var script = document.getElementById(scriptId);
                    if (script) {
                        document.getElementsByTagName('head')[0].removeChild(script);
                    }
                }
                function fetchJsonp(_url) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    // to avoid param reassign
                    var url = _url;
                    var timeout = options.timeout || defaultOptions.timeout;
                    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
                    var timeoutId = undefined;
                    return new Promise(function (resolve, reject) {
                        var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
                        var scriptId = jsonpCallback + '_' + callbackFunction;
                        window[callbackFunction] = function (response) {
                            resolve({
                                ok: true,
                                // keep consistent with fetch API
                                json: function json() {
                                    return Promise.resolve(response);
                                }
                            });
                            if (timeoutId) clearTimeout(timeoutId);
                            removeScript(scriptId);
                            clearFunction(callbackFunction);
                        };
                        // Check if the user set their own params, and if not add a ? to start a list of params
                        url += url.indexOf('?') === -1 ? '?' : '&';
                        var jsonpScript = document.createElement('script');
                        jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
                        if (options.charset) {
                            jsonpScript.setAttribute('charset', options.charset);
                        }
                        jsonpScript.id = scriptId;
                        document.getElementsByTagName('head')[0].appendChild(jsonpScript);
                        timeoutId = setTimeout(function () {
                            reject(new Error('JSONP request to ' + _url + ' timed out'));
                            clearFunction(callbackFunction);
                            removeScript(scriptId);
                            window[callbackFunction] = function () {
                                clearFunction(callbackFunction);
                            };
                        }, timeout);
                        // Caught if got 404/500
                        jsonpScript.onerror = function () {
                            reject(new Error('JSONP request to ' + _url + ' failed'));
                            clearFunction(callbackFunction);
                            removeScript(scriptId);
                            if (timeoutId) clearTimeout(timeoutId);
                        };
                    });
                }
                // export as global function
                /*
                let local;
                if (typeof global !== 'undefined') {
                  local = global;
                } else if (typeof self !== 'undefined') {
                  local = self;
                } else {
                  try {
                    local = Function('return this')();
                  } catch (e) {
                    throw new Error('polyfill failed because global object is unavailable in this environment');
                  }
                }
                local.fetchJsonp = fetchJsonp;
                */
                module.exports = fetchJsonp;
            });
            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            }; // @flow
            var _toxicPredicateFunctions = __webpack_require__(0);
            function formatter(tag, msg) {
                if (!(0, _toxicPredicateFunctions.isString)(tag)) throw new TypeError("Log's method only acccept string as argument, but not " + tag + " in " + (typeof tag === "undefined" ? "undefined" : _typeof(tag)));
                if (!(0, _toxicPredicateFunctions.isString)(msg)) return "[" + Log.GLOBAL_TAG + "] > " + tag;
                tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
                return "[" + tag + "] > " + msg;
            }
            /**
             * Log Object
             */
            var Log = /** @class */function () {
                function Log() {}
                /**
                 * equal to console.error, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.error = function (tag, msg) {
                    if (!Log.ENABLE_ERROR) {
                        return;
                    }
                    (console.error || console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.info, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.info = function (tag, msg) {
                    if (!Log.ENABLE_INFO) {
                        return;
                    }
                    (console.info || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.warn, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.warn = function (tag, msg) {
                    if (!Log.ENABLE_WARN) {
                        return;
                    }
                    (console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.debug, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.debug = function (tag, msg) {
                    if (!Log.ENABLE_DEBUG) {
                        return;
                    }
                    (console.debug || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.verbose, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.verbose = function (tag, msg) {
                    if (!Log.ENABLE_VERBOSE) {
                        return;
                    }
                    console.log(formatter(tag, msg));
                };
                /**
                 * @member {string}
                 */
                Log.GLOBAL_TAG = 'chimee';
                /**
                 * @member {boolean}
                 */
                Log.FORCE_GLOBAL_TAG = false;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_ERROR = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_INFO = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_WARN = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_DEBUG = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_VERBOSE = true;
                return Log;
            }();
            exports.default = Log;
            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__; /**
                                               * UAParser.js v0.7.17
                                               * Lightweight JavaScript-based User-Agent string parser
                                               * https://github.com/faisalman/ua-parser-js
                                               *
                                               * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                               * Dual licensed under GPLv2 & MIT
                                               */
            (function (window, undefined) {
                'use strict';
                //////////////
                // Constants
                /////////////

                var LIBVERSION = '0.7.17',
                    EMPTY = '',
                    UNKNOWN = '?',
                    FUNC_TYPE = 'function',
                    UNDEF_TYPE = 'undefined',
                    OBJ_TYPE = 'object',
                    STR_TYPE = 'string',
                    MAJOR = 'major',
                    // deprecated
                MODEL = 'model',
                    NAME = 'name',
                    TYPE = 'type',
                    VENDOR = 'vendor',
                    VERSION = 'version',
                    ARCHITECTURE = 'architecture',
                    CONSOLE = 'console',
                    MOBILE = 'mobile',
                    TABLET = 'tablet',
                    SMARTTV = 'smarttv',
                    WEARABLE = 'wearable',
                    EMBEDDED = 'embedded';
                ///////////
                // Helper
                //////////
                var util = {
                    extend: function extend(regexes, extensions) {
                        var margedRegexes = {};
                        for (var i in regexes) {
                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                            } else {
                                margedRegexes[i] = regexes[i];
                            }
                        }
                        return margedRegexes;
                    },
                    has: function has(str1, str2) {
                        if (typeof str1 === "string") {
                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                        } else {
                            return false;
                        }
                    },
                    lowerize: function lowerize(str) {
                        return str.toLowerCase();
                    },
                    major: function major(version) {
                        return (typeof version === 'undefined' ? 'undefined' : _typeof2(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                    },
                    trim: function trim(str) {
                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                };
                ///////////////
                // Map helper
                //////////////
                var mapper = {
                    rgx: function rgx(ua, arrays) {
                        //var result = {},
                        var i = 0,
                            j,
                            k,
                            p,
                            q,
                            matches,
                            match; //, args = arguments;
                        /*// construct object barebones
                        for (p = 0; p < args[1].length; p++) {
                            q = args[1][p];
                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                        }*/
                        // loop through all regexes maps
                        while (i < arrays.length && !matches) {
                            var regex = arrays[i],
                                // even sequence (0,2,4,..)
                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                            j = k = 0;
                            // try matching uastring with regexes
                            while (j < regex.length && !matches) {
                                matches = regex[j++].exec(ua);
                                if (!!matches) {
                                    for (p = 0; p < props.length; p++) {
                                        match = matches[++k];
                                        q = props[p];
                                        // check if given property is actually array
                                        if ((typeof q === 'undefined' ? 'undefined' : _typeof2(q)) === OBJ_TYPE && q.length > 0) {
                                            if (q.length == 2) {
                                                if (_typeof2(q[1]) == FUNC_TYPE) {
                                                    // assign modified match
                                                    this[q[0]] = q[1].call(this, match);
                                                } else {
                                                    // assign given value, ignore regex match
                                                    this[q[0]] = q[1];
                                                }
                                            } else if (q.length == 3) {
                                                // check whether function or regex
                                                if (_typeof2(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                    // call function (usually string mapper)
                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                } else {
                                                    // sanitize match using given regex
                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                }
                                            } else if (q.length == 4) {
                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                            }
                                        } else {
                                            this[q] = match ? match : undefined;
                                        }
                                    }
                                }
                            }
                            i += 2;
                        }
                        // console.log(this);
                        //return this;
                    },
                    str: function str(_str, map) {
                        for (var i in map) {
                            // check if array
                            if (_typeof2(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                for (var j = 0; j < map[i].length; j++) {
                                    if (util.has(map[i][j], _str)) {
                                        return i === UNKNOWN ? undefined : i;
                                    }
                                }
                            } else if (util.has(map[i], _str)) {
                                return i === UNKNOWN ? undefined : i;
                            }
                        }
                        return _str;
                    }
                };
                ///////////////
                // String map
                //////////////
                var maps = {
                    browser: {
                        oldsafari: {
                            version: {
                                '1.0': '/8',
                                '1.2': '/1',
                                '1.3': '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/'
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                'Fire Phone': ['SD', 'KF']
                            }
                        },
                        sprint: {
                            model: {
                                'Evo Shift 4G': '7373KT'
                            },
                            vendor: {
                                'HTC': 'APA',
                                'Sprint': 'Sprint'
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                'ME': '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                '2000': 'NT 5.0',
                                'XP': ['NT 5.1', 'NT 5.2'],
                                'Vista': 'NT 6.0',
                                '7': 'NT 6.1',
                                '8': 'NT 6.2',
                                '8.1': 'NT 6.3',
                                '10': ['NT 6.4', 'NT 10.0'],
                                'RT': 'ARM'
                            }
                        }
                    }
                };
                //////////////
                // Regex map
                /////////////
                var regexes = {
                    browser: [[
                    // Presto based
                    /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                    ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                    ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
                    ], [[NAME, 'Opera'], VERSION], [
                    // Mixed
                    /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                    // Trident based
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    // Avant/IEMobile/SlimBrowser/Baidu
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    // Webkit/KHTML based
                    /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                    ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                    ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                    ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
                    ], [[NAME, 'Yandex'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
                    ], [[NAME, 'Puffin'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                    // UCBrowser
                    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                    ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
                    ], [[NAME, 'WeChat'], VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                    ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                    ], [NAME, VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                    ], [VERSION, [NAME, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                    ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                    ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                    ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
                    ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                    ], [[NAME, 'Chrome'], VERSION], [/(coast)\/([\w\.]+)/i // Opera Coast
                    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
                    ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                    ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                    ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
                    // Gecko based
                    /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    // Other
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                    ], [NAME, VERSION]
                    /* /////////////////////
                    // Media players BEGIN
                    ////////////////////////
                                 , [
                                 /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                    /(coremedia) v((\d+)[\w\._]+)/i
                    ], [NAME, VERSION], [
                                 /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                    ], [NAME, VERSION], [
                                 /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                    ], [NAME, VERSION], [
                                 /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                        // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                        // NSPlayer/PSP-InternetRadioPlayer/Videos
                    /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                    /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                    /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                    ], [NAME, VERSION], [
                    /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                    ], [NAME, VERSION], [
                                 /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                    ], [[NAME, 'Flip Player'], VERSION], [
                                 /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                        // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                    ], [NAME], [
                                 /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                        // Gstreamer
                    ], [NAME, VERSION], [
                                 /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                    /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                        // Java/urllib/requests/wget/cURL
                    /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                    ], [NAME, VERSION], [
                                 /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                    ], [[NAME, /_/g, ' '], VERSION], [
                                 /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                        // MPlayer SVN
                    ], [NAME, VERSION], [
                                 /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                    ], [NAME, VERSION], [
                                 /(mplayer)/i,                                                       // MPlayer (no other info)
                    /(yourmuze)/i,                                                      // YourMuze
                    /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                    ], [NAME], [
                                 /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                    ], [NAME, VERSION], [
                                 /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                    ], [NAME, VERSION], [
                                 /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                    ], [NAME, VERSION], [
                                 /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                    /(winamp)\s((\d+)[\w\.-]+)/i,
                    /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                    ], [NAME, VERSION], [
                                 /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                        // inlight radio
                    ], [NAME], [
                                 /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                        // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                        // SoundTap/Totem/Stagefright/Streamium
                    ], [NAME, VERSION], [
                                 /(smp)((\d+)[\d\.]+)/i                                              // SMP
                    ], [NAME, VERSION], [
                                 /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                    /(vlc)\/((\d+)[\w\.-]+)/i,
                    /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                    /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                    /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                    ], [NAME, VERSION], [
                                 /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                    /(windows-media-player)\/((\d+)[\w\.-]+)/i
                    ], [[NAME, /-/g, ' '], VERSION], [
                                 /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                        // Windows Media Server
                    ], [VERSION, [NAME, 'Windows']], [
                                 /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                    ], [NAME, VERSION], [
                                 /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                    /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                    ], [[NAME, 'rad.io'], VERSION]
                                 //////////////////////
                    // Media players END
                    ////////////////////*/
                    ],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
                    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
                    ], [[ARCHITECTURE, 'ia32']], [
                    // PocketPC mistakenly identified as PowerPC
                    /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
                    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                    ], [[ARCHITECTURE, util.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
                    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i // Asus
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
                    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                    // Asus Tablets
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i // Nintendo
                    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
                    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
                    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
                    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
                    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i // Huawei
                    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
                    ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
                    // Motorola
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
                    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
                    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
                    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
                    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
                    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [/android.+;\s(glass)\s\d/i // Google Glass
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i // Redmi Phones
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i // Mi Pad tablets
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu Tablet
                    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [/android.+a000(1)\s+build/i // OnePlus
                    ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i // Dell Venue Tablets
                    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i // ZTE K Series Tablet
                    ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i // Dragon Touch Tablet
                    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?.+)\s+build/i // Insignia Tablets
                    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i // NextBook Tablets
                    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i // LvTel Phones
                    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i // Le Pan Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i // Gigaset Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android.+)[;\/].+build/i // Generic Android Device
                    ], [MODEL, [VENDOR, 'Generic']]
                    /*//////////////////////////
                        // TODO: move to string map
                        ////////////////////////////
                                         /(C6603)/i                                                          // Sony Xperia Z C6603
                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                        /(C6903)/i                                                          // Sony Xperia Z 1
                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                         /(T3C)/i                                                            // Advan Vandroid T3C
                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                                         /(V972M)/i                                                          // ZTE V972M
                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                                         /////////////
                        // END TODO
                        ///////////*/
                    ],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                    ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                    ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
                    ], [VERSION, NAME]],
                    os: [[
                    // Windows based
                    /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                    ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
                    // Mobile/Embedded OS
                    /\((bb)(10);/i // BlackBerry 10
                    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                    /linux;.+(sailfish);/i // Sailfish OS
                    ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                    ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
                    ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                    ], [[NAME, 'Firefox OS'], VERSION], [
                    // Console
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    // GNU/Linux based
                    /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                    /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i // GNU
                    ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                    ], [[NAME, 'Chromium OS'], VERSION], [
                    // Solaris
                    /(sunos)\s?([\w\.]+\d)*/i // Solaris
                    ], [[NAME, 'Solaris'], VERSION], [
                    // BSD based
                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                    ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
                    ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
                    // Other
                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                    /(unix)\s?([\w\.]+)*/i // UNIX
                    ], [NAME, VERSION]]
                };
                /////////////////
                // Constructor
                ////////////////
                /*
                var Browser = function (name, version) {
                    this[NAME] = name;
                    this[VERSION] = version;
                };
                var CPU = function (arch) {
                    this[ARCHITECTURE] = arch;
                };
                var Device = function (vendor, model, type) {
                    this[VENDOR] = vendor;
                    this[MODEL] = model;
                    this[TYPE] = type;
                };
                var Engine = Browser;
                var OS = Browser;
                */
                var UAParser = function UAParser(uastring, extensions) {
                    if ((typeof uastring === 'undefined' ? 'undefined' : _typeof2(uastring)) === 'object') {
                        extensions = uastring;
                        uastring = undefined;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(uastring, extensions).getResult();
                    }
                    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                    //var browser = new Browser();
                    //var cpu = new CPU();
                    //var device = new Device();
                    //var engine = new Engine();
                    //var os = new OS();
                    this.getBrowser = function () {
                        var browser = { name: undefined, version: undefined };
                        mapper.rgx.call(browser, ua, rgxmap.browser);
                        browser.major = util.major(browser.version); // deprecated
                        return browser;
                    };
                    this.getCPU = function () {
                        var cpu = { architecture: undefined };
                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                        return cpu;
                    };
                    this.getDevice = function () {
                        var device = { vendor: undefined, model: undefined, type: undefined };
                        mapper.rgx.call(device, ua, rgxmap.device);
                        return device;
                    };
                    this.getEngine = function () {
                        var engine = { name: undefined, version: undefined };
                        mapper.rgx.call(engine, ua, rgxmap.engine);
                        return engine;
                    };
                    this.getOS = function () {
                        var os = { name: undefined, version: undefined };
                        mapper.rgx.call(os, ua, rgxmap.os);
                        return os;
                    };
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function () {
                        return ua;
                    };
                    this.setUA = function (uastring) {
                        ua = uastring;
                        //browser = new Browser();
                        //cpu = new CPU();
                        //device = new Device();
                        //engine = new Engine();
                        //os = new OS();
                        return this;
                    };
                    return this;
                };
                UAParser.VERSION = LIBVERSION;
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: MAJOR,
                    VERSION: VERSION
                };
                UAParser.CPU = {
                    ARCHITECTURE: ARCHITECTURE
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: CONSOLE,
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: WEARABLE,
                    EMBEDDED: EMBEDDED
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                //UAParser.Utils = util;
                ///////////
                // Export
                //////////
                // check js environment
                if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) !== UNDEF_TYPE) {
                    // nodejs env
                    if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) !== UNDEF_TYPE && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    // TODO: test!!!!!!!!
                    /*
                    if (require && require.main === module && process) {
                        // cli
                        var jsonize = function (arr) {
                            var res = [];
                            for (var i in arr) {
                                res.push(new UAParser(arr[i]).getResult());
                            }
                            process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                        };
                        if (process.stdin.isTTY) {
                            // via args
                            jsonize(process.argv.slice(2));
                        } else {
                            // via pipe
                            var str = '';
                            process.stdin.on('readable', function() {
                                var read = process.stdin.read();
                                if (read !== null) {
                                    str += read;
                                }
                            });
                            process.stdin.on('end', function () {
                                jsonize(str.replace(/\n$/, '').split('\n'));
                            });
                        }
                    }
                    */
                    exports.UAParser = UAParser;
                } else {
                    // requirejs env (optional)
                    if ("function" === FUNC_TYPE && __webpack_require__(10)) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return UAParser;
                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else if (window) {
                        // browser env
                        window.UAParser = UAParser;
                    }
                }
                // jQuery/Zepto specific (optional)
                // Note:
                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                //   and we should catch that.
                var $ = window && (window.jQuery || window.Zepto);
                if ((typeof $ === 'undefined' ? 'undefined' : _typeof2($)) !== UNDEF_TYPE) {
                    var parser = new UAParser();
                    $.ua = parser.getResult();
                    $.ua.get = function () {
                        return parser.getUA();
                    };
                    $.ua.set = function (uastring) {
                        parser.setUA(uastring);
                        var result = parser.getResult();
                        for (var prop in result) {
                            $.ua[prop] = result[prop];
                        }
                    };
                }
            })((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' ? window : this);
            /***/
        },
        /* 10 */
        /***/function (module, exports) {
            /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
                /* WEBPACK VAR INJECTION */
            }).call(exports, {});
            /***/
        }]
        /******/
        )["default"]
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _toxicUtils = __webpack_require__(13);

var Base = /** @class */function () {
    function Base(parent) {
        this.parent = parent;
    }
    Base.prototype.create = function () {
        this.createEl();
        this.addAllEvent();
    };
    Base.prototype.destroy = function () {
        this.removeAllEvent();
    };
    Base.prototype.createEl = function () {
        this.$dom = document.createElement(this.option.tag);
        this.$dom.innerHTML = this.option.html;
        this.parent.$wrap.appendChild(this.$dom);
    };
    Base.prototype.addAllEvent = function () {
        var _this = this;
        this.option.defaultEvent && Object.keys(this.option.defaultEvent).forEach(function (item) {
            var key = _this.option.defaultEvent[item];
            _this[key] = (0, _toxicUtils.bind)(_this[key], _this);
            (0, _mangoHelper.addEvent)(_this.$dom, item, _this[key], false, false);
        });
        this.option.event && Object.keys(this.option.event).forEach(function (item) {
            var key = '__' + item;
            _this[key] = (0, _toxicUtils.bind)(_this.option.event[item], _this);
            (0, _mangoHelper.addEvent)(_this.$dom, item, _this[key], false, false);
        });
    };
    Base.prototype.removeAllEvent = function () {
        var _this = this;
        this.option.defaultEvent && Object.keys(this.option.defaultEvent).forEach(function (item) {
            var key = _this.option.defaultEvent[item];
            _this[key] = (0, _toxicUtils.bind)(_this[key], _this);
            (0, _mangoHelper.removeEvent)(_this.$dom, item, _this[key], false, false);
        });
        this.option.event && Object.keys(this.option.event).forEach(function (item) {
            var key = '__' + item;
            _this[key] = (0, _toxicUtils.bind)(_this.option.event[item], _this);
            (0, _mangoHelper.removeEvent)(_this.$dom, item, _this[key], false, false);
        });
    };
    return Base;
}();
exports.default = Base;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * toxic-decorators v0.3.8
 * (c) 2017 toxic-johann
 * Released under GPL-3.0
 */

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.toxicDecorators = {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(_defined(that))
      , i = _toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _aFunction = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function(fn, that, length){
  _aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function(it){
  if(!_isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!_isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if(_ie8DomDefine)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var _hide = _descriptors ? function(object, key, value){
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? _core : _core[name] || (_core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])_hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
var _export = $export;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function(it){
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function(it){
  return _iobject(_defined(it));
};

// 7.1.15 ToLength
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = _toIobject($this)
      , length = _toLength(O.length)
      , index  = _toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store  = _global[SHARED] || (_global[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');
var _sharedKey = function(key){
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = _toIobject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO$1)_has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(_has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O){
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  _anObject(O);
  var keys   = _objectKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)_objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var IE_PROTO    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = _enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;
var TAG = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !_has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = _objectCreate(IteratorPrototype, {next: _propertyDesc(1, next)});
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function(it){
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = _toObject(O);
  if(_has(O, IE_PROTO$2))return O[IE_PROTO$2];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  _iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = _objectGpo($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!_library && !_has(IteratorPrototype, ITERATOR))_hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))_redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var _addToUnscopables = function(){ /* empty */ };

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return _iterStep(1);
  }
  if(kind == 'keys'  )return _iterStep(0, index);
  if(kind == 'values')return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var TO_STRING_TAG = _wks('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = _global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])_hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

var _meta = createCommonjsModule(function (module) {
var META     = _uid('meta')
  , setDesc  = _objectDp.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_fails(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!_isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !_has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var defineProperty = _objectDp.f;
var _wksDefine = function(name){
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: _wksExt.f(name)});
};

var _keyof = function(object, el){
  var O      = _toIobject(object)
    , keys   = _objectKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols

var _enumKeys = function(it){
  var result     = _objectKeys(it)
    , getSymbols = _objectGops.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = _objectPie.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg){
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var gOPN$1      = _objectGopn.f;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it){
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1           = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if(_ie8DomDefine)try {
    return gOPD$1(O, P);
  } catch(e){ /* empty */ }
  if(_has(O, P))return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim
var META           = _meta.KEY;
var gOPD           = _objectGopd.f;
var dP$1             = _objectDp.f;
var gOPN           = _objectGopnExt.f;
var $Symbol        = _global.Symbol;
var $JSON          = _global.JSON;
var _stringify     = $JSON && $JSON.stringify;
var PROTOTYPE$2      = 'prototype';
var HIDDEN         = _wks('_hidden');
var TO_PRIMITIVE   = _wks('toPrimitive');
var isEnum         = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols     = _shared('symbols');
var OPSymbols      = _shared('op-symbols');
var ObjectProto$1    = Object[PROTOTYPE$2];
var USE_NATIVE     = typeof $Symbol == 'function';
var QObject        = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function(){
  return _objectCreate(dP$1({}, 'a', {
    get: function(){ return dP$1(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto$1, key);
  if(protoDesc)delete ObjectProto$1[key];
  dP$1(it, key, D);
  if(protoDesc && it !== ObjectProto$1)dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty$1 = function defineProperty(it, key, D){
  if(it === ObjectProto$1)$defineProperty$1(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if(_has(AllSymbols, key)){
    if(!D.enumerable){
      if(!_has(it, HIDDEN))dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(_has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _objectCreate(D, {enumerable: _propertyDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty$1(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if(this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = _toIobject(it);
  key = _toPrimitive(key, true);
  if(it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(_toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto$1
    , names  = gOPN(IS_OP ? OPSymbols : _toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto$1)$set.call(OPSymbols, value);
      if(_has(this, HIDDEN) && _has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if(_descriptors && setter)setSymbolDesc(ObjectProto$1, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString(){
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f   = $defineProperty$1;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f  = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if(_descriptors && !_library){
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function(name){
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i$1 = 0; symbols.length > i$1; )_wks(symbols[i$1++]);

for(var symbols = _objectKeys(_wks.store), i$1 = 0; symbols.length > i$1; )_wksDefine(symbols[i$1++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return _keyof(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty$1,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !_isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var index = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": index, __esModule: true };
});

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// most Object methods by ES6 should accept primitives

var _objectSap = function(KEY, exec){
  var fn  = (_core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function(){ fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)


_objectSap('keys', function(){
  return function keys(it){
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

// 20.1.2.3 Number.isInteger(number)
var floor$1    = Math.floor;
var _isInteger = function isInteger(it){
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', {isInteger: _isInteger});

var isInteger$2 = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger$2, __esModule: true };
});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space   = '[' + _stringWs + ']';
var non     = '\u200b\u0085';
var ltrim   = RegExp('^' + space + space + '*');
var rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = _fails(function(){
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(_defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim       = _stringTrim.trim;

var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', {parseFloat: _parseFloat$3});

var _parseFloat$1 = parseFloat;

var _parseFloat = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

/**
 * toxic-predicate-functions v0.1.2
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 * @param  {Anything}  obj
 * @return {Boolean}   return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 * @param {Anything} arr
 * @return {Boolean} true when it is a boolean
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * 判断是否为function
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * 判断是否是对象
 * @param  {Anything}  obj 传入对象
 * @return {Boolean}     [description]
 */
function isObject(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 * @param  {Anything}  obj
 * @return {Boolean}   return true when it's a number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * 判断是否是string
 * @param  {Anything}  str [description]
 * @return {Boolean}     [description]
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 * @param  {Anything} bool
 * @return {Boolean}
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 * @param {Anything} obj
 * @return {boolean}
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 * @param  {Anyting}  val
 * @return {Boolean}  true when type is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

// call something on iterator step with safe closing on error

var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)_anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator
var ITERATOR$1   = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function(object, index, value){
  if(index in object)_objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG$1 = _wks('toStringTag');
var ARG = _cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2  = _wks('iterator');
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = _toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = core_getIteratorMethod(O)
      , length, result, step, iterator;
    if(mapping)mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && _isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for(result = new C(length); length > index; index++){
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$2 = _core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$2, __esModule: true };
});

var toConsumableArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _from2 = _interopRequireDefault(from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

/**
 * toxic-utils v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (isArray(source) || isObject(source)) {
      target = target || (isObject(source) ? {} : []);
      for (var _key in source) {
        target[_key] = recursiveFn(source[_key], target[_key], _key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// **********************  对象操作  ************************
/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */


/**
 * to check if an descriptor
 * @param {anything} desc
 */
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }
  return false;
}
/**
 * to check if the descirptor is an accessor descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isAccessorDescriptor(desc) {
  return !!desc && (isFunction(desc.get) || isFunction(desc.set)) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && desc.writable === undefined;
}
/**
 * to check if the descirptor is an data descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isDataDescriptor(desc) {
  return !!desc && desc.hasOwnProperty('value') && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * to check if the descirptor is an initiallizer descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isInitializerDescriptor(desc) {
  return !!desc && isFunction(desc.initializer) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * set one value on the object
 * @param {string} key
 */
function createDefaultSetter(key) {
  return function set$$1(newValue) {
    Object.defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}

/**
 * Compress many function into one function, but this function only accept one arguments;
 * @param {Array<Function>} fns the array of function we need to compress into one function
 * @param {string} errmsg When we check that there is something is not function, we will throw an error, you can set your own error message
 */
function compressOneArgFnArray(fns) {
  var errmsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'You must pass me an array of function';

  if (!isArray(fns) || fns.length < 1) {
    throw new TypeError(errmsg);
  }
  if (fns.length === 1) {
    if (!isFunction(fns[0])) {
      throw new TypeError(errmsg);
    }
    return fns[0];
  }
  return fns.reduce(function (prev, curr) {
    if (!isFunction(curr) || !isFunction(prev)) throw new TypeError(errmsg);
    return function (value) {
      return bind(curr, this)(bind(prev, this)(value));
    };
  });
}
/**
 * just a method to call console.warn, maybe i will add some handler on it someday
 * @param {anything} args
 */
function warn(message) {
  if (isFunction(console.warn)) return console.warn(message);
  console.log(message);
}

function getOwnKeysFn() {
  var getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols;

  return isFunction(getOwnPropertySymbols) ? function (obj) {
    // $FlowFixMe: do not support symwbol yet
    return Array.from(getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj)));
  } : getOwnPropertyNames;
}

var getOwnKeys = getOwnKeysFn();

function getOwnPropertyDescriptorsFn() {
  // $FlowFixMe: In some environment, Object.getOwnPropertyDescriptors has been implemented;
  return isFunction(Object.getOwnPropertyDescriptors) ? Object.getOwnPropertyDescriptors : function (obj) {
    return getOwnKeys(obj).reduce(function (descs, key) {
      descs[key] = getOwnPropertyDescriptor(obj, key);
      return descs;
    }, {});
  };
}

var getOwnPropertyDescriptors = getOwnPropertyDescriptorsFn();

function compressMultipleDecorators() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (!fns.length) throw new TypeError('You must pass in decorators in compressMultipleDecorators');
  fns.forEach(function (fn) {
    if (!isFunction(fn)) throw new TypeError('Decorators must be a function, but not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof$1(fn)));
  });
  if (fns.length === 1) return fns[0];
  return function (obj, prop, descirptor) {
    // $FlowFixMe: the reduce will return a descriptor
    return fns.reduce(function (descirptor, fn) {
      return fn(obj, prop, descirptor);
    }, descirptor);
  };
}

function accessor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      get = _ref.get,
      set = _ref.set;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$preGet = _ref2.preGet,
      preGet = _ref2$preGet === undefined ? false : _ref2$preGet,
      _ref2$preSet = _ref2.preSet,
      preSet = _ref2$preSet === undefined ? true : _ref2$preSet;

  if (!isFunction(get) && !isFunction(set) && !(isArray(get) && get.length > 0) && !(isArray(set) && set.length > 0)) throw new TypeError("@accessor need a getter or setter. If you don't need to add setter/getter. You should remove @accessor");
  var errmsg = '@accessor only accept function or array of function as getter/setter';
  get = isArray(get) ? compressOneArgFnArray(get, errmsg) : get;
  set = isArray(set) ? compressOneArgFnArray(set, errmsg) : set;
  return function (obj, prop, descriptor) {
    var _ref3 = descriptor || {},
        _ref3$configurable = _ref3.configurable,
        configurable = _ref3$configurable === undefined ? true : _ref3$configurable,
        _ref3$enumerable = _ref3.enumerable,
        enumerable = _ref3$enumerable === undefined ? true : _ref3$enumerable;

    var hasGet = isFunction(get);
    var hasSet = isFunction(set);
    var handleGet = function handleGet(value) {
      // $FlowFixMe: it's really function here
      return hasGet ? bind(get, this)(value) : value;
    };
    var handleSet = function handleSet(value) {
      // $FlowFixMe: it's really function here
      return hasSet ? bind(set, this)(value) : value;
    };
    if (isAccessorDescriptor(descriptor)) {
      var originGet = descriptor.get,
          originSet = descriptor.set;

      var hasOriginGet = isFunction(originGet);
      var hasOriginSet = isFunction(originSet);
      if ("development" !== 'production' && !hasOriginGet && hasGet) {
        warn('You are trying to set getter via @accessor on ' + prop + ' without getter. That\'s not a good idea.');
      }
      if ("development" !== 'production' && !hasOriginSet && hasSet) {
        warn('You are trying to set setter via @accessor on  ' + prop + ' without setter. That\'s not a good idea.');
      }
      var getter = hasOriginGet || hasGet ? function () {
        var _this = this;

        var boundGetter = bind(handleGet, this);
        var originBoundGetter = function originBoundGetter() {
          return hasOriginGet
          // $FlowFixMe: we have do a check here
          ? bind(originGet, _this)() : undefined;
        };
        var order = preGet ? [boundGetter, originBoundGetter] : [originBoundGetter, boundGetter];
        // $FlowFixMe: it's all function here
        return order.reduce(function (value, fn) {
          return fn(value);
        }, undefined);
      } : undefined;
      var setter = hasOriginSet || hasSet ? function (val) {
        var _this2 = this;

        var boundSetter = bind(handleSet, this);
        var originBoundSetter = function originBoundSetter(value) {
          return hasOriginSet
          // $FlowFixMe: flow act like a retarded child on optional property
          ? bind(originSet, _this2)(value) : value;
        };
        var order = preSet ? [boundSetter, originBoundSetter] : [originBoundSetter, boundSetter];
        return order.reduce(function (value, fn) {
          return fn(value);
        }, val);
      } : undefined;
      return {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: enumerable
      };
    } else if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: disjoint union is horrible, descriptor is initializerDescriptor now
      var initializer = descriptor.initializer;

      var value = void 0;
      var inited = false;
      return {
        get: function get() {
          var boundFn = bind(handleGet, this);
          if (inited) return boundFn(value);
          value = bind(initializer, this)();
          inited = true;
          return boundFn(value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          value = preSet ? boundFn(val) : val;
          inited = true;
          if (!preSet) {
            boundFn(value);
          }
          return value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    } else {
      // $FlowFixMe: disjoint union is horrible, descriptor is DataDescriptor now
      var _ref4 = descriptor || {},
          _value = _ref4.value;

      return {
        get: function get() {
          return bind(handleGet, this)(_value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          _value = preSet ? boundFn(val) : val;
          if (!preSet) {
            boundFn(_value);
          }
          return _value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    }
  };
}

function before() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@before accept at least one parameter. If you don't need to preprocess before your function, do not add @before decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @before straightly, @before return decorators, you should call it before you set it as decorator.');
  }
  for (var i = fns.length - 1; i > -1; i--) {
    if (!isFunction(fns[i])) throw new TypeError('@before only accept function parameter');
  }
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        fn = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(fn)) throw new TypeError('@before can only be used on function, please check the property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var paras = fns.reduce(function (paras, fn) {
        var result = bind(fn, _this).apply(undefined, toConsumableArray$1(paras));
        return result === undefined ? paras : isArray(result) ? result
        // $FlowFixMe: what the hell, it can be anything
        : [result];
      }, args);
      return bind(fn, this).apply(undefined, toConsumableArray$1(paras));
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function after() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@after accept at least one parameter. If you don't need to preprocess after your function, do not add @after decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may have used @after straightly. @after return decorators. You should call it before you use it as decorators');
  }
  var fn = compressOneArgFnArray(fns, '@after only accept function parameter');
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        value = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(value)) throw new TypeError('@after can only be used on function, please checkout your property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var ret = bind(value, this).apply(undefined, arguments);
      return bind(fn, this)(ret);
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function readonly(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @readonly on an undefined property "' + prop + '". This property will become a readonly undefined forever, which is meaningless.');
    return {
      value: undefined,
      writable: false,
      enumerable: true,
      configurable: true
    };
  }
  if (isAccessorDescriptor(descriptor)) {
    descriptor.set = undefined;
    return descriptor;
  }
  // $FlowFixMe: disjoint union makes me disappointed
  descriptor.writable = false;
  return descriptor;
}

function initialize() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@initialize accept at least one parameter. If you don't need to initialize your value, do not add @initialize.");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @initialize straightly, @initialize return decorators, you need to call it');
  }
  var fn = compressOneArgFnArray(fns, '@initialize only accept function parameter');
  return function (obj, prop, descriptor) {
    if (descriptor === undefined) {
      return {
        value: bind(fn, obj)(),
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
    if (isAccessorDescriptor(descriptor)) {
      var hasBeenReset = false;
      var originSet = descriptor.set;

      return accessor({
        get: function get(value) {
          if (hasBeenReset) return value;
          return bind(fn, this)(value);
        },

        set: originSet ? function (value) {
          hasBeenReset = true;
          return value;
        } : undefined
      })(obj, prop, descriptor);
    }
    /**
     * when we set decorator on propery
     * we will get a descriptor with initializer
     * as they will be attach on the instance later
     * so, we need to substitute the initializer function
     */
    if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: useless disjoint union
      var initializer = descriptor.initializer;

      var handler = function handler() {
        return bind(fn, this)(bind(initializer, this)());
      };
      return {
        initializer: handler,
        configurable: descriptor.configurable,
        // $FlowFixMe: useless disjoint union
        writable: descriptor.writable,
        enumerable: descriptor.enumerable
      };
    }
    // $FlowFixMe: useless disjoint union
    var value = bind(fn, this)(descriptor.value);
    return {
      value: value,
      // $FlowFixMe: useless disjoint union
      writable: descriptor.writable,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    };
  };
}

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var defineProperty$2 = Object.defineProperty;

function setAlias(root, prop, _ref, obj, key, _ref2) {
  var configurable = _ref.configurable,
      enumerable = _ref.enumerable;
  var force = _ref2.force,
      omit = _ref2.omit;

  var originDesc = getOwnPropertyDescriptor$1(obj, key);
  if (originDesc !== undefined) {
    if (omit) return;
    // TODO: we should add an github link here
    if (!force) throw new Error('"' + prop + '" is an existing property, if you want to override it, please set "force" true in @alias option.');
    if (!originDesc.configurable) {
      throw new Error('property "' + prop + '" is unconfigurable.');
    }
  }
  defineProperty$2(obj, key, {
    get: function get$$1() {
      return root[prop];
    },
    set: function set$$1(value) {
      root[prop] = value;
      return prop;
    },

    configurable: configurable,
    enumerable: enumerable
  });
}
function alias(other, key, option) {
  // set argument into right position
  if (arguments.length === 2) {
    if (isString(other)) {
      // $FlowFixMe: i will check this later
      option = key;
      key = other;
      other = undefined;
    }
  } else if (arguments.length === 1) {
    // $FlowFixMe: i will check this later
    key = other;
    other = undefined;
  }
  // argument validate
  if (!isString(key)) throw new TypeError('@alias need a string as a key to find the porperty to set alias on');
  var illegalObjErrorMsg = 'If you want to use @alias to set alias on other instance, you must pass in a legal instance';
  if (other !== undefined && isPrimitive(other)) throw new TypeError(illegalObjErrorMsg);

  var _ref3 = isObject(option) ? option : { force: false, omit: false },
      force = _ref3.force,
      omit = _ref3.omit;

  return function (obj, prop, descriptor) {
    descriptor = descriptor || {
      value: undefined,
      configurable: true,
      writable: true,
      enumerable: true
    };
    function getTargetAndName(other, obj, key) {
      var target = isPrimitive(other) ? obj : other;
      var keys = key.split('.');

      var _keys$slice = keys.slice(-1),
          _keys$slice2 = slicedToArray(_keys$slice, 1),
          name = _keys$slice2[0];

      target = getDeepProperty(target, keys.slice(0, -1), { throwError: true });
      if (isPrimitive(target)) {
        throw new TypeError(illegalObjErrorMsg);
      }
      return {
        target: target,
        name: name
      };
    }
    if (isInitializerDescriptor(descriptor)) {
      return initialize(function (value) {
        var _getTargetAndName = getTargetAndName(other, this, key),
            target = _getTargetAndName.target,
            name = _getTargetAndName.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        return value;
      })(obj, prop, descriptor);
    }
    if (isAccessorDescriptor(descriptor)) {
      var inited = void 0;
      var handler = function handler(value) {
        if (inited) return value;

        var _getTargetAndName2 = getTargetAndName(other, this, key),
            target = _getTargetAndName2.target,
            name = _getTargetAndName2.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        inited = true;
        return value;
      };
      return accessor({ get: handler, set: handler })(obj, prop, descriptor);
    }

    var _getTargetAndName3 = getTargetAndName(other, obj, key),
        target = _getTargetAndName3.target,
        name = _getTargetAndName3.name;

    setAlias(obj, prop, descriptor, target, name, { force: force, omit: omit });
    return descriptor;
  };
}

var defineProperty$3 = Object.defineProperty;

function classify(decorator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requirement = _ref.requirement,
      _ref$customArgs = _ref.customArgs,
      customArgs = _ref$customArgs === undefined ? false : _ref$customArgs;

  return function () {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$exclude = _ref2.exclude,
        exclude = _ref2$exclude === undefined ? [] : _ref2$exclude,
        _ref2$include = _ref2.include,
        include = _ref2$include === undefined ? [] : _ref2$include,
        _ref2$construct = _ref2.construct,
        construct = _ref2$construct === undefined ? false : _ref2$construct,
        _ref2$self = _ref2.self,
        self = _ref2$self === undefined ? false : _ref2$self;

    if (!isArray(exclude)) throw new TypeError('options.exclude must be an array');
    if (!isArray(include)) throw new TypeError('options.include must be an array');
    return function (Klass) {
      var isClass = isFunction(Klass);
      if (!self && !isClass) throw new TypeError('@' + decorator.name + 'Class can only be used on class');
      if (self && isPrimitive(Klass)) throw new TypeError('@' + decorator.name + 'Class must be used on non-primitive type value in \'self\' mode');
      var prototype = self ? Klass : Klass.prototype;
      if (isVoid(prototype)) throw new Error('The prototype of the ' + Klass.name + ' is empty, please check it');
      var descs = getOwnPropertyDescriptors(prototype);
      getOwnKeys(prototype).concat(include).forEach(function (key) {
        var desc = descs[key];
        if (key === 'constructor' && !construct || self && isClass && ['name', 'length', 'prototype'].indexOf(key) > -1 || exclude.indexOf(key) > -1 || isFunction(requirement) && requirement(prototype, key, desc, { self: self }) === false) return;
        defineProperty$3(prototype, key, (customArgs ? decorator.apply(undefined, toConsumableArray$1(args)) : decorator)(prototype, key, desc));
      });
    };
  };
}

var autobindClass = classify(autobind, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  }
});

var mapStore = void 0;
// save bound function for super
function getBoundSuper(obj, fn) {
  if (typeof WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()');
  }

  if (!mapStore) {
    mapStore = new WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new WeakMap());
  }

  var superStore = mapStore.get(obj);
  // $FlowFixMe: already insure superStore is not undefined
  if (superStore.has(fn) === false) {
    // $FlowFixMe: already insure superStore is not undefined
    superStore.set(fn, bind(fn, obj));
  }
  // $FlowFixMe: already insure superStore is not undefined
  return superStore.get(fn);
}
/**
 * auto bind the function on the class, just support function
 * @param {Object} obj Target Object
 * @param {string} prop prop strong
 * @param {Object} descriptor
 */
function autobind(obj, prop, descriptor) {
  if (arguments.length === 1) return autobindClass()(obj);

  var _ref = descriptor || {},
      fn = _ref.value,
      configurable = _ref.configurable;

  if (!isFunction(fn)) {
    throw new TypeError('@autobind can only be used on functions, not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof$1(fn)) + ' on property "' + prop + '"');
  }
  var constructor = obj.constructor;

  return {
    configurable: configurable,
    enumerable: false,
    get: function get$$1() {
      var _this = this;

      var boundFn = function boundFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.call.apply(fn, [_this].concat(toConsumableArray$1(args)));
      };
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === obj) {
        return fn;
      }
      // Someone accesses the property directly on a prototype,
      // but it was found up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && Object.getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && prop in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }
      Object.defineProperty(this, prop, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: createDefaultSetter(prop)
  };
}

var defineProperty$4 = Object.defineProperty;
/**
 * make one attr only can be read, but could not be rewrited/ deleted
 * @param {Object} obj
 * @param {string} prop
 * @param {Object} descriptor
 * @return {descriptor}
 */

function frozen(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @frozen on an undefined property. This property will become a frozen undefined forever, which is meaningless');
    return {
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false
    };
  }
  descriptor.enumerable = false;
  descriptor.configurable = false;
  if (isAccessorDescriptor(descriptor)) {
    var _get = descriptor.get;

    descriptor.set = undefined;
    if (!isFunction(_get)) {
      /* istanbul ignore else  */
      warn('You are using @frozen on one accessor descriptor without getter. This property will become a frozen undefined finally.Which maybe meaningless.');
      return;
    }
    return {
      get: function get() {
        var value = bind(_get, this)();
        defineProperty$4(this, prop, {
          value: value,
          writable: false,
          configurable: false,
          enumerable: false
        });
        return value;
      },

      set: undefined,
      configurable: false,
      enumerable: false
    };
  }
  // $FlowFixMe: comeon, can disjoint union be reliable?
  descriptor.writable = false;
  return descriptor;
}

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var defineProperty$5 = Object.defineProperty;

function waituntil(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other;

  if (!isFunction(key) && !isPromise(key) && !isString(key)) throw new TypeError('@waitUntil only accept Function, Promise or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@waituntil can only be used on function, but not ' + _value + ' on property "' + prop + '"');
    var binded = false;
    var waitingQueue = [];
    var canIRun = isPromise(key) ? function () {
      return key;
    } : isFunction(key) ? key : function () {
      // $FlowFixMe: We have use isPromise to exclude
      var keys = key.split('.');
      var prop = keys.slice(-1);
      var originTarget = isPrimitive(other) ? this : other;
      if (!binded) {
        var target = getDeepProperty(originTarget, keys.slice(0, -1));
        if (isVoid(target)) return target;
        var _descriptor = getOwnPropertyDescriptor$2(target, prop);
        /**
         * create a setter hook here
         * when it get ture, it will run all function in waiting queue immediately
         */
        var set = function set(value) {
          if (value === true) {
            while (waitingQueue.length > 0) {
              waitingQueue[0]();
              waitingQueue.shift();
            }
          }
          return value;
        };
        var desc = isDescriptor(_descriptor) ? accessor({ set: set })(target, prop, _descriptor) : accessor({ set: set })(target, prop, {
          value: undefined,
          configurable: true,
          enumerable: true,
          writable: true
        });
        defineProperty$5(target, prop, desc);
        binded = true;
      }
      return getDeepProperty(originTarget, keys);
    };
    return {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var boundFn = bind(_value, this);
        var runnable = bind(canIRun, this).apply(undefined, args);
        if (isPromise(runnable)) {
          return Promise.resolve(runnable).then(function () {
            return bind(_value, _this).apply(undefined, args);
          });
        } else if (runnable === true) {
          return bind(_value, this).apply(undefined, args);
        } else {
          return new Promise(function (resolve) {
            var cb = function cb() {
              boundFn.apply(undefined, args);
              resolve();
            };
            waitingQueue.push(cb);
          });
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

var defineProperty$6 = Object.defineProperty;

function lazyInit(obj, prop, descriptor) {
  if (descriptor === undefined) throw new TypeError('@lazyInit cannot be apply on undefined property.');
  if (!isFunction(descriptor.initializer)) {
    /* istanbul ignore else  */
    warn('@lazyInit can only be used on property, but not propery "' + prop + '" which may be methods or getter/setter.');
    // $FlowFixMe: disjoint union ****
    return descriptor;
  }
  var initializer = descriptor.initializer,
      configurable = descriptor.configurable,
      enumerable = descriptor.enumerable,
      writable = descriptor.writable;

  return {
    get: function get() {
      var value = bind(initializer, this)();
      defineProperty$6(this, prop, {
        value: value,
        configurable: configurable,
        enumerable: enumerable,
        writable: writable
      });
      return value;
    },

    set: createDefaultSetter(prop),
    configurable: configurable,
    enumerable: enumerable
  };
}

var defineProperty$7 = Object.defineProperty;
/**
 * make one attr only can be read, but could not be rewrited/ deleted
 * @param {Object} obj
 * @param {string} prop
 * @param {Object} descriptor
 * @return {descriptor}
 */

function lock(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @lock on an undefined property "' + prop + '". This property will become a lock undefined forever, which is meaningless.');
    return {
      value: undefined,
      writable: false,
      enumerable: true,
      configurable: false
    };
  }
  descriptor.configurable = false;
  if (isAccessorDescriptor(descriptor)) {
    var _get = descriptor.get;

    descriptor.set = undefined;
    if (!isFunction(_get)) {
      warn('You are using @lock on one accessor descriptor without getter. This property will become a lock undefined finally.Which maybe meaningless.');
      return;
    }
    return {
      get: function get() {
        var value = bind(_get, this)();
        defineProperty$7(this, prop, {
          value: value,
          writable: false,
          configurable: false,
          enumerable: descriptor.enumerable
        });
        return value;
      },

      set: undefined,
      configurable: false,
      enumerable: descriptor.enumerable
    };
  }
  // $FlowFixMe: comeon, can disjoint union be reliable?
  descriptor.writable = false;
  return descriptor;
}

function nonenumerable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: false,
      configurable: true,
      writable: true
    };
  }
  descriptor.enumerable = false;
  return descriptor;
}

var defineProperty$8 = Object.defineProperty;
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;


function applyDecorators(Class, props) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$self = _ref.self,
      self = _ref$self === undefined ? false : _ref$self,
      _ref$omit = _ref.omit,
      omit = _ref$omit === undefined ? false : _ref$omit;

  var isPropsFunction = isFunction(props);
  if (isPropsFunction || isArray(props)) {
    // apply decorators on class
    if (!isFunction(Class)) throw new TypeError('If you want to decorator class, you must pass it a legal class');
    // $FlowFixMe: Terrible union, it's function now
    if (isPropsFunction) props(Class);else {
      // $FlowFixMe: Terrible union, it's array now
      for (var i = 0, len = props.length; i < len; i++) {
        // $FlowFixMe: Terrible union, it's array now
        var fn = props[i];
        if (!isFunction(fn)) throw new TypeError('If you want to decorate an class, you must pass it function or array of function');
        fn(Class);
      }
    }
    return Class;
  }
  if (!self && !isFunction(Class)) throw new TypeError('applyDecorators only accept class as first arguments. If you want to modify instance, you should set options.self true.');
  if (self && isPrimitive(Class)) throw new TypeError("We can't apply docorators on a primitive value, even in self mode");
  if (!isObject(props)) throw new TypeError('applyDecorators only accept object as second arguments');
  var prototype = self ? Class : Class.prototype;
  if (isVoid(prototype)) throw new Error('The class muse have a prototype, please take a check');
  for (var key in props) {
    var value = props[key];
    var decorators = isArray(value) ? value : [value];
    var handler = void 0;
    try {
      handler = compressMultipleDecorators.apply(undefined, toConsumableArray$1(decorators));
    } catch (err) {
      /* istanbul ignore else  */
      warn(err && err.message);
      throw new Error('The decorators set on props must be Function or Array of Function');
    }
    var descriptor = getOwnPropertyDescriptor$3(prototype, key);
    if (descriptor && !descriptor.configurable) {
      if (!omit) throw new Error(key + ' of ' + prototype + ' is unconfigurable');
      continue;
    }
    defineProperty$8(prototype, key, handler(prototype, key, descriptor));
  }
  return Class;
}

var arrayChangeMethod = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse'];

function deepProxy(value, hook, _ref) {
  var _operateProps;

  var diff = _ref.diff,
      operationPrefix = _ref.operationPrefix;

  var mapStore = {};
  var arrayChanging = false;
  var proxyValue = new Proxy(value, {
    get: function get$$1(target, property, receiver) {
      var value = target[property];
      if (isArray(target) && arrayChangeMethod.indexOf(property) > -1) {
        return function () {
          arrayChanging = true;
          bind(value, receiver).apply(undefined, arguments);
          arrayChanging = false;
          hook();
        };
      }
      if (mapStore[property] === true) return value;
      if (isObject(value) || isArray(value)) {
        var _proxyValue = mapStore[property] || deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
        mapStore[property] = _proxyValue;
        return _proxyValue;
      }
      mapStore[property] = true;
      return value;
    },
    set: function set$$1(target, property, value) {
      var oldVal = target[property];
      var newVal = isObject(value) || isArray(value) ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : value;
      target[property] = newVal;
      mapStore[property] = true;
      if (arrayChanging || diff && oldVal === newVal) return true;
      hook();
      return true;
    },
    deleteProperty: function deleteProperty(target, property) {
      delete target[property];
      delete mapStore[property];
      if (arrayChanging) return true;
      hook();
      return true;
    }
  });
  var operateProps = (_operateProps = {}, defineProperty$1(_operateProps, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      // $FlowFixMe: we have check the computed value
      proxyValue[property] = val;
    };
  }), nonenumerable]), defineProperty$1(_operateProps, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      // $FlowFixMe: we have check the computed value
      delete proxyValue[property];
    };
  }), nonenumerable]), _operateProps);
  applyDecorators(proxyValue, operateProps, { self: true });
  return proxyValue;
}

function deepObserve(value, hook, _ref2) {
  var _this = this,
      _operateProps2;

  var operationPrefix = _ref2.operationPrefix,
      diff = _ref2.diff;

  var mapStore = {};
  var arrayChanging = false;
  function getPropertyDecorators(keys) {
    var oldVal = void 0;
    return keys.reduce(function (props, key) {
      props[key] = [accessor({
        set: function set$$1(value) {
          oldVal = this[key];
          return value;
        }
      }), accessor({
        get: function get$$1(val) {
          if (mapStore[key]) return val;
          if (isObject(val) || isArray(val)) {
            deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          mapStore[key] = true;
          return val;
        },
        set: function set$$1(val) {
          if (isObject(val) || isArray(val)) deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          mapStore[key] = true;
          if (!arrayChanging && (!diff || oldVal !== val)) hook();
          return val;
        }
      }, { preSet: false })];
      return props;
    }, {});
  }
  var props = getPropertyDecorators(getOwnKeys(value));
  applyDecorators(value, props, { self: true, omit: true });
  if (isArray(value)) {
    var methodProps = arrayChangeMethod.reduce(function (props, key) {
      props[key] = [initialize(function (method) {
        method = isFunction(method) ? method
        // $FlowFixMe: we have check the key
        : Array.prototype[key];
        return function () {
          var originLength = value.length;
          arrayChanging = true;
          bind(method, value).apply(undefined, arguments);
          arrayChanging = false;
          if (originLength < value.length) {
            var keys = new Array(value.length - originLength).fill(1).map(function (value, index) {
              return (index + originLength).toString();
            });
            var _props = getPropertyDecorators(keys);
            applyDecorators(value, _props, { self: true, omit: true });
          }
          hook();
        };
      }), nonenumerable];
      return props;
    }, {});
    applyDecorators(value, methodProps, { self: true });
  }
  var operateProps = (_operateProps2 = {}, defineProperty$1(_operateProps2, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          disable = _ref3.disable,
          isNewVal = _ref3.isNewVal;

      isNewVal = isNewVal || getOwnKeys(value).indexOf(property) === -1;
      if (isFunction(method)) {
        bind(method, _this)(property, val, { disable: true, isNewVal: isNewVal });
      }
      if (isNewVal) {
        var _props2 = getPropertyDecorators([property]);
        applyDecorators(value, _props2, { self: true, omit: true });
      }
      if (!disable) {
        value[property] = val;
      }
    };
  }), nonenumerable]), defineProperty$1(_operateProps2, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      if (isFunction(method)) {
        bind(method, _this)(property);
      } else {
        delete value[property];
      }
      hook();
    };
  }), nonenumerable]), _operateProps2);
  applyDecorators(value, operateProps, { self: true });
  return value;
}

function watch() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var option = isObject(args[args.length - 1]) ? args[args.length - 1] : {};
  // $FlowFixMe: we have check if it's an object
  var deep = option.deep,
      omit = option.omit,
      other = option.other,
      _option$operationPref = option.operationPrefix,
      operationPrefix = _option$operationPref === undefined ? '__' : _option$operationPref,
      _option$diff = option.diff,
      diff = _option$diff === undefined ? true : _option$diff;
  // $FlowFixMe: we have check if it's an object

  var proxy = option.proxy;

  if (typeof Proxy !== 'function') {
    proxy = false;
    /* istanbul ignore else  */
    warn('You browser do not support Proxy, we will fall back into observe mode.');
  }
  if (!args.length) throw new TypeError('You must pass a function or a string to find the hanlder function.');
  if (other !== undefined && isPrimitive(other)) throw new TypeError('If you want us to trigger function on the other instance, you must pass in a legal instance');
  if (!isString(operationPrefix)) throw new TypeError('operationPrefix must be an string');
  return function (obj, prop, descriptor) {
    var fns = args.reduce(function (fns, keyOrFn, index) {
      if (!isString(keyOrFn) && !isFunction(keyOrFn)) {
        if (!index || index !== args.length - 1) throw new TypeError('You can only pass function or string as handler');
        return fns;
      }
      fns.push(isString(keyOrFn) ? function (newVal, oldVal) {
        var target = other || obj;
        // $FlowFixMe: we have ensure it must be a string
        var fn = getDeepProperty(target, keyOrFn);
        if (!isFunction(fn)) {
          if (!omit) throw new Error('You pass in a function for us to trigger, please ensure the property to be a function or set omit flag true');
          return;
        }
        return bind(fn, this)(newVal, oldVal);
      } : keyOrFn);
      return fns;
    }, []);
    var handler = function handler(newVal, oldVal) {
      var _this2 = this;

      fns.forEach(function (fn) {
        return bind(fn, _this2)(newVal, oldVal);
      });
    };
    var inited = false;
    var oldVal = void 0;
    var newVal = void 0;
    var proxyValue = void 0;
    return compressMultipleDecorators(accessor({
      set: function set$$1(value) {
        var _this3 = this;

        oldVal = this[prop];
        proxyValue = undefined;
        var hook = function hook() {
          return bind(handler, _this3)(newVal, oldVal);
        };
        return deep && (isObject(value) || isArray(value)) ? proxy ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff }) : value;
      },
      get: function get$$1(value) {
        var _this4 = this;

        if (proxyValue) return proxyValue;
        if (!inited) {
          inited = true;
          var hook = function hook() {
            return bind(handler, _this4)(newVal, oldVal);
          };
          if (deep && (isObject(value) || isArray(value))) {
            if (proxy) {
              proxyValue = deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
              oldVal = proxyValue;
              newVal = proxyValue;
              return proxyValue;
            }
            deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          oldVal = value;
          newVal = value;
        }
        return value;
      }
    }, { preSet: true }), accessor({
      set: function set$$1(value) {
        newVal = value;
        if (!diff || oldVal !== value) bind(handler, this)(newVal, oldVal);
        oldVal = value;
        return value;
      }
    }, { preSet: false }))(obj, prop, descriptor);
  };
}

var preventExtensions = Object.preventExtensions;

function nonextendable(obj, prop, descriptor) {
  if (descriptor === undefined) throw new Error('@nonextendable could not handle undefined property "' + prop + '".');
  return initialize(function (value) {
    preventExtensions(value);
    return value;
  })(obj, prop, descriptor);
}

function runnable(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other,
      backup = _ref.backup;

  if (!isFunction(key) && !isString(key)) throw new TypeError('@runnable only accept Function or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@runnable can only be used on method, but not ' + _value + ' on property "' + prop + '".');
    var canIRun = isFunction(key) ? key : function () {
      var keys = key.split('.');
      var originTarget = isPrimitive(other) ? this : other;
      return getDeepProperty(originTarget, keys);
    };
    backup = isFunction(backup) ? backup : function () {};
    return {
      value: function value() {
        if (bind(canIRun, this).apply(undefined, arguments) === true) {
          return bind(_value, this).apply(undefined, arguments);
        } else {
          // $FlowFixMe: I have reassign it when it's not a function
          return bind(backup, this).apply(undefined, arguments);
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

function enumerable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: true,
      writable: true
    };
  }
  descriptor.enumerable = true;
  return descriptor;
}

function nonconfigurable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: true,
      writable: true
    };
  }
  descriptor.configurable = true;
  return descriptor;
}

function nonconfigurable$1(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: false,
      writable: true
    };
  }
  descriptor.configurable = false;
  return descriptor;
}

function string() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function boolean() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function array() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isArray(args[0]) ? args.shift() : [];
  args.unshift(function (value) {
    return isArray(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function number() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isNumber(args[0]) ? args.shift() : 0;
  args.unshift(function (value) {
    return isNumber(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function string$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function boolean$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function array$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isArray(args[0]) ? args.shift() : [];
  args.unshift(function (value) {
    return isArray(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function number$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isNumber(args[0]) ? args.shift() : 0;
  args.unshift(function (value) {
    return isNumber(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

var before$1 = classify(before, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var after$1 = classify(after, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var runnable$1 = classify(runnable, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var waituntil$1 = classify(waituntil, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

exports.accessor = accessor;
exports.before = before;
exports.after = after;
exports.readonly = readonly;
exports.alias = alias;
exports.autobind = autobind;
exports.frozen = frozen;
exports.initialize = initialize;
exports.waituntil = waituntil;
exports.lazyInit = lazyInit;
exports.lock = lock;
exports.watch = watch;
exports.nonextendable = nonextendable;
exports.runnable = runnable;
exports.enumerable = enumerable;
exports.nonenumerable = nonenumerable;
exports.configurable = nonconfigurable;
exports.nonconfigurable = nonconfigurable$1;
exports.initString = string;
exports.initBoolean = boolean;
exports.initArray = array;
exports.initNumber = number;
exports.alwaysString = string$1;
exports.alwaysBoolean = boolean$1;
exports.alwaysArray = array$1;
exports.alwaysNumber = number$1;
exports.autobindClass = autobindClass;
exports.beforeClass = before$1;
exports.afterClass = after$1;
exports.runnableClass = runnable$1;
exports.waituntilClass = waituntil$1;
exports.applyDecorators = applyDecorators;
exports.classify = classify;
exports.getOwnKeys = getOwnKeys;
exports.getOwnPropertyDescriptors = getOwnPropertyDescriptors;
exports.isDescriptor = isDescriptor;
exports.isAccessorDescriptor = isAccessorDescriptor;
exports.isInitializerDescriptor = isInitializerDescriptor;
exports.isDataDescriptor = isDataDescriptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(5);

var _toxicDecorators = __webpack_require__(2);

var _mangoHelper = __webpack_require__(0);

var _createchild = __webpack_require__(11);

var majorColorStyle = "\n  .chimee-flex-component svg *{\n    fill: majorColor;\n    stroke: majorColor;\n  }\n  chimee-progressbar-all{\n    background: majorColor;\n  }\n  chimee-volume.chimee-flex-component chimee-volume-bar-all{\n    background: majorColor;    \n  }\n  chimee-clarity-list li:hover,\n  chimee-clarity-list li.active {\n    color: majorColor;\n  }\n";
var hoverColorStyle = "\n  .chimee-flex-component svg:hover *{\n    fill: hoverColor;\n    stroke: hoverColor;\n  }\n";
/**
 * 插件默认配置
 */
var defaultConfig = {
    hideBarTime: 2000,
    barShowByMouse: 'move'
};
var chimeeControl = {
    name: 'chimeeControl',
    el: 'chimee-control',
    data: {
        children: {},
        show: true,
        adlock: false,
        disabled: true
    },
    level: 99,
    operable: false,
    penetrate: false,
    create: function create() {},
    init: function init(videoConfig) {
        if (videoConfig.controls) {
            this.show = true;
            videoConfig.controls = false;
        }
        var _this = this;
        (0, _toxicDecorators.applyDecorators)(videoConfig, {
            controls: (0, _toxicDecorators.accessor)({
                get: function get() {
                    return _this.show;
                },
                set: function set(value) {
                    _this.show = Boolean(value);
                    _this._display();
                    return false;
                }
            }, { preSet: true })
        }, { self: true });
        this.config = (0, _mangoHelper.isObject)(this.$config) ? (0, _mangoHelper.deepAssign)(defaultConfig, this.$config) : defaultConfig;
        this.config.hideBarTime = this.config.barShowByMouse === 'move' ? this.config.hideBarTime : 0;
        this.$dom.innerHTML = '<chimee-control-wrap></chimee-control-wrap>';
        this.$wrap = this.$dom.querySelector('chimee-control-wrap');
        this.children = (0, _createchild.createChild)(this);
        this._setStyle();
    },
    destroy: function destroy() {
        window.clearTimeout(this.timeId);
    },
    inited: function inited() {
        for (var i in this.children) {
            this.children[i].inited && this.children[i].inited();
        }
    },
    events: {
        // cms 一层接口成功
        cmsDataComplete: function cmsDataComplete(cmsData) {
            this.children.progressBar.initKeyPoints(cmsData.points);
            this.children.progressBar.initFrames(cmsData.frame);
        },
        // 下一集信息返回的时候
        nextVideoInfo: function nextVideoInfo(nextvideoinfo) {
            this.children.playNext.setNextVideoInfo(nextvideoinfo);
        },
        // 调度信息获取的时候设置清晰度列表
        dispactherDataComplete: function dispactherDataComplete(data) {
            this.children.clarity.initTextList(data.stream);
        },
        frontAdBegin: function frontAdBegin() {
            console.log('front ad begin');
            this.adlock = true;
            this._disable(true);
            (0, _mangoHelper.setStyle)(this.$dom, {
                visibility: 'hidden'
            });
        },
        videoPlay: function videoPlay() {
            console.log('video play');
            this.adlock = false;
            this._disable(false);
        },
        loadstart: function loadstart() {
            // this._disable(true);
        },
        canplay: function canplay() {
            // this._disable(false);
        },
        play: function play() {
            this.children.play && this.children.play.changeState('play');
            this.config.barShowByMouse === 'move' && this._hideItself();
        },
        pause: function pause() {
            if (this.adlock) return;
            this.children.play && this.children.play.changeState('pause');
            this._showItself();
        },
        c_mouseenter: function c_mouseenter() {
            if (this.adlock) return;
            if (this.config.barShowByMouse === 'move') return;
            this._showItself();
        },
        c_mousemove: function c_mousemove() {
            if (this.adlock) return;
            this._mousemove();
        },
        c_mouseleave: function c_mouseleave() {
            if (this.adlock) return;
            if (this.config.barShowByMouse === 'move') return;
            this._hideItself();
        },
        durationchange: function durationchange() {
            this.children.progressTime && this.children.progressTime.updateTotal();
        },
        timeupdate: function timeupdate() {
            this._progressUpdate();
        },
        progress: function progress() {
            this.children.progressBar && this.children.progressBar.progress();
        },
        volumechange: function volumechange() {
            this.children.volume && this.children.volume.update();
        },
        keydown: function keydown(e) {
            if (this.disabled) return;
            e.stopPropagation();
            switch (e.keyCode) {
                case 32:
                    {
                        e.preventDefault();
                        this.children.play && this.children.play.click(e);
                        break;
                    }
                case 37:
                    {
                        e.preventDefault();
                        var reduceTime = this.currentTime - 10;
                        this.currentTime = reduceTime < 0 ? 0 : reduceTime;
                        this._mousemove();
                        break;
                    }
                case 39:
                    {
                        e.preventDefault();
                        var raiseTime = this.currentTime + 10;
                        this.currentTime = raiseTime > this.duration ? this.duration : raiseTime;
                        this._mousemove();
                        break;
                    }
                case 38:
                    {
                        e.preventDefault();
                        var raiseVolume = this.volume + 0.1;
                        this.volume = raiseVolume > 1 ? 1 : raiseVolume;
                        this._mousemove();
                        break;
                    }
                case 40:
                    {
                        e.preventDefault();
                        var reduceVolume = this.volume - 0.1;
                        this.volume = reduceVolume < 0 ? 0 : reduceVolume;
                        this._mousemove();
                        break;
                    }
            }
        },
        click: function click(e) {
            var _this = this;
            var time = new Date();
            var preTime = this.clickTime;
            this.clickTime = time;
            if (time - preTime < 300) {
                clearTimeout(this.clickTimeId);
                return;
            }
            this.clickTimeId = setTimeout(function () {
                !_this.disabled && _this.children.play && _this.children.play.click(e);
            }, 300);
        },
        dblclick: function dblclick(e) {
            // this.dblclick = true;
            !this.disabled && this.children.screen && this.children.screen.click();
        }
    },
    methods: {
        _progressUpdate: function _progressUpdate() {
            this.children.progressBar && this.children.progressBar.update();
            this.children.progressTime && this.children.progressTime.updatePass();
        },
        _hideItself: function _hideItself() {
            // window.clearTimeout(this.timeId);
            // this.timeId = setTimeout(() => {
            //   let bottom = this.$wrap.offsetHeight;
            //   bottom = this.children.progressBar ? this.children.progressBar.$wrap[0].offsetTop - bottom : -bottom;
            //   setStyle(this.$wrap, {
            //     bottom: bottom + 'px'
            //   });
            //   setStyle(this.$dom, {
            //     visibility: 'hidden'
            //   });
            // }, this.config.hideBarTime);
        },
        _showItself: function _showItself() {
            window.clearTimeout(this.timeId);
            (0, _mangoHelper.setStyle)(this.$wrap, {
                bottom: '0'
            });
            (0, _mangoHelper.setStyle)(this.$dom, {
                visibility: 'visible'
            });
        },
        _display: function _display() {
            var display = this.show ? 'block' : 'none';
            (0, _mangoHelper.setStyle)(this.$dom, {
                display: display
            });
        },
        _mousemove: function _mousemove(e) {
            if (this.paused || this.config.barShowByMouse === 'enter') return;
            this._showItself();
            this._hideItself();
        },
        // controlbar 不可以点
        // 键盘／鼠标事件不监听
        _disable: function _disable(disabled) {
            if (!this.show) return;
            this.disabled = disabled;
            (0, _mangoHelper.setStyle)(this.$wrap, 'pointerEvents', disabled ? 'none' : 'auto');
        },
        _setStyle: function _setStyle() {
            var css = '';
            css += this.config.majorColor ? majorColorStyle.replace(/majorColor/g, this.config.majorColor) : '';
            css += this.config.hoverColor ? hoverColorStyle.replace(/hoverColor/g, this.config.hoverColor) : '';
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = css;
            document.head.appendChild(style);
        }
    }
};
exports.default = chimeeControl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js??ref--0-2!./control.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js??ref--0-2!./control.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/* 暂时存放到这的， 用来设置 container video 的基本样式 */\ncontainer {\n  position: relative;\n}\ncontainer,\nvideo {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  outline: none;\n}\nvideo:focus {\n  outline: none;\n}\n/* 用到的变量 */\n:root {\n  --barColor: #f06000;\n  --trackColor: #ffffff;\n}\n/* 全局默认样式 */\n.chimee-flex-component svg g,\n.chimee-flex-component svg path {\n  fill: #fff;\n  stroke: #fff;\n}\n.chimee-flex-component svg:hover g {\n  fill: #fff;\n  stroke: #fff;\n}\n/* 默认隐藏 */\nchimee-volume-state-mute,\nchimee-volume-state-low,\nchimee-volume-state-high,\nchimee-control-state-pause,\nchimee-control-state-play,\nchimee-progressbar-preview,\nchimee-progressbar-preview-btn,\nchimee-screen-full,\nchimee-clarity-list,\nchimee-screen-small {\n  display: none;\n}\n/* 满足条件时显示 */\nchimee-control.full chimee-screen-full,\nchimee-control.small chimee-screen-small,\nchimee-volume.mute chimee-volume-state-mute,\nchimee-volume.low chimee-volume-state-low,\nchimee-volume.high chimee-volume-state-high,\nchimee-control.pause chimee-control-state-pause,\nchimee-control.play chimee-control-state-play,\nchimee-control.full chimee-screen-full,\nchimee-control.small chimee-screen-small {\n  display: inline-block;\n  width: 1.4em;\n  height: 100%;\n}\n/* 开始写具体样式 */\nchimee-control {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  font-size: 14px;\n  user-select: none;\n  overflow: hidden;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n  transition: visibility 0.5s ease;\n}\nchimee-control-wrap {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  transition: bottom 0.5s ease;\n  pointer-events: auto;\n}\n.chimee-flex-component {\n  order: 1;\n  flex-grow: 0;\n  height: 40px;\n  cursor: pointer;\n}\n.chimee-flex-component svg {\n  fill: #fff;\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 6px;\n}\n/* 播放器状态，播放／暂停 */\nchimee-control-state.chimee-flex-component {\n  margin-left: 20px;\n  width: 40px;\n}\n/* 播放器状态，播放／暂停 动画效果 */\nchimee-control-state .left,\nchimee-control-state .right {\n  transition: d 0.2s ease-in-out;\n}\nchimee-control-playnext {\n  width: 40px;\n}\n/* 时间显示 */\nchimee-progresstime.chimee-flex-component {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  margin-left: 10px;\n  font-size: 16px;\n}\nchimee-progresstime-pass,\nchimee-progresstime-total {\n  display: inline;\n}\nchimee-progresstime-total span {\n  display: inline-block;\n  margin: 0 4px;\n}\n/* 播放器控制条 */\nchimee-progressbar.chimee-flex-component {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  height: 10px;\n  width: 100%;\n  margin-left: 0px;\n}\nchimee-progressbar-wrap {\n  display: inline-block;\n  height: 10px;\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  top: 0;\n}\n.chimee-progressbar-line {\n  position: absolute;\n  left: 0;\n  display: inline-block;\n  height: 6px;\n}\nchimee-progressbar-bg {\n  width: 100%;\n  background: #fff;\n  opacity: .4;\n}\nchimee-progressbar-buffer {\n  width: 0;\n  background: #fff;\n  opacity: .5;\n}\nchimee-progressbar-all {\n  background: var(--barColor);\n}\nchimee-progressbar-ball {\n  content: '';\n  position: absolute;\n  right: -7px;\n  top: -4px;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  display: block;\n  background: #fff;\n  border-radius: 50%;\n  pointer-events: none;\n}\nchimee-progressbar-preview {\n  position: absolute;\n  bottom: 40px;\n  width: 130px;\n  height: 74px;\n  background: #212121;\n  color: #fff;\n  border-radius: 4px;\n  background-image: url(https://2img.hitv.com/preview/frame_images/pcframes/2018/zongyi/96863/2149453/12364584_1.jpg);\n  background-position: -910px 0px;\n}\nchimee-progressbar-tip {\n  position: absolute;\n  bottom: 0px;\n  right: 6px;\n  color: #fff;\n}\nchimee-progressbar-preview-line {\n  position: absolute;\n  bottom: 16px;\n  width: 1px;\n  height: 13px;\n  background: #fff;\n  opacity: 0.8;\n}\nchimee-progressbar-preview-btn {\n  position: absolute;\n  bottom: 0px;\n  width: 3px;\n  height: 12px;\n  background: #fff;\n  opacity: 0.8;\n  pointer-events: none;\n}\n/* 音量控制 */\nchimee-volume.chimee-flex-component {\n  margin-left: 300px;\n  cursor: pointer;\n  padding: 0;\n  white-space: nowrap;\n  margin-right: 10px;\n  position: relative;\n}\nchimee-volume.chimee-flex-component.vertical {\n  padding-right: 10px;\n}\nchimee-volume-state {\n  display: inline-block;\n  width: 2em;\n  vertical-align: top;\n}\n/* 动画所用到的元素 css */\nchimee-volume .ring1,\nchimee-volume .ring2,\nchimee-volume .line {\n  stroke-dasharray: 150;\n  stroke-dashoffset: 150;\n  transition: stroke-dashoffset 0.7s ease-in-out;\n}\nchimee-volume.mute .line,\nchimee-volume.mute .ring1,\nchimee-volume.mute .ring2 {\n  stroke-dashoffset: 0;\n}\nchimee-volume.high .ring1,\nchimee-volume.high .ring2 {\n  stroke-dashoffset: 0;\n}\nchimee-volume.low .ring2 {\n  stroke-dashoffset: 0;\n}\nchimee-volume.vertical:hover chimee-volume-bar {\n  display: inline-block;\n}\nchimee-volume.vertical chimee-volume-bar {\n  position: absolute;\n  top: -7em;\n  left: -0.2em;\n  width: 2em;\n  height: 4em;\n  padding-bottom: 3em;\n  display: none;\n  vertical-align: middle;\n}\nchimee-volume.vertical chimee-volume-bar::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 1em;\n  background: #212121;\n  border-radius: 4px;\n}\nchimee-volume.horizonal chimee-volume-bar {\n  position: relative;\n  height: 1.2em;\n  width: 4em;\n  display: inline-block;\n  vertical-align: middle;\n}\nchimee-volume.vertical chimee-volume-bar-wrap {\n  display: inline-block;\n  position: absolute;\n  bottom: 1em;\n  left: 0;\n  top: 1em;\n  right: 0;\n  height: 4em;\n}\nchimee-volume.vertical chimee-volume-bar-all,\nchimee-volume.vertical chimee-volume-bar-bg {\n  position: absolute;\n  bottom: 0;\n  left: 1em;\n  display: inline-block;\n  width: 2px;\n  border-radius: 4px;\n}\nchimee-volume.vertical chimee-volume-bar-bg {\n  height: 4px;\n  background: #fff;\n  opacity: 0.4;\n}\nchimee-volume.vertical chimee-volume-bar-all {\n  background: #fff;\n}\nchimee-volume.vertical chimee-volume-bar-all::after {\n  content: '';\n  position: absolute;\n  right: -0.34em;\n  top: -0.4em;\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 0.8em;\n  background: #fff;\n  pointer-events: none;\n}\nchimee-volume.horizonal chimee-volume-bar {\n  position: relative;\n  height: 1.2em;\n  width: 70px;\n  display: inline-block;\n  vertical-align: middle;\n}\nchimee-volume.horizonal chimee-volume-bar-all,\nchimee-volume.horizonal chimee-volume-bar-bg {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  display: inline-block;\n  height: 4px;\n}\nchimee-volume.horizonal chimee-volume-bar-bg {\n  width: 70px;\n  background: #fff;\n  opacity: 0.4;\n}\nchimee-volume.horizonal chimee-volume-bar-all {\n  background: #fff;\n}\nchimee-volume.horizonal chimee-volume-bar-all::after {\n  content: '';\n  position: absolute;\n  right: -0.4em;\n  top: -0.3em;\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 0.8em;\n  background: #fff;\n  pointer-events: none;\n}\n/* 全屏 */\nchimee-screen.chimee-flex-component {\n  margin-left: 10px;\n  width: 40px;\n}\n/* 清晰度切换 */\nchimee-clarity.chimee-flex-component {\n  position: relative;\n  color: #fff;\n  width: 40px;\n  margin-left: 10px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 16px;\n}\nchimee-clarity.on chimee-clarity-list {\n  display: inline-block;\n}\nchimee-clarity.chimee-flex-component svg {\n  width: auto;\n  height: auto;\n}\nchimee-clarity-list {\n  position: absolute;\n  left: -20px;\n  bottom: 60px;\n  width: 84px;\n  overflow: hidden;\n  background: rgba(28, 28, 28, 0.9);\n  border-radius: 4px;\n  box-sizing: content-box;\n  line-height: 0;\n}\nchimee-clarity-list ul {\n  margin: 0;\n  padding: 10px 0;\n  background: rgba(28, 28, 28, 0.9);\n  font-size: 16px;\n  line-height: 30px;\n}\nchimee-clarity-list li {\n  width: 100%;\n  height: 30px;\n  display: block;\n  line-height: 30px;\n  text-align: center;\n}\nchimee-clarity-list li:hover,\nchimee-clarity-list li.active {\n  color: var(--barColor);\n}\n/* 设置 */\nchimee-setting.chimee-flex-component {\n  width: 40px;\n  margin-left: 10px;\n}\nchimee-setting-panel {\n  display: none;\n  position: absolute;\n  bottom: 66px;\n  right: 16px;\n  width: 210px;\n  height: 50px;\n  background: #212121;\n  opacity: 0.95;\n  color: #fff;\n  line-height: 50px;\n  border-radius: 4px;\n  padding-left: 20px;\n  font-size: 16px;\n}\nchimee-setting.on chimee-setting-panel {\n  display: block;\n}\nchimee-setting-panel span {\n  margin-right: 20px;\n}\nchimee-setting-panel span.yes {\n  color: var(--barColor);\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChild = createChild;

var _component = __webpack_require__(12);

var _component2 = _interopRequireDefault(_component);

var _play = __webpack_require__(14);

var _play2 = _interopRequireDefault(_play);

var _next = __webpack_require__(15);

var _next2 = _interopRequireDefault(_next);

var _volume = __webpack_require__(16);

var _volume2 = _interopRequireDefault(_volume);

var _progressbar = __webpack_require__(17);

var _progressbar2 = _interopRequireDefault(_progressbar);

var _progresstime = __webpack_require__(18);

var _progresstime2 = _interopRequireDefault(_progresstime);

var _setting = __webpack_require__(19);

var _setting2 = _interopRequireDefault(_setting);

var _screen = __webpack_require__(20);

var _screen2 = _interopRequireDefault(_screen);

var _clarity = __webpack_require__(21);

var _clarity2 = _interopRequireDefault(_clarity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hundleChildren(plugin) {
    var childConfig = {};
    if (!plugin.$config.children) {
        childConfig = plugin.isLive ? {
            play: true,
            progressTime: false,
            progressBar: false,
            volume: true,
            clarity: true,
            screen: true
        } : {
            play: true,
            playNext: true,
            progressTime: true,
            progressBar: true,
            volume: true,
            clarity: true,
            setting: true,
            screen: true
        };
    } else {
        childConfig = plugin.$config.children;
    }
    return childConfig;
}
/**
 * 1. 将所有的 ui component 输出到 html 结构中
 * 2. 为这些 component 绑定响应的事件
 * @param {*} dom 所有 ui 节点的子容器
 * @param {*} config 关于 ui 的一些列设置
 * @return {Array} 所有子节点
 */
function createChild(plugin) {
    var childConfig = plugin.config.children = hundleChildren(plugin);
    var children = {};
    if (!childConfig) {
        children.play = new _play2.default(plugin);
        children.progressTime = new _progresstime2.default(plugin);
        children.progressBar = new _progressbar2.default(plugin);
        children.volume = new _volume2.default(plugin);
        children.screen = new _screen2.default(plugin);
    } else {
        Object.keys(childConfig).forEach(function (item) {
            switch (item) {
                case 'play':
                    if (childConfig.play) {
                        children.play = new _play2.default(plugin, childConfig.play);
                    }
                    break;
                case 'playNext':
                    if (childConfig.playNext) {
                        children.playNext = new _next2.default(plugin, childConfig.playNext);
                    }
                    break;
                case 'progressTime':
                    if (childConfig.progressTime) {
                        children.progressTime = new _progresstime2.default(plugin, childConfig.progressTime);
                    }
                    break;
                case 'progressBar':
                    children.progressBar = new _progressbar2.default(plugin, childConfig.progressBar);
                    break;
                case 'volume':
                    if (childConfig.volume) {
                        children.volume = new _volume2.default(plugin, childConfig.volume);
                    }
                    break;
                case 'setting':
                    if (childConfig.setting) {
                        children.setting = new _setting2.default(plugin, childConfig.setting);
                    }
                    break;
                case 'screen':
                    if (childConfig.screen) {
                        children.screen = new _screen2.default(plugin, childConfig.screen);
                    }
                    break;
                case 'clarity':
                    // && Array.isArray(childConfig.clarity.list)
                    if (childConfig.clarity) {
                        children.clarity = new _clarity2.default(plugin, childConfig.clarity);
                    }
                    break;
                default:
                    children[item] = new _component2.default(plugin, childConfig[item]);
                    break;
            }
        });
    }
    return children;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * 自定义组件配置
 */
var Component = /** @class */function (_super) {
    __extends(Component, _super);
    function Component(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = option;
        _this.init();
        return _this;
    }
    Component.prototype.init = function () {
        _super.prototype.create.call(this);
        (0, _mangoHelper.addClassName)(this.$dom, 'chimee-flex-component');
    };
    return Component;
}(_base2.default);
exports.default = Component;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * toxic-utils v0.2.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.toxicUtils = {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$1 = _global.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) {  }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$2 = _core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$2, __esModule: true };
});

unwrapExports(from);

var toConsumableArray = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _from2 = _interopRequireDefault(from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;


















var gOPD = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$2 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});

unwrapExports(symbol);

var _typeof_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

unwrapExports(_typeof_1);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

unwrapExports(keys);

// 20.1.2.3 Number.isInteger(number)

var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

var isInteger$2 = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger$2, __esModule: true };
});

unwrapExports(isInteger$1);

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim = _stringTrim.trim;

var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });

var _parseFloat$1 = parseFloat;

var _parseFloat = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

unwrapExports(_parseFloat);

/**
 * toxic-predicate-functions v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject$1(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
    target[key] = value;
  };

  // use recursive to move what in source to the target
  // if you do not provide a target, we will create a new target
  function recursiveFn(source, target, key) {
    if (isArray(source) || isObject$1(source)) {
      target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
      for (var _key in source) {
        // $FlowFixMe: support computed key here
        setter(target, _key, recursiveFn(source[_key], target[_key], _key));
        // target[key] = recursiveFn(source[key], target[key], key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * deeply clone an object
 * @param  {Array|Object} source if you pass in other type, it will throw an error
 * @return {clone-target}        the new Object
 */
function deepClone(source) {
  if (isPrimitive(source)) {
    throw new TypeError('deepClone only accept non primitive type');
  }
  return _deepAssign(source);
}
/**
 * merge multiple objects
 * @param  {...Object} args [description]
 * @return {merge-object}         [description]
 */
function deepAssign() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length < 2) {
    throw new Error('deepAssign accept two and more argument');
  }
  for (var i = args.length - 1; i > -1; i--) {
    if (isPrimitive(args[i])) {
      throw new TypeError('deepAssign only accept non primitive type');
    }
  }
  var target = args.shift();
  args.forEach(function (source) {
    return _deepAssign(source, target);
  });
  return target;
}

/**
 * camelize any string, e.g hello world -> helloWorld
 * @param  {string} str only accept string!
 * @return {string}     camelize string
 */
function camelize(str, isBig) {
  return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
    return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
  });
}
/**
 * hypenate any string e.g hello world -> hello-world
 * @param  {string} str only accept string
 * @return {string}
 */
function hypenate(str) {
  return camelize(str).replace(/([A-Z])/g, function (match) {
    return '-' + match.toLowerCase();
  });
}

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * generate an uuid
 */
function uuid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
/**
 * generate an random number which length is 4
 */
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}

/**
 * generate an random number with specific length
 */
function rand(length) {
  var str = '';
  while (str.length < length) {
    str += S4();
  }
  return str.slice(0, length);
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

exports.genTraversalHandler = genTraversalHandler;
exports.deepClone = deepClone;
exports.deepAssign = deepAssign;
exports.camelize = camelize;
exports.hypenate = hypenate;
exports.bind = bind;
exports.uuid = uuid;
exports.S4 = S4;
exports.rand = rand;
exports.getDeepProperty = getDeepProperty;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * play 配置
 */
var defaultOption = {
    tag: 'chimee-control-state',
    html: "\n    <chimee-control-state-play>\n      <svg id=\"pad-play\" viewBox=\"0 0 14 14.8\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <path d=\"M14 7.3a.9.9 0 0 0-.7-1L3 .9 1.5.2Q-.1-.5 0 1.6v12.1q.1 1 .6 1.2a2.2 2.2 0 0 0 1.7-.5l11.1-6.2q.7-.4.6-.9z\"></path>\n      </svg>\n    </chimee-control-state-play>\n    <chimee-control-state-pause>\n      <svg id=\"pad-pause\" viewBox=\"0 0 14 16\" width=\"100%\" height=\"100%\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <path d=\"M5 16V0H0v16h5M9 0h5v16H9z\"></path>\n      </svg>\n    </chimee-control-state-pause>\n  ",
    defaultEvent: {
        click: 'click'
    }
};
var Play = /** @class */function (_super) {
    __extends(Play, _super);
    function Play(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.animate = false;
        _this.init();
        return _this;
    }
    Play.prototype.init = function () {
        // 创建 html ／ 绑定事件
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$dom.addClass('chimee-flex-component');
        this.changeState('pause');
    };
    Play.prototype.changeState = function (state) {
        var nextState = state === 'play' ? 'pause' : 'play';
        this.state = state;
        (0, _mangoHelper.addClassName)(this.parent.$dom, nextState);
        (0, _mangoHelper.removeClassName)(this.parent.$dom, state);
    };
    Play.prototype.click = function (e) {
        var nextState = this.state === 'play' ? 'pause' : 'play';
        this.changeState(nextState);
        this.parent.$emit(nextState);
    };
    return Play;
}(_base2.default);
exports.default = Play;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * playnext 配置
 */
var defaultOption = {
    tag: 'chimee-control-playnext',
    html: "\n    <chimee-control-playnext-btn>\n        <svg id=\"pad-next\" viewBox=\"0 0 15 14\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <path d=\"M8.3 5.9L2.7.9 1.4.1Q-.1-.3 0 1.4v11.5q.1.9.6 1.1a2.1 2.1 0 0 0 1.6-.4l6.2-5.8q.7-.6.6-.9a1.8 1.8 0 0 0-.6-.9M11 0h4v14h-4z\"></path>\n        </svg>\n    </chimee-control-playnext-btn>\n    <chimee-control-nextvideoinfo></chimee-control-nextvideoinfo>\n  ",
    defaultEvent: {
        click: 'click'
    }
};
var PlayNext = /** @class */function (_super) {
    __extends(PlayNext, _super);
    function PlayNext(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    PlayNext.prototype.init = function () {
        // 创建 html ／ 绑定事件
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$dom.addClass('chimee-flex-component');
    };
    // 播放下一集信息
    PlayNext.prototype.playNext = function () {};
    PlayNext.prototype.click = function (e) {
        this.playNext();
        this.parent.$emit('playNextVideo');
    };
    return PlayNext;
}(_base2.default);
exports.default = PlayNext;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _toxicDecorators = __webpack_require__(2);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Volume 配置
 */
var defaultOption = {
    tag: 'chimee-volume',
    html: "\n    <chimee-volume-state>\n      <chimee-volume-state-mute></chimee-volume-state-mute>\n      <chimee-volume-state-low></chimee-volume-state-low>\n      <chimee-volume-state-high></chimee-volume-state-high>\n    </chimee-volume-state>\n    <chimee-volume-bar>\n      <chimee-volume-bar-wrap>\n        <chimee-volume-bar-bg></chimee-volume-bar-bg>\n        <chimee-volume-bar-all>\n          <chimee-volume-bar-ball></chimee-volume-bar-ball>\n        </chimee-volume-bar-all>\n        <chimee-volume-bar-track></chimee-volume-bar-track>\n      </chimee-volume-bar-wrap>\n    </chimee-volume-bar>\n  ",
    animate: {
        icon: "\n    <svg id=\"pad-voice\" viewBox=\"0 0 13 14.6\" width=\"100%\" height=\"100%\">\n      <path d=\"M11 2.4q0-1.9-.7-2.3T8 1.4q-2.2 2.5-7 3a3 3 0 0 0-.7 1.4A5.7 5.7 0 0 0 0 7.4a5.5 5.5 0 0 0 .3 1.5 3 3 0 0 0 .7 1.4q4.7.5 7 3t2.3 1.3.7-2.2v-2.2a2.8 2.8 0 0 0 1.4-1.1 2.6 2.6 0 0 0 .6-1.7 2.9 2.9 0 0 0-.6-1.8 2.9 2.9 0 0 0-1.4-1z\"></path>\n    </svg>\n    "
    },
    defaultEvent: {
        mousedown: 'mousedown'
    }
};
var getElementPath = function getElementPath(elem) {
    var path = [];
    if (elem === null) return path;
    path.push(elem);
    while (elem.parentNode !== null) {
        elem = elem.parentNode;
        path.push(elem);
    }
    ;
    return path;
};
var Volume = /** @class */function (_super) {
    __extends(Volume, _super);
    function Volume(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.parent.preVolume = 0;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    Volume.prototype.init = function () {
        var _this = this;
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$state = this.$dom.find('chimee-volume-state');
        this.$bar = this.$dom.find('chimee-volume-bar');
        this.$all = this.$dom.find('chimee-volume-bar-all');
        this.$bg = this.$dom.find('chimee-volume-bar-bg');
        this.layout = this.option.layout === 'vertical' ? 'vertical' : 'horizonal';
        // 判断是否是默认或者用户提供 icon
        if (this.option.icon && this.option.icon.mute && this.option.icon.low) {
            this.option.icon.high = this.option.icon.high || this.option.icon.low;
            this.$mute = this.$dom.find('chimee-volume-state-mute');
            this.$low = this.$dom.find('chimee-volume-state-low');
            this.$high = this.$dom.find('chimee-volume-state-high');
            this.$mute.html(this.option.icon.mute);
            this.$low.html(this.option.icon.low);
            this.$high.html(this.option.icon.high);
        } else if (!this.option.bitmap) {
            this.animate = true;
            this.$state.html(this.option.animate.icon);
        }
        this.$dom.addClass("chimee-flex-component " + this.layout);
        this.changeState();
        this.watch_muted = this.parent.$watch('muted', function (val) {
            _this.update();
        });
    };
    Volume.prototype.inited = function () {
        this.update();
    };
    Volume.prototype.destroy = function () {
        this.watch_muted();
        _super.prototype.destroy.call(this);
    };
    Volume.prototype.changeState = function () {
        if (this.parent.muted || this.parent.volume === 0) {
            this.state = 'mute';
        } else if (this.parent.volume > 0 && this.parent.volume <= 0.5) {
            this.state = 'low';
        } else if (this.parent.volume > 0.5 && this.parent.volume <= 1) {
            this.state = 'high';
        }
        this.$dom.removeClass('mute low high');
        this.$dom.addClass(this.state);
    };
    Volume.prototype.click = function (e) {
        var path = e.path || getElementPath(e.target);
        if (path.indexOf(this.$state[0]) !== -1) {
            this.stateClick(e);
            return 'state';
        } else if (path.indexOf(this.$bar[0]) !== -1) {
            this.barClick(e);
            return 'bar';
        }
        return 'padding';
    };
    Volume.prototype.stateClick = function () {
        if (this.parent.muted) {
            this.parent.muted = false;
            return;
        }
        var currentVolume = this.parent.volume;
        this.parent.volume = currentVolume === 0 ? this.parent.preVolume : 0;
        this.parent.preVolume = currentVolume;
        this.changeState();
    };
    Volume.prototype.barClick = function (e) {
        var volume = this.layout === 'vertical' ? 1 - e.offsetY / this.$bg[0].offsetHeight : e.offsetX / this.$bg[0].offsetWidth;
        this.parent.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;
        this.update();
    };
    Volume.prototype.mousedown = function (e) {
        if (this.click(e) !== 'bar') return;
        this.startX = this.layout === 'vertical' ? e.clientY : e.clientX;
        this.startVolume = this.parent.volume;
        (0, _mangoHelper.addEvent)(window, 'mousemove', this.draging);
        (0, _mangoHelper.addEvent)(window, 'mouseup', this.dragEnd);
        (0, _mangoHelper.addEvent)(window, 'contextmenu', this.dragEnd);
    };
    /**
     * 更新声音条
     */
    Volume.prototype.update = function () {
        this.changeState();
        var volume = this.parent.muted ? 0 : this.parent.volume;
        this.layout === 'vertical' ? this.$all.css('height', volume * 100 + "%") : this.$all.css('width', volume * 100 + "%");
    };
    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */
    Volume.prototype.draging = function (e) {
        this.endX = this.layout === 'vertical' ? e.clientY : e.clientX;
        var dragVolume = this.layout === 'vertical' ? (this.startX - this.endX) / this.$bg[0].offsetHeight : (this.endX - this.startX) / this.$bg[0].offsetWidth;
        var dragAfterVolume = +(this.startVolume + dragVolume).toFixed(2);
        this.parent.volume = dragAfterVolume < 0 ? 0 : dragAfterVolume > 1 ? 1 : dragAfterVolume;
        this.parent.muted = false;
    };
    /**
     * 结束拖拽
     */
    Volume.prototype.dragEnd = function () {
        this.startX = 0;
        this.startVolume = 0;
        (0, _mangoHelper.removeEvent)(window, 'mousemove', this.draging);
        (0, _mangoHelper.removeEvent)(window, 'mouseup', this.dragEnd);
        (0, _mangoHelper.removeEvent)(window, 'contextmenu', this.dragEnd);
    };
    __decorate([_toxicDecorators.autobind], Volume.prototype, "draging", null);
    __decorate([_toxicDecorators.autobind], Volume.prototype, "dragEnd", null);
    return Volume;
}(_base2.default);
exports.default = Volume;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _toxicDecorators = __webpack_require__(2);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var defaultOption = {
    tag: 'chimee-progressbar',
    html: "\n    <chimee-progressbar-wrap>\n      <chimee-progressbar-bg class=\"chimee-progressbar-line\"></chimee-progressbar-bg>\n      <chimee-progressbar-buffer class=\"chimee-progressbar-line\"></chimee-progressbar-buffer>\n      <chimee-progressbar-all class=\"chimee-progressbar-line\">\n        <chimee-progressbar-ball></chimee-progressbar-ball>\n      </chimee-progressbar-all>\n      \n      <!-- \u65F6\u95F4\u8F74\u9884\u89C8\u529F\u80FD -->\n      <chimee-progressbar-preview> \n        <chimee-progressbar-tip></chimee-progressbar-tip>\n      </chimee-progressbar-preview>\n      <chimee-progressbar-preview-btn>\n        <chimee-progressbar-preview-line></chimee-progressbar-preview-line>\n      </chimee-progressbar-preview-btn>\n\n    </chimee-progressbar-wrap>\n  "
};
/**
 * @desc 获取当前时间点的视频截图信息
 * @param {Object} frameInfo 视频截图信息
 * @param {Number} time 当前的视频时间 单位为秒
 * @param {Object} 截图信息 {index, image, x, y}
 */
var getFrameImage = function getFrameImage(frameInfo, time) {
    var index, image, x, y, seconds, idx, len, remain;
    var frameWith = 130,
        frameHeight = 74,
        frameTotal = 100;
    if (frameInfo.second && frameInfo.second[0] && frameInfo.images) {
        seconds = frameInfo.second.join('|').split('|');
        len = seconds.length;
        index = len - 1;
        for (var i = 0; i < len - 1; i++) {
            if (time >= seconds[i] && time < seconds[i + 1]) {
                index = i;
                break;
            }
        }
        // 计算图片位置
        idx = Math.floor(index / frameTotal);
        remain = index % frameTotal;
        image = frameInfo.images[idx];
        x = remain % 10 * frameWith;
        y = Math.floor(remain / 10) * frameHeight;
        return {
            idx: idx,
            index: index,
            image: image,
            x: x,
            y: y
        };
    } else {
        return null;
    }
};
var ProgressBar = /** @class */function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.visiable = option !== false;
        _this.init();
        return _this;
    }
    ProgressBar.prototype.init = function () {
        _super.prototype.create.call(this);
        this.keyPoints = null; // 关键打点数据
        this.keyframes = null; // 关键帧图片数据
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$wrap = this.$dom.find('chimee-progressbar-wrap');
        this.$buffer = this.$dom.find('chimee-progressbar-buffer');
        this.$all = this.$dom.find('chimee-progressbar-all');
        this.$tip = this.$dom.find('chimee-progressbar-preview');
        this.$track = this.$dom.find('chimee-progressbar-track');
        this.$line = this.$dom.find('.chimee-progressbar-line');
        this.$ball = this.$dom.find('chimee-progressbar-ball');
        this.$previewBtn = this.$dom.find('chimee-progressbar-preview-btn');
        this.$dom.addClass('chimee-flex-component');
        // css 配置
        !this.visiable && this.$dom.css('visibility', 'hidden');
        // this.$line.css({
        //   top: this.$wrap.
        // });
        // 进度条居中布局，还是在上方
        if (this.option.layout === 'top') {
            this.$dom.addClass('progressbar-layout-top');
            this.$wrap.css({
                // left: -this.$dom[0].offsetLeft + 'px',
                top: -this.$ball[0].offsetHeight + 'px'
            });
            // this.$line.css({
            //   top: this.$ball[0].offsetHeight + 'px'
            // })
            (0, _mangoHelper.setStyle)(this.parent.$wrap, 'paddingTop', this.$ball[0].offsetHeight + 'px');
        }
        this.addWrapEvent();
    };
    ProgressBar.prototype.destroy = function () {
        this.removeWrapEvent();
        // 解绑全屏监听事件
        this.watch_screen && this.watch_screen();
        _super.prototype.destroy.call(this);
    };
    // 设置关键点
    ProgressBar.prototype.initKeyPoints = function (points) {
        this.keyPoints = points;
    };
    // 设置关键帧
    ProgressBar.prototype.initFrames = function (frames) {
        this.keyframes = frames;
    };
    ProgressBar.prototype.addWrapEvent = function () {
        this.$wrap.on('mousedown', this.mousedown);
        this.$wrap.on('mousemove', this.tipShow);
        this.$wrap.on('mouseleave', this.tipEnd);
    };
    ProgressBar.prototype.removeWrapEvent = function () {
        this.$wrap.off('mousedown', this.mousedown);
        this.$wrap.off('mousemove', this.tipShow);
        this.$wrap.off('mouseleave', this.tipEnd);
    };
    /**
     * 缓存进度条更新 progress 事件
     */
    ProgressBar.prototype.progress = function () {
        var buffer = 0;
        try {
            buffer = this.parent.buffered.end(0);
        } catch (e) {}
        var bufferWidth = buffer / this.parent.duration * 100 + '%';
        this.$buffer.css('width', bufferWidth);
    };
    /**
     * requestAnimationFrame 来更新进度条, timeupdate 事件
     */
    ProgressBar.prototype.update = function () {
        // const allWidth = this.$wrap[0].offsetWidth - this.$ball[0].offsetWidth;
        var time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
        var timePer = time ? time / this.parent.duration : 0;
        // const timeWidth = timePer * allWidth;
        this.$all.css('width', "calc(" + timePer * 100 + "% - " + this.$ball[0].offsetWidth / 2 + "px");
    };
    ProgressBar.prototype.mousedown = function (e) {
        // const ballRect = this.$ball[0].getClientRects()[0];
        // const ballLeft = ballRect.left;
        // const ballRight = ballRect.left + ballRect.width;
        // this.inBall = e.clientX <= ballRight && e.clientX >= ballLeft;
        if (e.target === this.$tip[0]) return;
        this._currentTime = e.offsetX / this.$wrap[0].offsetWidth * this.parent.duration;
        // if(!this.inBall) this.update();
        this.startX = e.clientX;
        this.startTime = this._currentTime;
        (0, _mangoHelper.addEvent)(window, 'mousemove', this.draging);
        (0, _mangoHelper.addEvent)(window, 'mouseup', this.dragEnd);
        (0, _mangoHelper.addEvent)(window, 'contextmenu', this.dragEnd);
    };
    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */
    ProgressBar.prototype.draging = function (e) {
        this.endX = e.clientX;
        var dragTime = (this.endX - this.startX) / this.$wrap[0].offsetWidth * this.parent.duration;
        var dragAfterTime = +(this.startTime + dragTime).toFixed(2);
        this._currentTime = dragAfterTime < 0 ? 0 : dragAfterTime > this.parent.duration ? this.parent.duration : dragAfterTime;
        this.update();
    };
    /**
     * 结束拖拽
     */
    ProgressBar.prototype.dragEnd = function () {
        this.update();
        this.startX = 0;
        this.startTime = 0;
        // if(!this.inBall) {
        this.parent.currentTime = this._currentTime;
        // this.inBall = false;
        // }
        this._currentTime = undefined;
        (0, _mangoHelper.removeEvent)(window, 'mousemove', this.draging);
        (0, _mangoHelper.removeEvent)(window, 'mouseup', this.dragEnd);
        (0, _mangoHelper.removeEvent)(window, 'contextmenu', this.dragEnd);
    };
    ProgressBar.prototype.tipShow = function (e) {
        // 如果没有关键帧数据，则不显示
        if (!this.keyframes) {
            return;
        }
        if (e.target === this.$tip[0] || e.target === this.$ball[0]) {
            this.$tip.css('display', 'none');
            this.$previewBtn.css('display', 'none');
            return;
        }
        ;
        var time = e.offsetX / this.$wrap[0].offsetWidth * this.parent.duration;
        time = time < 0 ? 0 : time > this.parent.duration ? this.parent.duration : time;
        var tipContent = (0, _mangoHelper.formatTime)(time);
        var frameInfo = getFrameImage(this.keyframes, time);
        var left = e.offsetX - this.$tip[0].offsetWidth / 2;
        var leftBound = this.$wrap[0].offsetWidth - this.$tip[0].offsetWidth;
        left = left < 0 ? 0 : left > leftBound ? leftBound : left;
        this.$tip.find('chimee-progressbar-tip').text(tipContent);
        this.$tip.css('backgroundImage', "url(" + frameInfo.image + ")");
        this.$tip.css('backgroundPosition', "-" + frameInfo.x + "px -" + frameInfo.y + "px");
        this.$tip.css('display', 'inline-block');
        this.$tip.css('left', left + "px");
        this.$previewBtn.css('display', 'inline-block');
        this.$previewBtn.css('left', e.offsetX + "px");
    };
    ProgressBar.prototype.tipEnd = function () {
        this.$tip.css('display', 'none');
        this.$previewBtn.css('display', 'none');
    };
    __decorate([_toxicDecorators.autobind], ProgressBar.prototype, "mousedown", null);
    __decorate([_toxicDecorators.autobind], ProgressBar.prototype, "draging", null);
    __decorate([_toxicDecorators.autobind], ProgressBar.prototype, "dragEnd", null);
    __decorate([_toxicDecorators.autobind], ProgressBar.prototype, "tipShow", null);
    __decorate([_toxicDecorators.autobind], ProgressBar.prototype, "tipEnd", null);
    return ProgressBar;
}(_base2.default);
exports.default = ProgressBar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * progressTime 配置
 */
var defaultOption = {
    tag: 'chimee-progresstime',
    html: "\n    <chimee-progresstime-pass>00:00</chimee-progresstime-pass\n    ><chimee-progresstime-total\n      ><span>/</span\n      ><chimee-progresstime-total-value>00:00</chimee-progresstime-total-value>\n    </chimee-progresstime-total>\n  "
};
var ProgressTime = /** @class */function (_super) {
    __extends(ProgressTime, _super);
    function ProgressTime(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    ProgressTime.prototype.init = function () {
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$total = this.$dom.find('chimee-progresstime-total-value');
        this.$pass = this.$dom.find('chimee-progresstime-pass');
        this.$dom.addClass('chimee-flex-component');
    };
    ProgressTime.prototype.updatePass = function () {
        this.$pass.text((0, _mangoHelper.formatTime)(this.parent.currentTime));
    };
    ProgressTime.prototype.updateTotal = function () {
        this.$total.text((0, _mangoHelper.formatTime)(this.parent.duration));
    };
    return ProgressTime;
}(_base2.default);
exports.default = ProgressTime;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * playnext 配置
 */
var defaultOption = {
    tag: 'chimee-setting',
    html: '\n    <chimee-setting-btn>\n        <svg id="pad-set" viewBox="0 0 16 16" width="100%" height="100%">\n            <path d="M15.7 6.8a1 1 0 0 0-.7-.3l-1.1-.3-.4-1 .5-1.1a1.1 1.1 0 0 0 .3-.7 1 1 0 0 0-.3-.7l-.5-.6a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3l-1 .6-.5-.2-.7-.3L9.4 1a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3h-.8a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l-.4 1.1-1 .5-.9-.6a1.1 1.1 0 0 0-.7-.3 1 1 0 0 0-.7.3l-.6.6a1 1 0 0 0-.3.7 1 1 0 0 0 .3.7l.5.9a5.9 5.9 0 0 0-.6 1.3L1 6.5a1 1 0 0 0-.7.3 1 1 0 0 0-.3.8v.8a1 1 0 0 0 .3.7 1 1 0 0 0 .7.3l1.1.3a6.4 6.4 0 0 0 .6 1.3l-.6 1a1.1 1.1 0 0 0 0 1.5l.6.5a1 1 0 0 0 1.5 0l1.1-.5 1 .4.2 1.1a1 1 0 0 0 .3.7.9.9 0 0 0 .8.3h.8a.9.9 0 0 0 .7-.3 1 1 0 0 0 .3-.7l.3-1.1.7-.2.5-.2 1.1.5a1.1 1.1 0 0 0 1.5 0l.5-.6a1 1 0 0 0 .3-.7 1 1 0 0 0-.3-.7l-.6-1.2.4-1 1.2-.4a1 1 0 0 0 .7-.3.9.9 0 0 0 .3-.7v-.8a.9.9 0 0 0-.3-.8zm-3.9 1.9a3.8 3.8 0 0 1-1.1 2.1l-.3.3a3.7 3.7 0 0 1-1.8.8H7.3l-1.4-.5-.2-.4-.6-.5-.4-.3a4.2 4.2 0 0 1-.6-1.5V7.3a3.7 3.7 0 0 1 .6-1.5l.4-.3.6-.5.3-.4 1.3-.5h1.4a3.5 3.5 0 0 1 1.8.9l.3.3a3.8 3.8 0 0 1 1.1 2.1v1.3z"></path>\n        </svg>\n    </chimee-setting-btn>\n    <chimee-setting-panel>\n        <span>\u8DF3\u8FC7\u7247\u5934\u7247\u5C3E\uFF1A</span><span class="yes">\u662F</span><span class="no">\u5426</span>\n    </chimee-setting-panel>\n  ',
    defaultEvent: {
        click: 'click'
    }
};
var getElementPath = function getElementPath(elem) {
    var path = [];
    if (elem === null) return path;
    path.push(elem);
    while (elem.parentNode !== null) {
        elem = elem.parentNode;
        path.push(elem);
    }
    ;
    return path;
};
var Setting = /** @class */function (_super) {
    __extends(Setting, _super);
    function Setting(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    Setting.prototype.init = function () {
        // 创建 html ／ 绑定事件
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.$dom.addClass('chimee-flex-component');
        this.$btn = this.$dom.find('chimee-setting-btn');
        this.$panel = this.$dom.find('chimee-setting-panel');
    };
    // 播放下一集信息
    Setting.prototype.setting = function () {};
    Setting.prototype.click = function (e) {
        var path = e.path || getElementPath(e.target);
        // 点击按钮
        if (path.indexOf(this.$btn[0]) !== -1) {
            if ((0, _mangoHelper.hasClassName)(this.$dom[0], 'on')) {
                (0, _mangoHelper.removeClassName)(this.$dom[0], 'on');
            } else {
                (0, _mangoHelper.addClassName)(this.$dom[0], 'on');
            }
            return;
        }
    };
    return Setting;
}(_base2.default);
exports.default = Setting;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _toxicDecorators = __webpack_require__(2);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Screen 配置
 */
var defaultOption = {
    tag: 'chimee-screen',
    html: "\n    <chimee-screen-full>\n      <svg id=\"pad-zoom-s\" viewBox=\"0 0 15.9 15.9\" width=\"100%\" height=\"100%\">\n        <path d=\"M14.9 15.9a1 1 0 0 1-.7-.3l-3.8-3.8v1.6a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1.6l3.8 3.8a1 1 0 0 1-.7 1.7zM6.5 7.5h-4a1 1 0 0 1 0-2h1.6L.3 1.7A1 1 0 0 1 1.7.3l3.8 3.8V2.5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z\"></path>\n      </svg>\n    </chimee-screen-full>\n    <chimee-screen-small>\n      <svg id=\"pad-zoom\" viewBox=\"0 0 15 15\" width=\"100%\" height=\"100%\">\n        <path class=\"cls-1\" d=\"M14 15h-4a1 1 0 0 1 0-2h1.6L8.3 9.7a1 1 0 0 1 1.4-1.5l3.3 3.4V10a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z\"></path><path d=\"M6 7a1 1 0 0 1-.7-.3L2 3.4V5a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H3.4l3.3 3.2A1 1 0 0 1 6 7z\"></path>\n      </svg>\n    </chimee-screen-small>\n  ",
    defaultEvent: {
        click: 'click'
    }
};
var Screen = /** @class */function (_super) {
    __extends(Screen, _super);
    function Screen(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.state = 'small';
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    Screen.prototype.init = function () {
        _super.prototype.create.call(this);
        this.$dom = (0, _mangoHelper.$)(this.$dom);
        this.changeState(this.state);
        // addClassName(this.$dom, 'flex-item');
        this.$dom.addClass('chimee-flex-component');
        this.$full = this.$dom.find('chimee-screen-full');
        this.$small = this.$dom.find('chimee-screen-small');
        // 判断是否是默认或者用户提供 icon
        if (this.option.icon && this.option.icon.full && this.option.icon.small) {
            // if((!this.option.icon.play && this.option.icon.puase) || (this.option.icon.play && !this.option.icon.puase)) {
            //   console.warn(`Please provide a play and pause icon！If you can't, we will use default icon!`);
            // }
            this.$full.html(this.option.icon.full);
            this.$small.html(this.option.icon.small);
        } else if (this.option.bitmap) {
            this.$full.html('');
            this.$small.html('');
        }
    };
    Screen.prototype.changeState = function (state) {
        var removeState = state === 'small' ? 'full' : 'small';
        (0, _mangoHelper.addClassName)(this.parent.$dom, state);
        (0, _mangoHelper.removeClassName)(this.parent.$dom, removeState);
    };
    Screen.prototype.click = function () {
        var full = false;
        if (this.state === 'small') {
            this.state = 'full';
            full = true;
        } else {
            this.state = 'small';
            full = false;
        }
        this.changeState(this.state);
        this.parent.$fullscreen(full, 'container');
        if (full) {
            this.watch_screen = this.parent.$watch('isFullscreen', this.screenChange);
        } else {
            this.watch_screen();
        }
    };
    Screen.prototype.screenChange = function () {
        if (!this.parent.fullscreenElement) return;
        this.state = 'small';
        this.changeState('small');
        this.parent.$fullscreen(false, 'container');
    };
    __decorate([_toxicDecorators.autobind], Screen.prototype, "screenChange", null);
    return Screen;
}(_base2.default);
exports.default = Screen;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * play 配置
 */
var defaultOption = {
    tag: 'chimee-clarity',
    width: '2em',
    html: '\n    <chimee-clarity-text>\u6807\u6E05</chimee-clarity-text>\n    <chimee-clarity-list>\n      <ul></ul>\n    </chimee-clarity-list>\n  ',
    defaultEvent: {
        click: 'click'
    },
    list: [],
    duration: 10,
    increment: 1
};
var Clarity = /** @class */function (_super) {
    __extends(Clarity, _super);
    function Clarity(parent, option) {
        var _this = _super.call(this, parent) || this;
        _this.option = (0, _mangoHelper.deepAssign)(defaultOption, (0, _mangoHelper.isObject)(option) ? option : {});
        _this.init();
        return _this;
    }
    Clarity.prototype.init = function () {
        _super.prototype.create.call(this);
        (0, _mangoHelper.addClassName)(this.$dom, 'chimee-flex-component');
        this.$text = (0, _mangoHelper.$)(this.$dom).find('chimee-clarity-text');
        this.$list = (0, _mangoHelper.$)(this.$dom).find('chimee-clarity-list');
        this.$listUl = this.$list.find('ul');
        this.initTextList();
    };
    Clarity.prototype.initTextList = function (clarityList) {
        var _this = this;
        var items = clarityList || this.option.list;
        this.option.list = items;
        // 设置默认状态
        if (items.length > 0) {
            this.$listUl.html('');
            this.$text.html(items[0].name);
        }
        // 设置选项
        items.forEach(function (item) {
            var li = (0, _mangoHelper.$)(document.createElement('li'));
            li.attr('data-url', item.src);
            li.text(item.name);
            if (item.src === _this.parent.$videoConfig.src) {
                _this.$text.text(item.name);
                li.addClass('active');
            }
            _this.$listUl.append(li);
        });
    };
    Clarity.prototype.click = function (e) {
        var _this = this;
        var elem = e.target;
        if (elem.tagName === 'CHIMEE-CLARITY-TEXT') {
            if ((0, _mangoHelper.hasClassName)(this.$dom, 'on')) {
                (0, _mangoHelper.removeClassName)(this.$dom, 'on');
            } else {
                (0, _mangoHelper.addClassName)(this.$dom, 'on');
            }
            return;
        }
        if (elem.tagName === 'LI') {
            var url = elem.getAttribute('data-url') || '';
            this.switchClarity(url).then(function () {
                _this.loadOption = undefined;
                Array.from(elem.parentElement.children).map(function (item) {
                    (0, _mangoHelper.removeClassName)(item, 'active');
                });
                (0, _mangoHelper.addClassName)(e.target, 'active');
                _this.$text.text(e.target.textContent);
            }).catch(function (e) {
                console.warn(e);
            });
            ;
        }
    };
    Clarity.prototype.switchClarity = function (url) {
        if (this.loadOption) {
            this.loadOption.abort = true;
        }
        this.loadOption = {
            duration: this.option.duration,
            repeatTimes: 3,
            immediate: true,
            increment: this.option.increment
        };
        return this.parent.$silentLoad(url, this.loadOption);
    };
    return Clarity;
}(_base2.default);
exports.default = Clarity;

/***/ })
/******/ ])["default"];
});