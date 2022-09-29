import React from 'react';
import './Profile.css'
const Profile = ({list}) => {
    return (
        <div className='profile'>
            <h3>Profile</h3>
            <p>Selected Items : {list.length}</p>
            <h5>Exercise Details</h5>
            <p className='time'><strong>Exercise Time :</strong></p>
            <p className='time'><strong>Break Time :</strong></p>
            
                
        </div>
    );
};

export default Profile;