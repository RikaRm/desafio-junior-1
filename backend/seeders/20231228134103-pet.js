'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const pet_id = await queryInterface.rawSelect('pets', { where: {}, limit: 1 }, ['id'])

    if (!pet_id) {
      const owner_id = await queryInterface.rawSelect('owners', { where: {}, limit: 1 }, ['id'])
      const breed_id = await queryInterface.rawSelect('pet_breeds', { where: {}, limit: 1 }, ['id'])

      await queryInterface.bulkInsert('pets', [{
        id: v4(),
        nome: "doguinho",
        idade: new Date(),
        raca: breed_id,
        dono: owner_id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pets', null, {});
  }
};
