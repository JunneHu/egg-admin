exports.route = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    router.resources('banner', '/banner', controller.banner);
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


/*
GET	    /banner	           banner	    app.controllers.banner.index
GET	    /banner/new	       new_post	    app.controllers.banner.new
GET	    /banner/:id	       post	        app.controllers.banner.show
GET	    /banner/:id/edit   edit_post	app.controllers.banner.edit
POST    /banner	           banner	    app.controllers.banner.create
PUT	    /banner/:id	       post	        app.controllers.banner.update
DELETE	/banner/:id	       post	        app.controllers.banner.destroy
*/