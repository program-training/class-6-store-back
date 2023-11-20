import { Request, Response } from "express";
import cartService from './services'
import { Cart } from '../../db/interfaces'

const getAllCart = async (req: Request, res: Response) => {
    try {
        const userId:string = req.params.userId;
        if (!userId) return 'no user specified'
        const cart: Cart = await cartService.getAllCart(userId);
      if (!cart) return res.send({ massage: 'cart of this user not found' });
      return cart;
    } catch (error) {
      return error
    }
  };
  
  const updateQuantity = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
      
      return res.status(201).send({"massage": `${}`});
    } catch (error) {
      return error
    }
  };
  
const addProduct = async (req: Request, res: Response) => {
    try {
      
      return res.send();
    } catch (error) {
      throw error
    }
  };
  
  const deleteAllCart = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
      
      return res.status(201).send({"massage": `${}`});
    } catch (error) {
      return error
    }
  };
  
  const deleteProductInCart = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
      
      return res.status(201).send({"massage": `${}`});
    } catch (error) {
      return error
    }
  };
  const cartController = {
    getAllCart,
    updateQuantity,
    addProduct,
    deleteAllCart,
    deleteProductInCart
  }
  
  export default cartController 