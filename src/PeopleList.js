import React from 'react';
import './makeup/makeup.scss'

function PeopleList(props) {
	const arr = props.data;
	const listItems = arr.map((val, index) =>
		<li className="hover-up rounded-xl shadow  bg-white p m text-md" key={index}>
		  {val}
		</li>
	);
	return	<div className="card w-full rounded-xl shadow p m-y">
				<ul>{listItems}</ul>
			</div>
}

export default PeopleList;
