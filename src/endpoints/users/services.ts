import { UserRegisterModel } from "../../db/users";
import { UserLogin } from "../../interfaces/users";
import { comparePassword, generateUserPassword } from "../../utils/bcrypt";
import { registerSchema, loginSchema } from "../../utils/joy";

const getAllUsers = () => {
  console.log("success!");
};

const login = async (user: UserLogin) => {
  try {
    const { error } = loginSchema.validate(user);
    if (error) {
      console.log(error.details[0].message);
      return
    }

    const existingUser = await UserRegisterModel.findOne({ email: user.email });
    if (!existingUser) {
      console.log("User with this email does not exist!");
      return
    }

    if (!comparePassword(user.password, existingUser.password)) {
      console.log("Incorrect password");
      return
    }

    return { user: existingUser };
  } catch (error) {
    throw new Error(error as string);
  }
};


const register = async (user: UserLogin) => {
  try {
    const { error } = registerSchema.validate(user);
    if (error) {
      console.log(error.details[0].message);
      return
    }

    const exists = await UserRegisterModel.findOne({ email: user.email });
    if (exists) {
      console.log("User with this email already exists!");
      return
    }

    const hashedPassword = {...user, password: generateUserPassword(user.password)}

    const newUser = await UserRegisterModel.create(hashedPassword);

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
