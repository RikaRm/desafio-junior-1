'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const breed_id = await queryInterface.rawSelect('pet_breeds', { where: {}, limit: 1 }, ['id'])
    
    if (!breed_id) {
      const type_id = await queryInterface.rawSelect('pet_types', { where: {}, limit: 1 }, ['id'])
      await queryInterface.bulkInsert('pet_breeds', [{
        id: v4(),
        raca: "Pastor Alemão",
        type: type_id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet_breeds', null, {});
  }
};
