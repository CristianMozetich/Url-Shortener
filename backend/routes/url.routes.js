import { Router } from "express";
import { urlShortener, getUrlShort, customUrlShortener } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.post('/', urlShortener)
urlRouter.get('/:shortId', getUrlShort)
urlRouter.post('/', customUrlShortener)

export default urlRouter