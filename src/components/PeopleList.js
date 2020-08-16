import React, { useState, useEffect, useCallback } from 'react';
import { AddPersonForm } from './AddPersonForm';
import ReactDOM from 'react-dom';
import axios from 'axios';

//We will use this to capture the height
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}


export function PeopleList() {
	const [contacts, setContacts] = useState([{ _id: 0, name: "", tel: "", title: "", email: "" }]);
	const { height } = useWindowDimensions();

	const h = {
		height: height - 120
	}

	//Contacts is copied and sorted by name
	const arr = [...contacts]
		.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);

	/*
	**We call the api to get all the info on databas with useCallback to avoid
	**unnecesary multiple rendering.
	*/
	const getContacts = useCallback(() => {
		axios.get(process.env.REACT_APP_DB_URL)
			.then((res) => {
				setContacts(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}, []);

	//Async function to get the data from fb to edit it afterwards
	async function handleEdit(e) {
		const res = await axios.get(process.env.REACT_APP_DB_URL + "/" + e.target.value);
		ReactDOM.render(
			<AddPersonForm contact={res.data} />,
			document.getElementById('root')
		);
	}

	//Render AddPersonForm with empty prop to avoid errors with defaultValue
	function AddContact() {
		ReactDOM.render(
			<AddPersonForm contact="" />,
			document.getElementById('root')
		);
	}

	/*
	**The button from listItems holds id of the element from database, the
	**event is triggered and deletePerson is called with index as parameter
	*/
	function handleDelete(e) {
		deletePerson(e.target.value);
	}

	//We call the api to delete the info on database.
	function deletePerson(id) {
		axios.delete(process.env.REACT_APP_DB_URL + "/" + id)
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

	//listItems iterates on data, and renders every element.
	const listItems = arr
		.map(val => (
			<li key={val._id}>
				<span className="uk-accordion-title">
					<div>
						<h3
							className="big uk-card-title uk-margin-remove-bottom">
							{val.name}
						</h3>
						<p className="little uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
							{val.title}
						</p>
					</div>
				</span>
				<div className="uk-accordion-content uk-margin-remove">
					<div className="uk-card-body">
						<form className="uk-margin">
							<div className="uk-margin">
								<label className="little uk-form-label" htmlFor="tel">
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
								<label className="little uk-form-label" htmlFor="email">
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
							className="uk-button uk-button-primary"
							value={val._id}
							onClick={handleEdit}>
							<span uk-icon="pencil"></span>
						</button>
						<button
							className="uk-button uk-button-danger uk-margin-left"
							value={val._id}
							onClick={handleDelete}><span uk-icon="trash"></span>
						</button>
					</div>
				</div>
			</li>
		));
	return (
		<div>
			<div className="uk-container uk-width-1-2@s uk-margin-large-top">
				<ul className="uk-overflow-auto" style={h} data-uk-accordion>{listItems}</ul>
				<div className="uk-position-small uk-position-bottom-right uk-position-fixed uk-margin-small-bottom">
					<button
						className="little uk-button uk-button-primary uk-border-rounded"
						onClick={AddContact}>Add
						</button>
				</div>
			</div>
		</div>
	);
}
