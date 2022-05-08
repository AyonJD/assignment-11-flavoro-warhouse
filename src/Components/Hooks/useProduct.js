import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://intense-dusk-38054.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return [product, setProduct]
};

export default useProduct;