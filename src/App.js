import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import {Container} from 'react-bootstrap';

import './App.css';

// const EmpItem = styled.div`
// 	padding: 20px;
// 	margin-bottom: 15px;
// 	border-radius: 5px;
// 	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
// 	a {
// 		display: block;
// 		margin: 10px 0 10px 0;
// 		color: ${prop => prop.active ? 'orange' : 'black'};
// 	}
// 	input {
// 		display: block;
// 		margin-top: 10px;
// 	}
// `;

// const Header = styled.h2`
// 	font-size: 22px;
// `;

// export const Button = styled.button`
// 	display: block;
// 	padding: 5px 15px;
// 	background-color: gold;
// 	border: 1px solid rgba(0,0,0, .2);
// 	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
// `;

// // const Header = () => {
// // 	return <h2>Hello World!</h2>;
// // };

// // const Field = () => {
// // 	const holder = 'enter here';
// // 	const styleField = {
// // 		width: '300px'
// // 	};
// // 	return <input placeholder={holder} type="text" style={styleField}/>;
// // }

// class Field extends Component {
// 	render() {
// 		const holder = 'enter here';
// 		const styleField = {
// 			width: '300px'
// 		};
// 		return <input
// 				placeholder={holder}
// 				type="text"
// 				style={styleField}/>;
// 	}
// }

// function Btn() {
// 	const text = 'log in';
// 	const res = () => {
// 		return text;
// 	}
// 	// const p = <p>log in</p>;
// 	const logged = false;
// 	return (
// 		<button>{logged ? 'Enter' : res()}</button>
// 	);
// }

// // function WhoAmI ({name, surname, link}) {
// // 	return (
// // 		<div>
// // 			<h1>My name is {name}, surname - {surname.firstSurname}</h1>
// // 			<a href={link()}>My profile</a>
// // 		</div>
// // 	)
// // }

// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 27,
// 			text: '+++',
// 			position: '',
// 		}
// 		// второй способ привязать контекст зис вместо стрелочніх функций this.nextYear = this.nextYear.bind(this);
// 		// третий способ пригождаеться когда мі хоти передать какой нибудь аргумент в обработчик события onClick={() => this.nextYear()} немного теряет в оптимизации если мі переиспользуем в новом компоненте так как перерисовіваеться колбек заново
// 	}
// 	nextYear = () => {
// 		console.log('+++');
// 		this.setState(state => ({
// 			years: state.years + 1
// 		}));
// 	}
// 	commitInputChanges = (e, color) => {
// 		console.log(color);
// 		this.setState({
// 			position: e.target.value,
// 		});
// 	}
// 	render() {
// 		const { name, surname, link } = this.props;
// 		const { position, years } = this.state;
// 		return (
// 			<EmpItem active={true}>
// 				<Button onClick={this.nextYear}>{this.state.text}</Button>
// 				<Header>My name is {name},
// 					surname - {surname.firstSurname}, 
// 					age - {years}, 
// 					position - {position}</Header>
// 				<a href={link()}>My profile</a>
// 				<form>
// 					<span>Enter your position</span>
// 					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
// 				</form>
// 			</EmpItem>
// 		)
// 	}
// }

// const Wrapper = styled.div`
// 	width: 600px;
// 	margin: 80px auto 0 auto;
// `;

// const DynamicGreating = (props) => {
// 	return (
// 		<div className={'mb-3 p-3 border border-' + props.color}>
// 			{/* {props.children} */}
// 			{
// 				React.Children.map(props.children, child => {
// 					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
// 				})
// 			}
// 		</div>
// 	)
// }

// const HelloGreating = () => {
// 	return (
// 		<div style={{'width': '600px', 'margin': '0 auto'}}>
// 			<DynamicGreating color={'primary'}>
// 				<h2>Hello world!</h2>
// 			</DynamicGreating>
// 		</div>
// 	)
// }

// const Message = (props) => {
// 	return (
// 		<h2>The counter is {props.counter}</h2>
// 	)
// }

// class Counter extends Component {
// 	state = {
// 		counter: 0
// 	}

// 	changeCounter = () => {
// 		this.setState(({counter}) => ({
// 			counter: counter + 1
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				<button
// 					className={'btn btn-primary'}
// 					onClick={this.changeCounter}>
// 					Click me
// 				</button>
// 				{/* жесткая привязка компонента к счетчику <Message counter={this.state.counter}/> */}
// 				{this.props.render(this.state.counter)}
// 			</>
// 		)
// 	}
// }

// function App() {
// 	return (
// 		<Wrapper>
// 			<div className="App">
// 				<Counter render={counter => (
// 					<Message counter={counter}/>
// 				)}/>
// 				<HelloGreating/>
// 				<BootstrapTest
// 					left = {
// 						<DynamicGreating color={'primary'}>
// 							<h2>This weel was hard</h2>
// 							<h2>Hello world!</h2>
// 						</DynamicGreating>
// 					}
// 					right = {
// 						<DynamicGreating color={'primary'}>
// 							<h2>RIGHT!</h2>
// 						</DynamicGreating>
// 					}
// 				/>
// 				{/* <Header/> */}
// 				<WhoAmI name="Jhon" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={1}/>
// 				<WhoAmI name='Ivan' surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={2}/>
// 				<WhoAmI name="Alex" surname={{firstSurname: 'Smith'}} link={() => {return "facebook.com"}} key={3}/>
// 				<Field/>
// 				<Btn/>
// 			</div>
// 		</Wrapper>
// 	);
// }

class Form extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.myRef = React.createRef();
	// }
	// myRef = React.createRef();
	// mySecondRef = React.createRef();

	// componentDidMount() {
	// 	this.myRef.current.focus();
	// 	// this.myRef.current.doSmth();
	// }

	setInputRef = elem => {
		//если используеться колбек то current не используеться
		this.myRef = elem;
	}

	focusFirstTi = () => {
		if (this.myRef) {
			// this.myRef.current.focus();
			this.myRef.focus();
		}
	}

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
						{/* <TextInput ref={this.myRef}/> */}
						<input 
							// ref={this.myRef}
							ref={this.setInputRef}
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTi} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div 
                    style={{'width': '500px', 
                            'height': '150px', 
                            'backgroundColor': 'red', 
                            'position': 'absolute', 
                            'right': '-50%', 
                            'bottom': '-50%'}}>
                        Hello
                    </div>
                </form>
            </Container>
        )
    }
}

class TextInput extends Component {
	doSmth = () => {
		console.log('Something');
	}

	render() {
		return (
			<input 
				type="email"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="name@example.com"/>
		);
	}
}

function App() {
    return (
        <Form/>
    );
}

// export {Header};
export default App;
