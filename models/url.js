const mongoose=require("mongoose");

const urlschema=new mongoose.Schema(
    {
        shortid:{
            type:String,
            required:true,
           unique:true
        },
        redirecturl:{
            type:String,
            required:true
        },
        urlhistory:[ {
           timestamp:
           {
            type:Number
           }
        }]

    },{
        timestamps:true
    }
);

const url=mongoose.model("urlmodel",urlschema);

module.exports=url;