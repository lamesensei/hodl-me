import axios from "axios";
import currency from "currency.js";

const getLatestPrice = (priceData) => priceData?.data?.last;

const getEthPrices = async () => {
  try {
    return await axios.get("https://www.bitstamp.net/api/v2/ticker/ethusd/");
  } catch (error) {
    console.error(error);
  }
};

const getBtcPrices = async () => {
  try {
    return await axios.get("https://www.bitstamp.net/api/v2/ticker/btcusd/");
  } catch (error) {
    console.error(error);
  }
};

export const calculateBalance = async (userBalance) => {
  let balance = 0;

  if (userBalance.ETH) {
    const ethData = await getEthPrices();
    balance += getLatestPrice(ethData) * userBalance.ETH;
  }

  if (userBalance.BTC) {
    const btcData = await getBtcPrices();
    balance += getLatestPrice(btcData) * userBalance.BTC;
  }

  return currency(balance).format();
};
