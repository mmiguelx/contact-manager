import React, { useState, useEffect } from 'react';
import './makeup/makeup.scss';
import {AddPersonForm} from './components/AddPersonForm';
import {PeopleList} from './components/PeopleList';

export function App() {
	const [contacts,setContacts] = useState([]);

	useEffect(() => {
		let data = localStorage.getItem('contacts');
		if (data != null) {
			setContacts(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	function addPerson(name) {
	  setContacts([...contacts, name]);
	}

	function deletePerson(key) {
		var temp = [...contacts];
		temp.splice(key, 1);
		setContacts([...temp]);
	}

	return (
	  <>
		<PeopleList data={contacts} deletePerson={deletePerson}/>
		<AddPersonForm addPerson={addPerson}/>
	  </>
	);
}
