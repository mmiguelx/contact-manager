import React from 'react';

const UseLocalStorageState = localStorageKey => {
	const [value, setValue] = React.useState(
		localStorage.getItem(localStorageKey) || ''
	);

	React.useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value]);

	return [value, setValue];
};

export const Storage = () => {
	const [value, setValue] = UseLocalStorageState('myValue');

	const onChange = event => setValue(event.target.value);

	return (
		<div>
			<h1>Salva tus cositas</h1>
			<input value={value} type="text" onChange={onChange} />
			<p>{value}</p>
		</div>
	);
};
