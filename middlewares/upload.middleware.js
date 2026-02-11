import multer from "multer"
import path from "path"

/**
 * Storage configuration
 */

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const uniqueName=
        Date.now() + "-" + Math.round(Math.random() * 1e9);

        cb(null,uniqueName + path.extname(file.originalname));
    }
});

/**
 * File type validation
 */

const fileFilter = (req,file,cb)=>{
    if(
        file.mimetype.startsWith("image/") || 
        file.mimetype === "application/pdf"
    ){
        cb(null,true);
    }else{
        cb(new Error("Only images or PDFs allowed"),false);
    }
};

/**
 * 
 */