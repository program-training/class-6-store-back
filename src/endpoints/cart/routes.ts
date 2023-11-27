import express from "express";
import cartController from "./controllers";
import { authenticateToken } from "../../middlewares/jwt";

const cartRoute = express.Router();

cartRoute.get('/:userId', authenticateToken, cartController.getCart);

cartRoute.patch('/', authenticateToken, cartController.updateQuantity);

cartRoute.post('/:id', authenticateToken, cartController.addProduct);

cartRoute.delete('/:userId', authenticateToken, cartController.deleteCart);

cartRoute.delete('/', authenticateToken, cartController.deleteProductInCart);

export default cartRoute