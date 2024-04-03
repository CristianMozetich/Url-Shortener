import { register } from "../controllers/sessions.controlers.js";
import { Router } from "express"

const sessionRouter = Router();

sessionRouter.post('/register', register);

export default sessionRouter