const express=require("express")
const foodRouter=require('../controllers/food')
const  router  = express.Router()
router.get('/food',foodRouter.dataFoodController)

module.exports=router
