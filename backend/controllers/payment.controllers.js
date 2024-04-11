import Stripe from "stripe";
import 'dotenv/config';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Short Link'
                    },
                    currency: 'EUR',
                    unit_amount: 200 
                    },
                    quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3001/payment/success',
        cancel_url: 'http://localhost:3001/payment/cancel'
    })
    return res.json(session)
}