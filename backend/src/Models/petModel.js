const Sequelize = require('sequelize');
const database = require('../db');
const onwer = require('./ownerModel')
const breed = require('./pet_breedModel')

const petModel = database.define('pets',
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
        idade: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        raca: {
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
    }, {
    freezeTableName: true
});

petModel.belongsTo( onwer, {
    constraint:true,
    foreignKey: 'dono'
})

petModel.belongsTo( breed, {
    constraint:true,
    foreignKey: 'raca'
})

module.exports = petModel;