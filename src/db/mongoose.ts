import mongoose from "mongoose";
import { Document, Schema, Model, SchemaTypes } from "mongoose";
import {Product, Attributes} from '../endpoints/products/interface'

const attributeSchema: Schema<Attributes> = new Schema<Attributes>({
  Description: { type: String, required: true },
  Details: { type: Schema.Types.Mixed, required: true },
});

const productSchema: Schema<Product> = new Schema<Product>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  attribute: { type: [attributeSchema], required: true },
  count: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/stores_db?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
// const url = process.env.MONGODB_URI;

// export const connectToDatabase = async () => {
//   try {
//     if (!url) {
//       throw new Error('MongoDB URL is not defined');
//     }
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// };

export const ProductModel: Model<Product> = mongoose.model<Product>(
  "Product",
  productSchema
);
