import { getCurrencyData } from "../services/currencyService.js";

async function getExchangeCurrentcy(req, res) {
  try {
    const data = await getCurrencyData();
    const currencies = Object.keys(data.rates);
    if (currencies.length === 0) {
      res.status(500).json({
        message: "The service is currently down, please check again later.",
      });
    }
    res.json(currencies);
  } catch (err) {
    res.status(500).json({
      message: "The service is currently down, please check again later.",
    });
  }
}

async function getExchangeConvert(req, res) {
  try {
    const data = await getCurrencyData();
    const { value, currency, to_currency } = req.query;

    if (!value || !currency || !to_currency) {
      return res.status(400).json({
        message:
          "Please provide value, currency, and to_currency query parameters.",
      });
    }

    const rate = data.rates[to_currency] / data.rates[currency];
    const convertedValue = (value * rate).toFixed(2);

    res.json({
      value,
      currency,
      to_currency,
      convertedValue,
    });
  } catch (err) {
    res.status(500).json({
      message: "The service is currently down, please check again later.",
    });
  }
}

export { getExchangeCurrentcy, getExchangeConvert };
