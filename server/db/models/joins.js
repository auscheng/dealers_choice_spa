const client = require('../client.js');
const Sequelize = require('sequelize');
const {UUID, UUIDV4} = Sequelize;
const Join = client.define('join', {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        userId: {
            type: UUID,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false,
            unique: true
        },
        groupId: {
            type: UUID,
            references: {
                model: 'groups',
                key: 'id'
            },
            allowNull: false,
            unique: true
        }
    },
    {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        tableName: 'joins'
    }
);

module.exports = Join;