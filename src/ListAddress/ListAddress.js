import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListAddress(props) {
    let addresses = [...props.addresses];
    let listItems = addresses.map((item) =>
        <ListGroup.Item key={item.key}>
            
        </ListGroup.Item>)
}