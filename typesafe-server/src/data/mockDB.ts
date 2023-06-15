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

export const PRODUCTS: Array<Product> = [
    {
        id: 1,
        name: '아메리카노 원두 1kg',
        price: 1000,
        shippingFee: 1000,
        reviews: [
            {
                id: 1,
                content: "엄청 써요"
            },
            {
                id: 2,
                content: "산미가 강해요"
            },
        ]
    },
    {
        id: 2,
        name: '레드불 1 박스',
        price: 1000,
        shippingFee: 1000,
        reviews: [
            {
                id: 1,
                content: "심장이 쿵쾅쿵쾅 뛰어요"
            },
        ]
    }
]
