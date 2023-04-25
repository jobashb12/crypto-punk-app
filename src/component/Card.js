import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Card = ({ img, price, id, name }) => {
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className='card-img' onClick={() => dispatch({ type: "ADD", id })}>
                <img src={img} alt='' />
            </div>
            <div className='card-details'>
                <div className='card-heading'>
                    <h3>{name}</h3>
                </div>
                <div className='card-id'>
                    <span>{`.#${id}`}</span>
                </div>
                <div className='card-price'>
                    <span><FaEthereum /></span>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default Card;
