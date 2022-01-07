"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RLayout = /*#__PURE__*/function (_Component) {
  _inherits(RLayout, _Component);

  var _super = _createSuper(RLayout);

  function RLayout() {
    var _this;

    _classCallCheck(this, RLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "touch", 'ontouchstart' in document.documentElement);

    return _this;
  }

  _createClass(RLayout, [{
    key: "eventHandler",
    value: function eventHandler(event, action) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bind';
      event = this.touch ? {
        mousemove: "touchmove",
        mouseup: "touchend"
      }[event] : event;
      (0, _jquery.default)(window).unbind(event, action);

      if (type === 'bind') {
        (0, _jquery.default)(window).bind(event, action);
      }
    }
  }, {
    key: "getClassName",
    value: function getClassName(obj, childs, Attrs, attrs, Props) {
      var className = childs.length ? 'r-layout-parent' : 'r-layout-item';
      var gapClassName = 'r-layout-gap';

      if (Attrs.className) {
        className += ' ' + Attrs.className;
      }

      if (attrs.className) {
        className += ' ' + attrs.className;
      }

      if (obj.hide_xs || Props.hide_xs) {
        className += ' r-layout-hide-xs';
        gapClassName += ' r-layout-hide-xs';
      }

      if (obj.hide_sm || Props.hide_sm) {
        className += ' r-layout-hide-sm';
        gapClassName += ' r-layout-hide-sm';
      }

      if (obj.hide_md || Props.hide_md) {
        className += ' r-layout-hide-md';
        gapClassName += ' r-layout-hide-md';
      }

      if (obj.hide_lg || Props.hide_lg) {
        className += ' r-layout-hide-lg';
        gapClassName += ' r-layout-hide-lg';
      }

      return {
        className: className,
        gapClassName: gapClassName
      };
    }
  }, {
    key: "getStyle",
    value: function getStyle(obj, Props, style) {
      var align = obj.align || Props.align;
      var scroll = obj.scroll || Props.scroll;

      if (align === 'v') {
        if (obj.column) {
          style.justifyContent = 'center';
        } else {
          style.alignItems = 'center';
        }
      } else if (align === 'h') {
        if (obj.column) {
          style.alignItems = 'center';
        } else {
          style.justifyContent = 'center';
        }
      } else if (align === 'vh' || align === 'hv') {
        style.alignItems = 'center';
        style.justifyContent = 'center';
      }

      if (scroll === 'v') {
        style.overflowY = 'auto';
      } else if (scroll === 'h') {
        style.overflowX = 'auto';
        style.whiteSpace = 'nowrap';
      } else if (scroll === 'vh' || scroll === 'hv') {
        style.overflowX = 'auto';
        style.overflowY = 'auto';
      }

      return style;
    }
  }, {
    key: "getProps",
    value: function getProps(obj, index, parent) {
      var _this2 = this;

      var _parent$childsAttrs = parent.childsAttrs,
          childsAttrs = _parent$childsAttrs === void 0 ? function () {
        return {};
      } : _parent$childsAttrs,
          _parent$childsProps = parent.childsProps,
          childsProps = _parent$childsProps === void 0 ? function () {
        return {};
      } : _parent$childsProps;
      var _obj$attrs = obj.attrs,
          attrs = _obj$attrs === void 0 ? {} : _obj$attrs,
          onResize = obj.onResize;
      var Attrs = (typeof childsAttrs === 'function' ? childsAttrs(obj, index) : childsAttrs) || {};
      var Props = (typeof childsProps === 'function' ? childsProps(obj, index) : childsProps) || {};
      var size = obj.size || Props.size;
      var flex = obj.flex || Props.flex;
      var cursor = Attrs.onClick || attrs.onClick ? 'pointer' : undefined;
      var childs = [];
      var html = typeof obj.html === 'function' ? obj.html() : obj.html;
      var dataId = 'a' + Math.random();
      var style = this.getStyle(obj, Props, {
        cursor: cursor,
        ...Attrs.style,
        ...attrs.style
      });
      var axis;
      var gapStyle = {};

      if (parent.row) {
        style.width = size;
        style.height = '100%';
        gapStyle.width = parent.gap;

        if (size && onResize) {
          gapStyle.cursor = 'col-resize';
        }

        axis = 'x';
      } else if (parent.column) {
        style.height = size;
        style.width = '100%';
        gapStyle.height = parent.gap;

        if (size && onResize) {
          gapStyle.cursor = 'row-resize';
        }

        axis = 'y';
      }

      if (obj.row) {
        childs = typeof obj.row === 'function' ? obj.row() : obj.row;
        style.flexDirection = 'row';
      } else if (obj.column) {
        childs = typeof obj.column === 'function' ? obj.column() : obj.column;
        style.flexDirection = 'column';
      }

      var _this$getClassName = this.getClassName(obj, childs, Attrs, attrs, Props),
          className = _this$getClassName.className,
          gapClassName = _this$getClassName.gapClassName;

      var gapAttrs = {
        className: gapClassName,
        style: gapStyle,
        draggable: false,
        onDragStart: function onDragStart(e) {
          return e.preventDefault();
        }
      };

      if (size && onResize) {
        gapAttrs[this.touch ? 'onTouchStart' : 'onMouseDown'] = function (e) {
          _this2.so = {
            pos: _this2.getClient(e),
            onResize: onResize,
            axis: axis,
            size: size,
            dataId: dataId
          };

          _this2.eventHandler('mousemove', _jquery.default.proxy(_this2.mouseMove, _this2));

          _this2.eventHandler('mouseup', _jquery.default.proxy(_this2.mouseUp, _this2));
        };
      }

      return {
        size: size,
        flex: flex,
        childs: childs,
        style: style,
        html: html,
        dataId: dataId,
        attrs: { ...Attrs,
          ...attrs,
          className: className,
          'data-id': dataId
        },
        gapAttrs: gapAttrs
      };
    }
  }, {
    key: "getClient",
    value: function getClient(e) {
      return this.touch ? {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      } : {
        x: e.clientX,
        y: e.clientY
      };
    }
  }, {
    key: "getHtml",
    value: function getHtml(obj, index, parentObj) {
      var _this3 = this;

      if (!obj || obj === null) {
        return '';
      }

      var _obj$show = obj.show,
          show = _obj$show === void 0 ? true : _obj$show;
      var Show = typeof show === 'function' ? show() : show;
      var parent = parentObj || {};

      if (!Show) {
        return null;
      }

      var _this$getProps = this.getProps(obj, index, parent),
          size = _this$getProps.size,
          flex = _this$getProps.flex,
          childs = _this$getProps.childs,
          style = _this$getProps.style,
          html = _this$getProps.html,
          attrs = _this$getProps.attrs,
          gapAttrs = _this$getProps.gapAttrs;

      if (parentObj) {
        flex = flex || 'none';
      }

      var result;

      if (!childs.length) {
        result = /*#__PURE__*/_react.default.createElement("div", _extends({}, attrs, {
          style: { ...style,
            flex: flex
          }
        }), html);
      } else {
        var Style = { ...style,
          flex: !size ? flex || 1 : undefined
        };
        result = /*#__PURE__*/_react.default.createElement("div", _extends({}, attrs, {
          style: Style
        }), childs.map(function (o, i) {
          return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
            key: i
          }, _this3.getHtml(o, i, obj));
        }));
      }

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, result, parent.gap !== undefined && /*#__PURE__*/_react.default.createElement("div", gapAttrs));
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      var rtl = this.props.rtl;
      var _this$so = this.so,
          pos = _this$so.pos,
          axis = _this$so.axis,
          size = _this$so.size,
          dataId = _this$so.dataId;
      var client = this.getClient(e);
      var offset = (client[axis] - pos[axis]) * (rtl ? -1 : 1);
      this.so.newSize = offset + size;
      var panel = (0, _jquery.default)('[data-id="' + dataId + '"]');
      panel.css(_defineProperty({}, {
        'x': 'width',
        'y': 'height'
      }[axis], this.so.newSize));
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this.eventHandler('mousemove', this.mouseMove, 'unbind');
      this.eventHandler('mouseup', this.mouseUp, 'unbind');
      var _this$so2 = this.so,
          onResize = _this$so2.onResize,
          newSize = _this$so2.newSize;
      onResize(newSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gap = _this$props.gap,
          layout = _this$props.layout;
      return this.getHtml(layout, 0);
    }
  }]);

  return RLayout;
}(_react.Component);

exports.default = RLayout;
RLayout.defaultProps = {
  gap: 0,
  layout: {}
};