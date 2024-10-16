import { Router } from "express";
const router = Router();


import { getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory } from "../controllers/category.js";
import { isSignedIn, isAdmin, isAuthenticated } from "../controllers/auth.js";
import { getUserById } from "../controllers/user.js";


//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);


//actual routers goes here


//create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);


//read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);


//update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);


//delete


router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);


export default router;
