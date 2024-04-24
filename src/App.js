import {Component} from 'react';
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

function App() {
	return (
		<div className="App">
			<Header/>
			<Field/>
			<Btn/>
		</div>
	);
}

export {Header};
export default App;
