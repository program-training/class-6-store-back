import productsDal from "./dal";

const getAllProducts = async (query:Record<string, unknown>) => {
  try {
    const products = await productsDal.getAllProducts(query);
    if (!products.length) return "products not found";
    return products;
  } catch (error) {
    throw error;
  }
};


const getProductById = async (id: number) => {
  try {
    const product = await productsDal.getProductById(id);
    if (!product) return "product not found";
    return product;
  } catch (error) {
    throw error;
  }
};

const upsert = async (body:any) => {
    try {
      const product = await productsDal.upsert(body);
      if (!product) return "product not found";
      return product;
    } catch (error) {
      throw error;
    }
  };
  

const productService = {
  getAllProducts,
  getProductById,
  upsert,
};

export default productService;
