import React, { useState, useEffect } from 'react';
import './makeup/makeup.scss';
import {AddPersonForm} from './components/AddPersonForm';
import {PeopleList} from './components/PeopleList';

export function App() {
	const [contacts,setContacts] = useState([{name: "", tel: ""}]);

	//The first useEffect is used to check if there's any data on localStorage.
	useEffect(() => {
		let data = localStorage.getItem('contacts');
		if (data != null) {
			setContacts(JSON.parse(data));
		}
	}, []);

	/*
	**The second useEffect is used to set the data on localStorage if there's
	**any changes on contacts.
	*/
	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	/*
	**addPerson is called from AddPersonFrom with an object as parameter with
	**the same structure as contacts and use setContacts to add the new person.
	*/
	function addPerson(person) {
		setContacts([...contacts,
		{name: person.name, tel: person.tel}]);
	}

	/*
	**deletePerson is called from PeopleList with the telephone as a parameter,
	**in the variable temp a copy is made, using the index of the element, this
	**is removed and then contacts is set again with the modified temp.
	*/
	function deletePerson(tel) {
		var temp = [...contacts];
		var key = temp.findIndex(obj => obj.tel === tel);
		temp.splice(key, 1);
		setContacts([...temp]);
	}
//b-none shadow rounded-lg card
	return (
		<div className="w-auto m-0">
			<PeopleList data={contacts} deletePerson={deletePerson}/>
			<AddPersonForm data={contacts} addPerson={addPerson}/>
		</div>
	);
}
