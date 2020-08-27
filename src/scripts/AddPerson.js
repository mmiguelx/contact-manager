import axios from 'axios';

//The api is called to add info on database.
function AddPerson(person) {
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

export default AddPerson;
