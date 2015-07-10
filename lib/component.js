/* eslint no-unused-vars:0 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var Component = _reactAddons2['default'].createClass({
  displayName: 'Component',

  propTypes: {
    imageUrl: _reactAddons.PropTypes.string,
    imageStyle: _reactAddons.PropTypes.string,
    title: _reactAddons.PropTypes.string,
    description: _reactAddons.PropTypes.string,
    progressBackgroundColor: _reactAddons.PropTypes.string,
    progressForegroundColor: _reactAddons.PropTypes.string,
    percentage: _reactAddons.PropTypes.number,
    size: _reactAddons.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      percentage: 0,
      size: 350,
      progressBackgroundColor: '#acece6',
      progressForegroundColor: '#26a69a',
      title: 'A Deck'
    };
  },

  render: function render() {
    var styles = (0, _styles2['default'])(this.props, 'materialize');
    var percentageText = undefined,
        image = undefined,
        thumbnail = undefined;

    if (this.props.percentage >= 1) {
      percentageText = 'Done';
    } else {
      percentageText = Math.round(this.props.percentage * 100) + '%';
    }

    if (this.props.imageUrl) {
      if (this.props.imageStyle === 'thumbnail') {
        thumbnail = _reactAddons2['default'].createElement(
          'div',
          { className: 'thumbnailContainer', style: styles.thumbnailContainer },
          _reactAddons2['default'].createElement('img', { className: 'thumbnail', src: this.props.imageUrl, style: styles.thumbnail })
        );
      } else {
        image = _reactAddons2['default'].createElement(
          'div',
          { className: 'imgContainer', style: styles.imgContainer },
          _reactAddons2['default'].createElement('img', { className: 'image', src: this.props.imageUrl, style: styles.img })
        );
      }
    }

    return _reactAddons2['default'].createElement(
      'div',
      { className: 'card', style: styles.card },
      image,
      _reactAddons2['default'].createElement(
        'div',
        { className: 'content', style: styles.content },
        thumbnail,
        _reactAddons2['default'].createElement(
          'div',
          null,
          _reactAddons2['default'].createElement(
            'span',
            { className: 'title', style: styles.title },
            this.props.title,
            _reactAddons2['default'].createElement(
              'span',
              { className: 'percentageText', style: styles.percentageText },
              percentageText
            )
          ),
          _reactAddons2['default'].createElement(
            'p',
            { className: 'description' },
            this.props.description
          )
        )
      ),
      _reactAddons2['default'].createElement(
        'div',
        { className: 'progress', style: styles.progress },
        _reactAddons2['default'].createElement('div', { className: 'determinate', style: styles.determinate })
      )
    );
  }
});

exports['default'] = Component;
module.exports = exports['default'];