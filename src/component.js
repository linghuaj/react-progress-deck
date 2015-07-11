/* eslint no-unused-vars:0 */

import React, {PropTypes} from 'react/addons';
import stylesMain from './styles';
const Component = React.createClass({
  propTypes: {
    imageUrl: PropTypes.string,
    imageStyle: PropTypes.string, //"image" or "thumbnail"
    title: PropTypes.string,
    description: PropTypes.string,
    progressBackgroundColor: PropTypes.string,
    progressForegroundColor: PropTypes.string,
    percentage: PropTypes.number,
    size: PropTypes.number
  },

  getDefaultProps () {
    return {
      percentage: 0,
      imageStyle: 'image',
      size: 350,
      progressBackgroundColor: '#acece6',
      progressForegroundColor: '#26a69a',
      title: 'A Deck'
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
          <div>
            <span className="title" style={styles.title}>
              {this.props.title}
              <span className="percentageText" style={styles.percentageText}>
                {percentageText}
              </span>
            </span>
            <p className="description">{this.props.description}</p>
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
