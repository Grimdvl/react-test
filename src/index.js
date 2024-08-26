import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from './App';
import { Button } from './App';
// import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

// const BigButton = styled(Button)`
// 	margin: 0 auto;
// 	width: 245px;
// 	text-align: center;
// `;

// const elem = <h2>Hello World!</h2>;
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');
// const element = {
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Hello World!'
//   }
// };
const text = 'Hello World!';

const elem = (
	<div>
		<h2>{text}</h2>
		<input type="text" />
		<button></button>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
		// elem,
		// <Header/>,
	<StrictMode>
		<App/>
		{/* <BigButton as="a">Send</BigButton> */}
		{/* <BootstrapTest/> */}
	</StrictMode>
);
