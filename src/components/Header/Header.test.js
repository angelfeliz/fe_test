import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
//import ReactDom from 'react-dom';
//import {getQueriesForElement} from 'dom-testing-library';
import {render, fireEvent} from 'react-testing-library';
import Header from './Header';


test('render header menu', () => {
    const {container, debug, getByTestId} = render(<Header/>);
    //To check if at least one item is present in the header menu
    let item = getByTestId(/item/i);
    expect(item).toHaveTextContent(/\w/);

    let buttonMenu = getByTestId('buttonMenu');
    fireEvent.click(buttonMenu);
    console.log(container);

})