import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListAddress/ListAddress.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
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

export default App;
