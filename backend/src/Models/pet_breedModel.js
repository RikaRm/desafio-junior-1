const Sequelize = require('sequelize');
const database = require('../db');
const type = require('./pet_typeModel')

const pet_breedModel = database.define('pet_breeds',
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        tipo: {
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
    }, {
    freezeTableName: true
});

pet_breedModel.belongsTo(type, {
    constraint: true,
    foreignKey: 'tipo'
})

module.exports = pet_breedModel;