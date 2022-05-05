import React from 'react';
import { Link } from 'react-router-dom';

const SingleProductCard = (props) => {
    const { name, img, _id, price } = props.singleProduct;
    return (
        // <Link to={}>
        <div className='flex justify-around items-center py-5 coin-card cursor-pointer rounded-lg'>
            <img className='w-1/4' src={img} alt="" />
            <div>
                <h1 className='text-lg font-bold text-gray-600'>{name}</h1>
                <h1 className='text-lg font-bold text-gray-600'>{price}</h1>
            </div>
            <button>Delete</button>
            <button>Update</button>
        </div>
        // </Link>
    );
};

export default SingleProductCard;