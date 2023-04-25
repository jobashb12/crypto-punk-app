import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Header = () => {
    const { user } = useSelector((state) => state.ReducerFunction);
    return (
        <div className='header'>
            <div className='header-img'>
                <img src={user.img} alt='' />
            </div>
            <div className='header-details'>
                <div className='heading'>
                    <span>{user.name}</span>
                    {`.#${user.id}`}
                </div>
                <div className='details'>
                    <div className='circul'></div>
                    <div className='detail'>
                        <div className='code'>0x568AEC485ef93C6E49AdcdA380D7A8f72c889d85</div>
                        <div className='name'>@jobashprogrammer</div>
                    </div>
                    <div className='socail'>
                        <div>
                            <AiFillInstagram />
                        </div>
                        <div>
                            <AiOutlineTwitter />
                        </div>
                        <div>
                            <FiMoreHorizontal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
