'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function getStyles(props, mainStyle) {
  //for now only support materialize design styled badge
  mainStyle = 'materialize';
  var styles = {
    card: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '350px',
      position: 'relative',
      overflow: 'hidden',
      margin: '10px',
      background: '#FFF',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      color: '#272727',
      borderRadius: '2px'
    },

    title: {
      lineHeight: '25px',
      fontSize: '20px',
      fontWeight: 300
    },
    content: {
      fontSize: '12px',
      padding: '20px',
      fontWeight: 300,
      borderRadius: '0 0 2px 2px',
      lineHeight: '15px'
    },
    percentageText: {
      float: 'right'
    },
    imgContainer: {
      width: '100%',
      height: '160px',
      overflow: 'hidden'
    },
    img: {
      width: '100%'
    },

    thumbnailContainer: {
      position: 'relative',
      height: '46px',
      width: '46px',
      overflow: 'hidden',
      float: 'left',
      marginRight: '10px'
    },
    thumbnail: {
      width: '100%'
    },
    progress: {
      position: 'relative',
      height: '5px',
      display: 'block',
      width: '100%',
      backgroundColor: '#acece6',
      borderRadius: '0px',
      overflow: 'hidden'
    },
    determinate: {
      position: 'absolute',
      width: '80%',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#26a69a'
    }
    // }
  };
  //TODO: what's the most effecient way
  if (props.progressBackgroundColor) {
    styles.progress.backgroundColor = props.progressBackgroundColor;
  }

  if (props.progressForegroundColor) {
    styles.determinate.backgroundColor = props.progressForegroundColor;
  }
  styles.percentageText.color = styles.determinate.backgroundColor;

  if (props.size) {
    styles.card.width = props.size + 'px';
  }

  if (props.percentage) {
    styles.determinate.width = props.percentage * 100 + '%';
  }

  if (!props.imageUrl) {
    styles.imgContainer.height = '0px';
  }

  return styles;
}

exports['default'] = getStyles;
module.exports = exports['default'];