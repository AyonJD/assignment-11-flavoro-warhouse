import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init'

const AddNewItem = () => {

    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault();

        const email = user?.email;
        const name = e.target.itemName.value
        const sideImage = e.target.frontImage.value
        const pairImage = e.target.backImage.value
        const stock = e.target.stock.value
        const price = e.target.price.value
        const sold = e.target.sold.value
        const supplier = e.target.supplier.value
        const details = e.target.details.value
        const item = { email, name, supplier, price, stock, sold, sideImage, pairImage, details }


        fetch('https://intense-dusk-38054.herokuapp.com/add-item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast.success('Item added successfully')
            })

        e.target.reset()
    };
    return (
        <>
            <h1 className='text-center text-3xl mt-10 mb-4'>Add<span className='ml-2 text-[#6D9900]'>Product</span></h1>
            <div className='md:w-2/5 md:mx-auto mx-5 mb-10'>
                <form onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label>Email:</label>
                        <input type="email" value={user?.email} disabled readOnly id="text" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label>Item Name:</label>
                        <input type="text" id="text" name='itemName' placeholder="Item-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Front Image:</label>
                        <input type="text" id="text" name='frontImage' placeholder="Image url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Back Image:</label>
                        <input type="text" id="text" name='backImage' placeholder="Image url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Price:</label>
                        <input type="number" id="text" name='price' placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Stock:</label>
                        <input type="number" id="text" name='stock' placeholder="Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Sold:</label>
                        <input type="number" id="text" name='sold' placeholder="Sold" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-6">
                        <label>Supplier:</label>
                        <input type="text" id="text" name='supplier' placeholder="Aupplier Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label>Details:</label>
                        <textarea rows="3" cols="80" type="text" id="text" name='details' placeholder="About Items" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>



                    <input type="submit" className="cursor-pointer text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md" value='Add Item' />
                </form>
            </div>
        </>
    );
};

export default AddNewItem;