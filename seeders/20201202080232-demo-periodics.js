"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Periodics",
      [
        {
          period: "3 months",
          quaterly: 0.0,
          yearly: 0.0,
          maturity: 8.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          period: "6 months",
          quaterly: 8.0,
          yearly: 0.0,
          maturity: 9.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          period: "1 year",
          quaterly: 9.0,
          yearly: 0.0,
          maturity: 9.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Periodics", null, {});
  },
};
