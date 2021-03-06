const router = require('express').Router();
const db = require('../models');




router.get('/', (req,res,next)=>{
 // db.models.Activity.findAll()
 // 	.then( db/)
 // 	.then(activities => {
 // 		res.render('index', {activities})
 // 	});
 var outerScopeContainer = {};
db.models.Hotel.findAll()
.then(function (dbHotels) {
  outerScopeContainer.dbHotels = dbHotels;
  return db.models.Restaurant.findAll();
})
.then(function (dbRestaurants) {
  outerScopeContainer.dbRestaurants = dbRestaurants;
  return db.models.Activity.findAll();
})
.then(function (dbActivities) {
  res.render('index', {data : {
    templateHotels: outerScopeContainer.dbHotels,
    templateRestaurants: outerScopeContainer.dbRestaurants,
    templateActivities: dbActivities}
  });
})
.catch(next);
});

module.exports =  router;


