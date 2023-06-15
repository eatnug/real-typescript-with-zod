import { useEffect, useState } from "react";
import productApi, { Product } from "@/data/product/productApi";

function useProduct(id: number) {
    const [product, setProduct] = useState<Product>()
    const [error, setError] = useState<Error>()

    useEffect(() => {
        productApi
            .getProduct(id)
            .then(product => setProduct(product))
            .catch(error => { setError(error) })
    }, [id])

    return { product, error }
}

export default {
    useProduct
}