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
      "Savings",
      [
        {
          name: "General Saving",
          rate: 3.5,
          minimum: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Special Saving",
          rate: 6,
          minimum: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smart Trust Super Saving",
          rate: 5,
          minimum: 25000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business Saving",
          rate: 4,
          minimum: 15000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smart Trust Saving",
          rate: 4,
          minimum: 10000,
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
    await queryInterface.bulkDelete("Savings", null, {});
  },
};
