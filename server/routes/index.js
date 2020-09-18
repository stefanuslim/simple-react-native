const routes = require('express').Router()
const UserController = require('../controller/usercontroller')
const { userAuthentication } = require("../middlewares/auth.js")

routes.get("/",userAuthentication, (req,res,next) => {
  res.status(200).json({message:"Successfully to OnBoarding Page"})
})

routes.post("/login",UserController.login)

routes.post("/register",UserController.register)


module.exports = routes
