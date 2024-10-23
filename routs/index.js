const express=require("express");
const router=express.Router();
const {
    handleposturl,
    handlegeturl,
    handleurldetails
}=require("../controllers/index.js");

router.post("/",handleposturl);
router.get("/:id",handlegeturl);
router.get("/detail/:id",handleurldetails);

module.exports=router;