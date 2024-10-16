import { Router } from "express";
const router = Router();


import { getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories } from "../controllers/product.js";
import { isSignedIn, isAuthenticated, isAdmin } from "../controllers/auth.js";
import { getUserById } from "../controllers/user.js";


//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);


//all of actual routes
//create route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);


// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);


//delete route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);


//update route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);


//listing route
router.get("/products", getAllProducts);


router.get("/products/categories", getAllUniqueCategories);


export default router;
