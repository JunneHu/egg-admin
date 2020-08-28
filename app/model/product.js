'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ProductSchema = new Schema({
        productId:{
            type: String,
            unique: true,
            require: true
        },
        mainTitle: {
            type: String,
            require: true
        },
        subTitle: String,
        img: {
            type: String,
            require: true
        },
        faceValue: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        desc: String,
        status: {
            type: Boolean,
            default: false
        },
        sort: {
            type: Number,
            default: 1
        },
        classId: {  // 所属分类id
            type: String,
            require: true
        }
    });
    return mongoose.model('Product', ProductSchema);
};
