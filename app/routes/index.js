exports.route = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    router.resources('user', '/user', controller.user);
    router.resources('class', '/class', controller.class);
    router.resources('product', '/product', controller.product);
    router.resources('shop', '/shop', controller.shop);  
    router.resources('order', '/order', controller.order);
    router.resources('profit', '/profit', controller.profit);
    /*
    * 内部重定向
    * app.router.redirect('/', '/home/index', 302);
    * 外部重定向
    *  controller/home.js
    * exports.index = async ctx => {
    *    ctx.redirect(`https://www.google.co.kr`);
    * };
    */
}