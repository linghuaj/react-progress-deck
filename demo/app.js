'use strict';

import React from 'react/addons';
import Component from '../src/component';

const App = React.createClass({

  render() {
    return (
      <div className="demo">
        < Component >
          component stuff goes here
        </ Component >
      </div>
    )
  }
});

const content = document.getElementById('content');

React.render(<App/>, content)

