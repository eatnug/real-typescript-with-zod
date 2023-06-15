import productApi, { Product } from "@/data/product/productApi";
import productRepository from "@/data/product/productRepository";

function getProduct(id: number) {
    return productRepository.useProduct(id)
}

function getTotalPrice(product: Product) {
    return product.price + product.shippingFee
}

function purchase(product: Product) {
    return productApi.purchase(product.id, getTotalPrice(product))
}

export default {
    getProduct,
    purchase,
    getTotalPrice
}