let getStyles = (props, theme = 'materialize') => {
  //for now only support materialize design styled badge
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: props.size + 'px',
      background: '#FFF',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      color: '#272727',
      borderRadius: '2px'
    },
    imgContainer: {
      width: props.size + 'px',
      height: props.imageUrl ? '160px' : 0,
      overflow: 'hidden'
    },
    img: {
      width: '100%'
    },

    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '12px',
      padding: '20px',
      fontWeight: 300,
      lineHeight: '15px'
    },

    thumbnailContainer: {
      position: 'relative',
      height: '46px',
      width: '46px',
      overflow: 'hidden'
    },
    thumbnail: {
      width: '100%'
    },
    detail: {
      display: 'flex',
      flexDirection: 'column',
      width: '65%'
    },
    title: {
      lineHeight: '30px',
      fontSize: '18px',
      fontWeight: 300
    },

    percentageText: {
      fontSize: '20px',
      color: props.progressForegroundColor || '#26a69a',
      lineHeight: '30px'
    },

    progress: {
      position: 'relative',
      height: '5px',
      display: 'block',
      width: '100%',
      backgroundColor: props.progressBackgroundColor || '#acece6'//'#acece6',
    },
    determinate: {
      position: 'absolute',
      width: props.percentage * 100 + '%',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: props.progressForegroundColor || '#26a69a'
    }
  };
};

export default getStyles;
