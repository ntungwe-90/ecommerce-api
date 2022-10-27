const express =require("express");
const ProductModel = require("../model/ecommerceModel");
const multer = require("multer")


//various crud operations for ecommerce website

const addProduct = async(req, res) => {
    const productDetails = {
        image: req.file.originalname,
        // title: req.body.title,
        // // description: req.body.description,
        // // price: req.body.price
    };

    const productToSave = await new ProductModel(productDetails)
    productToSave.save().then(results => {
        if(results) res.send(results)
    }).catch(err => {
        console.log(err)
    })
}

//getting all products from the database

const getAllProducts = (req, res) => {
    ProductModel.find().then(results => {
        res.send(results)
    }).catch(err => {
        console.log(err.message)
    })

}

//get one product id

const getOneProduct = (req, res) => {
    ProductModel.findById(req.params.id).then( result => {
        if(result){
            res.send(result)
        }

    }).catch(err => console.log(err))

}

//delete a product by it id
const deleteProduct = (req, res) => {
    ProductModel.findByIdAndDelete(req.params.id).then( result => {
        res.send(result)
    }).catch(err => {
        console.log(err)
    })
}

// edit products
const updateProduct = (req, res) => {
    const {  title, price, description } = req.body;
    const productDetails = {
        title,
        price,
        description
    };
    ProductModel.updateOne({_id: req.params.id}, productDetails)
    .then((results) => {
        res.send(results)
    }).catch((err) => {
        console.log({ message: "product updated successfully"})
    })
    
}













module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct, 
    deleteProduct
}