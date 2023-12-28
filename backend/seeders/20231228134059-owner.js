'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const owner_id = await queryInterface.rawSelect('owners', { where: {}, limit: 1 }, ['id'])
    if (!owner_id) {
      const address_id = await queryInterface.rawSelect('owner_address', { where: {}, limit: 1 }, ['id'])
      await queryInterface.bulkInsert('owners', [{
        id: v4(),
        nome: "ricardo macedo",
        telefone: "8699999999",
        endereco: address_id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owners', null, {});
  }
};
