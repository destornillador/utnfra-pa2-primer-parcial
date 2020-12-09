import React from 'react';

import { Navbar }  from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ErrorPage from '../pages/ErrorPage';
import PokemonListPage from '../pages/PokemonListPage';
import PokemonDetailPage from '../pages/PokemonDetailPage';
import PokemonMovementPage from '../pages/PokemonMovementPage';

export default function NavigationBar(){
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Brand href="/listado">List</Navbar.Brand>
      </Navbar>
      <Switch>
        <Route exact path={["/", "/listado"]}>
          <PokemonListPage />
        </Route>
        <Route exact path="/detalle/:id">
          <PokemonDetailPage />
        </Route>
        <Route exact path="/peliculas/:id">
          <PokemonMovementPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}