import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, ListGroup, Spinner } from 'react-bootstrap';

export default function PokemonMovement() {

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
        <Card style={{ width: '20rem', flex: 'none' }}>
            {
                spinner ? <Spinner animation="border" role="status" /> : null
            }
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Movements</Card.Subtitle>
                <ListGroup>
                    {
                        pokemon.moves && pokemon.moves.map((item, index) => {
                            return (
                                
                                <ListGroup key={index}>{item.move.name}
                                <ListGroup.Item ><Card.Text><b>Level learned</b>: {item.version_group_details[0].level_learned_at}</Card.Text></ListGroup.Item>
                                <ListGroup.Item ><Card.Text><b>Move method name</b>: {item.version_group_details[0].move_learn_method.name}</Card.Text></ListGroup.Item>
                                <ListGroup.Item ><Card.Text><b>Version group</b>: {item.version_group_details[0].version_group.name}</Card.Text></ListGroup.Item>

                                </ListGroup>

                            )
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    );
}