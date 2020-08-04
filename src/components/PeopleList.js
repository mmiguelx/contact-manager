import React from 'react';
import '../makeup/makeup.scss'

export function PeopleList(props) {
	const arr = [...props.data];

	/*
	**The button from listItems hold the index value of the element, the event
	**is triggered and deletePerson from parent component is called with index
	**as parameter
	*/
	function handleClick(e) {
		props.deletePerson(e.target.value);
	}

	//Simple function to get the index of the element by comparing name
	function getIndex(name) {
		return arr.findIndex(obj => obj.name === name);
	}

	/*
	**listItems iterates on data, set the key of li tag and button value with
	**the index of the element and render every element aswell.
	*/
	const listItems = arr.map(val => (
		<li
			className="hover-up rounded-xl shadow  bg-white p m text-md"
			key={getIndex(val.name)}>
			Name: {val.name} - Phone: {val.tel}
			<button
				value={getIndex(val.name)}
				onClick={handleClick}>Delete
			</button>
		</li>
	));

	return	<div className="card w-full rounded-xl shadow p m-y">
				<ul>{listItems}</ul>
			</div>
}
