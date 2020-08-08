import React from 'react';
import '../makeup/makeup.scss';
import {useForm} from "react-hook-form";

export function AddPersonForm(props) {
	const { register, handleSubmit, errors } = useForm();

	/*
	**onSubmit gets the data from ref in the form, if the telephone number is
	**unique the parent addPerson function is called with an object data with
	**the same structure.
	*/
	const onSubmit = (data, e) => {
		if (props.data.findIndex(obj => obj.tel === data.tel) === -1) {
			props.addPerson(data);
		}
		e.target.reset();
	}

	return (
		<div className="bg-primary card rounded-xl shadow m-2">
			<form
				className="full-w"
				onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Name"
					className="full-w m rounded-xl shadow card-body"
					name="name"
					ref={register({required: true})}
					defaultValue=""
				/>
				<input
					type="tel"
					placeholder="Phone Number"
					className="full-w m rounded-xl shadow card-body"
					name="tel"
					ref={register({required: true})}
					defaultValue=""
				/>
				<button
					className="btn hover-up rounded-xl shadow m"
					type="submit">Add
				</button>
				<div>
					<p className="form-error">{errors.name && "Name required"}</p>
					<p className="form-error">{errors.tel && "Phone required"}</p>
				</div>
			</form>
		</div>
	);

}
