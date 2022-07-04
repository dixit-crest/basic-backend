const express = require("express")
const userRoutes = express.Router()
const userController = require("../controllers/userController")

userRoutes.get("/", userController.getUsers)
userRoutes.post("/", userController.addUser)
userRoutes.put("/:userId", userController.updateUsers)
userRoutes.delete("/:userId", userController.deleteUsers)

module.exports = userRoutes