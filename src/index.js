import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as themes from './config/schema.json';
import { setTols } from './utils/storage';

const Index = () => {
	setTols('all-themes', themes.default);
	return <App />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
