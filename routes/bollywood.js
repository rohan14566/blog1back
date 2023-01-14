const express=require("express");
const bollywoodRouter=require('../controllers/bollywood')
const router=express.Router();
router.get('/bollywood',bollywoodRouter.dataBollywoodController)

module.exports=router