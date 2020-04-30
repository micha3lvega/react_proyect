import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, Button, CardHeader, CardBody, Col, CardImg, Badge, CardTitle, CardText
} from 'reactstrap';


const Curso = (props) => {
    return (
        <div className="col-4">
            <Col>
                <Card className="text-center">
                    <CardImg top width="100%" src={props.image} alt={props.title} />
                    <CardBody>
                        <CardTitle><h5>{props.title}</h5></CardTitle>
                        <CardText>
                            <Badge pill color="danger">$20.00</Badge>
                        </CardText>
                        <Button color="primary">{props.textButton !== undefined ? props.textButton : 'Ingresar'}</Button>
                    </CardBody>
                </Card>
            </Col>
        </div>
    );
};

export default Curso;