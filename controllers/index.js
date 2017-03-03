const router = require('express').Router();
const db = require('../models');

router.get('/', (req,res,next)=>{
  res.render('index');
});

module.exports =  router;


