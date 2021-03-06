# react-progress-deck
[![NPM version][npm-image]][npm-url]

-  react component for generating gamification badges.
-  Use cases would be: visualize achivement progress etc using materialized Badge. or loyalty reward program etc
-  material design, could be easily integrate with react-tween state for animiated progressing.
-  Please criticize this project and leave your feedback in issues :)


## Home Page:
https://github.com/linghuaj/react-progress-deck

## Home Page:
https://github.com/linghuaj/react-progress-deck

## TODO:
- support other themes.

## Run a demo
```shellscript
cd examples/simple
npm start
```


## API
```javascript
  propTypes: {
    imageUrl: PropTypes.string,  //image view badge. the main image url
    imageStyle: PropTypes.string,  //by default it is image view. when specify 'thumbnail', it switch to thumbnail mode
    title: PropTypes.string, //title for the deck
    description: PropTypes.string, //description for the dec
    progressBackgroundColor: PropTypes.string,  //background color for the progressbar
    progressForegroundColor: PropTypes.string, //forground color for the progressbar
    percentage: PropTypes.number,//percentage of the progressbar
    size: PropTypes.string //width of the deck
  }
```

## Examples

Main, Image Deck Progress View
```javascript
        < ProgressDeck
          imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
          description="Check in 5 different place in Yosemite"
          title="Yosemite Ninjia"
          size = {350}
          percentage = {0.5}
        />
```
[![image deck](https://raw.githubusercontent.com/linghuaj/react-progress-deck/master/assets/imgBadge.gif)](#features)

Thumbnail Deck Progress View
```javascript
    < ProgressDeck
          description="Check in 5 different place"
          title="Eating Healthy"
          size = {350}
          imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
          imageStyle="thumbnail"
          percentage = {0.5}
        />
```
[![Thumbnail Deck](https://raw.githubusercontent.com/linghuaj/react-progress-deck/master/assets/thumbBadge.gif)](#features)

Plain Deck Progress View
```javascript
      < ProgressDeck
          description="Check in 5 different place in canada"
          title="Monthly Hiking"
          size = {350}
          progressBackgroundColor = "#ffebee"
          progressForegroundColor = "#ef9a9a"
          percentage = {0.5}
        />

```
[![Plain Text Deck](https://raw.githubusercontent.com/linghuaj/react-progress-deck/master/assets/plainBadge.gif)](#features)

Grouped View

[![Grouped Decks](https://raw.githubusercontent.com/linghuaj/react-progress-deck/master/assets/screenshot.png)](#features)

## To use materialize fonts
```css
  @import url(//fonts.googleapis.com/css?family=Roboto:400,500,300,100,700,900);
  html,
  body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  }
```

## Pick the Right Materialize color
http://materializecss.com/color.html

## Lazy Load Image
https://github.com/callmecavs/layzr.js


[npm-image]: https://img.shields.io/npm/v/react-progress-deck.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-progress-deck
