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
                    console.log(data);
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
        <div>
            {
                items.length ? (
                    <>
                        {
                            items.map(item => <SingleProductCard key={item._id} singleProduct={item} handleDelete={handleDelete}></SingleProductCard>)
                        }
                        <button onClick={() => navigate('/add-item')}>Add Item</button>
                    </>
                ) : <h1>Please add some</h1>
            }
        </div>
    );
};

export default MyItems;