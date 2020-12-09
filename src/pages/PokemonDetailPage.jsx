import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getPokemonById } from '../redux/ducks/aPokemonDucks';

import PokemonDetailTemplate from '../templates/PokemonDetailTemplate';

export default function PokemonDetailPage(){
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailTemplate />
  );
}