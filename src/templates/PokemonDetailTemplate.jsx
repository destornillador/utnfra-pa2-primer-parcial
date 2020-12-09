import React from 'react';

import { Col } from 'react-bootstrap';

import PokemonCarousel from '../components/PokemonCarousel';
import PokemonDetail from '../components/PokemonDetail';

export default function PokemonDetailTemplate() {
    return (
        <Col>
            <PokemonDetail />
            <PokemonCarousel />
        </Col>
    );
}