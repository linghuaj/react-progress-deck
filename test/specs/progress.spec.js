'use strict';

describe('Progress', function () {

  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  var ProgressDeck = require('component.js');
  var container, component;

  describe('Mounting', function() {
    beforeEach(function() {
      container = document.createElement('div');
      component = React.render(
        React.createElement(ProgressDeck, {
          imageUrl: "https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg",
          description: "description",
          title: "title",
          size: 350,
          percentage: 0.5
        }),
        container
      );
    });

    afterEach(function() {
      React.unmountComponentAtNode(container);
    });

    it('should render into the document', function() {
      expect(component.isMounted()).to.be.true;
    });
  });
});
