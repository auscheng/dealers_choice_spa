const app = require('./app');
const {client, User, Group, Todo, Join} = require('./db/index.js');
const seed = require('./db/seed.js');
const port = process.env.PORT || 3000;

const init = async ()=>{
    try {
        if (process.env.SEED) {
            await seed();
        };
        app.listen(port, ()=>{`Listening on port ${port}`});
    } catch (err) {
        console.log(err);
    };
};
init();
