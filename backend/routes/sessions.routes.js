import { register, login, logout } from "../controllers/sessions.controlers.js";
import { Router } from "express"
import passport from "passport";

const sessionRouter = Router();

sessionRouter.post('/register', passport.authenticate('register'), register);
sessionRouter.post('/login', passport.authenticate('login'), login);
sessionRouter.get('/logout', logout);

export default sessionRouter