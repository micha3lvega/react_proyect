import React from 'react';

import Header from './components/Header';
import Curso from './components/Curso'
import { Row, Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Header></Header>
      <Row>
        <Curso title="Curso 1"
          image="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"></Curso>
      </Row>
    </Container>
  );
}

export default App;
