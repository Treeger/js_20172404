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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc = __webpack_require__(4);

var _desc2 = _interopRequireDefault(_desc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cells = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var rows = [8, 7, 6, 5, 4, 3, 2, 1];

var Desc = function () {
    function Desc(node) {
        var _this = this;

        _classCallCheck(this, Desc);

        this.node = node;
        this.render();
        this.node.addEventListener('click', function (event) {
            return _this.onClick(event);
        });
    }

    _createClass(Desc, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = (0, _desc2.default)({
                title: 'Шашки',
                rows: rows,
                cells: cells
            });
        }
    }, {
        key: 'onClick',
        value: function onClick(event) {
            var target = event.target;
            if (target.tagName !== 'TD') {
                return;
            }
            if (this.current) {
                this.current.classList.toggle('desc__cell_active', false);
            }

            target.classList.toggle('desc__cell_active');
            this.current = target;
        }
    }]);

    return Desc;
}();

exports.default = Desc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _figure = __webpack_require__(3);

var _figure2 = _interopRequireDefault(_figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var whiteStarting = [[1, 'a'], [1, 'c'], [1, 'e'], [1, 'g'], [2, 'b'], [2, 'd'], [2, 'f'], [2, 'h'], [3, 'a'], [3, 'c'], [3, 'e'], [3, 'g']];

var blackStarting = [[6, 'b'], [6, 'd'], [6, 'f'], [6, 'h'], [7, 'a'], [7, 'c'], [7, 'e'], [7, 'g'], [8, 'b'], [8, 'd'], [8, 'f'], [8, 'h']];

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.turns = 0;
        var figures = document.querySelectorAll('img.figure');
        figures.forEach(function (figure) {
            figure.remove();
        });

        this.spawnFigures();
    }

    //#TODO make move for AI


    _createClass(Game, [{
        key: 'makeMove',
        value: function makeMove() {}

        //#TODO check if its posible to move here

    }, {
        key: 'spawnFigures',
        value: function spawnFigures() {

            var figure = new _figure2.default();
            //spawn white
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = whiteStarting[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var w = _step.value;

                    figure.render(w[0], w[1], false);
                }
                //spawn black
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

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = blackStarting[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var b = _step2.value;

                    figure.render(b[0], b[1], true);
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
    }], [{
        key: 'isValidMove',
        value: function isValidMove() {
            return true;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _desc = __webpack_require__(0);

var _desc2 = _interopRequireDefault(_desc);

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(method, url) {
    var req = new XMLHttpRequest();

    req.open(method, url);
    req.send();

    return new Promise(function (resolve, reject) {

        req.addEventListener('readystatechange', function () {

            if (req.readyState !== 4) {
                return;
            }

            if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject(req);
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', function () {
    var desc = new _desc2.default(document.querySelector('.js-desc'));
    var gameStartButton = document.querySelector('.new_game');
    gameStartButton.addEventListener('click', function (e) {
        var game = new _game2.default();

    request('GET', './public/data.json').then(function (data) {
        return console.log(data);
    }, function (req) {
        return console.log(req.status);
    });

    fetch('./public/data.json', {
        credentials: 'same-origin'
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        return console.log(data);
    }, function (err) {
        return console.error(err);
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Drag and drop impomentation

function dragStart(ev) {
    this.style.opacity = '0.4';
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    return true;
}

function dragOver(ev) {
    event.preventDefault();
    return false;
}

function dragDrop(ev) {
    var data = ev.dataTransfer.getData("Text");
    var old_figure = document.getElementById(data);
    var new_figure = ev.target;

    // If no figure on target field
    if (this.childElementCount !== 1) {
        _game2.default.isValidMove();
        new_figure.appendChild(old_figure);
    } else {
        // if Figure already exists on target field, we are killing it
        if (new_figure.tagName === 'IMG') {
            new_figure.parentElement.appendChild(document.getElementById(data));
            new_figure.remove();
        }
    }
    ev.stopPropagation();
    return false;
}

function imgDrop(ev) {
    this.style.opacity = '1';
}

var Figure = function () {
    function Figure(node) {
        _classCallCheck(this, Figure);

        this.node = node;
    }

    _createClass(Figure, [{
        key: 'render',
        value: function render(x, y, isBlack) {

            var img = document.createElement('img');
            img.className = 'figure';

            if (isBlack) {
                img.src = 'public/images/black-checker.png';
            } else {
                img.src = 'public/images/white-checker.png';
            }

            var spawnTo = document.querySelector('tr[data-row="' + x + '"] > td[data-cell="' + y + '"]');
            img.id = x + y;

            spawnTo.appendChild(img);

            // Add DnD events
            var td = document.querySelectorAll('td');
            td.forEach(function (t) {
                t.addEventListener('drop', dragDrop, false);
                t.addEventListener('dragover', dragOver, false);
            });
            img.addEventListener('dragstart', dragStart, false);
            img.addEventListener('dragend', imgDrop, false);
        }
    }]);

    return Figure;
}();

exports.default = Figure;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(5);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (cells, rows, title) {pug_html = pug_html + "\u003Ch1\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Ctable class=\"desc\"\u003E";
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {

        var row = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr class=\"desc__row\"\u003E";

// iterate cells
;(function(){
  var $$obj = cells;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var c = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctd" + (" class=\"desc__cell\""+pug.attr("data-cell", c, true, true)) + "\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var c = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctd" + (" class=\"desc__cell\""+pug.attr("data-cell", c, true, true)) + "\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;

      var row = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr class=\"desc__row\"\u003E";

// iterate cells
;(function(){
  var $$obj = cells;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var c = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctd" + (" class=\"desc__cell\""+pug.attr("data-cell", c, true, true)) + "\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var c = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctd" + (" class=\"desc__cell\""+pug.attr("data-cell", c, true, true)) + "\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";}.call(this,"cells" in locals_for_with?locals_for_with.cells:typeof cells!=="undefined"?cells:undefined,"rows" in locals_for_with?locals_for_with.rows:typeof rows!=="undefined"?rows:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(6).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map