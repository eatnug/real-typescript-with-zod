import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import productController from './controller/productController';

const app: Express = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.get(productController.getProduct.endpoint, productController.getProduct.handler)
app.post(productController.purchase.endpoint, productController.purchase.handler)

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});


