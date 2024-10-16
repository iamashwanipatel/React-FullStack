import { Router } from "express";
const router = Router();


import { isSignedIn, isAuthenticated } from "../controllers/auth.js";
import { getUserById } from "../controllers/user.js";
import { getToken, processPayment } from "../controllers/paymentb.js";
router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);


router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);


router.param("userId", getUserById);


export default router;
