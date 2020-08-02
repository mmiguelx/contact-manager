import React from 'react';

const useLocalStorageState = localStorageKey => {
	const [value, setValue] = React.useState(
		localStorage.getItem(localStorageKey) || ''
	);

	React.useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value]);

	return [value, setValue];
};

const Storage = () => {
	const [value, setValue] = useLocalStorageState('myValue');

	const onChange = event => setValue(event.target.value);

	return (
		<div>
			<h1>Salva tus cositas</h1>
			<input value={value} type="text" onChange={onChange} />
			<p>{value}</p>
		</div>
	);
};

export default Storage;
