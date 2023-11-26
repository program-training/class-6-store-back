import { Request, Response } from "express";
import usersServices from "./services";
import { UserChecked, UserLogin, UserRegister } from "../../interfaces/users";
import { generateToken } from "../../utils/token";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(400).send(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user: UserLogin = req.body;
    let userChecked = await usersServices.login(user);
    if (!userChecked) {
      return res.sendStatus(500).send("Something went wrong!")
    }
    if (typeof userChecked === "string") {
      return res.status(300).send("some error")
    }
    console.log("login successful");

    userChecked = userChecked as unknown as UserChecked

    // const token = generateToken(userChecked)
    // userChecked.token = token

    res.status(200).json(userChecked);
  } catch (error) {
    console.log(error);
    res.status(400).send(error as string);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const user:UserRegister = req.body;  
    const userChecked = await usersServices.register(user)
    if (!userChecked) {
      return res.sendStatus(500).send('Something went wrong')
    }
    console.log("register successful");
    if (typeof userChecked === "string") {
      return res.status(300).send("some error")
    }
    res.status(200).json(userChecked);
  } catch (error) {
    console.log(error);
    res.sendStatus(400).send(error);
  }
};

export default {
  getAllUsers,
  login,
  register
};
