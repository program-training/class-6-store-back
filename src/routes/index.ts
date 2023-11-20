import express from "express"
import usersRoute from "../endpoints/users/routes"
import cartRoute from "../endpoints/cart/routes"


const route = express.Router()

route.use("/users", usersRoute)
route.use("/cart", cartRoute)
// route.use("/products", )

export default route
