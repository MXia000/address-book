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
    ],
    "collapse": false,
    "formFirstname": '',
    "formLastname": '',
    "formBirthday": '',
    "formTelephone": ''
  }

export default App;
