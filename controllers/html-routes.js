// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const PATH = require("path");

//Functions
function CheckForCookie(req) //returns true if user has an id cookie
{
  if (req.cookies.id !== undefined)
  {
    var cookie = req.cookies.id.split("=");

    if (cookie[0] === "id" && typeof cookie[1] === "number")
      return true;
    else
      return false;
  }
  else
    return false;
}

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

   res.sendFile(PATH.join(__dirname, "../public/landing.html"));

  });

  app.get("/sign-in", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/sign-in.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/user-homepage", function(req, res) {
    if (CheckForCookie(req))
      res.sendFile(PATH.join(__dirname, "../public/user-homepage.html"));
    else
      res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/make-a-listing", function(req, res) {
    if (CheckForCookie(req))
      res.sendFile(PATH.join(__dirname, "../public/make-a-listing.html"));
    else
      res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/all-listings", function(req, res) {
    if (CheckForCookie(req))
      res.sendFile(PATH.join(__dirname, "../public/all-listings.html"));
    else
      res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/warehouse", function(req, res) {
    if (CheckForCookie(req))
      res.sendFile(PATH.join(__dirname, "../public/warehouse.html"));
    else
      res.sendFile(PATH.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/leaderboard", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/leaderboard.html"));
  });

};
