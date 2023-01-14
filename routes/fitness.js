 const express=require('express');
 const fitnessRouter=require('../controllers/fitness');
 const router=express.Router();

 router.get('/fitness',fitnessRouter.dataFitnessController)

 module.exports=router
