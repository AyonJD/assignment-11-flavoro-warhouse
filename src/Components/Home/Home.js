import React from 'react';
import useProduct from '../Hooks/useProduct';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Slider from '../Slider/Slider'

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
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    product.slice(0, 6).map(e => <SingleProductCard key={e._id} singleProduct={e} handleDelete={handleDelete}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;