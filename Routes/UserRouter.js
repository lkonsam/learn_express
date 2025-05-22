import express from "express";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../Controllers/UserActivityController.js";

const UserRouter = express.Router();

UserRouter.post("/create", AuthMiddleware, createUser);
UserRouter.get("/getAll", AuthMiddleware, getAllUser);
UserRouter.get("/getById/:id", AuthMiddleware, getUserById);
UserRouter.put("/update/:id", AuthMiddleware, updateUser);
UserRouter.delete("/delete/:id", AuthMiddleware, deleteUser);

export default UserRouter;
