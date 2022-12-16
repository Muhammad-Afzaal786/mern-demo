import express from "express";

import {
  singupUser,
  loginUser,
  getUser,
  editUser,
  editUserData,
  deleteUser
  
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", singupUser);
router.post("/login", loginUser);
router.get("/getuser", getUser);
router.get("/:id", editUser);
router.put("/:id", editUserData);
router.delete("/:id", deleteUser);


export default router;
