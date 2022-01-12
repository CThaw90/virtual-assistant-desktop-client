import React from 'react';
import Survey from './survey/survey';
import Welcome from './welcome/welcome';

import surveyQuestions from './data/survey-questions.json';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            surveyIndex: 0,
            answers: []
        };
    }

    recordAnswer(answer) {
        let { answers, surveyIndex } = this.state;
        surveyIndex += 1;
        answers.push(answer);
        this.setState({ answers, surveyIndex });
    }

    render() {
        const surveyItem = surveyQuestions[this.state.surveyIndex];
        return (
            <div className={'application'}>
                <div className={'draggable-handle'}> </div>
                <div className={'title-bar'}>
                    <i onClick={() => window.api.close()} className={'fas fa-times'}> </i>
                </div>
                {
                    surveyItem ?
                        <Survey
                            question={surveyItem.question}
                            answers={surveyItem.answers}
                            onSelect={answer => this.recordAnswer(answer)}
                        /> :
                        <Welcome answers={this.state.answers} />
                }
            </div>
        );
    }
}

export default App;
