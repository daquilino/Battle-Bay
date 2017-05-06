// ****************************************************************************
// RCB 	'Battle Bay'  		May 02,2017
// Server.js - This is the initial starting point for the Node/Express server.
// ============================================================================

// Dependencies
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const METHOD_OVERIDE = require('method-override');  
const EXPHBS = require("express-handlebars");
const COOKIE_PARSER = require("cookie-parser");

// Sets up the Express App
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

// Requiring our models for syncing
const DB = require("./models");

//Static directory
APP.use(EXPRESS.static(process.cwd() + "/public"));

// Sets up the Express app to handle data parsing
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(BODY_PARSER.text());
APP.use(BODY_PARSER.json({ type: "application/vnd.api+json" }));

//Set up cookie parser
APP.use(COOKIE_PARSER());

// Override with POST having ?_method=...
APP.use(METHOD_OVERIDE("_method"));

// Set Handlebars.
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// Routes =============================================================
require("./controllers/html-routes.js")(APP);
require("./controllers/for-sale-api-routes.js")(APP);
require("./controllers/all-users-api-routes.js")(APP);
require("./controllers/user-inventory-api-routes.js")(APP);
require("./controllers/warehouse-items-api-routes.js")(APP);

// These are routes for optional models. If not going to use *REMOVE*. 
//
//   require("./controllers/bidders-api-routes.js")(APP);
//   require("./controllers/warehouse-api-routes.js")(APP);


DB.sequelize.sync({ force: true }).then(function()  //**** REMOVE {force:true} *** . USE ONLY FOR TESTING.
{
	APP.listen(PORT, () => console.log("listening on port:", PORT));
});

