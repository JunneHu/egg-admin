'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
    async getList(params) {
        const result = await this.ctx.model.Product.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Product.create(params);
        return result
    }
}

module.exports = ProductService;