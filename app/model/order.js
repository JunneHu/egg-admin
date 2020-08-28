'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const OrderSchema = new Schema({
        orderNo: {
            type: String,
            unique: true,
            require: true
        },
        chargeAccount: {
            type: String,
            require: true
        },
        productId: {
            type: String,
            require: true
        },
        payPlatformOrderNo: {  //支付流水号	
            type: String,
            require: true
        },
        orderTime: {
            type: Date,
            default: Date.now
        },
        userId: {
            type: String,
            require: true
        },
        orderStatus: Number,
        payType: Number,
        buyNum: Number,
        payPrice: Number,
        orderFinishTime: Date,
    });
    return mongoose.model('Order', OrderSchema);
};
