'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ShopSchema = new Schema({
        siteType: { // 1 移动端 2 pc端 3 支付宝小程序 4 微信小程序 5 qq 小程序 6 360小程序
            type: String,
            require: true,
            default: 1
        },
        title: {
            type: String
        },
        keywords: {
            type: String
        },
        mobile: {
            type: String
        }
    });
    return mongoose.model('Shop', ShopSchema);
};
