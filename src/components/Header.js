import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => (
    <Header>
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">React application</h1>
            </Container>
        </Jumbotron>
    </Header>);

export default Header;