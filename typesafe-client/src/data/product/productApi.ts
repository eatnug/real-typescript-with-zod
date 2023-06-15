import axios from "axios";
import { z } from 'zod';
interface Response<T> {
    data: T
}

const ReviewSchema = z.object({
    id: z.number(),
    content: z.string(),
})
export type Review = z.infer<typeof ReviewSchema>;


const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    shippingFee: z.number(),
    reviews: z.array(ReviewSchema)
});

export type Product = z.infer<typeof ProductSchema>;


async function getProduct(id: number) {
    const product = (await axios.get<Response<Product>>(`http://localhost:8080/products/${id}`)).data.data
    return ProductSchema.parse(product)
}

async function purchase(id: number, totalPrice: number) {
    return (await axios.post<Response<string>>(`http://localhost:8080/products/${id}`, { totalPrice })).data.data
}

export default {
    getProduct,
    purchase
}