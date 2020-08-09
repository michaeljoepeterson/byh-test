const {router:testRouter } = require('./test-router');
const {router:occupationRouter } = require('./occupation-router');
const {router:employeeRouter } = require('./employee-router');

const express = require('express');
const router = express.Router();

router.use('/test',testRouter);
router.use('/occupations',occupationRouter);
router.use('/employees',employeeRouter);

module.exports = {router};