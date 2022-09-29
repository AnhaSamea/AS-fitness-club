import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Club.css'
const Club = () => {
    //data loading
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
        .then(data=>setTypes(data))
    },[])
    return (
        <div className='club-container'>
          <div className='exercise-container'>
                {
                    types.map(type=><Category key={type.id} type={type}  ></Category>)
               }
            </div>
            <div className='profile-container'>
                <h3>Profile Info</h3>
            </div>  
        </div>
    );
};

export default Club;