'use strict';

const Controller = require('./core/base_controller');

class ProfitController extends Controller {

    // get 查询
    async index() {
        const { ctx } = this;
        // get 请求参数
        const query = ctx.query;
        try {
            const result = await ctx.service.profit.getList();
            this.success(result);
        } catch (error) {
            this.fail();
        }

    };
}

module.exports = ProfitController;