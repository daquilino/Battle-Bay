// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const PATH = require("path");

// Routes
// =============================================================
module.exports = function(app) 
{

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //ADD ALL HTML ROUTES HERE 
  /*
 
    -  landing-page
    -  sign-in-and-up page
    -  up-for-bid Page
    -  user-purchase page
  */

  // EXAMPLE for landing page (test.html using handlebars)
  app.get("/", function(req, res) {
   res.render("form-test");
  });

  app.get("/landing", function(req, res) {
   res.render("landing");
  });

  app.get("/user-homepage", function(req, res) {
   res.render("user-homepage");
  });

  app.get("/3", function(req, res) {
   res.render("page3");
  });


};
