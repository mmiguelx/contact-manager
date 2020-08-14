import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {App} from '../App'

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
		axios.get("http://127.0.0.1:3001/api/contacts")
			.then((res) => {
				setIsLoaded(true);
				setContacts(res.data);
				console.log(isLoaded);
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
		axios.delete("http://127.0.0.1:3001/api/contacts/" + id)
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
    }, [getContacts]);

	//Render the menu when the button event is called.
	function BackToMenu() {
		ReactDOM.render(
			<App />,
		  document.getElementById('root')
		);
	}

	//listItems iterates on data, and renders every element.
	const listItems = arr
		.map(val => (
			<li key={val._id}>
				<div className="uk-card uk-card-default uk-margin-top uk-margin-left uk-margin-right uk-margin-bottom" >
					<div className="uk-card-header">
						<div className="">
							<h3
								className="uk-card-title uk-margin-remove-bottom">
								{val.name}
							</h3>
							<p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
								{val.title}
							</p>
						</div>
					</div>
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
		<div data-uk-slider>
			<div className="uk-slider-container">
				<ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m ">
					{listItems}
				</ul>
			</div>
			<ul
				className="uk-slider-nav uk-dotnav uk-flex-center uk-margin">
			</ul>
			<button
				className="uk-button uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom"
				onClick={BackToMenu}>+
			</button>
		</div>
	);
}
