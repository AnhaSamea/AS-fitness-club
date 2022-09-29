import React, { useState } from 'react';
import './Profile.css'
import pic from './profile.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = (props) => {
    const { list } = props;
    let total = 0;
    for (const category of list) {
        total = total + category.time;
    }
    const [time, setTime] = useState([0]);
    function addBreakTime(id) {
        setTime(id);
        localStorage.getItem(id);
    }
    /*  const addBreakTime = () => {
         console.log('clicked');
     } */
     const notify = () => toast("You have completed your activities successfully!!");

    return (
        <div className='profile'>
            <div className='profile-info'>
                <img src={pic} alt="" />
                <div>
                    <h5 className='name'>Gong Yoo</h5>
                    <p className='text-muted fw-semibold location'>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='info'>
                <div>
                    <p><strong>77</strong>kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><strong>6.2</strong>inch</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><strong>26</strong>yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <h5>Add a break</h5>
            <div className='break'>
                <button onClick={() => addBreakTime(10)} className='btn btn-light rounded-circle break-time'>10s</button>
                <button onClick={() => addBreakTime(20)} className='btn btn-light rounded-circle break-time'>20s</button>
                <button onClick={() => addBreakTime(30)} className='btn btn-light rounded-circle break-time'>30s</button>
                <button onClick={() => addBreakTime(40)} className='btn btn-light rounded-circle break-time'>40s</button>
                <button onClick={() => addBreakTime(50)} className='btn btn-light rounded-circle break-time'>50s</button>
            </div>
            {/* <p>Selected Items : {list.length}</p> */}
            <h5>Exercise Details</h5>
            <p className='time'><strong>Exercise Time : </strong>{total} minutes</p>
            <p className='time'><strong>Break Time : </strong>{time}s</p>
            <button onClick={notify} className='btn btn-success activity'>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;