import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    return (
        <nav className='mt-5 ms-3 p-2'>
            <FontAwesomeIcon icon={faPersonRunning}></FontAwesomeIcon>
            <h1>AS Fitness Club</h1>
        </nav>
    );
};

export default Header;