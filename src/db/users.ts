import mongoose from "mongoose";
import { UserLogin } from "../interfaces/users";

interface UserDocument extends UserLogin, Document {}

const UserLoginSchema = new mongoose.Schema<UserDocument>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserLoginModel = mongoose.model<UserDocument>("User", UserLoginSchema);

export const getUsers = () => UserLoginModel.find({});
export const getUserByEmail = (email: string) => UserLoginModel.findOne({ email });
export const getUserByPassword = (password: string) =>
  UserLoginModel.findOne({ password });
export const getUserById = (id: string) => UserLoginModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserLoginModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserLoginModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserLoginModel.findByIdAndUpdate(id, values);
