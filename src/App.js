import React from 'react';

import Header from './header/Header';
import Course from './course/Course'
import { Row, Container } from 'reactstrap';

import Courses from './course/data/Courses.json'

function App() {
  return (
    <Container>
      <Header></Header>
      <Row>
        {
          Courses.map(curse => <Course title={curse.title} image={curse.image} teacher={curse.teacher} />)
        }
      </Row>
    </Container>
  );
}

export default App;
