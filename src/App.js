import React from 'react';

import Header from './components/Header';
import Curso from './components/Curso'
import { Row, Container } from 'reactstrap';

import Cursos from './data/Cursos.json'

function App() {
  return (
    <Container>
      <Header></Header>
      <Row>
        {
          Cursos.map(curso => <Curso title={curso.title} image={curso.image} teacher={curso.teacher} />)
        }
      </Row>
    </Container>
  );
}

export default App;
