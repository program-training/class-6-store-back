import express from "express"
import categoriesController from "./controllers"

const route = express.Router()

route.get("/", categoriesController.getAllCategories)
route.put("/:id", categoriesController.setClick)
route.post("/", categoriesController.createCategory)

export default route