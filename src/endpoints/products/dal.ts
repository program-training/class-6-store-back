import { ProductModel } from "../../db/products";
import { Product } from "./interface";

const getAllProducts = async (query: Record<string, unknown>) => {
  try {
    const result = await ProductModel.find();
    let products: Product[] = [];
    if (Object.keys(query).length > 0) {
      for (let key in query) {
        if (result.length) {
          products = result.filter((product: Product) => {
            return product[key] == query[key];
          });
        }
      }
      return products;
    }
    return result;
    // const products = results.map((document) => document.toObject());
    // return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id: number) => {
  try {
    const result = await ProductModel.findOne({ id: id });
    return result;
    // const product = result?.toObject();
    // return product;
  } catch (error) {
    throw error;
  }
};

const upsert = async (body: any) => {
  try {
    if(Array.isArray(body))
    for(let i = 0; i < body.length; i++){
        const result = await ProductModel.findOne({ id: body[i].id });
        // .................
    }
    return "cool";
  } catch (err) {
    throw err;
  }
};

const productsDal = {
  getAllProducts,
  getProductById,
  upsert,
};

export default productsDal;
