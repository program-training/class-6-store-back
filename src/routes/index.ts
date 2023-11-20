import express from "express"
import usersRoute from "../endpoints/users/routes"
import productsRouter from "../endpoints/products/routes"
import { connectToDatabase } from "../db/mongoose"
// require('dotenv').config();

const route = express.Router()

connectToDatabase()

route.use("/users", usersRoute)
// route.use("/cart", )
route.use("/products", productsRouter)

export default route
