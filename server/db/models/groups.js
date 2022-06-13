const client = require('../client.js');
const Sequelize = require('sequelize');
const {TEXT, UUID, UUIDV4} = Sequelize;
const Group = client.define('group', {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        name: {
            type: TEXT,
            allowNull: false,
            unique: true
        }
    },
    {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        tableName: 'groups'
    }
);

module.exports = Group;