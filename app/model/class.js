'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ClassSchema = new Schema({
        orderNo: {
            type: String,
            unique: true,
            require: true
        },
        img: {
            type: String,
            require: true
        },
        sort: {
            type: Number,
            default: 1
        },
        status:{
            type: Boolean,
            default: false
        }
    });
    return mongoose.model('Class', ClassSchema);
};
