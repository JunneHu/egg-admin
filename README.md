# eshow



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


# 笔记
// app/controller/post.js
class PostController extends Controller {
  async create() {
    const { ctx, service } = this;
    
  }
}
this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
this.config：应用运行时的配置项。
this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。

## 获取 HTTP 请求参数
### GET 
/posts?category=egg&language=node
const query = ctx.query;  // 得到的是参数对象
{
    category: 'egg',
    language: 'node',
}
/posts?category=egg&id=1&id=2&id=3
const queries = ctx.queries;  // 得到的是参数数组
 {
    category: [ 'egg' ],
    id: [ '1', '2', '3' ],
}
/projects/:projectId/app/:appId
/projects/1/app/2
const params = ctx.params
### POST  
const body = ctx.request.body

## 上传文件

// config/config.default.js
exports.multipart = {
  mode: 'file',
};
前端
<form method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
  title: <input name="title" />
  file: <input name="file" type="file" />
  <button type="submit">Upload</button>
</form>
后端
// app/controller/upload.js
const Controller = require('egg').Controller;
const fs = require('mz/fs');

module.exports = class extends Controller {
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const name = 'egg-multipart-test/' + path.basename(file.filename);
    let result;
    try {
      // 处理文件，比如上传到云端
      result = await ctx.oss.put(name, file.filepath);
    } finally {
      // 需要删除临时文件
      await fs.unlink(file.filepath);
    }

    ctx.body = {
      url: result.url,
      // 获取所有的字段值
      requestBody: ctx.request.body,
    };
  }
};
### 多文件上传
前端
<form method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
  title: <input name="title" />
  file1: <input name="file1" type="file" />
  file2: <input name="file2" type="file" />
  <button type="submit">Upload</button>
</form>
后端
// app/controller/upload.js
const Controller = require('egg').Controller;
const fs = require('mz/fs');
module.exports = class extends Controller {
  async upload() {
    const { ctx } = this;
    console.log(ctx.request.body);
    console.log('got %d files', ctx.request.files.length);
    for (const file of ctx.request.files) {
      console.log('field: ' + file.fieldname);
      console.log('filename: ' + file.filename);
      console.log('encoding: ' + file.encoding);
      console.log('mime: ' + file.mime);
      console.log('tmp filepath: ' + file.filepath);
      let result;
      try {
        // 处理文件，比如上传到云端
        result = await ctx.oss.put('egg-multipart-test/' + file.filename, file.filepath);
      } finally {
        // 需要删除临时文件
        await fs.unlink(file.filepath);
      }
      console.log(result);
    }
  }
};

## Cookie
获取  ctx.cookies.get('count');
设置  ctx.cookies.set('count', null);

## Session
// 获取 Session 上的内容
const userId = ctx.session.userId;
设置  this.ctx.session = null;

