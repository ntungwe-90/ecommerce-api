const mongoose = require("mongoose");

const { Schema } = mongoose;

const EcommerceSchema = new Schema({
    image: {
        type: String
    },
    // title: {
    //     type: String,
    //     require: true
    // },
    // description: {
    //     type: String,
    //     require: true
    // },
    // price: {
    //     type: Number,
    //     require: true
    // },
}, { timestamps: true });

const EcommerceItems = mongoose.model("EcommerceItems", EcommerceSchema);

module.exports = EcommerceItems;