import { useEffect, useState } from "react";

const useSingleProduct = id => {
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProduct(data))

    }, [singleProduct])
    return [singleProduct]
};

export default useSingleProduct;