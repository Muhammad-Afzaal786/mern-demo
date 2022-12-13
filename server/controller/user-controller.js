import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/token.js";
dotenv.config();

export const singupUser = async (request, response) => {
  const hashPassword = await bcrypt.hash(request.body.password, 10);
  const user = {
    name: request.body.name,
    username: request.body.username,
    password: hashPassword,
  };

  const newUser = new User(user);
  try {
  
    await newUser.save();

    return response.status(200).json({ msg: "Signup Successful" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signup user" });
  }
};

export const loginUser = async (request, response) => {
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: "Username does not match" });
  }
  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );
      const newToken = new Token({ token: refreshToken });
      await newToken.save();
      return response.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
     
    } else {
      return response.status(400).json({ msg: " Password does not match" });
    }
  } catch (error) {
    return response.status(500).json({ msg: "Error while login user" });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  console.log(req.params.id)
  try {
    //const users = await User.findOne({_id : req.params.id });
  //   second method
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({message : error.message});
  }
};
export const editUserData = async (req, res) => {
  const user = req.body;

  const editUsers = new User(user);

  try {
    await User.updateOne({_id : req.params.id}, editUsers)
    res.status(201).json(editUsers);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error, "Add user Error");
  }
};

export const deleteUser =async (req, res) =>{
  try {
      await User.deleteOne({_id : req.params.id})
      res.status(200).json({message : "User Deleted Successfully"});
    } catch (error) {
      res.status(409).json({ message: error.message });
      console.log(error, "Add user Error");
    }
} 