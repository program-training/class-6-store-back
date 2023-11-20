import { UserLoginModel } from "../../db/users";
import { UserLogin } from "../../interfaces/users";
import { registerSchema } from "../../utils/joy";

const getAllUsers = () => {
  console.log("success!");
};

const login = (user: UserLogin) => {};

const register = async (user: UserLogin) => {
  try {
    const { error } = registerSchema.validate(user);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const exists = await UserLoginModel.findOne({ email: user.email });
    if (exists) {
      throw new Error("User with this email already exists!");
    }

    const newUser = await UserLoginModel.create(user);

    return { user: newUser };
  } catch (error) {
    throw new Error(error as string);
  }
};

export default {
  getAllUsers,
  login,
  register,
};
