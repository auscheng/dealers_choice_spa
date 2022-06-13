const client = require('../client.js');
const Sequelize = require('sequelize');
const {TEXT, BOOLEAN, UUID, UUIDV4} = Sequelize;
const Todo = client.define('todo', {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        name: {
            type: TEXT,
            allowNull: false,
            unique: true
        },
        done: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        groupId: {
            type: UUID,
            references: {
                model: 'groups',
                key: 'id'
            },
            allowNull: false,
            unique: false
        }
    },
    {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        tableName: 'todos'
    }
);

module.exports = Todo;