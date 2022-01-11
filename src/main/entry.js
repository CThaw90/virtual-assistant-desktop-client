import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

import './styles';

const appContainer = document.createElement('div');
appContainer.id = 'application';
appContainer.className = 'application root';
document.body.appendChild(appContainer);

ReactDOM.render(<Application />, appContainer);
