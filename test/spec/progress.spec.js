'use strict';

describe('Progress', function () {

  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  var ProgressDeck = require('select.jsx');
  var container, component;

  describe('Mounting', function() {

    beforeEach(function() {
      container = document.createElement('div');
      component = React.render(
        React.createElement(RadonSelect, {selectName: "test"}, [
          React.createElement(RadonSelect.Option, {key: "blah"}, "blah"),
          React.createElement(RadonSelect.Option, {key: "foo"}, "foo")
        ]),
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
