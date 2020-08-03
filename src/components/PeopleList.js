import React from 'react';
import '../makeup/makeup.scss'

export function PeopleList(props) {
	const arr = props.data;

	function handleClick(e) {
		props.deletePerson(e.target.value);
	}

	const listItems = arr.map((val, index) =>
		<li
			className="hover-up rounded-xl shadow  bg-white p m text-md"
			key={index}>{val}
			<button value={index} onClick={handleClick}>
				Borrar
			</button>
		</li>
	);
	return	<div className="card w-full rounded-xl shadow p m-y">
				<ul>{listItems}</ul>
			</div>
}
