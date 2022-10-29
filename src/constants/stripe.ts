import Stripe from "stripe";

const API_KEY = process.env.NEXT_API_SECRET_KEY as string;
const stripeApi = new Stripe(API_KEY, {
  apiVersion: "2022-08-01",
});

export default stripeApi;