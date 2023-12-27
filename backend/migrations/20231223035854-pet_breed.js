'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('pet_breeds', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'pet_types',
          key: 'id'
        }
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('pet_breeds')
  }
}