import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

import './Club.css'
const Club = () => {
    //data loading
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, []);
    const handleAddToList = (type) => {
        console.log(type);
    }
    return (
        <div className='club-container'>
            <div className='exercise-container'>
                {
                    types.map(type => <Category key={type.id} type={type} handleAddToList={handleAddToList} ></Category>)
                }
            </div>
            <div className='profile-container'>
                <h3>Profile</h3>
               {/*  {
                    types.map(type=> <Profile></Profile>)
                } */}
            </div>
        </div>
    );
};

export default Club;