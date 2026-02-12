import express from "express";
const router = express.Router();
router.post("/test",(req,res)=>{
    console.log("github webhook Received");
    console.log(req.body);

    req.statusCode(200).json({received: true});

    res.json({received:true});
})
export default router;