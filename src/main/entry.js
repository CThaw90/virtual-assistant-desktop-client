import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './styles';

const appContainer = document.createElement('div');
appContainer.id = 'application';
appContainer.className = 'application root';
document.body.appendChild(appContainer);

ReactDOM.render(<App />, appContainer);
