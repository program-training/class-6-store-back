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
    error = error as string
    res.status(500).json({ error: error});
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(Number(id));
    res.status(200).json(product);
  } catch (error) {
    error = error as string
    res.status(500).json({ error: error});
  }
};

const updateOrInsert = async (req: Request, res: Response) => {
  try {
    const body = req.body ? req.body : [];
    console.log(req.body); 
    
    const product = await productService.updateOrInsert(body);
    res.status(200).json(product);
  } catch (error) {
    error = error as string
    res.status(500).json({ error: error});
  }
};

const productController = {
  getAllProducts,
  getProductById,
  updateOrInsert,
};
export default productController;
