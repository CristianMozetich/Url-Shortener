import { Router } from "express";
import { urlShortener, getUrlShort, customUrlShortener, getUrls, deleteUrl } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.post('/', urlShortener)
urlRouter.get('/:shortId', getUrlShort)
urlRouter.post('/custom', customUrlShortener)
urlRouter.get('/urls/:userId', getUrls)
urlRouter.delete('/urls/:userId/:id', deleteUrl)

export default urlRouter