import React from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'
import { AddPersonForm } from './components/AddPersonForm';
import { PeopleList } from './components/PeopleList';
import ReactDOM from 'react-dom';

export function App() {

	//Render selector
	function Render(e) {
		if (e.target.value === "Add") {
			ReactDOM.render(
				<AddPersonForm />,
			  document.getElementById('root')
			);
		}
		else {
			ReactDOM.render(
				<PeopleList />,
			  document.getElementById('root')
			);
		}
	}

	return (
		<div>
			<button onClick={Render} value="Add">Add</button>
			<button onClick={Render} value="List">List</button>
		</div>
	)
}
