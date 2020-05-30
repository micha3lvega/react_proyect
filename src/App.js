import React from 'react';

import Header from './header/HeaderComponent';

import { Container } from 'reactstrap';

import CourseGrid from './course/CourseGrid';

function App() {
  return (
    <Container>
      <Header></Header>
      <CourseGrid></CourseGrid>
    </Container>
  );
}

export default App;
