import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'


const SingleProductCard = (props) => {
    const [out, setOut] = useState(false)
    const { name, sideImage, pairImage, _id, price, details, stock, supplier } = props.singleProduct;
    const navigate = useNavigate();
    const route = window.location.href;
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='cursor-pointer rounded-lg bg-white px-5 pb-5'>
            <img
                onMouseEnter={() => setOut(true)}
                onMouseLeave={() => setOut(false)}
                className='mx-auto' src={out ? pairImage : sideImage} alt="" />
            <div className="spacer w-full bg-[#6D9900]"></div>
            <div className='text-center mt-3'>
                <h1 className='text-3xl font-bold text-gray-600 mb-1 md:mb-4'>{name}</h1>
                <div className="md:flex justify-between items-center">
                    <p className='font-bold text-gray-600 mb-3'>In Stock: {stock}</p>
                    <p className='text-2xl mt-2 font-bold text-[#6D9900] mb-3'>Price: ${price}</p>
                    <p className='font-bold text-gray-600 mb-3'>Supplier: {supplier}</p>
                </div>
                <p className='text-[#707070] line-height' title={details}>{details.slice(0, 250)}...</p>
            </div>
            <div className='flex justify-evenly mt-5'>
                {
                    route !== 'http://localhost:3000/' && <button onClick={() => props.handleDelete(_id)} className='nav-btn font-bold text-md flex items-center'><AiFillDelete></AiFillDelete><span className='font-bold text-md ml-1'>Delete</span></button>
                }
                <button onClick={() => handleUpdate(_id)} className='nav-btn font-bold text-md flex items-center'><GrUpdate></GrUpdate><span className='font-bold text-md ml-1'>Update</span></button>
            </div>
        </div>
    );
};

export default SingleProductCard;