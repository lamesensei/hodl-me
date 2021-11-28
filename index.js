import express from "express";
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

app.get("/user/:userId/balances", (req, res) => {
  const user = userBalances[req.params.userId];
  if (user) {
    res.json(user);
  }
  res.send("No user");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
