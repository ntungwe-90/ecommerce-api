const express = require("express");
 const multer = require("multer");
 


 const router = express.Router(); 

 const {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct

 } = require("../controllers/itemsControllers")

 //various api endpoints

//  router.post("/api/product", addProduct);
 router.get("/api/all-products", getAllProducts)
 router.get("api/product/:id", getOneProduct)
 router.put("/api/product/:id", updateProduct)
 router.delete("/api/product/:id", deleteProduct)

//adding multer image along with product details

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'images')
    },
    filename: function(req, file, cb){
        const uniqueSuffix = file.originalname
        cb(null,  uniqueSuffix)
        console.log('nnmmmm', uniqueSuffix)
        
    },
})
const upload = multer({storage})

// router.post('/api/books', addNewBook )
router.post('/api/product',upload.single("image"), addProduct )















 module.exports = router;