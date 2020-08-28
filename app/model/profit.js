'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ProfitSchema = new Schema({
        orderNo: {
            type: String,
            unique: true,
            require: true
        },
        productId: {
            type: String,
            require: true
        },
        profit: {
            type: Number,
            require: true
        }
    });
    return mongoose.model('Profit', ProfitSchema);
};
