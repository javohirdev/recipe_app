import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const Data = ({title, calories, image, ingredients}) => {
    return(
        <div className="data">
            <Container>
                <Row>
                    <Col md="4">     
                        <Card>
                            <CardHeader>
                                <img className="w-100" src={image} />
                            </CardHeader>
                            <CardBody>
                            <h2>{title}</h2>
                            <h4>Ingredients</h4>
                        <ul>
                            {ingredients.map(ingredients => (
                                <li>{ingredients.text}</li>
                            ))}
                        </ul>
                        <p>Calories {calories}</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Data;