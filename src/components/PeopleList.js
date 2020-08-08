import React from 'react';

export function PeopleList(props) {
	//Contacts is passed by props then is copied and sorted by name
	const arr = [...props.data]
		.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);

	/*
	**The button from listItems holds the phone number value of the element, the
	**event is triggered and deletePerson from parent component is called with
	**index as parameter.
	*/
	function handleClick(e) {
		props.deletePerson(e.target.value);
	}

	/*
	**listItems iterates on data, sets the key of li tag and button value with
	**the phone number of the element and renders every element.
	*/
	const listItems = arr
		.map(val => (
			<li key={val._id}>
				<div className="uk-card uk-card-default uk-margin-top uk-margin-left uk-margin-right uk-margin-bottom" >
					<div className="uk-card-header">
						<div className="">
							<h3 className="uk-card-title uk-margin-remove-bottom">{val.name}</h3>
							<p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">{val.title}</p>
							<p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">{val._id}</p>
						</div>
					</div>
					<div className="uk-card-body">
						<form className="uk-margin">
							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="tel">
									Number:
							</label>
								<div className="uk-form-controls">
									<input className="uk-input" id="tel" type="text" placeholder={val.tel} disabled />
								</div>
							</div>
							<div className="">
								<label className="uk-form-label" htmlFor="email">
									Email:
							</label>
								<div className="uk-form-controls">
									<input className="uk-input" id="email" type="text" placeholder={val.email} disabled />
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
			<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
		</div>
	);
}
