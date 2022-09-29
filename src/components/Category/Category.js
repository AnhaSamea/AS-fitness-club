import React from 'react';
import './Category.css'
const Category = (props) => {
    const { name, img, age, time } = props.type;
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>For Age : {age}</p>
            <p>Time required : {time}min</p>
            <button>Add to list</button>
        </div>
    );
};

export default Category;