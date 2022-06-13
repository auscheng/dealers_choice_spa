const router = require('express').Router();
const User = require('../db/models/users.js');
router.post('/',async(req,res,next)=>{
    try {
        res.status(201).send(await User.create(req.body));
    } catch (err) {
        next(err);
    };
});
router.get('/',async(req,res,next)=>{
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (err) {
        next(err);
    };
});

module.exports = router;

