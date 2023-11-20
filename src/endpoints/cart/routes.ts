import express from "express";
import cartController from "./controllers";

const cartRoute = express.Router();

cartRoute.get('/', cartController.getAllCart);

cartRoute.patch('/', cartController.updateQuantity);

cartRoute.post('/:id', cartController.updateQuantity);

cartRoute.delete('/', cartController.deleteAllCart);
cartRoute.delete('/', cartController.deleteProductInCart);

export default cartRoute