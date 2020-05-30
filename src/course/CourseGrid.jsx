import React from 'react';
import { Row } from 'reactstrap';

import Course from '../course/CourseComponent'
import Courses from '../course/data/Courses.json'

const CourseGrid = () => {

    return (
        <Row>
            {
                Courses.map(curse => <Course title={curse.title} image={curse.image} teacher={curse.teacher} />)
            }
        </Row>
    )
}

export default CourseGrid;