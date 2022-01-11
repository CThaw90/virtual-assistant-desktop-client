import React from 'react';
import Welcome from './welcome/welcome';

class Application extends React.Component {

    constructor(props) {
        super(props);

        this.state = { showSurvey: false };
    }
    /*
    render() {
        return this.state.showSurvey ? <QuestionSurvey onClose={() => this.setState({ showSurvey: false })} /> : (
            <div>
                <h1>Virtual Assistant</h1>
                <p>The virtual desktop organizer</p>

                <button onClick={() => this.setState({ showSurvey: true })}>Start survey!</button>
            </div>
        );
    }
    */

    render() {
        return (
            <div className={'application'}>
                <div className={'draggable-handle'}> </div>
                <div className={'title-bar'}>
                    <i onClick={() => window.api.close()} className={'fas fa-times'}> </i>
                </div>
                <Welcome />
            </div>
        );
    }
}

export default Application;
