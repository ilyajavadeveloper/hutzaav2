import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, price } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'ils',
            product_data: {
              name,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://your-site.com/success',
      cancel_url: 'https://your-site.com/cancel',
    })

    res.status(200).json({ url: session.url })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Ошибка создания сессии оплаты' })
  }
}
