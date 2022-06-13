const router = require('express').Router();
const User = require('../db/models/users.js');
const Group = require('../db/models/groups.js');
router.get('/:id',async(req,res,next)=>{
    try {
        const groups = await Group.findAll({
            include: [{
                model: User,
                where: {
                    id: req.params.id
                }
            }],

        });
        res.status(200).send(groups);
    } catch (err) {
        next(err);
    };
});

module.exports = router;