const routes = require('express').Router()
const UserController = require('../controller/usercontroller')
const { userAuthentication } = require("../middlewares/auth.js")

routes.get("/",userAuthentication, UserController.getData)

routes.post("/login",UserController.login)

routes.post("/register",UserController.register)


module.exports = routes
