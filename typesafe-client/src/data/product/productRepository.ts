import { useEffect, useState } from "react";
import productApi, { Product } from "@/data/product/productApi";

function useProduct(id: number) {
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        productApi.getProduct(id).then(product => setProduct(product))
    }, [id])

    return product
}

export default {
    useProduct
}