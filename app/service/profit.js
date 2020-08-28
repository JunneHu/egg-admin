'use strict';

const Service = require('egg').Service;

class ProfitService extends Service {
    async getList(params) {
        const result = await this.ctx.model.Profit.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Profit.create(params);
        return result
    }
}

module.exports = ProfitService;