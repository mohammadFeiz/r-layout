"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ReactVirtualDom extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "touch", 'ontouchstart' in document.documentElement);
  }

  eventHandler(event, action, type = 'bind') {
    event = this.touch ? {
      mousemove: "touchmove",
      mouseup: "touchend"
    }[event] : event;
    (0, _jquery.default)(window).unbind(event, action);

    if (type === 'bind') {
      (0, _jquery.default)(window).bind(event, action);
    }
  }

  getClassName(obj, childs, Attrs, attrs, Props, isRoot) {
    let className = childs.length ? 'r-layout-parent' : 'r-layout-item';

    if (isRoot) {
      className += ' r-layout-root';
    }

    let gapClassName = 'r-layout-gap';

    if (Attrs.className) {
      className += ' ' + Attrs.className;
    }

    if (attrs.className) {
      className += ' ' + attrs.className;
    }

    if (obj.className) {
      className += ' ' + obj.className;
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
      className,
      gapClassName
    };
  }

  getStyle(obj, Props, style) {
    let align = obj.align || Props.align;
    let scroll = obj.scroll || Props.scroll;

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

    if (obj.style) {
      style = { ...style,
        ...obj.style
      };
    }

    return style;
  }

  getProps(obj, index, parent, isRoot) {
    let {
      childsAttrs = () => {
        return {};
      },
      childsProps = () => {
        return {};
      }
    } = parent;
    let {
      attrs = {},
      onResize,
      swapId
    } = obj;
    let Attrs = (typeof childsAttrs === 'function' ? childsAttrs(obj, index) : childsAttrs) || {};
    let Props = (typeof childsProps === 'function' ? childsProps(obj, index) : childsProps) || {};
    let size = obj.size || Props.size;
    let flex = obj.flex || Props.flex;
    let cursor = Attrs.onClick || attrs.onClick ? 'pointer' : undefined;
    let childs = [];
    let html = typeof obj.html === 'function' ? obj.html() : obj.html;
    let dataId = 'a' + Math.random();
    let style = this.getStyle(obj, Props, {
      cursor,
      ...Attrs.style,
      ...attrs.style
    });
    let axis;
    let gapStyle = {};

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

    let {
      className,
      gapClassName
    } = this.getClassName(obj, childs, Attrs, attrs, Props, isRoot);
    let gapAttrs = {
      className: gapClassName,
      style: gapStyle,
      draggable: false,
      onDragStart: e => e.preventDefault()
    };

    if (size && onResize) {
      gapAttrs[this.touch ? 'onTouchStart' : 'onMouseDown'] = e => {
        this.so = {
          pos: this.getClient(e),
          onResize,
          axis,
          size,
          dataId
        };
        this.eventHandler('mousemove', _jquery.default.proxy(this.mouseMove, this));
        this.eventHandler('mouseup', _jquery.default.proxy(this.mouseUp, this));
      };
    }

    if (swapId) {
      attrs.draggable = true;

      attrs.onDragStart = e => {
        let {
          swapHandleClassName
        } = this.props;

        if (swapHandleClassName) {
          if (!(0, _jquery.default)(e.target).hasClass(swapHandleClassName) && (0, _jquery.default)(e.target).parents('.' + swapHandleClassName).length === 0) {
            return;
          }
        }

        this.swapId = swapId;
      };

      attrs.onDragOver = e => {
        e.preventDefault();
      };

      attrs.onDrop = () => {
        let {
          onSwap = () => {}
        } = this.props;

        if (this.swapId === swapId) {
          return;
        }

        onSwap(this.swapId, swapId);
        this.swapId = false;
      };
    }

    return {
      size,
      flex,
      childs,
      style,
      html,
      dataId,
      attrs: { ...Attrs,
        ...attrs,
        className,
        'data-id': dataId
      },
      gapAttrs
    };
  }

  getClient(e) {
    return this.touch ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : {
      x: e.clientX,
      y: e.clientY
    };
  }

  getHtml(obj, index, parentObj, isRoot) {
    if (!obj || obj === null) {
      return '';
    }

    let {
      show = true
    } = obj;
    let Show = typeof show === 'function' ? show() : show;
    let parent = parentObj || {};

    if (!Show) {
      return null;
    }

    let {
      size,
      flex,
      childs,
      style,
      html,
      attrs,
      gapAttrs
    } = this.getProps(obj, index, parent, isRoot);

    if (parentObj) {
      flex = flex || 'none';
    }

    var result;

    if (!childs.length) {
      result = /*#__PURE__*/_react.default.createElement("div", _extends({}, attrs, {
        style: { ...style,
          flex
        }
      }), html);
    } else {
      let Style = { ...style,
        flex: !size ? flex || 1 : undefined
      };
      result = /*#__PURE__*/_react.default.createElement("div", _extends({}, attrs, {
        style: Style
      }), childs.map((o, i) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: i
      }, this.getHtml(o, i, obj))));
    }

    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: index
    }, result, parent.gap !== undefined && /*#__PURE__*/_react.default.createElement("div", gapAttrs));
  }

  mouseMove(e) {
    var {
      rtl
    } = this.props;
    var {
      pos,
      axis,
      size,
      dataId
    } = this.so;
    var client = this.getClient(e);
    var offset = (client[axis] - pos[axis]) * (rtl ? -1 : 1);
    this.so.newSize = offset + size;
    var panel = (0, _jquery.default)('[data-id="' + dataId + '"]');
    panel.css({
      [{
        'x': 'width',
        'y': 'height'
      }[axis]]: this.so.newSize
    });
  }

  mouseUp() {
    this.eventHandler('mousemove', this.mouseMove, 'unbind');
    this.eventHandler('mouseup', this.mouseUp, 'unbind');
    var {
      onResize,
      newSize
    } = this.so;
    onResize(newSize);
  }

  render() {
    var {
      gap,
      layout
    } = this.props;
    return this.getHtml(layout, 0, undefined, true);
  }

}

exports.default = ReactVirtualDom;
ReactVirtualDom.defaultProps = {
  gap: 0,
  layout: {}
};