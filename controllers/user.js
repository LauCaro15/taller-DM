const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("../utils/jwt");


// GET ME
const getMe = async (req, res) => {
  try {   
    const user = await User.findById(req.user.user_id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}


//POST
const register = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  
  if ( email != null ) {

      const crypt_password = await bcrypt.genSalt(10);
      const final_password = await bcrypt.hash(password, crypt_password);

      const new_user = await User({
          name,
          lastname,
          email: email.toLowerCase(),
          password: final_password,
          // address,
          rol: "guess"
      });
      console.log("Usuario creado:" + new_user);
      const userDB = await new_user.save();
      res.status(201).json(userDB)
  }else {
      console.log("Faltan campos requeridos");
  }
};

//LOGIN

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      throw new Error("El email y la contraseña son obligatorios");
      
    }
    const emailLowerCase = email.toLowerCase();
    const userStore = await User.findOne({ email: emailLowerCase }).exec();
    if (!userStore) {
      throw new Error("El usuario no existe");
    }
    const check = await bcrypt.compare(password, userStore.password);
    if (!check) {
      throw new Error("Contraseña incorrecta");
    }
    if (!userStore.active) {
      throw new Error("Usuario no autorizado o no activo");
    }
    res.status(200).send({
      access: jwt.createAccessToken(userStore),
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log();
  }
}; 

//GET ONE
const getUserById =  async (req, res) => {
    const { userId } = req.params;
    try {
      console.log(userId);
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
};

//GET ALL
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) { 
        res.status(400).json(err);  
      }
};

//PUT
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
          { _id: req.params.userId },
          { $set: { ...req.body } }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(400).json(err);
      }
};

// router.patch("/:userId", async (req, res) => {
//     try{
//       const {userId} = req.params.userId;
//       const {name, lastname, email, password, address, active, rol} = req.body;
//       const crypt_password = await bcrypt.genSalt(10);
//       const final_password = await bcrypt.hash(password, crypt_password);
//       const updatedUser = await User.updateOne(
//         {_id: userId}, 
//         {$set: {name, lastname, email, password: final_password, address, active, rol}});
//       res.status(200).json(updatedUser);
//     } catch (err) {
//       console.log(err);
//       res.status(400).json(err);
//     }
// });

//DELETE
const deleteUser = async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.userId });
        res.status(200).json(removedUser);
      } catch (err) {
        res.status(400).json(err);
      }
};


module.exports = {
    register,
    login,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    getMe,
}