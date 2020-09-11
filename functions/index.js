const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ0IuAAwB03WZZWnpv476PN131JtSyoSKOSevQj2ukdJOywD7Dx1v7aqCWqHE00s8B2NBBDWzdX16Hzp0ojLf7B00mAOh3e39"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes ==> req: request, ==> res: response.
app.get("/", (req, res) => res.status(200).send("hello!"));

app.get("/hgh", (req, res) => res.status(200).send("hello, hgh!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// firebase emulatirs:start
// https://localhost:5001/challenge-4b2b2/us-central1/api
//
//
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
