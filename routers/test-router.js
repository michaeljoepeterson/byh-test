const express = require('express');
const router = express.Router();
const {checkSave,formatData,checkExisting,checkGet} = require('./tools/toolExports');
const {Form} = require('../models/form-data');

router.post('/',checkSave,async (req,res) => {
    //const {date,lessonType,notes,students,teacher} = req.body;
    try{
        console.log(req.body);
        let formatedData = formatData(req.body);
        console.log(formatedData);
        let result = await checkExisting(formatedData,Form)
        await Form.create(formatedData)
        return res.json({
            code:200,
            message:'Data created'
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
        let forms = await Form.find({})
        return res.json({
            code:200,
            results:forms.map(form => form.serialize())
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