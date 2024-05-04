import { Router } from "express";
import { urlShortener, getUrlShort, customUrlShortener, getUrls } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.post('/', urlShortener)
urlRouter.get('/:shortId', getUrlShort)
urlRouter.post('/custom', customUrlShortener)
urlRouter.get('/urls', getUrls)

export default urlRouter