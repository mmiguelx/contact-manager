import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import { App } from '../App';
import axios from 'axios';

export function AddPersonForm(props) {
	const { register, handleSubmit } = useForm();
	const [contact, setContact] = useState({ _id: 0, name: "", tel: "", title: "", email: "" })
	// const [error, setError] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);

	/*
	**onSubmit gets the data from ref in the form, addPerson function is called
	**with an object data with the same structure.
	*/
	const onSubmit = (person, e) => {
		if (props.contact._id === 0) {
			addPerson(person);
		}
		else {
			axios.put(process.env.REACT_APP_DB_URL + "/" + props.contact._id, {
				name: person.name,
				tel: person.tel,
				title: person.title,
				email: person.email
			}).then((res) => {
				console.log(res);
			}).catch((err) => {
				console.log(err);
			})
		}
		e.target.reset();
		BackToMenu();
	}

	//The api is called to add info on database.
	function addPerson(person) {
		axios.post(process.env.REACT_APP_DB_URL, {
			name: person.name,
			tel: person.tel,
			title: person.title,
			email: person.email
		}).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})
	}

	//Render the menu when the button event is called.
	function BackToMenu() {
		console.log(props.contact)
		ReactDOM.render(
			<App />,
			document.getElementById('root')
		);
	}

	useEffect(() => {
		console.log(contact);
		if (props.contact !== null) {
			setContact(props.contact)
		}
		else {
			setContact({ _id: 0, name: "", tel: "", title: "", email: "" })
		}
	}, [contact]);

	return (
		<div className="uk-container uk-width-1-2 uk-margin-top">
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="uk-fieldset">
					<legend className="uk-legend">
						Registro
					</legend>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="text"
							placeholder="Name"
							name="name"
							ref={register({ required: true })}
							defaultValue={contact.name}
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="text"
							placeholder="Title"
							name="title"
							ref={register({ required: false })}
							defaultValue={contact.title}
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="text"
							placeholder="Number"
							name="tel"
							ref={register({ required: true })}
							defaultValue={contact.tel}
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="email"
							placeholder="Email"
							name="email"
							ref={register({ required: false })}
							defaultValue={contact.email} />
					</div>
					<div className="uk-flex uk-flex-center">
						<button
							className="uk-button uk-button-primary"
							type="submit">
							Guardar
						</button>
						<button
							className="uk-button uk-button-danger uk-margin-left"
							type="button"
							onClick={BackToMenu}>
							Regresar
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
