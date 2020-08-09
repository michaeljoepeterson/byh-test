const express = require('express');
const router = express.Router();
const {checkSave,checkGet} = require('./tools/toolExports');
const {Occupation} = require('../models/occupation');

router.post('/',checkSave,async (req,res) => {
    //const {date,lessonType,notes,students,teacher} = req.body;
    try{
        console.log(req.body);
        await Occupation.create(req.body)
        return res.json({
            code:200,
            message:'Occupation created'
        });
    }
    catch(err){
        console.log('error ',err);
        return res.json({
            code:500,
            message:'an error occured'
        });
    }
    
});

router.get('/',checkGet,async (req,res) => {
    //const {date,lessonType,notes,students,teacher} = req.body;
    try{
        let occupations = await Occupation.find({})
        return res.json({
            code:200,
            results:occupations.map(occupations => occupations.serialize())
        });
    }
    catch(err){
        console.log('error ',err);
        return res.json({
            code:500,
            message:'an error occured'
        });
    }
    
});

module.exports = {router};