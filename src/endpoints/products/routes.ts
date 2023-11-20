import express from 'express'
import productController from './controllers'

const productsRouter = express.Router()

productsRouter.get('/',productController.getAllProducts)

productsRouter.get('/:id', productController.getProductById);

productsRouter.post('/',productController.upsert)

export default productsRouter