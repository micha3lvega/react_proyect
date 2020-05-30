import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../course/Course.css'

import {
    Card, Button, CardBody, CardHeader, Col, CardImg, Badge, CardTitle, CardText
} from 'reactstrap';
import Image from 'react-bootstrap/Image'

const Course = (props) => {
    return (
        <div className="col-4">
            <Col>
                <Card className="text-center">
                    <CardHeader><h5>{props.title}</h5></CardHeader>
                    <CardImg top width="100%" src={props.image} alt={props.title} />
                    <CardBody>
                        <CardTitle>
                            <h6>
                                <Image src="https://conceptodefinicion.de/wp-content/uploads/2018/10/Profesor-.jpg" alt={props.teacher} roundedCircle className="teacher"/>
                                {props.teacher}
                            </h6>
                        </CardTitle>
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

export default Course;