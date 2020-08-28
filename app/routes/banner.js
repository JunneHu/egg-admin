exports.route = app => {
    const { router, controller } = app;
    router.resources('banner', '/banner', controller.banner);
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