import express from "express";

const router = express.Router();

router.use('/view',(req,res,next)=>{
    try {
        
    }catch (err){
        console.log("Error getting customers ",err)
    }
})

export default router;