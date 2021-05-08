const models = require("../models");
const Joi = require("joi");

module.exports = {
  savings: async (req, res) => {
    const { id, name, rate, minimum } = req.body;

    const schema = Joi.object({
      id: Joi.number().required(),
      name: Joi.string().optional(),
      rate: Joi.number().optional(),
      minimum: Joi.number().optional(),
    });

    const { error } = schema.validate({ id, name, rate, minimum });
    if (error) return res.status(400).send(error.details[0].message);

    let account = await models.Saving.findOne({
      where: {
        id,
      },
    });

    if (name) account.name = name;
    if (rate) account.rate = rate;
    if (minimum) account.minimum = minimum;

    account.save();

    return res.send(account);
  },

  /*






  */
  periodics: async (req, res) => {
    const { id, period, quaterly, yearly, maturity } = req.body;

    const schema = Joi.object({
      id: Joi.number().required(),
      period: Joi.string().optional(),
      quaterly: Joi.number().optional(),
      yearly: Joi.number().optional(),
      maturity: Joi.number().optional(),
    });

    const { error } = schema.validate({
      id,
      period,
      quaterly,
      yearly,
      maturity,
    });
    if (error) return res.status(400).send(error.details[0].message);

    let account = await models.Periodic.findOne({
      where: {
        id,
      },
    });

    if (period) account.period = period;
    if (quaterly) account.quaterly = quaterly;
    if (yearly) account.yearly = yearly;
    if (maturity) account.maturity = maturity;

    account.save();

    return res.send(account);
  },

  /*






  */
  loans: async (req, res) => {
    const { id, type, rate } = req.body;

    const schema = Joi.object({
      id: Joi.number().required(),
      type: Joi.string().optional(),
      rate: Joi.number().optional(),
    });

    const { error } = schema.validate({
      id,
      type,
      rate,
    });

    if (error) return res.status(400).send(error.details[0].message);

    let account = await models.Loan.findOne({
      where: {
        id,
      },
    });

    if (type) account.type = type;
    if (rate) account.rate = rate;

    account.save();

    return res.send(account);
  },
};
