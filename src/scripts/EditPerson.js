import axios from 'axios';

//The api is called to modify info on database.
function EditPerson(person, id) {
	axios.put(process.env.REACT_APP_DB_URL + "/" + id, {
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

export default EditPerson;
