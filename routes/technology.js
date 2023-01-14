const express=require("express")
const  technologyRouter=require('../controllers/technology')
const router=express.Router();

router.get('/technology',technologyRouter.dataTechnologyController)

module.exports=router



