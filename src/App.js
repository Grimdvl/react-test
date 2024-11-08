import React, { Component, useState, useRef } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import {Container} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import CustomForm from './Form';

// import './App.css';
import './app.scss';

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

// class Form extends Component {
// 	state = {
// 		advOpen: false
// 	}

// 	componentDidMount() {
// 		setTimeout(this.handleClick, 3000);
// 	}

// 	handleClick = () => {
// 		this.setState(({advOpen}) => ({
// 			advOpen: !advOpen
// 		}))
// 		// console.log('click');
// 	}

// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.myRef = React.createRef();
// 	// }
// 	// myRef = React.createRef();
// 	// mySecondRef = React.createRef();

// 	// componentDidMount() {
// 	// 	this.myRef.current.focus();
// 	// 	// this.myRef.current.doSmth();
// 	// }

// 	setInputRef = elem => {
// 		//если используеться колбек то current не используеться
// 		this.myRef = elem;
// 	}

// 	focusFirstTi = () => {
// 		if (this.myRef) {
// 			// this.myRef.current.focus();
// 			this.myRef.focus();
// 		}
// 	}

//     render() {
//         return (
//             <Container>
//                 <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
//                 style={{'overflow': 'hidden', 
//                         'position': 'relative'}}>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
// 						{/* <TextInput ref={this.myRef}/> */}
// 						<input 
// 							// ref={this.myRef}
// 							ref={this.setInputRef}
// 							type="email"
// 							className="form-control"
// 							id="exampleFormControlInput1"
// 							placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea onClick={this.focusFirstTi} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
// 					{
// 						this.state.advOpen ?
// 							<Portal>
// 								<Msg/>
// 							</Portal> : null
// 					}
//                 </form>
//             </Container>
//         )
//     }
// }

// const Portal = (props) => {
// 	const node = document.createElement('div');
// 	document.body.appendChild(node);

// 	return ReactDOM.createPortal(props.children, node);
// }

// const Msg = () => {
// 	return (
// 		<div
// 			style={{'width': '500px', 
// 				'height': '150px', 
// 				'backgroundColor': 'red', 
// 				'position': 'absolute', 
// 				'right': '0', 
// 				'bottom': '0'}}>
// 			Hello
// 		</div>
// 	)
// }

// class TextInput extends Component {
// 	doSmth = () => {
// 		console.log('Something');
// 	}

// 	render() {
// 		return (
// 			<input 
// 				type="email"
// 				className="form-control"
// 				id="exampleFormControlInput1"
// 				placeholder="name@example.com"/>
// 		);
// 	}
// }

// function App() {
//     return (
//         <Form/>
//     );
// }

// const Modal = (props) => {

// 	const duration = 300;
// 	const nodeRef = useRef(null);

// 	// const defaultStyle = {
// 	// 	transition: `all ${duration}ms ease-in-out`,
// 	// 	opacity: 0,
// 	// 	visibility: 'hidden'
// 	// }

// 	// const transitionStyles = {
// 	// 	entering: { opacity: 1, visibility: 'visible' },
// 	// 	entered: { opacity: 1, visibility: 'visible' },
// 	// 	exiting: { opacity: 0, visibility: 'hidden' },
// 	// 	exited: { opacity: 0, visibility: 'hidden' },
// 	// }

//     return (
// 		<CSSTransition
// 			in={props.show}
// 			timeout={duration}
// 			unmountOnExit
// 			unmountOnEnter
// 			onEnter={() => props.setShowTrigger(false)}
// 			onExited={() => props.setShowTrigger(true)}
// 			nodeRef={nodeRef}
// 			classNames="modal">
// 			{/* {state => ( */}
// 				<div className="modal mt-5 d-block"
// 					// style={{
// 					// ...defaultStyle,
// 					// ...transitionStyles[state]}}
// 					ref={nodeRef}>
// 					<div className="modal-dialog">
// 						<div className="modal-content">
// 							<div className="modal-header">
// 								<h5 className="modal-title">Typical modal window</h5>
// 								<button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
// 							</div>
// 							<div className="modal-body">
// 								<p>Modal body content</p>
// 							</div>
// 							<div className="modal-footer">
// 								<button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
// 								<button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			{/* )} */}
// 		</CSSTransition>
//     )
// }

// function App() {
//     const [showModal, setShowModal] = useState(false);
// 	const [showTrigger, setShowTrigger] = useState(true);

//     return (
//         <Container>
// 			<Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
//             {/* {showModal ? <Modal onClose={setShowModal}/> : null} */}
// 			{showTrigger ? 
// 				<button 
// 				type="button" 
// 				className="btn btn-warning mt-5"
// 				onClick={() => setShowModal(true)}>Open Modal</button> :
// 				null}
//         </Container>
//     );
// }

function App() {
	return (
		<div className='app'>
			<CustomForm/>
		</div>
	)
}

// export {Header};
export default App;
