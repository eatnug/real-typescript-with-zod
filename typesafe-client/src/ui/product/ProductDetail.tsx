import productService from "@/service/product/productService";
import { CSSProperties } from "react";


interface Props {
    id: number;
}

export default function ProductDetail({ id }:Props) {
    const {product, error} = productService.getProduct(id)


    if(error) {
        return <div style={styles.wrapper}>
            <p>오류가 발생해 상품 정보를 불러오지 못했습니다.</p>
            <p>계속해서 발생할 경우 고객센터로 문의해주세요.😞</p>
        </div>
    }

    if(!product) {
        return <>loading data...</>
    }

    return <div style={styles.wrapper} >
        <div style={styles.info}>
        <div style={styles.row}>
            <p style={styles.label}>상품명 : </p>
            <p style={styles.value}>{product.name}</p>
        </div>
        <div style={styles.row}>
            <p style={styles.label}>가격 : </p>
            <p style={styles.value}>{product.price}원</p>
        </div>
        <div style={styles.row}>
            <p style={styles.label}>배송비 : </p>
            <p style={styles.value}>{product.shippingFee}원</p>
        </div>
        <div style={styles.row}>
            <p style={styles.label}>리뷰 : </p>
            <div>{product.reviews.map(review => <p key={`review-${product.id}-${review.id}`}>{review.content}</p>)}</div>
        </div>
        </div>

        <button onClick={() => productService.purchase(product).then(data => alert(data))}>
            {productService.getTotalPrice(product)}원 결제하기
        </button>
        
    </div>
}


const styles: Record<string, CSSProperties> = {
    wrapper: {
        height: '100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        width: 80
    },
    value: {
        width: 150
    },
    info: {
        width: 300,
        padding: 10,
        border: "1px solid black",
        marginBottom: 10,
    }
}