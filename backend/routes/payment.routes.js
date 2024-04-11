import{ Router } from "express";
import { createSession } from "../controllers/payment.controllers.js";

const paymentRouter = Router()

paymentRouter.post('/checkout-session', createSession)
paymentRouter.get('/success')
paymentRouter.get('/cancel')

export default paymentRouter