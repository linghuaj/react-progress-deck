/* eslint no-unused-vars:0 */

import React, {PropTypes} from 'react/addons';
import stylesMain from './styles';

let styles = stylesMain.materialize;

const Component = React.createClass({
  propTypes: {
   imageUrl: PropTypes.string,//"http://i.imgur.com/WerlaFe.jpg"
   title: PropTypes.string,
   description: PropTypes.string
  },

  render() {
    return (
      <div className="card" style={styles.card}>
        <div className="image" style={styles.image}>
          <img src={this.props.imageUrl} style={styles.img}/>
            <span className="title" style={styles.title}>{this.props.title}</span>
          </div>
          <div className="content" style={styles.content}>
            <p>{this.props.description}</p>
          </div>
          <div className="progress" style={styles.progress}>
            <div className="determinate" style={styles.determinate}></div>
          </div>
        </div>
      );
    }
  });

  export default Component;
