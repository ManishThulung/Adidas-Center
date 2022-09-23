import express from "express";
import { placeOrder } from "../controllers/orderControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/createorder", isAuthenticated, placeOrder);

export default router;
