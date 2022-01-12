import React from 'react';

const Answer = props => (
    <li className={'survey-item'}>
        <span><i className={'far fa-circle'} onClick={() => props.onSelect()}> </i></span>
        {props.answer}
    </li>
);

export default Answer;
