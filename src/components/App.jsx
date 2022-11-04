import { Component } from 'react';

import { Form } from './Form/Form';
import { ContactsList } from './contactsBook/Contacts';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [{ ...data, id: shortid.generate() }, ...prevState.contacts],
    }));
    console.log('contacts', this.state.contacts);
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form onSubmit={this.formSubmitHandler} />
        <ContactsList
          deleteContact={this.handleDeleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
