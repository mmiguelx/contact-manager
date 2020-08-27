import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

//Render the menu when the button event is called.
function BackToMenu() {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
}

export default BackToMenu;
