import React from 'react';
import '../makeup/makeup.scss'

export function PeopleList(props) {
	//Contacts is passed by props then is copied and sorted by name
	const arr = [...props.data]
		.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);

	/*
	**The button from listItems holds the phone number value of the element, the
	**event is triggered and deletePerson from parent component is called with
	**index as parameter.
	*/
	function handleClick(e) {
		props.deletePerson(e.target.value);
	}

	/*
	**listItems iterates on data, sets the key of li tag and button value with
	**the phone number of the element and renders every element.
	*/
	const listItems = arr
		.map(val => (
			<li
				className="w-auto hover-up rounded-xl shadow bg-white m card-header p-4"
				key={val.tel}>
				<p
					className="m">
					Name: {val.name} - Phone: {val.tel}
				</p>
				<button
					className="btn hover-up rounded-xl shadow bg-danger w-auto"
					value={val.tel}
					onClick={handleClick}>X
				</button>
			</li>
		));

	return	<div>
				<ul
					className="card w-auto rounded-xl shadow p-1 m-2 flex">
					{listItems}
				</ul>
			</div>
}
