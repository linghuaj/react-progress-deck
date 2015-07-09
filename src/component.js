/* eslint no-unused-vars:0 */

import React from 'react/addons';



const Component = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src="http://i.imgur.com/WerlaFe.jpg"/>
            <span className="title">Card Title</span>
          </div>
          <div className="content">
            <p>100 push ups</p>
          </div>
          <div className="progress">
            <div className="determinate"></div>
          </div>
        </div>
      );
    }
  });

  export default Component;
