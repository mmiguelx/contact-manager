import React from 'react';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import {App} from '../App'

export function AddPersonForm(props) {
	const { register, handleSubmit, errors } = useForm();

	/*
	**onSubmit gets the data from ref in the form, if the telephone number is
	**unique the parent addPerson function is called with an object data with
	**the same structure.
	*/
	const onSubmit = (data, e) => {
		props.addPerson(data);
  }
  
	function BackToMenu() {
		ReactDOM.render(
			<App />,
		  document.getElementById('root')
		);
	}

	return (
		<div className="uk-container uk-width-1-2 uk-margin-top">
			<form className="" onSubmit={handleSubmit(onSubmit)}>
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
							defaultValue=""
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="text"
							placeholder="Title"
							name="title"
							ref={register({ required: false })}
							defaultValue=""
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="text"
							placeholder="Number"
							name="tel"
							ref={register({ required: true })}
							defaultValue=""
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							type="email"
							placeholder="Email"
							name="email"
							ref={register({ required: false })}
							defaultValue="" />
					</div>
					<div className="uk-flex uk-flex-center">
						<button
							className="uk-button uk-button-primary"
							type="submit">Add
						</button>
					</div>
				</fieldset>
			</form>
			<button onClick={BackToMenu}>back</button>
		</div>
	);

}
