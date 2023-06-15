import { Request, Response } from "express";
import productService from "../service/productService";

function getProduct(req: Request, res: Response) {
    res.send({
        data: productService.getProduct(parseInt(req.params['id']))
    })
}

function purchase(req: Request, res: Response) {
    res.send({
        data: productService.purchase(parseInt(req.params['id']), req.body.totalPrice)
    })
}

export default {
    getProduct: {
        endpoint: '/products/:id',
        handler: getProduct
    },
    purchase: {
        endpoint: '/products/:id',
        handler: purchase
    }
}
