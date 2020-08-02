import React, { useState } from 'react';
import './makeup/makeup.scss';
import {AddPersonForm} from './components/AddPersonForm';
import {PeopleList} from './components/PeopleList';

export function App(props) {
	const [contacts,setContacts] = useState(props.data);

	function addPerson(name) {
	  setContacts([...contacts, name]);
	}

	return (
	  <>
		<PeopleList data={contacts} />
		<AddPersonForm addPerson={addPerson}/>
	  </>
	);
}
