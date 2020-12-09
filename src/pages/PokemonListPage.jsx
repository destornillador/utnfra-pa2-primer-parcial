import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonListTemplate from '../templates/PokemonListTemplate';
import { getPokemons } from '../redux/ducks/allPokemonDucks';
import { POKEMON_API_URL } from '../utils/const';

export default function PokemonListPage(){
  const { allPokemonDucks } = useSelector(state => state);
  const { pokemonsPerPage } = allPokemonDucks;
  const url = `${POKEMON_API_URL}/?limit=${pokemonsPerPage}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(url));
  }, [dispatch, pokemonsPerPage, url]);

  return (
    <PokemonListTemplate />
  );
}