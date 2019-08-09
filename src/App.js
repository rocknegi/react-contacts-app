import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount(){
    ContactsAPI.getAll()
    .then(contacts=>{
      this.setState({contacts})
    })
  }
  onDelete = (contact) => {
    this.setState((currentState)=>({
      contacts:currentState.contacts.filter(e=>e.id!==contact.id)
    }))
    ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div>
        <ListContacts onDelete={this.onDelete} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
