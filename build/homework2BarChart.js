/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 276);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__datum__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__on__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dispatch__ = __webpack_require__(112);






























var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["a" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["b" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_26__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_27__on__["c" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_28__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (selection);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_4__src_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_5__src_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_7__src_histogram__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_12__src_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_13__src_median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_15__src_min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_16__src_pairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_17__src_permute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_20__src_scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_24__src_transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_25__src_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_26__src_zip__["a"]; });





























/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_creator__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_0__src_creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_local__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_1__src_local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_matcher__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_2__src_matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mouse__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_namespace__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_4__src_namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespaces__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_point__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_6__src_point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_select__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_7__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_selectAll__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_8__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selection_index__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selection_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selector__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selectorAll__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_selection_style__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_12__src_selection_style__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_touch__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_13__src_touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_touches__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_14__src_touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_window__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_15__src_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_selection_on__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_16__src_selection_on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_16__src_selection_on__["b"]; });



















/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(17);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["b"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["c"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 23 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
/* 24 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bisectLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(27);



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pair;
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(13);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__(40);


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__(93);




/* harmony default export */ __webpack_exports__["a"] = ({
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTypes__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity__ = __webpack_require__(94);








var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_4__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(144);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(98);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(145);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(147);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(148);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(150);
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(211);
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(213);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(149);
/* unused harmony reexport interpolateRgb */
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(206);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(207);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(205);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(204);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(208);
/* unused harmony reexport quantize */



















/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hue;
/* harmony export (immutable) */ __webpack_exports__["c"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(146);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(229);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateNumber */]);

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(21);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["l"] = acos;
/* harmony export (immutable) */ __webpack_exports__["k"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries__["a"]; });








/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["c"] = copy;
/* harmony export (immutable) */ __webpack_exports__["a"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(153);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["b"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["b"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(257);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_isoParse__["a"]; });






/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(name) {
    _classCallCheck(this, _class);

    this.name = name;
    this.address = "/data/" + name + ".json";
  }

  _createClass(_class, [{
    key: "handle",
    value: function handle(f) {
      fetch(this.address).then(function (response) {
        return response.json();
      }).then(function (data) {
        return f(data);
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    this.continents = new Set();
    this.yearRange = {
      min: Number.MAX_SAFE_INTEGER,
      max: 0
    };
    this.data = this._reformatData(data.data);
    this.headers = this._extractHeaders(this.data[0]);
  }

  _createClass(_class, [{
    key: "_reformatData",
    value: function _reformatData(data) {
      var newData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var obj = _step.value;

          var name = obj.name;
          var continent = obj.continent;
          this.continents.add(continent);
          var yearObjects = obj.years;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = yearObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var yearObject = _step2.value;

              var year = parseInt(yearObject.year);
              if (this.yearRange.max < year) {
                this.yearRange.max = year;
              }
              if (this.yearRange.min > year) {
                this.yearRange.min = year;
              }
              var newObject = {
                name: name,
                continent: continent,
                gdp: yearObject.gdp,
                population: yearObject.population,
                life_expectancy: yearObject.life_expectancy,
                year: year
              };
              newData.push(newObject);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.continents = [].concat(_toConsumableArray(this.continents));
      return newData;
    }
  }, {
    key: "_extractHeaders",
    value: function _extractHeaders() {
      return Object.keys(this.data[0]);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".interactive_block {\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\n.checkboxes_block, .radio_buttons_block, .slider_block {\n    height: 30px;\n}\n\n.checkbox_block, .radio_button_block, .slider_block {\n    display: inline-block;\n    margin-right: 10px;\n    vertical-align: middle;\n}\n\n.interactive_block_label {\n    display: inline-block;\n    margin-right: 5px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.main_table td {\n    min-width: 100px;\n}\n\n.main_table, .main_table th, .main_table td {\n    border: 1px solid black;\n}\n\ntr.table_row:nth-of-type(odd) {\n    background: #eee;\n}\n\n.bar_chart rect {\n    fill: steelblue;\n}\n\n.bar_chart text {\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\npath.line {\n    stroke: steelblue;\n    stroke-width: 1;\n    fill: none;\n}\n\n.legend {\n    font-size: 16px;\n    font-weight: bold;\n    text-anchor: middle;\n}\n\n.axis path,\n.axis line {\n    fill: none;\n    stroke: grey;\n    stroke-width: 1;\n    shape-rendering: crispEdges;\n}", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(31);


/* harmony default export */ __webpack_exports__["a"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["b" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(33);









/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(11);




/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(11);





/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(35);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(12);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["a"] = (set);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["h"] = color;
/* harmony export (immutable) */ __webpack_exports__["b"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["a"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(88);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatPrefix; });
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(41);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(146);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(16);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(101);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(21);


function dispatchEvent(node, type, params) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(47);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(19);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](merges, this._parents);
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(19);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(51);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, parents);
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(59);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["a" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["a" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["b" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(137);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return utcParse; });
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(171);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(2);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(260);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./homework2.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./homework2.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });





















/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(98);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["b" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(43);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["c" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(start)).r, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["a" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(56);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(228);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_category10__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_11__src_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_category20b__ = __webpack_require__(218);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_12__src_category20b__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_category20c__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_category20c__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_category20__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_14__src_category20__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rainbow__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_viridis__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential__["a"]; });







































/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(14);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(152);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["i" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["p" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(137);






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(59);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(59);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["a"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(60);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(135);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return lineRadial(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* curveRadialLinear */]));
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(52);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */]);
  }
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(52);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(138);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["d" /* utcFormat */])(isoSpecifier);

/* harmony default export */ __webpack_exports__["a"] = (formatIso);


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(139);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["q" /* utcMonday */].ceil(week) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["q" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["r" /* timeMonday */].ceil(week) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["r" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* timeSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* timeThursday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeYear */])(d), d) + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["r" /* timeMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* utcDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["u" /* utcSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcThursday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d) + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["q" /* utcMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Selection = __webpack_require__(6);

var d3Select = _interopRequireWildcard(_d3Selection);

var _DataHandler = __webpack_require__(63);

var _DataHandler2 = _interopRequireDefault(_DataHandler);

var _DataProcessor = __webpack_require__(64);

var _DataProcessor2 = _interopRequireDefault(_DataProcessor);

var _ContentMaker = __webpack_require__(178);

var _ContentMaker2 = _interopRequireDefault(_ContentMaker);

__webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var contentContainer = d3Select.select('#content_container');

var dataHandler = new _DataHandler2.default('countries_1995_2012');
dataHandler.handle(function (data) {
  var dataProcessor = new _DataProcessor2.default(data);
  var contentMaker = new _ContentMaker2.default(contentContainer, dataProcessor);
  contentMaker.setUpdaters();
  contentMaker.updateContent();
});

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Array = __webpack_require__(1);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Ease = __webpack_require__(143);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Scale = __webpack_require__(151);

var d3Scale = _interopRequireWildcard(_d3Scale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MARGINS = { top: 10, bottom: 10, left: 200, right: 40 };
var WIDTH = 1200 - MARGINS.left - MARGINS.right;
var BAR_HEIGHT = 19;
var BAR_BLOCK_HEIGHT = BAR_HEIGHT + 1;
var BAR_BLOCK_HALF_HEIGHT = BAR_BLOCK_HEIGHT / 2;
var SCALE = d3Scale.scaleLinear().rangeRound([0, WIDTH]);

var BarChart = function () {
        function BarChart(mainElement, dataProcessor) {
                _classCallCheck(this, BarChart);

                mainElement.attr('width', WIDTH + MARGINS.left + MARGINS.right);
                this.mainElement = mainElement;
                this.dataProcessor = dataProcessor;
                this.mainGroup = this._addMainGroup();
        }

        _createClass(BarChart, [{
                key: '_addMainGroup',
                value: function _addMainGroup() {
                        return this.mainElement.append('g').attr('transform', 'translate(' + MARGINS.left + ',' + MARGINS.top + ')');
                }
        }, {
                key: 'updateChart',
                value: function updateChart(newData) {
                        var height = BAR_BLOCK_HEIGHT * newData.length;
                        SCALE.domain([0, d3Array.max(newData, function (datum) {
                                return datum.encoding;
                        })]);
                        this.mainElement.attr('height', height + MARGINS.top + MARGINS.bottom);
                        var barGroups = this.mainGroup.selectAll('g').data(newData, function (datum, index) {
                                return datum.name + datum.encoding + index;
                        });
                        var barGroup = barGroups.enter().append('g').attr('transform', function (datum, index) {
                                return 'translate(0,' + index * BAR_BLOCK_HEIGHT + ')';
                        });
                        barGroups.exit().selectAll('rect').transition().duration(300).ease(d3Ease.easeLinear).attr('width', 0);
                        barGroups.exit().selectAll('text').transition().duration(300).ease(d3Ease.easeLinear).attr('fill', 'none');
                        barGroups.exit().transition().duration(300).remove();
                        var label = barGroup.append('text').attr('x', 0).attr('y', BAR_BLOCK_HALF_HEIGHT).attr('dy', '.35em').attr('fill', 'none').text(function (datum) {
                                return datum.name;
                        }).transition().duration(300).ease(d3Ease.easeLinear).attr('fill', 'black');
                        var bar = barGroup.append('rect').attr('x', 20).attr('height', BAR_HEIGHT).transition().duration(300).ease(d3Ease.easeLinear).attr('width', function (datum) {
                                return SCALE(datum.encoding);
                        });
                }
        }], [{
                key: '__tableDataKeyFunction',
                value: function __tableDataKeyFunction(datum, index) {
                        return datum.name + datum.population + datum.gdp + index;
                }
        }]);

        return BarChart;
}();

exports.default = BarChart;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Array = __webpack_require__(1);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Collection = __webpack_require__(55);

var d3Collection = _interopRequireWildcard(_d3Collection);

var _d3Selection = __webpack_require__(6);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3TimeFormat = __webpack_require__(62);

var d3TimeFormat = _interopRequireWildcard(_d3TimeFormat);

var _InteractiveBlock = __webpack_require__(179);

var _InteractiveBlock2 = _interopRequireDefault(_InteractiveBlock);

var _BarChart = __webpack_require__(177);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _LineChart = __webpack_require__(180);

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INTERACTIVE_BLOCK_ID = 'interactive_block';
var BAR_CHART_BLOCK_ID = 'bar_chart_block';
var BAR_CHART_ID = 'bar_chart';
var LINE_CHART_BLOCK_ID = 'line_chart_block';
var LINE_CHART_ID = 'line_chart';
var DATE_PARSER = d3TimeFormat.timeParse('%Y');

function createInteractiveBlockElement(contentContainer) {
  return contentContainer.append('div').attr('id', INTERACTIVE_BLOCK_ID).attr('class', INTERACTIVE_BLOCK_ID);
}

function createChartElement(contentContainer, blockId, chartId) {
  return contentContainer.append('div').attr('id', blockId).attr('class', blockId).append('svg').attr('id', chartId).attr('class', chartId);
}

function defineMinMaxValueOfData(data, feature) {
  var min = data[0][feature];
  var max = data[0][feature];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var datum = _step.value;

      var currentValue = datum[feature];
      if (currentValue > max) {
        max = currentValue;
      } else if (currentValue < min) {
        min = currentValue;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    min: 0,
    max: max,
    delta: max - min
  };
}

var ContentMaker = function () {
  function ContentMaker(contentContainer, dataProcessor) {
    _classCallCheck(this, ContentMaker);

    this.data = dataProcessor.data;
    this.yearRange = dataProcessor.yearRange;
    var interactiveBlockElement = createInteractiveBlockElement(contentContainer);
    this.interactiveBlock = new _InteractiveBlock2.default(interactiveBlockElement, dataProcessor, this);
    var barChartElement = createChartElement(contentContainer, BAR_CHART_BLOCK_ID, BAR_CHART_ID);
    this.barChart = new _BarChart2.default(barChartElement, dataProcessor);
    this.lineChartElement = createChartElement(contentContainer, LINE_CHART_BLOCK_ID, LINE_CHART_ID);
    var lineChart = new _LineChart2.default(this.lineChartElement, dataProcessor);
    this.lineChart = lineChart;
    this.lineChartElement.on('click', function () {
      lineChart.isArea = !lineChart.isArea;
      d3Selection.select(this).selectAll('.line_chart_value').remove();
      lineChart.updateChart(lineChart.data);
    });
  }

  _createClass(ContentMaker, [{
    key: 'setUpdaters',
    value: function setUpdaters() {
      var _this = this;

      _InteractiveBlock2.default.selectSlider().on('input', function () {
        _this.updateContent();
      });
      _InteractiveBlock2.default.selectCheckboxes().on('change', function () {
        _this.updateContent();
      });
      _InteractiveBlock2.default.selectRadioButtons().on('change', function () {
        _this.updateContent();
      });
    }
  }, {
    key: 'updateContent',
    value: function updateContent() {
      var encoding = ContentMaker.__defineEncoding();
      var aggregation = ContentMaker.__defineAggregation();
      var choices = ContentMaker.__defineChoices();
      var newData = ContentMaker.__produceNewData(this.data, this.yearRange, encoding, aggregation, this.lineChartElement, choices.length);
      this.barChart.updateChart(newData[0]);
      if (aggregation === 'continent' && choices.length !== 1) {
        this.lineChart.updateChart(newData[1]);
      }
    }
  }], [{
    key: '__defineRadioButtonValue',
    value: function __defineRadioButtonValue(selector) {
      var value = '';
      var radioButtons = selector();
      radioButtons.each(function () {
        var radioButton = d3Selection.select(this);
        if (radioButton.property('checked')) {
          value = radioButton.property('value');
        }
      });
      return value;
    }
  }, {
    key: '__defineEncoding',
    value: function __defineEncoding() {
      return ContentMaker.__defineRadioButtonValue(_InteractiveBlock2.default.selectEncodingRadioButtons);
    }
  }, {
    key: '__defineAggregation',
    value: function __defineAggregation() {
      return ContentMaker.__defineRadioButtonValue(_InteractiveBlock2.default.selectAggregationRadioButtons);
    }
  }, {
    key: '__produceNewData',
    value: function __produceNewData(data, yearRange, encoding, aggregation, lineChartElement, numberOfChoices) {
      var barChartData = void 0;
      barChartData = ContentMaker.__encodeData(data, encoding);
      barChartData = ContentMaker.__applyCheckboxes(barChartData);
      barChartData = ContentMaker.__applyAggregationRadioButtons(barChartData, yearRange);
      barChartData = ContentMaker.__applySortingRadioButtons(barChartData);
      var lineChartData = ContentMaker.__collectLineChartData(barChartData);
      if (aggregation === 'continent') {
        barChartData = ContentMaker.__applySlider(barChartData);
      }
      if (aggregation === 'continent' && numberOfChoices !== 1) {
        lineChartElement.style('display', 'block');
      } else {
        lineChartData = [];
        lineChartElement.style('display', 'none');
      }
      return [barChartData, lineChartData];
    }
  }, {
    key: '__encodeData',
    value: function __encodeData(data, encoding) {
      var newData = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var datum = _step2.value;

          var newDatum = {};
          newDatum.name = datum.name;
          newDatum.continent = datum.continent;
          newDatum.encoding = datum[encoding];
          newDatum.population = datum.population;
          newDatum.gdp = datum.gdp;
          newDatum.year = datum.year;
          newData.push(newDatum);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return newData;
    }
  }, {
    key: '__collectLineChartData',
    value: function __collectLineChartData(barChartData) {
      var lineChartData = {};
      var yearSums = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = barChartData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var barChartDatum = _step3.value;

          var year = barChartDatum.year;
          var value = barChartDatum.encoding;
          if (yearSums[year] === undefined) {
            yearSums[year] = 0;
          }
          yearSums[year] += value;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = barChartData[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _barChartDatum = _step4.value;

          var year = _barChartDatum.year;
          var name = _barChartDatum.name;
          var value = _barChartDatum.encoding;
          if (lineChartData[name] === undefined) {
            lineChartData[name] = [];
          }
          lineChartData[name].push({
            x: DATE_PARSER(year),
            y: value / yearSums[year]
          });
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var buffer = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Object.keys(lineChartData)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var name = _step5.value;

          buffer.push({
            key: name.toUpperCase(),
            values: lineChartData[name].sort(function (a, b) {
              if (a.x < b.x) {
                return -1;
              } else if (a.x > b.x) {
                return 1;
              } else {
                return 0;
              }
            })
          });
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return buffer;
    }
  }, {
    key: '__applySlider',
    value: function __applySlider(data) {
      var slider = _InteractiveBlock2.default.selectSlider();
      var sliderYear = parseInt(slider.property('value'));
      return data.filter(function (datum) {
        return datum.year === sliderYear;
      });
    }
  }, {
    key: '__applyCheckboxes',
    value: function __applyCheckboxes(data) {
      var checkboxes = _InteractiveBlock2.default.selectCheckboxes();
      var choices = ContentMaker.__defineChoices();
      if (choices.length > 0) {
        return data.filter(function (datum) {
          return choices.includes(datum.continent);
        });
      } else {
        return data;
      }
    }
  }, {
    key: '__defineChoices',
    value: function __defineChoices() {
      var checkboxes = _InteractiveBlock2.default.selectCheckboxes();
      var choices = [];
      checkboxes.each(function () {
        var checkbox = d3Selection.select(this);
        if (checkbox.property('checked')) {
          choices.push(checkbox.property('value'));
        }
      });
      return choices;
    }
  }, {
    key: '__applyAggregationRadioButtons',
    value: function __applyAggregationRadioButtons(data, yearRange) {
      var value = '';
      var radioButtons = _InteractiveBlock2.default.selectAggregationRadioButtons();
      radioButtons.each(function () {
        var radioButton = d3Selection.select(this);
        if (radioButton.property('checked')) {
          value = radioButton.property('value');
          if (value === 'country') {
            value = 'name';
          }
        }
      });
      var yearRangeMin = yearRange.min;
      var yearRangeMax = yearRange.max;
      var aggregatedData = [];
      if (value === 'name') {
        d3Collection.nest().key(function (datum) {
          return datum[value];
        }).rollup(function (data) {
          var aggregatedDatum = {
            name: data[0].name,
            continent: data[0].continent,
            encoding: d3Array.mean(data, function (obj) {
              return obj.encoding;
            }),
            population: d3Array.mean(data, function (obj) {
              return obj.population;
            }),
            gdp: d3Array.mean(data, function (obj) {
              return obj.gdp;
            }),
            year: yearRangeMin + '-' + yearRangeMax
          };
          aggregatedData.push(aggregatedDatum);
        }).entries(data);
      } else if (value === 'continent') {
        d3Collection.nest().key(function (datum) {
          return datum.year;
        }).key(function (datum) {
          return datum[value];
        }).rollup(function (data) {
          var aggregatedDatum = {
            name: data[0][value],
            continent: data[0][value],
            encoding: d3Array.sum(data, function (obj) {
              return obj.encoding;
            }),
            population: d3Array.sum(data, function (obj) {
              return obj.population;
            }),
            gdp: d3Array.sum(data, function (obj) {
              return obj.gdp;
            }),
            year: data[0].year
          };
          aggregatedData.push(aggregatedDatum);
        }).entries(data);
      }
      return aggregatedData;
    }
  }, {
    key: '__applySortingRadioButtons',
    value: function __applySortingRadioButtons(data) {
      var value = '';
      var radioButtons = _InteractiveBlock2.default.selectSortingRadioButtons();
      radioButtons.each(function () {
        var radioButton = d3Selection.select(this);
        if (radioButton.property('checked')) {
          value = radioButton.property('value');
        }
      });
      data.sort(function (a, b) {
        return ContentMaker.__sortTabs(value, a, b);
      });
      return data;
    }
  }, {
    key: '__sortTabs',
    value: function __sortTabs(feature, tab1, tab2) {
      var comparisonResult = d3Array.ascending(tab1[feature], tab2[feature]);
      if (comparisonResult === 0) {
        switch (feature) {
          case 'encoding':
            comparisonResult = ContentMaker.__sortTabs('continent', tab1, tab2);
            break;
          case 'continent':
            comparisonResult = ContentMaker.__sortTabs('name', tab1, tab2);
            break;
          case 'name':
            comparisonResult = 0;
            break;
          default:
            comparisonResult = ContentMaker.__sortTabs('continent', tab1, tab2);
        }
      }
      return comparisonResult;
    }
  }]);

  return ContentMaker;
}();

exports.default = ContentMaker;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Selection = __webpack_require__(6);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _radioButtons = __webpack_require__(181);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INTERACTIVE_BLOCK_LABEL_ID = 'interactive_block_label';
var SLIDER_BLOCK_ID = 'slider_block';
var SLIDER_ID = 'year_slider';
var RADIO_BUTTONS_BLOCK_ID = 'radio_buttons_block';
var RADIO_BUTTON_BLOCK_ID = 'radio_button_block';
var RADIO_BUTTON_ID = 'radio_button';
var ENCODING_RADIO_BUTTONS_BLOCK_ID = 'encoding_' + RADIO_BUTTONS_BLOCK_ID;
var AGGREGATION_RADIO_BUTTONS_BLOCK_ID = 'aggregation_' + RADIO_BUTTONS_BLOCK_ID;
var SORTING_RADIO_BUTTONS_BLOCK_ID = 'sorting_' + RADIO_BUTTONS_BLOCK_ID;
var CHECKBOXES_BLOCK_ID = 'checkboxes_block';
var CHECKBOX_BLOCK_ID = 'checkbox_block';
var CHECKBOX_ID = 'continent_checkbox';

var InteractiveBlock = function () {
  _createClass(InteractiveBlock, null, [{
    key: 'selectCheckboxes',
    value: function selectCheckboxes() {
      return d3Selection.selectAll('.' + CHECKBOX_ID);
    }
  }, {
    key: 'selectSlider',
    value: function selectSlider() {
      return d3Selection.select('#' + SLIDER_ID);
    }
  }, {
    key: 'selectRadioButtons',
    value: function selectRadioButtons() {
      return d3Selection.selectAll('.' + RADIO_BUTTON_ID);
    }
  }, {
    key: 'selectEncodingRadioButtons',
    value: function selectEncodingRadioButtons() {
      return d3Selection.select('#' + ENCODING_RADIO_BUTTONS_BLOCK_ID).selectAll('.' + RADIO_BUTTON_ID);
    }
  }, {
    key: 'selectAggregationRadioButtons',
    value: function selectAggregationRadioButtons() {
      return d3Selection.select('#' + AGGREGATION_RADIO_BUTTONS_BLOCK_ID).selectAll('.' + RADIO_BUTTON_ID);
    }
  }, {
    key: 'selectSortingRadioButtons',
    value: function selectSortingRadioButtons() {
      return d3Selection.select('#' + SORTING_RADIO_BUTTONS_BLOCK_ID).selectAll('.' + RADIO_BUTTON_ID);
    }
  }]);

  function InteractiveBlock(mainElement, data, contentMaker) {
    _classCallCheck(this, InteractiveBlock);

    this.mainElement = mainElement;
    this.data = data;
    this.contentMaker = contentMaker;
    this._addElements();
  }

  _createClass(InteractiveBlock, [{
    key: '_addElements',
    value: function _addElements() {
      this._addSlider(this.data.yearRange);
      this._addEncodingRadioButtons();
      this._addCheckboxes(this.data.continents);
      this._addAggregationRadioButtons();
      this._addSortingRadioButtons();
    }
  }, {
    key: '_addSlider',
    value: function _addSlider(range) {
      var sliderBlock = this.mainElement.append('div').attr('id', SLIDER_BLOCK_ID).attr('class', SLIDER_BLOCK_ID);
      sliderBlock.append('p').attr('class', INTERACTIVE_BLOCK_LABEL_ID).text('Time update:');
      sliderBlock.append('span').attr('class', INTERACTIVE_BLOCK_LABEL_ID).text(range.min);
      var slider = sliderBlock.append('input').attr('type', 'range').attr('id', SLIDER_ID).attr('class', SLIDER_ID).property('min', range.min).property('max', range.max).property('step', 1).property('value', range.min);
      sliderBlock.append('label').attr('for', SLIDER_ID).text('');
      sliderBlock.append('span').attr('class', INTERACTIVE_BLOCK_LABEL_ID).text(range.max);
      return slider;
    }
  }, {
    key: '_addEncodingRadioButtons',
    value: function _addEncodingRadioButtons() {
      return this._addRadioButtonsByTheme(ENCODING_RADIO_BUTTONS_BLOCK_ID, 'encode');
    }
  }, {
    key: '_addAggregationRadioButtons',
    value: function _addAggregationRadioButtons() {
      return this._addRadioButtonsByTheme(AGGREGATION_RADIO_BUTTONS_BLOCK_ID, 'aggregate');
    }
  }, {
    key: '_addSortingRadioButtons',
    value: function _addSortingRadioButtons() {
      return this._addRadioButtonsByTheme(SORTING_RADIO_BUTTONS_BLOCK_ID, 'sort');
    }
  }, {
    key: '_addRadioButtonsByTheme',
    value: function _addRadioButtonsByTheme(blockId, theme) {
      var radioButtonContent = _radioButtons.RADIO_BUTTON_CONTENTS[theme];
      var radioButtonsBlock = this.mainElement.append('div').attr('id', blockId).attr('class', RADIO_BUTTONS_BLOCK_ID);
      radioButtonsBlock.append('p').attr('class', INTERACTIVE_BLOCK_LABEL_ID).text(radioButtonContent.label);
      var radioButtonCheck = true;
      var radioButtons = [];
      var radioButtonFields = radioButtonContent.fields;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = radioButtonFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var radioButtonField = _step.value;

          var radioButtonBlock = radioButtonsBlock.append('div').attr('class', RADIO_BUTTON_BLOCK_ID);
          var radioButtonId = 'radio_button_' + theme + '_' + radioButtonField.idSuffix;
          var radioButton = radioButtonBlock.append('input').attr('type', 'radio').attr('id', radioButtonId).attr('class', RADIO_BUTTON_ID + ' ' + theme + '_radio_button').property('checked', radioButtonCheck).property('value', radioButtonField.idSuffix).on('click', function () {
            InteractiveBlock.__updateRadioButtons(blockId, d3Selection.select(this));
          });
          radioButtons.push(radioButton);
          radioButtonsBlock.append('label').attr('for', radioButtonId).text(radioButtonField.text);
          radioButtonCheck = false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return radioButtons;
    }
  }, {
    key: '_addCheckboxes',
    value: function _addCheckboxes(labels) {
      var checkboxesBlock = this.mainElement.append('div').attr('id', CHECKBOXES_BLOCK_ID).attr('class', CHECKBOXES_BLOCK_ID);
      checkboxesBlock.append('p').attr('class', INTERACTIVE_BLOCK_LABEL_ID).text('Filter by:');
      var checkboxBlocks = checkboxesBlock.selectAll('#' + CHECKBOXES_BLOCK_ID + '.' + CHECKBOX_BLOCK_ID).data(labels);
      var checkboxBlock = checkboxBlocks.enter().append('div').attr('class', CHECKBOX_BLOCK_ID);
      var checkboxes = [];
      checkboxBlock.each(function () {
        var checkbox = d3Selection.select(this).append('input').attr('type', 'checkbox').attr('id', function (datum, i) {
          return 'checkbox_' + i;
        }).attr('class', CHECKBOX_ID).property('value', function (datum) {
          return datum;
        });
        checkboxes.push(checkbox);
        d3Selection.select(this).append('label').attr('for', function (datum, i) {
          return 'checkbox_' + i;
        }).text(function (datum) {
          return datum;
        });
      });
      return checkboxes;
    }
  }], [{
    key: '__updateRadioButtons',
    value: function __updateRadioButtons(blockId, clickedButton) {
      d3Selection.select('#' + blockId).selectAll('.' + RADIO_BUTTON_ID).property('checked', false);
      clickedButton.property('checked', true);
    }
  }]);

  return InteractiveBlock;
}();

exports.default = InteractiveBlock;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
          value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Array = __webpack_require__(1);

var d3Array = _interopRequireWildcard(_d3Array);

var _d3Axis = __webpack_require__(188);

var d3Axis = _interopRequireWildcard(_d3Axis);

var _d3Ease = __webpack_require__(143);

var d3Ease = _interopRequireWildcard(_d3Ease);

var _d3Format = __webpack_require__(37);

var d3Format = _interopRequireWildcard(_d3Format);

var _d3Scale = __webpack_require__(151);

var d3Scale = _interopRequireWildcard(_d3Scale);

var _d3Selection = __webpack_require__(6);

var d3Selection = _interopRequireWildcard(_d3Selection);

var _d3Shape = __webpack_require__(232);

var d3Shape = _interopRequireWildcard(_d3Shape);

var _d3TimeFormat = __webpack_require__(62);

var d3TimeFormat = _interopRequireWildcard(_d3TimeFormat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MARGINS = { top: 10, bottom: 70, left: 200, right: 40 };
var WIDTH = 1200 - MARGINS.left - MARGINS.right;
var HEIGHT = 600;
var DURATION = 1500;
var DELAY = 500;
var DATE_PARSER = d3TimeFormat.timeParse('%Y');
var FORMAT_PERCENT = d3Format.format('.0%');

var X_SCALE = d3Scale.scaleTime().rangeRound([0, WIDTH]);
var Y_SCALE = d3Scale.scaleLinear().rangeRound([HEIGHT, 0]);
var COLOR = d3Scale.scaleOrdinal(d3Scale.schemeCategory10);
var LINEARIZER = d3Shape.line().x(function (datum) {
          return X_SCALE(datum.x);
}).y(function (datum) {
          return Y_SCALE(datum.y);
});
var STACKIZER = d3Shape.stack();
var AREA = d3Shape.area().x(function (datum, index) {
          return X_SCALE(datum.data.date);
}).y0(function (datum) {
          return Y_SCALE(datum[0]);
}).y1(function (datum) {
          return Y_SCALE(datum[1]);
});

var LineChart = function () {
          function LineChart(mainElement, dataProcessor) {
                    _classCallCheck(this, LineChart);

                    mainElement.attr('width', WIDTH + MARGINS.left + MARGINS.right).attr('height', HEIGHT + MARGINS.top + MARGINS.bottom);
                    this.mainElement = mainElement;
                    this.dataProcessor = dataProcessor;
                    this.mainGroup = this._addMainGroup();
                    this.isArea = false;
                    this.data = [];
          }

          _createClass(LineChart, [{
                    key: '_addMainGroup',
                    value: function _addMainGroup() {
                              return this.mainElement.append('g').attr('transform', 'translate(' + MARGINS.left + ',' + MARGINS.top + ')');
                    }
          }, {
                    key: 'updateChart',
                    value: function updateChart(dataForLines) {
                              this.data = dataForLines;
                              var keys = [];
                              var _iteratorNormalCompletion = true;
                              var _didIteratorError = false;
                              var _iteratorError = undefined;

                              try {
                                        for (var _iterator = dataForLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                  var datum = _step.value;

                                                  keys.push(datum.key);
                                        }
                              } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                              } finally {
                                        try {
                                                  if (!_iteratorNormalCompletion && _iterator.return) {
                                                            _iterator.return();
                                                  }
                                        } finally {
                                                  if (_didIteratorError) {
                                                            throw _iteratorError;
                                                  }
                                        }
                              }

                              var dataForStack = [];
                              for (var i = 0; i < dataForLines[0].values.length; ++i) {
                                        var stackObj = {};
                                        var _iteratorNormalCompletion2 = true;
                                        var _didIteratorError2 = false;
                                        var _iteratorError2 = undefined;

                                        try {
                                                  for (var _iterator2 = dataForLines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                                            var _datum = _step2.value;

                                                            stackObj[_datum.key] = _datum.values[i].y;
                                                            stackObj.date = _datum.values[i].x;
                                                  }
                                        } catch (err) {
                                                  _didIteratorError2 = true;
                                                  _iteratorError2 = err;
                                        } finally {
                                                  try {
                                                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                                      _iterator2.return();
                                                            }
                                                  } finally {
                                                            if (_didIteratorError2) {
                                                                      throw _iteratorError2;
                                                            }
                                                  }
                                        }

                                        dataForStack.push(stackObj);
                              }
                              d3Selection.selectAll('.axis').remove();
                              X_SCALE.domain(d3Array.extent(dataForStack, function (datum) {
                                        return datum.date;
                              }));
                              Y_SCALE.domain([0, 1]);
                              COLOR.domain(keys);
                              STACKIZER.keys(keys);
                              var lineGroups = void 0;
                              var lineGroup = void 0;
                              if (this.isArea) {
                                        lineGroups = this.mainGroup.selectAll('.line_chart_value').data(STACKIZER(dataForStack), function (datum) {
                                                  return datum[0][1] + datum[0][3] + datum[0][5];
                                        });
                                        lineGroup = lineGroups.enter().append('g').attr('class', 'line_chart_value');
                                        lineGroup.append('path').attr('class', 'area').style('fill', 'rgba(0, 0, 0, 0)').style('stroke', 'rgba(0, 0, 0, 0)').transition().duration(500).ease(d3Ease.easeLinear).attr('d', AREA).style('stroke', function (datum) {
                                                  return COLOR(datum.key);
                                        }).transition().duration(500).ease(d3Ease.easeLinear).style('fill', function (datum) {
                                                  return COLOR(datum.key);
                                        });
                                        lineGroups.exit().selectAll('.area').transition().duration(300).ease(d3Ease.easeLinear).style('stroke', 'none').style('fill', 'none');
                                        lineGroups.exit().transition().duration(300).remove();
                              } else {
                                        lineGroups = this.mainGroup.selectAll('.line_chart_value').data(dataForLines, function (datum) {
                                                  return datum.key + datum.values[0].y;
                                        });
                                        lineGroup = lineGroups.enter().append('g').attr('class', 'line_chart_value');
                                        lineGroup.append('path').attr('class', 'line').style('stroke', function (datum) {
                                                  return datum.color = COLOR(datum.key);
                                        }).style('stroke-opacity', 0.0).transition().duration(500).ease(d3Ease.easeLinear).attr('d', function (datum) {
                                                  return LINEARIZER(datum.values);
                                        }).style('stroke-opacity', 1.0);
                                        lineGroups.exit().selectAll('.line').transition().duration(300).ease(d3Ease.easeLinear).style('stroke-opacity', 0.0);
                                        lineGroups.exit().transition().duration(300).remove();
                              }
                              var legendSpace = WIDTH / dataForLines.length;
                              lineGroup.append('text').attr('x', function (datum, index) {
                                        return legendSpace / 2 + index * legendSpace;
                              }).attr('y', HEIGHT + MARGINS.bottom / 2 + 5).attr('class', 'legend').style('fill', function (datum) {
                                        return datum.color = COLOR(datum.key);
                              }).text(function (datum) {
                                        return datum.key;
                              });
                              var bottomAxis = d3Axis.axisBottom(X_SCALE);
                              this.mainGroup.append('g').attr('class', 'axis').attr('transform', 'translate(0,' + HEIGHT + ')').call(bottomAxis);
                              var leftAxis = d3Axis.axisLeft(Y_SCALE).tickFormat(FORMAT_PERCENT);
                              this.mainGroup.append('g').attr('class', 'axis').call(leftAxis);
                    }
          }]);

          return LineChart;
}();

exports.default = LineChart;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadioButtonField = function RadioButtonField(text, idSuffix) {
  _classCallCheck(this, RadioButtonField);

  this.text = text;
  this.idSuffix = idSuffix;
};

var RadioButtonContent = function RadioButtonContent(label, fields) {
  _classCallCheck(this, RadioButtonContent);

  this.label = label + ':';
  this.fields = fields;
};

var RADIO_BUTTON_CONTENTS = {
  encode: new RadioButtonContent('Encode bars by', [new RadioButtonField('Population', 'population'), new RadioButtonField('GDP', 'gdp')]),
  aggregate: new RadioButtonContent('Aggregate by', [new RadioButtonField('Continent', 'continent'), new RadioButtonField('Country', 'country')]),
  sort: new RadioButtonContent('Sort by', [new RadioButtonField('Name', 'name'), new RadioButtonField('Population', 'population'), new RadioButtonField('GDP', 'gdp')])
};

exports.RADIO_BUTTON_CONTENTS = RADIO_BUTTON_CONTENTS;

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_axis__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["d"]; });



/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = axisTop;
/* harmony export (immutable) */ __webpack_exports__["b"] = axisRight;
/* harmony export (immutable) */ __webpack_exports__["c"] = axisBottom;
/* harmony export (immutable) */ __webpack_exports__["d"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(191);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(142);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["a"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(142);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(end)).h),
          s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(end)).h),
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function lab(start, end) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(start)).l, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(end)).l),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["b"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(212);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(210);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  value = value.matrix;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(154);



function band() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(42);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(300, 0.5, 0.0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(153);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(57);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["c" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* harmony export (immutable) */ __webpack_exports__["b"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(57);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, pow().exponent(exponent));
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(14);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(46);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(42);



var warm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(-100, 0.75, 0.35), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(80, 1.50, 0.8));

var cool = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(260, 0.75, 0.35), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(80, 1.50, 0.8));

var rainbow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["a"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
});


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(46);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(14);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(37);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
});


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(139);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__time__["b" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["e" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["h" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(45);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_link_index__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol__ = __webpack_require__(256);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_curve_step__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stack__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_offset_none__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_34__src_offset_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_descending__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_order_none__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_40__src_order_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__["a"]; });




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(52);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* halfPi */],
        da = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["c" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
      context.moveTo(r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a0), r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        context.moveTo(r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a1), r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        var p0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* asin */])(rp / r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(ap)),
            p1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* asin */])(rp / r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a01),
          y01 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a01),
          x10 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a10),
          y10 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        var x11 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a11),
            y11 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a11),
            x00 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a00),
            y00 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["b" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* acos */])((ax * bx + ay * by) / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(ax * ax + ay * ay) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y11, t1.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y11, t1.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* pi */] / 2;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a) * r, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__(161);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* default */])(_)) : c()._curve;
  };

  return a;
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(58);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(58);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(58);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["b" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["b" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(134);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["b" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(134);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["b" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(61);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = monotoneX;
/* harmony export (immutable) */ __webpack_exports__["b"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Natural(context);
});


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["b"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkHorizontal;
/* harmony export (immutable) */ __webpack_exports__["b"] = linkVertical;
/* harmony export (immutable) */ __webpack_exports__["c"] = linkRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__(162);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0),
      p1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y0),
      p3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(53);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(53);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(53);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(136);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
});


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(136);



/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(52);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */]),
      padAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(54);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return symbols; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(22);










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(138);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["e" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["b" /* isoSpecifier */]);

/* harmony default export */ __webpack_exports__["a"] = (parseIso);


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);


var millisecond = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);


var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var utcDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var utcHour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



var utcMinute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);


var utcMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



function utcWeekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);


var utcYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(8);



function weekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(2);


var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(174);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZjNTgyYjE2ODc0YjUyZGYwMWEiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvZXhwb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3BvaW50LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3F1YW50aWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sbGVjdGlvbi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXREZWNpbWFsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9jcmVhdG9yLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvZGV2aWF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL2V4dGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvcGFpcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRTcGVjaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VudGVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3BhcnNlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvb3JkZXIvbm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWNvbGxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2NvbnRpbnVvdXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvbGluZWFyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lLWZvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZXdvcmsyL0RhdGFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2xpYi9ob21ld29yazIvRGF0YVByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXdvcmsyLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL2hpc3RvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvbWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9tZWRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvcGVybXV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9zY2FuLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3NodWZmbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvc3VtLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9zY290dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy96aXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sbGVjdGlvbi9zcmMva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWNvbGxlY3Rpb24vc3JjL25lc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xvci9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xvci9zcmMvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXREZWZhdWx0LmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0TnVtZXJhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25GaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9iYXNpcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL2xvY2FsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0dW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zb3J0LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvdG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9saW5lLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL29yZGVyL2FzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXdvcmsyLmNzcz9kODc0Iiwid2VicGFjazovLy8uL34vZDMtY29sb3Ivc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1lYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9uaWNlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9vcmRpbmFsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbENsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbE9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvcmFkaWFsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL2xpbmVSYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvcG9pbnRSYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvc3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL3d5ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9pc29Gb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9ob21ld29yazJCYXJDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L0JhckNoYXJ0LmpzIiwid2VicGFjazovLy8uL2xpYi9ob21ld29yazIvYmFyY2hhcnQvQ29udGVudE1ha2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9ob21ld29yazIvYmFyY2hhcnQvSW50ZXJhY3RpdmVCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L0xpbmVDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L3JhZGlvQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWF4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1heGlzL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWF4aXMvc3JjL2F4aXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1heGlzL3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWNvbG9yL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xvci9zcmMvbGFiLmpzIiwid2VicGFjazovLy8uL34vZDMtZWFzZS9zcmMvYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL2JvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL2N1YmljLmpzIiwid2VicGFjazovLy8uL34vZDMtZWFzZS9zcmMvZWxhc3RpYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWVhc2Uvc3JjL3BvbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1lYXNlL3NyYy9xdWFkLmpzIiwid2VicGFjazovLy8uL34vZDMtZWFzZS9zcmMvc2luLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2N1YmVoZWxpeC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9oY2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvaHNsLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9xdWFudGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXBhdGgvc3JjL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvYmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9jYXRlZ29yeTEwLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2NhdGVnb3J5MjAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvY2F0ZWdvcnkyMGIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvY2F0ZWdvcnkyMGMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9wb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9zZXF1ZW50aWFsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL3RocmVzaG9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy90aWNrRm9ybWF0LmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL3V0Y1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvdmlyaWRpcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL2FyYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9hcmVhUmFkaWFsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbUNsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXJDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvbW9ub3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvY3VydmUvbmF0dXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9zdGVwLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL2Rlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9vZmZzZXQvZGl2ZXJnaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL29mZnNldC9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvb2Zmc2V0L3NpbGhvdWV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zaGFwZS9zcmMvb2Zmc2V0L3dpZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9vcmRlci9kZXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL29yZGVyL2luc2lkZU91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2hhcGUvc3JjL3BpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9zdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lLWZvcm1hdC9zcmMvaXNvUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9ob3VyLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvbWlsbGlzZWNvbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9taW51dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3NlY29uZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3V0Y0RheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3V0Y0hvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNNaW51dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNNb250aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3V0Y1dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNZZWFyLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3llYXIuanMiXSwibmFtZXMiOlsibmFtZSIsImFkZHJlc3MiLCJmIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnRpbmVudHMiLCJTZXQiLCJ5ZWFyUmFuZ2UiLCJtaW4iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWF4IiwiX3JlZm9ybWF0RGF0YSIsImhlYWRlcnMiLCJfZXh0cmFjdEhlYWRlcnMiLCJuZXdEYXRhIiwib2JqIiwiY29udGluZW50IiwiYWRkIiwieWVhck9iamVjdHMiLCJ5ZWFycyIsInllYXJPYmplY3QiLCJ5ZWFyIiwicGFyc2VJbnQiLCJuZXdPYmplY3QiLCJnZHAiLCJwb3B1bGF0aW9uIiwibGlmZV9leHBlY3RhbmN5IiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJkM1NlbGVjdCIsImNvbnRlbnRDb250YWluZXIiLCJzZWxlY3QiLCJkYXRhSGFuZGxlciIsImhhbmRsZSIsImRhdGFQcm9jZXNzb3IiLCJjb250ZW50TWFrZXIiLCJzZXRVcGRhdGVycyIsInVwZGF0ZUNvbnRlbnQiLCJkM0FycmF5IiwiZDNFYXNlIiwiZDNTY2FsZSIsIk1BUkdJTlMiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJXSURUSCIsIkJBUl9IRUlHSFQiLCJCQVJfQkxPQ0tfSEVJR0hUIiwiQkFSX0JMT0NLX0hBTEZfSEVJR0hUIiwiU0NBTEUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJCYXJDaGFydCIsIm1haW5FbGVtZW50IiwiYXR0ciIsIm1haW5Hcm91cCIsIl9hZGRNYWluR3JvdXAiLCJhcHBlbmQiLCJoZWlnaHQiLCJsZW5ndGgiLCJkb21haW4iLCJkYXR1bSIsImVuY29kaW5nIiwiYmFyR3JvdXBzIiwic2VsZWN0QWxsIiwiaW5kZXgiLCJiYXJHcm91cCIsImVudGVyIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJlYXNlTGluZWFyIiwicmVtb3ZlIiwibGFiZWwiLCJ0ZXh0IiwiYmFyIiwiZDNDb2xsZWN0aW9uIiwiZDNTZWxlY3Rpb24iLCJkM1RpbWVGb3JtYXQiLCJJTlRFUkFDVElWRV9CTE9DS19JRCIsIkJBUl9DSEFSVF9CTE9DS19JRCIsIkJBUl9DSEFSVF9JRCIsIkxJTkVfQ0hBUlRfQkxPQ0tfSUQiLCJMSU5FX0NIQVJUX0lEIiwiREFURV9QQVJTRVIiLCJ0aW1lUGFyc2UiLCJjcmVhdGVJbnRlcmFjdGl2ZUJsb2NrRWxlbWVudCIsImNyZWF0ZUNoYXJ0RWxlbWVudCIsImJsb2NrSWQiLCJjaGFydElkIiwiZGVmaW5lTWluTWF4VmFsdWVPZkRhdGEiLCJmZWF0dXJlIiwiY3VycmVudFZhbHVlIiwiZGVsdGEiLCJDb250ZW50TWFrZXIiLCJpbnRlcmFjdGl2ZUJsb2NrRWxlbWVudCIsImludGVyYWN0aXZlQmxvY2siLCJiYXJDaGFydEVsZW1lbnQiLCJiYXJDaGFydCIsImxpbmVDaGFydEVsZW1lbnQiLCJsaW5lQ2hhcnQiLCJvbiIsImlzQXJlYSIsInVwZGF0ZUNoYXJ0Iiwic2VsZWN0U2xpZGVyIiwic2VsZWN0Q2hlY2tib3hlcyIsInNlbGVjdFJhZGlvQnV0dG9ucyIsIl9fZGVmaW5lRW5jb2RpbmciLCJhZ2dyZWdhdGlvbiIsIl9fZGVmaW5lQWdncmVnYXRpb24iLCJjaG9pY2VzIiwiX19kZWZpbmVDaG9pY2VzIiwiX19wcm9kdWNlTmV3RGF0YSIsInNlbGVjdG9yIiwidmFsdWUiLCJyYWRpb0J1dHRvbnMiLCJlYWNoIiwicmFkaW9CdXR0b24iLCJwcm9wZXJ0eSIsIl9fZGVmaW5lUmFkaW9CdXR0b25WYWx1ZSIsInNlbGVjdEVuY29kaW5nUmFkaW9CdXR0b25zIiwic2VsZWN0QWdncmVnYXRpb25SYWRpb0J1dHRvbnMiLCJudW1iZXJPZkNob2ljZXMiLCJiYXJDaGFydERhdGEiLCJfX2VuY29kZURhdGEiLCJfX2FwcGx5Q2hlY2tib3hlcyIsIl9fYXBwbHlBZ2dyZWdhdGlvblJhZGlvQnV0dG9ucyIsIl9fYXBwbHlTb3J0aW5nUmFkaW9CdXR0b25zIiwibGluZUNoYXJ0RGF0YSIsIl9fY29sbGVjdExpbmVDaGFydERhdGEiLCJfX2FwcGx5U2xpZGVyIiwic3R5bGUiLCJuZXdEYXR1bSIsInllYXJTdW1zIiwiYmFyQ2hhcnREYXR1bSIsInVuZGVmaW5lZCIsIngiLCJ5IiwiYnVmZmVyIiwia2V5IiwidG9VcHBlckNhc2UiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJzbGlkZXIiLCJzbGlkZXJZZWFyIiwiZmlsdGVyIiwiY2hlY2tib3hlcyIsImluY2x1ZGVzIiwiY2hlY2tib3giLCJ5ZWFyUmFuZ2VNaW4iLCJ5ZWFyUmFuZ2VNYXgiLCJhZ2dyZWdhdGVkRGF0YSIsIm5lc3QiLCJyb2xsdXAiLCJhZ2dyZWdhdGVkRGF0dW0iLCJtZWFuIiwiZW50cmllcyIsInN1bSIsInNlbGVjdFNvcnRpbmdSYWRpb0J1dHRvbnMiLCJfX3NvcnRUYWJzIiwidGFiMSIsInRhYjIiLCJjb21wYXJpc29uUmVzdWx0IiwiYXNjZW5kaW5nIiwiSU5URVJBQ1RJVkVfQkxPQ0tfTEFCRUxfSUQiLCJTTElERVJfQkxPQ0tfSUQiLCJTTElERVJfSUQiLCJSQURJT19CVVRUT05TX0JMT0NLX0lEIiwiUkFESU9fQlVUVE9OX0JMT0NLX0lEIiwiUkFESU9fQlVUVE9OX0lEIiwiRU5DT0RJTkdfUkFESU9fQlVUVE9OU19CTE9DS19JRCIsIkFHR1JFR0FUSU9OX1JBRElPX0JVVFRPTlNfQkxPQ0tfSUQiLCJTT1JUSU5HX1JBRElPX0JVVFRPTlNfQkxPQ0tfSUQiLCJDSEVDS0JPWEVTX0JMT0NLX0lEIiwiQ0hFQ0tCT1hfQkxPQ0tfSUQiLCJDSEVDS0JPWF9JRCIsIkludGVyYWN0aXZlQmxvY2siLCJfYWRkRWxlbWVudHMiLCJfYWRkU2xpZGVyIiwiX2FkZEVuY29kaW5nUmFkaW9CdXR0b25zIiwiX2FkZENoZWNrYm94ZXMiLCJfYWRkQWdncmVnYXRpb25SYWRpb0J1dHRvbnMiLCJfYWRkU29ydGluZ1JhZGlvQnV0dG9ucyIsInJhbmdlIiwic2xpZGVyQmxvY2siLCJfYWRkUmFkaW9CdXR0b25zQnlUaGVtZSIsInRoZW1lIiwicmFkaW9CdXR0b25Db250ZW50IiwicmFkaW9CdXR0b25zQmxvY2siLCJyYWRpb0J1dHRvbkNoZWNrIiwicmFkaW9CdXR0b25GaWVsZHMiLCJmaWVsZHMiLCJyYWRpb0J1dHRvbkZpZWxkIiwicmFkaW9CdXR0b25CbG9jayIsInJhZGlvQnV0dG9uSWQiLCJpZFN1ZmZpeCIsIl9fdXBkYXRlUmFkaW9CdXR0b25zIiwibGFiZWxzIiwiY2hlY2tib3hlc0Jsb2NrIiwiY2hlY2tib3hCbG9ja3MiLCJjaGVja2JveEJsb2NrIiwiaSIsImNsaWNrZWRCdXR0b24iLCJkM0F4aXMiLCJkM0Zvcm1hdCIsImQzU2hhcGUiLCJIRUlHSFQiLCJEVVJBVElPTiIsIkRFTEFZIiwiRk9STUFUX1BFUkNFTlQiLCJmb3JtYXQiLCJYX1NDQUxFIiwic2NhbGVUaW1lIiwiWV9TQ0FMRSIsIkNPTE9SIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsIkxJTkVBUklaRVIiLCJsaW5lIiwiU1RBQ0tJWkVSIiwic3RhY2siLCJBUkVBIiwiYXJlYSIsImRhdGUiLCJ5MCIsInkxIiwiTGluZUNoYXJ0IiwiZGF0YUZvckxpbmVzIiwiZGF0YUZvclN0YWNrIiwic3RhY2tPYmoiLCJleHRlbnQiLCJsaW5lR3JvdXBzIiwibGluZUdyb3VwIiwiY29sb3IiLCJsZWdlbmRTcGFjZSIsImJvdHRvbUF4aXMiLCJheGlzQm90dG9tIiwiY2FsbCIsImxlZnRBeGlzIiwiYXhpc0xlZnQiLCJ0aWNrRm9ybWF0IiwiUmFkaW9CdXR0b25GaWVsZCIsIlJhZGlvQnV0dG9uQ29udGVudCIsIlJBRElPX0JVVFRPTl9DT05URU5UUyIsImVuY29kZSIsImFnZ3JlZ2F0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFF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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6VUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTs7QUFFQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBLDRCQUE0QjtBQUM1QixxQ0FBcUMsUUFBUTtBQUM3QztBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUHdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdERBOztBQUVBO0FBQ0E7QUFDQSxvSEFBMkMsMEJBQTBCLEVBQUU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQzs7QUFPQTs7QUFPQTs7QUFLQTs7QUFLQTs7QUFLQTs7QUFtQkE7O0FBS0E7O0FBS0E7O0FBS0E7O0FBS0E7O0FBS0E7O0FBbUJBOztBQUtBOztBQUtBOzs7Ozs7O0FDeEdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0M7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7O0FBT0E7Ozs7Ozs7OztBQ2pFRDs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNGZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJrQjs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ0RDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLDRCQUE0QjtBQUN4QztBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvbkJBOztJQUFZMkIsUTs7QUFDWjs7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNURzQjtBQUNRO0FBQ047O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUMzR0Q7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDQUFxQywyQkFBMkI7QUFDaEUsa0NBQWtDLHFCQUFxQjs7QUFFdkQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQywyQkFBMkI7QUFDakUsbUNBQW1DLHFCQUFxQjs7QUFFeEQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsMkJBQTJCO0FBQ25FLHFDQUFxQyxxQkFBcUI7O0FBRTFEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0ZBO0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakkwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQThDLHlCQUF5QixFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcEdBOztBQUVBOzs7Ozs7Ozs7QUNGQTs7QUFFQTs7Ozs7Ozs7O0FDRkE7O0FBRUE7Ozs7Ozs7OztBQ0ZBOztBQUVBOzs7Ozs7Ozs7O0FDRmtCO0FBQ2U7O0FBRWpDOzs7Ozs7Ozs7Ozs7QUNIWTtBQUNNO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QmM7QUFDQztBQUNmO0FBQ0E7QUFDb0M7O0FBRXBDO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEUscUJBQXFCLDRDQUE0QztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkIsRUFBRTtBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWSxPQUFPO0FBQzFCLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixrQ0FBa0MsRUFBRTtBQUM5RCx5QkFBeUIsaUNBQWlDO0FBQzFELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUNrQjtBQUNrQjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQ2lEO0FBQ25DOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRGU7QUFDRDtBQUNJOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0NrQjtBQUNlOztBQUVqQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEJrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JlO0FBQ0Q7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaENpQjtBQUM4RTs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUJpQjtBQUNDO0FBQ3dFOztBQUUxRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUI7QUFDQztBQUNBO0FBQ0Q7QUFDdUQ7QUFDQTtBQUMvQztBQUNrQjs7QUFFZDtBQUNIO0FBQ0Q7QUFDRTtBQUNEO0FBQ0Y7QUFDSTtBQUNMOztBQUVPO0FBQ0Y7QUFDSjtBQUNDO0FBQ1E7QUFDRjtBQUNKO0FBQ1E7QUFDRjtBQUNKO0FBQ0U7QUFDTjtBQUNrQztBQUNqQztBQUN5RDs7QUFFaEU7QUFDWTtBQUNHO0FBQ0w7QUFDTTtBQUNKO0FBQ0U7QUFDQztBQUNEO0FBQ0w7QUFDRzs7Ozs7Ozs7Ozs7QUM1Q3hCO0FBQ2I7QUFDbUY7O0FBRW5GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbFF1QztBQUN2QztBQUNtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFHQUF5QixFQUFFO0FBQzVELCtCQUErQixxR0FBeUIsRUFBRTtBQUMxRCxrQ0FBa0MscUdBQXlCLEVBQUU7QUFDN0Qsa0NBQWtDLHFHQUF5QixFQUFFOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCQTtBQUNjOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQsOEJBQThCLDRCQUE0QjtBQUMxRCw4QkFBOEIsNEJBQTRCLDRGQUE0RjtBQUN0Six3R0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25EYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCLG9GQUFvRiwwRUFBMEU7QUFDNUwsOEJBQThCO0FBQzlCLHdHQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDdkRzQjtBQUN2QjtBQUNjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELDhCQUE4QixrREFBa0Q7QUFDaEYsOEJBQThCLDRCQUE0QjtBQUMxRCw2R0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDekVvQjtBQUNQOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdDcUI7QUFDSjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1pBO0FBQ29DOztBQUVwQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ3FDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCQTtBQUN1Qjs7QUFFdkI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUN1Qjs7QUFFdkI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNvQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNxQjs7QUFFckI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUN1Qjs7QUFFdkI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSIsImZpbGUiOiJob21ld29yazJCYXJDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVmYzU4MmIxNjg3NGI1MmRmMDFhIiwiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGxcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29yZGVyIGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NvcnQgZnJvbSBcIi4vc29ydFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jYWxsIGZyb20gXCIuL2NhbGxcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZXMgZnJvbSBcIi4vbm9kZXNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NpemUgZnJvbSBcIi4vc2l6ZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbXB0eSBmcm9tIFwiLi9lbXB0eVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lYWNoIGZyb20gXCIuL2VhY2hcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXR0ciBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3Byb3BlcnR5IGZyb20gXCIuL3Byb3BlcnR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NsYXNzZWQgZnJvbSBcIi4vY2xhc3NlZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl90ZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBzZWxlY3Rpb25faHRtbCBmcm9tIFwiLi9odG1sXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JhaXNlIGZyb20gXCIuL3JhaXNlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2xvd2VyIGZyb20gXCIuL2xvd2VyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2FwcGVuZCBmcm9tIFwiLi9hcHBlbmRcIjtcbmltcG9ydCBzZWxlY3Rpb25faW5zZXJ0IGZyb20gXCIuL2luc2VydFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdHVtIGZyb20gXCIuL2RhdHVtXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29uIGZyb20gXCIuL29uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2Rpc3BhdGNoIGZyb20gXCIuL2Rpc3BhdGNoXCI7XG5cbmV4cG9ydCB2YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGlvbihncm91cHMsIHBhcmVudHMpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF1dLCByb290KTtcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGJpc2VjdCwgYmlzZWN0UmlnaHQsIGJpc2VjdExlZnR9IGZyb20gXCIuL3NyYy9iaXNlY3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhc2NlbmRpbmd9IGZyb20gXCIuL3NyYy9hc2NlbmRpbmdcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBiaXNlY3Rvcn0gZnJvbSBcIi4vc3JjL2Jpc2VjdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3Jvc3N9IGZyb20gXCIuL3NyYy9jcm9zc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRlc2NlbmRpbmd9IGZyb20gXCIuL3NyYy9kZXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZGV2aWF0aW9ufSBmcm9tIFwiLi9zcmMvZGV2aWF0aW9uXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZXh0ZW50fSBmcm9tIFwiLi9zcmMvZXh0ZW50XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaGlzdG9ncmFtfSBmcm9tIFwiLi9zcmMvaGlzdG9ncmFtXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkRnJlZWRtYW5EaWFjb25pc30gZnJvbSBcIi4vc3JjL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkU2NvdHR9IGZyb20gXCIuL3NyYy90aHJlc2hvbGQvc2NvdHRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aHJlc2hvbGRTdHVyZ2VzfSBmcm9tIFwiLi9zcmMvdGhyZXNob2xkL3N0dXJnZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXh9IGZyb20gXCIuL3NyYy9tYXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZWFufSBmcm9tIFwiLi9zcmMvbWVhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lZGlhbn0gZnJvbSBcIi4vc3JjL21lZGlhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lcmdlfSBmcm9tIFwiLi9zcmMvbWVyZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtaW59IGZyb20gXCIuL3NyYy9taW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwYWlyc30gZnJvbSBcIi4vc3JjL3BhaXJzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGVybXV0ZX0gZnJvbSBcIi4vc3JjL3Blcm11dGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGlsZX0gZnJvbSBcIi4vc3JjL3F1YW50aWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcmFuZ2V9IGZyb20gXCIuL3NyYy9yYW5nZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNjYW59IGZyb20gXCIuL3NyYy9zY2FuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2h1ZmZsZX0gZnJvbSBcIi4vc3JjL3NodWZmbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdW19IGZyb20gXCIuL3NyYy9zdW1cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aWNrcywgdGlja0luY3JlbWVudCwgdGlja1N0ZXB9IGZyb20gXCIuL3NyYy90aWNrc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zcG9zZX0gZnJvbSBcIi4vc3JjL3RyYW5zcG9zZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHZhcmlhbmNlfSBmcm9tIFwiLi9zcmMvdmFyaWFuY2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB6aXB9IGZyb20gXCIuL3NyYy96aXBcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciB0MCA9IG5ldyBEYXRlLFxuICAgIHQxID0gbmV3IERhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0ludGVydmFsKGZsb29yaSwgb2Zmc2V0aSwgY291bnQsIGZpZWxkKSB7XG5cbiAgZnVuY3Rpb24gaW50ZXJ2YWwoZGF0ZSkge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKCtkYXRlKSksIGRhdGU7XG4gIH1cblxuICBpbnRlcnZhbC5mbG9vciA9IGludGVydmFsO1xuXG4gIGludGVydmFsLmNlaWwgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIGZsb29yaShkYXRlID0gbmV3IERhdGUoZGF0ZSAtIDEpKSwgb2Zmc2V0aShkYXRlLCAxKSwgZmxvb3JpKGRhdGUpLCBkYXRlO1xuICB9O1xuXG4gIGludGVydmFsLnJvdW5kID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHZhciBkMCA9IGludGVydmFsKGRhdGUpLFxuICAgICAgICBkMSA9IGludGVydmFsLmNlaWwoZGF0ZSk7XG4gICAgcmV0dXJuIGRhdGUgLSBkMCA8IGQxIC0gZGF0ZSA/IGQwIDogZDE7XG4gIH07XG5cbiAgaW50ZXJ2YWwub2Zmc2V0ID0gZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIHJldHVybiBvZmZzZXRpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSksIHN0ZXAgPT0gbnVsbCA/IDEgOiBNYXRoLmZsb29yKHN0ZXApKSwgZGF0ZTtcbiAgfTtcblxuICBpbnRlcnZhbC5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgdmFyIHJhbmdlID0gW10sIHByZXZpb3VzO1xuICAgIHN0YXJ0ID0gaW50ZXJ2YWwuY2VpbChzdGFydCk7XG4gICAgc3RlcCA9IHN0ZXAgPT0gbnVsbCA/IDEgOiBNYXRoLmZsb29yKHN0ZXApO1xuICAgIGlmICghKHN0YXJ0IDwgc3RvcCkgfHwgIShzdGVwID4gMCkpIHJldHVybiByYW5nZTsgLy8gYWxzbyBoYW5kbGVzIEludmFsaWQgRGF0ZVxuICAgIGRvIHJhbmdlLnB1c2gocHJldmlvdXMgPSBuZXcgRGF0ZSgrc3RhcnQpKSwgb2Zmc2V0aShzdGFydCwgc3RlcCksIGZsb29yaShzdGFydCk7XG4gICAgd2hpbGUgKHByZXZpb3VzIDwgc3RhcnQgJiYgc3RhcnQgPCBzdG9wKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgaW50ZXJ2YWwuZmlsdGVyID0gZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgICBpZiAoZGF0ZSA+PSBkYXRlKSB3aGlsZSAoZmxvb3JpKGRhdGUpLCAhdGVzdChkYXRlKSkgZGF0ZS5zZXRUaW1lKGRhdGUgLSAxKTtcbiAgICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgICBpZiAoZGF0ZSA+PSBkYXRlKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMCkgd2hpbGUgKCsrc3RlcCA8PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKG9mZnNldGkoZGF0ZSwgLTEpLCAhdGVzdChkYXRlKSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgICB9IGVsc2Ugd2hpbGUgKC0tc3RlcCA+PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKG9mZnNldGkoZGF0ZSwgKzEpLCAhdGVzdChkYXRlKSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGNvdW50KSB7XG4gICAgaW50ZXJ2YWwuY291bnQgPSBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICB0MC5zZXRUaW1lKCtzdGFydCksIHQxLnNldFRpbWUoK2VuZCk7XG4gICAgICBmbG9vcmkodDApLCBmbG9vcmkodDEpO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY291bnQodDAsIHQxKSk7XG4gICAgfTtcblxuICAgIGludGVydmFsLmV2ZXJ5ID0gZnVuY3Rpb24oc3RlcCkge1xuICAgICAgc3RlcCA9IE1hdGguZmxvb3Ioc3RlcCk7XG4gICAgICByZXR1cm4gIWlzRmluaXRlKHN0ZXApIHx8ICEoc3RlcCA+IDApID8gbnVsbFxuICAgICAgICAgIDogIShzdGVwID4gMSkgPyBpbnRlcnZhbFxuICAgICAgICAgIDogaW50ZXJ2YWwuZmlsdGVyKGZpZWxkXG4gICAgICAgICAgICAgID8gZnVuY3Rpb24oZCkgeyByZXR1cm4gZmllbGQoZCkgJSBzdGVwID09PSAwOyB9XG4gICAgICAgICAgICAgIDogZnVuY3Rpb24oZCkgeyByZXR1cm4gaW50ZXJ2YWwuY291bnQoMCwgZCkgJSBzdGVwID09PSAwOyB9KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGludGVydmFsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL2ludGVydmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9hc2NlbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4ID09PSBudWxsID8gTmFOIDogK3g7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWwoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0b3J9IGZyb20gXCIuL3NyYy9jcmVhdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL3NyYy9sb2NhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL3NyYy9tYXRjaGVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbW91c2V9IGZyb20gXCIuL3NyYy9tb3VzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vc3JjL25hbWVzcGFjZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL3NyYy9uYW1lc3BhY2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY2xpZW50UG9pbnR9IGZyb20gXCIuL3NyYy9wb2ludFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdH0gZnJvbSBcIi4vc3JjL3NlbGVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdEFsbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdGlvbn0gZnJvbSBcIi4vc3JjL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yfSBmcm9tIFwiLi9zcmMvc2VsZWN0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdG9yQWxsXCI7XG5leHBvcnQge3N0eWxlVmFsdWUgYXMgc3R5bGV9IGZyb20gXCIuL3NyYy9zZWxlY3Rpb24vc3R5bGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaH0gZnJvbSBcIi4vc3JjL3RvdWNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2hlc30gZnJvbSBcIi4vc3JjL3RvdWNoZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB3aW5kb3d9IGZyb20gXCIuL3NyYy93aW5kb3dcIjtcbmV4cG9ydCB7ZXZlbnQsIGN1c3RvbUV2ZW50fSBmcm9tIFwiLi9zcmMvc2VsZWN0aW9uL29uXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgZXZlbnQpIHtcbiAgdmFyIHN2ZyA9IG5vZGUub3duZXJTVkdFbGVtZW50IHx8IG5vZGU7XG5cbiAgaWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuICAgIHBvaW50LnggPSBldmVudC5jbGllbnRYLCBwb2ludC55ID0gZXZlbnQuY2xpZW50WTtcbiAgICBwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShub2RlLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcbiAgfVxuXG4gIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIFtldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gbm9kZS5jbGllbnRMZWZ0LCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSBub2RlLmNsaWVudFRvcF07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9wb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCB2YXIgZHVyYXRpb25TZWNvbmQgPSAxZTM7XG5leHBvcnQgdmFyIGR1cmF0aW9uTWludXRlID0gNmU0O1xuZXhwb3J0IHZhciBkdXJhdGlvbkhvdXIgPSAzNmU1O1xuZXhwb3J0IHZhciBkdXJhdGlvbkRheSA9IDg2NGU1O1xuZXhwb3J0IHZhciBkdXJhdGlvbldlZWsgPSA2MDQ4ZTU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvZHVyYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNvbG9yLCByZ2IsIGhzbH0gZnJvbSBcIi4vc3JjL2NvbG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGFiLCBoY2x9IGZyb20gXCIuL3NyYy9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdWJlaGVsaXh9IGZyb20gXCIuL3NyYy9jdWJlaGVsaXhcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgcCwgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PSBudWxsKSB2YWx1ZW9mID0gbnVtYmVyO1xuICBpZiAoIShuID0gdmFsdWVzLmxlbmd0aCkpIHJldHVybjtcbiAgaWYgKChwID0gK3ApIDw9IDAgfHwgbiA8IDIpIHJldHVybiArdmFsdWVvZih2YWx1ZXNbMF0sIDAsIHZhbHVlcyk7XG4gIGlmIChwID49IDEpIHJldHVybiArdmFsdWVvZih2YWx1ZXNbbiAtIDFdLCBuIC0gMSwgdmFsdWVzKTtcbiAgdmFyIG4sXG4gICAgICBpID0gKG4gLSAxKSAqIHAsXG4gICAgICBpMCA9IE1hdGguZmxvb3IoaSksXG4gICAgICB2YWx1ZTAgPSArdmFsdWVvZih2YWx1ZXNbaTBdLCBpMCwgdmFsdWVzKSxcbiAgICAgIHZhbHVlMSA9ICt2YWx1ZW9mKHZhbHVlc1tpMCArIDFdLCBpMCArIDEsIHZhbHVlcyk7XG4gIHJldHVybiB2YWx1ZTAgKyAodmFsdWUxIC0gdmFsdWUwKSAqIChpIC0gaTApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9xdWFudGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgdmFyIHByZWZpeCA9IFwiJFwiO1xuXG5mdW5jdGlvbiBNYXAoKSB7fVxuXG5NYXAucHJvdG90eXBlID0gbWFwLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IE1hcCxcbiAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gKHByZWZpeCArIGtleSkgaW4gdGhpcztcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpc1twcmVmaXggKyBrZXldO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzW3ByZWZpeCArIGtleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgcHJvcGVydHkgPSBwcmVmaXggKyBrZXk7XG4gICAgcmV0dXJuIHByb3BlcnR5IGluIHRoaXMgJiYgZGVsZXRlIHRoaXNbcHJvcGVydHldO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIGRlbGV0ZSB0aGlzW3Byb3BlcnR5XTtcbiAgfSxcbiAga2V5czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkga2V5cy5wdXNoKHByb3BlcnR5LnNsaWNlKDEpKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfSxcbiAgdmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIHZhbHVlcy5wdXNoKHRoaXNbcHJvcGVydHldKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9LFxuICBlbnRyaWVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSBlbnRyaWVzLnB1c2goe2tleTogcHJvcGVydHkuc2xpY2UoMSksIHZhbHVlOiB0aGlzW3Byb3BlcnR5XX0pO1xuICAgIHJldHVybiBlbnRyaWVzO1xuICB9LFxuICBzaXplOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2l6ZSA9IDA7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpICsrc2l6ZTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfSxcbiAgZW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGVhY2g6IGZ1bmN0aW9uKGYpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkgZih0aGlzW3Byb3BlcnR5XSwgcHJvcGVydHkuc2xpY2UoMSksIHRoaXMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXAob2JqZWN0LCBmKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwO1xuXG4gIC8vIENvcHkgY29uc3RydWN0b3IuXG4gIGlmIChvYmplY3QgaW5zdGFuY2VvZiBNYXApIG9iamVjdC5lYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsgbWFwLnNldChrZXksIHZhbHVlKTsgfSk7XG5cbiAgLy8gSW5kZXggYXJyYXkgYnkgbnVtZXJpYyBpbmRleCBvciBzcGVjaWZpZWQga2V5IGZ1bmN0aW9uLlxuICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICB2YXIgaSA9IC0xLFxuICAgICAgICBuID0gb2JqZWN0Lmxlbmd0aCxcbiAgICAgICAgbztcblxuICAgIGlmIChmID09IG51bGwpIHdoaWxlICgrK2kgPCBuKSBtYXAuc2V0KGksIG9iamVjdFtpXSk7XG4gICAgZWxzZSB3aGlsZSAoKytpIDwgbikgbWFwLnNldChmKG8gPSBvYmplY3RbaV0sIGksIG9iamVjdCksIG8pO1xuICB9XG5cbiAgLy8gQ29udmVydCBvYmplY3QgdG8gbWFwLlxuICBlbHNlIGlmIChvYmplY3QpIGZvciAodmFyIGtleSBpbiBvYmplY3QpIG1hcC5zZXQoa2V5LCBvYmplY3Rba2V5XSk7XG5cbiAgcmV0dXJuIG1hcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbGxlY3Rpb24vc3JjL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsKDEuMjMpIHJldHVybnMgW1wiMTIzXCIsIDBdLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFycmF5ID0gQXJyYXkucHJvdG90eXBlO1xuXG5leHBvcnQgdmFyIG1hcCA9IGFycmF5Lm1hcDtcbmV4cG9ydCB2YXIgc2xpY2UgPSBhcnJheS5zbGljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9jcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBmaWx0ZXJFdmVudHMgPSB7fTtcblxuZXhwb3J0IHZhciBldmVudCA9IG51bGw7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICghKFwib25tb3VzZWVudGVyXCIgaW4gZWxlbWVudCkpIHtcbiAgICBmaWx0ZXJFdmVudHMgPSB7bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIiwgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwifTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCkge1xuICBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhKHJlbGF0ZWQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGhpcykgJiA4KSkpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50MSkge1xuICAgIHZhciBldmVudDAgPSBldmVudDsgLy8gRXZlbnRzIGNhbiBiZSByZWVudHJhbnQgKGUuZy4sIGZvY3VzKS5cbiAgICBldmVudCA9IGV2ZW50MTtcbiAgICB0cnkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9fZGF0YV9fLCBpbmRleCwgZ3JvdXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBldmVudCA9IGV2ZW50MDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHdyYXAgPSBmaWx0ZXJFdmVudHMuaGFzT3duUHJvcGVydHkodHlwZW5hbWUudHlwZSkgPyBmaWx0ZXJDb250ZXh0TGlzdGVuZXIgOiBjb250ZXh0TGlzdGVuZXI7XG4gIHJldHVybiBmdW5jdGlvbihkLCBpLCBncm91cCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSB3cmFwKHZhbHVlLCBpLCBncm91cCk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8uY2FwdHVyZSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5jYXB0dXJlID0gY2FwdHVyZSk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIGNhcHR1cmU6IGNhcHR1cmV9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgY2FwdHVyZSkge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgaWYgKGNhcHR1cmUgPT0gbnVsbCkgY2FwdHVyZSA9IGZhbHNlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgY2FwdHVyZSkpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUV2ZW50KGV2ZW50MSwgbGlzdGVuZXIsIHRoYXQsIGFyZ3MpIHtcbiAgdmFyIGV2ZW50MCA9IGV2ZW50O1xuICBldmVudDEuc291cmNlRXZlbnQgPSBldmVudDtcbiAgZXZlbnQgPSBldmVudDE7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9IGZpbmFsbHkge1xuICAgIGV2ZW50ID0gZXZlbnQwO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtldmVudH0gZnJvbSBcIi4vc2VsZWN0aW9uL29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY3VycmVudCA9IGV2ZW50LCBzb3VyY2U7XG4gIHdoaWxlIChzb3VyY2UgPSBjdXJyZW50LnNvdXJjZUV2ZW50KSBjdXJyZW50ID0gc291cmNlO1xuICByZXR1cm4gY3VycmVudDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSAvLyBub2RlIGlzIGEgTm9kZVxuICAgICAgfHwgKG5vZGUuZG9jdW1lbnQgJiYgbm9kZSkgLy8gbm9kZSBpcyBhIFdpbmRvd1xuICAgICAgfHwgbm9kZS5kZWZhdWx0VmlldzsgLy8gbm9kZSBpcyBhIERvY3VtZW50XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29uc3RhbnQoKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2NvbnN0YW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBhcnJheSA9IEFycmF5LnByb3RvdHlwZTtcblxuZXhwb3J0IHZhciBzbGljZSA9IGFycmF5LnNsaWNlO1xuZXhwb3J0IHZhciBtYXAgPSBhcnJheS5tYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5pbXBvcnQgYmlzZWN0b3IgZnJvbSBcIi4vYmlzZWN0b3JcIjtcblxudmFyIGFzY2VuZGluZ0Jpc2VjdCA9IGJpc2VjdG9yKGFzY2VuZGluZyk7XG5leHBvcnQgdmFyIGJpc2VjdFJpZ2h0ID0gYXNjZW5kaW5nQmlzZWN0LnJpZ2h0O1xuZXhwb3J0IHZhciBiaXNlY3RMZWZ0ID0gYXNjZW5kaW5nQmlzZWN0LmxlZnQ7XG5leHBvcnQgZGVmYXVsdCBiaXNlY3RSaWdodDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvYmlzZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKGNvbXBhcmUubGVuZ3RoID09PSAxKSBjb21wYXJlID0gYXNjZW5kaW5nQ29tcGFyYXRvcihjb21wYXJlKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBmdW5jdGlvbihhLCB4LCBsbywgaGkpIHtcbiAgICAgIGlmIChsbyA9PSBudWxsKSBsbyA9IDA7XG4gICAgICBpZiAoaGkgPT0gbnVsbCkgaGkgPSBhLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZShhW21pZF0sIHgpIDwgMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvO1xuICAgIH0sXG4gICAgcmlnaHQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgaWYgKGxvID09IG51bGwpIGxvID0gMDtcbiAgICAgIGlmIChoaSA9PSBudWxsKSBoaSA9IGEubGVuZ3RoO1xuICAgICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPiAwKSBoaSA9IG1pZDtcbiAgICAgICAgZWxzZSBsbyA9IG1pZCArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG87XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdDb21wYXJhdG9yKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGQsIHgpIHtcbiAgICByZXR1cm4gYXNjZW5kaW5nKGYoZCksIHgpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgdmFyaWFuY2UgZnJvbSBcIi4vdmFyaWFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgdmFyIHYgPSB2YXJpYW5jZShhcnJheSwgZik7XG4gIHJldHVybiB2ID8gTWF0aC5zcXJ0KHYpIDogdjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvZGV2aWF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIG1pbixcbiAgICAgIG1heDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gRmluZCB0aGUgZmlyc3QgY29tcGFyYWJsZSB2YWx1ZS5cbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZXNbaV0pICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIENvbXBhcmUgdGhlIHJlbWFpbmluZyB2YWx1ZXMuXG4gICAgICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChtYXggPCB2YWx1ZSkgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gRmluZCB0aGUgZmlyc3QgY29tcGFyYWJsZSB2YWx1ZS5cbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9leHRlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWluO1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiBtaW4gPiB2YWx1ZSkge1xuICAgICAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gIGlmIChmID09IG51bGwpIGYgPSBwYWlyO1xuICB2YXIgaSA9IDAsIG4gPSBhcnJheS5sZW5ndGggLSAxLCBwID0gYXJyYXlbMF0sIHBhaXJzID0gbmV3IEFycmF5KG4gPCAwID8gMCA6IG4pO1xuICB3aGlsZSAoaSA8IG4pIHBhaXJzW2ldID0gZihwLCBwID0gYXJyYXlbKytpXSk7XG4gIHJldHVybiBwYWlycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhaXIoYSwgYikge1xuICByZXR1cm4gW2EsIGJdO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9wYWlycy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICBzdGFydCA9ICtzdGFydCwgc3RvcCA9ICtzdG9wLCBzdGVwID0gKG4gPSBhcmd1bWVudHMubGVuZ3RoKSA8IDIgPyAoc3RvcCA9IHN0YXJ0LCBzdGFydCA9IDAsIDEpIDogbiA8IDMgPyAxIDogK3N0ZXA7XG5cbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSkgfCAwLFxuICAgICAgcmFuZ2UgPSBuZXcgQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByYW5nZVtpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3JhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nKHZhbHVlcy5sZW5ndGgpIC8gTWF0aC5MTjIpICsgMTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHJldmVyc2UsXG4gICAgICBpID0gLTEsXG4gICAgICBuLFxuICAgICAgdGlja3MsXG4gICAgICBzdGVwO1xuXG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoc3RhcnQgPT09IHN0b3AgJiYgY291bnQgPiAwKSByZXR1cm4gW3N0YXJ0XTtcbiAgaWYgKHJldmVyc2UgPSBzdG9wIDwgc3RhcnQpIG4gPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gbjtcbiAgaWYgKChzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpKSA9PT0gMCB8fCAhaXNGaW5pdGUoc3RlcCkpIHJldHVybiBbXTtcblxuICBpZiAoc3RlcCA+IDApIHtcbiAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAvIHN0ZXApO1xuICAgIHN0b3AgPSBNYXRoLmZsb29yKHN0b3AgLyBzdGVwKTtcbiAgICB0aWNrcyA9IG5ldyBBcnJheShuID0gTWF0aC5jZWlsKHN0b3AgLSBzdGFydCArIDEpKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGlja3NbaV0gPSAoc3RhcnQgKyBpKSAqIHN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0ICogc3RlcCk7XG4gICAgc3RvcCA9IE1hdGguY2VpbChzdG9wICogc3RlcCk7XG4gICAgdGlja3MgPSBuZXcgQXJyYXkobiA9IE1hdGguY2VpbChzdGFydCAtIHN0b3AgKyAxKSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRpY2tzW2ldID0gKHN0YXJ0IC0gaSkgLyBzdGVwO1xuICB9XG5cbiAgaWYgKHJldmVyc2UpIHRpY2tzLnJldmVyc2UoKTtcblxuICByZXR1cm4gdGlja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgcG93ZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKHN0ZXApIC8gTWF0aC5MTjEwKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlcik7XG4gIHJldHVybiBwb3dlciA+PSAwXG4gICAgICA/IChlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDEpICogTWF0aC5wb3coMTAsIHBvd2VyKVxuICAgICAgOiAtTWF0aC5wb3coMTAsIC1wb3dlcikgLyAoZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcDAgPSBNYXRoLmFicyhzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgc3RlcDEgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwMCkgLyBNYXRoLkxOMTApKSxcbiAgICAgIGVycm9yID0gc3RlcDAgLyBzdGVwMTtcbiAgaWYgKGVycm9yID49IGUxMCkgc3RlcDEgKj0gMTA7XG4gIGVsc2UgaWYgKGVycm9yID49IGU1KSBzdGVwMSAqPSA1O1xuICBlbHNlIGlmIChlcnJvciA+PSBlMikgc3RlcDEgKj0gMjtcbiAgcmV0dXJuIHN0b3AgPCBzdGFydCA/IC1zdGVwMSA6IHN0ZXAxO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy90aWNrcy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgbWluIGZyb20gXCIuL21pblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRyaXgpIHtcbiAgaWYgKCEobiA9IG1hdHJpeC5sZW5ndGgpKSByZXR1cm4gW107XG4gIGZvciAodmFyIGkgPSAtMSwgbSA9IG1pbihtYXRyaXgsIGxlbmd0aCksIHRyYW5zcG9zZSA9IG5ldyBBcnJheShtKTsgKytpIDwgbTspIHtcbiAgICBmb3IgKHZhciBqID0gLTEsIG4sIHJvdyA9IHRyYW5zcG9zZVtpXSA9IG5ldyBBcnJheShuKTsgKytqIDwgbjspIHtcbiAgICAgIHJvd1tqXSA9IG1hdHJpeFtqXVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYW5zcG9zZTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoKGQpIHtcbiAgcmV0dXJuIGQubGVuZ3RoO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy90cmFuc3Bvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG0gPSAwLFxuICAgICAgaSA9IC0xLFxuICAgICAgbWVhbiA9IDAsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlbHRhLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtID4gMSkgcmV0dXJuIHN1bSAvIChtIC0gMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3ZhcmlhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXREZWZhdWx0TG9jYWxlLCBmb3JtYXQsIGZvcm1hdFByZWZpeH0gZnJvbSBcIi4vc3JjL2RlZmF1bHRMb2NhbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXRMb2NhbGV9IGZyb20gXCIuL3NyYy9sb2NhbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXRTcGVjaWZpZXJ9IGZyb20gXCIuL3NyYy9mb3JtYXRTcGVjaWZpZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25GaXhlZH0gZnJvbSBcIi4vc3JjL3ByZWNpc2lvbkZpeGVkXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcHJlY2lzaW9uUHJlZml4fSBmcm9tIFwiLi9zcmMvcHJlY2lzaW9uUHJlZml4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcHJlY2lzaW9uUm91bmR9IGZyb20gXCIuL3NyYy9wcmVjaXNpb25Sb3VuZFwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsXCI7XG5cbmV4cG9ydCB2YXIgcHJlZml4RXhwb25lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsKHgsIE1hdGgubWF4KDAsIHAgKyBpIC0gMSkpWzBdOyAvLyBsZXNzIHRoYW4gMXkhXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlc1wiO1xuXG4vLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtXFwoIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KFthLXolXSk/JC9pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIHJldHVybiBuZXcgRm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcik7XG59XG5cbmZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUgPSBGb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlOyAvLyBpbnN0YW5jZW9mXG5cbmZ1bmN0aW9uIEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgaWYgKCEobWF0Y2ggPSByZS5leGVjKHNwZWNpZmllcikpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGZvcm1hdDogXCIgKyBzcGVjaWZpZXIpO1xuXG4gIHZhciBtYXRjaCxcbiAgICAgIGZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIixcbiAgICAgIGFsaWduID0gbWF0Y2hbMl0gfHwgXCI+XCIsXG4gICAgICBzaWduID0gbWF0Y2hbM10gfHwgXCItXCIsXG4gICAgICBzeW1ib2wgPSBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgemVybyA9ICEhbWF0Y2hbNV0sXG4gICAgICB3aWR0aCA9IG1hdGNoWzZdICYmICttYXRjaFs2XSxcbiAgICAgIGNvbW1hID0gISFtYXRjaFs3XSxcbiAgICAgIHByZWNpc2lvbiA9IG1hdGNoWzhdICYmICttYXRjaFs4XS5zbGljZSgxKSxcbiAgICAgIHR5cGUgPSBtYXRjaFs5XSB8fCBcIlwiO1xuXG4gIC8vIFRoZSBcIm5cIiB0eXBlIGlzIGFuIGFsaWFzIGZvciBcIixnXCIuXG4gIGlmICh0eXBlID09PSBcIm5cIikgY29tbWEgPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgLy8gTWFwIGludmFsaWQgdHlwZXMgdG8gdGhlIGRlZmF1bHQgZm9ybWF0LlxuICBlbHNlIGlmICghZm9ybWF0VHlwZXNbdHlwZV0pIHR5cGUgPSBcIlwiO1xuXG4gIC8vIElmIHplcm8gZmlsbCBpcyBzcGVjaWZpZWQsIHBhZGRpbmcgZ29lcyBhZnRlciBzaWduIGFuZCBiZWZvcmUgZGlnaXRzLlxuICBpZiAoemVybyB8fCAoZmlsbCA9PT0gXCIwXCIgJiYgYWxpZ24gPT09IFwiPVwiKSkgemVybyA9IHRydWUsIGZpbGwgPSBcIjBcIiwgYWxpZ24gPSBcIj1cIjtcblxuICB0aGlzLmZpbGwgPSBmaWxsO1xuICB0aGlzLmFsaWduID0gYWxpZ247XG4gIHRoaXMuc2lnbiA9IHNpZ247XG4gIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICB0aGlzLnplcm8gPSB6ZXJvO1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIHRoaXMuY29tbWEgPSBjb21tYTtcbiAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gIHRoaXMudHlwZSA9IHR5cGU7XG59XG5cbkZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZmlsbFxuICAgICAgKyB0aGlzLmFsaWduXG4gICAgICArIHRoaXMuc2lnblxuICAgICAgKyB0aGlzLnN5bWJvbFxuICAgICAgKyAodGhpcy56ZXJvID8gXCIwXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy53aWR0aCA9PSBudWxsID8gXCJcIiA6IE1hdGgubWF4KDEsIHRoaXMud2lkdGggfCAwKSlcbiAgICAgICsgKHRoaXMuY29tbWEgPyBcIixcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLnByZWNpc2lvbiA9PSBudWxsID8gXCJcIiA6IFwiLlwiICsgTWF0aC5tYXgoMCwgdGhpcy5wcmVjaXNpb24gfCAwKSlcbiAgICAgICsgdGhpcy50eXBlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZm9ybWF0RGVmYXVsdCBmcm9tIFwiLi9mb3JtYXREZWZhdWx0XCI7XG5pbXBvcnQgZm9ybWF0UHJlZml4QXV0byBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvXCI7XG5pbXBvcnQgZm9ybWF0Um91bmRlZCBmcm9tIFwiLi9mb3JtYXRSb3VuZGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJcIjogZm9ybWF0RGVmYXVsdCxcbiAgXCIlXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuICh4ICogMTAwKS50b0ZpeGVkKHApOyB9LFxuICBcImJcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygyKTsgfSxcbiAgXCJjXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHggKyBcIlwiOyB9LFxuICBcImRcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxMCk7IH0sXG4gIFwiZVwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiB4LnRvRXhwb25lbnRpYWwocCk7IH0sXG4gIFwiZlwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiB4LnRvRml4ZWQocCk7IH0sXG4gIFwiZ1wiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiB4LnRvUHJlY2lzaW9uKHApOyB9LFxuICBcIm9cIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZyg4KTsgfSxcbiAgXCJwXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIGZvcm1hdFJvdW5kZWQoeCAqIDEwMCwgcCk7IH0sXG4gIFwiclwiOiBmb3JtYXRSb3VuZGVkLFxuICBcInNcIjogZm9ybWF0UHJlZml4QXV0byxcbiAgXCJYXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH0sXG4gIFwieFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KTsgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuaW1wb3J0IGZvcm1hdEdyb3VwIGZyb20gXCIuL2Zvcm1hdEdyb3VwXCI7XG5pbXBvcnQgZm9ybWF0TnVtZXJhbHMgZnJvbSBcIi4vZm9ybWF0TnVtZXJhbHNcIjtcbmltcG9ydCBmb3JtYXRTcGVjaWZpZXIgZnJvbSBcIi4vZm9ybWF0U3BlY2lmaWVyXCI7XG5pbXBvcnQgZm9ybWF0VHlwZXMgZnJvbSBcIi4vZm9ybWF0VHlwZXNcIjtcbmltcG9ydCB7cHJlZml4RXhwb25lbnR9IGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG9cIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eVwiO1xuXG52YXIgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nICYmIGxvY2FsZS50aG91c2FuZHMgPyBmb3JtYXRHcm91cChsb2NhbGUuZ3JvdXBpbmcsIGxvY2FsZS50aG91c2FuZHMpIDogaWRlbnRpdHksXG4gICAgICBjdXJyZW5jeSA9IGxvY2FsZS5jdXJyZW5jeSxcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCxcbiAgICAgIG51bWVyYWxzID0gbG9jYWxlLm51bWVyYWxzID8gZm9ybWF0TnVtZXJhbHMobG9jYWxlLm51bWVyYWxzKSA6IGlkZW50aXR5LFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50IHx8IFwiJVwiO1xuXG4gIGZ1bmN0aW9uIG5ld0Zvcm1hdChzcGVjaWZpZXIpIHtcbiAgICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKTtcblxuICAgIHZhciBmaWxsID0gc3BlY2lmaWVyLmZpbGwsXG4gICAgICAgIGFsaWduID0gc3BlY2lmaWVyLmFsaWduLFxuICAgICAgICBzaWduID0gc3BlY2lmaWVyLnNpZ24sXG4gICAgICAgIHN5bWJvbCA9IHNwZWNpZmllci5zeW1ib2wsXG4gICAgICAgIHplcm8gPSBzcGVjaWZpZXIuemVybyxcbiAgICAgICAgd2lkdGggPSBzcGVjaWZpZXIud2lkdGgsXG4gICAgICAgIGNvbW1hID0gc3BlY2lmaWVyLmNvbW1hLFxuICAgICAgICBwcmVjaXNpb24gPSBzcGVjaWZpZXIucHJlY2lzaW9uLFxuICAgICAgICB0eXBlID0gc3BlY2lmaWVyLnR5cGU7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzBdIDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lbMV0gOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gIXR5cGUgfHwgL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PSBudWxsID8gKHR5cGUgPyA2IDogMTIpXG4gICAgICAgIDogL1tncHJzXS8udGVzdCh0eXBlKSA/IE1hdGgubWF4KDEsIE1hdGgubWluKDIxLCBwcmVjaXNpb24pKVxuICAgICAgICA6IE1hdGgubWF4KDAsIE1hdGgubWluKDIwLCBwcmVjaXNpb24pKTtcblxuICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlUHJlZml4ID0gcHJlZml4LFxuICAgICAgICAgIHZhbHVlU3VmZml4ID0gc3VmZml4LFxuICAgICAgICAgIGksIG4sIGM7XG5cbiAgICAgIGlmICh0eXBlID09PSBcImNcIikge1xuICAgICAgICB2YWx1ZVN1ZmZpeCA9IGZvcm1hdFR5cGUodmFsdWUpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gdGhlIGluaXRpYWwgZm9ybWF0dGluZy5cbiAgICAgICAgdmFyIHZhbHVlTmVnYXRpdmUgPSB2YWx1ZSA8IDA7XG4gICAgICAgIHZhbHVlID0gZm9ybWF0VHlwZShNYXRoLmFicyh2YWx1ZSksIHByZWNpc2lvbik7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBkdXJpbmcgZm9ybWF0dGluZywgdHJlYXQgYXMgcG9zaXRpdmUuXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCkgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IFwiLVwiKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArIHZhbHVlU3VmZml4ICsgKHZhbHVlTmVnYXRpdmUgJiYgc2lnbiA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXCIpO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgIC8vIGdyb3VwZWQsIGFuZCBmcmFjdGlvbmFsIG9yIGV4cG9uZW50aWFsIOKAnHN1ZmZpeOKAnSBwYXJ0IHRoYXQgaXMgbm90LlxuICAgICAgICBpZiAobWF5YmVTdWZmaXgpIHtcbiAgICAgICAgICBpID0gLTEsIG4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgNDggPiBjIHx8IGMgPiA1Nykge1xuICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IChjID09PSA0NiA/IGRlY2ltYWwgKyB2YWx1ZS5zbGljZShpICsgMSkgOiB2YWx1ZS5zbGljZShpKSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgIXplcm8pIHZhbHVlID0gZ3JvdXAodmFsdWUsIEluZmluaXR5KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFkZGluZy5cbiAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSA6IFwiXCI7XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBhZnRlciBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZpbmFsIG91dHB1dCBiYXNlZCBvbiB0aGUgZGVzaXJlZCBhbGlnbm1lbnQuXG4gICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI9XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyBwYWRkaW5nICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJeXCI6IHZhbHVlID0gcGFkZGluZy5zbGljZSgwLCBsZW5ndGggPSBwYWRkaW5nLmxlbmd0aCA+PiAxKSArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmcuc2xpY2UobGVuZ3RoKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHZhbHVlID0gcGFkZGluZyArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1lcmFscyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3BlY2lmaWVyICsgXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKSB7XG4gICAgdmFyIGYgPSBuZXdGb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgZSA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzLFxuICAgICAgICBrID0gTWF0aC5wb3coMTAsIC1lKSxcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmKGsgKiB2YWx1ZSkgKyBwcmVmaXg7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBuZXdGb3JtYXQsXG4gICAgZm9ybWF0UHJlZml4OiBmb3JtYXRQcmVmaXhcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2xvY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGV9IGZyb20gXCIuL3NyYy92YWx1ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQXJyYXl9IGZyb20gXCIuL3NyYy9hcnJheVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXN9IGZyb20gXCIuL3NyYy9iYXNpc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXNDbG9zZWR9IGZyb20gXCIuL3NyYy9iYXNpc0Nsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGF0ZX0gZnJvbSBcIi4vc3JjL2RhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU51bWJlcn0gZnJvbSBcIi4vc3JjL251bWJlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlT2JqZWN0fSBmcm9tIFwiLi9zcmMvb2JqZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcIi4vc3JjL3JvdW5kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCIuL3NyYy9zdHJpbmdcIjtcbmV4cG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MsIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnfSBmcm9tIFwiLi9zcmMvdHJhbnNmb3JtL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVab29tfSBmcm9tIFwiLi9zcmMvem9vbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUmdiLCByZ2JCYXNpcyBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzLCByZ2JCYXNpc0Nsb3NlZCBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9zcmMvcmdiXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIc2wsIGhzbExvbmcgYXMgaW50ZXJwb2xhdGVIc2xMb25nfSBmcm9tIFwiLi9zcmMvaHNsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVMYWJ9IGZyb20gXCIuL3NyYy9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhjbCwgaGNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhjbExvbmd9IGZyb20gXCIuL3NyYy9oY2xcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeCwgY3ViZWhlbGl4TG9uZyBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeExvbmd9IGZyb20gXCIuL3NyYy9jdWJlaGVsaXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGl6ZX0gZnJvbSBcIi4vc3JjL3F1YW50aXplXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIHBhdGh9IGZyb20gXCIuL3NyYy9wYXRoXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtcGF0aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocykge1xuICByZXR1cm4gcy5tYXRjaCgvLns2fS9nKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBcIiNcIiArIHg7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9jb2xvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7dGlja3MsIHRpY2tJbmNyZW1lbnR9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciBhcyByZWludGVycG9sYXRlfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5LCBkZWludGVycG9sYXRlTGluZWFyIGFzIGRlaW50ZXJwb2xhdGV9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHJldHVybiB0aWNrRm9ybWF0KGRvbWFpbigpLCBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCksXG4gICAgICAgIGkwID0gMCxcbiAgICAgICAgaTEgPSBkLmxlbmd0aCAtIDEsXG4gICAgICAgIHN0YXJ0ID0gZFtpMF0sXG4gICAgICAgIHN0b3AgPSBkW2kxXSxcbiAgICAgICAgc3RlcDtcblxuICAgIGlmIChzdG9wIDwgc3RhcnQpIHtcbiAgICAgIHN0ZXAgPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gc3RlcDtcbiAgICAgIHN0ZXAgPSBpMCwgaTAgPSBpMSwgaTEgPSBzdGVwO1xuICAgIH1cblxuICAgIHN0ZXAgPSB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCAvIHN0ZXApICogc3RlcDtcbiAgICAgIHN0b3AgPSBNYXRoLmNlaWwoc3RvcCAvIHN0ZXApICogc3RlcDtcbiAgICAgIHN0ZXAgPSB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gICAgfSBlbHNlIGlmIChzdGVwIDwgMCkge1xuICAgICAgc3RhcnQgPSBNYXRoLmNlaWwoc3RhcnQgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGRbaTBdID0gTWF0aC5mbG9vcihzdGFydCAvIHN0ZXApICogc3RlcDtcbiAgICAgIGRbaTFdID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBkb21haW4oZCk7XG4gICAgfSBlbHNlIGlmIChzdGVwIDwgMCkge1xuICAgICAgZFtpMF0gPSBNYXRoLmNlaWwoc3RhcnQgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBkW2kxXSA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIGRvbWFpbihkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSk7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBsaW5lYXIoKSk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2xpbmVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hdGNoZXIgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoIWVsZW1lbnQubWF0Y2hlcykge1xuICAgIHZhciB2ZW5kb3JNYXRjaGVzID0gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3I7XG4gICAgbWF0Y2hlciA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2ZW5kb3JNYXRjaGVzLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9tYXRjaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VudGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgZWxzZSB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHYsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICAgID8gc3R5bGVSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdHlsZUZ1bmN0aW9uXG4gICAgICAgICAgICA6IHN0eWxlQ29uc3RhbnQpKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSlcbiAgICAgIDogc3R5bGVWYWx1ZSh0aGlzLm5vZGUoKSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVZhbHVlKG5vZGUsIG5hbWUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKVxuICAgICAgfHwgZGVmYXVsdFZpZXcobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gZW1wdHkgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnM7XG5leHBvcnQgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbmV4cG9ydCB2YXIgY29zID0gTWF0aC5jb3M7XG5leHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgc2luID0gTWF0aC5zaW47XG5leHBvcnQgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG5cbmV4cG9ydCB2YXIgZXBzaWxvbiA9IDFlLTEyO1xuZXhwb3J0IHZhciBwaSA9IE1hdGguUEk7XG5leHBvcnQgdmFyIGhhbGZQaSA9IHBpIC8gMjtcbmV4cG9ydCB2YXIgdGF1ID0gMiAqIHBpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWNvcyh4KSB7XG4gIHJldHVybiB4ID4gMSA/IDAgOiB4IDwgLTEgPyBwaSA6IE1hdGguYWNvcyh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzaW4oeCkge1xuICByZXR1cm4geCA+PSAxID8gaGFsZlBpIDogeCA8PSAtMSA/IC1oYWxmUGkgOiBNYXRoLmFzaW4oeCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL21hdGguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDEpKSByZXR1cm47XG4gIGZvciAodmFyIGkgPSAxLCBqLCBzMCwgczEgPSBzZXJpZXNbb3JkZXJbMF1dLCBuLCBtID0gczEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgczAgPSBzMSwgczEgPSBzZXJpZXNbb3JkZXJbaV1dO1xuICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgIHMxW2pdWzFdICs9IHMxW2pdWzBdID0gaXNOYU4oczBbal1bMV0pID8gczBbal1bMF0gOiBzMFtqXVsxXTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsIG8gPSBuZXcgQXJyYXkobik7XG4gIHdoaWxlICgtLW4gPj0gMCkgb1tuXSA9IG47XG4gIHJldHVybiBvO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9vcmRlci9ub25lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQge2RlZmF1bHQgYXMgbmVzdH0gZnJvbSBcIi4vc3JjL25lc3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZXR9IGZyb20gXCIuL3NyYy9zZXRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXB9IGZyb20gXCIuL3NyYy9tYXBcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBrZXlzfSBmcm9tIFwiLi9zcmMva2V5c1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHZhbHVlc30gZnJvbSBcIi4vc3JjL3ZhbHVlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGVudHJpZXN9IGZyb20gXCIuL3NyYy9lbnRyaWVzXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sbGVjdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgYiAqIHQ7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZVJvdW5kfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bWFwLCBzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxudmFyIHVuaXQgPSBbMCwgMV07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWludGVycG9sYXRlTGluZWFyKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChiKTtcbn1cblxuZnVuY3Rpb24gZGVpbnRlcnBvbGF0ZUNsYW1wKGRlaW50ZXJwb2xhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgZCA9IGRlaW50ZXJwb2xhdGUoYSA9ICthLCBiID0gK2IpO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7IHJldHVybiB4IDw9IGEgPyAwIDogeCA+PSBiID8gMSA6IGQoeCk7IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlaW50ZXJwb2xhdGVDbGFtcChyZWludGVycG9sYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHIgPSByZWludGVycG9sYXRlKGEgPSArYSwgYiA9ICtiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkgeyByZXR1cm4gdCA8PSAwID8gYSA6IHQgPj0gMSA/IGIgOiByKHQpOyB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW1hcChkb21haW4sIHJhbmdlLCBkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IGRlaW50ZXJwb2xhdGUoZDEsIGQwKSwgcjAgPSByZWludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBkZWludGVycG9sYXRlKGQwLCBkMSksIHIwID0gcmVpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpIHtcbiAgdmFyIGogPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpIC0gMSxcbiAgICAgIGQgPSBuZXcgQXJyYXkoaiksXG4gICAgICByID0gbmV3IEFycmF5KGopLFxuICAgICAgaSA9IC0xO1xuXG4gIC8vIFJldmVyc2UgZGVzY2VuZGluZyBkb21haW5zLlxuICBpZiAoZG9tYWluW2pdIDwgZG9tYWluWzBdKSB7XG4gICAgZG9tYWluID0gZG9tYWluLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIHJhbmdlID0gcmFuZ2Uuc2xpY2UoKS5yZXZlcnNlKCk7XG4gIH1cblxuICB3aGlsZSAoKytpIDwgaikge1xuICAgIGRbaV0gPSBkZWludGVycG9sYXRlKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IHJlaW50ZXJwb2xhdGUocmFuZ2VbaV0sIHJhbmdlW2kgKyAxXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgIHZhciBpID0gYmlzZWN0KGRvbWFpbiwgeCwgMSwgaikgLSAxO1xuICAgIHJldHVybiByW2ldKGRbaV0oeCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0XG4gICAgICAuZG9tYWluKHNvdXJjZS5kb21haW4oKSlcbiAgICAgIC5yYW5nZShzb3VyY2UucmFuZ2UoKSlcbiAgICAgIC5pbnRlcnBvbGF0ZShzb3VyY2UuaW50ZXJwb2xhdGUoKSlcbiAgICAgIC5jbGFtcChzb3VyY2UuY2xhbXAoKSk7XG59XG5cbi8vIGRlaW50ZXJwb2xhdGUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIHJlaW50ZXJwb2xhdGUoYSwgYikodCkgdGFrZXMgYSBwYXJhbWV0ZXIgdCBpbiBbMCwxXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBkb21haW4gdmFsdWUgeCBpbiBbYSxiXS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIGNsYW1wID0gZmFsc2UsXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHBpZWNld2lzZSA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCkgPiAyID8gcG9seW1hcCA6IGJpbWFwO1xuICAgIG91dHB1dCA9IGlucHV0ID0gbnVsbDtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgcmV0dXJuIChvdXRwdXQgfHwgKG91dHB1dCA9IHBpZWNld2lzZShkb21haW4sIHJhbmdlLCBjbGFtcCA/IGRlaW50ZXJwb2xhdGVDbGFtcChkZWludGVycG9sYXRlKSA6IGRlaW50ZXJwb2xhdGUsIGludGVycG9sYXRlKSkpKCt4KTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gKGlucHV0IHx8IChpbnB1dCA9IHBpZWNld2lzZShyYW5nZSwgZG9tYWluLCBkZWludGVycG9sYXRlTGluZWFyLCBjbGFtcCA/IHJlaW50ZXJwb2xhdGVDbGFtcChyZWludGVycG9sYXRlKSA6IHJlaW50ZXJwb2xhdGUpKSkoK3kpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBtYXAuY2FsbChfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IHNsaWNlLmNhbGwoXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gISFfLCByZXNjYWxlKCkpIDogY2xhbXA7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCByZXNjYWxlKCkpIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgcmV0dXJuIHJlc2NhbGUoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvY29udGludW91cy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIHBvaW50KHRoYXQsIHgsIHkpIHtcbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgICgyICogdGhhdC5feDAgKyB0aGF0Ll94MSkgLyAzLFxuICAgICgyICogdGhhdC5feTAgKyB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDIgKiB0aGF0Ll94MSkgLyAzLFxuICAgICh0aGF0Ll95MCArIDIgKiB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDQgKiB0aGF0Ll94MSArIHgpIC8gNixcbiAgICAodGhhdC5feTAgKyA0ICogdGhhdC5feTEgKyB5KSAvIDZcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhc2lzKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyAvLyBwcm9jZWVkXG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fY29udGV4dC5saW5lVG8oKDUgKiB0aGlzLl94MCArIHRoaXMuX3gxKSAvIDYsICg1ICogdGhpcy5feTAgKyB0aGlzLl95MSkgLyA2KTsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXMoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgdGhhdC5feDEgKyB0aGF0Ll9rICogKHRoYXQuX3gyIC0gdGhhdC5feDApLFxuICAgIHRoYXQuX3kxICsgdGhhdC5fayAqICh0aGF0Ll95MiAtIHRoYXQuX3kwKSxcbiAgICB0aGF0Ll94MiArIHRoYXQuX2sgKiAodGhhdC5feDEgLSB4KSxcbiAgICB0aGF0Ll95MiArIHRoYXQuX2sgKiAodGhhdC5feTEgLSB5KSxcbiAgICB0aGF0Ll94MixcbiAgICB0aGF0Ll95MlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWwoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX3gxID0geCwgdGhpcy5feTEgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWwuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIExpbmVhcihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXIucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpOyBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXIoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL2xpbmVhci5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9ub29wLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQge2RlZmF1bHQgYXMgdGltZUZvcm1hdERlZmF1bHRMb2NhbGUsIHRpbWVGb3JtYXQsIHRpbWVQYXJzZSwgdXRjRm9ybWF0LCB1dGNQYXJzZX0gZnJvbSBcIi4vc3JjL2RlZmF1bHRMb2NhbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aW1lRm9ybWF0TG9jYWxlfSBmcm9tIFwiLi9zcmMvbG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaXNvRm9ybWF0fSBmcm9tIFwiLi9zcmMvaXNvRm9ybWF0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaXNvUGFyc2V9IGZyb20gXCIuL3NyYy9pc29QYXJzZVwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUtZm9ybWF0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hZGRyZXNzID0gYC9kYXRhLyR7bmFtZX0uanNvbmA7XG4gIH1cblxuICBoYW5kbGUoZikge1xuICAgIGZldGNoKHRoaXMuYWRkcmVzcylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZihkYXRhKSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2hvbWV3b3JrMi9EYXRhSGFuZGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5jb250aW5lbnRzID0gbmV3IFNldCgpO1xuICAgIHRoaXMueWVhclJhbmdlID0ge1xuICAgICAgbWluOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuX3JlZm9ybWF0RGF0YShkYXRhLmRhdGEpO1xuICAgIHRoaXMuaGVhZGVycyA9IHRoaXMuX2V4dHJhY3RIZWFkZXJzKHRoaXMuZGF0YVswXSk7XG4gIH1cblxuICBfcmVmb3JtYXREYXRhKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gW107XG4gICAgZm9yIChjb25zdCBvYmogb2YgZGF0YSkge1xuICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lO1xuICAgICAgY29uc3QgY29udGluZW50ID0gb2JqLmNvbnRpbmVudDtcbiAgICAgIHRoaXMuY29udGluZW50cy5hZGQoY29udGluZW50KTtcbiAgICAgIGNvbnN0IHllYXJPYmplY3RzID0gb2JqLnllYXJzO1xuICAgICAgZm9yIChjb25zdCB5ZWFyT2JqZWN0IG9mIHllYXJPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyT2JqZWN0LnllYXIpO1xuICAgICAgICBpZiAodGhpcy55ZWFyUmFuZ2UubWF4IDwgeWVhcikge1xuICAgICAgICAgIHRoaXMueWVhclJhbmdlLm1heCA9IHllYXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueWVhclJhbmdlLm1pbiA+IHllYXIpIHtcbiAgICAgICAgICB0aGlzLnllYXJSYW5nZS5taW4gPSB5ZWFyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGNvbnRpbmVudCxcbiAgICAgICAgICBnZHA6IHllYXJPYmplY3QuZ2RwLFxuICAgICAgICAgIHBvcHVsYXRpb246IHllYXJPYmplY3QucG9wdWxhdGlvbixcbiAgICAgICAgICBsaWZlX2V4cGVjdGFuY3k6IHllYXJPYmplY3QubGlmZV9leHBlY3RhbmN5LFxuICAgICAgICAgIHllYXIsXG4gICAgICAgIH07XG4gICAgICAgIG5ld0RhdGEucHVzaChuZXdPYmplY3QpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRpbmVudHMgPSBbLi4udGhpcy5jb250aW5lbnRzXTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuXG4gIF9leHRyYWN0SGVhZGVycygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhWzBdKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaG9tZXdvcmsyL0RhdGFQcm9jZXNzb3IuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW50ZXJhY3RpdmVfYmxvY2sge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3hlc19ibG9jaywgLnJhZGlvX2J1dHRvbnNfYmxvY2ssIC5zbGlkZXJfYmxvY2sge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jaGVja2JveF9ibG9jaywgLnJhZGlvX2J1dHRvbl9ibG9jaywgLnNsaWRlcl9ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uaW50ZXJhY3RpdmVfYmxvY2tfbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5tYWluX3RhYmxlIHRkIHtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm1haW5fdGFibGUsIC5tYWluX3RhYmxlIHRoLCAubWFpbl90YWJsZSB0ZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG50ci50YWJsZV9yb3c6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5iYXJfY2hhcnQgcmVjdCB7XFxuICAgIGZpbGw6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmJhcl9jaGFydCB0ZXh0IHtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFuY2hvcjogZW5kO1xcbn1cXG5cXG5wYXRoLmxpbmUge1xcbiAgICBzdHJva2U6IHN0ZWVsYmx1ZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxO1xcbiAgICBmaWxsOiBub25lO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG59XFxuXFxuLmF4aXMgcGF0aCxcXG4uYXhpcyBsaW5lIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiBncmV5O1xcbiAgICBzdHJva2Utd2lkdGg6IDE7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zdHlsZXMvaG9tZXdvcmsyLmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtwYWlyfSBmcm9tIFwiLi9wYWlyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMwLCB2YWx1ZXMxLCByZWR1Y2UpIHtcbiAgdmFyIG4wID0gdmFsdWVzMC5sZW5ndGgsXG4gICAgICBuMSA9IHZhbHVlczEubGVuZ3RoLFxuICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4wICogbjEpLFxuICAgICAgaTAsXG4gICAgICBpMSxcbiAgICAgIGksXG4gICAgICB2YWx1ZTA7XG5cbiAgaWYgKHJlZHVjZSA9PSBudWxsKSByZWR1Y2UgPSBwYWlyO1xuXG4gIGZvciAoaTAgPSBpID0gMDsgaTAgPCBuMDsgKytpMCkge1xuICAgIGZvciAodmFsdWUwID0gdmFsdWVzMFtpMF0sIGkxID0gMDsgaTEgPCBuMTsgKytpMSwgKytpKSB7XG4gICAgICB2YWx1ZXNbaV0gPSByZWR1Y2UodmFsdWUwLCB2YWx1ZXMxW2kxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvY3Jvc3MuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYiA8IGEgPyAtMSA6IGIgPiBhID8gMSA6IGIgPj0gYSA/IDAgOiBOYU47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL2Rlc2NlbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBiaXNlY3QgZnJvbSBcIi4vYmlzZWN0XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBleHRlbnQgZnJvbSBcIi4vZXh0ZW50XCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHlcIjtcbmltcG9ydCByYW5nZSBmcm9tIFwiLi9yYW5nZVwiO1xuaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcIi4vdGlja3NcIjtcbmltcG9ydCBzdHVyZ2VzIGZyb20gXCIuL3RocmVzaG9sZC9zdHVyZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsdWUgPSBpZGVudGl0eSxcbiAgICAgIGRvbWFpbiA9IGV4dGVudCxcbiAgICAgIHRocmVzaG9sZCA9IHN0dXJnZXM7XG5cbiAgZnVuY3Rpb24gaGlzdG9ncmFtKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICB4LFxuICAgICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkobik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YWx1ZXNbaV0gPSB2YWx1ZShkYXRhW2ldLCBpLCBkYXRhKTtcbiAgICB9XG5cbiAgICB2YXIgeHogPSBkb21haW4odmFsdWVzKSxcbiAgICAgICAgeDAgPSB4elswXSxcbiAgICAgICAgeDEgPSB4elsxXSxcbiAgICAgICAgdHogPSB0aHJlc2hvbGQodmFsdWVzLCB4MCwgeDEpO1xuXG4gICAgLy8gQ29udmVydCBudW1iZXIgb2YgdGhyZXNob2xkcyBpbnRvIHVuaWZvcm0gdGhyZXNob2xkcy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHopKSB7XG4gICAgICB0eiA9IHRpY2tTdGVwKHgwLCB4MSwgdHopO1xuICAgICAgdHogPSByYW5nZShNYXRoLmNlaWwoeDAgLyB0eikgKiB0eiwgTWF0aC5mbG9vcih4MSAvIHR6KSAqIHR6LCB0eik7IC8vIGV4Y2x1c2l2ZVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgdGhyZXNob2xkcyBvdXRzaWRlIHRoZSBkb21haW4uXG4gICAgdmFyIG0gPSB0ei5sZW5ndGg7XG4gICAgd2hpbGUgKHR6WzBdIDw9IHgwKSB0ei5zaGlmdCgpLCAtLW07XG4gICAgd2hpbGUgKHR6W20gLSAxXSA+IHgxKSB0ei5wb3AoKSwgLS1tO1xuXG4gICAgdmFyIGJpbnMgPSBuZXcgQXJyYXkobSArIDEpLFxuICAgICAgICBiaW47XG5cbiAgICAvLyBJbml0aWFsaXplIGJpbnMuXG4gICAgZm9yIChpID0gMDsgaSA8PSBtOyArK2kpIHtcbiAgICAgIGJpbiA9IGJpbnNbaV0gPSBbXTtcbiAgICAgIGJpbi54MCA9IGkgPiAwID8gdHpbaSAtIDFdIDogeDA7XG4gICAgICBiaW4ueDEgPSBpIDwgbSA/IHR6W2ldIDogeDE7XG4gICAgfVxuXG4gICAgLy8gQXNzaWduIGRhdGEgdG8gYmlucyBieSB2YWx1ZSwgaWdub3JpbmcgYW55IG91dHNpZGUgdGhlIGRvbWFpbi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB4ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHgwIDw9IHggJiYgeCA8PSB4MSkge1xuICAgICAgICBiaW5zW2Jpc2VjdCh0eiwgeCwgMCwgbSldLnB1c2goZGF0YVtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbnM7XG4gIH1cblxuICBoaXN0b2dyYW0udmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBoaXN0b2dyYW0pIDogdmFsdWU7XG4gIH07XG5cbiAgaGlzdG9ncmFtLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KFtfWzBdLCBfWzFdXSksIGhpc3RvZ3JhbSkgOiBkb21haW47XG4gIH07XG5cbiAgaGlzdG9ncmFtLnRocmVzaG9sZHMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhyZXNob2xkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBBcnJheS5pc0FycmF5KF8pID8gY29uc3RhbnQoc2xpY2UuY2FsbChfKSkgOiBjb25zdGFudChfKSwgaGlzdG9ncmFtKSA6IHRocmVzaG9sZDtcbiAgfTtcblxuICByZXR1cm4gaGlzdG9ncmFtO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9oaXN0b2dyYW0uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWF4O1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiB2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWF4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBtID0gbixcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHN1bSArPSB2YWx1ZTtcbiAgICAgIGVsc2UgLS1tO1xuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHN1bSArPSB2YWx1ZTtcbiAgICAgIGVsc2UgLS1tO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtKSByZXR1cm4gc3VtIC8gbTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWVhbi5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcbmltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi9xdWFudGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBudW1iZXJzID0gW107XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlc1tpXSkpKSB7XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpKSkge1xuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWFudGlsZShudW1iZXJzLnNvcnQoYXNjZW5kaW5nKSwgMC41KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWVkaWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbiA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBtLFxuICAgICAgaSA9IC0xLFxuICAgICAgaiA9IDAsXG4gICAgICBtZXJnZWQsXG4gICAgICBhcnJheTtcblxuICB3aGlsZSAoKytpIDwgbikgaiArPSBhcnJheXNbaV0ubGVuZ3RoO1xuICBtZXJnZWQgPSBuZXcgQXJyYXkoaik7XG5cbiAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgYXJyYXkgPSBhcnJheXNbbl07XG4gICAgbSA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoLS1tID49IDApIHtcbiAgICAgIG1lcmdlZFstLWpdID0gYXJyYXlbbV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWVyZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGluZGV4ZXMpIHtcbiAgdmFyIGkgPSBpbmRleGVzLmxlbmd0aCwgcGVybXV0ZXMgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pIHBlcm11dGVzW2ldID0gYXJyYXlbaW5kZXhlc1tpXV07XG4gIHJldHVybiBwZXJtdXRlcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvcGVybXV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIGNvbXBhcmUpIHtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpKSByZXR1cm47XG4gIHZhciBuLFxuICAgICAgaSA9IDAsXG4gICAgICBqID0gMCxcbiAgICAgIHhpLFxuICAgICAgeGogPSB2YWx1ZXNbal07XG5cbiAgaWYgKGNvbXBhcmUgPT0gbnVsbCkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGlmIChjb21wYXJlKHhpID0gdmFsdWVzW2ldLCB4aikgPCAwIHx8IGNvbXBhcmUoeGosIHhqKSAhPT0gMCkge1xuICAgICAgeGogPSB4aSwgaiA9IGk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBhcmUoeGosIHhqKSA9PT0gMCkgcmV0dXJuIGo7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3NjYW4uanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGkwLCBpMSkge1xuICB2YXIgbSA9IChpMSA9PSBudWxsID8gYXJyYXkubGVuZ3RoIDogaTEpIC0gKGkwID0gaTAgPT0gbnVsbCA/IDAgOiAraTApLFxuICAgICAgdCxcbiAgICAgIGk7XG5cbiAgd2hpbGUgKG0pIHtcbiAgICBpID0gTWF0aC5yYW5kb20oKSAqIG0tLSB8IDA7XG4gICAgdCA9IGFycmF5W20gKyBpMF07XG4gICAgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF07XG4gICAgYXJyYXlbaSArIGkwXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3NodWZmbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZXNbaV0pIHN1bSArPSB2YWx1ZTsgLy8gTm90ZTogemVybyBhbmQgbnVsbCBhcmUgZXF1aXZhbGVudC5cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHZhbHVlID0gK3ZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSBzdW0gKz0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvc3VtLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7bWFwfSBmcm9tIFwiLi4vYXJyYXlcIjtcbmltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4uL2FzY2VuZGluZ1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQgcXVhbnRpbGUgZnJvbSBcIi4uL3F1YW50aWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgdmFsdWVzID0gbWFwLmNhbGwodmFsdWVzLCBudW1iZXIpLnNvcnQoYXNjZW5kaW5nKTtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgyICogKHF1YW50aWxlKHZhbHVlcywgMC43NSkgLSBxdWFudGlsZSh2YWx1ZXMsIDAuMjUpKSAqIE1hdGgucG93KHZhbHVlcy5sZW5ndGgsIC0xIC8gMykpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL2ZyZWVkbWFuRGlhY29uaXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGRldmlhdGlvbiBmcm9tIFwiLi4vZGV2aWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgzLjUgKiBkZXZpYXRpb24odmFsdWVzKSAqIE1hdGgucG93KHZhbHVlcy5sZW5ndGgsIC0xIC8gMykpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3Njb3R0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB0cmFuc3Bvc2UgZnJvbSBcIi4vdHJhbnNwb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJhbnNwb3NlKGFyZ3VtZW50cyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3ppcC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXApIHtcbiAgdmFyIGVudHJpZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG1hcCkgZW50cmllcy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IG1hcFtrZXldfSk7XG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbGxlY3Rpb24vc3JjL2VudHJpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFwKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBtYXApIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBtYXAgZnJvbSBcIi4vbWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIga2V5cyA9IFtdLFxuICAgICAgc29ydEtleXMgPSBbXSxcbiAgICAgIHNvcnRWYWx1ZXMsXG4gICAgICByb2xsdXAsXG4gICAgICBuZXN0O1xuXG4gIGZ1bmN0aW9uIGFwcGx5KGFycmF5LCBkZXB0aCwgY3JlYXRlUmVzdWx0LCBzZXRSZXN1bHQpIHtcbiAgICBpZiAoZGVwdGggPj0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIGlmIChzb3J0VmFsdWVzICE9IG51bGwpIGFycmF5LnNvcnQoc29ydFZhbHVlcyk7XG4gICAgICByZXR1cm4gcm9sbHVwICE9IG51bGwgPyByb2xsdXAoYXJyYXkpIDogYXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGkgPSAtMSxcbiAgICAgICAgbiA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAga2V5ID0ga2V5c1tkZXB0aCsrXSxcbiAgICAgICAga2V5VmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB2YWx1ZXNCeUtleSA9IG1hcCgpLFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHJlc3VsdCA9IGNyZWF0ZVJlc3VsdCgpO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZXMgPSB2YWx1ZXNCeUtleS5nZXQoa2V5VmFsdWUgPSBrZXkodmFsdWUgPSBhcnJheVtpXSkgKyBcIlwiKSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXNCeUtleS5zZXQoa2V5VmFsdWUsIFt2YWx1ZV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlc0J5S2V5LmVhY2goZnVuY3Rpb24odmFsdWVzLCBrZXkpIHtcbiAgICAgIHNldFJlc3VsdChyZXN1bHQsIGtleSwgYXBwbHkodmFsdWVzLCBkZXB0aCwgY3JlYXRlUmVzdWx0LCBzZXRSZXN1bHQpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRyaWVzKG1hcCwgZGVwdGgpIHtcbiAgICBpZiAoKytkZXB0aCA+IGtleXMubGVuZ3RoKSByZXR1cm4gbWFwO1xuICAgIHZhciBhcnJheSwgc29ydEtleSA9IHNvcnRLZXlzW2RlcHRoIC0gMV07XG4gICAgaWYgKHJvbGx1cCAhPSBudWxsICYmIGRlcHRoID49IGtleXMubGVuZ3RoKSBhcnJheSA9IG1hcC5lbnRyaWVzKCk7XG4gICAgZWxzZSBhcnJheSA9IFtdLCBtYXAuZWFjaChmdW5jdGlvbih2LCBrKSB7IGFycmF5LnB1c2goe2tleTogaywgdmFsdWVzOiBlbnRyaWVzKHYsIGRlcHRoKX0pOyB9KTtcbiAgICByZXR1cm4gc29ydEtleSAhPSBudWxsID8gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBzb3J0S2V5KGEua2V5LCBiLmtleSk7IH0pIDogYXJyYXk7XG4gIH1cblxuICByZXR1cm4gbmVzdCA9IHtcbiAgICBvYmplY3Q6IGZ1bmN0aW9uKGFycmF5KSB7IHJldHVybiBhcHBseShhcnJheSwgMCwgY3JlYXRlT2JqZWN0LCBzZXRPYmplY3QpOyB9LFxuICAgIG1hcDogZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGFwcGx5KGFycmF5LCAwLCBjcmVhdGVNYXAsIHNldE1hcCk7IH0sXG4gICAgZW50cmllczogZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGVudHJpZXMoYXBwbHkoYXJyYXksIDAsIGNyZWF0ZU1hcCwgc2V0TWFwKSwgMCk7IH0sXG4gICAga2V5OiBmdW5jdGlvbihkKSB7IGtleXMucHVzaChkKTsgcmV0dXJuIG5lc3Q7IH0sXG4gICAgc29ydEtleXM6IGZ1bmN0aW9uKG9yZGVyKSB7IHNvcnRLZXlzW2tleXMubGVuZ3RoIC0gMV0gPSBvcmRlcjsgcmV0dXJuIG5lc3Q7IH0sXG4gICAgc29ydFZhbHVlczogZnVuY3Rpb24ob3JkZXIpIHsgc29ydFZhbHVlcyA9IG9yZGVyOyByZXR1cm4gbmVzdDsgfSxcbiAgICByb2xsdXA6IGZ1bmN0aW9uKGYpIHsgcm9sbHVwID0gZjsgcmV0dXJuIG5lc3Q7IH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0KCkge1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHNldE9iamVjdChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFwKCkge1xuICByZXR1cm4gbWFwKCk7XG59XG5cbmZ1bmN0aW9uIHNldE1hcChtYXAsIGtleSwgdmFsdWUpIHtcbiAgbWFwLnNldChrZXksIHZhbHVlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9uZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7ZGVmYXVsdCBhcyBtYXAsIHByZWZpeH0gZnJvbSBcIi4vbWFwXCI7XG5cbmZ1bmN0aW9uIFNldCgpIHt9XG5cbnZhciBwcm90byA9IG1hcC5wcm90b3R5cGU7XG5cblNldC5wcm90b3R5cGUgPSBzZXQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogU2V0LFxuICBoYXM6IHByb3RvLmhhcyxcbiAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhbHVlICs9IFwiXCI7XG4gICAgdGhpc1twcmVmaXggKyB2YWx1ZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBwcm90by5yZW1vdmUsXG4gIGNsZWFyOiBwcm90by5jbGVhcixcbiAgdmFsdWVzOiBwcm90by5rZXlzLFxuICBzaXplOiBwcm90by5zaXplLFxuICBlbXB0eTogcHJvdG8uZW1wdHksXG4gIGVhY2g6IHByb3RvLmVhY2hcbn07XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIGYpIHtcbiAgdmFyIHNldCA9IG5ldyBTZXQ7XG5cbiAgLy8gQ29weSBjb25zdHJ1Y3Rvci5cbiAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFNldCkgb2JqZWN0LmVhY2goZnVuY3Rpb24odmFsdWUpIHsgc2V0LmFkZCh2YWx1ZSk7IH0pO1xuXG4gIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl04oCZcyBhbiBhcnJheS5cbiAgZWxzZSBpZiAob2JqZWN0KSB7XG4gICAgdmFyIGkgPSAtMSwgbiA9IG9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGYgPT0gbnVsbCkgd2hpbGUgKCsraSA8IG4pIHNldC5hZGQob2JqZWN0W2ldKTtcbiAgICBlbHNlIHdoaWxlICgrK2kgPCBuKSBzZXQuYWRkKGYob2JqZWN0W2ldLCBpLCBvYmplY3QpKTtcbiAgfVxuXG4gIHJldHVybiBzZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFwKSB7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG1hcCkgdmFsdWVzLnB1c2gobWFwW2tleV0pO1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbGxlY3Rpb24vc3JjL3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPyklXFxcXHMqXCIsXG4gICAgcmVIZXgzID0gL14jKFswLTlhLWZdezN9KSQvLFxuICAgIHJlSGV4NiA9IC9eIyhbMC05YS1mXXs2fSkkLyxcbiAgICByZVJnYkludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVJLCByZUksIHJlSV0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUF0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZUksIHJlSSwgcmVJLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiYVxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsXFxcXChcIiArIFtyZU4sIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXmhzbGFcXFxcKFwiICsgW3JlTiwgcmVQLCByZVAsIHJlTl0gKyBcIlxcXFwpJFwiKTtcblxudmFyIG5hbWVkID0ge1xuICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxuICBhcXVhOiAweDAwZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gIGF6dXJlOiAweGYwZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjLFxuICBiaXNxdWU6IDB4ZmZlNGM0LFxuICBibGFjazogMHgwMDAwMDAsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcbiAgYmx1ZTogMHgwMDAwZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxuICBicm93bjogMHhhNTJhMmEsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICBjb3JhbDogMHhmZjdmNTAsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcbiAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICBjcmltc29uOiAweGRjMTQzYyxcbiAgY3lhbjogMHgwMGZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YixcbiAgZGFya2N5YW46IDB4MDA4YjhiLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcbiAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxuICBkYXJrZ3JleTogMHhhOWE5YTksXG4gIGRhcmtraGFraTogMHhiZGI3NmIsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgZGFya29yY2hpZDogMHg5OTMyY2MsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICBkZWVwcGluazogMHhmZjE0OTMsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjksXG4gIGRpbWdyZXk6IDB4Njk2OTY5LFxuICBkb2RnZXJibHVlOiAweDFlOTBmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcbiAgZ29sZDogMHhmZmQ3MDAsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjAsXG4gIGdyYXk6IDB4ODA4MDgwLFxuICBncmVlbjogMHgwMDgwMDAsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgZ3JleTogMHg4MDgwODAsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgaG90cGluazogMHhmZjY5YjQsXG4gIGluZGlhbnJlZDogMHhjZDVjNWMsXG4gIGluZGlnbzogMHg0YjAwODIsXG4gIGl2b3J5OiAweGZmZmZmMCxcbiAga2hha2k6IDB4ZjBlNjhjLFxuICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxuICBsYXduZ3JlZW46IDB4N2NmYzAwLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2LFxuICBsaWdodGNvcmFsOiAweGYwODA4MCxcbiAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgbGlnaHRncmV5OiAweGQzZDNkMyxcbiAgbGlnaHRwaW5rOiAweGZmYjZjMSxcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICBsaW1lOiAweDAwZmYwMCxcbiAgbGltZWdyZWVuOiAweDMyY2QzMixcbiAgbGluZW46IDB4ZmFmMGU2LFxuICBtYWdlbnRhOiAweGZmMDBmZixcbiAgbWFyb29uOiAweDgwMDAwMCxcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgbWludGNyZWFtOiAweGY1ZmZmYSxcbiAgbWlzdHlyb3NlOiAweGZmZTRlMSxcbiAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICBuYXZham93aGl0ZTogMHhmZmRlYWQsXG4gIG5hdnk6IDB4MDAwMDgwLFxuICBvbGRsYWNlOiAweGZkZjVlNixcbiAgb2xpdmU6IDB4ODA4MDAwLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxuICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2LFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNSxcbiAgcGVhY2hwdWZmOiAweGZmZGFiOSxcbiAgcGVydTogMHhjZDg1M2YsXG4gIHBpbms6IDB4ZmZjMGNiLFxuICBwbHVtOiAweGRkYTBkZCxcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gIHB1cnBsZTogMHg4MDAwODAsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxuICByZWQ6IDB4ZmYwMDAwLFxuICByb3N5YnJvd246IDB4YmM4ZjhmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gIHNhbG1vbjogMHhmYTgwNzIsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxuICBzZWFncmVlbjogMHgyZThiNTcsXG4gIHNlYXNoZWxsOiAweGZmZjVlZSxcbiAgc2llbm5hOiAweGEwNTIyZCxcbiAgc2lsdmVyOiAweGMwYzBjMCxcbiAgc2t5Ymx1ZTogMHg4N2NlZWIsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2QsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTAsXG4gIHNub3c6IDB4ZmZmYWZhLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXG4gIHRhbjogMHhkMmI0OGMsXG4gIHRlYWw6IDB4MDA4MDgwLFxuICB0aGlzdGxlOiAweGQ4YmZkOCxcbiAgdG9tYXRvOiAweGZmNjM0NyxcbiAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgdmlvbGV0OiAweGVlODJlZSxcbiAgd2hlYXQ6IDB4ZjVkZWIzLFxuICB3aGl0ZTogMHhmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxuICB5ZWxsb3c6IDB4ZmZmZjAwLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbn07XG5cbmRlZmluZShDb2xvciwgY29sb3IsIHtcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKSArIFwiXCI7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcihmb3JtYXQpIHtcbiAgdmFyIG07XG4gIGZvcm1hdCA9IChmb3JtYXQgKyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIChtID0gcmVIZXgzLmV4ZWMoZm9ybWF0KSkgPyAobSA9IHBhcnNlSW50KG1bMV0sIDE2KSwgbmV3IFJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweDBmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSwgMSkpIC8vICNmMDBcbiAgICAgIDogKG0gPSByZUhleDYuZXhlYyhmb3JtYXQpKSA/IHJnYm4ocGFyc2VJbnQobVsxXSwgMTYpKSAvLyAjZmYwMDAwXG4gICAgICA6IChtID0gcmVSZ2JJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0sIG1bMl0sIG1bM10sIDEpIC8vIHJnYigyNTUsIDAsIDApXG4gICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIDEpIC8vIHJnYigxMDAlLCAwJSwgMCUpXG4gICAgICA6IChtID0gcmVSZ2JhSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKSAvLyByZ2JhKDI1NSwgMCwgMCwgMSlcbiAgICAgIDogKG0gPSByZVJnYmFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIG1bNF0pIC8vIHJnYigxMDAlLCAwJSwgMCUsIDEpXG4gICAgICA6IChtID0gcmVIc2xQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIDEpIC8vIGhzbCgxMjAsIDUwJSwgNTAlKVxuICAgICAgOiAobSA9IHJlSHNsYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgbVs0XSkgLy8gaHNsYSgxMjAsIDUwJSwgNTAlLCAxKVxuICAgICAgOiBuYW1lZC5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpID8gcmdibihuYW1lZFtmb3JtYXRdKVxuICAgICAgOiBmb3JtYXQgPT09IFwidHJhbnNwYXJlbnRcIiA/IG5ldyBSZ2IoTmFOLCBOYU4sIE5hTiwgMClcbiAgICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcmdibihuKSB7XG4gIHJldHVybiBuZXcgUmdiKG4gPj4gMTYgJiAweGZmLCBuID4+IDggJiAweGZmLCBuICYgMHhmZiwgMSk7XG59XG5cbmZ1bmN0aW9uIHJnYmEociwgZywgYiwgYSkge1xuICBpZiAoYSA8PSAwKSByID0gZyA9IGIgPSBOYU47XG4gIHJldHVybiBuZXcgUmdiKHIsIGcsIGIsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiQ29udmVydChvKSB7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IFJnYjtcbiAgbyA9IG8ucmdiKCk7XG4gIHJldHVybiBuZXcgUmdiKG8uciwgby5nLCBvLmIsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHJnYkNvbnZlcnQocikgOiBuZXcgUmdiKHIsIGcsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMuciA9ICtyO1xuICB0aGlzLmcgPSArZztcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoUmdiLCByZ2IsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMuciAmJiB0aGlzLnIgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmcgJiYgdGhpcy5nIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5iICYmIHRoaXMuYiA8PSAyNTUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5yKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICAgKyAoYSA9PT0gMSA/IFwiKVwiIDogXCIsIFwiICsgYSArIFwiKVwiKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMucyAmJiB0aGlzLnMgPD0gMSB8fCBpc05hTih0aGlzLnMpKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmwgJiYgdGhpcy5sIDw9IDEpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH1cbn0pKTtcblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbG9yL3NyYy9jb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sb3Ivc3JjL2RlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGVcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICBkZWNpbWFsOiBcIi5cIixcbiAgdGhvdXNhbmRzOiBcIixcIixcbiAgZ3JvdXBpbmc6IFszXSxcbiAgY3VycmVuY3k6IFtcIiRcIiwgXCJcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICBmb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICBmb3JtYXRQcmVmaXggPSBsb2NhbGUuZm9ybWF0UHJlZml4O1xuICByZXR1cm4gbG9jYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHggPSB4LnRvUHJlY2lzaW9uKHApO1xuXG4gIG91dDogZm9yICh2YXIgbiA9IHgubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICBzd2l0Y2ggKHhbaV0pIHtcbiAgICAgIGNhc2UgXCIuXCI6IGkwID0gaTEgPSBpOyBicmVhaztcbiAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcImVcIjogYnJlYWsgb3V0O1xuICAgICAgZGVmYXVsdDogaWYgKGkwID4gMCkgaTAgPSAwOyBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaTAgPiAwID8geC5zbGljZSgwLCBpMCkgKyB4LnNsaWNlKGkxICsgMSkgOiB4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVmYXVsdC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncm91cGluZywgdGhvdXNhbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgd2lkdGgpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgdCA9IFtdLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgZyA9IGdyb3VwaW5nWzBdLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICBpZiAobGVuZ3RoICsgZyArIDEgPiB3aWR0aCkgZyA9IE1hdGgubWF4KDEsIHdpZHRoIC0gbGVuZ3RoKTtcbiAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgaWYgKChsZW5ndGggKz0gZyArIDEpID4gd2lkdGgpIGJyZWFrO1xuICAgICAgZyA9IGdyb3VwaW5nW2ogPSAoaiArIDEpICUgZ3JvdXBpbmcubGVuZ3RoXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdC5yZXZlcnNlKCkuam9pbih0aG91c2FuZHMpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0R3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obnVtZXJhbHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1swLTldL2csIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBudW1lcmFsc1sraV07XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXTtcbiAgcmV0dXJuIGV4cG9uZW50IDwgMCA/IFwiMC5cIiArIG5ldyBBcnJheSgtZXhwb25lbnQpLmpvaW4oXCIwXCIpICsgY29lZmZpY2llbnRcbiAgICAgIDogY29lZmZpY2llbnQubGVuZ3RoID4gZXhwb25lbnQgKyAxID8gY29lZmZpY2llbnQuc2xpY2UoMCwgZXhwb25lbnQgKyAxKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoZXhwb25lbnQgKyAxKVxuICAgICAgOiBjb2VmZmljaWVudCArIG5ldyBBcnJheShleHBvbmVudCAtIGNvZWZmaWNpZW50Lmxlbmd0aCArIDIpLmpvaW4oXCIwXCIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXApIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIC1leHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyAtIGV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25QcmVmaXguanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZnVuY3Rpb24gYmFzaXModDEsIHYwLCB2MSwgdjIsIHYzKSB7XG4gIHZhciB0MiA9IHQxICogdDEsIHQzID0gdDIgKiB0MTtcbiAgcmV0dXJuICgoMSAtIDMgKiB0MSArIDMgKiB0MiAtIHQzKSAqIHYwXG4gICAgICArICg0IC0gNiAqIHQyICsgMyAqIHQzKSAqIHYxXG4gICAgICArICgxICsgMyAqIHQxICsgMyAqIHQyIC0gMyAqIHQzKSAqIHYyXG4gICAgICArIHQzICogdjMpIC8gNjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0IDw9IDAgPyAodCA9IDApIDogdCA+PSAxID8gKHQgPSAxLCBuIC0gMSkgOiBNYXRoLmZsb29yKHQgKiBuKSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaV0sXG4gICAgICAgIHYyID0gdmFsdWVzW2kgKyAxXSxcbiAgICAgICAgdjAgPSBpID4gMCA/IHZhbHVlc1tpIC0gMV0gOiAyICogdjEgLSB2MixcbiAgICAgICAgdjMgPSBpIDwgbiAtIDEgPyB2YWx1ZXNbaSArIDJdIDogMiAqIHYyIC0gdjE7XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9iYXNpcy5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgcmdiIGZyb20gXCIuL3JnYlwiO1xuaW1wb3J0IGFycmF5IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgZGF0ZSBmcm9tIFwiLi9kYXRlXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuaW1wb3J0IG9iamVjdCBmcm9tIFwiLi9vYmplY3RcIjtcbmltcG9ydCBzdHJpbmcgZnJvbSBcIi4vc3RyaW5nXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdCA9IHR5cGVvZiBiLCBjO1xuICByZXR1cm4gYiA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiID8gY29uc3RhbnQoYilcbiAgICAgIDogKHQgPT09IFwibnVtYmVyXCIgPyBudW1iZXJcbiAgICAgIDogdCA9PT0gXCJzdHJpbmdcIiA/ICgoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgcmdiKSA6IHN0cmluZylcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gcmdiXG4gICAgICA6IGIgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZVxuICAgICAgOiBBcnJheS5pc0FycmF5KGIpID8gYXJyYXlcbiAgICAgIDogdHlwZW9mIGIudmFsdWVPZiAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiLnRvU3RyaW5nICE9PSBcImZ1bmN0aW9uXCIgfHwgaXNOYU4oYikgPyBvYmplY3RcbiAgICAgIDogbnVtYmVyKShhLCBiKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBuZXh0SWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgcmV0dXJuIG5ldyBMb2NhbDtcbn1cblxuZnVuY3Rpb24gTG9jYWwoKSB7XG4gIHRoaXMuXyA9IFwiQFwiICsgKCsrbmV4dElkKS50b1N0cmluZygzNik7XG59XG5cbkxvY2FsLnByb3RvdHlwZSA9IGxvY2FsLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IExvY2FsLFxuICBnZXQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl87XG4gICAgd2hpbGUgKCEoaWQgaW4gbm9kZSkpIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm47XG4gICAgcmV0dXJuIG5vZGVbaWRdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5vZGVbdGhpcy5fXSA9IHZhbHVlO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5fIGluIG5vZGUgJiYgZGVsZXRlIG5vZGVbdGhpcy5fXTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl87XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9sb2NhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICB2YXIgZXZlbnQgPSBzb3VyY2VFdmVudCgpO1xuICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gIHJldHVybiBwb2ludChub2RlLCBldmVudCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9tb3VzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbc2VsZWN0b3IgPT0gbnVsbCA/IFtdIDogc2VsZWN0b3JdLCByb290KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdEFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuICBhcmd1bWVudHNbMF0gPSB0aGlzO1xuICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG52YXIga2V5UHJlZml4ID0gXCIkXCI7IC8vIFByb3RlY3QgYWdhaW5zdCBrZXlzIGxpa2Ug4oCcX19wcm90b19f4oCdLlxuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IHt9LFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICAgIGlmIChrZXlWYWx1ZSBpbiBub2RlQnlLZXlWYWx1ZSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0pIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVzW2ldXSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBkYXRhID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaiA9IC0xO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihkKSB7IGRhdGFbKytqXSA9IGQ7IH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gdmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpXG4gICAgICA6IHRoaXMubm9kZSgpLl9fZGF0YV9fO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNvbnN0YW50TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpLFxuICAgICAgc2VsZWN0ID0gYmVmb3JlID09IG51bGwgPyBjb25zdGFudE51bGwgOiB0eXBlb2YgYmVmb3JlID09PSBcImZ1bmN0aW9uXCIgPyBiZWZvcmUgOiBzZWxlY3RvcihiZWZvcmUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBudWxsKTtcbiAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGVzID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaSA9IC0xO1xuICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7IG5vZGVzWysraV0gPSB0aGlzOyB9KTtcbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBuZXh0ICE9PSBub2RlLm5leHRTaWJsaW5nKSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gcHJvcGVydHlSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIGRlbGV0ZSB0aGlzW25hbWVdO1xuICAgIGVsc2UgdGhpc1tuYW1lXSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHByb3BlcnR5UmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHByb3BlcnR5RnVuY3Rpb25cbiAgICAgICAgICA6IHByb3BlcnR5Q29uc3RhbnQpKG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKClbbmFtZV07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmFpc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JlbW92ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkgeyArK3NpemU7IH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudFwiO1xuaW1wb3J0IHBvaW50IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHRvdWNoZXMsIGlkZW50aWZpZXIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBpZGVudGlmaWVyID0gdG91Y2hlcywgdG91Y2hlcyA9IHNvdXJjZUV2ZW50KCkuY2hhbmdlZFRvdWNoZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAwLCB0b3VjaDsgaSA8IG47ICsraSkge1xuICAgIGlmICgodG91Y2ggPSB0b3VjaGVzW2ldKS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gcG9pbnQobm9kZSwgdG91Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvdG91Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudFwiO1xuaW1wb3J0IHBvaW50IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHRvdWNoZXMpIHtcbiAgaWYgKHRvdWNoZXMgPT0gbnVsbCkgdG91Y2hlcyA9IHNvdXJjZUV2ZW50KCkudG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHBvaW50cyA9IG5ldyBBcnJheShuKTsgaSA8IG47ICsraSkge1xuICAgIHBvaW50c1tpXSA9IHBvaW50KG5vZGUsIHRvdWNoZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7ZXBzaWxvbn0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7Q2FyZGluYWx9IGZyb20gXCIuL2NhcmRpbmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHZhciB4MSA9IHRoYXQuX3gxLFxuICAgICAgeTEgPSB0aGF0Ll95MSxcbiAgICAgIHgyID0gdGhhdC5feDIsXG4gICAgICB5MiA9IHRoYXQuX3kyO1xuXG4gIGlmICh0aGF0Ll9sMDFfYSA+IGVwc2lsb24pIHtcbiAgICB2YXIgYSA9IDIgKiB0aGF0Ll9sMDFfMmEgKyAzICogdGhhdC5fbDAxX2EgKiB0aGF0Ll9sMTJfYSArIHRoYXQuX2wxMl8yYSxcbiAgICAgICAgbiA9IDMgKiB0aGF0Ll9sMDFfYSAqICh0aGF0Ll9sMDFfYSArIHRoYXQuX2wxMl9hKTtcbiAgICB4MSA9ICh4MSAqIGEgLSB0aGF0Ll94MCAqIHRoYXQuX2wxMl8yYSArIHRoYXQuX3gyICogdGhhdC5fbDAxXzJhKSAvIG47XG4gICAgeTEgPSAoeTEgKiBhIC0gdGhhdC5feTAgKiB0aGF0Ll9sMTJfMmEgKyB0aGF0Ll95MiAqIHRoYXQuX2wwMV8yYSkgLyBuO1xuICB9XG5cbiAgaWYgKHRoYXQuX2wyM19hID4gZXBzaWxvbikge1xuICAgIHZhciBiID0gMiAqIHRoYXQuX2wyM18yYSArIDMgKiB0aGF0Ll9sMjNfYSAqIHRoYXQuX2wxMl9hICsgdGhhdC5fbDEyXzJhLFxuICAgICAgICBtID0gMyAqIHRoYXQuX2wyM19hICogKHRoYXQuX2wyM19hICsgdGhhdC5fbDEyX2EpO1xuICAgIHgyID0gKHgyICogYiArIHRoYXQuX3gxICogdGhhdC5fbDIzXzJhIC0geCAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICAgIHkyID0gKHkyICogYiArIHRoYXQuX3kxICogdGhhdC5fbDIzXzJhIC0geSAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICB9XG5cbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgxLCB5MSwgeDIsIHkyLCB0aGF0Ll94MiwgdGhhdC5feTIpO1xufVxuXG5mdW5jdGlvbiBDYXRtdWxsUm9tKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbShjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWwoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vY3VydmUvbGluZWFyXCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gcG9pbnRYLFxuICAgICAgeSA9IHBvaW50WSxcbiAgICAgIGRlZmluZWQgPSBjb25zdGFudCh0cnVlKSxcbiAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgY3VydmUgPSBjdXJ2ZUxpbmVhcixcbiAgICAgIG91dHB1dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbGluZShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZCxcbiAgICAgICAgZGVmaW5lZDAgPSBmYWxzZSxcbiAgICAgICAgYnVmZmVyO1xuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgb3V0cHV0ID0gY3VydmUoYnVmZmVyID0gcGF0aCgpKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgKytpKSB7XG4gICAgICBpZiAoIShpIDwgbiAmJiBkZWZpbmVkKGQgPSBkYXRhW2ldLCBpLCBkYXRhKSkgPT09IGRlZmluZWQwKSB7XG4gICAgICAgIGlmIChkZWZpbmVkMCA9ICFkZWZpbmVkMCkgb3V0cHV0LmxpbmVTdGFydCgpO1xuICAgICAgICBlbHNlIG91dHB1dC5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGVmaW5lZDApIG91dHB1dC5wb2ludCgreChkLCBpLCBkYXRhKSwgK3koZCwgaSwgZGF0YSkpO1xuICAgIH1cblxuICAgIGlmIChidWZmZXIpIHJldHVybiBvdXRwdXQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBsaW5lLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5lKSA6IHg7XG4gIH07XG5cbiAgbGluZS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluZSkgOiB5O1xuICB9O1xuXG4gIGxpbmUuZGVmaW5lZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkZWZpbmVkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBsaW5lKSA6IGRlZmluZWQ7XG4gIH07XG5cbiAgbGluZS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjdXJ2ZSA9IF8sIGNvbnRleHQgIT0gbnVsbCAmJiAob3V0cHV0ID0gY3VydmUoY29udGV4dCkpLCBsaW5lKSA6IGN1cnZlO1xuICB9O1xuXG4gIGxpbmUuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID09IG51bGwgPyBjb250ZXh0ID0gb3V0cHV0ID0gbnVsbCA6IG91dHB1dCA9IGN1cnZlKGNvbnRleHQgPSBfKSwgbGluZSkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBsaW5lO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgdmFyIHN1bXMgPSBzZXJpZXMubWFwKHN1bSk7XG4gIHJldHVybiBub25lKHNlcmllcykuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBzdW1zW2FdIC0gc3Vtc1tiXTsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0oc2VyaWVzKSB7XG4gIHZhciBzID0gMCwgaSA9IC0xLCBuID0gc2VyaWVzLmxlbmd0aCwgdjtcbiAgd2hpbGUgKCsraSA8IG4pIGlmICh2ID0gK3Nlcmllc1tpXVsxXSkgcyArPSB2O1xuICByZXR1cm4gcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvb3JkZXIvYXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIHgocCkge1xuICByZXR1cm4gcFswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkocCkge1xuICByZXR1cm4gcFsxXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZm9ybWF0TG9jYWxlIGZyb20gXCIuL2xvY2FsZVwiO1xuXG52YXIgbG9jYWxlO1xuZXhwb3J0IHZhciB0aW1lRm9ybWF0O1xuZXhwb3J0IHZhciB0aW1lUGFyc2U7XG5leHBvcnQgdmFyIHV0Y0Zvcm1hdDtcbmV4cG9ydCB2YXIgdXRjUGFyc2U7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICBkYXRlVGltZTogXCIleCwgJVhcIixcbiAgZGF0ZTogXCIlLW0vJS1kLyVZXCIsXG4gIHRpbWU6IFwiJS1JOiVNOiVTICVwXCIsXG4gIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICBzaG9ydERheXM6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgbW9udGhzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcbiAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIHRpbWVGb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICB0aW1lUGFyc2UgPSBsb2NhbGUucGFyc2U7XG4gIHV0Y0Zvcm1hdCA9IGxvY2FsZS51dGNGb3JtYXQ7XG4gIHV0Y1BhcnNlID0gbG9jYWxlLnV0Y1BhcnNlO1xuICByZXR1cm4gbG9jYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSW50ZXJ2YWxcbn0gZnJvbSBcIi4vc3JjL2ludGVydmFsXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZU1pbGxpc2Vjb25kLFxuICBtaWxsaXNlY29uZHMgYXMgdGltZU1pbGxpc2Vjb25kcyxcbiAgZGVmYXVsdCBhcyB1dGNNaWxsaXNlY29uZCxcbiAgbWlsbGlzZWNvbmRzIGFzIHV0Y01pbGxpc2Vjb25kc1xufSBmcm9tIFwiLi9zcmMvbWlsbGlzZWNvbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lU2Vjb25kLFxuICBzZWNvbmRzIGFzIHRpbWVTZWNvbmRzLFxuICBkZWZhdWx0IGFzIHV0Y1NlY29uZCxcbiAgc2Vjb25kcyBhcyB1dGNTZWNvbmRzXG59IGZyb20gXCIuL3NyYy9zZWNvbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTWludXRlLFxuICBtaW51dGVzIGFzIHRpbWVNaW51dGVzXG59IGZyb20gXCIuL3NyYy9taW51dGVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSG91cixcbiAgaG91cnMgYXMgdGltZUhvdXJzXG59IGZyb20gXCIuL3NyYy9ob3VyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZURheSxcbiAgZGF5cyBhcyB0aW1lRGF5c1xufSBmcm9tIFwiLi9zcmMvZGF5XCI7XG5cbmV4cG9ydCB7XG4gIHN1bmRheSBhcyB0aW1lV2VlayxcbiAgc3VuZGF5cyBhcyB0aW1lV2Vla3MsXG4gIHN1bmRheSBhcyB0aW1lU3VuZGF5LFxuICBzdW5kYXlzIGFzIHRpbWVTdW5kYXlzLFxuICBtb25kYXkgYXMgdGltZU1vbmRheSxcbiAgbW9uZGF5cyBhcyB0aW1lTW9uZGF5cyxcbiAgdHVlc2RheSBhcyB0aW1lVHVlc2RheSxcbiAgdHVlc2RheXMgYXMgdGltZVR1ZXNkYXlzLFxuICB3ZWRuZXNkYXkgYXMgdGltZVdlZG5lc2RheSxcbiAgd2VkbmVzZGF5cyBhcyB0aW1lV2VkbmVzZGF5cyxcbiAgdGh1cnNkYXkgYXMgdGltZVRodXJzZGF5LFxuICB0aHVyc2RheXMgYXMgdGltZVRodXJzZGF5cyxcbiAgZnJpZGF5IGFzIHRpbWVGcmlkYXksXG4gIGZyaWRheXMgYXMgdGltZUZyaWRheXMsXG4gIHNhdHVyZGF5IGFzIHRpbWVTYXR1cmRheSxcbiAgc2F0dXJkYXlzIGFzIHRpbWVTYXR1cmRheXNcbn0gZnJvbSBcIi4vc3JjL3dlZWtcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTW9udGgsXG4gIG1vbnRocyBhcyB0aW1lTW9udGhzXG59IGZyb20gXCIuL3NyYy9tb250aFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVZZWFyLFxuICB5ZWFycyBhcyB0aW1lWWVhcnNcbn0gZnJvbSBcIi4vc3JjL3llYXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNNaW51dGUsXG4gIHV0Y01pbnV0ZXMgYXMgdXRjTWludXRlc1xufSBmcm9tIFwiLi9zcmMvdXRjTWludXRlXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjSG91cixcbiAgdXRjSG91cnMgYXMgdXRjSG91cnNcbn0gZnJvbSBcIi4vc3JjL3V0Y0hvdXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNEYXksXG4gIHV0Y0RheXMgYXMgdXRjRGF5c1xufSBmcm9tIFwiLi9zcmMvdXRjRGF5XCI7XG5cbmV4cG9ydCB7XG4gIHV0Y1N1bmRheSBhcyB1dGNXZWVrLFxuICB1dGNTdW5kYXlzIGFzIHV0Y1dlZWtzLFxuICB1dGNTdW5kYXkgYXMgdXRjU3VuZGF5LFxuICB1dGNTdW5kYXlzIGFzIHV0Y1N1bmRheXMsXG4gIHV0Y01vbmRheSBhcyB1dGNNb25kYXksXG4gIHV0Y01vbmRheXMgYXMgdXRjTW9uZGF5cyxcbiAgdXRjVHVlc2RheSBhcyB1dGNUdWVzZGF5LFxuICB1dGNUdWVzZGF5cyBhcyB1dGNUdWVzZGF5cyxcbiAgdXRjV2VkbmVzZGF5IGFzIHV0Y1dlZG5lc2RheSxcbiAgdXRjV2VkbmVzZGF5cyBhcyB1dGNXZWRuZXNkYXlzLFxuICB1dGNUaHVyc2RheSBhcyB1dGNUaHVyc2RheSxcbiAgdXRjVGh1cnNkYXlzIGFzIHV0Y1RodXJzZGF5cyxcbiAgdXRjRnJpZGF5IGFzIHV0Y0ZyaWRheSxcbiAgdXRjRnJpZGF5cyBhcyB1dGNGcmlkYXlzLFxuICB1dGNTYXR1cmRheSBhcyB1dGNTYXR1cmRheSxcbiAgdXRjU2F0dXJkYXlzIGFzIHV0Y1NhdHVyZGF5c1xufSBmcm9tIFwiLi9zcmMvdXRjV2Vla1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y01vbnRoLFxuICB1dGNNb250aHMgYXMgdXRjTW9udGhzXG59IGZyb20gXCIuL3NyYy91dGNNb250aFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y1llYXIsXG4gIHV0Y1llYXJzIGFzIHV0Y1llYXJzXG59IGZyb20gXCIuL3NyYy91dGNZZWFyXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hvbWV3b3JrMi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZXdvcmsyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21ld29yazIuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9ob21ld29yazIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgdmFyIGRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IHZhciByYWQyZGVnID0gMTgwIC8gTWF0aC5QSTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9zcmMvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7XG4gIGxpbmVhciBhcyBlYXNlTGluZWFyXG59IGZyb20gXCIuL3NyYy9saW5lYXJcIjtcblxuZXhwb3J0IHtcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkLFxuICBxdWFkSW4gYXMgZWFzZVF1YWRJbixcbiAgcXVhZE91dCBhcyBlYXNlUXVhZE91dCxcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkSW5PdXRcbn0gZnJvbSBcIi4vc3JjL3F1YWRcIjtcblxuZXhwb3J0IHtcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWMsXG4gIGN1YmljSW4gYXMgZWFzZUN1YmljSW4sXG4gIGN1YmljT3V0IGFzIGVhc2VDdWJpY091dCxcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWNJbk91dFxufSBmcm9tIFwiLi9zcmMvY3ViaWNcIjtcblxuZXhwb3J0IHtcbiAgcG9seUluT3V0IGFzIGVhc2VQb2x5LFxuICBwb2x5SW4gYXMgZWFzZVBvbHlJbixcbiAgcG9seU91dCBhcyBlYXNlUG9seU91dCxcbiAgcG9seUluT3V0IGFzIGVhc2VQb2x5SW5PdXRcbn0gZnJvbSBcIi4vc3JjL3BvbHlcIjtcblxuZXhwb3J0IHtcbiAgc2luSW5PdXQgYXMgZWFzZVNpbixcbiAgc2luSW4gYXMgZWFzZVNpbkluLFxuICBzaW5PdXQgYXMgZWFzZVNpbk91dCxcbiAgc2luSW5PdXQgYXMgZWFzZVNpbkluT3V0XG59IGZyb20gXCIuL3NyYy9zaW5cIjtcblxuZXhwb3J0IHtcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cCxcbiAgZXhwSW4gYXMgZWFzZUV4cEluLFxuICBleHBPdXQgYXMgZWFzZUV4cE91dCxcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cEluT3V0XG59IGZyb20gXCIuL3NyYy9leHBcIjtcblxuZXhwb3J0IHtcbiAgY2lyY2xlSW5PdXQgYXMgZWFzZUNpcmNsZSxcbiAgY2lyY2xlSW4gYXMgZWFzZUNpcmNsZUluLFxuICBjaXJjbGVPdXQgYXMgZWFzZUNpcmNsZU91dCxcbiAgY2lyY2xlSW5PdXQgYXMgZWFzZUNpcmNsZUluT3V0XG59IGZyb20gXCIuL3NyYy9jaXJjbGVcIjtcblxuZXhwb3J0IHtcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2UsXG4gIGJvdW5jZUluIGFzIGVhc2VCb3VuY2VJbixcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2VPdXQsXG4gIGJvdW5jZUluT3V0IGFzIGVhc2VCb3VuY2VJbk91dFxufSBmcm9tIFwiLi9zcmMvYm91bmNlXCI7XG5cbmV4cG9ydCB7XG4gIGJhY2tJbk91dCBhcyBlYXNlQmFjayxcbiAgYmFja0luIGFzIGVhc2VCYWNrSW4sXG4gIGJhY2tPdXQgYXMgZWFzZUJhY2tPdXQsXG4gIGJhY2tJbk91dCBhcyBlYXNlQmFja0luT3V0XG59IGZyb20gXCIuL3NyYy9iYWNrXCI7XG5cbmV4cG9ydCB7XG4gIGVsYXN0aWNPdXQgYXMgZWFzZUVsYXN0aWMsXG4gIGVsYXN0aWNJbiBhcyBlYXNlRWxhc3RpY0luLFxuICBlbGFzdGljT3V0IGFzIGVhc2VFbGFzdGljT3V0LFxuICBlbGFzdGljSW5PdXQgYXMgZWFzZUVsYXN0aWNJbk91dFxufSBmcm9tIFwiLi9zcmMvZWxhc3RpY1wiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXNDbG9zZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0ge30sXG4gICAgICBjID0ge30sXG4gICAgICBrO1xuXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKSBhID0ge307XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSBiID0ge307XG5cbiAgZm9yIChrIGluIGIpIHtcbiAgICBpZiAoayBpbiBhKSB7XG4gICAgICBpW2tdID0gdmFsdWUoYVtrXSwgYltrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNba10gPSBiW2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZFwiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvcmdiLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUJhbmQsXG4gIHBvaW50IGFzIHNjYWxlUG9pbnRcbn0gZnJvbSBcIi4vc3JjL2JhbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUlkZW50aXR5XG59IGZyb20gXCIuL3NyYy9pZGVudGl0eVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlTGluZWFyXG59IGZyb20gXCIuL3NyYy9saW5lYXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxvZ1xufSBmcm9tIFwiLi9zcmMvbG9nXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVPcmRpbmFsLFxuICBpbXBsaWNpdCBhcyBzY2FsZUltcGxpY2l0XG59IGZyb20gXCIuL3NyYy9vcmRpbmFsXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVQb3csXG4gIHNxcnQgYXMgc2NhbGVTcXJ0XG59IGZyb20gXCIuL3NyYy9wb3dcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVF1YW50aWxlXG59IGZyb20gXCIuL3NyYy9xdWFudGlsZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlUXVhbnRpemVcbn0gZnJvbSBcIi4vc3JjL3F1YW50aXplXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVUaHJlc2hvbGRcbn0gZnJvbSBcIi4vc3JjL3RocmVzaG9sZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGltZVxufSBmcm9tIFwiLi9zcmMvdGltZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVXRjXG59IGZyb20gXCIuL3NyYy91dGNUaW1lXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NoZW1lQ2F0ZWdvcnkxMFxufSBmcm9tIFwiLi9zcmMvY2F0ZWdvcnkxMFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjaGVtZUNhdGVnb3J5MjBiXG59IGZyb20gXCIuL3NyYy9jYXRlZ29yeTIwYlwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjaGVtZUNhdGVnb3J5MjBjXG59IGZyb20gXCIuL3NyYy9jYXRlZ29yeTIwY1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjaGVtZUNhdGVnb3J5MjBcbn0gZnJvbSBcIi4vc3JjL2NhdGVnb3J5MjBcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeERlZmF1bHRcbn0gZnJvbSBcIi4vc3JjL2N1YmVoZWxpeFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIGludGVycG9sYXRlUmFpbmJvdyxcbiAgd2FybSBhcyBpbnRlcnBvbGF0ZVdhcm0sXG4gIGNvb2wgYXMgaW50ZXJwb2xhdGVDb29sXG59IGZyb20gXCIuL3NyYy9yYWluYm93XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgaW50ZXJwb2xhdGVWaXJpZGlzLFxuICBtYWdtYSBhcyBpbnRlcnBvbGF0ZU1hZ21hLFxuICBpbmZlcm5vIGFzIGludGVycG9sYXRlSW5mZXJubyxcbiAgcGxhc21hIGFzIGludGVycG9sYXRlUGxhc21hXG59IGZyb20gXCIuL3NyYy92aXJpZGlzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVTZXF1ZW50aWFsXG59IGZyb20gXCIuL3NyYy9zZXF1ZW50aWFsXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkb21haW4sIGludGVydmFsKSB7XG4gIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpO1xuXG4gIHZhciBpMCA9IDAsXG4gICAgICBpMSA9IGRvbWFpbi5sZW5ndGggLSAxLFxuICAgICAgeDAgPSBkb21haW5baTBdLFxuICAgICAgeDEgPSBkb21haW5baTFdLFxuICAgICAgdDtcblxuICBpZiAoeDEgPCB4MCkge1xuICAgIHQgPSBpMCwgaTAgPSBpMSwgaTEgPSB0O1xuICAgIHQgPSB4MCwgeDAgPSB4MSwgeDEgPSB0O1xuICB9XG5cbiAgZG9tYWluW2kwXSA9IGludGVydmFsLmZsb29yKHgwKTtcbiAgZG9tYWluW2kxXSA9IGludGVydmFsLmNlaWwoeDEpO1xuICByZXR1cm4gZG9tYWluO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9uaWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gK3g7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bWFwfSBmcm9tIFwiZDMtY29sbGVjdGlvblwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcblxuZXhwb3J0IHZhciBpbXBsaWNpdCA9IHtuYW1lOiBcImltcGxpY2l0XCJ9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRpbmFsKHJhbmdlKSB7XG4gIHZhciBpbmRleCA9IG1hcCgpLFxuICAgICAgZG9tYWluID0gW10sXG4gICAgICB1bmtub3duID0gaW1wbGljaXQ7XG5cbiAgcmFuZ2UgPSByYW5nZSA9PSBudWxsID8gW10gOiBzbGljZS5jYWxsKHJhbmdlKTtcblxuICBmdW5jdGlvbiBzY2FsZShkKSB7XG4gICAgdmFyIGtleSA9IGQgKyBcIlwiLCBpID0gaW5kZXguZ2V0KGtleSk7XG4gICAgaWYgKCFpKSB7XG4gICAgICBpZiAodW5rbm93biAhPT0gaW1wbGljaXQpIHJldHVybiB1bmtub3duO1xuICAgICAgaW5kZXguc2V0KGtleSwgaSA9IGRvbWFpbi5wdXNoKGQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlWyhpIC0gMSkgJSByYW5nZS5sZW5ndGhdO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbi5zbGljZSgpO1xuICAgIGRvbWFpbiA9IFtdLCBpbmRleCA9IG1hcCgpO1xuICAgIHZhciBpID0gLTEsIG4gPSBfLmxlbmd0aCwgZCwga2V5O1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWluZGV4LmhhcyhrZXkgPSAoZCA9IF9baV0pICsgXCJcIikpIGluZGV4LnNldChrZXksIGRvbWFpbi5wdXNoKGQpKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBvcmRpbmFsKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9vcmRpbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtiaXNlY3RvciwgdGlja1N0ZXB9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciBhcyByZWludGVycG9sYXRlfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7dGltZVllYXIsIHRpbWVNb250aCwgdGltZVdlZWssIHRpbWVEYXksIHRpbWVIb3VyLCB0aW1lTWludXRlLCB0aW1lU2Vjb25kLCB0aW1lTWlsbGlzZWNvbmR9IGZyb20gXCJkMy10aW1lXCI7XG5pbXBvcnQge3RpbWVGb3JtYXR9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGludW91cywgY29weSwgZGVpbnRlcnBvbGF0ZUxpbmVhciBhcyBkZWludGVycG9sYXRlfSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5pbXBvcnQgbmljZSBmcm9tIFwiLi9uaWNlXCI7XG5cbnZhciBkdXJhdGlvblNlY29uZCA9IDEwMDAsXG4gICAgZHVyYXRpb25NaW51dGUgPSBkdXJhdGlvblNlY29uZCAqIDYwLFxuICAgIGR1cmF0aW9uSG91ciA9IGR1cmF0aW9uTWludXRlICogNjAsXG4gICAgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNCxcbiAgICBkdXJhdGlvbldlZWsgPSBkdXJhdGlvbkRheSAqIDcsXG4gICAgZHVyYXRpb25Nb250aCA9IGR1cmF0aW9uRGF5ICogMzAsXG4gICAgZHVyYXRpb25ZZWFyID0gZHVyYXRpb25EYXkgKiAzNjU7XG5cbmZ1bmN0aW9uIGRhdGUodCkge1xuICByZXR1cm4gbmV3IERhdGUodCk7XG59XG5cbmZ1bmN0aW9uIG51bWJlcih0KSB7XG4gIHJldHVybiB0IGluc3RhbmNlb2YgRGF0ZSA/ICt0IDogK25ldyBEYXRlKCt0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyKHllYXIsIG1vbnRoLCB3ZWVrLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgZm9ybWF0KSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSksXG4gICAgICBpbnZlcnQgPSBzY2FsZS5pbnZlcnQsXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW47XG5cbiAgdmFyIGZvcm1hdE1pbGxpc2Vjb25kID0gZm9ybWF0KFwiLiVMXCIpLFxuICAgICAgZm9ybWF0U2Vjb25kID0gZm9ybWF0KFwiOiVTXCIpLFxuICAgICAgZm9ybWF0TWludXRlID0gZm9ybWF0KFwiJUk6JU1cIiksXG4gICAgICBmb3JtYXRIb3VyID0gZm9ybWF0KFwiJUkgJXBcIiksXG4gICAgICBmb3JtYXREYXkgPSBmb3JtYXQoXCIlYSAlZFwiKSxcbiAgICAgIGZvcm1hdFdlZWsgPSBmb3JtYXQoXCIlYiAlZFwiKSxcbiAgICAgIGZvcm1hdE1vbnRoID0gZm9ybWF0KFwiJUJcIiksXG4gICAgICBmb3JtYXRZZWFyID0gZm9ybWF0KFwiJVlcIik7XG5cbiAgdmFyIHRpY2tJbnRlcnZhbHMgPSBbXG4gICAgW3NlY29uZCwgIDEsICAgICAgZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsICA1LCAgNSAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAxNSwgMTUgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgMzAsIDMwICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFttaW51dGUsICAxLCAgICAgIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAgNSwgIDUgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgMTUsIDE1ICogZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsIDMwLCAzMCAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbICBob3VyLCAgMSwgICAgICBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgIDMsICAzICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsICA2LCAgNiAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAxMiwgMTIgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgIGRheSwgIDEsICAgICAgZHVyYXRpb25EYXkgICBdLFxuICAgIFsgICBkYXksICAyLCAgMiAqIGR1cmF0aW9uRGF5ICAgXSxcbiAgICBbICB3ZWVrLCAgMSwgICAgICBkdXJhdGlvbldlZWsgIF0sXG4gICAgWyBtb250aCwgIDEsICAgICAgZHVyYXRpb25Nb250aCBdLFxuICAgIFsgbW9udGgsICAzLCAgMyAqIGR1cmF0aW9uTW9udGggXSxcbiAgICBbICB5ZWFyLCAgMSwgICAgICBkdXJhdGlvblllYXIgIF1cbiAgXTtcblxuICBmdW5jdGlvbiB0aWNrRm9ybWF0KGRhdGUpIHtcbiAgICByZXR1cm4gKHNlY29uZChkYXRlKSA8IGRhdGUgPyBmb3JtYXRNaWxsaXNlY29uZFxuICAgICAgICA6IG1pbnV0ZShkYXRlKSA8IGRhdGUgPyBmb3JtYXRTZWNvbmRcbiAgICAgICAgOiBob3VyKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdE1pbnV0ZVxuICAgICAgICA6IGRheShkYXRlKSA8IGRhdGUgPyBmb3JtYXRIb3VyXG4gICAgICAgIDogbW9udGgoZGF0ZSkgPCBkYXRlID8gKHdlZWsoZGF0ZSkgPCBkYXRlID8gZm9ybWF0RGF5IDogZm9ybWF0V2VlaylcbiAgICAgICAgOiB5ZWFyKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdE1vbnRoXG4gICAgICAgIDogZm9ybWF0WWVhcikoZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrSW50ZXJ2YWwoaW50ZXJ2YWwsIHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKGludGVydmFsID09IG51bGwpIGludGVydmFsID0gMTA7XG5cbiAgICAvLyBJZiBhIGRlc2lyZWQgdGljayBjb3VudCBpcyBzcGVjaWZpZWQsIHBpY2sgYSByZWFzb25hYmxlIHRpY2sgaW50ZXJ2YWxcbiAgICAvLyBiYXNlZCBvbiB0aGUgZXh0ZW50IG9mIHRoZSBkb21haW4gYW5kIGEgcm91Z2ggZXN0aW1hdGUgb2YgdGljayBzaXplLlxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGludGVydmFsIGlzIGFscmVhZHkgYSB0aW1lIGludGVydmFsIGFuZCB1c2UgaXQuXG4gICAgaWYgKHR5cGVvZiBpbnRlcnZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdmFyIHRhcmdldCA9IE1hdGguYWJzKHN0b3AgLSBzdGFydCkgLyBpbnRlcnZhbCxcbiAgICAgICAgICBpID0gYmlzZWN0b3IoZnVuY3Rpb24oaSkgeyByZXR1cm4gaVsyXTsgfSkucmlnaHQodGlja0ludGVydmFscywgdGFyZ2V0KTtcbiAgICAgIGlmIChpID09PSB0aWNrSW50ZXJ2YWxzLmxlbmd0aCkge1xuICAgICAgICBzdGVwID0gdGlja1N0ZXAoc3RhcnQgLyBkdXJhdGlvblllYXIsIHN0b3AgLyBkdXJhdGlvblllYXIsIGludGVydmFsKTtcbiAgICAgICAgaW50ZXJ2YWwgPSB5ZWFyO1xuICAgICAgfSBlbHNlIGlmIChpKSB7XG4gICAgICAgIGkgPSB0aWNrSW50ZXJ2YWxzW3RhcmdldCAvIHRpY2tJbnRlcnZhbHNbaSAtIDFdWzJdIDwgdGlja0ludGVydmFsc1tpXVsyXSAvIHRhcmdldCA/IGkgLSAxIDogaV07XG4gICAgICAgIHN0ZXAgPSBpWzFdO1xuICAgICAgICBpbnRlcnZhbCA9IGlbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwID0gTWF0aC5tYXgodGlja1N0ZXAoc3RhcnQsIHN0b3AsIGludGVydmFsKSwgMSk7XG4gICAgICAgIGludGVydmFsID0gbWlsbGlzZWNvbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXAgPT0gbnVsbCA/IGludGVydmFsIDogaW50ZXJ2YWwuZXZlcnkoc3RlcCk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGludmVydCh5KSk7XG4gIH07XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gZG9tYWluKG1hcC5jYWxsKF8sIG51bWJlcikpIDogZG9tYWluKCkubWFwKGRhdGUpO1xuICB9O1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHN0ZXApIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpLFxuICAgICAgICB0MCA9IGRbMF0sXG4gICAgICAgIHQxID0gZFtkLmxlbmd0aCAtIDFdLFxuICAgICAgICByID0gdDEgPCB0MCxcbiAgICAgICAgdDtcbiAgICBpZiAocikgdCA9IHQwLCB0MCA9IHQxLCB0MSA9IHQ7XG4gICAgdCA9IHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgdDAsIHQxLCBzdGVwKTtcbiAgICB0ID0gdCA/IHQucmFuZ2UodDAsIHQxICsgMSkgOiBbXTsgLy8gaW5jbHVzaXZlIHN0b3BcbiAgICByZXR1cm4gciA/IHQucmV2ZXJzZSgpIDogdDtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHJldHVybiBzcGVjaWZpZXIgPT0gbnVsbCA/IHRpY2tGb3JtYXQgOiBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHN0ZXApIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiAoaW50ZXJ2YWwgPSB0aWNrSW50ZXJ2YWwoaW50ZXJ2YWwsIGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgc3RlcCkpXG4gICAgICAgID8gZG9tYWluKG5pY2UoZCwgaW50ZXJ2YWwpKVxuICAgICAgICA6IHNjYWxlO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgY2FsZW5kYXIoeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCBmb3JtYXQpKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY2FsZW5kYXIodGltZVllYXIsIHRpbWVNb250aCwgdGltZVdlZWssIHRpbWVEYXksIHRpbWVIb3VyLCB0aW1lTWludXRlLCB0aW1lU2Vjb25kLCB0aW1lTWlsbGlzZWNvbmQsIHRpbWVGb3JtYXQpLmRvbWFpbihbbmV3IERhdGUoMjAwMCwgMCwgMSksIG5ldyBEYXRlKDIwMDAsIDAsIDIpXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3RpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBjdXJ2ZUxpbmVhciBmcm9tIFwiLi9jdXJ2ZS9saW5lYXJcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmVcIjtcbmltcG9ydCB7eCBhcyBwb2ludFgsIHkgYXMgcG9pbnRZfSBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHgwID0gcG9pbnRYLFxuICAgICAgeDEgPSBudWxsLFxuICAgICAgeTAgPSBjb25zdGFudCgwKSxcbiAgICAgIHkxID0gcG9pbnRZLFxuICAgICAgZGVmaW5lZCA9IGNvbnN0YW50KHRydWUpLFxuICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICBjdXJ2ZSA9IGN1cnZlTGluZWFyLFxuICAgICAgb3V0cHV0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBhcmVhKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgaixcbiAgICAgICAgayxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBkLFxuICAgICAgICBkZWZpbmVkMCA9IGZhbHNlLFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHgweiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgeTB6ID0gbmV3IEFycmF5KG4pO1xuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgb3V0cHV0ID0gY3VydmUoYnVmZmVyID0gcGF0aCgpKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgKytpKSB7XG4gICAgICBpZiAoIShpIDwgbiAmJiBkZWZpbmVkKGQgPSBkYXRhW2ldLCBpLCBkYXRhKSkgPT09IGRlZmluZWQwKSB7XG4gICAgICAgIGlmIChkZWZpbmVkMCA9ICFkZWZpbmVkMCkge1xuICAgICAgICAgIGogPSBpO1xuICAgICAgICAgIG91dHB1dC5hcmVhU3RhcnQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0LmxpbmVFbmQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgICAgZm9yIChrID0gaSAtIDE7IGsgPj0gajsgLS1rKSB7XG4gICAgICAgICAgICBvdXRwdXQucG9pbnQoeDB6W2tdLCB5MHpba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5hcmVhRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZWZpbmVkMCkge1xuICAgICAgICB4MHpbaV0gPSAreDAoZCwgaSwgZGF0YSksIHkweltpXSA9ICt5MChkLCBpLCBkYXRhKTtcbiAgICAgICAgb3V0cHV0LnBvaW50KHgxID8gK3gxKGQsIGksIGRhdGEpIDogeDB6W2ldLCB5MSA/ICt5MShkLCBpLCBkYXRhKSA6IHkweltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIG91dHB1dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZWFsaW5lKCkge1xuICAgIHJldHVybiBsaW5lKCkuZGVmaW5lZChkZWZpbmVkKS5jdXJ2ZShjdXJ2ZSkuY29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGFyZWEueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCB4MSA9IG51bGwsIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHgwO1xuICB9O1xuXG4gIGFyZWEueDEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDEgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDE7XG4gIH07XG5cbiAgYXJlYS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHkxID0gbnVsbCwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeTA7XG4gIH07XG5cbiAgYXJlYS55MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMCA9XG4gIGFyZWEubGluZVkwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MCkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5saW5lWTEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkxKTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDEpLnkoeTApO1xuICB9O1xuXG4gIGFyZWEuZGVmaW5lZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkZWZpbmVkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBhcmVhKSA6IGRlZmluZWQ7XG4gIH07XG5cbiAgYXJlYS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjdXJ2ZSA9IF8sIGNvbnRleHQgIT0gbnVsbCAmJiAob3V0cHV0ID0gY3VydmUoY29udGV4dCkpLCBhcmVhKSA6IGN1cnZlO1xuICB9O1xuXG4gIGFyZWEuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID09IG51bGwgPyBjb250ZXh0ID0gb3V0cHV0ID0gbnVsbCA6IG91dHB1dCA9IGN1cnZlKGNvbnRleHQgPSBfKSwgYXJlYSkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmVhO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9hcmVhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcFwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2FyZGluYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIHRlbnNpb24pIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2sgPSAoMSAtIHRlbnNpb24pIC8gNjtcbn1cblxuQ2FyZGluYWxDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9IHRoaXMuX3g1ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gdGhpcy5feTUgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g0LCB0aGlzLl95NCk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDUsIHRoaXMuX3k1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHkpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NSA9IHgsIHRoaXMuX3k1ID0geTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWxDbG9zZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXJkaW5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWxPcGVuKGNvbnRleHQsIHRlbnNpb24pIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2sgPSAoMSAtIHRlbnNpb24pIC8gNjtcbn1cblxuQ2FyZGluYWxPcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAzKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMuX3BvaW50ID0gNDsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKHRlbnNpb24pIHtcblxuICBmdW5jdGlvbiBjYXJkaW5hbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBDYXJkaW5hbE9wZW4oY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbE9wZW4uanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCB2YXIgY3VydmVSYWRpYWxMaW5lYXIgPSBjdXJ2ZVJhZGlhbChjdXJ2ZUxpbmVhcik7XG5cbmZ1bmN0aW9uIFJhZGlhbChjdXJ2ZSkge1xuICB0aGlzLl9jdXJ2ZSA9IGN1cnZlO1xufVxuXG5SYWRpYWwucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmFyZWFTdGFydCgpO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5hcmVhRW5kKCk7XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmxpbmVFbmQoKTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKGEsIHIpIHtcbiAgICB0aGlzLl9jdXJ2ZS5wb2ludChyICogTWF0aC5zaW4oYSksIHIgKiAtTWF0aC5jb3MoYSkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJ2ZVJhZGlhbChjdXJ2ZSkge1xuXG4gIGZ1bmN0aW9uIHJhZGlhbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBSYWRpYWwoY3VydmUoY29udGV4dCkpO1xuICB9XG5cbiAgcmFkaWFsLl9jdXJ2ZSA9IGN1cnZlO1xuXG4gIHJldHVybiByYWRpYWw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL3JhZGlhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjdXJ2ZVJhZGlhbCwge2N1cnZlUmFkaWFsTGluZWFyfSBmcm9tIFwiLi9jdXJ2ZS9yYWRpYWxcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSYWRpYWwobCkge1xuICB2YXIgYyA9IGwuY3VydmU7XG5cbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG5cbiAgbC5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGMoY3VydmVSYWRpYWwoXykpIDogYygpLl9jdXJ2ZTtcbiAgfTtcblxuICByZXR1cm4gbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBsaW5lUmFkaWFsKGxpbmUoKS5jdXJ2ZShjdXJ2ZVJhZGlhbExpbmVhcikpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9saW5lUmFkaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gWyh5ID0gK3kpICogTWF0aC5jb3MoeCAtPSBNYXRoLlBJIC8gMiksIHkgKiBNYXRoLnNpbih4KV07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL3BvaW50UmFkaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwaSwgdGF1fSBmcm9tIFwiLi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gcGkpO1xuICAgIGNvbnRleHQubW92ZVRvKHIsIDApO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIHIsIDAsIHRhdSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL3N5bWJvbC9jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gNSkgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKC0zICogciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIC0zICogcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgLTMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oMyAqIHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygzICogciwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAzICogcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC0zICogciwgcik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL2Nyb3NzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRhbjMwID0gTWF0aC5zcXJ0KDEgLyAzKSxcbiAgICB0YW4zMF8yID0gdGFuMzAgKiAyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgeSA9IE1hdGguc3FydChzaXplIC8gdGFuMzBfMiksXG4gICAgICAgIHggPSB5ICogdGFuMzA7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXkpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIDApO1xuICAgIGNvbnRleHQubGluZVRvKDAsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKC14LCAwKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvZGlhbW9uZC5qc1xuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB3ID0gTWF0aC5zcXJ0KHNpemUpLFxuICAgICAgICB4ID0gLXcgLyAyO1xuICAgIGNvbnRleHQucmVjdCh4LCB4LCB3LCB3KTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvc3ltYm9sL3NxdWFyZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7cGksIHRhdX0gZnJvbSBcIi4uL21hdGhcIjtcblxudmFyIGthID0gMC44OTA4MTMwOTE1MjkyODUyMjgxMCxcbiAgICBrciA9IE1hdGguc2luKHBpIC8gMTApIC8gTWF0aC5zaW4oNyAqIHBpIC8gMTApLFxuICAgIGt4ID0gTWF0aC5zaW4odGF1IC8gMTApICoga3IsXG4gICAga3kgPSAtTWF0aC5jb3ModGF1IC8gMTApICoga3I7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgKiBrYSksXG4gICAgICAgIHggPSBreCAqIHIsXG4gICAgICAgIHkgPSBreSAqIHI7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgKytpKSB7XG4gICAgICB2YXIgYSA9IHRhdSAqIGkgLyA1LFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKSxcbiAgICAgICAgICBzID0gTWF0aC5zaW4oYSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhzICogciwgLWMgKiByKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvc3Rhci5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzcXJ0MyA9IE1hdGguc3FydCgzKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHkgPSAtTWF0aC5zcXJ0KHNpemUgLyAoc3FydDMgKiAzKSk7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgeSAqIDIpO1xuICAgIGNvbnRleHQubGluZVRvKC1zcXJ0MyAqIHksIC15KTtcbiAgICBjb250ZXh0LmxpbmVUbyhzcXJ0MyAqIHksIC15KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wvdHJpYW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYyA9IC0wLjUsXG4gICAgcyA9IE1hdGguc3FydCgzKSAvIDIsXG4gICAgayA9IDEgLyBNYXRoLnNxcnQoMTIpLFxuICAgIGEgPSAoayAvIDIgKyAxKSAqIDM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyBhKSxcbiAgICAgICAgeDAgPSByIC8gMixcbiAgICAgICAgeTAgPSByICogayxcbiAgICAgICAgeDEgPSB4MCxcbiAgICAgICAgeTEgPSByICogayArIHIsXG4gICAgICAgIHgyID0gLXgxLFxuICAgICAgICB5MiA9IHkxO1xuICAgIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gICAgY29udGV4dC5saW5lVG8oeDEsIHkxKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCAtIHMgKiB5MCwgcyAqIHgwICsgYyAqIHkwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgLSBzICogeTEsIHMgKiB4MSArIGMgKiB5MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyIC0gcyAqIHkyLCBzICogeDIgKyBjICogeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCArIHMgKiB5MCwgYyAqIHkwIC0gcyAqIHgwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgKyBzICogeTEsIGMgKiB5MSAtIHMgKiB4MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyICsgcyAqIHkyLCBjICogeTIgLSBzICogeDIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL3N5bWJvbC93eWUuanNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3V0Y0Zvcm1hdH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZVwiO1xuXG5leHBvcnQgdmFyIGlzb1NwZWNpZmllciA9IFwiJVktJW0tJWRUJUg6JU06JVMuJUxaXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdElzb05hdGl2ZShkYXRlKSB7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbnZhciBmb3JtYXRJc28gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZ1xuICAgID8gZm9ybWF0SXNvTmF0aXZlXG4gICAgOiB1dGNGb3JtYXQoaXNvU3BlY2lmaWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0SXNvO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9pc29Gb3JtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICB0aW1lRGF5LFxuICB0aW1lU3VuZGF5LFxuICB0aW1lTW9uZGF5LFxuICB0aW1lVGh1cnNkYXksXG4gIHRpbWVZZWFyLFxuICB1dGNEYXksXG4gIHV0Y1N1bmRheSxcbiAgdXRjTW9uZGF5LFxuICB1dGNUaHVyc2RheSxcbiAgdXRjWWVhclxufSBmcm9tIFwiZDMtdGltZVwiO1xuXG5mdW5jdGlvbiBsb2NhbERhdGUoZCkge1xuICBpZiAoMCA8PSBkLnkgJiYgZC55IDwgMTAwKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCk7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkLnkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xufVxuXG5mdW5jdGlvbiB1dGNEYXRlKGQpIHtcbiAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGQueSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGQueSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xufVxuXG5mdW5jdGlvbiBuZXdZZWFyKHkpIHtcbiAgcmV0dXJuIHt5OiB5LCBtOiAwLCBkOiAxLCBIOiAwLCBNOiAwLCBTOiAwLCBMOiAwfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9jYWxlKGxvY2FsZSkge1xuICB2YXIgbG9jYWxlX2RhdGVUaW1lID0gbG9jYWxlLmRhdGVUaW1lLFxuICAgICAgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSxcbiAgICAgIGxvY2FsZV90aW1lID0gbG9jYWxlLnRpbWUsXG4gICAgICBsb2NhbGVfcGVyaW9kcyA9IGxvY2FsZS5wZXJpb2RzLFxuICAgICAgbG9jYWxlX3dlZWtkYXlzID0gbG9jYWxlLmRheXMsXG4gICAgICBsb2NhbGVfc2hvcnRXZWVrZGF5cyA9IGxvY2FsZS5zaG9ydERheXMsXG4gICAgICBsb2NhbGVfbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgIGxvY2FsZV9zaG9ydE1vbnRocyA9IGxvY2FsZS5zaG9ydE1vbnRocztcblxuICB2YXIgcGVyaW9kUmUgPSBmb3JtYXRSZShsb2NhbGVfcGVyaW9kcyksXG4gICAgICBwZXJpb2RMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgd2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHNob3J0V2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgc2hvcnRXZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydFdlZWtkYXlzKSxcbiAgICAgIG1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfbW9udGhzKSxcbiAgICAgIG1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9tb250aHMpLFxuICAgICAgc2hvcnRNb250aFJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0TW9udGhzKSxcbiAgICAgIHNob3J0TW9udGhMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0TW9udGhzKTtcblxuICB2YXIgZm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0TWljcm9zZWNvbmRzLFxuICAgIFwiSFwiOiBmb3JtYXRIb3VyMjQsXG4gICAgXCJJXCI6IGZvcm1hdEhvdXIxMixcbiAgICBcImpcIjogZm9ybWF0RGF5T2ZZZWFyLFxuICAgIFwiTFwiOiBmb3JtYXRNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IGZvcm1hdE1vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBmb3JtYXRNaW51dGVzLFxuICAgIFwicFwiOiBmb3JtYXRQZXJpb2QsXG4gICAgXCJRXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXAsXG4gICAgXCJzXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzLFxuICAgIFwiU1wiOiBmb3JtYXRTZWNvbmRzLFxuICAgIFwidVwiOiBmb3JtYXRXZWVrZGF5TnVtYmVyTW9uZGF5LFxuICAgIFwiVVwiOiBmb3JtYXRXZWVrTnVtYmVyU3VuZGF5LFxuICAgIFwiVlwiOiBmb3JtYXRXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBmb3JtYXRXZWVrZGF5TnVtYmVyU3VuZGF5LFxuICAgIFwiV1wiOiBmb3JtYXRXZWVrTnVtYmVyTW9uZGF5LFxuICAgIFwieFwiOiBudWxsLFxuICAgIFwiWFwiOiBudWxsLFxuICAgIFwieVwiOiBmb3JtYXRZZWFyLFxuICAgIFwiWVwiOiBmb3JtYXRGdWxsWWVhcixcbiAgICBcIlpcIjogZm9ybWF0Wm9uZSxcbiAgICBcIiVcIjogZm9ybWF0TGl0ZXJhbFBlcmNlbnRcbiAgfTtcblxuICB2YXIgdXRjRm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0VVRDU2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRVVENXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRVVENTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRVVENNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0VVRDRGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0VVRDRGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0VVRDTWljcm9zZWNvbmRzLFxuICAgIFwiSFwiOiBmb3JtYXRVVENIb3VyMjQsXG4gICAgXCJJXCI6IGZvcm1hdFVUQ0hvdXIxMixcbiAgICBcImpcIjogZm9ybWF0VVRDRGF5T2ZZZWFyLFxuICAgIFwiTFwiOiBmb3JtYXRVVENNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IGZvcm1hdFVUQ01vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBmb3JtYXRVVENNaW51dGVzLFxuICAgIFwicFwiOiBmb3JtYXRVVENQZXJpb2QsXG4gICAgXCJRXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXAsXG4gICAgXCJzXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzLFxuICAgIFwiU1wiOiBmb3JtYXRVVENTZWNvbmRzLFxuICAgIFwidVwiOiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyTW9uZGF5LFxuICAgIFwiVVwiOiBmb3JtYXRVVENXZWVrTnVtYmVyU3VuZGF5LFxuICAgIFwiVlwiOiBmb3JtYXRVVENXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyU3VuZGF5LFxuICAgIFwiV1wiOiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5LFxuICAgIFwieFwiOiBudWxsLFxuICAgIFwiWFwiOiBudWxsLFxuICAgIFwieVwiOiBmb3JtYXRVVENZZWFyLFxuICAgIFwiWVwiOiBmb3JtYXRVVENGdWxsWWVhcixcbiAgICBcIlpcIjogZm9ybWF0VVRDWm9uZSxcbiAgICBcIiVcIjogZm9ybWF0TGl0ZXJhbFBlcmNlbnRcbiAgfTtcblxuICB2YXIgcGFyc2VzID0ge1xuICAgIFwiYVwiOiBwYXJzZVNob3J0V2Vla2RheSxcbiAgICBcIkFcIjogcGFyc2VXZWVrZGF5LFxuICAgIFwiYlwiOiBwYXJzZVNob3J0TW9udGgsXG4gICAgXCJCXCI6IHBhcnNlTW9udGgsXG4gICAgXCJjXCI6IHBhcnNlTG9jYWxlRGF0ZVRpbWUsXG4gICAgXCJkXCI6IHBhcnNlRGF5T2ZNb250aCxcbiAgICBcImVcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgIFwiZlwiOiBwYXJzZU1pY3Jvc2Vjb25kcyxcbiAgICBcIkhcIjogcGFyc2VIb3VyMjQsXG4gICAgXCJJXCI6IHBhcnNlSG91cjI0LFxuICAgIFwialwiOiBwYXJzZURheU9mWWVhcixcbiAgICBcIkxcIjogcGFyc2VNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IHBhcnNlTW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IHBhcnNlTWludXRlcyxcbiAgICBcInBcIjogcGFyc2VQZXJpb2QsXG4gICAgXCJRXCI6IHBhcnNlVW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogcGFyc2VTZWNvbmRzLFxuICAgIFwidVwiOiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IHBhcnNlV2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogcGFyc2VXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBwYXJzZVdlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IHBhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogcGFyc2VMb2NhbGVEYXRlLFxuICAgIFwiWFwiOiBwYXJzZUxvY2FsZVRpbWUsXG4gICAgXCJ5XCI6IHBhcnNlWWVhcixcbiAgICBcIllcIjogcGFyc2VGdWxsWWVhcixcbiAgICBcIlpcIjogcGFyc2Vab25lLFxuICAgIFwiJVwiOiBwYXJzZUxpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgLy8gVGhlc2UgcmVjdXJzaXZlIGRpcmVjdGl2ZSBkZWZpbml0aW9ucyBtdXN0IGJlIGRlZmVycmVkLlxuICBmb3JtYXRzLnggPSBuZXdGb3JtYXQobG9jYWxlX2RhdGUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCBmb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5jID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlVGltZSwgdXRjRm9ybWF0cyk7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllciwgZm9ybWF0cykge1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW10sXG4gICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgcGFkLFxuICAgICAgICAgIGZvcm1hdDtcblxuICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSBkYXRlID0gbmV3IERhdGUoK2RhdGUpO1xuXG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSkgPT09IDM3KSB7XG4gICAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgICBpZiAoKHBhZCA9IHBhZHNbYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKV0pICE9IG51bGwpIGMgPSBzcGVjaWZpZXIuY2hhckF0KCsraSk7XG4gICAgICAgICAgZWxzZSBwYWQgPSBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCI7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9IGZvcm1hdHNbY10pIGMgPSBmb3JtYXQoZGF0ZSwgcGFkKTtcbiAgICAgICAgICBzdHJpbmcucHVzaChjKTtcbiAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3UGFyc2Uoc3BlY2lmaWVyLCBuZXdEYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdmFyIGQgPSBuZXdZZWFyKDE5MDApLFxuICAgICAgICAgIGkgPSBwYXJzZVNwZWNpZmllcihkLCBzcGVjaWZpZXIsIHN0cmluZyArPSBcIlwiLCAwKSxcbiAgICAgICAgICB3ZWVrLCBkYXk7XG4gICAgICBpZiAoaSAhPSBzdHJpbmcubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gSWYgYSBVTklYIHRpbWVzdGFtcCBpcyBzcGVjaWZpZWQsIHJldHVybiBpdC5cbiAgICAgIGlmIChcIlFcIiBpbiBkKSByZXR1cm4gbmV3IERhdGUoZC5RKTtcblxuICAgICAgLy8gVGhlIGFtLXBtIGZsYWcgaXMgMCBmb3IgQU0sIGFuZCAxIGZvciBQTS5cbiAgICAgIGlmIChcInBcIiBpbiBkKSBkLkggPSBkLkggJSAxMiArIGQucCAqIDEyO1xuXG4gICAgICAvLyBDb252ZXJ0IGRheS1vZi13ZWVrIGFuZCB3ZWVrLW9mLXllYXIgdG8gZGF5LW9mLXllYXIuXG4gICAgICBpZiAoXCJWXCIgaW4gZCkge1xuICAgICAgICBpZiAoZC5WIDwgMSB8fCBkLlYgPiA1MykgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghKFwid1wiIGluIGQpKSBkLncgPSAxO1xuICAgICAgICBpZiAoXCJaXCIgaW4gZCkge1xuICAgICAgICAgIHdlZWsgPSB1dGNEYXRlKG5ld1llYXIoZC55KSksIGRheSA9IHdlZWsuZ2V0VVRDRGF5KCk7XG4gICAgICAgICAgd2VlayA9IGRheSA+IDQgfHwgZGF5ID09PSAwID8gdXRjTW9uZGF5LmNlaWwod2VlaykgOiB1dGNNb25kYXkod2Vlayk7XG4gICAgICAgICAgd2VlayA9IHV0Y0RheS5vZmZzZXQod2VlaywgKGQuViAtIDEpICogNyk7XG4gICAgICAgICAgZC55ID0gd2Vlay5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgIGQubSA9IHdlZWsuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICBkLmQgPSB3ZWVrLmdldFVUQ0RhdGUoKSArIChkLncgKyA2KSAlIDc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VlayA9IG5ld0RhdGUobmV3WWVhcihkLnkpKSwgZGF5ID0gd2Vlay5nZXREYXkoKTtcbiAgICAgICAgICB3ZWVrID0gZGF5ID4gNCB8fCBkYXkgPT09IDAgPyB0aW1lTW9uZGF5LmNlaWwod2VlaykgOiB0aW1lTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB0aW1lRGF5Lm9mZnNldCh3ZWVrLCAoZC5WIC0gMSkgKiA3KTtcbiAgICAgICAgICBkLnkgPSB3ZWVrLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgZC5tID0gd2Vlay5nZXRNb250aCgpO1xuICAgICAgICAgIGQuZCA9IHdlZWsuZ2V0RGF0ZSgpICsgKGQudyArIDYpICUgNztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcIldcIiBpbiBkIHx8IFwiVVwiIGluIGQpIHtcbiAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IFwidVwiIGluIGQgPyBkLnUgJSA3IDogXCJXXCIgaW4gZCA/IDEgOiAwO1xuICAgICAgICBkYXkgPSBcIlpcIiBpbiBkID8gdXRjRGF0ZShuZXdZZWFyKGQueSkpLmdldFVUQ0RheSgpIDogbmV3RGF0ZShuZXdZZWFyKGQueSkpLmdldERheSgpO1xuICAgICAgICBkLm0gPSAwO1xuICAgICAgICBkLmQgPSBcIldcIiBpbiBkID8gKGQudyArIDYpICUgNyArIGQuVyAqIDcgLSAoZGF5ICsgNSkgJSA3IDogZC53ICsgZC5VICogNyAtIChkYXkgKyA2KSAlIDc7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgdGltZSB6b25lIGlzIHNwZWNpZmllZCwgYWxsIGZpZWxkcyBhcmUgaW50ZXJwcmV0ZWQgYXMgVVRDIGFuZCB0aGVuXG4gICAgICAvLyBvZmZzZXQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgdGltZSB6b25lLlxuICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgZC5IICs9IGQuWiAvIDEwMCB8IDA7XG4gICAgICAgIGQuTSArPSBkLlogJSAxMDA7XG4gICAgICAgIHJldHVybiB1dGNEYXRlKGQpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGFsbCBmaWVsZHMgYXJlIGluIGxvY2FsIHRpbWUuXG4gICAgICByZXR1cm4gbmV3RGF0ZShkKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTcGVjaWZpZXIoZCwgc3BlY2lmaWVyLCBzdHJpbmcsIGopIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICBtID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgYyxcbiAgICAgICAgcGFyc2U7XG5cbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgIGlmIChqID49IG0pIHJldHVybiAtMTtcbiAgICAgIGMgPSBzcGVjaWZpZXIuY2hhckNvZGVBdChpKyspO1xuICAgICAgaWYgKGMgPT09IDM3KSB7XG4gICAgICAgIGMgPSBzcGVjaWZpZXIuY2hhckF0KGkrKyk7XG4gICAgICAgIHBhcnNlID0gcGFyc2VzW2MgaW4gcGFkcyA/IHNwZWNpZmllci5jaGFyQXQoaSsrKSA6IGNdO1xuICAgICAgICBpZiAoIXBhcnNlIHx8ICgoaiA9IHBhcnNlKGQsIHN0cmluZywgaikpIDwgMCkpIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPSBzdHJpbmcuY2hhckNvZGVBdChqKyspKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gajtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUGVyaW9kKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gcGVyaW9kUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQucCA9IHBlcmlvZExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNob3J0V2Vla2RheShkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHNob3J0V2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSBzaG9ydFdlZWtkYXlMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gd2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSB3ZWVrZGF5TG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2hvcnRNb250aChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHNob3J0TW9udGhSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5tID0gc2hvcnRNb250aExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1vbnRoKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbW9udGhSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5tID0gbW9udGhMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX2RhdGVUaW1lLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX3RpbWUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldERheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXREYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFBlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRIb3VycygpID49IDEyKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldFVUQ0RheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRVVENNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1BlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRVVENIb3VycygpID49IDEyKV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgZiA9IG5ld0Zvcm1hdChzcGVjaWZpZXIgKz0gXCJcIiwgZm9ybWF0cyk7XG4gICAgICBmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gZjtcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBwID0gbmV3UGFyc2Uoc3BlY2lmaWVyICs9IFwiXCIsIGxvY2FsRGF0ZSk7XG4gICAgICBwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuICAgIHV0Y0Zvcm1hdDogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgZiA9IG5ld0Zvcm1hdChzcGVjaWZpZXIgKz0gXCJcIiwgdXRjRm9ybWF0cyk7XG4gICAgICBmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gZjtcbiAgICB9LFxuICAgIHV0Y1BhcnNlOiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBwID0gbmV3UGFyc2Uoc3BlY2lmaWVyLCB1dGNEYXRlKTtcbiAgICAgIHAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHBhZHMgPSB7XCItXCI6IFwiXCIsIFwiX1wiOiBcIiBcIiwgXCIwXCI6IFwiMFwifSxcbiAgICBudW1iZXJSZSA9IC9eXFxzKlxcZCsvLCAvLyBub3RlOiBpZ25vcmVzIG5leHQgZGlyZWN0aXZlXG4gICAgcGVyY2VudFJlID0gL14lLyxcbiAgICByZXF1b3RlUmUgPSAvW1xcXFxeJCorP3xbXFxdKCkue31dL2c7XG5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgZmlsbCwgd2lkdGgpIHtcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICByZXR1cm4gc2lnbiArIChsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgKyBzdHJpbmcgOiBzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiByZXF1b3RlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZShyZXF1b3RlUmUsIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZShuYW1lcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5hbWVzLm1hcChyZXF1b3RlKS5qb2luKFwifFwiKSArIFwiKVwiLCBcImlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExvb2t1cChuYW1lcykge1xuICB2YXIgbWFwID0ge30sIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIG1hcFtuYW1lc1tpXS50b0xvd2VyQ2FzZSgpXSA9IGk7XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLncgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyAoZC51ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyU3VuZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuVSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlcklTTyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlYgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5XID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGdWxsWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNCkpO1xuICByZXR1cm4gbiA/IChkLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC55ID0gK25bMF0gKyAoK25bMF0gPiA2OCA/IDE5MDAgOiAyMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVpvbmUoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gL14oWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/Ly5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLlogPSBuWzFdID8gMCA6IC0oblsyXSArIChuWzNdIHx8IFwiMDBcIikpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGhOdW1iZXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5tID0gblswXSAtIDEsIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXlPZk1vbnRoKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF5T2ZZZWFyKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAzKSk7XG4gIHJldHVybiBuID8gKGQubSA9IDAsIGQuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSG91cjI0KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuSCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWludXRlcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLk0gPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5TID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWxsaXNlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgcmV0dXJuIG4gPyAoZC5MID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDYpKTtcbiAgcmV0dXJuIG4gPyAoZC5MID0gTWF0aC5mbG9vcihuWzBdIC8gMTAwMCksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaXRlcmFsUGVyY2VudChkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBwZXJjZW50UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyBpICsgblswXS5sZW5ndGggOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VVbml4VGltZXN0YW1wKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgcmV0dXJuIG4gPyAoZC5RID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gIHJldHVybiBuID8gKGQuUSA9ICgrblswXSkgKiAxMDAwLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEhvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdGltZURheS5jb3VudCh0aW1lWWVhcihkKSwgZCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaWxsaXNlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TWlsbGlzZWNvbmRzKCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaWNyb3NlY29uZHMoZCwgcCkge1xuICByZXR1cm4gZm9ybWF0TWlsbGlzZWNvbmRzKGQsIHApICsgXCIwMDBcIjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TW9udGhOdW1iZXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TW9udGgoKSArIDEsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaW51dGVzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldE1pbnV0ZXMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFNlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0U2Vjb25kcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla2RheU51bWJlck1vbmRheShkKSB7XG4gIHZhciBkYXkgPSBkLmdldERheSgpO1xuICByZXR1cm4gZGF5ID09PSAwID8gNyA6IGRheTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla051bWJlclN1bmRheShkLCBwKSB7XG4gIHJldHVybiBwYWQodGltZVN1bmRheS5jb3VudCh0aW1lWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVySVNPKGQsIHApIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIGQgPSAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHRpbWVUaHVyc2RheShkKSA6IHRpbWVUaHVyc2RheS5jZWlsKGQpO1xuICByZXR1cm4gcGFkKHRpbWVUaHVyc2RheS5jb3VudCh0aW1lWWVhcihkKSwgZCkgKyAodGltZVllYXIoZCkuZ2V0RGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldERheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh0aW1lTW9uZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZ1bGxZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFpvbmUoZCkge1xuICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgcmV0dXJuICh6ID4gMCA/IFwiLVwiIDogKHogKj0gLTEsIFwiK1wiKSlcbiAgICAgICsgcGFkKHogLyA2MCB8IDAsIFwiMFwiLCAyKVxuICAgICAgKyBwYWQoeiAlIDYwLCBcIjBcIiwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0RheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDSG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdXRjRGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01pbGxpc2Vjb25kcygpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWljcm9zZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSArIFwiMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoTnVtYmVyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01vbnRoKCkgKyAxLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWludXRlcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNaW51dGVzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENTZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ1NlY29uZHMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXkoZCkge1xuICB2YXIgZG93ID0gZC5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3c7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHV0Y1N1bmRheS5jb3VudCh1dGNZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJJU08oZCwgcCkge1xuICB2YXIgZGF5ID0gZC5nZXRVVENEYXkoKTtcbiAgZCA9IChkYXkgPj0gNCB8fCBkYXkgPT09IDApID8gdXRjVGh1cnNkYXkoZCkgOiB1dGNUaHVyc2RheS5jZWlsKGQpO1xuICByZXR1cm4gcGFkKHV0Y1RodXJzZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpICsgKHV0Y1llYXIoZCkuZ2V0VVRDRGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldFVUQ0RheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh1dGNNb25kYXkuY291bnQodXRjWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENGdWxsWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENab25lKCkge1xuICByZXR1cm4gXCIrMDAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMaXRlcmFsUGVyY2VudCgpIHtcbiAgcmV0dXJuIFwiJVwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVbml4VGltZXN0YW1wKGQpIHtcbiAgcmV0dXJuICtkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyhkKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKCtkIC8gMTAwMCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS1mb3JtYXQvc3JjL2xvY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGQzU2VsZWN0IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgRGF0YUhhbmRsZXIgZnJvbSAnLi9ob21ld29yazIvRGF0YUhhbmRsZXInO1xuaW1wb3J0IERhdGFQcm9jZXNzb3IgZnJvbSAnLi9ob21ld29yazIvRGF0YVByb2Nlc3Nvcic7XG5pbXBvcnQgQ29udGVudE1ha2VyIGZyb20gJy4vaG9tZXdvcmsyL2JhcmNoYXJ0L0NvbnRlbnRNYWtlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9ob21ld29yazIuY3NzJztcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGQzU2VsZWN0LnNlbGVjdCgnI2NvbnRlbnRfY29udGFpbmVyJyk7XG5cbmNvbnN0IGRhdGFIYW5kbGVyID0gbmV3IERhdGFIYW5kbGVyKCdjb3VudHJpZXNfMTk5NV8yMDEyJyk7XG5kYXRhSGFuZGxlci5oYW5kbGUoXG4gIChkYXRhKSA9PiB7XG4gICAgY29uc3QgZGF0YVByb2Nlc3NvciA9IG5ldyBEYXRhUHJvY2Vzc29yKGRhdGEpO1xuICAgIGNvbnN0IGNvbnRlbnRNYWtlciA9IG5ldyBDb250ZW50TWFrZXIoY29udGVudENvbnRhaW5lciwgZGF0YVByb2Nlc3Nvcik7XG4gICAgY29udGVudE1ha2VyLnNldFVwZGF0ZXJzKCk7XG4gICAgY29udGVudE1ha2VyLnVwZGF0ZUNvbnRlbnQoKTtcbiAgfVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ob21ld29yazJCYXJDaGFydC5qcyIsImltcG9ydCAqIGFzIGQzQXJyYXkgZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0ICogYXMgZDNFYXNlIGZyb20gJ2QzLWVhc2UnO1xuaW1wb3J0ICogYXMgZDNTY2FsZSBmcm9tICdkMy1zY2FsZSc7XG5cbmNvbnN0IE1BUkdJTlMgPSB7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDIwMCwgcmlnaHQ6IDQwIH07XG5jb25zdCBXSURUSCA9IDEyMDAgLSBNQVJHSU5TLmxlZnQgLSBNQVJHSU5TLnJpZ2h0O1xuY29uc3QgQkFSX0hFSUdIVCA9IDE5O1xuY29uc3QgQkFSX0JMT0NLX0hFSUdIVCA9IEJBUl9IRUlHSFQgKyAxO1xuY29uc3QgQkFSX0JMT0NLX0hBTEZfSEVJR0hUID0gQkFSX0JMT0NLX0hFSUdIVCAvIDI7XG5jb25zdCBTQ0FMRSA9IGQzU2NhbGUuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFswLCBXSURUSF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCB7XG5cbiAgY29uc3RydWN0b3IobWFpbkVsZW1lbnQsIGRhdGFQcm9jZXNzb3IpIHtcbiAgICBtYWluRWxlbWVudFxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgV0lEVEggKyBNQVJHSU5TLmxlZnQgKyBNQVJHSU5TLnJpZ2h0KTtcbiAgICB0aGlzLm1haW5FbGVtZW50ID0gbWFpbkVsZW1lbnQ7XG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yID0gZGF0YVByb2Nlc3NvcjtcbiAgICB0aGlzLm1haW5Hcm91cCA9IHRoaXMuX2FkZE1haW5Hcm91cCgpO1xuICB9XG5cbiAgX2FkZE1haW5Hcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYWluRWxlbWVudC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtNQVJHSU5TLmxlZnR9LCR7TUFSR0lOUy50b3B9KWApO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQobmV3RGF0YSkge1xuICAgIGNvbnN0IGhlaWdodCA9IEJBUl9CTE9DS19IRUlHSFQgKiBuZXdEYXRhLmxlbmd0aDtcbiAgICBTQ0FMRS5kb21haW4oWzAsIGQzQXJyYXkubWF4KG5ld0RhdGEsIGRhdHVtID0+IGRhdHVtLmVuY29kaW5nKV0pO1xuICAgIHRoaXMubWFpbkVsZW1lbnRcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBNQVJHSU5TLnRvcCArIE1BUkdJTlMuYm90dG9tKTtcbiAgICBjb25zdCBiYXJHcm91cHMgPSB0aGlzLm1haW5Hcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAgICAgLmRhdGEobmV3RGF0YSwgKGRhdHVtLCBpbmRleCkgPT4gZGF0dW0ubmFtZSArIGRhdHVtLmVuY29kaW5nICsgaW5kZXgpO1xuICAgIGNvbnN0IGJhckdyb3VwID0gYmFyR3JvdXBzLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZGF0dW0sIGluZGV4KSA9PiBgdHJhbnNsYXRlKDAsJHtpbmRleCAqIEJBUl9CTE9DS19IRUlHSFR9KWApO1xuICAgIGJhckdyb3Vwcy5leGl0KCkuc2VsZWN0QWxsKCdyZWN0JykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgLmVhc2UoZDNFYXNlLmVhc2VMaW5lYXIpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKTtcbiAgICBiYXJHcm91cHMuZXhpdCgpLnNlbGVjdEFsbCgndGV4dCcpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5lYXNlKGQzRWFzZS5lYXNlTGluZWFyKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGJhckdyb3Vwcy5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgIGNvbnN0IGxhYmVsID0gYmFyR3JvdXAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgQkFSX0JMT0NLX0hBTEZfSEVJR0hUKVxuICAgICAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAgICAgLnRleHQoZGF0dW0gPT4gZGF0dW0ubmFtZSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgICAuZWFzZShkM0Vhc2UuZWFzZUxpbmVhcilcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJyk7XG4gICAgY29uc3QgYmFyID0gYmFyR3JvdXAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMjApXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgQkFSX0hFSUdIVClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgICAuZWFzZShkM0Vhc2UuZWFzZUxpbmVhcilcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGRhdHVtID0+IFNDQUxFKGRhdHVtLmVuY29kaW5nKSk7XG4gIH1cblxuICBzdGF0aWMgX190YWJsZURhdGFLZXlGdW5jdGlvbihkYXR1bSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZGF0dW0ubmFtZSArIGRhdHVtLnBvcHVsYXRpb24gKyBkYXR1bS5nZHAgKyBpbmRleDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L0JhckNoYXJ0LmpzIiwiaW1wb3J0ICogYXMgZDNBcnJheSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQgKiBhcyBkM0NvbGxlY3Rpb24gZnJvbSAnZDMtY29sbGVjdGlvbic7XG5pbXBvcnQgKiBhcyBkM1NlbGVjdGlvbiBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0ICogYXMgZDNUaW1lRm9ybWF0IGZyb20gJ2QzLXRpbWUtZm9ybWF0JztcblxuaW1wb3J0IEludGVyYWN0aXZlQmxvY2sgZnJvbSAnLi9JbnRlcmFjdGl2ZUJsb2NrJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL0JhckNoYXJ0JztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9MaW5lQ2hhcnQnO1xuXG5jb25zdCBJTlRFUkFDVElWRV9CTE9DS19JRCA9ICdpbnRlcmFjdGl2ZV9ibG9jayc7XG5jb25zdCBCQVJfQ0hBUlRfQkxPQ0tfSUQgPSAnYmFyX2NoYXJ0X2Jsb2NrJztcbmNvbnN0IEJBUl9DSEFSVF9JRCA9ICdiYXJfY2hhcnQnO1xuY29uc3QgTElORV9DSEFSVF9CTE9DS19JRCA9ICdsaW5lX2NoYXJ0X2Jsb2NrJztcbmNvbnN0IExJTkVfQ0hBUlRfSUQgPSAnbGluZV9jaGFydCc7XG5jb25zdCBEQVRFX1BBUlNFUiA9IGQzVGltZUZvcm1hdC50aW1lUGFyc2UoJyVZJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUludGVyYWN0aXZlQmxvY2tFbGVtZW50KGNvbnRlbnRDb250YWluZXIpIHtcbiAgcmV0dXJuIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKCdkaXYnKVxuICAgIC5hdHRyKCdpZCcsIElOVEVSQUNUSVZFX0JMT0NLX0lEKVxuICAgIC5hdHRyKCdjbGFzcycsIElOVEVSQUNUSVZFX0JMT0NLX0lEKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhcnRFbGVtZW50KGNvbnRlbnRDb250YWluZXIsIGJsb2NrSWQsIGNoYXJ0SWQpIHtcbiAgcmV0dXJuIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKCdkaXYnKVxuICAgIC5hdHRyKCdpZCcsIGJsb2NrSWQpXG4gICAgLmF0dHIoJ2NsYXNzJywgYmxvY2tJZClcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdpZCcsIGNoYXJ0SWQpXG4gICAgLmF0dHIoJ2NsYXNzJywgY2hhcnRJZCk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZU1pbk1heFZhbHVlT2ZEYXRhKGRhdGEsIGZlYXR1cmUpIHtcbiAgbGV0IG1pbiA9IGRhdGFbMF1bZmVhdHVyZV07XG4gIGxldCBtYXggPSBkYXRhWzBdW2ZlYXR1cmVdO1xuICBmb3IgKGNvbnN0IGRhdHVtIG9mIGRhdGEpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBkYXR1bVtmZWF0dXJlXTtcbiAgICBpZiAoY3VycmVudFZhbHVlID4gbWF4KSB7XG4gICAgICBtYXggPSBjdXJyZW50VmFsdWU7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWUgPCBtaW4pIHtcbiAgICAgIG1pbiA9IGN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtaW46IDAsXG4gICAgbWF4LFxuICAgIGRlbHRhOiBtYXggLSBtaW4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRNYWtlciB7XG5cbiAgY29uc3RydWN0b3IoY29udGVudENvbnRhaW5lciwgZGF0YVByb2Nlc3Nvcikge1xuICAgIHRoaXMuZGF0YSA9IGRhdGFQcm9jZXNzb3IuZGF0YTtcbiAgICB0aGlzLnllYXJSYW5nZSA9IGRhdGFQcm9jZXNzb3IueWVhclJhbmdlO1xuICAgIGNvbnN0IGludGVyYWN0aXZlQmxvY2tFbGVtZW50ID0gY3JlYXRlSW50ZXJhY3RpdmVCbG9ja0VsZW1lbnQoY29udGVudENvbnRhaW5lcik7XG4gICAgdGhpcy5pbnRlcmFjdGl2ZUJsb2NrID0gbmV3IEludGVyYWN0aXZlQmxvY2soaW50ZXJhY3RpdmVCbG9ja0VsZW1lbnQsIGRhdGFQcm9jZXNzb3IsIHRoaXMpO1xuICAgIGNvbnN0IGJhckNoYXJ0RWxlbWVudCA9IGNyZWF0ZUNoYXJ0RWxlbWVudChjb250ZW50Q29udGFpbmVyLCBCQVJfQ0hBUlRfQkxPQ0tfSUQsIEJBUl9DSEFSVF9JRCk7XG4gICAgdGhpcy5iYXJDaGFydCA9IG5ldyBCYXJDaGFydChiYXJDaGFydEVsZW1lbnQsIGRhdGFQcm9jZXNzb3IpO1xuICAgIHRoaXMubGluZUNoYXJ0RWxlbWVudCA9IGNyZWF0ZUNoYXJ0RWxlbWVudChjb250ZW50Q29udGFpbmVyLCBMSU5FX0NIQVJUX0JMT0NLX0lELCBMSU5FX0NIQVJUX0lEKTtcbiAgICBjb25zdCBsaW5lQ2hhcnQgPSBuZXcgTGluZUNoYXJ0KHRoaXMubGluZUNoYXJ0RWxlbWVudCwgZGF0YVByb2Nlc3Nvcik7XG4gICAgdGhpcy5saW5lQ2hhcnQgPSBsaW5lQ2hhcnQ7XG4gICAgdGhpcy5saW5lQ2hhcnRFbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxpbmVDaGFydC5pc0FyZWEgPSAhbGluZUNoYXJ0LmlzQXJlYTtcbiAgICAgIGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzKS5zZWxlY3RBbGwoJy5saW5lX2NoYXJ0X3ZhbHVlJykucmVtb3ZlKCk7XG4gICAgICBsaW5lQ2hhcnQudXBkYXRlQ2hhcnQobGluZUNoYXJ0LmRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VXBkYXRlcnMoKSB7XG4gICAgSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RTbGlkZXIoKS5vbignaW5wdXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9KTtcbiAgICBJbnRlcmFjdGl2ZUJsb2NrLnNlbGVjdENoZWNrYm94ZXMoKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gICAgfSk7XG4gICAgSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RSYWRpb0J1dHRvbnMoKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250ZW50KCkge1xuICAgIGNvbnN0IGVuY29kaW5nID0gQ29udGVudE1ha2VyLl9fZGVmaW5lRW5jb2RpbmcoKTtcbiAgICBjb25zdCBhZ2dyZWdhdGlvbiA9IENvbnRlbnRNYWtlci5fX2RlZmluZUFnZ3JlZ2F0aW9uKCk7XG4gICAgY29uc3QgY2hvaWNlcyA9IENvbnRlbnRNYWtlci5fX2RlZmluZUNob2ljZXMoKTtcbiAgICBjb25zdCBuZXdEYXRhID0gQ29udGVudE1ha2VyLl9fcHJvZHVjZU5ld0RhdGEodGhpcy5kYXRhLCB0aGlzLnllYXJSYW5nZSwgZW5jb2RpbmcsIGFnZ3JlZ2F0aW9uLCB0aGlzLmxpbmVDaGFydEVsZW1lbnQsIGNob2ljZXMubGVuZ3RoKTtcbiAgICB0aGlzLmJhckNoYXJ0LnVwZGF0ZUNoYXJ0KG5ld0RhdGFbMF0pO1xuICAgIGlmICgoYWdncmVnYXRpb24gPT09ICdjb250aW5lbnQnKSAmJiAoY2hvaWNlcy5sZW5ndGggIT09IDEpKSB7XG4gICAgICB0aGlzLmxpbmVDaGFydC51cGRhdGVDaGFydChuZXdEYXRhWzFdKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX19kZWZpbmVSYWRpb0J1dHRvblZhbHVlKHNlbGVjdG9yKSB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gc2VsZWN0b3IoKTtcbiAgICByYWRpb0J1dHRvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCByYWRpb0J1dHRvbiA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzKTtcbiAgICAgIGlmIChyYWRpb0J1dHRvbi5wcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgICAgIHZhbHVlID0gcmFkaW9CdXR0b24ucHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIF9fZGVmaW5lRW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIENvbnRlbnRNYWtlci5fX2RlZmluZVJhZGlvQnV0dG9uVmFsdWUoSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RFbmNvZGluZ1JhZGlvQnV0dG9ucyk7XG4gIH1cblxuICBzdGF0aWMgX19kZWZpbmVBZ2dyZWdhdGlvbigpIHtcbiAgICByZXR1cm4gQ29udGVudE1ha2VyLl9fZGVmaW5lUmFkaW9CdXR0b25WYWx1ZShJbnRlcmFjdGl2ZUJsb2NrLnNlbGVjdEFnZ3JlZ2F0aW9uUmFkaW9CdXR0b25zKTtcbiAgfVxuXG4gIHN0YXRpYyBfX3Byb2R1Y2VOZXdEYXRhKGRhdGEsIHllYXJSYW5nZSwgZW5jb2RpbmcsIGFnZ3JlZ2F0aW9uLCBsaW5lQ2hhcnRFbGVtZW50LCBudW1iZXJPZkNob2ljZXMpIHtcbiAgICBsZXQgYmFyQ2hhcnREYXRhO1xuICAgIGJhckNoYXJ0RGF0YSA9IENvbnRlbnRNYWtlci5fX2VuY29kZURhdGEoZGF0YSwgZW5jb2RpbmcpO1xuICAgIGJhckNoYXJ0RGF0YSA9IENvbnRlbnRNYWtlci5fX2FwcGx5Q2hlY2tib3hlcyhiYXJDaGFydERhdGEpO1xuICAgIGJhckNoYXJ0RGF0YSA9IENvbnRlbnRNYWtlci5fX2FwcGx5QWdncmVnYXRpb25SYWRpb0J1dHRvbnMoYmFyQ2hhcnREYXRhLCB5ZWFyUmFuZ2UpO1xuICAgIGJhckNoYXJ0RGF0YSA9IENvbnRlbnRNYWtlci5fX2FwcGx5U29ydGluZ1JhZGlvQnV0dG9ucyhiYXJDaGFydERhdGEpO1xuICAgIGxldCBsaW5lQ2hhcnREYXRhID0gQ29udGVudE1ha2VyLl9fY29sbGVjdExpbmVDaGFydERhdGEoYmFyQ2hhcnREYXRhKTtcbiAgICBpZiAoYWdncmVnYXRpb24gPT09ICdjb250aW5lbnQnKSB7XG4gICAgICBiYXJDaGFydERhdGEgPSBDb250ZW50TWFrZXIuX19hcHBseVNsaWRlcihiYXJDaGFydERhdGEpO1xuICAgIH1cbiAgICBpZiAoKGFnZ3JlZ2F0aW9uID09PSAnY29udGluZW50JykgJiYgKG51bWJlck9mQ2hvaWNlcyAhPT0gMSkpIHtcbiAgICAgIGxpbmVDaGFydEVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUNoYXJ0RGF0YSA9IFtdO1xuICAgICAgbGluZUNoYXJ0RWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICAgIHJldHVybiBbYmFyQ2hhcnREYXRhLCBsaW5lQ2hhcnREYXRhXTtcbiAgfVxuXG4gIHN0YXRpYyBfX2VuY29kZURhdGEoZGF0YSwgZW5jb2RpbmcpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXR1bSBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBuZXdEYXR1bSA9IHt9O1xuICAgICAgbmV3RGF0dW0ubmFtZSA9IGRhdHVtLm5hbWU7XG4gICAgICBuZXdEYXR1bS5jb250aW5lbnQgPSBkYXR1bS5jb250aW5lbnQ7XG4gICAgICBuZXdEYXR1bS5lbmNvZGluZyA9IGRhdHVtW2VuY29kaW5nXTtcbiAgICAgIG5ld0RhdHVtLnBvcHVsYXRpb24gPSBkYXR1bS5wb3B1bGF0aW9uO1xuICAgICAgbmV3RGF0dW0uZ2RwID0gZGF0dW0uZ2RwO1xuICAgICAgbmV3RGF0dW0ueWVhciA9IGRhdHVtLnllYXI7XG4gICAgICBuZXdEYXRhLnB1c2gobmV3RGF0dW0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBfX2NvbGxlY3RMaW5lQ2hhcnREYXRhKGJhckNoYXJ0RGF0YSkge1xuICAgIGNvbnN0IGxpbmVDaGFydERhdGEgPSB7fTtcbiAgICBjb25zdCB5ZWFyU3VtcyA9IHt9O1xuICAgIGZvciAoY29uc3QgYmFyQ2hhcnREYXR1bSBvZiBiYXJDaGFydERhdGEpIHtcbiAgICAgIGNvbnN0IHllYXIgPSBiYXJDaGFydERhdHVtLnllYXI7XG4gICAgICBjb25zdCB2YWx1ZSA9IGJhckNoYXJ0RGF0dW0uZW5jb2Rpbmc7XG4gICAgICBpZiAoeWVhclN1bXNbeWVhcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB5ZWFyU3Vtc1t5ZWFyXSA9IDA7XG4gICAgICB9XG4gICAgICB5ZWFyU3Vtc1t5ZWFyXSArPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBiYXJDaGFydERhdHVtIG9mIGJhckNoYXJ0RGF0YSkge1xuICAgICAgY29uc3QgeWVhciA9IGJhckNoYXJ0RGF0dW0ueWVhcjtcbiAgICAgIGNvbnN0IG5hbWUgPSBiYXJDaGFydERhdHVtLm5hbWU7XG4gICAgICBjb25zdCB2YWx1ZSA9IGJhckNoYXJ0RGF0dW0uZW5jb2Rpbmc7XG4gICAgICBpZiAobGluZUNoYXJ0RGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpbmVDaGFydERhdGFbbmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGxpbmVDaGFydERhdGFbbmFtZV0ucHVzaCh7XG4gICAgICAgIHg6IERBVEVfUEFSU0VSKHllYXIpLFxuICAgICAgICB5OiB2YWx1ZSAvIHllYXJTdW1zW3llYXJdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhsaW5lQ2hhcnREYXRhKSkge1xuICAgICAgYnVmZmVyLnB1c2goe1xuICAgICAgICBrZXk6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgdmFsdWVzOiBsaW5lQ2hhcnREYXRhW25hbWVdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoYS54IDwgYi54KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChhLnggPiBiLngpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH1cblxuICBzdGF0aWMgX19hcHBseVNsaWRlcihkYXRhKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RTbGlkZXIoKTtcbiAgICBjb25zdCBzbGlkZXJZZWFyID0gcGFyc2VJbnQoc2xpZGVyLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoZGF0dW0gPT4gZGF0dW0ueWVhciA9PT0gc2xpZGVyWWVhcik7XG4gIH1cblxuICBzdGF0aWMgX19hcHBseUNoZWNrYm94ZXMoZGF0YSkge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBJbnRlcmFjdGl2ZUJsb2NrLnNlbGVjdENoZWNrYm94ZXMoKTtcbiAgICBjb25zdCBjaG9pY2VzID0gQ29udGVudE1ha2VyLl9fZGVmaW5lQ2hvaWNlcygpO1xuICAgIGlmIChjaG9pY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcihkYXR1bSA9PiBjaG9pY2VzLmluY2x1ZGVzKGRhdHVtLmNvbnRpbmVudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX19kZWZpbmVDaG9pY2VzKCkge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBJbnRlcmFjdGl2ZUJsb2NrLnNlbGVjdENoZWNrYm94ZXMoKTtcbiAgICBjb25zdCBjaG9pY2VzID0gW107XG4gICAgY2hlY2tib3hlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMpO1xuICAgICAgaWYgKGNoZWNrYm94LnByb3BlcnR5KCdjaGVja2VkJykpIHtcbiAgICAgICAgY2hvaWNlcy5wdXNoKGNoZWNrYm94LnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2hvaWNlcztcbiAgfVxuXG4gIHN0YXRpYyBfX2FwcGx5QWdncmVnYXRpb25SYWRpb0J1dHRvbnMoZGF0YSwgeWVhclJhbmdlKSB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RBZ2dyZWdhdGlvblJhZGlvQnV0dG9ucygpO1xuICAgIHJhZGlvQnV0dG9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9uID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMpO1xuICAgICAgaWYgKHJhZGlvQnV0dG9uLnByb3BlcnR5KCdjaGVja2VkJykpIHtcbiAgICAgICAgdmFsdWUgPSByYWRpb0J1dHRvbi5wcm9wZXJ0eSgndmFsdWUnKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnY291bnRyeScpIHtcbiAgICAgICAgICB2YWx1ZSA9ICduYW1lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHllYXJSYW5nZU1pbiA9IHllYXJSYW5nZS5taW47XG4gICAgY29uc3QgeWVhclJhbmdlTWF4ID0geWVhclJhbmdlLm1heDtcbiAgICBjb25zdCBhZ2dyZWdhdGVkRGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSA9PT0gJ25hbWUnKSB7XG4gICAgICBkM0NvbGxlY3Rpb24ubmVzdCgpXG4gICAgICAgICAgICAgICAgLmtleShkYXR1bSA9PiBkYXR1bVt2YWx1ZV0pXG4gICAgICAgICAgICAgICAgLnJvbGx1cCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRlZERhdHVtID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbmVudDogZGF0YVswXS5jb250aW5lbnQsXG4gICAgICAgICAgICAgICAgICAgIGVuY29kaW5nOiBkM0FycmF5Lm1lYW4oZGF0YSwgb2JqID0+IG9iai5lbmNvZGluZyksXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRpb246IGQzQXJyYXkubWVhbihkYXRhLCBvYmogPT4gb2JqLnBvcHVsYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBnZHA6IGQzQXJyYXkubWVhbihkYXRhLCBvYmogPT4gb2JqLmdkcCksXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IGAke3llYXJSYW5nZU1pbn0tJHt5ZWFyUmFuZ2VNYXh9YCxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkRGF0YS5wdXNoKGFnZ3JlZ2F0ZWREYXR1bSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZW50cmllcyhkYXRhKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnY29udGluZW50Jykge1xuICAgICAgZDNDb2xsZWN0aW9uLm5lc3QoKVxuICAgICAgICAgICAgICAgIC5rZXkoZGF0dW0gPT4gZGF0dW0ueWVhcilcbiAgICAgICAgICAgICAgICAua2V5KGRhdHVtID0+IGRhdHVtW3ZhbHVlXSlcbiAgICAgICAgICAgICAgICAucm9sbHVwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkRGF0dW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbMF1bdmFsdWVdLFxuICAgICAgICAgICAgICAgICAgICBjb250aW5lbnQ6IGRhdGFbMF1bdmFsdWVdLFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGluZzogZDNBcnJheS5zdW0oZGF0YSwgb2JqID0+IG9iai5lbmNvZGluZyksXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRpb246IGQzQXJyYXkuc3VtKGRhdGEsIG9iaiA9PiBvYmoucG9wdWxhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIGdkcDogZDNBcnJheS5zdW0oZGF0YSwgb2JqID0+IG9iai5nZHApLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBkYXRhWzBdLnllYXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZERhdGEucHVzaChhZ2dyZWdhdGVkRGF0dW0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmVudHJpZXMoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBhZ2dyZWdhdGVkRGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBfX2FwcGx5U29ydGluZ1JhZGlvQnV0dG9ucyhkYXRhKSB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gSW50ZXJhY3RpdmVCbG9jay5zZWxlY3RTb3J0aW5nUmFkaW9CdXR0b25zKCk7XG4gICAgcmFkaW9CdXR0b25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcmFkaW9CdXR0b24gPSBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcyk7XG4gICAgICBpZiAocmFkaW9CdXR0b24ucHJvcGVydHkoJ2NoZWNrZWQnKSkge1xuICAgICAgICB2YWx1ZSA9IHJhZGlvQnV0dG9uLnByb3BlcnR5KCd2YWx1ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGEuc29ydCgoYSwgYikgPT4gQ29udGVudE1ha2VyLl9fc29ydFRhYnModmFsdWUsIGEsIGIpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBfX3NvcnRUYWJzKGZlYXR1cmUsIHRhYjEsIHRhYjIpIHtcbiAgICBsZXQgY29tcGFyaXNvblJlc3VsdCA9IGQzQXJyYXkuYXNjZW5kaW5nKHRhYjFbZmVhdHVyZV0sIHRhYjJbZmVhdHVyZV0pO1xuICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID09PSAwKSB7XG4gICAgICBzd2l0Y2ggKGZlYXR1cmUpIHtcbiAgICAgICAgY2FzZSAnZW5jb2RpbmcnOlxuICAgICAgICAgIGNvbXBhcmlzb25SZXN1bHQgPSBDb250ZW50TWFrZXIuX19zb3J0VGFicygnY29udGluZW50JywgdGFiMSwgdGFiMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRpbmVudCc6XG4gICAgICAgICAgY29tcGFyaXNvblJlc3VsdCA9IENvbnRlbnRNYWtlci5fX3NvcnRUYWJzKCduYW1lJywgdGFiMSwgdGFiMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGNvbXBhcmlzb25SZXN1bHQgPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbXBhcmlzb25SZXN1bHQgPSBDb250ZW50TWFrZXIuX19zb3J0VGFicygnY29udGluZW50JywgdGFiMSwgdGFiMik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wYXJpc29uUmVzdWx0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L0NvbnRlbnRNYWtlci5qcyIsImltcG9ydCAqIGFzIGQzU2VsZWN0aW9uIGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSQURJT19CVVRUT05fQ09OVEVOVFMgfSBmcm9tICcuL3JhZGlvQnV0dG9ucyc7XG5cbmNvbnN0IElOVEVSQUNUSVZFX0JMT0NLX0xBQkVMX0lEID0gJ2ludGVyYWN0aXZlX2Jsb2NrX2xhYmVsJztcbmNvbnN0IFNMSURFUl9CTE9DS19JRCA9ICdzbGlkZXJfYmxvY2snO1xuY29uc3QgU0xJREVSX0lEID0gJ3llYXJfc2xpZGVyJztcbmNvbnN0IFJBRElPX0JVVFRPTlNfQkxPQ0tfSUQgPSAncmFkaW9fYnV0dG9uc19ibG9jayc7XG5jb25zdCBSQURJT19CVVRUT05fQkxPQ0tfSUQgPSAncmFkaW9fYnV0dG9uX2Jsb2NrJztcbmNvbnN0IFJBRElPX0JVVFRPTl9JRCA9ICdyYWRpb19idXR0b24nO1xuY29uc3QgRU5DT0RJTkdfUkFESU9fQlVUVE9OU19CTE9DS19JRCA9IGBlbmNvZGluZ18ke1JBRElPX0JVVFRPTlNfQkxPQ0tfSUR9YDtcbmNvbnN0IEFHR1JFR0FUSU9OX1JBRElPX0JVVFRPTlNfQkxPQ0tfSUQgPSBgYWdncmVnYXRpb25fJHtSQURJT19CVVRUT05TX0JMT0NLX0lEfWA7XG5jb25zdCBTT1JUSU5HX1JBRElPX0JVVFRPTlNfQkxPQ0tfSUQgPSBgc29ydGluZ18ke1JBRElPX0JVVFRPTlNfQkxPQ0tfSUR9YDtcbmNvbnN0IENIRUNLQk9YRVNfQkxPQ0tfSUQgPSAnY2hlY2tib3hlc19ibG9jayc7XG5jb25zdCBDSEVDS0JPWF9CTE9DS19JRCA9ICdjaGVja2JveF9ibG9jayc7XG5jb25zdCBDSEVDS0JPWF9JRCA9ICdjb250aW5lbnRfY2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZUJsb2NrIHtcblxuICBzdGF0aWMgc2VsZWN0Q2hlY2tib3hlcygpIHtcbiAgICByZXR1cm4gZDNTZWxlY3Rpb24uc2VsZWN0QWxsKGAuJHtDSEVDS0JPWF9JRH1gKTtcbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3RTbGlkZXIoKSB7XG4gICAgcmV0dXJuIGQzU2VsZWN0aW9uLnNlbGVjdChgIyR7U0xJREVSX0lEfWApO1xuICB9XG5cbiAgc3RhdGljIHNlbGVjdFJhZGlvQnV0dG9ucygpIHtcbiAgICByZXR1cm4gZDNTZWxlY3Rpb24uc2VsZWN0QWxsKGAuJHtSQURJT19CVVRUT05fSUR9YCk7XG4gIH1cblxuICBzdGF0aWMgc2VsZWN0RW5jb2RpbmdSYWRpb0J1dHRvbnMoKSB7XG4gICAgcmV0dXJuIGQzU2VsZWN0aW9uLnNlbGVjdChgIyR7RU5DT0RJTkdfUkFESU9fQlVUVE9OU19CTE9DS19JRH1gKS5zZWxlY3RBbGwoYC4ke1JBRElPX0JVVFRPTl9JRH1gKTtcbiAgfVxuXG4gIHN0YXRpYyBzZWxlY3RBZ2dyZWdhdGlvblJhZGlvQnV0dG9ucygpIHtcbiAgICByZXR1cm4gZDNTZWxlY3Rpb24uc2VsZWN0KGAjJHtBR0dSRUdBVElPTl9SQURJT19CVVRUT05TX0JMT0NLX0lEfWApLnNlbGVjdEFsbChgLiR7UkFESU9fQlVUVE9OX0lEfWApO1xuICB9XG5cbiAgc3RhdGljIHNlbGVjdFNvcnRpbmdSYWRpb0J1dHRvbnMoKSB7XG4gICAgcmV0dXJuIGQzU2VsZWN0aW9uLnNlbGVjdChgIyR7U09SVElOR19SQURJT19CVVRUT05TX0JMT0NLX0lEfWApLnNlbGVjdEFsbChgLiR7UkFESU9fQlVUVE9OX0lEfWApO1xuICB9XG5cbiAgY29uc3RydWN0b3IobWFpbkVsZW1lbnQsIGRhdGEsIGNvbnRlbnRNYWtlcikge1xuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBtYWluRWxlbWVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29udGVudE1ha2VyID0gY29udGVudE1ha2VyO1xuICAgIHRoaXMuX2FkZEVsZW1lbnRzKCk7XG4gIH1cblxuICBfYWRkRWxlbWVudHMoKSB7XG4gICAgdGhpcy5fYWRkU2xpZGVyKHRoaXMuZGF0YS55ZWFyUmFuZ2UpO1xuICAgIHRoaXMuX2FkZEVuY29kaW5nUmFkaW9CdXR0b25zKCk7XG4gICAgdGhpcy5fYWRkQ2hlY2tib3hlcyh0aGlzLmRhdGEuY29udGluZW50cyk7XG4gICAgdGhpcy5fYWRkQWdncmVnYXRpb25SYWRpb0J1dHRvbnMoKTtcbiAgICB0aGlzLl9hZGRTb3J0aW5nUmFkaW9CdXR0b25zKCk7XG4gIH1cblxuICBfYWRkU2xpZGVyKHJhbmdlKSB7XG4gICAgY29uc3Qgc2xpZGVyQmxvY2sgPSB0aGlzLm1haW5FbGVtZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIFNMSURFUl9CTE9DS19JRClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIFNMSURFUl9CTE9DS19JRCk7XG4gICAgc2xpZGVyQmxvY2suYXBwZW5kKCdwJykuYXR0cignY2xhc3MnLCBJTlRFUkFDVElWRV9CTE9DS19MQUJFTF9JRCkudGV4dCgnVGltZSB1cGRhdGU6Jyk7XG4gICAgc2xpZGVyQmxvY2suYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCBJTlRFUkFDVElWRV9CTE9DS19MQUJFTF9JRCkudGV4dChyYW5nZS5taW4pO1xuICAgIGNvbnN0IHNsaWRlciA9IHNsaWRlckJsb2NrLmFwcGVuZCgnaW5wdXQnKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAncmFuZ2UnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgU0xJREVSX0lEKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgU0xJREVSX0lEKVxuICAgICAgICAgICAgLnByb3BlcnR5KCdtaW4nLCByYW5nZS5taW4pXG4gICAgICAgICAgICAucHJvcGVydHkoJ21heCcsIHJhbmdlLm1heClcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgnc3RlcCcsIDEpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgcmFuZ2UubWluKTtcbiAgICBzbGlkZXJCbG9jay5hcHBlbmQoJ2xhYmVsJylcbiAgICAgICAgICAgIC5hdHRyKCdmb3InLCBTTElERVJfSUQpXG4gICAgICAgICAgICAudGV4dCgnJyk7XG4gICAgc2xpZGVyQmxvY2suYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCBJTlRFUkFDVElWRV9CTE9DS19MQUJFTF9JRCkudGV4dChyYW5nZS5tYXgpO1xuICAgIHJldHVybiBzbGlkZXI7XG4gIH1cblxuICBfYWRkRW5jb2RpbmdSYWRpb0J1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZFJhZGlvQnV0dG9uc0J5VGhlbWUoRU5DT0RJTkdfUkFESU9fQlVUVE9OU19CTE9DS19JRCwgJ2VuY29kZScpO1xuICB9XG5cbiAgX2FkZEFnZ3JlZ2F0aW9uUmFkaW9CdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRSYWRpb0J1dHRvbnNCeVRoZW1lKEFHR1JFR0FUSU9OX1JBRElPX0JVVFRPTlNfQkxPQ0tfSUQsICdhZ2dyZWdhdGUnKTtcbiAgfVxuXG4gIF9hZGRTb3J0aW5nUmFkaW9CdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRSYWRpb0J1dHRvbnNCeVRoZW1lKFNPUlRJTkdfUkFESU9fQlVUVE9OU19CTE9DS19JRCwgJ3NvcnQnKTtcbiAgfVxuXG4gIF9hZGRSYWRpb0J1dHRvbnNCeVRoZW1lKGJsb2NrSWQsIHRoZW1lKSB7XG4gICAgY29uc3QgcmFkaW9CdXR0b25Db250ZW50ID0gUkFESU9fQlVUVE9OX0NPTlRFTlRTW3RoZW1lXTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnNCbG9jayA9IHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgYmxvY2tJZClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIFJBRElPX0JVVFRPTlNfQkxPQ0tfSUQpO1xuICAgIHJhZGlvQnV0dG9uc0Jsb2NrLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBJTlRFUkFDVElWRV9CTE9DS19MQUJFTF9JRClcbiAgICAgICAgICAgIC50ZXh0KHJhZGlvQnV0dG9uQ29udGVudC5sYWJlbCk7XG4gICAgbGV0IHJhZGlvQnV0dG9uQ2hlY2sgPSB0cnVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IFtdO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9uRmllbGRzID0gcmFkaW9CdXR0b25Db250ZW50LmZpZWxkcztcbiAgICBmb3IgKGNvbnN0IHJhZGlvQnV0dG9uRmllbGQgb2YgcmFkaW9CdXR0b25GaWVsZHMpIHtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9uQmxvY2sgPSByYWRpb0J1dHRvbnNCbG9jay5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgUkFESU9fQlVUVE9OX0JMT0NLX0lEKTtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9uSWQgPSBgcmFkaW9fYnV0dG9uXyR7dGhlbWV9XyR7cmFkaW9CdXR0b25GaWVsZC5pZFN1ZmZpeH1gO1xuICAgICAgY29uc3QgcmFkaW9CdXR0b24gPSByYWRpb0J1dHRvbkJsb2NrLmFwcGVuZCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgICAgICAgICAgICAuYXR0cignaWQnLCByYWRpb0J1dHRvbklkKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGAke1JBRElPX0JVVFRPTl9JRH0gJHt0aGVtZX1fcmFkaW9fYnV0dG9uYClcbiAgICAgICAgICAgICAgICAucHJvcGVydHkoJ2NoZWNrZWQnLCByYWRpb0J1dHRvbkNoZWNrKVxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCByYWRpb0J1dHRvbkZpZWxkLmlkU3VmZml4KVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBJbnRlcmFjdGl2ZUJsb2NrLl9fdXBkYXRlUmFkaW9CdXR0b25zKGJsb2NrSWQsIGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICByYWRpb0J1dHRvbnMucHVzaChyYWRpb0J1dHRvbik7XG4gICAgICByYWRpb0J1dHRvbnNCbG9jay5hcHBlbmQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cignZm9yJywgcmFkaW9CdXR0b25JZClcbiAgICAgICAgICAgICAgICAudGV4dChyYWRpb0J1dHRvbkZpZWxkLnRleHQpO1xuICAgICAgcmFkaW9CdXR0b25DaGVjayA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmFkaW9CdXR0b25zO1xuICB9XG5cbiAgc3RhdGljIF9fdXBkYXRlUmFkaW9CdXR0b25zKGJsb2NrSWQsIGNsaWNrZWRCdXR0b24pIHtcbiAgICBkM1NlbGVjdGlvbi5zZWxlY3QoYCMke2Jsb2NrSWR9YCkuc2VsZWN0QWxsKGAuJHtSQURJT19CVVRUT05fSUR9YClcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICBjbGlja2VkQnV0dG9uLnByb3BlcnR5KCdjaGVja2VkJywgdHJ1ZSk7XG4gIH1cblxuICBfYWRkQ2hlY2tib3hlcyhsYWJlbHMpIHtcbiAgICBjb25zdCBjaGVja2JveGVzQmxvY2sgPSB0aGlzLm1haW5FbGVtZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIENIRUNLQk9YRVNfQkxPQ0tfSUQpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBDSEVDS0JPWEVTX0JMT0NLX0lEKTtcbiAgICBjaGVja2JveGVzQmxvY2suYXBwZW5kKCdwJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIElOVEVSQUNUSVZFX0JMT0NLX0xBQkVMX0lEKVxuICAgICAgICAgICAgLnRleHQoJ0ZpbHRlciBieTonKTtcbiAgICBjb25zdCBjaGVja2JveEJsb2NrcyA9IGNoZWNrYm94ZXNCbG9jay5zZWxlY3RBbGwoYCMke0NIRUNLQk9YRVNfQkxPQ0tfSUR9LiR7Q0hFQ0tCT1hfQkxPQ0tfSUR9YClcbiAgICAgICAgICAgIC5kYXRhKGxhYmVscyk7XG4gICAgY29uc3QgY2hlY2tib3hCbG9jayA9IGNoZWNrYm94QmxvY2tzLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgQ0hFQ0tCT1hfQkxPQ0tfSUQpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbXTtcbiAgICBjaGVja2JveEJsb2NrLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgY2hlY2tib3ggPSBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcykuYXBwZW5kKCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsIChkYXR1bSwgaSkgPT4gYGNoZWNrYm94XyR7aX1gKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIENIRUNLQk9YX0lEKVxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkYXR1bSA9PiBkYXR1bSk7XG4gICAgICBjaGVja2JveGVzLnB1c2goY2hlY2tib3gpO1xuICAgICAgZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMpLmFwcGVuZCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmb3InLCAoZGF0dW0sIGkpID0+IGBjaGVja2JveF8ke2l9YClcbiAgICAgICAgICAgICAgICAudGV4dChkYXR1bSA9PiBkYXR1bSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrYm94ZXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2hvbWV3b3JrMi9iYXJjaGFydC9JbnRlcmFjdGl2ZUJsb2NrLmpzIiwiaW1wb3J0ICogYXMgZDNBcnJheSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQgKiBhcyBkM0F4aXMgZnJvbSAnZDMtYXhpcyc7XG5pbXBvcnQgKiBhcyBkM0Vhc2UgZnJvbSAnZDMtZWFzZSc7XG5pbXBvcnQgKiBhcyBkM0Zvcm1hdCBmcm9tICdkMy1mb3JtYXQnO1xuaW1wb3J0ICogYXMgZDNTY2FsZSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgKiBhcyBkM1NlbGVjdGlvbiBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0ICogYXMgZDNTaGFwZSBmcm9tICdkMy1zaGFwZSc7XG5pbXBvcnQgKiBhcyBkM1RpbWVGb3JtYXQgZnJvbSAnZDMtdGltZS1mb3JtYXQnO1xuXG5jb25zdCBNQVJHSU5TID0geyB0b3A6IDEwLCBib3R0b206IDcwLCBsZWZ0OiAyMDAsIHJpZ2h0OiA0MCB9O1xuY29uc3QgV0lEVEggPSAxMjAwIC0gTUFSR0lOUy5sZWZ0IC0gTUFSR0lOUy5yaWdodDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcbmNvbnN0IERVUkFUSU9OID0gMTUwMDtcbmNvbnN0IERFTEFZID0gNTAwO1xuY29uc3QgREFURV9QQVJTRVIgPSBkM1RpbWVGb3JtYXQudGltZVBhcnNlKCclWScpO1xuY29uc3QgRk9STUFUX1BFUkNFTlQgPSBkM0Zvcm1hdC5mb3JtYXQoJy4wJScpO1xuXG5jb25zdCBYX1NDQUxFID0gZDNTY2FsZS5zY2FsZVRpbWUoKS5yYW5nZVJvdW5kKFswLCBXSURUSF0pO1xuY29uc3QgWV9TQ0FMRSA9IGQzU2NhbGUuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtIRUlHSFQsIDBdKTtcbmNvbnN0IENPTE9SID0gZDNTY2FsZS5zY2FsZU9yZGluYWwoZDNTY2FsZS5zY2hlbWVDYXRlZ29yeTEwKTtcbmNvbnN0IExJTkVBUklaRVIgPSBkM1NoYXBlLmxpbmUoKVxuICAgIC54KGRhdHVtID0+IFhfU0NBTEUoZGF0dW0ueCkpXG4gICAgLnkoZGF0dW0gPT4gWV9TQ0FMRShkYXR1bS55KSk7XG5jb25zdCBTVEFDS0laRVIgPSBkM1NoYXBlLnN0YWNrKCk7XG5jb25zdCBBUkVBID0gZDNTaGFwZS5hcmVhKClcbiAgICAueCgoZGF0dW0sIGluZGV4KSA9PiBYX1NDQUxFKGRhdHVtLmRhdGEuZGF0ZSkpXG4gICAgLnkwKGRhdHVtID0+IFlfU0NBTEUoZGF0dW1bMF0pKVxuICAgIC55MShkYXR1bSA9PiBZX1NDQUxFKGRhdHVtWzFdKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IHtcblxuICBjb25zdHJ1Y3RvcihtYWluRWxlbWVudCwgZGF0YVByb2Nlc3Nvcikge1xuICAgIG1haW5FbGVtZW50XG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBXSURUSCArIE1BUkdJTlMubGVmdCArIE1BUkdJTlMucmlnaHQpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgSEVJR0hUICsgTUFSR0lOUy50b3AgKyBNQVJHSU5TLmJvdHRvbSk7XG4gICAgdGhpcy5tYWluRWxlbWVudCA9IG1haW5FbGVtZW50O1xuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IGRhdGFQcm9jZXNzb3I7XG4gICAgdGhpcy5tYWluR3JvdXAgPSB0aGlzLl9hZGRNYWluR3JvdXAoKTtcbiAgICB0aGlzLmlzQXJlYSA9IGZhbHNlO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICB9XG5cbiAgX2FkZE1haW5Hcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYWluRWxlbWVudC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtNQVJHSU5TLmxlZnR9LCR7TUFSR0lOUy50b3B9KWApO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQoZGF0YUZvckxpbmVzKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YUZvckxpbmVzO1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdHVtIG9mIGRhdGFGb3JMaW5lcykge1xuICAgICAga2V5cy5wdXNoKGRhdHVtLmtleSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGFGb3JTdGFjayA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUZvckxpbmVzWzBdLnZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qgc3RhY2tPYmogPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZGF0dW0gb2YgZGF0YUZvckxpbmVzKSB7XG4gICAgICAgIHN0YWNrT2JqW2RhdHVtLmtleV0gPSBkYXR1bS52YWx1ZXNbaV0ueTtcbiAgICAgICAgc3RhY2tPYmouZGF0ZSA9IGRhdHVtLnZhbHVlc1tpXS54O1xuICAgICAgfVxuICAgICAgZGF0YUZvclN0YWNrLnB1c2goc3RhY2tPYmopO1xuICAgIH1cbiAgICBkM1NlbGVjdGlvbi5zZWxlY3RBbGwoJy5heGlzJykucmVtb3ZlKCk7XG4gICAgWF9TQ0FMRS5kb21haW4oZDNBcnJheS5leHRlbnQoZGF0YUZvclN0YWNrLCBkYXR1bSA9PiBkYXR1bS5kYXRlKSk7XG4gICAgWV9TQ0FMRS5kb21haW4oWzAsIDFdKTtcbiAgICBDT0xPUi5kb21haW4oa2V5cyk7XG4gICAgU1RBQ0tJWkVSLmtleXMoa2V5cyk7XG4gICAgbGV0IGxpbmVHcm91cHM7XG4gICAgbGV0IGxpbmVHcm91cDtcbiAgICBpZiAodGhpcy5pc0FyZWEpIHtcbiAgICAgIGxpbmVHcm91cHMgPSB0aGlzLm1haW5Hcm91cC5zZWxlY3RBbGwoJy5saW5lX2NoYXJ0X3ZhbHVlJylcbiAgICAgICAgICAgICAgICAuZGF0YShTVEFDS0laRVIoZGF0YUZvclN0YWNrKSwgZGF0dW0gPT4gZGF0dW1bMF1bMV0gKyBkYXR1bVswXVszXSArIGRhdHVtWzBdWzVdKTtcbiAgICAgIGxpbmVHcm91cCA9IGxpbmVHcm91cHMuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lX2NoYXJ0X3ZhbHVlJyk7XG4gICAgICBsaW5lR3JvdXAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJlYScpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3JnYmEoMCwgMCwgMCwgMCknKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ3JnYmEoMCwgMCwgMCwgMCknKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzRWFzZS5lYXNlTGluZWFyKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgQVJFQSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGRhdHVtID0+IENPTE9SKGRhdHVtLmtleSkpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAgICAgLmVhc2UoZDNFYXNlLmVhc2VMaW5lYXIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZGF0dW0gPT4gQ09MT1IoZGF0dW0ua2V5KSk7XG4gICAgICBsaW5lR3JvdXBzLmV4aXQoKS5zZWxlY3RBbGwoJy5hcmVhJykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgICAgICAuZWFzZShkM0Vhc2UuZWFzZUxpbmVhcilcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgICAgbGluZUdyb3Vwcy5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVHcm91cHMgPSB0aGlzLm1haW5Hcm91cC5zZWxlY3RBbGwoJy5saW5lX2NoYXJ0X3ZhbHVlJylcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhRm9yTGluZXMsIGRhdHVtID0+IGRhdHVtLmtleSArIGRhdHVtLnZhbHVlc1swXS55KTtcbiAgICAgIGxpbmVHcm91cCA9IGxpbmVHcm91cHMuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lX2NoYXJ0X3ZhbHVlJyk7XG4gICAgICBsaW5lR3JvdXAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZScpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkYXR1bSA9PiBkYXR1bS5jb2xvciA9IENPTE9SKGRhdHVtLmtleSkpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuMClcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAuZWFzZShkM0Vhc2UuZWFzZUxpbmVhcilcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIGRhdHVtID0+IExJTkVBUklaRVIoZGF0dW0udmFsdWVzKSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMS4wKTtcbiAgICAgIGxpbmVHcm91cHMuZXhpdCgpLnNlbGVjdEFsbCgnLmxpbmUnKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzRWFzZS5lYXNlTGluZWFyKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAwLjApO1xuICAgICAgbGluZUdyb3Vwcy5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IGxlZ2VuZFNwYWNlID0gV0lEVEggLyBkYXRhRm9yTGluZXMubGVuZ3RoO1xuICAgIGxpbmVHcm91cC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZGF0dW0sIGluZGV4KSA9PiAobGVnZW5kU3BhY2UgLyAyKSArIGluZGV4ICogbGVnZW5kU3BhY2UpXG4gICAgICAgICAgICAuYXR0cigneScsIEhFSUdIVCArIChNQVJHSU5TLmJvdHRvbSAvIDIpICsgNSlcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZGF0dW0gPT4gZGF0dW0uY29sb3IgPSBDT0xPUihkYXR1bS5rZXkpKVxuICAgICAgICAgICAgLnRleHQoZGF0dW0gPT4gZGF0dW0ua2V5KTtcbiAgICBjb25zdCBib3R0b21BeGlzID0gZDNBeGlzLmF4aXNCb3R0b20oWF9TQ0FMRSk7XG4gICAgdGhpcy5tYWluR3JvdXAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtIRUlHSFR9KWApXG4gICAgICAgICAgICAuY2FsbChib3R0b21BeGlzKTtcbiAgICBjb25zdCBsZWZ0QXhpcyA9IGQzQXhpcy5heGlzTGVmdChZX1NDQUxFKS50aWNrRm9ybWF0KEZPUk1BVF9QRVJDRU5UKTtcbiAgICB0aGlzLm1haW5Hcm91cC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMnKVxuICAgICAgICAgICAgLmNhbGwobGVmdEF4aXMpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ob21ld29yazIvYmFyY2hhcnQvTGluZUNoYXJ0LmpzIiwiY2xhc3MgUmFkaW9CdXR0b25GaWVsZCB7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgaWRTdWZmaXgpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuaWRTdWZmaXggPSBpZFN1ZmZpeDtcbiAgfVxuXG59XG5cbmNsYXNzIFJhZGlvQnV0dG9uQ29udGVudCB7XG5cbiAgY29uc3RydWN0b3IobGFiZWwsIGZpZWxkcykge1xuICAgIHRoaXMubGFiZWwgPSBgJHtsYWJlbH06YDtcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgfVxuXG59XG5cbmNvbnN0IFJBRElPX0JVVFRPTl9DT05URU5UUyA9IHtcbiAgZW5jb2RlOiBuZXcgUmFkaW9CdXR0b25Db250ZW50KCdFbmNvZGUgYmFycyBieScsIFtcbiAgICBuZXcgUmFkaW9CdXR0b25GaWVsZCgnUG9wdWxhdGlvbicsICdwb3B1bGF0aW9uJyksXG4gICAgbmV3IFJhZGlvQnV0dG9uRmllbGQoJ0dEUCcsICdnZHAnKSxcbiAgXSksXG4gIGFnZ3JlZ2F0ZTogbmV3IFJhZGlvQnV0dG9uQ29udGVudCgnQWdncmVnYXRlIGJ5JywgW1xuICAgIG5ldyBSYWRpb0J1dHRvbkZpZWxkKCdDb250aW5lbnQnLCAnY29udGluZW50JyksXG4gICAgbmV3IFJhZGlvQnV0dG9uRmllbGQoJ0NvdW50cnknLCAnY291bnRyeScpLFxuICBdKSxcbiAgc29ydDogbmV3IFJhZGlvQnV0dG9uQ29udGVudCgnU29ydCBieScsIFtcbiAgICBuZXcgUmFkaW9CdXR0b25GaWVsZCgnTmFtZScsICduYW1lJyksXG4gICAgbmV3IFJhZGlvQnV0dG9uRmllbGQoJ1BvcHVsYXRpb24nLCAncG9wdWxhdGlvbicpLFxuICAgIG5ldyBSYWRpb0J1dHRvbkZpZWxkKCdHRFAnLCAnZ2RwJyksXG4gIF0pLFxufTtcblxuZXhwb3J0IHsgUkFESU9fQlVUVE9OX0NPTlRFTlRTIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaG9tZXdvcmsyL2JhcmNoYXJ0L3JhZGlvQnV0dG9ucy5qcyIsImV4cG9ydCB7XG4gIGF4aXNUb3AsXG4gIGF4aXNSaWdodCxcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc0xlZnRcbn0gZnJvbSBcIi4vc3JjL2F4aXNcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1heGlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1heGlzL3NyYy9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHlcIjtcblxudmFyIHRvcCA9IDEsXG4gICAgcmlnaHQgPSAyLFxuICAgIGJvdHRvbSA9IDMsXG4gICAgbGVmdCA9IDQsXG4gICAgZXBzaWxvbiA9IDFlLTY7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVgoeCkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeCArIDAuNSkgKyBcIiwwKVwiO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVZKHkpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyAoeSArIDAuNSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHNjYWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuICtzY2FsZShkKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2VudGVyKHNjYWxlKSB7XG4gIHZhciBvZmZzZXQgPSBNYXRoLm1heCgwLCBzY2FsZS5iYW5kd2lkdGgoKSAtIDEpIC8gMjsgLy8gQWRqdXN0IGZvciAwLjVweCBvZmZzZXQuXG4gIGlmIChzY2FsZS5yb3VuZCgpKSBvZmZzZXQgPSBNYXRoLnJvdW5kKG9mZnNldCk7XG4gIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuICtzY2FsZShkKSArIG9mZnNldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoKSB7XG4gIHJldHVybiAhdGhpcy5fX2F4aXM7XG59XG5cbmZ1bmN0aW9uIGF4aXMob3JpZW50LCBzY2FsZSkge1xuICB2YXIgdGlja0FyZ3VtZW50cyA9IFtdLFxuICAgICAgdGlja1ZhbHVlcyA9IG51bGwsXG4gICAgICB0aWNrRm9ybWF0ID0gbnVsbCxcbiAgICAgIHRpY2tTaXplSW5uZXIgPSA2LFxuICAgICAgdGlja1NpemVPdXRlciA9IDYsXG4gICAgICB0aWNrUGFkZGluZyA9IDMsXG4gICAgICBrID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBsZWZ0ID8gLTEgOiAxLFxuICAgICAgeCA9IG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0ID8gXCJ4XCIgOiBcInlcIixcbiAgICAgIHRyYW5zZm9ybSA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gYm90dG9tID8gdHJhbnNsYXRlWCA6IHRyYW5zbGF0ZVk7XG5cbiAgZnVuY3Rpb24gYXhpcyhjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRpY2tWYWx1ZXMgPT0gbnVsbCA/IChzY2FsZS50aWNrcyA/IHNjYWxlLnRpY2tzLmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IHNjYWxlLmRvbWFpbigpKSA6IHRpY2tWYWx1ZXMsXG4gICAgICAgIGZvcm1hdCA9IHRpY2tGb3JtYXQgPT0gbnVsbCA/IChzY2FsZS50aWNrRm9ybWF0ID8gc2NhbGUudGlja0Zvcm1hdC5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBpZGVudGl0eSkgOiB0aWNrRm9ybWF0LFxuICAgICAgICBzcGFjaW5nID0gTWF0aC5tYXgodGlja1NpemVJbm5lciwgMCkgKyB0aWNrUGFkZGluZyxcbiAgICAgICAgcmFuZ2UgPSBzY2FsZS5yYW5nZSgpLFxuICAgICAgICByYW5nZTAgPSArcmFuZ2VbMF0gKyAwLjUsXG4gICAgICAgIHJhbmdlMSA9ICtyYW5nZVtyYW5nZS5sZW5ndGggLSAxXSArIDAuNSxcbiAgICAgICAgcG9zaXRpb24gPSAoc2NhbGUuYmFuZHdpZHRoID8gY2VudGVyIDogbnVtYmVyKShzY2FsZS5jb3B5KCkpLFxuICAgICAgICBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0LFxuICAgICAgICBwYXRoID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi5kb21haW5cIikuZGF0YShbbnVsbF0pLFxuICAgICAgICB0aWNrID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi50aWNrXCIpLmRhdGEodmFsdWVzLCBzY2FsZSkub3JkZXIoKSxcbiAgICAgICAgdGlja0V4aXQgPSB0aWNrLmV4aXQoKSxcbiAgICAgICAgdGlja0VudGVyID0gdGljay5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKSxcbiAgICAgICAgbGluZSA9IHRpY2suc2VsZWN0KFwibGluZVwiKSxcbiAgICAgICAgdGV4dCA9IHRpY2suc2VsZWN0KFwidGV4dFwiKTtcblxuICAgIHBhdGggPSBwYXRoLm1lcmdlKHBhdGguZW50ZXIoKS5pbnNlcnQoXCJwYXRoXCIsIFwiLnRpY2tcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMDBcIikpO1xuXG4gICAgdGljayA9IHRpY2subWVyZ2UodGlja0VudGVyKTtcblxuICAgIGxpbmUgPSBsaW5lLm1lcmdlKHRpY2tFbnRlci5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiIzAwMFwiKVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKSk7XG5cbiAgICB0ZXh0ID0gdGV4dC5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjMDAwXCIpXG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAuYXR0cihcImR5XCIsIG9yaWVudCA9PT0gdG9wID8gXCIwZW1cIiA6IG9yaWVudCA9PT0gYm90dG9tID8gXCIwLjcxZW1cIiA6IFwiMC4zMmVtXCIpKTtcblxuICAgIGlmIChjb250ZXh0ICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHBhdGggPSBwYXRoLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0aWNrID0gdGljay50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgbGluZSA9IGxpbmUudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRleHQgPSB0ZXh0LnRyYW5zaXRpb24oY29udGV4dCk7XG5cbiAgICAgIHRpY2tFeGl0ID0gdGlja0V4aXQudHJhbnNpdGlvbihjb250ZXh0KVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGlzRmluaXRlKGQgPSBwb3NpdGlvbihkKSkgPyB0cmFuc2Zvcm0oZCkgOiB0aGlzLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTsgfSk7XG5cbiAgICAgIHRpY2tFbnRlclxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgdmFyIHAgPSB0aGlzLnBhcmVudE5vZGUuX19heGlzOyByZXR1cm4gdHJhbnNmb3JtKHAgJiYgaXNGaW5pdGUocCA9IHAoZCkpID8gcCA6IHBvc2l0aW9uKGQpKTsgfSk7XG4gICAgfVxuXG4gICAgdGlja0V4aXQucmVtb3ZlKCk7XG5cbiAgICBwYXRoXG4gICAgICAgIC5hdHRyKFwiZFwiLCBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09IHJpZ2h0XG4gICAgICAgICAgICA/IFwiTVwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIixcIiArIHJhbmdlMCArIFwiSDAuNVZcIiArIHJhbmdlMSArIFwiSFwiICsgayAqIHRpY2tTaXplT3V0ZXJcbiAgICAgICAgICAgIDogXCJNXCIgKyByYW5nZTAgKyBcIixcIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCJWMC41SFwiICsgcmFuZ2UxICsgXCJWXCIgKyBrICogdGlja1NpemVPdXRlcik7XG5cbiAgICB0aWNrXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB0cmFuc2Zvcm0ocG9zaXRpb24oZCkpOyB9KTtcblxuICAgIGxpbmVcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcik7XG5cbiAgICB0ZXh0XG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAudGV4dChmb3JtYXQpO1xuXG4gICAgc2VsZWN0aW9uLmZpbHRlcihlbnRlcmluZylcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMClcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBvcmllbnQgPT09IHJpZ2h0ID8gXCJzdGFydFwiIDogb3JpZW50ID09PSBsZWZ0ID8gXCJlbmRcIiA6IFwibWlkZGxlXCIpO1xuXG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkgeyB0aGlzLl9fYXhpcyA9IHBvc2l0aW9uOyB9KTtcbiAgfVxuXG4gIGF4aXMuc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2NhbGUgPSBfLCBheGlzKSA6IHNjYWxlO1xuICB9O1xuXG4gIGF4aXMudGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlja0FyZ3VtZW50cyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXhpcztcbiAgfTtcblxuICBheGlzLnRpY2tBcmd1bWVudHMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0FyZ3VtZW50cyA9IF8gPT0gbnVsbCA/IFtdIDogc2xpY2UuY2FsbChfKSwgYXhpcykgOiB0aWNrQXJndW1lbnRzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrVmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tWYWx1ZXMgPSBfID09IG51bGwgPyBudWxsIDogc2xpY2UuY2FsbChfKSwgYXhpcykgOiB0aWNrVmFsdWVzICYmIHRpY2tWYWx1ZXMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0Zvcm1hdCA9IF8sIGF4aXMpIDogdGlja0Zvcm1hdDtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSB0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplSW5uZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZU91dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZU91dGVyO1xuICB9O1xuXG4gIGF4aXMudGlja1BhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1BhZGRpbmcgPSArXywgYXhpcykgOiB0aWNrUGFkZGluZztcbiAgfTtcblxuICByZXR1cm4gYXhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNUb3Aoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXModG9wLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzUmlnaHQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMocmlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNCb3R0b20oc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMoYm90dG9tLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzTGVmdChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhsZWZ0LCBzY2FsZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXhpcy9zcmMvYXhpcy5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXhpcy9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYiwgZGFya2VyLCBicmlnaHRlcn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG52YXIgQSA9IC0wLjE0ODYxLFxuICAgIEIgPSArMS43ODI3NyxcbiAgICBDID0gLTAuMjkyMjcsXG4gICAgRCA9IC0wLjkwNjQ5LFxuICAgIEUgPSArMS45NzI5NCxcbiAgICBFRCA9IEUgKiBELFxuICAgIEVCID0gRSAqIEIsXG4gICAgQkNfREEgPSBCICogQyAtIEQgKiBBO1xuXG5mdW5jdGlvbiBjdWJlaGVsaXhDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBDdWJlaGVsaXgpIHJldHVybiBuZXcgQ3ViZWhlbGl4KG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBSZ2IpKSBvID0gcmdiQ29udmVydChvKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIGwgPSAoQkNfREEgKiBiICsgRUQgKiByIC0gRUIgKiBnKSAvIChCQ19EQSArIEVEIC0gRUIpLFxuICAgICAgYmwgPSBiIC0gbCxcbiAgICAgIGsgPSAoRSAqIChnIC0gbCkgLSBDICogYmwpIC8gRCxcbiAgICAgIHMgPSBNYXRoLnNxcnQoayAqIGsgKyBibCAqIGJsKSAvIChFICogbCAqICgxIC0gbCkpLCAvLyBOYU4gaWYgbD0wIG9yIGw9MVxuICAgICAgaCA9IHMgPyBNYXRoLmF0YW4yKGssIGJsKSAqIHJhZDJkZWcgLSAxMjAgOiBOYU47XG4gIHJldHVybiBuZXcgQ3ViZWhlbGl4KGggPCAwID8gaCArIDM2MCA6IGgsIHMsIGwsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY3ViZWhlbGl4Q29udmVydChoKSA6IG5ldyBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgdGhpcy5oID0gK2g7XG4gIHRoaXMucyA9ICtzO1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShDdWJlaGVsaXgsIGN1YmVoZWxpeCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEN1YmVoZWxpeCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaCA9IGlzTmFOKHRoaXMuaCkgPyAwIDogKHRoaXMuaCArIDEyMCkgKiBkZWcycmFkLFxuICAgICAgICBsID0gK3RoaXMubCxcbiAgICAgICAgYSA9IGlzTmFOKHRoaXMucykgPyAwIDogdGhpcy5zICogbCAqICgxIC0gbCksXG4gICAgICAgIGNvc2ggPSBNYXRoLmNvcyhoKSxcbiAgICAgICAgc2luaCA9IE1hdGguc2luKGgpO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgMjU1ICogKGwgKyBhICogKEEgKiBjb3NoICsgQiAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChDICogY29zaCArIEQgKiBzaW5oKSksXG4gICAgICAyNTUgKiAobCArIGEgKiAoRSAqIGNvc2gpKSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lXCI7XG5pbXBvcnQge0NvbG9yLCByZ2JDb252ZXJ0LCBSZ2J9IGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQge2RlZzJyYWQsIHJhZDJkZWd9IGZyb20gXCIuL21hdGhcIjtcblxudmFyIEtuID0gMTgsXG4gICAgWG4gPSAwLjk1MDQ3MCwgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgWW4gPSAxLFxuICAgIFpuID0gMS4wODg4MzAsXG4gICAgdDAgPSA0IC8gMjksXG4gICAgdDEgPSA2IC8gMjksXG4gICAgdDIgPSAzICogdDEgKiB0MSxcbiAgICB0MyA9IHQxICogdDEgKiB0MTtcblxuZnVuY3Rpb24gbGFiQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgTGFiKSByZXR1cm4gbmV3IExhYihvLmwsIG8uYSwgby5iLCBvLm9wYWNpdHkpO1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkge1xuICAgIHZhciBoID0gby5oICogZGVnMnJhZDtcbiAgICByZXR1cm4gbmV3IExhYihvLmwsIE1hdGguY29zKGgpICogby5jLCBNYXRoLnNpbihoKSAqIG8uYywgby5vcGFjaXR5KTtcbiAgfVxuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciBiID0gcmdiMnh5eihvLnIpLFxuICAgICAgYSA9IHJnYjJ4eXooby5nKSxcbiAgICAgIGwgPSByZ2IyeHl6KG8uYiksXG4gICAgICB4ID0geHl6MmxhYigoMC40MTI0NTY0ICogYiArIDAuMzU3NTc2MSAqIGEgKyAwLjE4MDQzNzUgKiBsKSAvIFhuKSxcbiAgICAgIHkgPSB4eXoybGFiKCgwLjIxMjY3MjkgKiBiICsgMC43MTUxNTIyICogYSArIDAuMDcyMTc1MCAqIGwpIC8gWW4pLFxuICAgICAgeiA9IHh5ejJsYWIoKDAuMDE5MzMzOSAqIGIgKyAwLjExOTE5MjAgKiBhICsgMC45NTAzMDQxICogbCkgLyBabik7XG4gIHJldHVybiBuZXcgTGFiKDExNiAqIHkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KSwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFiKGwsIGEsIGIsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBsYWJDb252ZXJ0KGwpIDogbmV3IExhYihsLCBhLCBiLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5hID0gK2E7XG4gIHRoaXMuYiA9ICtiO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKExhYiwgbGFiLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgKyBLbiAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgLSBLbiAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB5ID0gKHRoaXMubCArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKHRoaXMuYSkgPyB5IDogeSArIHRoaXMuYSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKHRoaXMuYikgPyB5IDogeSAtIHRoaXMuYiAvIDIwMDtcbiAgICB5ID0gWW4gKiBsYWIyeHl6KHkpO1xuICAgIHggPSBYbiAqIGxhYjJ4eXooeCk7XG4gICAgeiA9IFpuICogbGFiMnh5eih6KTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIHh5ejJyZ2IoIDMuMjQwNDU0MiAqIHggLSAxLjUzNzEzODUgKiB5IC0gMC40OTg1MzE0ICogeiksIC8vIEQ2NSAtPiBzUkdCXG4gICAgICB4eXoycmdiKC0wLjk2OTI2NjAgKiB4ICsgMS44NzYwMTA4ICogeSArIDAuMDQxNTU2MCAqIHopLFxuICAgICAgeHl6MnJnYiggMC4wNTU2NDM0ICogeCAtIDAuMjA0MDI1OSAqIHkgKyAxLjA1NzIyNTIgKiB6KSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xufVxuXG5mdW5jdGlvbiB4eXoycmdiKHgpIHtcbiAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5cbmZ1bmN0aW9uIHJnYjJ4eXooeCkge1xuICByZXR1cm4gKHggLz0gMjU1KSA8PSAwLjA0MDQ1ID8geCAvIDEyLjkyIDogTWF0aC5wb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn1cblxuZnVuY3Rpb24gaGNsQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgSGNsKSByZXR1cm4gbmV3IEhjbChvLmgsIG8uYywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgTGFiKSkgbyA9IGxhYkNvbnZlcnQobyk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGNsKGgsIGMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGgpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5jID0gK2M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhjbCwgaGNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sICsgS24gKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sIC0gS24gKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsYWJDb252ZXJ0KHRoaXMpLnJnYigpO1xuICB9XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sb3Ivc3JjL2xhYi5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuXG5leHBvcnQgdmFyIGJhY2tJbiA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbiAgfVxuXG4gIGJhY2tJbi5vdmVyc2hvb3QgPSBjdXN0b207XG5cbiAgcmV0dXJuIGJhY2tJbjtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja091dCA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG4gIH1cblxuICBiYWNrT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja091dDtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja0luT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgKj0gMikgPCAxID8gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSA6ICh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMikgLyAyO1xuICB9XG5cbiAgYmFja0luT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luT3V0O1xufSkob3ZlcnNob290KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1lYXNlL3NyYy9iYWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGIxID0gNCAvIDExLFxuICAgIGIyID0gNiAvIDExLFxuICAgIGIzID0gOCAvIDExLFxuICAgIGI0ID0gMyAvIDQsXG4gICAgYjUgPSA5IC8gMTEsXG4gICAgYjYgPSAxMCAvIDExLFxuICAgIGI3ID0gMTUgLyAxNixcbiAgICBiOCA9IDIxIC8gMjIsXG4gICAgYjkgPSA2MyAvIDY0LFxuICAgIGIwID0gMSAvIGIxIC8gYjE7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHJldHVybiAodCA9ICt0KSA8IGIxID8gYjAgKiB0ICogdCA6IHQgPCBiMyA/IGIwICogKHQgLT0gYjIpICogdCArIGI0IDogdCA8IGI2ID8gYjAgKiAodCAtPSBiNSkgKiB0ICsgYjcgOiBiMCAqICh0IC09IGI4KSAqIHQgKyBiOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIGJvdW5jZU91dCgxIC0gdCkgOiBib3VuY2VPdXQodCAtIDEpICsgMSkgLyAyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL2JvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjaXJjbGVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpIDogTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgLyAyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL2NpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCAqIHQgOiAodCAtPSAyKSAqIHQgKiB0ICsgMikgLyAyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL2N1YmljLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRhdSA9IDIgKiBNYXRoLlBJLFxuICAgIGFtcGxpdHVkZSA9IDEsXG4gICAgcGVyaW9kID0gMC4zO1xuXG5leHBvcnQgdmFyIGVsYXN0aWNJbiA9IChmdW5jdGlvbiBjdXN0b20oYSwgcCkge1xuICB2YXIgcyA9IE1hdGguYXNpbigxIC8gKGEgPSBNYXRoLm1heCgxLCBhKSkpICogKHAgLz0gdGF1KTtcblxuICBmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgMTAgKiAtLXQpICogTWF0aC5zaW4oKHMgLSB0KSAvIHApO1xuICB9XG5cbiAgZWxhc3RpY0luLmFtcGxpdHVkZSA9IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGN1c3RvbShhLCBwICogdGF1KTsgfTtcbiAgZWxhc3RpY0luLnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY0luO1xufSkoYW1wbGl0dWRlLCBwZXJpb2QpO1xuXG5leHBvcnQgdmFyIGVsYXN0aWNPdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gICAgcmV0dXJuIDEgLSBhICogTWF0aC5wb3coMiwgLTEwICogKHQgPSArdCkpICogTWF0aC5zaW4oKHQgKyBzKSAvIHApO1xuICB9XG5cbiAgZWxhc3RpY091dC5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNPdXQucGVyaW9kID0gZnVuY3Rpb24ocCkgeyByZXR1cm4gY3VzdG9tKGEsIHApOyB9O1xuXG4gIHJldHVybiBlbGFzdGljT3V0O1xufSkoYW1wbGl0dWRlLCBwZXJpb2QpO1xuXG5leHBvcnQgdmFyIGVsYXN0aWNJbk91dCA9IChmdW5jdGlvbiBjdXN0b20oYSwgcCkge1xuICB2YXIgcyA9IE1hdGguYXNpbigxIC8gKGEgPSBNYXRoLm1heCgxLCBhKSkpICogKHAgLz0gdGF1KTtcblxuICBmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgPSB0ICogMiAtIDEpIDwgMFxuICAgICAgICA/IGEgKiBNYXRoLnBvdygyLCAxMCAqIHQpICogTWF0aC5zaW4oKHMgLSB0KSAvIHApXG4gICAgICAgIDogMiAtIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKChzICsgdCkgLyBwKSkgLyAyO1xuICB9XG5cbiAgZWxhc3RpY0luT3V0LmFtcGxpdHVkZSA9IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGN1c3RvbShhLCBwICogdGF1KTsgfTtcbiAgZWxhc3RpY0luT3V0LnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY0luT3V0O1xufSkoYW1wbGl0dWRlLCBwZXJpb2QpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL2VsYXN0aWMuanNcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZXhwSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwT3V0KHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApIDogMiAtIE1hdGgucG93KDIsIDEwIC0gMTAgKiB0KSkgLyAyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL2V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gK3Q7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZWFzZS9zcmMvbGluZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGV4cG9uZW50ID0gMztcblxuZXhwb3J0IHZhciBwb2x5SW4gPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlJbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQsIGUpO1xuICB9XG5cbiAgcG9seUluLmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5SW47XG59KShleHBvbmVudCk7XG5cbmV4cG9ydCB2YXIgcG9seU91dCA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seU91dCh0KSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gdCwgZSk7XG4gIH1cblxuICBwb2x5T3V0LmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5T3V0O1xufSkoZXhwb25lbnQpO1xuXG5leHBvcnQgdmFyIHBvbHlJbk91dCA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seUluT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdyh0LCBlKSA6IDIgLSBNYXRoLnBvdygyIC0gdCwgZSkpIC8gMjtcbiAgfVxuXG4gIHBvbHlJbk91dC5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seUluT3V0O1xufSkoZXhwb25lbnQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWVhc2Uvc3JjL3BvbHkuanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiB0ICogKDIgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0IDogLS10ICogKDIgLSB0KSArIDEpIC8gMjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1lYXNlL3NyYy9xdWFkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICBoYWxmUGkgPSBwaSAvIDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5PdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbk91dCh0KSB7XG4gIHJldHVybiAoMSAtIE1hdGguY29zKHBpICogdCkpIC8gMjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1lYXNlL3NyYy9zaW4uanNcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2N1YmVoZWxpeCBhcyBjb2xvckN1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeChodWUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBjdWJlaGVsaXhHYW1tYSh5KSB7XG4gICAgeSA9ICt5O1xuXG4gICAgZnVuY3Rpb24gY3ViZWhlbGl4KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9yQ3ViZWhlbGl4KHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9yQ3ViZWhlbGl4KGVuZCkpLmgpLFxuICAgICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgICBzdGFydC5sID0gbChNYXRoLnBvdyh0LCB5KSk7XG4gICAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdWJlaGVsaXguZ2FtbWEgPSBjdWJlaGVsaXhHYW1tYTtcblxuICAgIHJldHVybiBjdWJlaGVsaXg7XG4gIH0pKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdWJlaGVsaXgoaHVlKTtcbmV4cG9ydCB2YXIgY3ViZWhlbGl4TG9uZyA9IGN1YmVoZWxpeChjb2xvcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2N1YmVoZWxpeC5qc1xuLy8gbW9kdWxlIGlkID0gMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aGNsIGFzIGNvbG9ySGNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gaGNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySGNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySGNsKGVuZCkpLmgpLFxuICAgICAgICBjID0gY29sb3Ioc3RhcnQuYywgZW5kLmMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LmMgPSBjKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoY2woaHVlKTtcbmV4cG9ydCB2YXIgaGNsTG9uZyA9IGhjbChjb2xvcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2hjbC5qc1xuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aHNsIGFzIGNvbG9ySHNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gaHNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySHNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySHNsKGVuZCkpLmgpLFxuICAgICAgICBzID0gY29sb3Ioc3RhcnQucywgZW5kLnMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoc2woaHVlKTtcbmV4cG9ydCB2YXIgaHNsTG9uZyA9IGhzbChjb2xvcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2hzbC5qc1xuLy8gbW9kdWxlIGlkID0gMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bGFiIGFzIGNvbG9yTGFifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIoc3RhcnQsIGVuZCkge1xuICB2YXIgbCA9IGNvbG9yKChzdGFydCA9IGNvbG9yTGFiKHN0YXJ0KSkubCwgKGVuZCA9IGNvbG9yTGFiKGVuZCkpLmwpLFxuICAgICAgYSA9IGNvbG9yKHN0YXJ0LmEsIGVuZC5hKSxcbiAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgIHN0YXJ0LmEgPSBhKHQpO1xuICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2xhYi5qc1xuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVycG9sYXRvciwgbikge1xuICB2YXIgc2FtcGxlcyA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHNhbXBsZXNbaV0gPSBpbnRlcnBvbGF0b3IoaSAvIChuIC0gMSkpO1xuICByZXR1cm4gc2FtcGxlcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvcXVhbnRpemUuanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKyBiICogdCk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL3JvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXJcIjtcbmltcG9ydCB7cGFyc2VDc3MsIHBhcnNlU3ZnfSBmcm9tIFwiLi9wYXJzZVwiO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZSwgcHhDb21tYSwgcHhQYXJlbiwgZGVnUGFyZW4pIHtcblxuICBmdW5jdGlvbiBwb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIiBcIiA6IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2goXCJ0cmFuc2xhdGUoXCIsIG51bGwsIHB4Q29tbWEsIG51bGwsIHB4UGFyZW4pO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiB8fCB5Yikge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiICsgeGIgKyBweENvbW1hICsgeWIgKyBweFBhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSAtIGIgPiAxODApIGIgKz0gMzYwOyBlbHNlIGlmIChiIC0gYSA+IDE4MCkgYSArPSAzNjA7IC8vIHNob3J0ZXN0IHBhdGhcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2tld1goYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiAhPT0gMSB8fCB5YiAhPT0gMSkge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIgKyB4YiArIFwiLFwiICsgeWIgKyBcIilcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuICAgIGEgPSBwYXJzZShhKSwgYiA9IHBhcnNlKGIpO1xuICAgIHRyYW5zbGF0ZShhLnRyYW5zbGF0ZVgsIGEudHJhbnNsYXRlWSwgYi50cmFuc2xhdGVYLCBiLnRyYW5zbGF0ZVksIHMsIHEpO1xuICAgIHJvdGF0ZShhLnJvdGF0ZSwgYi5yb3RhdGUsIHMsIHEpO1xuICAgIHNrZXdYKGEuc2tld1gsIGIuc2tld1gsIHMsIHEpO1xuICAgIHNjYWxlKGEuc2NhbGVYLCBhLnNjYWxlWSwgYi5zY2FsZVgsIGIuc2NhbGVZLCBzLCBxKTtcbiAgICBhID0gYiA9IG51bGw7IC8vIGdjXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBxLmxlbmd0aCwgbztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZUNzcywgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKTtcbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZVN2ZywgXCIsIFwiLCBcIilcIiwgXCIpXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZGVjb21wb3NlLCB7aWRlbnRpdHl9IGZyb20gXCIuL2RlY29tcG9zZVwiO1xuXG52YXIgY3NzTm9kZSxcbiAgICBjc3NSb290LFxuICAgIGNzc1ZpZXcsXG4gICAgc3ZnTm9kZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ3NzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJub25lXCIpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFjc3NOb2RlKSBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKSwgY3NzUm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgY3NzVmlldyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjc3NOb2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICB2YWx1ZSA9IGNzc1ZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjc3NSb290LmFwcGVuZENoaWxkKGNzc05vZGUpLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICBjc3NSb290LnJlbW92ZUNoaWxkKGNzc05vZGUpO1xuICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDcsIC0xKS5zcGxpdChcIixcIik7XG4gIHJldHVybiBkZWNvbXBvc2UoK3ZhbHVlWzBdLCArdmFsdWVbMV0sICt2YWx1ZVsyXSwgK3ZhbHVlWzNdLCArdmFsdWVbNF0sICt2YWx1ZVs1XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN2Zyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIXN2Z05vZGUpIHN2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIHN2Z05vZGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHZhbHVlKTtcbiAgaWYgKCEodmFsdWUgPSBzdmdOb2RlLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHZhbHVlID0gdmFsdWUubWF0cml4O1xuICByZXR1cm4gZGVjb21wb3NlKHZhbHVlLmEsIHZhbHVlLmIsIHZhbHVlLmMsIHZhbHVlLmQsIHZhbHVlLmUsIHZhbHVlLmYpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmhvID0gTWF0aC5TUVJUMixcbiAgICByaG8yID0gMixcbiAgICByaG80ID0gNCxcbiAgICBlcHNpbG9uMiA9IDFlLTEyO1xuXG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSArIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHNpbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpIC0gMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCgyICogeCkpIC0gMSkgLyAoeCArIDEpO1xufVxuXG4vLyBwMCA9IFt1eDAsIHV5MCwgdzBdXG4vLyBwMSA9IFt1eDEsIHV5MSwgdzFdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwMCwgcDEpIHtcbiAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSxcbiAgICAgIHV4MSA9IHAxWzBdLCB1eTEgPSBwMVsxXSwgdzEgPSBwMVsyXSxcbiAgICAgIGR4ID0gdXgxIC0gdXgwLFxuICAgICAgZHkgPSB1eTEgLSB1eTAsXG4gICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgaSxcbiAgICAgIFM7XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGZvciB1MCDiiYUgdTEuXG4gIGlmIChkMiA8IGVwc2lsb24yKSB7XG4gICAgUyA9IE1hdGgubG9nKHcxIC8gdzApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB1eDAgKyB0ICogZHgsXG4gICAgICAgIHV5MCArIHQgKiBkeSxcbiAgICAgICAgdzAgKiBNYXRoLmV4cChyaG8gKiB0ICogUylcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhbCBjYXNlLlxuICBlbHNlIHtcbiAgICB2YXIgZDEgPSBNYXRoLnNxcnQoZDIpLFxuICAgICAgICBiMCA9ICh3MSAqIHcxIC0gdzAgKiB3MCArIHJobzQgKiBkMikgLyAoMiAqIHcwICogcmhvMiAqIGQxKSxcbiAgICAgICAgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSByaG80ICogZDIpIC8gKDIgKiB3MSAqIHJobzIgKiBkMSksXG4gICAgICAgIHIwID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIwICogYjAgKyAxKSAtIGIwKSxcbiAgICAgICAgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpO1xuICAgIFMgPSAocjEgLSByMCkgLyByaG87XG4gICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBzID0gdCAqIFMsXG4gICAgICAgICAgY29zaHIwID0gY29zaChyMCksXG4gICAgICAgICAgdSA9IHcwIC8gKHJobzIgKiBkMSkgKiAoY29zaHIwICogdGFuaChyaG8gKiBzICsgcjApIC0gc2luaChyMCkpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdSAqIGR4LFxuICAgICAgICB1eTAgKyB1ICogZHksXG4gICAgICAgIHcwICogY29zaHIwIC8gY29zaChyaG8gKiBzICsgcjApXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGkuZHVyYXRpb24gPSBTICogMTAwMDtcblxuICByZXR1cm4gaTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwaSA9IE1hdGguUEksXG4gICAgdGF1ID0gMiAqIHBpLFxuICAgIGVwc2lsb24gPSAxZS02LFxuICAgIHRhdUVwc2lsb24gPSB0YXUgLSBlcHNpbG9uO1xuXG5mdW5jdGlvbiBQYXRoKCkge1xuICB0aGlzLl94MCA9IHRoaXMuX3kwID0gLy8gc3RhcnQgb2YgY3VycmVudCBzdWJwYXRoXG4gIHRoaXMuX3gxID0gdGhpcy5feTEgPSBudWxsOyAvLyBlbmQgb2YgY3VycmVudCBzdWJwYXRoXG4gIHRoaXMuXyA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHBhdGgoKSB7XG4gIHJldHVybiBuZXcgUGF0aDtcbn1cblxuUGF0aC5wcm90b3R5cGUgPSBwYXRoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFBhdGgsXG4gIG1vdmVUbzogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MCA9IHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTAgPSB0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5feDEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3gxID0gdGhpcy5feDAsIHRoaXMuX3kxID0gdGhpcy5feTA7XG4gICAgICB0aGlzLl8gKz0gXCJaXCI7XG4gICAgfVxuICB9LFxuICBsaW5lVG86IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgcXVhZHJhdGljQ3VydmVUbzogZnVuY3Rpb24oeDEsIHkxLCB4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiUVwiICsgKCt4MSkgKyBcIixcIiArICgreTEpICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYmV6aWVyQ3VydmVUbzogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJDXCIgKyAoK3gxKSArIFwiLFwiICsgKCt5MSkgKyBcIixcIiArICgreDIpICsgXCIsXCIgKyAoK3kyKSArIFwiLFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGFyY1RvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Miwgcikge1xuICAgIHgxID0gK3gxLCB5MSA9ICt5MSwgeDIgPSAreDIsIHkyID0gK3kyLCByID0gK3I7XG4gICAgdmFyIHgwID0gdGhpcy5feDEsXG4gICAgICAgIHkwID0gdGhpcy5feTEsXG4gICAgICAgIHgyMSA9IHgyIC0geDEsXG4gICAgICAgIHkyMSA9IHkyIC0geTEsXG4gICAgICAgIHgwMSA9IHgwIC0geDEsXG4gICAgICAgIHkwMSA9IHkwIC0geTEsXG4gICAgICAgIGwwMV8yID0geDAxICogeDAxICsgeTAxICogeTAxO1xuXG4gICAgLy8gSXMgdGhlIHJhZGl1cyBuZWdhdGl2ZT8gRXJyb3IuXG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgcik7XG5cbiAgICAvLyBJcyB0aGlzIHBhdGggZW1wdHk/IE1vdmUgdG8gKHgxLHkxKS5cbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MSA9IHgxKSArIFwiLFwiICsgKHRoaXMuX3kxID0geTEpO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDAseTApPyBEbyBub3RoaW5nLlxuICAgIGVsc2UgaWYgKCEobDAxXzIgPiBlcHNpbG9uKSkge31cblxuICAgIC8vIE9yLCBhcmUgKHgwLHkwKSwgKHgxLHkxKSBhbmQgKHgyLHkyKSBjb2xsaW5lYXI/XG4gICAgLy8gRXF1aXZhbGVudGx5LCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDIseTIpP1xuICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICBlbHNlIGlmICghKE1hdGguYWJzKHkwMSAqIHgyMSAtIHkyMSAqIHgwMSkgPiBlcHNpbG9uKSB8fCAhcikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICBlbHNlIHtcbiAgICAgIHZhciB4MjAgPSB4MiAtIHgwLFxuICAgICAgICAgIHkyMCA9IHkyIC0geTAsXG4gICAgICAgICAgbDIxXzIgPSB4MjEgKiB4MjEgKyB5MjEgKiB5MjEsXG4gICAgICAgICAgbDIwXzIgPSB4MjAgKiB4MjAgKyB5MjAgKiB5MjAsXG4gICAgICAgICAgbDIxID0gTWF0aC5zcXJ0KGwyMV8yKSxcbiAgICAgICAgICBsMDEgPSBNYXRoLnNxcnQobDAxXzIpLFxuICAgICAgICAgIGwgPSByICogTWF0aC50YW4oKHBpIC0gTWF0aC5hY29zKChsMjFfMiArIGwwMV8yIC0gbDIwXzIpIC8gKDIgKiBsMjEgKiBsMDEpKSkgLyAyKSxcbiAgICAgICAgICB0MDEgPSBsIC8gbDAxLFxuICAgICAgICAgIHQyMSA9IGwgLyBsMjE7XG5cbiAgICAgIC8vIElmIHRoZSBzdGFydCB0YW5nZW50IGlzIG5vdCBjb2luY2lkZW50IHdpdGggKHgwLHkwKSwgbGluZSB0by5cbiAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICgrKHkwMSAqIHgyMCA+IHgwMSAqIHkyMCkpICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MSArIHQyMSAqIHgyMSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxICsgdDIxICogeTIxKTtcbiAgICB9XG4gIH0sXG4gIGFyYzogZnVuY3Rpb24oeCwgeSwgciwgYTAsIGExLCBjY3cpIHtcbiAgICB4ID0gK3gsIHkgPSAreSwgciA9ICtyO1xuICAgIHZhciBkeCA9IHIgKiBNYXRoLmNvcyhhMCksXG4gICAgICAgIGR5ID0gciAqIE1hdGguc2luKGEwKSxcbiAgICAgICAgeDAgPSB4ICsgZHgsXG4gICAgICAgIHkwID0geSArIGR5LFxuICAgICAgICBjdyA9IDEgXiBjY3csXG4gICAgICAgIGRhID0gY2N3ID8gYTAgLSBhMSA6IGExIC0gYTA7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDAseTApLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDAseTApIG5vdCBjb2luY2lkZW50IHdpdGggdGhlIHByZXZpb3VzIHBvaW50PyBMaW5lIHRvICh4MCx5MCkuXG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5feDEgLSB4MCkgPiBlcHNpbG9uIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0geTApID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIElzIHRoaXMgYXJjIGVtcHR5PyBXZeKAmXJlIGRvbmUuXG4gICAgaWYgKCFyKSByZXR1cm47XG5cbiAgICAvLyBEb2VzIHRoZSBhbmdsZSBnbyB0aGUgd3Jvbmcgd2F5PyBGbGlwIHRoZSBkaXJlY3Rpb24uXG4gICAgaWYgKGRhIDwgMCkgZGEgPSBkYSAlIHRhdSArIHRhdTtcblxuICAgIC8vIElzIHRoaXMgYSBjb21wbGV0ZSBjaXJjbGU/IERyYXcgdHdvIGFyY3MgdG8gY29tcGxldGUgdGhlIGNpcmNsZS5cbiAgICBpZiAoZGEgPiB0YXVFcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwxLFwiICsgY3cgKyBcIixcIiArICh4IC0gZHgpICsgXCIsXCIgKyAoeSAtIGR5KSArIFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MCkgKyBcIixcIiArICh0aGlzLl95MSA9IHkwKTtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBub24tZW1wdHk/IERyYXcgYW4gYXJjIVxuICAgIGVsc2UgaWYgKGRhID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsXCIgKyAoKyhkYSA+PSBwaSkpICsgXCIsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geCArIHIgKiBNYXRoLmNvcyhhMSkpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5ICsgciAqIE1hdGguc2luKGExKSk7XG4gICAgfVxuICB9LFxuICByZWN0OiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpICsgXCJoXCIgKyAoK3cpICsgXCJ2XCIgKyAoK2gpICsgXCJoXCIgKyAoLXcpICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXBhdGgvc3JjL3BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JhbmdlIGFzIHNlcXVlbmNlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBvcmRpbmFsIGZyb20gXCIuL29yZGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFuZCgpIHtcbiAgdmFyIHNjYWxlID0gb3JkaW5hbCgpLnVua25vd24odW5kZWZpbmVkKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIG9yZGluYWxSYW5nZSA9IHNjYWxlLnJhbmdlLFxuICAgICAgcmFuZ2UgPSBbMCwgMV0sXG4gICAgICBzdGVwLFxuICAgICAgYmFuZHdpZHRoLFxuICAgICAgcm91bmQgPSBmYWxzZSxcbiAgICAgIHBhZGRpbmdJbm5lciA9IDAsXG4gICAgICBwYWRkaW5nT3V0ZXIgPSAwLFxuICAgICAgYWxpZ24gPSAwLjU7XG5cbiAgZGVsZXRlIHNjYWxlLnVua25vd247XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IGRvbWFpbigpLmxlbmd0aCxcbiAgICAgICAgcmV2ZXJzZSA9IHJhbmdlWzFdIDwgcmFuZ2VbMF0sXG4gICAgICAgIHN0YXJ0ID0gcmFuZ2VbcmV2ZXJzZSAtIDBdLFxuICAgICAgICBzdG9wID0gcmFuZ2VbMSAtIHJldmVyc2VdO1xuICAgIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDEsIG4gLSBwYWRkaW5nSW5uZXIgKyBwYWRkaW5nT3V0ZXIgKiAyKTtcbiAgICBpZiAocm91bmQpIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgIHN0YXJ0ICs9IChzdG9wIC0gc3RhcnQgLSBzdGVwICogKG4gLSBwYWRkaW5nSW5uZXIpKSAqIGFsaWduO1xuICAgIGJhbmR3aWR0aCA9IHN0ZXAgKiAoMSAtIHBhZGRpbmdJbm5lcik7XG4gICAgaWYgKHJvdW5kKSBzdGFydCA9IE1hdGgucm91bmQoc3RhcnQpLCBiYW5kd2lkdGggPSBNYXRoLnJvdW5kKGJhbmR3aWR0aCk7XG4gICAgdmFyIHZhbHVlcyA9IHNlcXVlbmNlKG4pLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBzdGFydCArIHN0ZXAgKiBpOyB9KTtcbiAgICByZXR1cm4gb3JkaW5hbFJhbmdlKHJldmVyc2UgPyB2YWx1ZXMucmV2ZXJzZSgpIDogdmFsdWVzKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IFsrX1swXSwgK19bMV1dLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IFsrX1swXSwgK19bMV1dLCByb3VuZCA9IHRydWUsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5iYW5kd2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZHdpZHRoO1xuICB9O1xuXG4gIHNjYWxlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3RlcDtcbiAgfTtcblxuICBzY2FsZS5yb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyb3VuZCA9ICEhXywgcmVzY2FsZSgpKSA6IHJvdW5kO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gcGFkZGluZ091dGVyID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgXykpLCByZXNjYWxlKCkpIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmdJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nSW5uZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBfKSksIHJlc2NhbGUoKSkgOiBwYWRkaW5nSW5uZXI7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZ091dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdPdXRlciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IHBhZGRpbmdPdXRlcjtcbiAgfTtcblxuICBzY2FsZS5hbGlnbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbGlnbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IGFsaWduO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZCgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKCkpXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnJvdW5kKHJvdW5kKVxuICAgICAgICAucGFkZGluZ0lubmVyKHBhZGRpbmdJbm5lcilcbiAgICAgICAgLnBhZGRpbmdPdXRlcihwYWRkaW5nT3V0ZXIpXG4gICAgICAgIC5hbGlnbihhbGlnbik7XG4gIH07XG5cbiAgcmV0dXJuIHJlc2NhbGUoKTtcbn1cblxuZnVuY3Rpb24gcG9pbnRpc2goc2NhbGUpIHtcbiAgdmFyIGNvcHkgPSBzY2FsZS5jb3B5O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nSW5uZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb2ludGlzaChjb3B5KCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KCkge1xuICByZXR1cm4gcG9pbnRpc2goYmFuZCgpLnBhZGRpbmdJbm5lcigxKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2JhbmQuanNcbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnMoXCIxZjc3YjRmZjdmMGUyY2EwMmNkNjI3Mjg5NDY3YmQ4YzU2NGJlMzc3YzI3ZjdmN2ZiY2JkMjIxN2JlY2ZcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2NhdGVnb3J5MTAuanNcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnMoXCIxZjc3YjRhZWM3ZThmZjdmMGVmZmJiNzgyY2EwMmM5OGRmOGFkNjI3MjhmZjk4OTY5NDY3YmRjNWIwZDU4YzU2NGJjNDljOTRlMzc3YzJmN2I2ZDI3ZjdmN2ZjN2M3YzdiY2JkMjJkYmRiOGQxN2JlY2Y5ZWRhZTVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2NhdGVnb3J5MjAuanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnMoXCIzOTNiNzk1MjU0YTM2YjZlY2Y5YzllZGU2Mzc5Mzk4Y2EyNTJiNWNmNmJjZWRiOWM4YzZkMzFiZDllMzllN2JhNTJlN2NiOTQ4NDNjMzlhZDQ5NGFkNjYxNmJlNzk2OWM3YjQxNzNhNTUxOTRjZTZkYmRkZTllZDZcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2NhdGVnb3J5MjBiLmpzXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi9jb2xvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3JzKFwiMzE4MmJkNmJhZWQ2OWVjYWUxYzZkYmVmZTY1NTBkZmQ4ZDNjZmRhZTZiZmRkMGEyMzFhMzU0NzRjNDc2YTFkOTliYzdlOWMwNzU2YmIxOWU5YWM4YmNiZGRjZGFkYWViNjM2MzYzOTY5Njk2YmRiZGJkZDlkOWQ5XCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9jYXRlZ29yeTIwYy5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y3ViZWhlbGl4fSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVDdWJlaGVsaXhMb25nfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJwb2xhdGVDdWJlaGVsaXhMb25nKGN1YmVoZWxpeCgzMDAsIDAuNSwgMC4wKSwgY3ViZWhlbGl4KC0yNDAsIDAuNSwgMS4wKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2N1YmVoZWxpeC5qc1xuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bWFwfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhclwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkoKSB7XG4gIHZhciBkb21haW4gPSBbMCwgMV07XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiAreDtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IHNjYWxlO1xuXG4gIHNjYWxlLmRvbWFpbiA9IHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IG1hcC5jYWxsKF8sIG51bWJlciksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaWRlbnRpdHkoKS5kb21haW4oZG9tYWluKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3RpY2tzfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5cbmZ1bmN0aW9uIGRlaW50ZXJwb2xhdGUoYSwgYikge1xuICByZXR1cm4gKGIgPSBNYXRoLmxvZyhiIC8gYSkpXG4gICAgICA/IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubG9nKHggLyBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoYik7XG59XG5cbmZ1bmN0aW9uIHJlaW50ZXJwb2xhdGUoYSwgYikge1xuICByZXR1cm4gYSA8IDBcbiAgICAgID8gZnVuY3Rpb24odCkgeyByZXR1cm4gLU1hdGgucG93KC1iLCB0KSAqIE1hdGgucG93KC1hLCAxIC0gdCk7IH1cbiAgICAgIDogZnVuY3Rpb24odCkgeyByZXR1cm4gTWF0aC5wb3coYiwgdCkgKiBNYXRoLnBvdyhhLCAxIC0gdCk7IH07XG59XG5cbmZ1bmN0aW9uIHBvdzEwKHgpIHtcbiAgcmV0dXJuIGlzRmluaXRlKHgpID8gKyhcIjFlXCIgKyB4KSA6IHggPCAwID8gMCA6IHg7XG59XG5cbmZ1bmN0aW9uIHBvd3AoYmFzZSkge1xuICByZXR1cm4gYmFzZSA9PT0gMTAgPyBwb3cxMFxuICAgICAgOiBiYXNlID09PSBNYXRoLkUgPyBNYXRoLmV4cFxuICAgICAgOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnBvdyhiYXNlLCB4KTsgfTtcbn1cblxuZnVuY3Rpb24gbG9ncChiYXNlKSB7XG4gIHJldHVybiBiYXNlID09PSBNYXRoLkUgPyBNYXRoLmxvZ1xuICAgICAgOiBiYXNlID09PSAxMCAmJiBNYXRoLmxvZzEwXG4gICAgICB8fCBiYXNlID09PSAyICYmIE1hdGgubG9nMlxuICAgICAgfHwgKGJhc2UgPSBNYXRoLmxvZyhiYXNlKSwgZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5sb2coeCkgLyBiYXNlOyB9KTtcbn1cblxuZnVuY3Rpb24gcmVmbGVjdChmKSB7XG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIC1mKC14KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpLmRvbWFpbihbMSwgMTBdKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIGJhc2UgPSAxMCxcbiAgICAgIGxvZ3MgPSBsb2dwKDEwKSxcbiAgICAgIHBvd3MgPSBwb3dwKDEwKTtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIGxvZ3MgPSBsb2dwKGJhc2UpLCBwb3dzID0gcG93cChiYXNlKTtcbiAgICBpZiAoZG9tYWluKClbMF0gPCAwKSBsb2dzID0gcmVmbGVjdChsb2dzKSwgcG93cyA9IHJlZmxlY3QocG93cyk7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgc2NhbGUuYmFzZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChiYXNlID0gK18sIHJlc2NhbGUoKSkgOiBiYXNlO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKSxcbiAgICAgICAgdSA9IGRbMF0sXG4gICAgICAgIHYgPSBkW2QubGVuZ3RoIC0gMV0sXG4gICAgICAgIHI7XG5cbiAgICBpZiAociA9IHYgPCB1KSBpID0gdSwgdSA9IHYsIHYgPSBpO1xuXG4gICAgdmFyIGkgPSBsb2dzKHUpLFxuICAgICAgICBqID0gbG9ncyh2KSxcbiAgICAgICAgcCxcbiAgICAgICAgayxcbiAgICAgICAgdCxcbiAgICAgICAgbiA9IGNvdW50ID09IG51bGwgPyAxMCA6ICtjb3VudCxcbiAgICAgICAgeiA9IFtdO1xuXG4gICAgaWYgKCEoYmFzZSAlIDEpICYmIGogLSBpIDwgbikge1xuICAgICAgaSA9IE1hdGgucm91bmQoaSkgLSAxLCBqID0gTWF0aC5yb3VuZChqKSArIDE7XG4gICAgICBpZiAodSA+IDApIGZvciAoOyBpIDwgajsgKytpKSB7XG4gICAgICAgIGZvciAoayA9IDEsIHAgPSBwb3dzKGkpOyBrIDwgYmFzZTsgKytrKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmb3IgKDsgaSA8IGo7ICsraSkge1xuICAgICAgICBmb3IgKGsgPSBiYXNlIC0gMSwgcCA9IHBvd3MoaSk7IGsgPj0gMTsgLS1rKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeiA9IHRpY2tzKGksIGosIE1hdGgubWluKGogLSBpLCBuKSkubWFwKHBvd3MpO1xuICAgIH1cblxuICAgIHJldHVybiByID8gei5yZXZlcnNlKCkgOiB6O1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgaWYgKHNwZWNpZmllciA9PSBudWxsKSBzcGVjaWZpZXIgPSBiYXNlID09PSAxMCA/IFwiLjBlXCIgOiBcIixcIjtcbiAgICBpZiAodHlwZW9mIHNwZWNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBzcGVjaWZpZXIgPSBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgICBpZiAoY291bnQgPT09IEluZmluaXR5KSByZXR1cm4gc3BlY2lmaWVyO1xuICAgIGlmIChjb3VudCA9PSBudWxsKSBjb3VudCA9IDEwO1xuICAgIHZhciBrID0gTWF0aC5tYXgoMSwgYmFzZSAqIGNvdW50IC8gc2NhbGUudGlja3MoKS5sZW5ndGgpOyAvLyBUT0RPIGZhc3QgZXN0aW1hdGU/XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBpID0gZCAvIHBvd3MoTWF0aC5yb3VuZChsb2dzKGQpKSk7XG4gICAgICBpZiAoaSAqIGJhc2UgPCBiYXNlIC0gMC41KSBpICo9IGJhc2U7XG4gICAgICByZXR1cm4gaSA8PSBrID8gc3BlY2lmaWVyKGQpIDogXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9tYWluKG5pY2UoZG9tYWluKCksIHtcbiAgICAgIGZsb29yOiBmdW5jdGlvbih4KSB7IHJldHVybiBwb3dzKE1hdGguZmxvb3IobG9ncyh4KSkpOyB9LFxuICAgICAgY2VpbDogZnVuY3Rpb24oeCkgeyByZXR1cm4gcG93cyhNYXRoLmNlaWwobG9ncyh4KSkpOyB9XG4gICAgfSkpO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbG9nKCkuYmFzZShiYXNlKSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9sb2cuanNcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5cbmZ1bmN0aW9uIHJhaXNlKHgsIGV4cG9uZW50KSB7XG4gIHJldHVybiB4IDwgMCA/IC1NYXRoLnBvdygteCwgZXhwb25lbnQpIDogTWF0aC5wb3coeCwgZXhwb25lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3coKSB7XG4gIHZhciBleHBvbmVudCA9IDEsXG4gICAgICBzY2FsZSA9IGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSksXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW47XG5cbiAgZnVuY3Rpb24gZGVpbnRlcnBvbGF0ZShhLCBiKSB7XG4gICAgcmV0dXJuIChiID0gcmFpc2UoYiwgZXhwb25lbnQpIC0gKGEgPSByYWlzZShhLCBleHBvbmVudCkpKVxuICAgICAgICA/IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIChyYWlzZSh4LCBleHBvbmVudCkgLSBhKSAvIGI7IH1cbiAgICAgICAgOiBjb25zdGFudChiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlaW50ZXJwb2xhdGUoYSwgYikge1xuICAgIGIgPSByYWlzZShiLCBleHBvbmVudCkgLSAoYSA9IHJhaXNlKGEsIGV4cG9uZW50KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHJhaXNlKGEgKyBiICogdCwgMSAvIGV4cG9uZW50KTsgfTtcbiAgfVxuXG4gIHNjYWxlLmV4cG9uZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGV4cG9uZW50ID0gK18sIGRvbWFpbihkb21haW4oKSkpIDogZXhwb25lbnQ7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBwb3coKS5leHBvbmVudChleHBvbmVudCkpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3FydCgpIHtcbiAgcmV0dXJuIHBvdygpLmV4cG9uZW50KDAuNSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3Bvdy5qc1xuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXNjZW5kaW5nLCBiaXNlY3QsIHF1YW50aWxlIGFzIHRocmVzaG9sZH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGlsZSgpIHtcbiAgdmFyIGRvbWFpbiA9IFtdLFxuICAgICAgcmFuZ2UgPSBbXSxcbiAgICAgIHRocmVzaG9sZHMgPSBbXTtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBpID0gMCwgbiA9IE1hdGgubWF4KDEsIHJhbmdlLmxlbmd0aCk7XG4gICAgdGhyZXNob2xkcyA9IG5ldyBBcnJheShuIC0gMSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRocmVzaG9sZHNbaSAtIDFdID0gdGhyZXNob2xkKGRvbWFpbiwgaSAvIG4pO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICBpZiAoIWlzTmFOKHggPSAreCkpIHJldHVybiByYW5nZVtiaXNlY3QodGhyZXNob2xkcywgeCldO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gaSA8IDAgPyBbTmFOLCBOYU5dIDogW1xuICAgICAgaSA+IDAgPyB0aHJlc2hvbGRzW2kgLSAxXSA6IGRvbWFpblswXSxcbiAgICAgIGkgPCB0aHJlc2hvbGRzLmxlbmd0aCA/IHRocmVzaG9sZHNbaV0gOiBkb21haW5bZG9tYWluLmxlbmd0aCAtIDFdXG4gICAgXTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluLnNsaWNlKCk7XG4gICAgZG9tYWluID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBfLmxlbmd0aCwgZDsgaSA8IG47ICsraSkgaWYgKGQgPSBfW2ldLCBkICE9IG51bGwgJiYgIWlzTmFOKGQgPSArZCkpIGRvbWFpbi5wdXNoKGQpO1xuICAgIGRvbWFpbi5zb3J0KGFzY2VuZGluZyk7XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IHNsaWNlLmNhbGwoXyksIHJlc2NhbGUoKSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnF1YW50aWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGRzLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBxdWFudGlsZSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UocmFuZ2UpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jpc2VjdH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGl6ZSgpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMSxcbiAgICAgIG4gPSAxLFxuICAgICAgZG9tYWluID0gWzAuNV0sXG4gICAgICByYW5nZSA9IFswLCAxXTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgaWYgKHggPD0geCkgcmV0dXJuIHJhbmdlW2Jpc2VjdChkb21haW4sIHgsIDAsIG4pXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIGkgPSAtMTtcbiAgICBkb21haW4gPSBuZXcgQXJyYXkobik7XG4gICAgd2hpbGUgKCsraSA8IG4pIGRvbWFpbltpXSA9ICgoaSArIDEpICogeDEgLSAoaSAtIG4pICogeDApIC8gKG4gKyAxKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSArX1swXSwgeDEgPSArX1sxXSwgcmVzY2FsZSgpKSA6IFt4MCwgeDFdO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG4gPSAocmFuZ2UgPSBzbGljZS5jYWxsKF8pKS5sZW5ndGggLSAxLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgdmFyIGkgPSByYW5nZS5pbmRleE9mKHkpO1xuICAgIHJldHVybiBpIDwgMCA/IFtOYU4sIE5hTl1cbiAgICAgICAgOiBpIDwgMSA/IFt4MCwgZG9tYWluWzBdXVxuICAgICAgICA6IGkgPj0gbiA/IFtkb21haW5bbiAtIDFdLCB4MV1cbiAgICAgICAgOiBbZG9tYWluW2kgLSAxXSwgZG9tYWluW2ldXTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHF1YW50aXplKClcbiAgICAgICAgLmRvbWFpbihbeDAsIHgxXSlcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanNcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2N1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlQ3ViZWhlbGl4TG9uZ30gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5cbmV4cG9ydCB2YXIgd2FybSA9IGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZyhjdWJlaGVsaXgoLTEwMCwgMC43NSwgMC4zNSksIGN1YmVoZWxpeCg4MCwgMS41MCwgMC44KSk7XG5cbmV4cG9ydCB2YXIgY29vbCA9IGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZyhjdWJlaGVsaXgoMjYwLCAwLjc1LCAwLjM1KSwgY3ViZWhlbGl4KDgwLCAxLjUwLCAwLjgpKTtcblxudmFyIHJhaW5ib3cgPSBjdWJlaGVsaXgoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odCkge1xuICBpZiAodCA8IDAgfHwgdCA+IDEpIHQgLT0gTWF0aC5mbG9vcih0KTtcbiAgdmFyIHRzID0gTWF0aC5hYnModCAtIDAuNSk7XG4gIHJhaW5ib3cuaCA9IDM2MCAqIHQgLSAxMDA7XG4gIHJhaW5ib3cucyA9IDEuNSAtIDEuNSAqIHRzO1xuICByYWluYm93LmwgPSAwLjggLSAwLjkgKiB0cztcbiAgcmV0dXJuIHJhaW5ib3cgKyBcIlwiO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9yYWluYm93LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXF1ZW50aWFsKGludGVycG9sYXRvcikge1xuICB2YXIgeDAgPSAwLFxuICAgICAgeDEgPSAxLFxuICAgICAgY2xhbXAgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgdmFyIHQgPSAoeCAtIHgwKSAvICh4MSAtIHgwKTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdG9yKGNsYW1wID8gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpIDogdCk7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSArX1swXSwgeDEgPSArX1sxXSwgc2NhbGUpIDogW3gwLCB4MV07XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xhbXAgPSAhIV8sIHNjYWxlKSA6IGNsYW1wO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRvciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0b3IgPSBfLCBzY2FsZSkgOiBpbnRlcnBvbGF0b3I7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZXF1ZW50aWFsKGludGVycG9sYXRvcikuZG9tYWluKFt4MCwgeDFdKS5jbGFtcChjbGFtcCk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3NlcXVlbnRpYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jpc2VjdH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJlc2hvbGQoKSB7XG4gIHZhciBkb21haW4gPSBbMC41XSxcbiAgICAgIHJhbmdlID0gWzAsIDFdLFxuICAgICAgbiA9IDE7XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIGlmICh4IDw9IHgpIHJldHVybiByYW5nZVtiaXNlY3QoZG9tYWluLCB4LCAwLCBuKV07XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gc2xpY2UuY2FsbChfKSwgbiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCAtIDEpLCBzY2FsZSkgOiBkb21haW4uc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IHNsaWNlLmNhbGwoXyksIG4gPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGggLSAxKSwgc2NhbGUpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgdmFyIGkgPSByYW5nZS5pbmRleE9mKHkpO1xuICAgIHJldHVybiBbZG9tYWluW2kgLSAxXSwgZG9tYWluW2ldXTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZCgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UocmFuZ2UpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvdGhyZXNob2xkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdCwgZm9ybWF0UHJlZml4LCBmb3JtYXRTcGVjaWZpZXIsIHByZWNpc2lvbkZpeGVkLCBwcmVjaXNpb25QcmVmaXgsIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRvbWFpbiwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RhcnQgPSBkb21haW5bMF0sXG4gICAgICBzdG9wID0gZG9tYWluW2RvbWFpbi5sZW5ndGggLSAxXSxcbiAgICAgIHN0ZXAgPSB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQgPT0gbnVsbCA/IDEwIDogY291bnQpLFxuICAgICAgcHJlY2lzaW9uO1xuICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyID09IG51bGwgPyBcIixmXCIgOiBzcGVjaWZpZXIpO1xuICBzd2l0Y2ggKHNwZWNpZmllci50eXBlKSB7XG4gICAgY2FzZSBcInNcIjoge1xuICAgICAgdmFyIHZhbHVlID0gTWF0aC5tYXgoTWF0aC5hYnMoc3RhcnQpLCBNYXRoLmFicyhzdG9wKSk7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25QcmVmaXgoc3RlcCwgdmFsdWUpKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICAgIHJldHVybiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNhc2UgXCJcIjpcbiAgICBjYXNlIFwiZVwiOlxuICAgIGNhc2UgXCJnXCI6XG4gICAgY2FzZSBcInBcIjpcbiAgICBjYXNlIFwiclwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25Sb3VuZChzdGVwLCBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uIC0gKHNwZWNpZmllci50eXBlID09PSBcImVcIik7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImZcIjpcbiAgICBjYXNlIFwiJVwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25GaXhlZChzdGVwKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiJVwiKSAqIDI7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzcGVjaWZpZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy90aWNrRm9ybWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjYWxlbmRhcn0gZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IHt1dGNGb3JtYXR9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0IHt1dGNZZWFyLCB1dGNNb250aCwgdXRjV2VlaywgdXRjRGF5LCB1dGNIb3VyLCB1dGNNaW51dGUsIHV0Y1NlY29uZCwgdXRjTWlsbGlzZWNvbmR9IGZyb20gXCJkMy10aW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY2FsZW5kYXIodXRjWWVhciwgdXRjTW9udGgsIHV0Y1dlZWssIHV0Y0RheSwgdXRjSG91ciwgdXRjTWludXRlLCB1dGNTZWNvbmQsIHV0Y01pbGxpc2Vjb25kLCB1dGNGb3JtYXQpLmRvbWFpbihbRGF0ZS5VVEMoMjAwMCwgMCwgMSksIERhdGUuVVRDKDIwMDAsIDAsIDIpXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3V0Y1RpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuXG5mdW5jdGlvbiByYW1wKHJhbmdlKSB7XG4gIHZhciBuID0gcmFuZ2UubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiByYW5nZVtNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICogbikpKV07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbXAoY29sb3JzKFwiNDQwMTU0NDQwMjU2NDUwNDU3NDUwNTU5NDYwNzVhNDYwODVjNDYwYTVkNDYwYjVlNDcwZDYwNDcwZTYxNDcxMDYzNDcxMTY0NDcxMzY1NDgxNDY3NDgxNjY4NDgxNzY5NDgxODZhNDgxYTZjNDgxYjZkNDgxYzZlNDgxZDZmNDgxZjcwNDgyMDcxNDgyMTczNDgyMzc0NDgyNDc1NDgyNTc2NDgyNjc3NDgyODc4NDgyOTc5NDcyYTdhNDcyYzdhNDcyZDdiNDcyZTdjNDcyZjdkNDYzMDdlNDYzMjdlNDYzMzdmNDYzNDgwNDUzNTgxNDUzNzgxNDUzODgyNDQzOTgzNDQzYTgzNDQzYjg0NDMzZDg0NDMzZTg1NDIzZjg1NDI0MDg2NDI0MTg2NDE0Mjg3NDE0NDg3NDA0NTg4NDA0Njg4M2Y0Nzg4M2Y0ODg5M2U0OTg5M2U0YTg5M2U0YzhhM2Q0ZDhhM2Q0ZThhM2M0ZjhhM2M1MDhiM2I1MThiM2I1MjhiM2E1MzhiM2E1NDhjMzk1NThjMzk1NjhjMzg1ODhjMzg1OThjMzc1YThjMzc1YjhkMzY1YzhkMzY1ZDhkMzU1ZThkMzU1ZjhkMzQ2MDhkMzQ2MThkMzM2MjhkMzM2MzhkMzI2NDhlMzI2NThlMzE2NjhlMzE2NzhlMzE2ODhlMzA2OThlMzA2YThlMmY2YjhlMmY2YzhlMmU2ZDhlMmU2ZThlMmU2ZjhlMmQ3MDhlMmQ3MThlMmM3MThlMmM3MjhlMmM3MzhlMmI3NDhlMmI3NThlMmE3NjhlMmE3NzhlMmE3ODhlMjk3OThlMjk3YThlMjk3YjhlMjg3YzhlMjg3ZDhlMjc3ZThlMjc3ZjhlMjc4MDhlMjY4MThlMjY4MjhlMjY4MjhlMjU4MzhlMjU4NDhlMjU4NThlMjQ4NjhlMjQ4NzhlMjM4ODhlMjM4OThlMjM4YThkMjI4YjhkMjI4YzhkMjI4ZDhkMjE4ZThkMjE4ZjhkMjE5MDhkMjE5MThjMjA5MjhjMjA5MjhjMjA5MzhjMWY5NDhjMWY5NThiMWY5NjhiMWY5NzhiMWY5ODhiMWY5OThhMWY5YThhMWU5YjhhMWU5Yzg5MWU5ZDg5MWY5ZTg5MWY5Zjg4MWZhMDg4MWZhMTg4MWZhMTg3MWZhMjg3MjBhMzg2MjBhNDg2MjFhNTg1MjFhNjg1MjJhNzg1MjJhODg0MjNhOTgzMjRhYTgzMjVhYjgyMjVhYzgyMjZhZDgxMjdhZDgxMjhhZTgwMjlhZjdmMmFiMDdmMmNiMTdlMmRiMjdkMmViMzdjMmZiNDdjMzFiNTdiMzJiNjdhMzRiNjc5MzViNzc5MzdiODc4MzhiOTc3M2FiYTc2M2JiYjc1M2RiYzc0M2ZiYzczNDBiZDcyNDJiZTcxNDRiZjcwNDZjMDZmNDhjMTZlNGFjMTZkNGNjMjZjNGVjMzZiNTBjNDZhNTJjNTY5NTRjNTY4NTZjNjY3NThjNzY1NWFjODY0NWNjODYzNWVjOTYyNjBjYTYwNjNjYjVmNjVjYjVlNjdjYzVjNjljZDViNmNjZDVhNmVjZTU4NzBjZjU3NzNkMDU2NzVkMDU0NzdkMTUzN2FkMTUxN2NkMjUwN2ZkMzRlODFkMzRkODRkNDRiODZkNTQ5ODlkNTQ4OGJkNjQ2OGVkNjQ1OTBkNzQzOTNkNzQxOTVkODQwOThkODNlOWJkOTNjOWRkOTNiYTBkYTM5YTJkYTM3YTVkYjM2YThkYjM0YWFkYzMyYWRkYzMwYjBkZDJmYjJkZDJkYjVkZTJiYjhkZTI5YmFkZTI4YmRkZjI2YzBkZjI1YzJkZjIzYzVlMDIxYzhlMDIwY2FlMTFmY2RlMTFkZDBlMTFjZDJlMjFiZDVlMjFhZDhlMjE5ZGFlMzE5ZGRlMzE4ZGZlMzE4ZTJlNDE4ZTVlNDE5ZTdlNDE5ZWFlNTFhZWNlNTFiZWZlNTFjZjFlNTFkZjRlNjFlZjZlNjIwZjhlNjIxZmJlNzIzZmRlNzI1XCIpKTtcblxuZXhwb3J0IHZhciBtYWdtYSA9IHJhbXAoY29sb3JzKFwiMDAwMDA0MDEwMDA1MDEwMTA2MDEwMTA4MDIwMTA5MDIwMjBiMDIwMjBkMDMwMzBmMDMwMzEyMDQwNDE0MDUwNDE2MDYwNTE4MDYwNTFhMDcwNjFjMDgwNzFlMDkwNzIwMGEwODIyMGIwOTI0MGMwOTI2MGQwYTI5MGUwYjJiMTAwYjJkMTEwYzJmMTIwZDMxMTMwZDM0MTQwZTM2MTUwZTM4MTYwZjNiMTgwZjNkMTkxMDNmMWExMDQyMWMxMDQ0MWQxMTQ3MWUxMTQ5MjAxMTRiMjExMTRlMjIxMTUwMjQxMjUzMjUxMjU1MjcxMjU4MjkxMTVhMmExMTVjMmMxMTVmMmQxMTYxMmYxMTYzMzExMTY1MzMxMDY3MzQxMDY5MzYxMDZiMzgxMDZjMzkwZjZlM2IwZjcwM2QwZjcxM2YwZjcyNDAwZjc0NDIwZjc1NDQwZjc2NDUxMDc3NDcxMDc4NDkxMDc4NGExMDc5NGMxMTdhNGUxMTdiNGYxMjdiNTExMjdjNTIxMzdjNTQxMzdkNTYxNDdkNTcxNTdlNTkxNTdlNWExNjdlNWMxNjdmNWQxNzdmNWYxODdmNjAxODgwNjIxOTgwNjQxYTgwNjUxYTgwNjcxYjgwNjgxYzgxNmExYzgxNmIxZDgxNmQxZDgxNmUxZTgxNzAxZjgxNzIxZjgxNzMyMDgxNzUyMTgxNzYyMTgxNzgyMjgxNzkyMjgyN2IyMzgyN2MyMzgyN2UyNDgyODAyNTgyODEyNTgxODMyNjgxODQyNjgxODYyNzgxODgyNzgxODkyODgxOGIyOTgxOGMyOTgxOGUyYTgxOTAyYTgxOTEyYjgxOTMyYjgwOTQyYzgwOTYyYzgwOTgyZDgwOTkyZDgwOWIyZTdmOWMyZTdmOWUyZjdmYTAyZjdmYTEzMDdlYTMzMDdlYTUzMTdlYTYzMTdkYTgzMjdkYWEzMzdkYWIzMzdjYWQzNDdjYWUzNDdiYjAzNTdiYjIzNTdiYjMzNjdhYjUzNjdhYjczNzc5YjgzNzc5YmEzODc4YmMzOTc4YmQzOTc3YmYzYTc3YzAzYTc2YzIzYjc1YzQzYzc1YzUzYzc0YzczZDczYzgzZTczY2EzZTcyY2MzZjcxY2Q0MDcxY2Y0MDcwZDA0MTZmZDI0MjZmZDM0MzZlZDU0NDZkZDY0NTZjZDg0NTZjZDk0NjZiZGI0NzZhZGM0ODY5ZGU0OTY4ZGY0YTY4ZTA0YzY3ZTI0ZDY2ZTM0ZTY1ZTQ0ZjY0ZTU1MDY0ZTc1MjYzZTg1MzYyZTk1NDYyZWE1NjYxZWI1NzYwZWM1ODYwZWQ1YTVmZWU1YjVlZWY1ZDVlZjA1ZjVlZjE2MDVkZjI2MjVkZjI2NDVjZjM2NTVjZjQ2NzVjZjQ2OTVjZjU2YjVjZjY2YzVjZjY2ZTVjZjc3MDVjZjc3MjVjZjg3NDVjZjg3NjVjZjk3ODVkZjk3OTVkZjk3YjVkZmE3ZDVlZmE3ZjVlZmE4MTVmZmI4MzVmZmI4NTYwZmI4NzYxZmM4OTYxZmM4YTYyZmM4YzYzZmM4ZTY0ZmM5MDY1ZmQ5MjY2ZmQ5NDY3ZmQ5NjY4ZmQ5ODY5ZmQ5YTZhZmQ5YjZiZmU5ZDZjZmU5ZjZkZmVhMTZlZmVhMzZmZmVhNTcxZmVhNzcyZmVhOTczZmVhYTc0ZmVhYzc2ZmVhZTc3ZmViMDc4ZmViMjdhZmViNDdiZmViNjdjZmViNzdlZmViOTdmZmViYjgxZmViZDgyZmViZjg0ZmVjMTg1ZmVjMjg3ZmVjNDg4ZmVjNjhhZmVjODhjZmVjYThkZmVjYzhmZmVjZDkwZmVjZjkyZmVkMTk0ZmVkMzk1ZmVkNTk3ZmVkNzk5ZmVkODlhZmRkYTljZmRkYzllZmRkZWEwZmRlMGExZmRlMmEzZmRlM2E1ZmRlNWE3ZmRlN2E5ZmRlOWFhZmRlYmFjZmNlY2FlZmNlZWIwZmNmMGIyZmNmMmI0ZmNmNGI2ZmNmNmI4ZmNmN2I5ZmNmOWJiZmNmYmJkZmNmZGJmXCIpKTtcblxuZXhwb3J0IHZhciBpbmZlcm5vID0gcmFtcChjb2xvcnMoXCIwMDAwMDQwMTAwMDUwMTAxMDYwMTAxMDgwMjAxMGEwMjAyMGMwMjAyMGUwMzAyMTAwNDAzMTIwNDAzMTQwNTA0MTcwNjA0MTkwNzA1MWIwODA1MWQwOTA2MWYwYTA3MjIwYjA3MjQwYzA4MjYwZDA4MjkwZTA5MmIxMDA5MmQxMTBhMzAxMjBhMzIxNDBiMzQxNTBiMzcxNjBiMzkxODBjM2MxOTBjM2UxYjBjNDExYzBjNDMxZTBjNDUxZjBjNDgyMTBjNGEyMzBjNGMyNDBjNGYyNjBjNTEyODBiNTMyOTBiNTUyYjBiNTcyZDBiNTkyZjBhNWIzMTBhNWMzMjBhNWUzNDBhNWYzNjA5NjEzODA5NjIzOTA5NjMzYjA5NjQzZDA5NjUzZTA5NjY0MDBhNjc0MjBhNjg0NDBhNjg0NTBhNjk0NzBiNmE0OTBiNmE0YTBjNmI0YzBjNmI0ZDBkNmM0ZjBkNmM1MTBlNmM1MjBlNmQ1NDBmNmQ1NTBmNmQ1NzEwNmU1OTEwNmU1YTExNmU1YzEyNmU1ZDEyNmU1ZjEzNmU2MTEzNmU2MjE0NmU2NDE1NmU2NTE1NmU2NzE2NmU2OTE2NmU2YTE3NmU2YzE4NmU2ZDE4NmU2ZjE5NmU3MTE5NmU3MjFhNmU3NDFhNmU3NTFiNmU3NzFjNmQ3ODFjNmQ3YTFkNmQ3YzFkNmQ3ZDFlNmQ3ZjFlNmM4MDFmNmM4MjIwNmM4NDIwNmI4NTIxNmI4NzIxNmI4ODIyNmE4YTIyNmE4YzIzNjk4ZDIzNjk4ZjI0Njk5MDI1Njg5MjI1Njg5MzI2Njc5NTI2Njc5NzI3NjY5ODI3NjY5YTI4NjU5YjI5NjQ5ZDI5NjQ5ZjJhNjNhMDJhNjNhMjJiNjJhMzJjNjFhNTJjNjBhNjJkNjBhODJlNWZhOTJlNWVhYjJmNWVhZDMwNWRhZTMwNWNiMDMxNWJiMTMyNWFiMzMyNWFiNDMzNTliNjM0NThiNzM1NTdiOTM1NTZiYTM2NTViYzM3NTRiZDM4NTNiZjM5NTJjMDNhNTFjMTNhNTBjMzNiNGZjNDNjNGVjNjNkNGRjNzNlNGNjODNmNGJjYTQwNGFjYjQxNDljYzQyNDhjZTQzNDdjZjQ0NDZkMDQ1NDVkMjQ2NDRkMzQ3NDNkNDQ4NDJkNTRhNDFkNzRiM2ZkODRjM2VkOTRkM2RkYTRlM2NkYjUwM2JkZDUxM2FkZTUyMzhkZjUzMzdlMDU1MzZlMTU2MzVlMjU3MzRlMzU5MzNlNDVhMzFlNTVjMzBlNjVkMmZlNzVlMmVlODYwMmRlOTYxMmJlYTYzMmFlYjY0MjllYjY2MjhlYzY3MjZlZDY5MjVlZTZhMjRlZjZjMjNlZjZlMjFmMDZmMjBmMTcxMWZmMTczMWRmMjc0MWNmMzc2MWJmMzc4MTlmNDc5MThmNTdiMTdmNTdkMTVmNjdlMTRmNjgwMTNmNzgyMTJmNzg0MTBmODg1MGZmODg3MGVmODg5MGNmOThiMGJmOThjMGFmOThlMDlmYTkwMDhmYTkyMDdmYTk0MDdmYjk2MDZmYjk3MDZmYjk5MDZmYjliMDZmYjlkMDdmYzlmMDdmY2ExMDhmY2EzMDlmY2E1MGFmY2E2MGNmY2E4MGRmY2FhMGZmY2FjMTFmY2FlMTJmY2IwMTRmY2IyMTZmY2I0MThmYmI2MWFmYmI4MWRmYmJhMWZmYmJjMjFmYmJlMjNmYWMwMjZmYWMyMjhmYWM0MmFmYWM2MmRmOWM3MmZmOWM5MzJmOWNiMzVmOGNkMzdmOGNmM2FmN2QxM2RmN2QzNDBmNmQ1NDNmNmQ3NDZmNWQ5NDlmNWRiNGNmNGRkNGZmNGRmNTNmNGUxNTZmM2UzNWFmM2U1NWRmMmU2NjFmMmU4NjVmMmVhNjlmMWVjNmRmMWVkNzFmMWVmNzVmMWYxNzlmMmYyN2RmMmY0ODJmM2Y1ODZmM2Y2OGFmNGY4OGVmNWY5OTJmNmZhOTZmOGZiOWFmOWZjOWRmYWZkYTFmY2ZmYTRcIikpO1xuXG5leHBvcnQgdmFyIHBsYXNtYSA9IHJhbXAoY29sb3JzKFwiMGQwODg3MTAwNzg4MTMwNzg5MTYwNzhhMTkwNjhjMWIwNjhkMWQwNjhlMjAwNjhmMjIwNjkwMjQwNjkxMjYwNTkxMjgwNTkyMmEwNTkzMmMwNTk0MmUwNTk1MmYwNTk2MzEwNTk3MzMwNTk3MzUwNDk4MzcwNDk5MzgwNDlhM2EwNDlhM2MwNDliM2UwNDljM2YwNDljNDEwNDlkNDMwMzllNDQwMzllNDYwMzlmNDgwMzlmNDkwM2EwNGIwM2ExNGMwMmExNGUwMmEyNTAwMmEyNTEwMmEzNTMwMmEzNTUwMmE0NTYwMWE0NTgwMWE0NTkwMWE1NWIwMWE1NWMwMWE2NWUwMWE2NjAwMWE2NjEwMGE3NjMwMGE3NjQwMGE3NjYwMGE3NjcwMGE4NjkwMGE4NmEwMGE4NmMwMGE4NmUwMGE4NmYwMGE4NzEwMGE4NzIwMWE4NzQwMWE4NzUwMWE4NzcwMWE4NzgwMWE4N2EwMmE4N2IwMmE4N2QwM2E4N2UwM2E4ODAwNGE4ODEwNGE3ODMwNWE3ODQwNWE3ODYwNmE2ODcwN2E2ODgwOGE2OGEwOWE1OGIwYWE1OGQwYmE1OGUwY2E0OGYwZGE0OTEwZWEzOTIwZmEzOTQxMGEyOTUxMWExOTYxM2ExOTgxNGEwOTkxNTlmOWExNjlmOWMxNzllOWQxODlkOWUxOTlkYTAxYTljYTExYjliYTIxZDlhYTMxZTlhYTUxZjk5YTYyMDk4YTcyMTk3YTgyMjk2YWEyMzk1YWIyNDk0YWMyNjk0YWQyNzkzYWUyODkyYjAyOTkxYjEyYTkwYjIyYjhmYjMyYzhlYjQyZThkYjUyZjhjYjYzMDhiYjczMThhYjgzMjg5YmEzMzg4YmIzNDg4YmMzNTg3YmQzNzg2YmUzODg1YmYzOTg0YzAzYTgzYzEzYjgyYzIzYzgxYzMzZDgwYzQzZTdmYzU0MDdlYzY0MTdkYzc0MjdjYzg0MzdiYzk0NDdhY2E0NTdhY2I0Njc5Y2M0Nzc4Y2M0OTc3Y2Q0YTc2Y2U0Yjc1Y2Y0Yzc0ZDA0ZDczZDE0ZTcyZDI0ZjcxZDM1MTcxZDQ1MjcwZDU1MzZmZDU1NDZlZDY1NTZkZDc1NjZjZDg1NzZiZDk1ODZhZGE1YTZhZGE1YjY5ZGI1YzY4ZGM1ZDY3ZGQ1ZTY2ZGU1ZjY1ZGU2MTY0ZGY2MjYzZTA2MzYzZTE2NDYyZTI2NTYxZTI2NjYwZTM2ODVmZTQ2OTVlZTU2YTVkZTU2YjVkZTY2YzVjZTc2ZTViZTc2ZjVhZTg3MDU5ZTk3MTU4ZTk3MjU3ZWE3NDU3ZWI3NTU2ZWI3NjU1ZWM3NzU0ZWQ3OTUzZWQ3YTUyZWU3YjUxZWY3YzUxZWY3ZTUwZjA3ZjRmZjA4MDRlZjE4MTRkZjE4MzRjZjI4NDRiZjM4NTRiZjM4NzRhZjQ4ODQ5ZjQ4OTQ4ZjU4YjQ3ZjU4YzQ2ZjY4ZDQ1ZjY4ZjQ0Zjc5MDQ0Zjc5MTQzZjc5MzQyZjg5NDQxZjg5NTQwZjk5NzNmZjk5ODNlZjk5YTNlZmE5YjNkZmE5YzNjZmE5ZTNiZmI5ZjNhZmJhMTM5ZmJhMjM4ZmNhMzM4ZmNhNTM3ZmNhNjM2ZmNhODM1ZmNhOTM0ZmRhYjMzZmRhYzMzZmRhZTMyZmRhZjMxZmRiMTMwZmRiMjJmZmRiNDJmZmRiNTJlZmViNzJkZmViODJjZmViYTJjZmViYjJiZmViZDJhZmViZTJhZmVjMDI5ZmRjMjI5ZmRjMzI4ZmRjNTI3ZmRjNjI3ZmRjODI3ZmRjYTI2ZmRjYjI2ZmNjZDI1ZmNjZTI1ZmNkMDI1ZmNkMjI1ZmJkMzI0ZmJkNTI0ZmJkNzI0ZmFkODI0ZmFkYTI0ZjlkYzI0ZjlkZDI1ZjhkZjI1ZjhlMTI1ZjdlMjI1ZjdlNDI1ZjZlNjI2ZjZlODI2ZjVlOTI2ZjVlYjI3ZjRlZDI3ZjNlZTI3ZjNmMDI3ZjJmMjI3ZjFmNDI2ZjFmNTI1ZjBmNzI0ZjBmOTIxXCIpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvdmlyaWRpcy5qc1xuLy8gbW9kdWxlIGlkID0gMjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBhcmN9IGZyb20gXCIuL3NyYy9hcmNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhcmVhfSBmcm9tIFwiLi9zcmMvYXJlYVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxpbmV9IGZyb20gXCIuL3NyYy9saW5lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllfSBmcm9tIFwiLi9zcmMvcGllXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXJlYVJhZGlhbCwgZGVmYXVsdCBhcyByYWRpYWxBcmVhfSBmcm9tIFwiLi9zcmMvYXJlYVJhZGlhbFwiOyAvLyBOb3RlOiByYWRpYWxBcmVhIGlzIGRlcHJlY2F0ZWQhXG5leHBvcnQge2RlZmF1bHQgYXMgbGluZVJhZGlhbCwgZGVmYXVsdCBhcyByYWRpYWxMaW5lfSBmcm9tIFwiLi9zcmMvbGluZVJhZGlhbFwiOyAvLyBOb3RlOiByYWRpYWxMaW5lIGlzIGRlcHJlY2F0ZWQhXG5leHBvcnQge2RlZmF1bHQgYXMgcG9pbnRSYWRpYWx9IGZyb20gXCIuL3NyYy9wb2ludFJhZGlhbFwiO1xuZXhwb3J0IHtsaW5rSG9yaXpvbnRhbCwgbGlua1ZlcnRpY2FsLCBsaW5rUmFkaWFsfSBmcm9tIFwiLi9zcmMvbGluay9pbmRleFwiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sLCBzeW1ib2xzfSBmcm9tIFwiLi9zcmMvc3ltYm9sXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sQ2lyY2xlfSBmcm9tIFwiLi9zcmMvc3ltYm9sL2NpcmNsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbENyb3NzfSBmcm9tIFwiLi9zcmMvc3ltYm9sL2Nyb3NzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sRGlhbW9uZH0gZnJvbSBcIi4vc3JjL3N5bWJvbC9kaWFtb25kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sU3F1YXJlfSBmcm9tIFwiLi9zcmMvc3ltYm9sL3NxdWFyZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFN0YXJ9IGZyb20gXCIuL3NyYy9zeW1ib2wvc3RhclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFRyaWFuZ2xlfSBmcm9tIFwiLi9zcmMvc3ltYm9sL3RyaWFuZ2xlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sV3llfSBmcm9tIFwiLi9zcmMvc3ltYm9sL3d5ZVwiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vc3JjL2N1cnZlL2Jhc2lzQ2xvc2VkXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc09wZW59IGZyb20gXCIuL3NyYy9jdXJ2ZS9iYXNpc09wZW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzfSBmcm9tIFwiLi9zcmMvY3VydmUvYmFzaXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJ1bmRsZX0gZnJvbSBcIi4vc3JjL2N1cnZlL2J1bmRsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWxDbG9zZWR9IGZyb20gXCIuL3NyYy9jdXJ2ZS9jYXJkaW5hbENsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWxPcGVufSBmcm9tIFwiLi9zcmMvY3VydmUvY2FyZGluYWxPcGVuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXJkaW5hbH0gZnJvbSBcIi4vc3JjL2N1cnZlL2NhcmRpbmFsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tQ2xvc2VkfSBmcm9tIFwiLi9zcmMvY3VydmUvY2F0bXVsbFJvbUNsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbU9wZW59IGZyb20gXCIuL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tT3BlblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbX0gZnJvbSBcIi4vc3JjL2N1cnZlL2NhdG11bGxSb21cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUxpbmVhckNsb3NlZH0gZnJvbSBcIi4vc3JjL2N1cnZlL2xpbmVhckNsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlTGluZWFyfSBmcm9tIFwiLi9zcmMvY3VydmUvbGluZWFyXCI7XG5leHBvcnQge21vbm90b25lWCBhcyBjdXJ2ZU1vbm90b25lWCwgbW9ub3RvbmVZIGFzIGN1cnZlTW9ub3RvbmVZfSBmcm9tIFwiLi9zcmMvY3VydmUvbW9ub3RvbmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZU5hdHVyYWx9IGZyb20gXCIuL3NyYy9jdXJ2ZS9uYXR1cmFsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVTdGVwLCBzdGVwQWZ0ZXIgYXMgY3VydmVTdGVwQWZ0ZXIsIHN0ZXBCZWZvcmUgYXMgY3VydmVTdGVwQmVmb3JlfSBmcm9tIFwiLi9zcmMvY3VydmUvc3RlcFwiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2t9IGZyb20gXCIuL3NyYy9zdGFja1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0RXhwYW5kfSBmcm9tIFwiLi9zcmMvb2Zmc2V0L2V4cGFuZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0RGl2ZXJnaW5nfSBmcm9tIFwiLi9zcmMvb2Zmc2V0L2RpdmVyZ2luZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSBcIi4vc3JjL29mZnNldC9ub25lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRTaWxob3VldHRlfSBmcm9tIFwiLi9zcmMvb2Zmc2V0L3NpbGhvdWV0dGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldFdpZ2dsZX0gZnJvbSBcIi4vc3JjL29mZnNldC93aWdnbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyQXNjZW5kaW5nfSBmcm9tIFwiLi9zcmMvb3JkZXIvYXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckRlc2NlbmRpbmd9IGZyb20gXCIuL3NyYy9vcmRlci9kZXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckluc2lkZU91dH0gZnJvbSBcIi4vc3JjL29yZGVyL2luc2lkZU91dFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJOb25lfSBmcm9tIFwiLi9zcmMvb3JkZXIvbm9uZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJSZXZlcnNlfSBmcm9tIFwiLi9zcmMvb3JkZXIvcmV2ZXJzZVwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBtYXgsIG1pbiwgcGksIHNpbiwgc3FydCwgdGF1fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmZ1bmN0aW9uIGFyY0lubmVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQuaW5uZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY091dGVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQub3V0ZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY1N0YXJ0QW5nbGUoZCkge1xuICByZXR1cm4gZC5zdGFydEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNFbmRBbmdsZShkKSB7XG4gIHJldHVybiBkLmVuZEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNQYWRBbmdsZShkKSB7XG4gIHJldHVybiBkICYmIGQucGFkQW5nbGU7IC8vIE5vdGU6IG9wdGlvbmFsIVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG4gIHZhciB4MTAgPSB4MSAtIHgwLCB5MTAgPSB5MSAtIHkwLFxuICAgICAgeDMyID0geDMgLSB4MiwgeTMyID0geTMgLSB5MixcbiAgICAgIHQgPSAoeDMyICogKHkwIC0geTIpIC0geTMyICogKHgwIC0geDIpKSAvICh5MzIgKiB4MTAgLSB4MzIgKiB5MTApO1xuICByZXR1cm4gW3gwICsgdCAqIHgxMCwgeTAgKyB0ICogeTEwXTtcbn1cblxuLy8gQ29tcHV0ZSBwZXJwZW5kaWN1bGFyIG9mZnNldCBsaW5lIG9mIGxlbmd0aCByYy5cbi8vIGh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vQ2lyY2xlLUxpbmVJbnRlcnNlY3Rpb24uaHRtbFxuZnVuY3Rpb24gY29ybmVyVGFuZ2VudHMoeDAsIHkwLCB4MSwgeTEsIHIxLCByYywgY3cpIHtcbiAgdmFyIHgwMSA9IHgwIC0geDEsXG4gICAgICB5MDEgPSB5MCAtIHkxLFxuICAgICAgbG8gPSAoY3cgPyByYyA6IC1yYykgLyBzcXJ0KHgwMSAqIHgwMSArIHkwMSAqIHkwMSksXG4gICAgICBveCA9IGxvICogeTAxLFxuICAgICAgb3kgPSAtbG8gKiB4MDEsXG4gICAgICB4MTEgPSB4MCArIG94LFxuICAgICAgeTExID0geTAgKyBveSxcbiAgICAgIHgxMCA9IHgxICsgb3gsXG4gICAgICB5MTAgPSB5MSArIG95LFxuICAgICAgeDAwID0gKHgxMSArIHgxMCkgLyAyLFxuICAgICAgeTAwID0gKHkxMSArIHkxMCkgLyAyLFxuICAgICAgZHggPSB4MTAgLSB4MTEsXG4gICAgICBkeSA9IHkxMCAtIHkxMSxcbiAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHksXG4gICAgICByID0gcjEgLSByYyxcbiAgICAgIEQgPSB4MTEgKiB5MTAgLSB4MTAgKiB5MTEsXG4gICAgICBkID0gKGR5IDwgMCA/IC0xIDogMSkgKiBzcXJ0KG1heCgwLCByICogciAqIGQyIC0gRCAqIEQpKSxcbiAgICAgIGN4MCA9IChEICogZHkgLSBkeCAqIGQpIC8gZDIsXG4gICAgICBjeTAgPSAoLUQgKiBkeCAtIGR5ICogZCkgLyBkMixcbiAgICAgIGN4MSA9IChEICogZHkgKyBkeCAqIGQpIC8gZDIsXG4gICAgICBjeTEgPSAoLUQgKiBkeCArIGR5ICogZCkgLyBkMixcbiAgICAgIGR4MCA9IGN4MCAtIHgwMCxcbiAgICAgIGR5MCA9IGN5MCAtIHkwMCxcbiAgICAgIGR4MSA9IGN4MSAtIHgwMCxcbiAgICAgIGR5MSA9IGN5MSAtIHkwMDtcblxuICAvLyBQaWNrIHRoZSBjbG9zZXIgb2YgdGhlIHR3byBpbnRlcnNlY3Rpb24gcG9pbnRzLlxuICAvLyBUT0RPIElzIHRoZXJlIGEgZmFzdGVyIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggaW50ZXJzZWN0aW9uIHRvIHVzZT9cbiAgaWYgKGR4MCAqIGR4MCArIGR5MCAqIGR5MCA+IGR4MSAqIGR4MSArIGR5MSAqIGR5MSkgY3gwID0gY3gxLCBjeTAgPSBjeTE7XG5cbiAgcmV0dXJuIHtcbiAgICBjeDogY3gwLFxuICAgIGN5OiBjeTAsXG4gICAgeDAxOiAtb3gsXG4gICAgeTAxOiAtb3ksXG4gICAgeDExOiBjeDAgKiAocjEgLyByIC0gMSksXG4gICAgeTExOiBjeTAgKiAocjEgLyByIC0gMSlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBpbm5lclJhZGl1cyA9IGFyY0lubmVyUmFkaXVzLFxuICAgICAgb3V0ZXJSYWRpdXMgPSBhcmNPdXRlclJhZGl1cyxcbiAgICAgIGNvcm5lclJhZGl1cyA9IGNvbnN0YW50KDApLFxuICAgICAgcGFkUmFkaXVzID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBhcmNTdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUgPSBhcmNFbmRBbmdsZSxcbiAgICAgIHBhZEFuZ2xlID0gYXJjUGFkQW5nbGUsXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBhcmMoKSB7XG4gICAgdmFyIGJ1ZmZlcixcbiAgICAgICAgcixcbiAgICAgICAgcjAgPSAraW5uZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgcjEgPSArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgYTAgPSBzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBoYWxmUGksXG4gICAgICAgIGExID0gZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGhhbGZQaSxcbiAgICAgICAgZGEgPSBhYnMoYTEgLSBhMCksXG4gICAgICAgIGN3ID0gYTEgPiBhMDtcblxuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBvdXRlciByYWRpdXMgaXMgYWx3YXlzIGxhcmdlciB0aGFuIHRoZSBpbm5lciByYWRpdXMuXG4gICAgaWYgKHIxIDwgcjApIHIgPSByMSwgcjEgPSByMCwgcjAgPSByO1xuXG4gICAgLy8gSXMgaXQgYSBwb2ludD9cbiAgICBpZiAoIShyMSA+IGVwc2lsb24pKSBjb250ZXh0Lm1vdmVUbygwLCAwKTtcblxuICAgIC8vIE9yIGlzIGl0IGEgY2lyY2xlIG9yIGFubnVsdXM/XG4gICAgZWxzZSBpZiAoZGEgPiB0YXUgLSBlcHNpbG9uKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhyMSAqIGNvcyhhMCksIHIxICogc2luKGEwKSk7XG4gICAgICBjb250ZXh0LmFyYygwLCAwLCByMSwgYTAsIGExLCAhY3cpO1xuICAgICAgaWYgKHIwID4gZXBzaWxvbikge1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhyMCAqIGNvcyhhMSksIHIwICogc2luKGExKSk7XG4gICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIwLCBhMSwgYTAsIGN3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPciBpcyBpdCBhIGNpcmN1bGFyIG9yIGFubnVsYXIgc2VjdG9yP1xuICAgIGVsc2Uge1xuICAgICAgdmFyIGEwMSA9IGEwLFxuICAgICAgICAgIGExMSA9IGExLFxuICAgICAgICAgIGEwMCA9IGEwLFxuICAgICAgICAgIGExMCA9IGExLFxuICAgICAgICAgIGRhMCA9IGRhLFxuICAgICAgICAgIGRhMSA9IGRhLFxuICAgICAgICAgIGFwID0gcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvIDIsXG4gICAgICAgICAgcnAgPSAoYXAgPiBlcHNpbG9uKSAmJiAocGFkUmFkaXVzID8gK3BhZFJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogc3FydChyMCAqIHIwICsgcjEgKiByMSkpLFxuICAgICAgICAgIHJjID0gbWluKGFicyhyMSAtIHIwKSAvIDIsICtjb3JuZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSksXG4gICAgICAgICAgcmMwID0gcmMsXG4gICAgICAgICAgcmMxID0gcmMsXG4gICAgICAgICAgdDAsXG4gICAgICAgICAgdDE7XG5cbiAgICAgIC8vIEFwcGx5IHBhZGRpbmc/IE5vdGUgdGhhdCBzaW5jZSByMSDiiaUgcjAsIGRhMSDiiaUgZGEwLlxuICAgICAgaWYgKHJwID4gZXBzaWxvbikge1xuICAgICAgICB2YXIgcDAgPSBhc2luKHJwIC8gcjAgKiBzaW4oYXApKSxcbiAgICAgICAgICAgIHAxID0gYXNpbihycCAvIHIxICogc2luKGFwKSk7XG4gICAgICAgIGlmICgoZGEwIC09IHAwICogMikgPiBlcHNpbG9uKSBwMCAqPSAoY3cgPyAxIDogLTEpLCBhMDAgKz0gcDAsIGExMCAtPSBwMDtcbiAgICAgICAgZWxzZSBkYTAgPSAwLCBhMDAgPSBhMTAgPSAoYTAgKyBhMSkgLyAyO1xuICAgICAgICBpZiAoKGRhMSAtPSBwMSAqIDIpID4gZXBzaWxvbikgcDEgKj0gKGN3ID8gMSA6IC0xKSwgYTAxICs9IHAxLCBhMTEgLT0gcDE7XG4gICAgICAgIGVsc2UgZGExID0gMCwgYTAxID0gYTExID0gKGEwICsgYTEpIC8gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIHgwMSA9IHIxICogY29zKGEwMSksXG4gICAgICAgICAgeTAxID0gcjEgKiBzaW4oYTAxKSxcbiAgICAgICAgICB4MTAgPSByMCAqIGNvcyhhMTApLFxuICAgICAgICAgIHkxMCA9IHIwICogc2luKGExMCk7XG5cbiAgICAgIC8vIEFwcGx5IHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGlmIChyYyA+IGVwc2lsb24pIHtcbiAgICAgICAgdmFyIHgxMSA9IHIxICogY29zKGExMSksXG4gICAgICAgICAgICB5MTEgPSByMSAqIHNpbihhMTEpLFxuICAgICAgICAgICAgeDAwID0gcjAgKiBjb3MoYTAwKSxcbiAgICAgICAgICAgIHkwMCA9IHIwICogc2luKGEwMCk7XG5cbiAgICAgICAgLy8gUmVzdHJpY3QgdGhlIGNvcm5lciByYWRpdXMgYWNjb3JkaW5nIHRvIHRoZSBzZWN0b3IgYW5nbGUuXG4gICAgICAgIGlmIChkYSA8IHBpKSB7XG4gICAgICAgICAgdmFyIG9jID0gZGEwID4gZXBzaWxvbiA/IGludGVyc2VjdCh4MDEsIHkwMSwgeDAwLCB5MDAsIHgxMSwgeTExLCB4MTAsIHkxMCkgOiBbeDEwLCB5MTBdLFxuICAgICAgICAgICAgICBheCA9IHgwMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBheSA9IHkwMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBieCA9IHgxMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBieSA9IHkxMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBrYyA9IDEgLyBzaW4oYWNvcygoYXggKiBieCArIGF5ICogYnkpIC8gKHNxcnQoYXggKiBheCArIGF5ICogYXkpICogc3FydChieCAqIGJ4ICsgYnkgKiBieSkpKSAvIDIpLFxuICAgICAgICAgICAgICBsYyA9IHNxcnQob2NbMF0gKiBvY1swXSArIG9jWzFdICogb2NbMV0pO1xuICAgICAgICAgIHJjMCA9IG1pbihyYywgKHIwIC0gbGMpIC8gKGtjIC0gMSkpO1xuICAgICAgICAgIHJjMSA9IG1pbihyYywgKHIxIC0gbGMpIC8gKGtjICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElzIHRoZSBzZWN0b3IgY29sbGFwc2VkIHRvIGEgbGluZT9cbiAgICAgIGlmICghKGRhMSA+IGVwc2lsb24pKSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSk7XG5cbiAgICAgIC8vIERvZXMgdGhlIHNlY3RvcuKAmXMgb3V0ZXIgcmluZyBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMSA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MDAsIHkwMCwgeDAxLCB5MDEsIHIxLCByYzEsIGN3KTtcbiAgICAgICAgdDEgPSBjb3JuZXJUYW5nZW50cyh4MTEsIHkxMSwgeDEwLCB5MTAsIHIxLCByYzEsIGN3KTtcblxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0MC5jeCArIHQwLngwMSwgdDAuY3kgKyB0MC55MDEpO1xuXG4gICAgICAgIC8vIEhhdmUgdGhlIGNvcm5lcnMgbWVyZ2VkP1xuICAgICAgICBpZiAocmMxIDwgcmMpIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMxLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIGRyYXcgdGhlIHR3byBjb3JuZXJzIGFuZCB0aGUgcmluZy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzEsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDAueTExLCB0MC54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhdGFuMih0MC5jeSArIHQwLnkxMSwgdDAuY3ggKyB0MC54MTEpLCBhdGFuMih0MS5jeSArIHQxLnkxMSwgdDEuY3ggKyB0MS54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQxLmN4LCB0MS5jeSwgcmMxLCBhdGFuMih0MS55MTEsIHQxLngxMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPciBpcyB0aGUgb3V0ZXIgcmluZyBqdXN0IGEgY2lyY3VsYXIgYXJjP1xuICAgICAgZWxzZSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSksIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhMDEsIGExMSwgIWN3KTtcblxuICAgICAgLy8gSXMgdGhlcmUgbm8gaW5uZXIgcmluZywgYW5kIGl04oCZcyBhIGNpcmN1bGFyIHNlY3Rvcj9cbiAgICAgIC8vIE9yIHBlcmhhcHMgaXTigJlzIGFuIGFubnVsYXIgc2VjdG9yIGNvbGxhcHNlZCBkdWUgdG8gcGFkZGluZz9cbiAgICAgIGlmICghKHIwID4gZXBzaWxvbikgfHwgIShkYTAgPiBlcHNpbG9uKSkgY29udGV4dC5saW5lVG8oeDEwLCB5MTApO1xuXG4gICAgICAvLyBEb2VzIHRoZSBzZWN0b3LigJlzIGlubmVyIHJpbmcgKG9yIHBvaW50KSBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMCA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MTAsIHkxMCwgeDExLCB5MTEsIHIwLCAtcmMwLCBjdyk7XG4gICAgICAgIHQxID0gY29ybmVyVGFuZ2VudHMoeDAxLCB5MDEsIHgwMCwgeTAwLCByMCwgLXJjMCwgY3cpO1xuXG4gICAgICAgIGNvbnRleHQubGluZVRvKHQwLmN4ICsgdDAueDAxLCB0MC5jeSArIHQwLnkwMSk7XG5cbiAgICAgICAgLy8gSGF2ZSB0aGUgY29ybmVycyBtZXJnZWQ/XG4gICAgICAgIGlmIChyYzAgPCByYykgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzAsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZHJhdyB0aGUgdHdvIGNvcm5lcnMgYW5kIHRoZSByaW5nLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMCwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MC55MTEsIHQwLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjAsIGF0YW4yKHQwLmN5ICsgdDAueTExLCB0MC5jeCArIHQwLngxMSksIGF0YW4yKHQxLmN5ICsgdDEueTExLCB0MS5jeCArIHQxLngxMSksIGN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MS5jeCwgdDEuY3ksIHJjMCwgYXRhbjIodDEueTExLCB0MS54MTEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3IgaXMgdGhlIGlubmVyIHJpbmcganVzdCBhIGNpcmN1bGFyIGFyYz9cbiAgICAgIGVsc2UgY29udGV4dC5hcmMoMCwgMCwgcjAsIGExMCwgYTAwLCBjdyk7XG4gICAgfVxuXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgYXJjLmNlbnRyb2lkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHIgPSAoK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyLFxuICAgICAgICBhID0gKCtzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyIC0gcGkgLyAyO1xuICAgIHJldHVybiBbY29zKGEpICogciwgc2luKGEpICogcl07XG4gIH07XG5cbiAgYXJjLmlubmVyUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlubmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBpbm5lclJhZGl1cztcbiAgfTtcblxuICBhcmMub3V0ZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob3V0ZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IG91dGVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5jb3JuZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29ybmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBjb3JuZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnBhZFJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRSYWRpdXMgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBwYWRSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnN0YXJ0QW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RhcnRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogc3RhcnRBbmdsZTtcbiAgfTtcblxuICBhcmMuZW5kQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZW5kQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGVuZEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogcGFkQW5nbGU7XG4gIH07XG5cbiAgYXJjLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKGNvbnRleHQgPSBfID09IG51bGwgPyBudWxsIDogXyksIGFyYykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2FyYy5qc1xuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjdXJ2ZVJhZGlhbCwge2N1cnZlUmFkaWFsTGluZWFyfSBmcm9tIFwiLi9jdXJ2ZS9yYWRpYWxcIjtcbmltcG9ydCBhcmVhIGZyb20gXCIuL2FyZWFcIjtcbmltcG9ydCB7bGluZVJhZGlhbH0gZnJvbSBcIi4vbGluZVJhZGlhbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgYSA9IGFyZWEoKS5jdXJ2ZShjdXJ2ZVJhZGlhbExpbmVhciksXG4gICAgICBjID0gYS5jdXJ2ZSxcbiAgICAgIHgwID0gYS5saW5lWDAsXG4gICAgICB4MSA9IGEubGluZVgxLFxuICAgICAgeTAgPSBhLmxpbmVZMCxcbiAgICAgIHkxID0gYS5saW5lWTE7XG5cbiAgYS5hbmdsZSA9IGEueCwgZGVsZXRlIGEueDtcbiAgYS5zdGFydEFuZ2xlID0gYS54MCwgZGVsZXRlIGEueDA7XG4gIGEuZW5kQW5nbGUgPSBhLngxLCBkZWxldGUgYS54MTtcbiAgYS5yYWRpdXMgPSBhLnksIGRlbGV0ZSBhLnk7XG4gIGEuaW5uZXJSYWRpdXMgPSBhLnkwLCBkZWxldGUgYS55MDtcbiAgYS5vdXRlclJhZGl1cyA9IGEueTEsIGRlbGV0ZSBhLnkxO1xuICBhLmxpbmVTdGFydEFuZ2xlID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHgwKCkpOyB9LCBkZWxldGUgYS5saW5lWDA7XG4gIGEubGluZUVuZEFuZ2xlID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHgxKCkpOyB9LCBkZWxldGUgYS5saW5lWDE7XG4gIGEubGluZUlubmVyUmFkaXVzID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHkwKCkpOyB9LCBkZWxldGUgYS5saW5lWTA7XG4gIGEubGluZU91dGVyUmFkaXVzID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHkxKCkpOyB9LCBkZWxldGUgYS5saW5lWTE7XG5cbiAgYS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGMoY3VydmVSYWRpYWwoXykpIDogYygpLl9jdXJ2ZTtcbiAgfTtcblxuICByZXR1cm4gYTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvYXJlYVJhZGlhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9iYXNpc1wiO1xuXG5mdW5jdGlvbiBCYXNpc0Nsb3NlZChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpc0Nsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKCh0aGlzLl94MiArIDIgKiB0aGlzLl94MykgLyAzLCAodGhpcy5feTIgKyAyICogdGhpcy5feTMpIC8gMyk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKCh0aGlzLl94MyArIDIgKiB0aGlzLl94MikgLyAzLCAodGhpcy5feTMgKyAyICogdGhpcy5feTIpIC8gMyk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDIsIHRoaXMuX3kyKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g0LCB0aGlzLl95NCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5feDIgPSB4LCB0aGlzLl95MiA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geTsgdGhpcy5fY29udGV4dC5tb3ZlVG8oKHRoaXMuX3gwICsgNCAqIHRoaXMuX3gxICsgeCkgLyA2LCAodGhpcy5feTAgKyA0ICogdGhpcy5feTEgKyB5KSAvIDYpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzQ2xvc2VkKGNvbnRleHQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpc0Nsb3NlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmZ1bmN0aW9uIEJhc2lzT3Blbihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpc09wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB2YXIgeDAgPSAodGhpcy5feDAgKyA0ICogdGhpcy5feDEgKyB4KSAvIDYsIHkwID0gKHRoaXMuX3kwICsgNCAqIHRoaXMuX3kxICsgeSkgLyA2OyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeDAsIHkwKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgwLCB5MCk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzT3Blbihjb250ZXh0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNPcGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtCYXNpc30gZnJvbSBcIi4vYmFzaXNcIjtcblxuZnVuY3Rpb24gQnVuZGxlKGNvbnRleHQsIGJldGEpIHtcbiAgdGhpcy5fYmFzaXMgPSBuZXcgQmFzaXMoY29udGV4dCk7XG4gIHRoaXMuX2JldGEgPSBiZXRhO1xufVxuXG5CdW5kbGUucHJvdG90eXBlID0ge1xuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gICAgdGhpcy5fYmFzaXMubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIGogPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoaiA+IDApIHtcbiAgICAgIHZhciB4MCA9IHhbMF0sXG4gICAgICAgICAgeTAgPSB5WzBdLFxuICAgICAgICAgIGR4ID0geFtqXSAtIHgwLFxuICAgICAgICAgIGR5ID0geVtqXSAtIHkwLFxuICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICB0O1xuXG4gICAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgICAgdCA9IGkgLyBqO1xuICAgICAgICB0aGlzLl9iYXNpcy5wb2ludChcbiAgICAgICAgICB0aGlzLl9iZXRhICogeFtpXSArICgxIC0gdGhpcy5fYmV0YSkgKiAoeDAgKyB0ICogZHgpLFxuICAgICAgICAgIHRoaXMuX2JldGEgKiB5W2ldICsgKDEgLSB0aGlzLl9iZXRhKSAqICh5MCArIHQgKiBkeSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gICAgdGhpcy5fYmFzaXMubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShiZXRhKSB7XG5cbiAgZnVuY3Rpb24gYnVuZGxlKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYmV0YSA9PT0gMSA/IG5ldyBCYXNpcyhjb250ZXh0KSA6IG5ldyBCdW5kbGUoY29udGV4dCwgYmV0YSk7XG4gIH1cblxuICBidW5kbGUuYmV0YSA9IGZ1bmN0aW9uKGJldGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCtiZXRhKTtcbiAgfTtcblxuICByZXR1cm4gYnVuZGxlO1xufSkoMC44NSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL2J1bmRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q2FyZGluYWxDbG9zZWR9IGZyb20gXCIuL2NhcmRpbmFsQ2xvc2VkXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcFwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2F0bXVsbFJvbVwiO1xuXG5mdW5jdGlvbiBDYXRtdWxsUm9tQ2xvc2VkKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9IHRoaXMuX3gzID0gdGhpcy5feDQgPSB0aGlzLl94NSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gdGhpcy5feTMgPSB0aGlzLl95NCA9IHRoaXMuX3k1ID0gTmFOO1xuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYSA9XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhID1cbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NSwgdGhpcy5feTUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG5cbiAgICBpZiAodGhpcy5fcG9pbnQpIHtcbiAgICAgIHZhciB4MjMgPSB0aGlzLl94MiAtIHgsXG4gICAgICAgICAgeTIzID0gdGhpcy5feTIgLSB5O1xuICAgICAgdGhpcy5fbDIzX2EgPSBNYXRoLnNxcnQodGhpcy5fbDIzXzJhID0gTWF0aC5wb3coeDIzICogeDIzICsgeTIzICogeTIzLCB0aGlzLl9hbHBoYSkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHkpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NSA9IHgsIHRoaXMuX3k1ID0geTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSwgdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYTtcbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEsIHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYTtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGFscGhhKSB7XG5cbiAgZnVuY3Rpb24gY2F0bXVsbFJvbShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGFscGhhID8gbmV3IENhdG11bGxSb21DbG9zZWQoY29udGV4dCwgYWxwaGEpIDogbmV3IENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIDApO1xuICB9XG5cbiAgY2F0bXVsbFJvbS5hbHBoYSA9IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYWxwaGEpO1xuICB9O1xuXG4gIHJldHVybiBjYXRtdWxsUm9tO1xufSkoMC41KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbUNsb3NlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q2FyZGluYWxPcGVufSBmcm9tIFwiLi9jYXJkaW5hbE9wZW5cIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2NhdG11bGxSb21cIjtcblxuZnVuY3Rpb24gQ2F0bXVsbFJvbU9wZW4oY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb21PcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95MikgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5fcG9pbnQgPSA0OyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSwgdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYTtcbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEsIHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYTtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGFscGhhKSB7XG5cbiAgZnVuY3Rpb24gY2F0bXVsbFJvbShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGFscGhhID8gbmV3IENhdG11bGxSb21PcGVuKGNvbnRleHQsIGFscGhhKSA6IG5ldyBDYXJkaW5hbE9wZW4oY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tT3Blbi5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5cbmZ1bmN0aW9uIExpbmVhckNsb3NlZChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXJDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcG9pbnQpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgaWYgKHRoaXMuX3BvaW50KSB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICBlbHNlIHRoaXMuX3BvaW50ID0gMSwgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXJDbG9zZWQoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL2xpbmVhckNsb3NlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4geCA8IDAgPyAtMSA6IDE7XG59XG5cbi8vIENhbGN1bGF0ZSB0aGUgc2xvcGVzIG9mIHRoZSB0YW5nZW50cyAoSGVybWl0ZS10eXBlIGludGVycG9sYXRpb24pIGJhc2VkIG9uXG4vLyB0aGUgZm9sbG93aW5nIHBhcGVyOiBTdGVmZmVuLCBNLiAxOTkwLiBBIFNpbXBsZSBNZXRob2QgZm9yIE1vbm90b25pY1xuLy8gSW50ZXJwb2xhdGlvbiBpbiBPbmUgRGltZW5zaW9uLiBBc3Ryb25vbXkgYW5kIEFzdHJvcGh5c2ljcywgVm9sLiAyMzksIE5PLlxuLy8gTk9WKElJKSwgUC4gNDQzLCAxOTkwLlxuZnVuY3Rpb24gc2xvcGUzKHRoYXQsIHgyLCB5Mikge1xuICB2YXIgaDAgPSB0aGF0Ll94MSAtIHRoYXQuX3gwLFxuICAgICAgaDEgPSB4MiAtIHRoYXQuX3gxLFxuICAgICAgczAgPSAodGhhdC5feTEgLSB0aGF0Ll95MCkgLyAoaDAgfHwgaDEgPCAwICYmIC0wKSxcbiAgICAgIHMxID0gKHkyIC0gdGhhdC5feTEpIC8gKGgxIHx8IGgwIDwgMCAmJiAtMCksXG4gICAgICBwID0gKHMwICogaDEgKyBzMSAqIGgwKSAvIChoMCArIGgxKTtcbiAgcmV0dXJuIChzaWduKHMwKSArIHNpZ24oczEpKSAqIE1hdGgubWluKE1hdGguYWJzKHMwKSwgTWF0aC5hYnMoczEpLCAwLjUgKiBNYXRoLmFicyhwKSkgfHwgMDtcbn1cblxuLy8gQ2FsY3VsYXRlIGEgb25lLXNpZGVkIHNsb3BlLlxuZnVuY3Rpb24gc2xvcGUyKHRoYXQsIHQpIHtcbiAgdmFyIGggPSB0aGF0Ll94MSAtIHRoYXQuX3gwO1xuICByZXR1cm4gaCA/ICgzICogKHRoYXQuX3kxIC0gdGhhdC5feTApIC8gaCAtIHQpIC8gMiA6IHQ7XG59XG5cbi8vIEFjY29yZGluZyB0byBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DdWJpY19IZXJtaXRlX3NwbGluZSNSZXByZXNlbnRhdGlvbnNcbi8vIFwieW91IGNhbiBleHByZXNzIGN1YmljIEhlcm1pdGUgaW50ZXJwb2xhdGlvbiBpbiB0ZXJtcyBvZiBjdWJpYyBCw6l6aWVyIGN1cnZlc1xuLy8gd2l0aCByZXNwZWN0IHRvIHRoZSBmb3VyIHZhbHVlcyBwMCwgcDAgKyBtMCAvIDMsIHAxIC0gbTEgLyAzLCBwMVwiLlxuZnVuY3Rpb24gcG9pbnQodGhhdCwgdDAsIHQxKSB7XG4gIHZhciB4MCA9IHRoYXQuX3gwLFxuICAgICAgeTAgPSB0aGF0Ll95MCxcbiAgICAgIHgxID0gdGhhdC5feDEsXG4gICAgICB5MSA9IHRoYXQuX3kxLFxuICAgICAgZHggPSAoeDEgLSB4MCkgLyAzO1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oeDAgKyBkeCwgeTAgKyBkeCAqIHQwLCB4MSAtIGR4LCB5MSAtIGR4ICogdDEsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIE1vbm90b25lWChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Nb25vdG9uZVgucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPVxuICAgIHRoaXMuX3QwID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICAgIGNhc2UgMzogcG9pbnQodGhpcywgdGhpcy5fdDAsIHNsb3BlMih0aGlzLCB0aGlzLl90MCkpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgdDEgPSBOYU47XG5cbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBpZiAoeCA9PT0gdGhpcy5feDEgJiYgeSA9PT0gdGhpcy5feTEpIHJldHVybjsgLy8gSWdub3JlIGNvaW5jaWRlbnQgcG9pbnRzLlxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgcG9pbnQodGhpcywgc2xvcGUyKHRoaXMsIHQxID0gc2xvcGUzKHRoaXMsIHgsIHkpKSwgdDEpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHRoaXMuX3QwLCB0MSA9IHNsb3BlMyh0aGlzLCB4LCB5KSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gICAgdGhpcy5fdDAgPSB0MTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNb25vdG9uZVkoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gbmV3IFJlZmxlY3RDb250ZXh0KGNvbnRleHQpO1xufVxuXG4oTW9ub3RvbmVZLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9ub3RvbmVYLnByb3RvdHlwZSkpLnBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICBNb25vdG9uZVgucHJvdG90eXBlLnBvaW50LmNhbGwodGhpcywgeSwgeCk7XG59O1xuXG5mdW5jdGlvbiBSZWZsZWN0Q29udGV4dChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5SZWZsZWN0Q29udGV4dC5wcm90b3R5cGUgPSB7XG4gIG1vdmVUbzogZnVuY3Rpb24oeCwgeSkgeyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh5LCB4KTsgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHsgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTsgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuX2NvbnRleHQubGluZVRvKHksIHgpOyB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkgeyB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8oeTEsIHgxLCB5MiwgeDIsIHksIHgpOyB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9ub3RvbmVYKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBNb25vdG9uZVgoY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25vdG9uZVkoY29udGV4dCkge1xuICByZXR1cm4gbmV3IE1vbm90b25lWShjb250ZXh0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvbW9ub3RvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBOYXR1cmFsKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbk5hdHVyYWwucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIG4gPSB4Lmxlbmd0aDtcblxuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeFswXSwgeVswXSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4WzBdLCB5WzBdKTtcbiAgICAgIGlmIChuID09PSAyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHhbMV0sIHlbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHB4ID0gY29udHJvbFBvaW50cyh4KSxcbiAgICAgICAgICAgIHB5ID0gY29udHJvbFBvaW50cyh5KTtcbiAgICAgICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDE7IGkxIDwgbjsgKytpMCwgKytpMSkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyhweFswXVtpMF0sIHB5WzBdW2kwXSwgcHhbMV1baTBdLCBweVsxXVtpMF0sIHhbaTFdLCB5W2kxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiBuID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gICAgdGhpcy5feCA9IHRoaXMuX3kgPSBudWxsO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vd3d3LnBhcnRpY2xlaW5jZWxsLmNvbS8yMDEyL2Jlemllci1zcGxpbmVzLyBmb3IgZGVyaXZhdGlvbi5cbmZ1bmN0aW9uIGNvbnRyb2xQb2ludHMoeCkge1xuICB2YXIgaSxcbiAgICAgIG4gPSB4Lmxlbmd0aCAtIDEsXG4gICAgICBtLFxuICAgICAgYSA9IG5ldyBBcnJheShuKSxcbiAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICByID0gbmV3IEFycmF5KG4pO1xuICBhWzBdID0gMCwgYlswXSA9IDIsIHJbMF0gPSB4WzBdICsgMiAqIHhbMV07XG4gIGZvciAoaSA9IDE7IGkgPCBuIC0gMTsgKytpKSBhW2ldID0gMSwgYltpXSA9IDQsIHJbaV0gPSA0ICogeFtpXSArIDIgKiB4W2kgKyAxXTtcbiAgYVtuIC0gMV0gPSAyLCBiW24gLSAxXSA9IDcsIHJbbiAtIDFdID0gOCAqIHhbbiAtIDFdICsgeFtuXTtcbiAgZm9yIChpID0gMTsgaSA8IG47ICsraSkgbSA9IGFbaV0gLyBiW2kgLSAxXSwgYltpXSAtPSBtLCByW2ldIC09IG0gKiByW2kgLSAxXTtcbiAgYVtuIC0gMV0gPSByW24gLSAxXSAvIGJbbiAtIDFdO1xuICBmb3IgKGkgPSBuIC0gMjsgaSA+PSAwOyAtLWkpIGFbaV0gPSAocltpXSAtIGFbaSArIDFdKSAvIGJbaV07XG4gIGJbbiAtIDFdID0gKHhbbl0gKyBhW24gLSAxXSkgLyAyO1xuICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7ICsraSkgYltpXSA9IDIgKiB4W2kgKyAxXSAtIGFbaSArIDFdO1xuICByZXR1cm4gW2EsIGJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTmF0dXJhbChjb250ZXh0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvY3VydmUvbmF0dXJhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIFN0ZXAoY29udGV4dCwgdCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fdCA9IHQ7XG59XG5cblN0ZXAucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKDAgPCB0aGlzLl90ICYmIHRoaXMuX3QgPCAxICYmIHRoaXMuX3BvaW50ID09PSAyKSB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB0aGlzLl95KTtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgaWYgKHRoaXMuX2xpbmUgPj0gMCkgdGhpcy5fdCA9IDEgLSB0aGlzLl90LCB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0aGlzLl90IDw9IDApIHtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB5KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeDEgPSB0aGlzLl94ICogKDEgLSB0aGlzLl90KSArIHggKiB0aGlzLl90O1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgxLCB0aGlzLl95KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4MSwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ggPSB4LCB0aGlzLl95ID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMC41KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBCZWZvcmUoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwQWZ0ZXIoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2N1cnZlL3N0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBiIDwgYSA/IC0xIDogYiA+IGEgPyAxIDogYiA+PSBhID8gMCA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvZGVzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGQpIHtcbiAgcmV0dXJuIGQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4uL2FycmF5XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4uL3BvaW50XCI7XG5pbXBvcnQgcG9pbnRSYWRpYWwgZnJvbSBcIi4uL3BvaW50UmFkaWFsXCI7XG5cbmZ1bmN0aW9uIGxpbmtTb3VyY2UoZCkge1xuICByZXR1cm4gZC5zb3VyY2U7XG59XG5cbmZ1bmN0aW9uIGxpbmtUYXJnZXQoZCkge1xuICByZXR1cm4gZC50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGxpbmsoY3VydmUpIHtcbiAgdmFyIHNvdXJjZSA9IGxpbmtTb3VyY2UsXG4gICAgICB0YXJnZXQgPSBsaW5rVGFyZ2V0LFxuICAgICAgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBsaW5rKCkge1xuICAgIHZhciBidWZmZXIsIGFyZ3YgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksIHMgPSBzb3VyY2UuYXBwbHkodGhpcywgYXJndiksIHQgPSB0YXJnZXQuYXBwbHkodGhpcywgYXJndik7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIGN1cnZlKGNvbnRleHQsICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gcywgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSwgK3guYXBwbHkodGhpcywgKGFyZ3ZbMF0gPSB0LCBhcmd2KSksICt5LmFwcGx5KHRoaXMsIGFyZ3YpKTtcbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gY29udGV4dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGxpbmsuc291cmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvdXJjZSA9IF8sIGxpbmspIDogc291cmNlO1xuICB9O1xuXG4gIGxpbmsudGFyZ2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRhcmdldCA9IF8sIGxpbmspIDogdGFyZ2V0O1xuICB9O1xuXG4gIGxpbmsueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmspIDogeDtcbiAgfTtcblxuICBsaW5rLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHk7XG4gIH07XG5cbiAgbGluay5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8pLCBsaW5rKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGN1cnZlSG9yaXpvbnRhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAgPSAoeDAgKyB4MSkgLyAyLCB5MCwgeDAsIHkxLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVZlcnRpY2FsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyLCB4MSwgeTAsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIGN1cnZlUmFkaWFsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHZhciBwMCA9IHBvaW50UmFkaWFsKHgwLCB5MCksXG4gICAgICBwMSA9IHBvaW50UmFkaWFsKHgwLCB5MCA9ICh5MCArIHkxKSAvIDIpLFxuICAgICAgcDIgPSBwb2ludFJhZGlhbCh4MSwgeTApLFxuICAgICAgcDMgPSBwb2ludFJhZGlhbCh4MSwgeTEpO1xuICBjb250ZXh0Lm1vdmVUbyhwMFswXSwgcDBbMV0pO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8ocDFbMF0sIHAxWzFdLCBwMlswXSwgcDJbMV0sIHAzWzBdLCBwM1sxXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rSG9yaXpvbnRhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVIb3Jpem9udGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtWZXJ0aWNhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVWZXJ0aWNhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUmFkaWFsKCkge1xuICB2YXIgbCA9IGxpbmsoY3VydmVSYWRpYWwpO1xuICBsLmFuZ2xlID0gbC54LCBkZWxldGUgbC54O1xuICBsLnJhZGl1cyA9IGwueSwgZGVsZXRlIGwueTtcbiAgcmV0dXJuIGw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL2xpbmsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAxKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpLCBqID0gMCwgZCwgZHksIHlwLCB5biwgbiwgbSA9IHNlcmllc1tvcmRlclswXV0ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh5cCA9IHluID0gMCwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgoZHkgPSAoZCA9IHNlcmllc1tvcmRlcltpXV1bal0pWzFdIC0gZFswXSkgPj0gMCkge1xuICAgICAgICBkWzBdID0geXAsIGRbMV0gPSB5cCArPSBkeTtcbiAgICAgIH0gZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICAgIGRbMV0gPSB5biwgZFswXSA9IHluICs9IGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZFswXSA9IHlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9vZmZzZXQvZGl2ZXJnaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpLCBuLCBqID0gMCwgbSA9IHNlcmllc1swXS5sZW5ndGgsIHk7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHkgPSBpID0gMDsgaSA8IG47ICsraSkgeSArPSBzZXJpZXNbaV1bal1bMV0gfHwgMDtcbiAgICBpZiAoeSkgZm9yIChpID0gMDsgaSA8IG47ICsraSkgc2VyaWVzW2ldW2pdWzFdIC89IHk7XG4gIH1cbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvb2Zmc2V0L2V4cGFuZC5qc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaiA9IDAsIHMwID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMwLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGkgPSAwLCB5ID0gMDsgaSA8IG47ICsraSkgeSArPSBzZXJpZXNbaV1bal1bMV0gfHwgMDtcbiAgICBzMFtqXVsxXSArPSBzMFtqXVswXSA9IC15IC8gMjtcbiAgfVxuICBub25lKHNlcmllcywgb3JkZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9vZmZzZXQvc2lsaG91ZXR0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkgfHwgISgobSA9IChzMCA9IHNlcmllc1tvcmRlclswXV0pLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciB5ID0gMCwgaiA9IDEsIHMwLCBtLCBuOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHMxID0gMCwgczIgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgc2kgPSBzZXJpZXNbb3JkZXJbaV1dLFxuICAgICAgICAgIHNpajAgPSBzaVtqXVsxXSB8fCAwLFxuICAgICAgICAgIHNpajEgPSBzaVtqIC0gMV1bMV0gfHwgMCxcbiAgICAgICAgICBzMyA9IChzaWowIC0gc2lqMSkgLyAyO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBpOyArK2spIHtcbiAgICAgICAgdmFyIHNrID0gc2VyaWVzW29yZGVyW2tdXSxcbiAgICAgICAgICAgIHNrajAgPSBza1tqXVsxXSB8fCAwLFxuICAgICAgICAgICAgc2tqMSA9IHNrW2ogLSAxXVsxXSB8fCAwO1xuICAgICAgICBzMyArPSBza2owIC0gc2tqMTtcbiAgICAgIH1cbiAgICAgIHMxICs9IHNpajAsIHMyICs9IHMzICogc2lqMDtcbiAgICB9XG4gICAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gICAgaWYgKHMxKSB5IC09IHMyIC8gczE7XG4gIH1cbiAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL29mZnNldC93aWdnbGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIGFzY2VuZGluZyhzZXJpZXMpLnJldmVyc2UoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcbmltcG9ydCB7c3VtfSBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBuID0gc2VyaWVzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgc3VtcyA9IHNlcmllcy5tYXAoc3VtKSxcbiAgICAgIG9yZGVyID0gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gc3Vtc1tiXSAtIHN1bXNbYV07IH0pLFxuICAgICAgdG9wID0gMCxcbiAgICAgIGJvdHRvbSA9IDAsXG4gICAgICB0b3BzID0gW10sXG4gICAgICBib3R0b21zID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGogPSBvcmRlcltpXTtcbiAgICBpZiAodG9wIDwgYm90dG9tKSB7XG4gICAgICB0b3AgKz0gc3Vtc1tqXTtcbiAgICAgIHRvcHMucHVzaChqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tICs9IHN1bXNbal07XG4gICAgICBib3R0b21zLnB1c2goaik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdHRvbXMucmV2ZXJzZSgpLmNvbmNhdCh0b3BzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zaGFwZS9zcmMvb3JkZXIvaW5zaWRlT3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL29yZGVyL3JldmVyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmdcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eVwiO1xuaW1wb3J0IHt0YXV9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgc29ydFZhbHVlcyA9IGRlc2NlbmRpbmcsXG4gICAgICBzb3J0ID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBjb25zdGFudCgwKSxcbiAgICAgIGVuZEFuZ2xlID0gY29uc3RhbnQodGF1KSxcbiAgICAgIHBhZEFuZ2xlID0gY29uc3RhbnQoMCk7XG5cbiAgZnVuY3Rpb24gcGllKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBqLFxuICAgICAgICBrLFxuICAgICAgICBzdW0gPSAwLFxuICAgICAgICBpbmRleCA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYXJjcyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYTAgPSArc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBkYSA9IE1hdGgubWluKHRhdSwgTWF0aC5tYXgoLXRhdSwgZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGEwKSksXG4gICAgICAgIGExLFxuICAgICAgICBwID0gTWF0aC5taW4oTWF0aC5hYnMoZGEpIC8gbiwgcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSksXG4gICAgICAgIHBhID0gcCAqIChkYSA8IDAgPyAtMSA6IDEpLFxuICAgICAgICB2O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh2ID0gYXJjc1tpbmRleFtpXSA9IGldID0gK3ZhbHVlKGRhdGFbaV0sIGksIGRhdGEpKSA+IDApIHtcbiAgICAgICAgc3VtICs9IHY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uYWxseSBzb3J0IHRoZSBhcmNzIGJ5IHByZXZpb3VzbHktY29tcHV0ZWQgdmFsdWVzIG9yIGJ5IGRhdGEuXG4gICAgaWYgKHNvcnRWYWx1ZXMgIT0gbnVsbCkgaW5kZXguc29ydChmdW5jdGlvbihpLCBqKSB7IHJldHVybiBzb3J0VmFsdWVzKGFyY3NbaV0sIGFyY3Nbal0pOyB9KTtcbiAgICBlbHNlIGlmIChzb3J0ICE9IG51bGwpIGluZGV4LnNvcnQoZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gc29ydChkYXRhW2ldLCBkYXRhW2pdKTsgfSk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBhcmNzISBUaGV5IGFyZSBzdG9yZWQgaW4gdGhlIG9yaWdpbmFsIGRhdGEncyBvcmRlci5cbiAgICBmb3IgKGkgPSAwLCBrID0gc3VtID8gKGRhIC0gbiAqIHBhKSAvIHN1bSA6IDA7IGkgPCBuOyArK2ksIGEwID0gYTEpIHtcbiAgICAgIGogPSBpbmRleFtpXSwgdiA9IGFyY3Nbal0sIGExID0gYTAgKyAodiA+IDAgPyB2ICogayA6IDApICsgcGEsIGFyY3Nbal0gPSB7XG4gICAgICAgIGRhdGE6IGRhdGFbal0sXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgc3RhcnRBbmdsZTogYTAsXG4gICAgICAgIGVuZEFuZ2xlOiBhMSxcbiAgICAgICAgcGFkQW5nbGU6IHBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyY3M7XG4gIH1cblxuICBwaWUudmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IHZhbHVlO1xuICB9O1xuXG4gIHBpZS5zb3J0VmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnRWYWx1ZXMgPSBfLCBzb3J0ID0gbnVsbCwgcGllKSA6IHNvcnRWYWx1ZXM7XG4gIH07XG5cbiAgcGllLnNvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc29ydCA9IF8sIHNvcnRWYWx1ZXMgPSBudWxsLCBwaWUpIDogc29ydDtcbiAgfTtcblxuICBwaWUuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdGFydEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBzdGFydEFuZ2xlO1xuICB9O1xuXG4gIHBpZS5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlbmRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogZW5kQW5nbGU7XG4gIH07XG5cbiAgcGllLnBhZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBwYWRBbmdsZTtcbiAgfTtcblxuICByZXR1cm4gcGllO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgb2Zmc2V0Tm9uZSBmcm9tIFwiLi9vZmZzZXQvbm9uZVwiO1xuaW1wb3J0IG9yZGVyTm9uZSBmcm9tIFwiLi9vcmRlci9ub25lXCI7XG5cbmZ1bmN0aW9uIHN0YWNrVmFsdWUoZCwga2V5KSB7XG4gIHJldHVybiBkW2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIga2V5cyA9IGNvbnN0YW50KFtdKSxcbiAgICAgIG9yZGVyID0gb3JkZXJOb25lLFxuICAgICAgb2Zmc2V0ID0gb2Zmc2V0Tm9uZSxcbiAgICAgIHZhbHVlID0gc3RhY2tWYWx1ZTtcblxuICBmdW5jdGlvbiBzdGFjayhkYXRhKSB7XG4gICAgdmFyIGt6ID0ga2V5cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBpLFxuICAgICAgICBtID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIG4gPSBrei5sZW5ndGgsXG4gICAgICAgIHN6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBvejtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGZvciAodmFyIGtpID0ga3pbaV0sIHNpID0gc3pbaV0gPSBuZXcgQXJyYXkobSksIGogPSAwLCBzaWo7IGogPCBtOyArK2opIHtcbiAgICAgICAgc2lbal0gPSBzaWogPSBbMCwgK3ZhbHVlKGRhdGFbal0sIGtpLCBqLCBkYXRhKV07XG4gICAgICAgIHNpai5kYXRhID0gZGF0YVtqXTtcbiAgICAgIH1cbiAgICAgIHNpLmtleSA9IGtpO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDAsIG96ID0gb3JkZXIoc3opOyBpIDwgbjsgKytpKSB7XG4gICAgICBzeltveltpXV0uaW5kZXggPSBpO1xuICAgIH1cblxuICAgIG9mZnNldChzeiwgb3opO1xuICAgIHJldHVybiBzejtcbiAgfVxuXG4gIHN0YWNrLmtleXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoa2V5cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoc2xpY2UuY2FsbChfKSksIHN0YWNrKSA6IGtleXM7XG4gIH07XG5cbiAgc3RhY2sudmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgc3RhY2spIDogdmFsdWU7XG4gIH07XG5cbiAgc3RhY2sub3JkZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob3JkZXIgPSBfID09IG51bGwgPyBvcmRlck5vbmUgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpLCBzdGFjaykgOiBvcmRlcjtcbiAgfTtcblxuICBzdGFjay5vZmZzZXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob2Zmc2V0ID0gXyA9PSBudWxsID8gb2Zmc2V0Tm9uZSA6IF8sIHN0YWNrKSA6IG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gc3RhY2s7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2hhcGUvc3JjL3N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNpcmNsZSBmcm9tIFwiLi9zeW1ib2wvY2lyY2xlXCI7XG5pbXBvcnQgY3Jvc3MgZnJvbSBcIi4vc3ltYm9sL2Nyb3NzXCI7XG5pbXBvcnQgZGlhbW9uZCBmcm9tIFwiLi9zeW1ib2wvZGlhbW9uZFwiO1xuaW1wb3J0IHN0YXIgZnJvbSBcIi4vc3ltYm9sL3N0YXJcIjtcbmltcG9ydCBzcXVhcmUgZnJvbSBcIi4vc3ltYm9sL3NxdWFyZVwiO1xuaW1wb3J0IHRyaWFuZ2xlIGZyb20gXCIuL3N5bWJvbC90cmlhbmdsZVwiO1xuaW1wb3J0IHd5ZSBmcm9tIFwiLi9zeW1ib2wvd3llXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuZXhwb3J0IHZhciBzeW1ib2xzID0gW1xuICBjaXJjbGUsXG4gIGNyb3NzLFxuICBkaWFtb25kLFxuICBzcXVhcmUsXG4gIHN0YXIsXG4gIHRyaWFuZ2xlLFxuICB3eWVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdHlwZSA9IGNvbnN0YW50KGNpcmNsZSksXG4gICAgICBzaXplID0gY29uc3RhbnQoNjQpLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc3ltYm9sKCkge1xuICAgIHZhciBidWZmZXI7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIHR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5kcmF3KGNvbnRleHQsICtzaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgc3ltYm9sLnR5cGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHlwZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHN5bWJvbCkgOiB0eXBlO1xuICB9O1xuXG4gIHN5bWJvbC5zaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNpemUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgc3ltYm9sKSA6IHNpemU7XG4gIH07XG5cbiAgc3ltYm9sLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfLCBzeW1ib2wpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gc3ltYm9sO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNoYXBlL3NyYy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2lzb1NwZWNpZmllcn0gZnJvbSBcIi4vaXNvRm9ybWF0XCI7XG5pbXBvcnQge3V0Y1BhcnNlfSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvTmF0aXZlKHN0cmluZykge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZyk7XG4gIHJldHVybiBpc05hTihkYXRlKSA/IG51bGwgOiBkYXRlO1xufVxuXG52YXIgcGFyc2VJc28gPSArbmV3IERhdGUoXCIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFpcIilcbiAgICA/IHBhcnNlSXNvTmF0aXZlXG4gICAgOiB1dGNQYXJzZShpc29TcGVjaWZpZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZUlzbztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lLWZvcm1hdC9zcmMvaXNvUGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25EYXksIGR1cmF0aW9uTWludXRlfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgZGF5ID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCAtIChlbmQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0YXJ0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogZHVyYXRpb25NaW51dGUpIC8gZHVyYXRpb25EYXk7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldERhdGUoKSAtIDE7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGF5O1xuZXhwb3J0IHZhciBkYXlzID0gZGF5LnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL2RheS5qc1xuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbkhvdXIsIGR1cmF0aW9uTWludXRlfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgaG91ciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgdmFyIG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIGR1cmF0aW9uTWludXRlICUgZHVyYXRpb25Ib3VyO1xuICBpZiAob2Zmc2V0IDwgMCkgb2Zmc2V0ICs9IGR1cmF0aW9uSG91cjtcbiAgZGF0ZS5zZXRUaW1lKE1hdGguZmxvb3IoKCtkYXRlIC0gb2Zmc2V0KSAvIGR1cmF0aW9uSG91cikgKiBkdXJhdGlvbkhvdXIgKyBvZmZzZXQpO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkhvdXI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaG91cjtcbmV4cG9ydCB2YXIgaG91cnMgPSBob3VyLnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL2hvdXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIG1pbGxpc2Vjb25kID0gaW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vIG5vb3Bcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQgLSBzdGFydDtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG5taWxsaXNlY29uZC5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgayA9IE1hdGguZmxvb3Ioayk7XG4gIGlmICghaXNGaW5pdGUoaykgfHwgIShrID4gMCkpIHJldHVybiBudWxsO1xuICBpZiAoIShrID4gMSkpIHJldHVybiBtaWxsaXNlY29uZDtcbiAgcmV0dXJuIGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcihkYXRlIC8gaykgKiBrKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBrKTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gaztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWxsaXNlY29uZDtcbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmQucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvbWlsbGlzZWNvbmQuanNcbi8vIG1vZHVsZSBpZCA9IDI2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBtaW51dGUgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VGltZShNYXRoLmZsb29yKGRhdGUgLyBkdXJhdGlvbk1pbnV0ZSkgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25NaW51dGU7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtaW51dGU7XG5leHBvcnQgdmFyIG1pbnV0ZXMgPSBtaW51dGUucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvbWludXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5cbnZhciBtb250aCA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXREYXRlKDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gZW5kLmdldE1vbnRoKCkgLSBzdGFydC5nZXRNb250aCgpICsgKGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb250aDtcbmV4cG9ydCB2YXIgbW9udGhzID0gbW9udGgucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvbW9udGguanNcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25TZWNvbmR9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBzZWNvbmQgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VGltZShNYXRoLmZsb29yKGRhdGUgLyBkdXJhdGlvblNlY29uZCkgKiBkdXJhdGlvblNlY29uZCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvblNlY29uZCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25TZWNvbmQ7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZWNvbmQ7XG5leHBvcnQgdmFyIHNlY29uZHMgPSBzZWNvbmQucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvc2Vjb25kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uRGF5fSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjRGF5ID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNEYXk7XG5leHBvcnQgdmFyIHV0Y0RheXMgPSB1dGNEYXkucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvdXRjRGF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uSG91cn0gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxudmFyIHV0Y0hvdXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDTWludXRlcygwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uSG91cik7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25Ib3VyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENIb3VycygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y0hvdXI7XG5leHBvcnQgdmFyIHV0Y0hvdXJzID0gdXRjSG91ci5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy91dGNIb3VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjTWludXRlID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ1NlY29uZHMoMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25NaW51dGU7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNNaW51dGU7XG5leHBvcnQgdmFyIHV0Y01pbnV0ZXMgPSB1dGNNaW51dGUucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvdXRjTWludXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5cbnZhciB1dGNNb250aCA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENEYXRlKDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFVUQ01vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gZW5kLmdldFVUQ01vbnRoKCkgLSBzdGFydC5nZXRVVENNb250aCgpICsgKGVuZC5nZXRVVENGdWxsWWVhcigpIC0gc3RhcnQuZ2V0VVRDRnVsbFllYXIoKSkgKiAxMjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDTW9udGgoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNNb250aDtcbmV4cG9ydCB2YXIgdXRjTW9udGhzID0gdXRjTW9udGgucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvdXRjTW9udGguanNcbi8vIG1vZHVsZSBpZCA9IDI2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25XZWVrfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG5mdW5jdGlvbiB1dGNXZWVrZGF5KGkpIHtcbiAgcmV0dXJuIGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSAoZGF0ZS5nZXRVVENEYXkoKSArIDcgLSBpKSAlIDcpO1xuICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwICogNyk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uV2VlaztcbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgdXRjU3VuZGF5ID0gdXRjV2Vla2RheSgwKTtcbmV4cG9ydCB2YXIgdXRjTW9uZGF5ID0gdXRjV2Vla2RheSgxKTtcbmV4cG9ydCB2YXIgdXRjVHVlc2RheSA9IHV0Y1dlZWtkYXkoMik7XG5leHBvcnQgdmFyIHV0Y1dlZG5lc2RheSA9IHV0Y1dlZWtkYXkoMyk7XG5leHBvcnQgdmFyIHV0Y1RodXJzZGF5ID0gdXRjV2Vla2RheSg0KTtcbmV4cG9ydCB2YXIgdXRjRnJpZGF5ID0gdXRjV2Vla2RheSg1KTtcbmV4cG9ydCB2YXIgdXRjU2F0dXJkYXkgPSB1dGNXZWVrZGF5KDYpO1xuXG5leHBvcnQgdmFyIHV0Y1N1bmRheXMgPSB1dGNTdW5kYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y01vbmRheXMgPSB1dGNNb25kYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y1R1ZXNkYXlzID0gdXRjVHVlc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjV2VkbmVzZGF5cyA9IHV0Y1dlZG5lc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjVGh1cnNkYXlzID0gdXRjVGh1cnNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y0ZyaWRheXMgPSB1dGNGcmlkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y1NhdHVyZGF5cyA9IHV0Y1NhdHVyZGF5LnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL3V0Y1dlZWsuanNcbi8vIG1vZHVsZSBpZCA9IDI2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIHV0Y1llYXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCk7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG59KTtcblxuLy8gQW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIGZvciB0aGlzIHNpbXBsZSBjYXNlLlxudXRjWWVhci5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuICFpc0Zpbml0ZShrID0gTWF0aC5mbG9vcihrKSkgfHwgIShrID4gMCkgPyBudWxsIDogaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoTWF0aC5mbG9vcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLyBrKSAqIGspO1xuICAgIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCAqIGspO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y1llYXI7XG5leHBvcnQgdmFyIHV0Y1llYXJzID0gdXRjWWVhci5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy91dGNZZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlLCBkdXJhdGlvbldlZWt9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIHdlZWtkYXkoaSkge1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQgLSAoZW5kLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBzdGFydC5nZXRUaW1lem9uZU9mZnNldCgpKSAqIGR1cmF0aW9uTWludXRlKSAvIGR1cmF0aW9uV2VlaztcbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgc3VuZGF5ID0gd2Vla2RheSgwKTtcbmV4cG9ydCB2YXIgbW9uZGF5ID0gd2Vla2RheSgxKTtcbmV4cG9ydCB2YXIgdHVlc2RheSA9IHdlZWtkYXkoMik7XG5leHBvcnQgdmFyIHdlZG5lc2RheSA9IHdlZWtkYXkoMyk7XG5leHBvcnQgdmFyIHRodXJzZGF5ID0gd2Vla2RheSg0KTtcbmV4cG9ydCB2YXIgZnJpZGF5ID0gd2Vla2RheSg1KTtcbmV4cG9ydCB2YXIgc2F0dXJkYXkgPSB3ZWVrZGF5KDYpO1xuXG5leHBvcnQgdmFyIHN1bmRheXMgPSBzdW5kYXkucmFuZ2U7XG5leHBvcnQgdmFyIG1vbmRheXMgPSBtb25kYXkucmFuZ2U7XG5leHBvcnQgdmFyIHR1ZXNkYXlzID0gdHVlc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgd2VkbmVzZGF5cyA9IHdlZG5lc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdGh1cnNkYXlzID0gdGh1cnNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIGZyaWRheXMgPSBmcmlkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHNhdHVyZGF5cyA9IHNhdHVyZGF5LnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL3dlZWsuanNcbi8vIG1vZHVsZSBpZCA9IDI3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIHllYXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0TW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCk7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG59KTtcblxuLy8gQW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIGZvciB0aGlzIHNpbXBsZSBjYXNlLlxueWVhci5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuICFpc0Zpbml0ZShrID0gTWF0aC5mbG9vcihrKSkgfHwgIShrID4gMCkgPyBudWxsIDogaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0RnVsbFllYXIoTWF0aC5mbG9vcihkYXRlLmdldEZ1bGxZZWFyKCkgLyBrKSAqIGspO1xuICAgIGRhdGUuc2V0TW9udGgoMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgc3RlcCAqIGspO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHllYXI7XG5leHBvcnQgdmFyIHllYXJzID0geWVhci5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy95ZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==