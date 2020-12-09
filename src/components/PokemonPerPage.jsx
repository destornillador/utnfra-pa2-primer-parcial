import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import { setPokemonsPerPage } from '../redux/ducks/allPokemonDucks';

export default function PokemonsPerPage() {
    const { allPokemonDucks } = useSelector(state => state);

  const { pokemonsPerPage } = allPokemonDucks;
  const dispatch = useDispatch();

  return (
    <DropdownButton className="mr-2 mt-2 mb-4 text-center" id="dropdown-basic-button" title="Show only">
      <Dropdown.Item
        className={pokemonsPerPage === 10 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(10)) }}
      >10</Dropdown.Item>
      <Dropdown.Item
        className={pokemonsPerPage === 20 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(20)) }}
      >20</Dropdown.Item>
      <Dropdown.Item
        className={pokemonsPerPage === 30 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(30)) }}
      >30</Dropdown.Item>
    </DropdownButton>
  )
}