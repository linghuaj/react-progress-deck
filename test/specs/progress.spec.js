'use strict';

describe('Progress', function () {

  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  var ProgressDeck = require('component.js');
  var container, component;
  //test params
  var imageUrl =  "https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg";
  var description = "test1 description";
  var title = "test1 title";
  var size = 350;

  describe('component-progress-deck', function() {
    beforeEach(function() {
      container = document.createElement('div');
      component = React.render(
        React.createElement(ProgressDeck, {
          imageUrl: imageUrl,
          description: description,
          title: title,
          size: size,
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

    it("it should contain image in the deck", function() {
      var dom = TestUtils.findRenderedDOMComponentWithClass(component, "card").getDOMNode();
      expect(container.querySelector("img").getAttribute("src") === imageUrl).to.be.true;
    });
  });
});
