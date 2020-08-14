import React from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'
import { PeopleList } from './components/PeopleList';

export function App() {

	require('dotenv').config();
	return (
		<div>
			<PeopleList />
		</div>
	)
}
