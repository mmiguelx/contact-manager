import React, { useState, useEffect, useCallback } from 'react';
import { AddPersonForm } from './AddPersonForm';
import ReactDOM from 'react-dom';
import axios from 'axios';

export function PeopleList() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [contacts, setContacts] = useState([{ _id: 0, name: "", tel: "", title: "", email: "" }]);

	//Contacts is copied and sorted by name
	const arr = [...contacts]
		.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);

	/*
	**We call the api to get all the info on databas with useCallback to avoid
	**unnecesary multiple rendering.
	*/
	const getContacts = useCallback(() => {
		axios.get("http://127.0.0.1:3000/api/contacts")
			.then((res) => {
				setIsLoaded(true);
				setContacts(res.data);
				console.log("nani? "+isLoaded);
			})
			.catch((err) => {
				setIsLoaded(true);
				setError(err);
				console.log(error);
			})
	}, [error, isLoaded]);

	/*
	**The button from listItems holds id of the element from database, the
	**event is triggered and deletePerson is called with index as parameter
	*/
	function handleClick(e) {
		deletePerson(e.target.value);
	}

	//We call the api to delete the info on database.
	function deletePerson(id) {
		axios.delete("http://127.0.0.1:3000/api/contacts/" + id)
			.then((res) => {
				console.log(res)
				getContacts();
			}).catch((err) => {
				console.log(err)
			})
	}

	//On render call getContacts in order to get the data from the database.
	useEffect(() => {
		getContacts()
	}, []);

	function Render(e) {
		ReactDOM.render(
			<AddPersonForm />,
			document.getElementById('root')
		);
	}

	//listItems iterates on data, and renders every element.
	const listItems = arr
		.map(val => (
			<li key={val._id}>
				<a className="uk-accordion-title" href="#">
					<div className="">
						<h3
							className="uk-card-title uk-margin-remove-bottom">
							{val.name}
						</h3>
						<p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
							{val.title}
						</p>
					</div>
				</a>
				<div className="uk-accordion-content uk-margin-remove">
					<div className="uk-card-body">
						<form className="uk-margin">
							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="tel">
									Number:
								</label>
								<div className="uk-form-controls">
									<input
										className="uk-input"
										id="tel"
										type="text"
										placeholder={val.tel} disabled
									/>
								</div>
							</div>
							<div className="">
								<label className="uk-form-label" htmlFor="email">
									Email:
								</label>
								<div className="uk-form-controls">
									<input
										className="uk-input"
										id="email"
										type="text"
										placeholder={val.email}
										disabled
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="uk-card-footer">
						<button
							className="uk-button uk-button-danger"
							value={val._id}
							onClick={handleClick}>Borrar
						</button>
					</div>
				</div>
			</li>
		));

	return (
		<div>
			<div className="uk-container uk-width-1-2 uk-margin-large-top">
				<ul data-uk-accordion>
					{listItems}
				</ul>
				<button
					className="uk-button uk-button-primary"
					onClick={Render}>
					Nuevo
				</button>
			</div>
			<button
				className="uk-button uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom"
				onClick={BackToMenu}>+
			</button>
		</div>
	);
}
