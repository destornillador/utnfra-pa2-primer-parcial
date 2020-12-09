import React from 'react';
import { useSelector } from 'react-redux';

import { CardDeck, Container, Col, Row, Spinner } from 'react-bootstrap';

import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import PokemonPerPage from '../components/PokemonPerPage';

export default function PokemonListTemplate(){
  const { allPokemonDucks } = useSelector(state => state);
  const { pokemons, loading } = allPokemonDucks;

  return (
    <Container fluid>
      {
        loading && <Spinner animation="border" role="status" />
      }
      <Row>
        <Col>
          <h1>Pokemons</h1>
        </Col>
      </Row>
        <PokemonPerPage />
      <Row style={{ display: 'flex', flex: 'wrap' }}>
        <Col>
          <CardDeck style={{ justifyContent: 'center' }}>
          {
            Array.isArray(pokemons) && pokemons.map((pokemon, index) => {
              return <PokemonCard key={ index } name={ pokemon.name } url = { pokemon.url } />
            })
          }
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Pagination />
      </Row>
    </Container>
  );
}