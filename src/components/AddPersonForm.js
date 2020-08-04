import React from 'react';
import '../makeup/makeup.scss';
import {useForm} from "react-hook-form";

export function AddPersonForm(props) {
	const { register, handleSubmit } = useForm();

	/*
	**onSubmit gets the data from ref in the form, if there's no blank box on
	**submit parent addPerson function is called with an object data with the
	**same structure.
	*/
	const OnSubmit = (data, e) => {
		if (data.name !== "" && data.tel !== "" && props.data.findIndex(obj => obj.tel === data.tel) === -1) {
			props.addPerson(data);
		}
		e.target.reset();
	}

	return (
		<div className="flex w-full m-1 border rounded-xl">
			<form
				className="w-full card-body rounded-xl shadow flex justify-between"
				onSubmit={handleSubmit(OnSubmit)}>
				<input
					type="text"
					placeholder="Add new contact"
					className="w-full input hover-up border rounded-xl text-l align-center w-auto m p-1"
					name="name"
					ref={register}
					defaultValue=""
				/>
				<input
					type="text"
					placeholder="Phone Number"
					className="w-full input hover-up border rounded-xl text-l align-center w-auto m p-1"
					name="tel"
					ref={register}
					defaultValue=""
				/>
				<button
					className="btn hover-up rounded-xl shadow justify-end"
					type="submit">Add
				</button>
			</form>
		</div>
	);
}
