const axios = require('axios');
const usersList = document.querySelector('.users-list');
const groupsList = document.querySelector('.groups-list');
const todosList = document.querySelector('.todos-list');
const userInputForm = document.querySelector('.input-form.users');
const userInputFormValue = document.querySelector('.input-form.users input');
userInputForm.addEventListener('submit',async(ev)=>{
    const user = userInputFormValue.value;
    try {
        await axios.post('/api/users', {
            name: user
        });
        await renderUsers();
        userInputFormValue.value='';
    } catch (err) {
        console.log(err.response.data);
    };
});
usersList.addEventListener('click',async (ev)=>{
    await renderGroups();
});
groupsList.addEventListener('click',async (ev)=>{
    await renderTodos();
});

const fetchUsers = async ()=>{
    const res = await axios.get('/api/users');
    const data = res.data;
    return data;
};
const renderUsers = async()=>{
    const users = await fetchUsers();
    const html = users.map((user)=>{return `
        <li><a href='#${user.id}'>${user.name}</a></li>
    `}).join('');
    usersList.innerHTML = html;
};
const fetchGroups = async (userId)=>{
    const res = await axios.get(`/api/groups/${userId}`);
    const data = res.data;
    return data;
};

const renderGroups = async()=>{
    const userId = window.location.hash.slice(1);
    const groups = await fetchGroups(userId);
    const html = groups.map((group)=>{return `
        <li><a href='#${group.id}'>${group.name}</a></li>
    `}).join('');
    groupsList.innerHTML = html;
};

const fetchTodos = async (groupId)=>{
    const res = await axios.get(`/api/todos/${groupId}`);
    const data = res.data;
    return data;
};

const renderTodos = async()=>{
    const groupId = window.location.hash.slice(1);
    const todos = await fetchTodos(groupId);
    // console.log(todos);
    const html = todos.map((todo)=>{return `
        <li><a href='#${todo.id}'>${todo.name}</a></li>
    `}).join('');
    todosList.innerHTML = html;
};
renderUsers();
