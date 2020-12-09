import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getPokemonById } from '../redux/ducks/aPokemonDucks';

import PokemonMovementTemplate from '../templates/PokemonMovementTemplate';

export default function PokemonMovementPage(){
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <PokemonMovementTemplate />
  );
}