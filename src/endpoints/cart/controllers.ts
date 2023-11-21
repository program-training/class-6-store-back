import { Request, Response } from "express";
import cartService from './services'
import { Cart, UpdateQuantity, ProductToDelete, AddToCart } from "./interfaces";

type Result = Cart | null | string;

const getCart = async (req: Request, res: Response) => {
    try {
        const userId:string = req.params.userId;
        if (!userId) return 'no user specified'

        const cart: Result = await cartService.getCart(userId);

      if (!cart) return res.send({ massage: 'cart of this user not found' });
      return cart;
    } catch (error) {
      return error
    }
  };
  
  const updateQuantity = async (req: Request, res: Response) => {
    try {
        const userId:string = req.body.userId;
        if (!userId) return 'no user specified'

        const ProductOfCart = req.body

        const cart: Result = await cartService.updateQuantity(ProductOfCart)

        if (!cart) return res.send({ massage: 'cart of this user not found' });
      return res.status(200).send('quantity update successfully' );
    } catch (error) {
      return error
    }
  };
  
const addProduct = async (req: Request, res: Response) => {
    try {
        const cart = req.body
      const cartToAdd = await cartService.addProduct(cart)
      if (!cartToAdd) return res.send({ massage: 'cart of this user not found'})
      return res.send('product added successfully').status(200);
    } catch (error) {
      throw error
    }
  };
  
  const deleteCart = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId
      const cartToDelete = await cartService.deleteCart(userId)

      if (!cartToDelete) return res.send('cart of this user not found')

      return res.status(201).send({"massage": `${cartToDelete}`});
    } catch (error) {
      return error
    }
  };
  
  const deleteProductInCart = async (req: Request, res: Response) => {
    try {
      const productToDelete: ProductToDelete = req.body

      if (!productToDelete) return res.send('cart of this user not found')
      return res.status(201).send(productToDelete);
    } catch (error) {
      return error
    }
  };

  const cartController = {
    getCart,
    updateQuantity,
    addProduct,
    deleteCart,
    deleteProductInCart
  }
  
  export default cartController 