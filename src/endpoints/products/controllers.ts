import { Request, Response } from "express";
import productService from "./services";
import { Product } from "./interface";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const products: Product[] | string = await productService.getAllProducts(
      query
    );
    res.status(200).json(products);
  } catch (error) {
    throw error;
    // res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(Number(id));
    res.status(200).json(product);
  } catch (err) {
    throw err;
  }
};

const upsert = async (req: Request, res: Response) => {
  try {
    const body = req.body ? req.body : [];
    console.log(req.body); 
    
    const product = await productService.upsert(body);
    res.status(200).json(product);
  } catch (err) {
    throw err;
  }
};

const productController = {
  getAllProducts,
  getProductById,
  upsert,
};
export default productController;
