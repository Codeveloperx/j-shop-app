import React from 'react';
import Card from 'react-bootstrap/Card';

const Contact = ({imagen}) => {
  return (
        <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={imagen} alt=""/>
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Contact