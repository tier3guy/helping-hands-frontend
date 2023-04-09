function convertToUSD(inr) {
  // 1 USD = 81.84 INR
  // 1 INR = 0.012 USD

  const EXCHANGE_RATE = 1 / 81.84;
  const usd = Math.floor(inr * EXCHANGE_RATE);

  return usd;
}

export default convertToUSD;
