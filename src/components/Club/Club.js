import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Profile from '../Profile/Profile';

import './Club.css'
const Club = () => {
    //data loading
    const [types, setTypes] = useState([]);
    //usestate for add button
    const [list,setList] =useState([])
    

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, []);
    const handleAddToList = (type) => {
        // console.log(type);
        const newList = [...list, type];
        setList(newList);
    }
    return (
        <div className='club-container'>
            <div className='exercise-container'>
                {
                    types.map(type => <Category key={type.id} type={type} handleAddToList={handleAddToList} ></Category>)
                }
                
            </div>
            <div className='profile-container'>
                <Profile list={list}></Profile>
            </div>
        </div>
    );
};

export default Club;