'use strict';

const Service = require('egg').Service;

class ShopService extends Service {
    async getList(params) {
        const result = await this.ctx.model.Shop.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Shop.create(params);
        return result
    }
}

module.exports = ShopService;