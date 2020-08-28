'use strict';

const Controller = require('./core/base_controller');

class ProductController extends Controller {

    // get 查询
    async index() {
        const { ctx } = this;
        // get 请求参数
        const query = ctx.query;
        try {
            const result = await ctx.service.product.getList();
            this.success(result);
        } catch (error) {
            this.fail();
        }

    };
    // get 方法新增
    async new() { };

    // post 方法新增
    async create() {
        const { ctx } = this;
        const body = ctx.request.body;
        try {
            const result = await ctx.service.product.add(body);
            this.success(result);
        } catch (error) {
            this.fail();
        }
    };

    // get 根据id查询
    async show() { };

    // get 方法 编辑
    async edit() { };

    // put方法编辑
    async update() { };

    // delete 删除 
    async destroy() { };
}

module.exports = ProductController;