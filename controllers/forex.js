const axios = require("axios");

module.exports = async () => {
  let rates = undefined;

  try {
    const { data } = await axios.get(
      "http://data.fixer.io/api/latest?access_key=238479789966749fa067ae3712ed45b0&format=1"
    );

    rates = data.rates;

    /**
     *
     *
     *
     *
     */
  } catch (error) {
    /**
     *
     *
     *
     */
    return {
      error,
      rates: [],
    };
  }

  return {
    error: false,
    rates,
  };
};
