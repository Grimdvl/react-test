import React, { Component } from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World!</h2>;
};

// const Field = () => {
// 	const holder = 'enter here';
// 	const styleField = {
// 		width: '300px'
// 	};
// 	return <input placeholder={holder} type="text" style={styleField}/>;
// }

class Field extends Component {
	render() {
		const holder = 'enter here';
		const styleField = {
			width: '300px'
		};
		return <input
				placeholder={holder}
				type="text"
				style={styleField}/>;
	}
}

function Btn() {
	const text = 'log in';
	const res = () => {
		return 'log in';
	}
	const p = <p>log in</p>;
	const logged = false;
	return <button>{logged ? 'Enter' : res()}</button>;
}

// function WhoAmI ({name, surname, link}) {
// 	return (
// 		<div>
// 			<h1>My name is {name}, surname - {surname.firstSurname}</h1>
// 			<a href={link()}>My profile</a>
// 		</div>
// 	)
// }

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
		}
	}
	nextYear = () => {
		console.log('+++');
		this.setState(state => ({
			years: state.years + 1
		}));
	}
	render() {
		const { name, surname, link } = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname.firstSurname}, age - {this.state.years}</h1>
				<a href={link()}>My profile</a>
			</div>
		)
	}
}

function App() {
	return (
		<div className="App">
			<Header/>
			<WhoAmI name="Jhon" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}}/>
			<WhoAmI name='Ivan' surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}}/>
			<WhoAmI name="Alex" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}}/>
			<Field/>
			<Btn/>
		</div>
	);
}

export {Header};
export default App;
