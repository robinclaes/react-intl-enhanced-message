'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactIntl = require('react-intl');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
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
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

const processMessage = (message, enhancers) => {
  const regex = /<(x:([\da-z_-]+))>(.*?)<\/\1>/gi;
  const output = [];
  let result;
  let key = 0;

  while ((result = regex.exec(message)) !== null) {
    const index = result.index;

    const _result = result,
          _result2 = _slicedToArray(_result, 4),
          match = _result2[0],
          label = _result2[2],
          value = _result2[3];

    output.push(message.substring(0, index));

    if (label in enhancers) {
      output.push(React__default.createElement(React.Fragment, {
        key: key++
      }, enhancers[label](value)));
    } else {
      output.push(match);
    }

    message = message.substring(index + match.length, message.length + 1);
    regex.lastIndex = 0;
  }

  output.push(message);
  return output;
};

const FormattedEnhancedMessage = (_ref) => {
  let enhancers = _ref.enhancers,
      props = _objectWithoutProperties(_ref, ["enhancers"]);

  return React__default.createElement(reactIntl.FormattedMessage, props, message => processMessage(message, enhancers));
};

exports.FormattedEnhancedMessage = FormattedEnhancedMessage;
