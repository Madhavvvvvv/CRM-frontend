// PersonCards.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';

const PersonCards = () => {
  const peopleData = [
    {
      name: 'Madhav E',
      email: 'remnukamadhav@gmail.com',
      phone: '9059378158',
      image: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png', // Replace with actual image URL
    },
      {
        name: ' Annam Geethanjali',
        email: 'annamgeethanjali2004@gmail.com ',
        phone: '7013995354',
        image: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png', // Replace with actual image URL
      },
      {
        name: ' Pittam Harika',
        email: 'pittamharika04@gmail.com',
        phone: '8179966596',
        image: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png', // Replace with actual image URL
      },
      {
        name: 'Mukkamalla Tarunika',
        email: 'tarunikamukkamalla@gmail.com',
        phone: '8247779190',
        image: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png', // Replace with actual image URL
      },
      {
        name: 'V.P.Praneeth Reddy',
        email: 'vppraneethreddy2003@gmail.com',
        phone: '7416885033',
        image: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png', // Replace with actual image URL
      },
    // Add more people data as needed
  ];

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {peopleData.map((person, index) => (
        <Card key={index} style={{ width: '14rem', margin: '10px'  }}>
          <Card.Img variant="top" src={person.image} />
          <Card.Body>
            <Card.Title>{person.name}</Card.Title>
            <Card.Text>
              <strong>Email:</strong> {person.email}
              <br />
              <strong>Phone:</strong> {person.phone}
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PersonCards;
