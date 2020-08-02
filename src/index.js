import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import './makeup/makeup.scss'

const contacts = ["Mario Pernia", "Javier Quijada", "Javier Cervilla"];

function AddPersonForm(props) {
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

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li className="hover-up rounded-xl shadow  bg-white p m text-md"
    key={index}>{val}</li>
  );
  return  <div className="card w-full rounded-xl shadow p m-y">
            <ul>{listItems}</ul>
          </div>
}

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
