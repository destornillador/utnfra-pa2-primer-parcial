import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, ListGroup, Spinner } from 'react-bootstrap';

export default function PokemonDetail() {

  const { aPokemonDucks } = useSelector(state => state);
  const { pokemon } = aPokemonDucks;

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    if (pokemon) {
      setSpinner(false);
    }
  }, [pokemon]);

  return (
    <Card>
      {
        spinner ? <Spinner animation="border" role="status" /> : null
      }
      <Card.Body>
        <Card.Title>{ pokemon.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Abilities</Card.Subtitle>
        <ListGroup>
              {
                pokemon.abilities && pokemon.abilities.map((item, index) => {
                  return <ListGroup.Item  key={ index }>{ item.ability.name }</ListGroup.Item>
                })
              }
            </ListGroup>
      </Card.Body>
    </Card>
  );
}