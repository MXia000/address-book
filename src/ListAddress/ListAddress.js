import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListAddress(props) {
    let addresses = [...props.addresses];
    let listItems = addresses.map((item) =>
        <ListGroup.Item key={item.key}>
            <Card className="bg-light border rounded">
                <span key={item.key}
                    className="text-right"
                    onClick={props.closer.bind(null,item.key)}>{'\u274e'}</span>
                    <Card.Body className="text-left">
                        <h3 >{item.firstname} {item.lastname}</h3>
                        <p>{item.birthday}</p>
                        <p>{item.telephone}</p>
                    </Card.Body>
            </Card>
        </ListGroup.Item>)
    return listItems;
}

export default ListAddress;