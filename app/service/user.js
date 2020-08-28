'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getList(params) {
        const result = await this.ctx.model.User.find(params);
        const data = {
            list: result
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.User.create(params);
        return result
    }
}

module.exports = UserService;