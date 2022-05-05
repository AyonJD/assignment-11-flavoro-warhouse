import { useState } from "react";

const useProduct = () => {
    const [product, setProduct] = useState([]);
    fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data))

    return [product, setProduct]
};

export default useProduct;