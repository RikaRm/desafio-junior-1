const Sequelize = require('sequelize');
const database = require('../db');

const pet_typeModel = database.define('pet_types',
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
          },
          tipo: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
});

module.exports = pet_typeModel;