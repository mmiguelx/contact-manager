import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import BackToMenu from '../scripts/BackToMenu'
import AddPerson from '../scripts/AddPerson'
import EditPerson from '../scripts/EditPerson'

export default function AddPersonForm(props) {
	const { register, handleSubmit } = useForm();
	const [contact, setContact] = useState({ _id: 0, name: "", tel: "", title: "", email: "" })
	// const [error, setError] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);

	/*
	**onSubmit gets the data from ref in the form, AddPerson function  is called
	**if there's no data, if there's a contact already created then we called
	**the EditPerson function.
	*/
	const onSubmit = (person, e) => {
		if (props.contact === "") {
			AddPerson(person);
		}
		else {
			EditPerson(person, props.contact._id);
		}
		e.target.reset();
		BackToMenu();
	}

	/*
	**On render props is checked and set contacts for correct
	**using of edit function.
	*/
	useEffect(() => {
		if (props.contact !== null) {
			setContact(props.contact)
		}
		else {
			setContact({ _id: 0, name: "", tel: "", title: "", email: "" })
		}
	}, [props.contact]);

	return (
		<div className="uk-container uk-width-1-2@m uk-margin-top">
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="uk-fieldset">
					<legend className="big uk-legend">
						Register
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
							className="little uk-button uk-button-primary"
							type="submit">
							Save
						</button>
						<button
							className="little uk-button uk-button-danger uk-margin-left"
							type="button"
							onClick={BackToMenu}>
							Back
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
