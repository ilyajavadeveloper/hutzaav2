// /api/checkout.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'ils',
            product_data: {
              name: body.name,
            },
            unit_amount: body.price, // цена в агоротах (шекель * 100)
          },
          quantity: 1,
        },
      ],
      success_url: 'https://твой-сайт.vercel.app/success',
      cancel_url: 'https://твой-сайт.vercel.app/cancel',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Stripe error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
