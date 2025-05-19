import express from "express";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../Controllers/UserActivityController.js";

const router = express.Router();

router.post("/create", AuthMiddleware, createUser);
router.get("/getAll", AuthMiddleware, getAllUser);
router.get("/getById/:id", AuthMiddleware, getUserById);
router.put("/update/:id", AuthMiddleware, updateUser);
router.delete("/delete/:id", AuthMiddleware, deleteUser);

export default router;
