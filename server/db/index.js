const client = require('./client.js');
const User = require('./models/users.js');
const Group = require('./models/groups.js');
const Todo = require('./models/todos.js');
const Join = require('./models/joins.js');

User.belongsToMany(Group, { through: Join, foreignKey: { name: 'userId', allowNull: false }});
Group.belongsToMany(User, { through: Join, foreignKey: { name: 'groupId', allowNull: false }});

Group.hasMany(Todo, { foreignKey: { name: 'groupId', allowNull: false }, sourceKey: 'id' });
Todo.belongsTo(Group, { foreignKey: { name: 'groupId', allowNull: false }, targetKey: 'id' });

module.exports = {client, User, Group, Todo, Join};