import express from "express"
import usersController from "./controllers"

const route = express.Router()

route.get("/", usersController.getAllUsers)
route.post("/login", usersController.login)
// route.post("/register", usersController.register)

export default route