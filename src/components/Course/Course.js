import React from 'react';
import "./Course.css"
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const {name, price} = props.course
    return (
        <div className="course">
            <div>
            <h2> Couse Title: <span className="course-name">{name}</span> </h2>
            <h4>Price: {price} Taka</h4>
            <Button variant="warning" onClick = {() => props.handleCourse(props.course)}>Add to Cart</Button>
        </div>
        </div>
    );
};

export default Course;

