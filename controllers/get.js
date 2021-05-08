const models = require("../models");

module.exports = {
  all: async (req, res) => {
    const savings = await models.Saving.findAll();
    const periodics = await models.Periodic.findAll();
    const loans = await models.Loan.findAll();

    return res.send({ savings, periodics, loans });
  },

  savings: async (req, res) => {
    const savings = await models.Saving.findAll();

    return res.send(savings);
  },

  periodics: async (req, res) => {
    const periodics = await models.Periodic.findAll();

    return res.send(periodics);
  },

  loans: async (req, res) => {
    const loans = await models.Loan.findAll();

    return res.send(loans);
  },
};
