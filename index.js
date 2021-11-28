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

const getLatestPrice = (priceData) => priceData.data.last;

const calculateBalance = async (userBalance) => {
  let balance = 0;

  if (userBalance.ETH) {
    const ethData = await axios.get(
      "https://www.bitstamp.net/api/v2/ticker/ethusd/"
    );

    balance += getLatestPrice(ethData) * userBalance.ETH;
  }

  if (userBalance.BTC) {
    const btcData = await axios.get(
      "https://www.bitstamp.net/api/v2/ticker/btcusd/"
    );

    balance += getLatestPrice(btcData) * userBalance.BTC;
  }

  return balance;
};

app.get("/user/:userId/balances", async (req, res) => {
  const userBalance = userBalances[req.params.userId];

  if (userBalance) {
    const balances = {
      totalBalanceUsd: await calculateBalance(userBalance),
      ...userBalance,
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
