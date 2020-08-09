const express = require('express');
const router = express.Router();
const {checkSave,checkGet,GetOccupationId} = require('./tools/toolExports');
const {Employee} = require('../models/employee');
const {Occupation} = require('../models/occupation');

router.post('/',checkSave,async (req,res) => {
    //const {date,lessonType,notes,students,teacher} = req.body;
    try{
        console.log(req.body);
        let {name,occupation} = req.body;
        let occupationId = await GetOccupationId(Occupation,occupation);
        await Employee.create({
            name,
            occupation:occupationId
        });
        return res.json({
            code:200,
            message:'Employee created'
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
        let employees = await Employee.find({}).populate('occupation')
        return res.json({
            code:200,
            results:employees.map(employee => employee.serialize())
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