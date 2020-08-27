import React from 'react';
import "./Course.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const {name, price, instructor, image} = props.course
    return (
        <div className="course">
          <div>
          <img src={image} alt="" />
          </div>
            <div>
            <h3> Couse Title: <span className="course-name">{name}</span> </h3>
            <p>Instructor: <b>{instructor}</b> </p>
            <p>Price: {price} Taka</p>
            <Button variant="warning" onClick = {() => props.handleCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>
        </div>
        </div>
    );
};

export default Course;

