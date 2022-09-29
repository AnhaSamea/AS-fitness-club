import React, { useEffect, useState } from 'react';
import './Club.css'
const Club = () => {
    //data loading
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
        .then(data=>setTypes(data))
    },[])
    return (
        <div className='club-container'>
          <div className="exercise-container">
                <h3>Exercise Category : {types.length }</h3>
            </div>
            <div className="profile-container">
                <h3>Profile Info</h3>
            </div>  
        </div>
    );
};

export default Club;