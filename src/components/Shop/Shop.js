import React from "react";
import courseData from "../../fakeData/courseData";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./Shop.css"


const Shop = () => {
  const [course, setCourse] = useState(courseData);
  const [cart, setCart] = useState([]);

  const handleCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      
      <div className="course-container">
        {course.map((course) => (
          <Course course={course} key={course.id} handleCourse={handleCourse}></Course>
        ))}
      </div>

      <div className="cart-container">
          <Cart cart={cart}> </Cart>
      </div>

    </div>
  );
};

export default Shop;
