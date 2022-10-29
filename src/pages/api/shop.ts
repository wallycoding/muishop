import { NextApiRequest, NextApiResponse } from "next";
import stripeApi from "../../constants/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const responseProducts = await stripeApi.products.list({
    active: true,
    limit: 100,
  });
  const responsePrices = await stripeApi.prices.list({
    active: true,
    limit: 100,
    currency: "brl",
  });

  const products = responseProducts.data.map((product, i) => ({
    id: product.id,
    title: product.name,
    description: product.description,
    rating: Math.random() * 6,
    image: product.images[0],
    defaultPrice: product.default_price,
    payment: {
      currency: responsePrices.data[i].currency,
      amount: Number(
        responsePrices.data[i].unit_amount_decimal.replace(
          /(\d+)(\d{2})/g,
          "$1.$2"
        )
      ),
    },
  }));
  res.status(200).json(products);
}
