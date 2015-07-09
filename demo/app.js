'use strict';

import React from 'react/addons';
import ReactBadge from '../src/component';

const App = React.createClass({
  render() {
    return (
      <div className="demo">
        < ReactBadge
          imageUrl="http://i.imgur.com/WerlaFe.jpg"
          title="Travel Around Canada"
          description="Check in 5 different place in canada"
        />
      </div>
    )
  }
});

const content = document.getElementById('content');
React.render(<App/>, content)
