import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSunFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src='./image/logo.png' alt='Logo' />
            </div>
            <div className='nav-search'>
                <AiOutlineSearch />
                <input type='text' placeholder='Collection, item or user...'  />
            </div>
            <div className='nav-items'>
                <span>Drops</span>
                <span>Marketplace</span>
                <span>Create</span>
            </div>
            <div className='nav-action'>
                <BsSunFill />
            </div>
            <div className='nav-btn'>
                GET IN
            </div>
        </div>
    )
}

export default Navbar;
