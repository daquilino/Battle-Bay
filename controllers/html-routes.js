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
   res.sendFile(PATH.join(__dirname, "../public/form-test.html"));
  });

  app.get("/landing", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/landing.html"));
  });

  app.get("/sign-in", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/sign-in.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/user-homepage", function(req, res) {
  	console.log("/user-homepage route hit.");
    res.sendFile(PATH.join(__dirname, "../public/user-homepage.html"));
  });

  app.get("/all-listings", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/all-listings.html"));
  });

  app.get("/warehouse", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/warehouse.html"));
  });

  app.get("/leaderboard", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/leaderboard.html"));
  });

};
