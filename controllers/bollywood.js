const dataBollywoodController=function(req,res){
   res.send([
        {
            "id":1,
            "name":"rohan",
            "age":"24",
            "email":"rohan$1234"
    
        },
        {
            "id":2,
            "name":"roh",
            "age":"22",
            "email":"roh$1234"
    
        },
        {
            "id":3,
            "name":"rohn",
            "age":"25",
            "email":"rohn$1234"
    
        }
    ]
   )
}
module.exports={dataBollywoodController}