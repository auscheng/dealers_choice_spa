const router = require('express').Router();
const Group = require('../db/models/groups.js');
const Todo = require('../db/models/todos.js');
router.get('/:id',async(req,res,next)=>{
    try {
        const todos = await Todo.findAll({
            include: [{
                model: Group,
                where: {
                    id: req.params.id
                }
            }],

        });
        res.status(200).send(todos);
    } catch (err) {
        next(err);
    };
});

module.exports = router;