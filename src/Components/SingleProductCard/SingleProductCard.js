import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleProductCard = (props) => {
    const [out, setOut] = useState(false)
    const { name, sideImage, pairImage, _id, price } = props.singleProduct;
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='cursor-pointer rounded-lg'>
            <img
                onMouseEnter={() => setOut(true)}
                onMouseLeave={() => setOut(false)}
                className='mx-auto' src={out ? pairImage : sideImage} alt="" />
            <div className='text-center'>
                <h1 className='text-lg md:text-xl font-bold text-gray-600'>{name}</h1>
                <p className='font-bold text-[#6D9900]'>Price: ${price}</p>
            </div>
            <div className='flex justify-evenly'>
                <button onClick={() => props.handleDelete(_id)}>Delete</button>
                <button onClick={() => handleUpdate(_id)}>Update</button>
            </div>
        </div>
    );
};

export default SingleProductCard;