import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
	    const app = new JetApp({
	        start: "/start"
	    });
	    const size =  () => document.body.offsetWidth > 800 ? "wide" : "small";
	    app.config.size = size();
	    webix.event(window, "resize", function(){
        const newSize = size();
	    if (newSize != app.config.size){
	            app.config.size = newSize;
	            app.refresh();
	        }
	    });

	    app.render();
	    //new MyApp().render()
	});
}