import { Router } from "express";
import { urlShortener, getUrlShort } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.post('/url', urlShortener)
urlRouter.get('/url/:shortId', getUrlShort)

export default urlRouter