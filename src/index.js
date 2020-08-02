import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Storage} from './components/StorageTest';

const contacts = [];

ReactDOM.render(
  <div className="b-none shadow rounded-lg card w-auto  p-3 m-4">
    <App data={contacts} />
    <Storage />
  </div>,
  document.getElementById('root')
);
