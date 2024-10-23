const shortid = require("shortid");
const url=require("../models/url.js");



async function handleposturl(req,res)
{
    const urlid=shortid();
    const mainurl=req.body.url;
    if(!mainurl)
    {
        res.status(400).send("url required");
    }
   const result= await url.create(
        {
            shortid:urlid,
            redirecturl:mainurl,
            urlhistory:[]
        }
    )
    res.status(200).send("task completed");

}

async function handlegeturl(req,res)
{
    const shortid=req.params.id;
    const result=await url.findOneAndUpdate({shortid},{
       $push:{
        urlhistory:{ timestamp:Date.now()}
       }
    });
    res.redirect(result.redirecturl);
}
async function handleurldetails(req,res)
{
    const shortid=req.params.id;
    const result=await url.findOne({shortid});
    res.json({
        totalclick:result.urlhistory.length,
        details:result.urlhistory
    })
}

module.exports={
    handleposturl,
    handlegeturl,
    handleurldetails
}