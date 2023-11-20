import express from "express"
import usersRoute from "../endpoints/users/routes"


const route = express.Router()

route.use("/users", usersRoute)
// route.use("/cart", )
// route.use("products", )

export default route
