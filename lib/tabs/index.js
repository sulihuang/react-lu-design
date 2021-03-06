'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = require('rc-tabs/lib/ScrollableInkTabBar');

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3["default"])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3["default"])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        return _this;
    }

    Tabs.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            size = _props.size,
            _props$type = _props.type,
            type = _props$type === undefined ? 'line' : _props$type,
            tabPosition = _props.tabPosition,
            children = _props.children,
            tabBarExtraContent = _props.tabBarExtraContent,
            hideAdd = _props.hideAdd,
            onTabClick = _props.onTabClick,
            animated = _props.animated;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-no-animation', !animated), _classNames));
        // only card type tabs can be added and closed
        var childrenWithClose = void 0;
        if (type === 'editable-card') {
            childrenWithClose = [];
            _react2["default"].Children.forEach(children, function (child, index) {
                childrenWithClose.push((0, _react.cloneElement)(child, {
                    tab: _react2["default"].createElement(
                        'div',
                        null,
                        child.props.tab,
                        _react2["default"].createElement(_icon2["default"], { type: 'close', onClick: function onClick(e) {
                                return _this2.removeTab(child.key, e);
                            } })
                    ),
                    key: child.key || index
                }));
            });
            // Add new tab handler
            if (!hideAdd) {
                tabBarExtraContent = _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement(_icon2["default"], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                    tabBarExtraContent
                );
            }
        }
        tabBarExtraContent = tabBarExtraContent ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-extra-content' },
            tabBarExtraContent
        ) : null;
        return _react2["default"].createElement(
            _rcTabs2["default"],
            (0, _extends3["default"])({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: function renderTabBar() {
                    return _react2["default"].createElement(_ScrollableInkTabBar2["default"], { extraContent: tabBarExtraContent, onTabClick: onTabClick });
                }, renderTabContent: function renderTabContent() {
                    return _react2["default"].createElement(_TabContent2["default"], { animated: animated });
                }, onChange: this.handleChange }),
            childrenWithClose || children
        );
    };

    return Tabs;
}(_react2["default"].Component);

exports["default"] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'lud-tabs',
    hideAdd: false,
    animated: true
};
module.exports = exports['default'];