import rateLimit from "express-rate-limit";

export const apiLimiter=rateLimit({
    windowMs: 1*60*1000, //15 min
    max:2, //max 100 req per id
    message:{
        success:false,
        message:"To many request,Please try again later"
    },
    standardHeaders:true,
    legacyHeaders:false
})
export default apiLimiter