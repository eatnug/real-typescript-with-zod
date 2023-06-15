import { PRODUCTS } from "./mockDB";

function getProduct(id: number) {
    return { ...PRODUCTS.find(user => user.id == id), reviews: undefined }
}

export default {
    getProduct
}