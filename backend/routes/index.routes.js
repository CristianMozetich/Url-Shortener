import { Router } from "express";
import urlController from "./url.routes.js";
import sessionRouter from "./sessions.routes.js";

const router = Router();

router.use("/", urlController);
router.use("/sessions", sessionRouter);

export default router