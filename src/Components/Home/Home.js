import React from 'react';
import useProduct from '../Hooks/useProduct';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const Home = () => {
    const [product, setProduct] = useProduct()
    return (
        <div>
            {
                product.slice(0,6).map(e => <SingleProductCard key={e._id} singleProduct={e}></SingleProductCard>)
            }
        </div>
    );
};

export default Home;