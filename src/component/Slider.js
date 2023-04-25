import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Slider = () => {
    const { users } = useSelector((state) => state.ReducerFunction);
    console.log(users);
    return (
        <div className='slider'>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <Card
                                img={user.img}
                                name={user.name}
                                id={user.id}
                                price={user.price}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;
