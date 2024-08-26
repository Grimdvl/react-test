import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${prop => prop.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

// const Header = () => {
// 	return <h2>Hello World!</h2>;
// };

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
		return text;
	}
	// const p = <p>log in</p>;
	const logged = false;
	return (
		<button>{logged ? 'Enter' : res()}</button>
	);
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
			position: '',
		}
		// второй способ привязать контекст зис вместо стрелочніх функций this.nextYear = this.nextYear.bind(this);
		// третий способ пригождаеться когда мі хоти передать какой нибудь аргумент в обработчик события onClick={() => this.nextYear()} немного теряет в оптимизации если мі переиспользуем в новом компоненте так как перерисовіваеться колбек заново
	}
	nextYear = () => {
		console.log('+++');
		this.setState(state => ({
			years: state.years + 1
		}));
	}
	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value,
		});
	}
	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;
		return (
			<EmpItem active={true}>
				<Button onClick={this.nextYear}>{this.state.text}</Button>
				<Header>My name is {name},
					surname - {surname.firstSurname}, 
					age - {years}, 
					position - {position}</Header>
				<a href={link()}>My profile</a>
				<form>
					<span>Enter your position</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
				</form>
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{/* {props.children} */}
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
				})
			}
		</div>
	)
}

const HelloGreating = () => {
	return (
		<div style={{'width': '600px', 'margin': '0 auto'}}>
			<DynamicGreating color={'primary'}>
				<h2>Hello world!</h2>
			</DynamicGreating>
		</div>
	)
}

function App() {
	return (
		<Wrapper>
			<div className="App">
				<HelloGreating/>
				<BootstrapTest
					left = {
						<DynamicGreating color={'primary'}>
							<h2>This weel was hard</h2>
							<h2>Hello world!</h2>
						</DynamicGreating>
					}
					right = {
						<DynamicGreating color={'primary'}>
							<h2>RIGHT!</h2>
						</DynamicGreating>
					}
				/>
				{/* <Header/> */}
				<WhoAmI name="Jhon" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={1}/>
				<WhoAmI name='Ivan' surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={2}/>
				<WhoAmI name="Alex" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={3}/>
				<Field/>
				<Btn/>
			</div>
		</Wrapper>
	);
}

export {Header};
export default App;
