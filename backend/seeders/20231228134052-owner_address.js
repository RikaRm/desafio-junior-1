'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const address_id = await queryInterface.rawSelect('owner_address', { where: {}, limit: 1 }, ['id'])
    if (!address_id) {
      await queryInterface.bulkInsert('owner_address', [{
        id: v4(),
        cep: "78145130",
        bairro: "Ikaray",
        rua: "Rua Acre",
        estado: "MT",
        cidade: "Várzea Grande",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owner_address', null, {});
  }
};
