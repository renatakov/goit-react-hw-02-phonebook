import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form.js";
import ContactList from "./components/ContactList.js";
import Filter from "./components/Filter.js";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    filter: "",
  };
  addContact = (contact) => {
    const contactsExists = this.state.contacts.find(
      (contactItem) => contactItem.name === contact.name,
    );
    if (contactsExists) {
      // Тут алерт
      alert(`${contact.name} is already in contacts`);
    } else {
      // тут this.setState
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
    }
  };

  // handleFilter = this.state.contacts.filter(contact => return this.state.contact.value)

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  componentDidMount() {
    const getContact = JSON.parse(localStorage.getItem("contacts"));
    if (getContact) {
      this.setState({
        contacts: getContact,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.includes(this.state.filter),
    );
    return (
      <>
        <h1>PhoneBook</h1>
        <Form addContact={this.addContact} />
        <ContactList
          contacts={filteredContacts}
          onChange={this.deleteContact}
        />
        <Filter
          filteredContacts={this.handleFilterChange}
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
      </>
    );
  }
}

export default App;
