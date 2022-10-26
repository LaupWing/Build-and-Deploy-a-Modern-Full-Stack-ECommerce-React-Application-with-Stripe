import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
   if (req.method === 'POST') {
      try {
         // Create Checkout Sessions from body params.
         const session = await stripe.checkout.sessions.create({
            line_items: req.body.map(item=>{
               const img = item.image[0].assest._ref
               const newImage = img
                  .replace("image-", "https://cdn.sanity.io/images/8u1vrmu6/production")
                  .replace("-webp", "webp")

               return {
                  price_data: {
                     currency: "eur",
                     product_data: {
                        name: item.name,
                        images: [newImage]
                     },
                     unit_amount: item.price * 100
                  },
                  adjustable_quantity: {
                     enabled: true,
                     minimum: 1
                  },
                  quantity: item.quantity
               }
            }),
            mode: 'payment',
            submit_type: "pay",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options:[
               {
                  shipping_rate: "shr_1LwhrQItjhXEqsOU85bsxDsm"
               },
               {
                  shipping_rate: "shr_1LwhrzItjhXEqsOUJYFxALBw"
               },
            ],
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
         });
         res.status(200).json(session)
      } catch (err) {
         res.status(err.statusCode || 500).json(err.message);
      }
   } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
   }
}