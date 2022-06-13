const {client, User, Group, Todo, Join} = require('./index.js');
const { faker } = require('@faker-js/faker');

const createRandomUser = (numberOfUsers) => {
    let users = [];
    for (let i = 0;i < numberOfUsers; i++) {
        users.push({
            name:faker.internet.userName(),
            email: faker.internet.email()
        });
    };
    return users;
};

const createRandomUniqueGroup = (numberOfGroups) => {
    let groups = [];
    for (let i = 0;i < numberOfGroups; i++) {
        let groupNamesArray = groups.map((group)=>{return group['name']});
        let product = faker.commerce.product();
        while (groupNamesArray.includes(product)) {
            product = faker.commerce.product();
        };
        groups.push({
            name:product
        });
    };
    return groups;
};

const createRandomUniqueTodo = (numberOfTodos) => {
    let todos = [];
    for (let i =0;i < numberOfTodos; i++) {
        let todoNamesArray = todos.map((todo)=>{return todo['name']});
        let sentence = faker.hacker.phrase();
        while (todoNamesArray.includes(sentence)) {
            sentence = faker.hacker.phrase();
        };
        todos.push({
            name:sentence
        });
    };
    return todos;
}

const seed = async () => {
    await client.authenticate();
    await client.sync({ force: true});
    const users = await Promise.all(createRandomUser(5).map((user)=>{return User.create(user)}));
    const groups = await Promise.all(createRandomUniqueGroup(10).map((group)=>{return Group.create(group)}));
    for (let i = 0; i < groups.length;i++) {
        const todos = await Promise.all(createRandomUniqueTodo(20).map((todo)=>{return Todo.create({...todo,...{groupId:groups[i]['id']}})}));
    };
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < groups.length; j++) {
            await Join.create({userId: users[i].id, groupId: groups[j].id});
        }
    };
};

module.exports = seed;
