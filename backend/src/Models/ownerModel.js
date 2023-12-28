const Sequelize = require('sequelize');
const database = require('../db');
const address = require('./owner_addressModel')

const ownerModel = database.define('owner',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        endereco: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'owner_address',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });

ownerModel.belongsTo( address, {
    constraint:true,
    foreignKey: 'endereco'
})

module.exports = ownerModel;