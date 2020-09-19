const { User } = require("../models")
const { checkPassword } = require("../helpers/bcrypt.js")
const { encode } = require('../helpers/jsonwebtoken.js');


class UserController {
    static register(req,res,next) {
      User.create({
        email: req.body.email,
        password: req.body.password
      })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
    }

    static login(req,res,next){
      User.findOne({
        where:{
          email: req.body.email
        }
      })
      .then((data)=>{
        if(!data){
          const errorMessage = {
            name: "NotFoundError",
            message: "Email not Found",
            statusCode: 404
          }
          throw(errorMessage)
        }
        if(checkPassword(req.body.password, data.password)){
          const access_token = encode({id: data.id, email:data.email})
          res.status(200).json({accessToken: access_token})
        }
        else{
          const errorMessage = {
            name: "ValidationError",
            message: "Password incorrect",
            statusCode:400
          }
          throw(errorMessage)
        }
      })
      .catch((err)=>{
        next(err)
      })
    }
    static getData(req,res,next){
      res.status(200).json({message:"Welcome To The App"})
    }
}


module.exports = UserController
