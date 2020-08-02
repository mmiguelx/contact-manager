import React, {useState} from 'react';
import '../makeup/makeup.scss'

export function AddPersonForm(props) {
	const[person, setPerson] = useState("");

	function handleChange(e) {
	  setPerson(e.target.value);
	}

	function handleSubmit(e) {
	  if (person !== '') {
		props.handleSubmit(person);
		setPerson("");
	  }
	  e.preventDefault();
	}

	return (
		<div className="flex w-full m-1 border rounded-xl">
		  <form className="w-full card-body rounded-xl shadow flex justify-between"
		  onSubmit={handleSubmit}>
			<input type="text"
			placeholder="Add new contact"
			onChange={handleChange}
			className="w-full input hover-up border rounded-xl text-l align-center w-auto m p-1"
			value={person} />
			<button className="btn hover-up rounded-xl shadow justify-end"
			type="submit">add</button>
		  </form>
		</div>
	);
}
