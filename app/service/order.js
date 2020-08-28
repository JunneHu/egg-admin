'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
    async getList(params) {
        const result = await this.ctx.model.Order.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Order.create(params);
        return result
    }
}

module.exports = OrderService;