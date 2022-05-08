import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Inventory = () => {
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

            <h1 className='text-center text-3xl mt-10'>All<span className='ml-2 text-[#6D9900]'>Product</span></h1>
            <div className="typewriter text-2xl font-medium text-[#6D9900] text-center mb-10">
                {

                    <>
                        <AutoTyping
                            active // <boolean>
                            textRef='Choose yours' // <string>
                            writeSpeed={150} // <number>
                            deleteSpeed={150} // <number>
                            delayToWrite={1000} // <number>
                            delayToDelete={2000} // <number>
                        />
                        <BlinkCursor
                            active // <boolean>
                            blinkSpeed={500} // <number>
                        />
                    </>

                }
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5'>
                {
                    product.map(e => <SingleProductCard key={e._id} singleProduct={e} handleDelete={handleDelete}></SingleProductCard>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => navigate('/add-item')} className=' text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-10 py-1 rounded-md  my-8 md:w-1/5 mx-auto z-50 '>Add Items</button>
            </div>
        </>
    );
};

export default Inventory;