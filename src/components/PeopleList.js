import React from 'react';
import '../makeup/makeup.scss'

export function PeopleList(props) {
	const arr = [...props.data];

	function handleClick(e) {
		props.deletePerson(e.target.value);
	}

	function getIndex(name) {
		return arr.findIndex(obj => obj.name === name);
	}

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
