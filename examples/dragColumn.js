webpackJsonp([0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_drag_listview_src_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_less__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dragColumn_less__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dragColumn_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dragColumn_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-console,func-names,react/no-multi-comp */







var DragColumn = __WEBPACK_IMPORTED_MODULE_2_react_drag_listview_src_index_js__["a" /* default */].DragColumn;

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    var data = [];
    for (var i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: 'col' + i
      });
    }
    _this.state = {
      data: data
    };
    return _this;
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      var that = this;
      var dragProps = {
        onDragEnd: function onDragEnd(fromIndex, toIndex) {
          var data = [].concat(_toConsumableArray(that.state.data));
          var item = data.splice(fromIndex, 1)[0];
          data.splice(toIndex, 0, item);
          that.setState({ data: data });
        },

        nodeSelector: 'li',
        handleSelector: 'a'
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'simple simple1 simple2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Dragging columns'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'simple-inner' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            DragColumn,
            dragProps,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ol',
              { style: { width: 70 * this.state.data.length } },
              this.state.data.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: index },
                  item.title,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: '#' },
                    'Drag'
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[12]);
//# sourceMappingURL=dragColumn.js.map