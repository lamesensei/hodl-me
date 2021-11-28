import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

const userBalances = {
  "user-1": {
    BTC: "0.5",
    ETH: "2",
  },
  "user-2": {
    BTC: "0.1",
  },
  "user-3": {
    ETH: "5",
  },
};

app.get("/user/:userId/balances", async (req, res) => {
  const user = userBalances[req.params.userId];
  if (user) {
    const btcData = await axios.get(
      "https://www.bitstamp.net/api/v2/ticker/btcusd/"
    );
    const ethData = await axios.get(
      "https://www.bitstamp.net/api/v2/ticker/ethusd/"
    );
    const balances = {
      totalBalanceUsd: user.BTC * btcData.data.last + user.ETH * ethData.data.last,
      ...user,
    };

    return res.json(balances);
  }
  res.send("No user");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
