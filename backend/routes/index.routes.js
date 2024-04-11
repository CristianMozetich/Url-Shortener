import { Router } from "express";
import urlController from "./url.routes.js";
import sessionRouter from "./sessions.routes.js";
import paymentRouter from "./payment.routes.js";

const router = Router();

router.use("/", urlController);
router.use("/sessions", sessionRouter);
router.use("/payment", paymentRouter);

export default router