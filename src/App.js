import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList.js';

let contacts = [
    {
        id: 1,
        name: 'Anne',
        phone: '555 555 5555'
    },
    {
        id: 2,
        name: 'Mary',
        phone: '995 555 455555'
    },
    {
        id: 3,		
        name: 'Nicky',
        phone: '333 333 511555'
    },
    {
        id: 4,
        name: 'Stacy',
        phone: '458 201 5555'
    }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

render(<App contacts={contacts} />, document.getElementById('app'));