const Sequelize = require('sequelize');
const database = require('../db');

const owner_addressModel = database.define('owner_address',
    {
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
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    },{
        freezeTableName: true
    });

module.exports = owner_addressModel;