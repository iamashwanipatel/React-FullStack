import { Router } from "express";
const router = Router();


import { getUserById, getUser, updateUser, userPurchaseList } from "../controllers/user.js";
import { isSignedIn, isAuthenticated, isAdmin } from "../controllers/auth.js";


router.param("userId", getUserById);


router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);


router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);
export default router;



