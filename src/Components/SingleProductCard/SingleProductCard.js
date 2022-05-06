import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'


const SingleProductCard = (props) => {
    const [out, setOut] = useState(false)
    const { name, sideImage, pairImage, _id, price, details } = props.singleProduct;
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='cursor-pointer rounded-lg bg-white px-5'>
            <img
                onMouseEnter={() => setOut(true)}
                onMouseLeave={() => setOut(false)}
                className='mx-auto' src={out ? pairImage : sideImage} alt="" />
            <div className="spacer w-full bg-[#6D9900]"></div>
            <div className='text-center mt-3'>
                <h1 className='text-lg md:text-xl font-bold text-gray-600 mb-1'>{name}</h1>
                <p className='font-bold text-[#6D9900] mb-3'>Price: ${price}</p>
                <p className='text-[#707070] line-height' title={details}>{details.slice(0, 250)}...</p>
            </div>
            <div className='flex justify-evenly mt-5'>
                <button onClick={() => props.handleDelete(_id)} className='nav-btn font-bold text-md flex items-center'><AiFillDelete></AiFillDelete><span className='font-bold text-md ml-1'>Delete</span></button>
                <button onClick={() => handleUpdate(_id)}className='nav-btn font-bold text-md flex items-center'><GrUpdate></GrUpdate><span className='font-bold text-md ml-1'>Update</span></button>
            </div>
        </div>
    );
};

export default SingleProductCard;