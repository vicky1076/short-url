const express=require("express");
const router=require("./routs/index.js")
const connectdb=require("./connection.js");
const app=express();
const port=30001;
app.use(express.json());
connectdb("mongodb://127.0.0.1:27017/url-history").then(()=>
{
    console.log("data base is connected");
})

app.use("/url",router);




app.listen(port,()=>
{
    console.log(`server is running a port:${port}`);
})