import React from 'react';
import ReactDOM from 'react-dom';
import AddPersonForm from '../components/AddPersonForm'

//Render AddPersonForm with empty prop to avoid errors with defaultValue
function AddContact() {
	ReactDOM.render(
		<AddPersonForm contact="" />,
		document.getElementById('root')
	);
}

export default AddContact;
