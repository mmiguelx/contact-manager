import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './makeup/makeup.scss'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

const contacts = ["Mario Pernia", "Javier Quijada", "Javier Cervilla"];

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
  </div>,
  document.getElementById('root')
);
