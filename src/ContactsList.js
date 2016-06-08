import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';


class ContactsList extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			search:"",
			contacts:props.contacts
		};
	}
		updateSearch(event){
			this.setState({search:event.target.value.substr(0,20)});
		}

		addContact(event){
			event.preventDefault();
			let name= this.refs.name.value;
			let phone =this.refs.phone.value;
			let id = Math.floor((Math.random()*100)+1)
			this.setState({
				contacts: this.state.contacts.concat({id,name,phone})
			})
			this.refs.name.value="";
			this.refs.phone.value="";

		}
	
    render(){
    	let filteredContacts = this.state.contacts.filter(
    		(contact) => {
    			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    		}
    		);
        return(
        	<div>
	            <input type="text" value={this.state.search} placeholder="Search for..."
	            onChange={this.updateSearch.bind(this)}/>
	            <ul>
	            	{filteredContacts.map((contact)=>{
	            		return <Contact contact={contact} item="Hello" key={contact.id}/>
	            	})}
	            </ul>
	            <form onSubmit={this.addContact.bind(this)}>
	            	<h2>Add New Contact Below</h2>
	            	<input type="text" ref="name" placeholder="Type Name"/>
	                <input type="text" ref="phone" placeholder="Type Phonenumber"/>
	                <button type='Submit'>Add New Contact</button>
	            </form>

            </div>
        )
    }
}
export default ContactsList;

