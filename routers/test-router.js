const express = require('express');
const router = express.Router();
const {checkSave} = require('./tools/toolExports');

router.post('/',checkSave,(req,res) => {
    //const {date,lessonType,notes,students,teacher} = req.body;
    console.log(req.body);
    return res.json({
        code:200,
        message:'Data created'
    });
    /*
    return Lesson.create({
        date,
        lessonType,
        notes,
        students,
        teacher
    })

    .then(lesson => {
        return res.json({
            code:200,
            message:'Lesson created'
        });
    })

    .catch(err => {
        console.log('error ',err);
        if(err.message.includes('E11000')){
            return res.json({
                code:401,
                message:'Lesson already exists'
            });
        }
        return res.json({
            code:500,
            message:'an error occured'
        });
    })
    */
    
});

module.exports = {router};