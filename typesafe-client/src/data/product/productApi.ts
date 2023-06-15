import axios from "axios";

interface Response<T> {
    data: T
}

export interface Product {
    id: number;
    name: string;
    price: number;
    shippingFee: number;
    reviews: Array<Review>
}

export interface Review {
    id: number;
    content: string;
}

async function getProduct(id: number) {
    return (await axios.get<Response<Product>>(`http://localhost:8080/products/${id}`)).data.data
}

async function purchase(id: number, totalPrice: number) {
    return (await axios.post<Response<string>>(`http://localhost:8080/products/${id}`, { totalPrice })).data.data
}

export default {
    getProduct,
    purchase
}