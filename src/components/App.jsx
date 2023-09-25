import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, contacts } = this.state;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter contact name"
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button type="submit" onClick={this.handleSubmit}>
          Add contact
        </button>
        <label>
          {' '}
          Find contacts by name
          <input
            type="text"
            placeholder="Search contacts..."
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </label>

        <h2>Сontacts</h2>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id} className="contact-item">
              <span className="contact-info">
                {contact.name}: {contact.number}
              </span>
              <button onClick={() => this.handleDelete(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
