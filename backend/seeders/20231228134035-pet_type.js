'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const type_id = await queryInterface.rawSelect('pet_types', { where: {}, limit: 1 }, ['id'])
    if(!type_id){
      await queryInterface.bulkInsert('pet_types', [{
        id: v4(),
        tipo: "Cachorro",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet_types', null, {});
  }
};
