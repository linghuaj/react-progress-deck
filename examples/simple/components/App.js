import React, { Component } from 'react';
import ProgressDeck from 'react-progress-deck';
import  {Spring}  from 'react-motion';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0.1
    }
  }

  handleClick() {
    this.setState({width: this.state.width + 0.1})
  }
  render() {
    let width = this.state.width
    return (
      <div className="demo">

          < ProgressDeck
            imageUrl="http://i.imgur.com/WerlaFe.jpg"
            description="Check in 5 different place in canada"
            title="Canada Ninjia"
            size = {350}
            percentage = {0.1}
          />

        < ProgressDeck
          imageUrl="https://www.adventuresmithexplorations.com/stuff/contentmgr/files/74/a0e15fabd79d337e5bad0bc9adc2bf7f/image/_resized/80_745_420_glacier_zodiac_alaska_crp.jpg"
          description="Check in 5 different place in canada"
          title="Alaska Ninjia"
          size = {350}
          percentage = {0.2}
        />

        < ProgressDeck
          imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
          description="Check in 5 different place in canada"
          title="Yosemite Ninjia"
          size = {350}
          percentage = {0.3}
        />

        <br/>

        < ProgressDeck
          description="Check in 5 different place"
          title="Eating Healthy"
          size = {350}
          imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
          imageStyle="thumbnail"
          percentage = {0.5}
        />

        < ProgressDeck
          description="Check in 5 different place in canada"
          title="Eating Healthy"
          size = {350}
          imageUrl="https://cdn2.iconfinder.com/data/icons/ballicons-2-free/100/ad-128.png"
          imageStyle="thumbnail"
          percentage = {0.6}
        />
        <br/><br/>
        <a onClick ={this.handleClick.bind(this)}>click me to animate progress</a>
        <br/>
        <Spring endValue={{val: width}}>
          {interpolated => <ProgressDeck
              description="Check in 5 different place in canada"
              title="Monthly Hiking"
              size = {350}
              progressBackgroundColor = "#ffebee"
              progressForegroundColor = "#ef9a9a"
              percentage = {interpolated.val}
            />}
        </Spring>

       <Spring endValue={{val: width}}>
       {interpolated => <ProgressDeck
           description="Check in 5 different place in canada"
           title="Eating Healthy"
           size = {350}
           progressBackgroundColor = "#ffebee"
           progressForegroundColor = "#ef9a9a"
           percentage = {interpolated.val}
         />}
     </Spring>
      </div>
    );
  }
}
