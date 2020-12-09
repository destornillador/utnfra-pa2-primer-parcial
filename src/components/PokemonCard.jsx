import React, { useEffect, useState } from 'react';

import { Card, Spinner } from 'react-bootstrap';

import { POKEMON_DEFAULT_IMAGE } from '../utils/const';

export default function PokeCard(props) {

  const { url } = props;
  const [id, setId] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [image, setImage] = useState(POKEMON_DEFAULT_IMAGE);
  
  useEffect(() => {
    setSpinner(true);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setId(data.id);
      setImage(data.sprites.front_default);
      setWeight(data.weight);
      setHeight(data.height);
    })
    .finally(() => setSpinner(false))
    .catch(error => console.log(error))
  }, [url]);

  return (
    <Card style={{ width: '20rem', flex: 'none' }}>
      {
        spinner ?
        <Spinner animation="border" role="status" /> : null
      }
      <Card.Body>
        <Card.Header>{ props.name.toUpperCase() }</Card.Header>
        <Card.Img src={ image } />
        <Card.Text><b>Weight</b>: {weight} kg</Card.Text>
        <Card.Text><b>Height</b>: {height} cm</Card.Text>
        <Card.Link href={`/detalle/${id}`}>Details</Card.Link>
        <Card.Link href={`/peliculas/${id}`}>Movements</Card.Link>
      </Card.Body>
    </Card>
  );
}