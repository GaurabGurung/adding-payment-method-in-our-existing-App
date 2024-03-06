const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OGMJWKUEZNEGbibVI1jBRY8eqG4Da8Ni3cIn8napcr358nGXxteRMGnKoqDJQCuQjw1tCeQw6FFYf8iJRSTI8KW00X3cT1spA"
);

app.use(express.json());
app.use(cors());

//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "aud",
      product_data: {
        name: product.name,
      },
      unit_amount: parseInt(product.price, 10) * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });

  // console.log(products);
});

app.listen(8000, () => {
  console.log("server started");
});
