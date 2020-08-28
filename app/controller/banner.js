'use strict';

const Controller = require('./core/base_controller');

class BannerController extends Controller {

    // get 查询
    async index() {
        const { ctx } = this;
        // get 请求参数
        const query = ctx.query;
        // try {
            
        // } catch (error) {
        //     this.fail();
        // }
        const result = await ctx.service.banner.getList(query);
        this.success(result);
    };
    // get 方法新增
    async new() { };

    // post 方法新增
    async create() {
        const { ctx } = this;
        const body = ctx.request.body;
        try {
            const result = await ctx.service.banner.add(body);
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

module.exports = BannerController;