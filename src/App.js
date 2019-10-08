import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListAddress from './ListAddress/ListAddress.js';
import {generate} from 'randomstring';
import {Input} from 'mdbreact';

class App extends Component {
  state = {
    filter: "",

    "addresses": [
      { "key": generate(10),
        "firstname": 'Cathy',
        "lastname" : 'Pierce',
        "birthday": '9/14/1996',
        "telephone": '200-910-8132'},
      { "key": generate(10),
      "firstname": 'Alfonso',
      "lastname" : 'Cooley',
      "birthday": '8/10/1973',
      "telephone": '200-657-9362'},
      { "key": generate(10),
        "firstname": 'Victor',
        "lastname" : 'Gordon',
        "birthday": '8/3/1970',
        "telephone": '200-661-9407'},
      { "key": generate(10),
      "firstname": 'Colleen',
      "lastname" : 'Wright',
      "birthday": '10/28/1967',
      "telephone": '200-250-7949'},
      { "key": generate(10),
        "firstname": 'James',
        "lastname" : 'Johnston',
        "birthday": '5/11/1972',
        "telephone": '200-645-3176'},
      { "key": generate(10),
      "firstname": 'Anna',
      "lastname" : 'Reyes',
      "birthday": '9/10/1975',
      "telephone": '200-707-8670'}
    ],
    "collapse": false,
    "formFirstname": '',
    "formLastname": '',
    "formBirthday": '',
    "formTelephone": ''
  }

  addAddressHandler = (event) => {
    event.preventDefault();
    let newAddress = {
      key: generate(10),
      firstname: this.state.formFirstname,
      lastname: this.state.formLastname,
      birthday: this.state.formBirthday,
      telephone: this.state.formTelephone
    };
    this.setState({addresses:[...this.state.addresses,newAddress]});
    this.setState({formFistname:''});
    this.setState({formLastname:''});
    this.setState({formBirthday:''});
    this.setState({formTelephone:''})
  }

  closeAddressHandler = (key,e) => {
    let addresses = [...this.state.addresses];
    let deleteIndex = addresses.findIndex((item)=>item.key===key);
    addresses.splice(deleteIndex, 1);
    this.setState({"addresses": addresses});
  }

  handleChange = e => {
    this.setState({filter : e.target.value });
  };

  render = () => {
    const { filter, addresses } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredAddresses = addresses.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based Address Book</h1>
            <div>
              <input value={filter} onChange={this.handleChange} placeholder="Search..." />
            </div>
          </header>
          <ListAddress 
            addresses={filteredAddresses}
            closer={this.closeAddressHandler}>
          </ListAddress>
          <h2 className='text-left'>Add An Address</h2>
          <Form className="text-left" onSubmit={this.addAddressHandler}>
            <Form.Group controlId="formAddress">
              <Form.Label>Firstname</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Firstname" 
                value={this.state.formFirstname}
                onChange={(e) => this.setState({formFirstname: e.target.value})}/>
              <Form.Label>Lastname</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Lastname" 
                value={this.state.formLastname}
                onChange={(e) => this.setState({formLastname: e.target.value})}/>
              <Form.Label>Birthday</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Birthday" 
                value={this.state.formBirthday}
                onChange={(e) => this.setState({formBirthday: e.target.value})}/>
              <Form.Label>Telephone</Form.Label>
              <Form.Control as="textarea" 
                rows="3" 
                placeholder="Enter Telephone" 
                value={this.state.formTelephone}
                onChange={(e) => this.setState({formTelephone:e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add Address
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
