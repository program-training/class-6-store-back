import mongoose, { Schema, Model } from "mongoose";
import { Product, Attributes } from "../endpoints/products/interface";

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

export const ProductModel: Model<Product> = mongoose.model<Product>(
  "Product",
  productSchema
);
