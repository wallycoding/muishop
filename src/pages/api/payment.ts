import { NextApiRequest, NextApiResponse } from "next";
import stripeApi from "../../constants/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { host } = req.headers;
  const { price_id } = req.body;
  const session = await stripeApi.checkout.sessions.create({
    customer_email: "test@stripe.com",
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://${host}/`,
    cancel_url: `http://${host}/shop`,
  });

  res.json(session);
}
