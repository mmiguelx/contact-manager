import React from 'react';
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'
import { PeopleList } from './components/PeopleList';
import './index.css'

export function App() {
	UIkit.use(Icons)

	require('dotenv').config();
	return (
		<PeopleList />
	)
}
