'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
    async getList(params) {
        let data = {}
        const pageSize = params.pageSize ? Number(params.pageSize) : null;
        const pageIndex= params.pageIndex ? Number(params.pageIndex) : null;
        if (params && pageIndex && pageSize) {
            const result = await this.ctx.model.Banner.find()
                .skip((pageIndex - 1) * pageSize)
                .sort({ sort: -1 })
                .limit(pageSize);
            let total = 0;
            await this.ctx.model.Banner.count(function (err, res) {
                total = res;
            })
            data = {
                list: result,
                total,
                pageIndex,
                pageSize,
                totalPage: total ? Math.ceil(total / pageSize) : 0
            }
        } else {
            const result = await this.ctx.model.Banner.find()
            data = {
                list: result
            }
        }
        return data
    }
    async add(params) {
        const result = await this.ctx.model.Banner.create(params);
        return result
    }
}

module.exports = BannerService;