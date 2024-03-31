import { Router } from "express";
import { urlShortener, getUrlShort } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.post('/', urlShortener)
urlRouter.get('/:shortId', getUrlShort)

export default urlRouter