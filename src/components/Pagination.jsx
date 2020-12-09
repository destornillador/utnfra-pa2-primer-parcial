import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Col } from 'react-bootstrap';

import { getPokemons } from '../redux/ducks/allPokemonDucks';

export default function Pagination(){
  const { allPokemonDucks } = useSelector(state => state);
  const { previousPage, nextPage } = allPokemonDucks;
  const dispatch = useDispatch();

  console.log(nextPage);
  return (
    <Col className="text-center">
    { 
      previousPage ? 
      <Button className="mr-2 mt-2 mb-4" onClick={ () => { dispatch(getPokemons(previousPage)) } }>Previous</Button> 
      : null 
    }
    { 
      nextPage ? 
      <Button className="mr-2 mt-2 mb-4" onClick={ () => { dispatch(getPokemons(nextPage)) } }>Next</Button> 
      : null 
    }
    </Col>
  )
}