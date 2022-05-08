import { useNavigate, useParams } from 'react-router-dom';
import useSingleProduct from '../Hooks/useSingleProduct';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams()
    const [singleProduct] = useSingleProduct(id);
    const navigate = useNavigate();
    const { name, _id, sideImage, price, stock, details, sold, supplier } = singleProduct;


    const handleFormSubmit = event => {
        event.preventDefault();
        const quantity = event.target.formQuantity.value;
        if (!quantity) {
            toast.error("Restok field can't be empty.");
            return;
        } else {
            const newQuantity = parseInt(singleProduct.stock) + parseInt(quantity)
            const newQuantityObj = { newQuantity }

            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantityObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)

                    toast.success('Item Restok successfully')
                })
            event.target.reset()
        }
    }


    const handleDeliver = id => {
        const quantity = singleProduct.stock;
        if (quantity > 0) {
            const quantityObj = { quantity };
            const url = `http://localhost:5000/deliver/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantityObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)

                    toast.success('Item Delivered successfully')
                })
        } else {
            alert('Stock out')
        }

    }

    return (
        <div className='flex flex-col justify-around items-center py-5 coin-card rounded-lg'>
            <img className='md:w-1/4' src={sideImage} alt="" />
            <div className='text-center md:w-1/4'>
                <h1 className='text-3xl font-bold text-gray-600'>{name}</h1>
                <h1 className='text-2xl mt-2 font-bold text-[#6D9900]'>Price: ${price}</h1>
                <div className="md:flex justify-between">
                    <h1 className='text-lg font-bold text-gray-600'>Stock:{stock}</h1>
                    <h1 className='text-lg font-bold text-gray-600'>Sold:{sold}</h1>
                    <h1 className='text-lg font-bold text-gray-600'>Supplier:{supplier}</h1>
                </div>
                <p className='px-5 mx-auto text-[#707070] line-height mt-3 mb-1' title={details}>{details}</p>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="mt-3 flex items-center">
                    <input type="number" name='formQuantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <input className='ml-2 text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-2 cursor-pointer rounded-md' type="submit" value="Restock" />
                </div>
            </form>
            <div className="flex items-center mt-3 mb-10">
                <button className=' text-white bg-[#D90000] border-2 border-transparent hover:border-2 hover:border-[#D90000] hover:bg-transparent hover:text-[#D90000] transition-all transition-duration:150ms font-medium hover:font-medium px-7 py-2 cursor-pointer rounded-md' onClick={() => handleDeliver(_id)}>Deliver</button>
                <button className='ml-2 text-white bg-[#D90000] border-2 border-transparent hover:border-2 hover:border-[#D90000] hover:bg-transparent hover:text-[#D90000] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-2 cursor-pointer rounded-md' onClick={() => navigate('/inventory')}>Inventory</button>
            </div>
        </div>
    )
}

export default UpdateProduct;