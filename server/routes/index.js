const routes = require('express').Router()
const UserController = require('../controller/usercontroller')
const { userAuthentication } = require("../middlewares/auth.js")

routes.get("/",userAuthentication, (req,res,next) => {
  res.status(200).json({message:"Welcome To The App"})
})

routes.post("/login",UserController.login)

routes.post("/register",UserController.register)


module.exports = routes
