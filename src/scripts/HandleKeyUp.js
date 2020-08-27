// We  use this function for the filtering of the list
function handleKeyUp (e) {
	let txt = e.target.value.toLowerCase()
	let li = document.getElementsByTagName("li")
	for(let i = 0; i < li.length; i++){
		let name = li[i].getElementsByTagName("h3")[0].innerText
		if (name.toLocaleLowerCase().indexOf(txt) > -1){
			li[i].style.display=''
		} else {
			li[i].style.display='none'
		}
	}
};

export default handleKeyUp;
