'use strict';

import React from 'react/addons';
import ProgressDeck from '../src/component';

let tweenState = require('react-tween-state');
const App = React.createClass({
   mixins: [tweenState.Mixin],
   getInitialState: function() {
   return {width: 0.1};
 },

 handleClick: function() {
   this.tweenState('width', {
     easing: tweenState.easingTypes.easeInOutQuad,
     duration: 800,
     endValue: this.state.width === 1 ? 0 : this.state.width + 0.1
   });
 },

  render() {
    let width = this.getTweeningValue('width')
    return (
      <div className="demo">
        <a onClick ={this.handleClick}>click me</a><br/>
        < ProgressDeck
          imageUrl="http://i.imgur.com/WerlaFe.jpg"
          description="Check in 5 different place in canada"
          title="Canada Ninjia"
          size = '350px'
          percentage = {width}
        />

        < ProgressDeck
          imageUrl="https://www.adventuresmithexplorations.com/stuff/contentmgr/files/74/a0e15fabd79d337e5bad0bc9adc2bf7f/image/_resized/80_745_420_glacier_zodiac_alaska_crp.jpg"
          description="Check in 5 different place in canada"
          title="Alaska Ninjia"
          size = '350px'
          percentage = {width/2}
        />

        < ProgressDeck
          imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
          description="Check in 5 different place in canada"
          title="Yosemite Ninjia"
          size = '350px'
          percentage = {width}
        />

        <br/>
        < ProgressDeck
          description="Check in 5 different place in canada"
          title="Monthly Hiking"
          size = '350px'
          progressBackgroundColor = "#ffebee"
          progressForegroundColor = "#ef9a9a"
          percentage = {width/3}
        />

        < ProgressDeck
          description="Check in 5 different place in canada"
          title="Eating Healthy"
          size = '350px'
          progressBackgroundColor = "#ffebee"
          progressForegroundColor = "#ef9a9a"
          percentage = {width/5}
        />
        <br/>

        < ProgressDeck
          description="Check in 5 different place"
          title="Eating Healthy"
          size = '350px'
          imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
          imageStyle="thumbnail"
          percentage = {width*2}
        />

        < ProgressDeck
          description="Check in 5 different place in canada"
          title="Eating Healthy"
          size = '350px'
          imageUrl="https://cdn2.iconfinder.com/data/icons/ballicons-2-free/100/ad-128.png"
          imageStyle="thumbnail"
          percentage = {width}
        />
      </div>
    )
  }
});

const content = document.getElementById('content');
React.render(<App/>, content)
