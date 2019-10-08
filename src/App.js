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
    ],
    "collapse": false,
    "formFirstname": '',
    "formLastname": '',
    "formBirthday": '',
    "formTelephone": ''
  }

export default App;
