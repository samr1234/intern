const express = require("express");
const User = express.Router()

const {createUser,fetchUser,getUserById} = require('../controller/user')

User.route('/users').get(fetchUser)
User.route('/users').post(createUser)
User.route('/update').get(getUserById)


module.exports=User;