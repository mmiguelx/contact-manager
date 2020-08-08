import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'
import { AddPersonForm } from './components/AddPersonForm';
import { PeopleList } from './components/PeopleList';

export function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [contacts, setContacts] = useState([{ _id: 0, name: "", tel: "", title: "", email: "" }]);

	//React and ajax, we call the api to get all the info in the db.
	function getContacts() {
		axios.get("http://127.0.0.1:3000/api/contacts")
			.then((res) => {
				setIsLoaded(true);
				setContacts(res.data);

			})
			.catch((err) => {
				setIsLoaded(true);
				setError(err);
			})
	}

	function addPerson(person) {
		axios.post("http://127.0.0.1:3000/api/contacts", {
			name: person.name,
			tel: person.tel,
			title: person.title,
			email: person.email
		}).then((res) => {
			console.log(res)
			getContacts();
		}).catch((err) => {
			console.log(err)
		})
	}
	function deletePerson(id) {
		axios.delete("http://127.0.0.1:3000/api/contacts/" + id)
			.then((res) => {
				console.log(res)
				getContacts();
			}).catch((err) => {
				console.log(err)
			})
	}
	useEffect(() => {
		getContacts()
	}, []);

	function Render(e) {
		if (e.target.value === "Add") {
			ReactDOM.render(
				<AddPersonForm data={contacts} addPerson={addPerson}/>,
			  document.getElementById('root')
			);
		}
		else {
			ReactDOM.render(
				<PeopleList data={contacts} deletePerson={deletePerson}/>,
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
