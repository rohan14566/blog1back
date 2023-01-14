const express=require("express")
const app=express();
const homeRouter=require("./routes/home")
const bollywoodRouter=require("./routes/bollywood")
const hollywoodRouter=require("./routes/hollywood")
const fitnessRouter=require("./routes/fitness")
const foodRouter=require('./routes/food')
const technologyRouter=require('./routes/technology')
const cors=require('cors')


app.use(cors());

app.use(homeRouter);
app.use(bollywoodRouter);
app.use(hollywoodRouter);
app.use(fitnessRouter);
app.use(foodRouter);
app.use(technologyRouter);


app.listen(5000,function(){
    console.log("server is started");
});