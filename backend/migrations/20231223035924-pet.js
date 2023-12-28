'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('pets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      nome:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      idade:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      raca:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'pet_breeds',
          key: 'id'
        }
      },
      dono: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'owners',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('pets')
  }
}