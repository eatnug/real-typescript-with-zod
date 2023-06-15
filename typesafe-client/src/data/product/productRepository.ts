import { useEffect, useState } from "react";
import productApi, { Product } from "@/data/product/productApi";

function useProduct(id: number) {
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        productApi
            .getProduct(id)
            .then(product => setProduct(product))
            .catch(error => { alert(`오류가 발생했습니다. ${error}`) })
    }, [id])

    return product
}

export default {
    useProduct
}