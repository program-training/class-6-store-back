import { Request, Response } from "express";
import usersServices from "./services";

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
    const user = req.body;
    const checkedUser = usersServices.login(user)
  } catch (error) {
    console.log(error);
    res.sendStatus(400).send(error);
  }
};

export default {
  getAllUsers,
  login
};
