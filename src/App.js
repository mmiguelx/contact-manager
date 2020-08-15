import React from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import { PeopleList } from './components/PeopleList';

export function App() {
	UIkit.use(Icons)
	
	require('dotenv').config();
	return (
		<div>
			<PeopleList />
		</div>
	)
}
