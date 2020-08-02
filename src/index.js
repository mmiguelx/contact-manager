import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './makeup/makeup.scss'
import {AddPersonForm} from './components/AddPersonForm'
import {PeopleList} from './components/PeopleList'
import {Storage} from './components/StorageTest'

const contacts = [];

function ContactManager(props) {
  const [contacts,setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <>
      <PeopleList data={contacts} />
      <AddPersonForm handleSubmit={addPerson}/>
    </>
  );
}

ReactDOM.render(
  <div className="b-none shadow rounded-lg card w-auto  p-3 m-4">
    <ContactManager data={contacts} />
    <Storage />
  </div>,
  document.getElementById('root')
);
