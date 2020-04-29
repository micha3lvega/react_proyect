import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardTitle, CardText, Col} from 'reactstrap';


const Curso = (props) => {
    return (
        <div className="col-4">
            <Col>
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Curso;