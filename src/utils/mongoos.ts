import { Document, Schema, Model, SchemaTypes } from "mongoose";
import mongoose from "mongoose";


interface Product {
  productId: string;
  
}


export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/stores_db?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}