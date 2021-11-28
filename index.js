import express from "express";
import users from "./models/users.js";
import { calculateBalance } from "./helpers/price.js";

const app = express();
const port = 3000;

app.get("/user/:userId/balances", async (req, res) => {
  const userBalance = users[req.params.userId];

  if (userBalance) {
    const balances = {
      totalBalanceUsd: await calculateBalance(userBalance),
      ...userBalance,
    };

    return res.json(balances);
  }
  res.status(404);
  res.send(`No user with id ${req.params.userId}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// for testing
export default app;