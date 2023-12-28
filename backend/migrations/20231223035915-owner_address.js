'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('owner_address', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cep: {
        type: Sequelize.CHAR(8),
        allowNull: false
      },
      bairro: Sequelize.STRING,
      rua: Sequelize.STRING,
      casa: Sequelize.STRING,
      complemento: Sequelize.STRING,
      estado:Sequelize.STRING,
      cidade:Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('owner_address')
  }
}