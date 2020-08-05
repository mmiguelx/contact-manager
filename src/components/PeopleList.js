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
				className="m rounded-xl shadow bg-secondary card-header"
				key={val.tel}>
				<td>
					<tr>
						<a className="color-light bold">Name: </a>
						<a className="color-dark">{val.name}</a>
					</tr>
					<tr>
						<a className="color-light bold">Phone: </a>
						<a className="color-dark">{val.tel}</a>
					</tr>
				</td>
				<button
					className="btn-small bg-gray hover-shadow rounded-xl hover-bg-danger hover-up y p"
					value={val.tel}
					onClick={handleClick}>X
				</button>
			</li>
		));

	return	<div className="bg-primary card rounded-xl shadow m-2">
				<ul className="full-w">
					{listItems}
				</ul>
			</div>
}
