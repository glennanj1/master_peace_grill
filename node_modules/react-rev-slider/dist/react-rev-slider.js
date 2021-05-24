(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactRevSlider = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var RevSlider = (function (_Component) {
    _inherits(RevSlider, _Component);

    function RevSlider(props) {
        _classCallCheck(this, RevSlider);

        _get(Object.getPrototypeOf(RevSlider.prototype), 'constructor', this).call(this, props);
        this.jquery = jQuery || $ || window.jQuery || window.$;
    }

    _createClass(RevSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            this.jquery(document).ready(function () {
                _this.jquery('.tp-banner').revolution(_this.props.config);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                {
                    className: 'tp-container',
                    style: containerStyle
                },
                _react2['default'].createElement(
                    'div',
                    {
                        className: 'tp-banner',
                        style: bannerStyle
                    },
                    _react2['default'].createElement(
                        'ul',
                        null,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return RevSlider;
})(_react.Component);

exports.RevSlider = RevSlider;

var Slide = (function (_Component2) {
    _inherits(Slide, _Component2);

    function Slide(props, context) {
        _classCallCheck(this, Slide);

        _get(Object.getPrototypeOf(Slide.prototype), 'constructor', this).call(this, props, context);
    }

    _createClass(Slide, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'li',
                fetchAttributes(this.props.slideProperties),
                _react2['default'].createElement('img', fetchAttributes(this.props, 'slideProperties')),
                this.props.children
            );
        }
    }]);

    return Slide;
})(_react.Component);

exports.Slide = Slide;

var Caption = (function (_Component3) {
    _inherits(Caption, _Component3);

    function Caption(props, context) {
        _classCallCheck(this, Caption);

        _get(Object.getPrototypeOf(Caption.prototype), 'constructor', this).call(this, props, context);
    }

    _createClass(Caption, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                fetchAttributes(this.props),
                this.props.children
            );
        }
    }]);

    return Caption;
})(_react.Component);

exports.Caption = Caption;
exports['default'] = RevSlider;

var containerStyle = {
    position: 'relative',
    width: '100%',
    padding: 0
};

var bannerStyle = {
    width: '100%',
    position: 'relative'
};

var fullscreenContainer = {
    maxHeight: 'none',
    overflow: 'visible'
};

function fetchAttributes(payload) {
    var _ref;

    var sk = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var ex = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var attr = {};
    var skip = ['children'].concat(sk);
    var exceptions = (_ref = ['class', 'src', 'alt', 'style', 'id']).concat.apply(_ref, _toConsumableArray(ex));
    for (var key in payload) {
        if (skip.includes(key)) {
            continue;
        } else if (key === 'class') {
            attr[key + 'Name'] = payload[key];
        } else if (exceptions.includes(key)) {
            attr[key] = payload[key];
        } else {
            if (key.startsWith('data-')) {
                attr[key] = payload[key];
            } else {
                attr['data-' + key] = payload[key];
            }
        }
    }
    return attr;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});