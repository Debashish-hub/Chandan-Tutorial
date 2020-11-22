const router = require('express').Router();
const path = require('path');
const Student = require('./DB/student');
const Teacher = require('./DB/teacher');

//route to post user details to db
router.post('/student', async (req, res) => {
    const s_user = new Student({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    });
    const savedUser = await s_user.save();
    res.send(savedUser);
});

router.post('/teacher', async (req, res) => {
    const t_user = new Teacher({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    });
    const savedUser = await t_user.save();
    res.send(savedUser);
});


module.exports = router;