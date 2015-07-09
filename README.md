# react-badge
- react component for generating gamification badges.
- Ideal use case if for visualize achivement progress etc using materialized Badge.
-  material design, could be easily integrate with react-tween state for animiated progressing. 

## TODO:
- this will be installable using npm.
- support other themes. 

## Run a demo
gulp webpack-dev-server
gulp open


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
        < ReactBadge
          imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
          description="Check in 5 different place in Yosemite"
          title="Yosemite Ninjia"
          size = '350px'
          percentage = {width}
        />
```
[![image deck](https://github.com/vanessachem/react-badge/blob/master/assets/imgBadge.gif)](#features)

Thumbnail Deck Progress View
```javascript
    < ReactBadge
          description="Check in 5 different place"
          title="Eating Healthy"
          size = '350px'
          imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
          imageStyle="thumbnail"
          percentage = {width*2}
        />
```
[![Thumbnail Deck](https://github.com/vanessachem/react-badge/blob/master/assets/thumbBadge.gif)](#features)

Plain Deck Progress View
```javascript
      < ReactBadge
          description="Check in 5 different place in canada"
          title="Monthly Hiking"
          size = '350px'
          progressBackgroundColor = "#ffebee"
          progressForegroundColor = "#ef9a9a"
          percentage = {width/3}
        />

```
[![Plain Text Deck](https://github.com/vanessachem/react-badge/blob/master/assets/plainBadge.gif)](#features)

Grouped View

[![Grouped Decks](https://github.com/vanessachem/react-badge/blob/master/assets/screenshot.png)](#features)
