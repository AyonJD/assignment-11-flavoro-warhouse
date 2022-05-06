import { useParams } from 'react-router-dom';
import useSingleProduct from '../Hooks/useSingleProduct';

const UpdateProduct = () => {
    const { id } = useParams()
    const [singleProduct] = useSingleProduct(id)
    const { name, _id, img, price, stock } = singleProduct;
    

    const handleFormSubmit = event => {
        event.preventDefault();
        const quantity = event.target.formQuantity.value;
        if (!quantity) {
            alert("input field can't be empty")
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

                    //    toast('item restock successfully')
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

                    //    toast('item restock successfully')
                })
        } else {
            alert('Stock out')
        }

    }

    return (
        <div className='flex justify-around items-center py-5 coin-card cursor-pointer rounded-lg'>
            <img className='w-1/4' src={img} alt="" />
            <div>
                <h1 className='text-lg font-bold text-gray-600'>{name}</h1>
                <h1 className='text-lg font-bold text-gray-600'>{price}</h1>
                <h1 className='text-lg font-bold text-gray-600'>{stock}</h1>
            </div>

            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder='quantity' name='formQuantity' />
                <input type="submit" value="Submit" />
            </form>

            <button onClick={() => handleDeliver(_id)}>Deliver</button>
        </div>
    )
}

export default UpdateProduct;