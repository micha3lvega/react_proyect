import React from 'react';

import Header from './components/Header';
import Curso from './components/Curso'
import { Row, Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Header></Header>
      <Row>
        <Curso></Curso>
        <Curso></Curso>
        <Curso></Curso>
      </Row>
    </Container>
  );
}

export default App;
