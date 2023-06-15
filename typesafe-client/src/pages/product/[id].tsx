import ProductDetail from "@/ui/product/ProductDetail";
import { useRouter } from "next/router";

interface ProductDetailPageQuery {
    id?: string;
}

export default function ProductDetailPage(){
    const query = useRouter().query as ProductDetailPageQuery;

    if (!query.id) {
        return <>loading page...</>
    }

    return  <div style={{width:'100%', height:'100%', backgroundColor:'white'}}>
        <ProductDetail id={parseInt(query.id)} />
    </div>
}