import React from 'react';
import SurveyItem from './answer';

import './survey.css';

const Survey = props => (
    <div className={'survey'}>
        <div><h1>{props.question}</h1></div>
        <ul className={'survey'}>
            {
                props.answers?.map(answer =>
                    <SurveyItem
                        onSelect={() => props.onSelect(answer) }
                        answer={answer}
                    />
                )
            }
        </ul>
    </div>
);


export default Survey;
