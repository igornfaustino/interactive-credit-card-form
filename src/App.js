import React from 'react';
import './App.scss';
import { FormContainer } from './components/FormContainer';

function App() {
	const submit = values => {
		// eslint-disable-next-line no-alert
		alert(JSON.stringify(values));
	};

	return (
		<div className="App">
			<FormContainer submit={submit} />
		</div>
	);
}

export default App;
