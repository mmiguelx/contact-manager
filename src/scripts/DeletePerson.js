import axios from 'axios';

//We call the api to delete the info on database.
function DeletePerson(id) {
	axios.delete(process.env.REACT_APP_DB_URL + "/" + id)
		.then((res) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
}

export default DeletePerson;
