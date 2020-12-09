import React from 'react';
import { useSelector } from 'react-redux';

import { Carousel, Col } from 'react-bootstrap';

export default function PokemonCarousel() {

  const { aPokemonDucks } = useSelector(state => state);
  const { sprites } = aPokemonDucks.pokemon;

  return (
    <Col md={{ span: 4, offset: 4 }} className="mt-4" >
      <Carousel style={{ backgroundColor: '#d6d6d6' }}>
        {
          sprites && sprites.front_default &&
          <Carousel.Item>
            <img
              className="w-100"
              alt="Front"
              src={ sprites.front_default } 
            />
          </Carousel.Item>
        }
        {
          sprites && sprites.back_default &&
          <Carousel.Item>
            <img
              className="w-100"
              alt="Back"
              src={ sprites.back_default } 
            />
          </Carousel.Item>
        }
      </Carousel>
    </Col>
  );
}