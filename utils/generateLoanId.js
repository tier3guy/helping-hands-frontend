function generateRandomId(length) {
  if (!length) length = 6;
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toString();
}

function generateRandomLoanId(length) {
  if (!length) length = 6;
  let result = "LP";
  return result + generateRandomId(length);
}

export default generateRandomLoanId;
