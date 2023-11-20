import cartDal from './dal'


const getAllCart = async (userId: string) => {
    try {
        const cart = await cartDal.getAllCart(userId);
      if (!cart) return 'cart of this user not found' ;
      return cart;
    } catch (error) {
      return error
    }
  };
  
  const updateQuantity = async () => {
    
    
    try {
      
      return 
    } catch (error) {
      return error
    }
  };
  
const addProduct = async (req: Request, res: Response) => {
    try {
      
      return 
    } catch (error) {
      throw error
    }
  };
  
  const deleteAllCart = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
      
      return 
    } catch (error) {
      return error
    }
  };
  
  const deleteProductInCart = async () => {
    
    
    try {
      
      return 
    } catch (error) {
      return error
    }
  };
  const cartService = {
    getAllCart,
    updateQuantity,
    addProduct,
    deleteAllCart,
    deleteProductInCart
  }
  
  export default cartService 