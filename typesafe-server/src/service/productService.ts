import productRepository from "../data/productRepository"


function getProduct(id: number) {
    return productRepository.getProduct(id)
}

function purchase(id: number, totalPrice: number) {
    return `${id}번 상품에 대한 비용 ${totalPrice}원이 결제되었습니다.`
}

export default {
    getProduct,
    purchase
}