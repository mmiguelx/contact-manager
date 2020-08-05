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
		<div className="w-auto m-2 align-center flex">
			<form
				className="w-full border card rounded-xl shadow align-center select p-2 m-1"
				onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Name"
					className="w-full input border rounded-xl text-l p-1 m"
					name="name"
					ref={register({required: true})}
					defaultValue=""
				/>
				<input
					type="text"
					placeholder="Phone Number"
					className="w-full input border rounded-xl text-l p-1 m"
					name="tel"
					ref={register({required: true})}
					defaultValue=""
				/>
				<button
					className="btn hover-up rounded-xl shadow justify-end m"
					type="submit">Add
				</button>
				<div className="w-full">
					<p className="text-l color-danger">{errors.name && "Name required"}</p>
					<p className="text-l color-danger">{errors.tel && "Phone required"}</p>
				</div>
			</form>
		</div>
	);

}
