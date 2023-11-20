import { Request, Response } from "express";
import usersServices from "./services";
import { UserLogin, UserRegister } from "../../interfaces/users";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = usersServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(400).send(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user: UserLogin = req.body;
    const userChecked = await usersServices.login(user);
    if (!userChecked) {
      return res.sendStatus(500).send("Something went wrong!")
    }
    console.log("login successful");
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
