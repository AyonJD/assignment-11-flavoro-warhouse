import React from 'react';
import useProduct from '../Hooks/useProduct';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Slider from '../Slider/Slider'
import topProductLogo from '../../Assets/Images/topProductLogo.png'

const Home = () => {
    const [product, setProduct] = useProduct()
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const matched = product.filter(e => e._id !== id);
                        setProduct(matched)
                    } else {
                        alert('nothing')
                    }
                })
        }

    }
    return (
        <div>
            <Slider></Slider>
            <div className='bg-image relative bg-[#F5F5F5] mt-32 py-20'>
                <div classsName="relative">
                    <img className='relative mx-auto' src={topProductLogo} alt="" />
                    <h1 className='text-3xl md:text-4xl font-semibold relative text-center'>Top Product</h1>
                    <p className='md:text-lg px-10 text-md text-gray-500 mt-3 letter-spacing text-center'>Organic Food Is Food Produced By Methods That Comply With The Standards.</p>
                </div>
                <div className="mt-20 mb-32 px-10 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                    {
                        product.slice(0, 6).map(e => <SingleProductCard key={e._id} singleProduct={e} handleDelete={handleDelete}></SingleProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;