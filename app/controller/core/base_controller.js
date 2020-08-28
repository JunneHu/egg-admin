const { Controller } = require('egg');

class BaseController extends Controller {
    success(data, msg) {
        this.ctx.status = 200
        msg = msg || '成功';
        this.ctx.body = {
            code: 0,
            data,
            msg
        };
    }
    fail(msg) {
        this.ctx.status = 200
        msg = msg || '失败';
        this.ctx.body = {
            code: -1,
            data: {},
            msg
        };
    }
    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}
module.exports = BaseController;