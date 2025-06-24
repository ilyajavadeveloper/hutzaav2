// /api/checkout.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Убедись, что ключ определён в Vercel Settings

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end("Method Not Allowed");
  }

  const { name, price } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'ils',
            product_data: { name },
            unit_amount: price, // шекель * 100
          },
          quantity: 1,
        },
      ],
      success_url: 'https://твой-домен.vercel.app/success',
      cancel_url: 'https://твой-домен.vercel.app/cancel',
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
