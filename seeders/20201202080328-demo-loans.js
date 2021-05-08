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
      "Loans",
      [
        {
          type: "Business Loan",
          rate: 16,
          description:
            "A business loan is a loan specifically intended for business purposes. As with all loans, it involves the creation of a debt, which will be repaid with added interest. We provide loans to business, whether it's a startup or an established one.",
          image: "business.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Personal Loan",
          rate: 16,
          description:
            "Sometimes you just need a little extra help to achieve your goals or to cover unexpected expenses. So we provide personal loans to help people achieve theri goals.",
          image: "personalLoans.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Saving Loan",
          rate: 16,
          description:
            "A set payment amount gets put into a secured account. You then make affordable payments on a set schedule toward this amount. Your regular, on-time payments get reported to the credit bureau, building your credit score with each month that goes by, while you grow your savings you can then use later.",
          image: "saving.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Hire Purchase Loan",
          rate: 16,
          description:
            "Hire purchase is a way to finance buying a new or used car. You (usually) pay a deposit and pay off the value of the car in monthly instalments, with the loan secured against the car. This means you don't own the vehicle until the last payment is made.",
          image: "hire.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Collateral Loan",
          rate: 16,
          description:
            "A collateral loan is secured loan that allows the borrower to pledge an asset for availing a loan. For this type of loan, the loan amount depends on the value of the collateral. This type of loan is relatively risk-free for the lender, as he has the option to liquidate the asset if in case the borrower defaults. As a result, borrowers can avail a higher loan amount at a lower interest rate than unsecured loans.",
          image: "collateral.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Loan Against Periodic Deposits",
          rate: 16,
          description:
            "Periodic deposit is the investment made in form of equal deposits over a time period regularly. Each deposit recurs after a time interval. Such an investment is made to achieve a pre-planned financial objective and/or when the capital to invest is less. Loan upto 90% is given against periodic deposit amount.",
          image: "periodic.jpg",
          link: "/tools/ratefees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Bhawan Nirman Loan",
          rate: 2,
          description:
            "A construction loan is a short-term loan used to finance the building of a home or another real estate project. The builder or home buyer takes out a construction loan to cover the costs of the project before obtaining long-term funding.",
          image: "bhawan.jpg",
          link: "/tools/ratefees",
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
    await queryInterface.bulkDelete("Loans", null, {});
  },
};
