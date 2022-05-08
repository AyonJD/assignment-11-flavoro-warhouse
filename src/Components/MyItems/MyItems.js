import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const matched = items.filter(e => e._id !== id);
                        setItems(matched)
                    } else {
                        alert('nothing')
                    }
                })
        }

    }
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email
            const url = `http://localhost:5000/singleItem?email=${email}`

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                setItems(data)
            } catch (error) {

                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/signin')
                }
                toast(error.message)
            }
        }
        getItems()

    }, [])
    return (
        <div className='my-14'>
            {
                items.length ? (
                    <>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5'>
                            {
                                items.map(item => <SingleProductCard key={item._id} singleProduct={item} handleDelete={handleDelete}></SingleProductCard>)
                            }
                        </div>
                        <div className="text-center">
                            <button onClick={() => navigate('/inventory')} className='text-white bg-[#6D9900] border-2 border-transparent text-sm md:text-lg mt-8 hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-10 md:w-1/5 py-1 rounded-md'>Inventory</button>
                        </div>
                    </>
                ) : <h1 className='text-center mt-12 mb-7 text-2xl md:text-4xl'>You haven't added any. Please Add some.</h1>
            }
        </div>
    );
};

export default MyItems;