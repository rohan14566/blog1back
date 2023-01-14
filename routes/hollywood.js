const express=require("express");
const hollywoodRouter=require('../controllers/hollywood')
const router=express.Router();
 
router.get('/Hollywood',hollywoodRouter.dataHollywoodController)
module.exports=router