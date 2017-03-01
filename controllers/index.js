const route = require('express').Router;
const data = require('../db');

route.get('/', (req,res,next)=>{
  res.render('index', {data});
});




