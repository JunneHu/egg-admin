'use strict';

const Service = require('egg').Service;

class ClassService extends Service {
    async getList(params) {
        const result = await this.ctx.model.Class.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Class.create(params);
        return result
    }
}

module.exports = ClassService;