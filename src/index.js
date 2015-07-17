/* eslint no-unused-vars:0 */

import React, {PropTypes} from 'react/addons';
import stylesMain from './styles';
const Component = React.createClass({
  propTypes: {
    size: PropTypes.number, //350
    imageUrl: PropTypes.string,
    imageStyle: PropTypes.string, //"image" or "thumbnail"
    title: PropTypes.string,
    description: PropTypes.string,
    progressMode: PropTypes.string, //bar, circle
    progressBackgroundColor: PropTypes.string,
    progressForegroundColor: PropTypes.string,
    percentage: PropTypes.number, //0.2
  },

  getDefaultProps () {
    return {
      size: 350,
      imageStyle: 'image',
      title: 'a deck',
      progressMode: 'bar',
      progressBackgroundColor: '#acece6',
      progressForegroundColor: '#26a69a',
      percentage: 0
    };
  },

  render() {
    let styles = stylesMain(this.props, 'materialize');
    let percentageText, image, thumbnail;

    if (this.props.percentage >= 1){
      percentageText = "Done"
    }else{
      percentageText= Math.round(this.props.percentage * 100) + "%"
    }

    if (this.props.imageUrl){
      if (this.props.imageStyle==="thumbnail"){
        thumbnail =
        <div className="thumbnailContainer" style={styles.thumbnailContainer}>
          <img className="thumbnail" src={this.props.imageUrl} style={styles.thumbnail}/>
        </div>
      }else{
        image =
        <div className="imgContainer" style={styles.imgContainer}>
          <img className="image" src={this.props.imageUrl} style={styles.img}/>
        </div>
      }
    }

    return (
      <div className="card" style={styles.card}>
        {image}
        <div className="content" style={styles.content}>
            {thumbnail}
            <div className="detail" style={styles.detail}>
              <div className="title" style={styles.title}>{this.props.title}</div>
              <div className="description" style={styles.description}>{this.props.description}</div>
            </div>
          <div className="percentageText" style={styles.percentageText}>
            {percentageText}
          </div>
        </div>
        <div className="progress" style={styles.progress}>
          <div className="determinate" style={styles.determinate}></div>
        </div>
      </div>
    );
  }
});

export default Component;
