// http://simonsmith.io/unit-testing-react-components-without-a-dom/

import { expect } from 'chai';
import ProgressDeck from '../src/index';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

export default createComponent;

function createComponent(component, props, ...children) {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
    return shallowRenderer.getRenderOutput();
}


describe('ProgressDeck component', function() {
    let deck;
    let imageUrl =  "https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg";
    let description = "test1 description";
    let title = "test1 title";
    let size = 350;
    beforeEach(function() {
        deck = createComponent(ProgressDeck,  {
            imageUrl: imageUrl,
            description: description,
            title: title,
            size: size,
            percentage: 0.5
        });
    });

    it('should render in a card', function() {
        //  deck.props contain all the virtual dom info
        const container = deck.props;
        expect(container.className).to.equal('card')
    });

    it('should render a image if there is a image', function() {
        const deckImageUrl = deck.props.children[0];
        expect(deckImageUrl._store.props.className).to.equal("imgContainer");
        expect(deckImageUrl._store.props.children._store.props.src).to.equal(imageUrl);
    });

    it('should contain the right content', function() {
        const content = deck.props.children[1];
        expect(content._store.props.className).to.equal("content");
    });

    //todo: test progress value

});
