import React from 'react';

import './welcome.css';

const LIST_ITEMS_TEXT = [
    'I have trouble keeping track of email and documents',
    'I don\'t know how organize my emails and documents',
    'I have a particular method to organization and storage but I don\'t do it as often as I would like',
    'Organization isn\'t something I really care for, but I\'m here to check it out'
];

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    createListItem(listItem, selectionIndex) {
        const isSelected = this.state.selectionIndex === selectionIndex;
        return (
            <li className={'survey-item'}>
                <span>
                    <i
                        onClick={() => this.setState({ selectionIndex })}
                        className={isSelected ? 'fas fa-circle' : 'far fa-circle'}
                    > </i>
                </span>
                {listItem}
            </li>
        );
    }

    render() {
        return (
            <div className={'welcome'}>
                <div><h1>Welcome :-) Thank you for choosing the virtual assistant, what can I assist you with?</h1></div>
                <ul className={'survey'}>
                    {
                        LIST_ITEMS_TEXT.map((listItem, selectionIndex) => {
                            return this.createListItem(listItem, selectionIndex);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Welcome;
