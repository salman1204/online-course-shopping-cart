import React from 'react';
import "./Course.css"

const Course = (props) => {
    const {name, price} = props.course
    return (
        <div className="course">
            <div>
            <h2> Couse Title: <span className="course-name">{name}</span> </h2>
            <h4>Price: {price} Taka</h4>
            <button onClick = {() => props.handleCourse(props.course)}>Add to Cart</button>
        </div>
        </div>
    );
};

export default Course;

