import React from 'react';

import './welcome.css';

const Welcome = props => (
    <div className={'welcome'}>
        <div><h1>Thank you!! :-) We are working on getting everything setup. Take a look at your answers</h1></div>
        <ul className={'survey'}>
            {
                props.answers.map((listItem, key) =>
                    <li className={'survey-item'} key={window.String(key)}>
                        {listItem}
                    </li>
                )
            }
        </ul>
    </div>
);

export default Welcome;
