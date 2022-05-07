import React from 'react';
import useProduct from '../Hooks/useProduct';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Slider from '../Slider/Slider'
import topProductLogo from '../../Assets/Images/topProductLogo.png'
import About from './About/About';
import { useNavigate } from 'react-router-dom';
import loading from '../../Assets/Images/loading.gif'

const Home = () => {
    const [product, setProduct] = useProduct();
    const navigate = useNavigate();
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
        <>
            {
                product.length === 0 ? <div className="loader container mx-auto">
                    <img className='' src={loading} alt="" />
                </div> : (
                    <div>
                        <Slider></Slider>
                        <div className='bg-image relative bg-[#F5F5F5] mt-32 py-5 md:py-20'>
                            <div className='relative'>
                                <img className='relative mx-auto' src={topProductLogo} alt="" />
                                <h1 className='text-3xl md:text-4xl font-semibold relative text-center'>Top Product</h1>
                                <p className='md:text-lg px-10 text-md text-gray-500 mt-3 letter-spacing text-center'>Organic Food Is Food Produced By Methods That Comply With The Standards.</p>
                            </div>
                            <div className="mt-20 mb-16 px-10 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                                {
                                    product.slice(0, 6).map(e => <SingleProductCard key={e._id} singleProduct={e} handleDelete={handleDelete}></SingleProductCard>)
                                }
                            </div>
                            <button onClick={() => navigate('/inventory')} className=' text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md absolute bottom-10 right-0 left-0  w-1/5 mx-auto z-10 '>Manage Inventory</button>
                        </div>
                        <About></About>
                        <div className='bg-image-bottom relative bg-[#F5F5F5] mt-32 py-5 md:py-20'>
                            <div className='relative'>
                                <img className='relative mx-auto' src={topProductLogo} alt="" />
                                <h1 className='text-3xl md:text-4xl font-semibold relative text-center'>Special Product</h1>
                                <p className='md:text-lg px-10 text-md text-gray-500 mt-3 letter-spacing text-center'>Organic Food Is Food Produced By Methods That Comply With The Standards.</p>
                            </div>
                            <div className="mt-20 mb-32 px-10 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                                {
                                    product.slice(12, 15).map(e => <SingleProductCard key={e._id} singleProduct={e} handleDelete={handleDelete}></SingleProductCard>)
                                }

                            </div>
                        </div>
                        <div className="bg-footer-banner py-14 text-center">
                            <h1 className='text-3xl font-bold text-[#6D9900]'>100% Organic Foods</h1>
                            <h1 className='py-5 text-3xl md:text-7xl font-bold line-height'>Organic Veggies Food<br /> Cook Healthy</h1>
                            <p className='md:text-lg font-semibold text-md text-gray-700 mt-3 letter-spacing w-full px-4 md:px-10 md:w-2/3 mx-auto'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. atmsphere</p>
                            <button onClick={() => navigate('/inventory')} className='text-white bg-[#6D9900] border-2 border-transparent text-sm md:text-lg mt-8 hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md'>Inventory</button>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Home;