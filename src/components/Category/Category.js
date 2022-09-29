import React from 'react';
import './Category.css'
const Category = (props) => {
    const { name, img, seller, price } = props.type;
    return (
        <div className='category'>
           <img src={img} alt="" />
        </div>
    );
};

export default Category;