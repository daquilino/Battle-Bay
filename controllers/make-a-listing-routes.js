//load in the models
const DB = require("../models");

//Routes
module.exports = function(app)
{
	app.post("/api/new-listing", function(req, res)
	{
		//cookie for testing
		document.cookie = "id=1";

		console.log("REQUEST COOKIES--------------------------------------");
		console.log(req.cookies);
		console.log("REQUEST BODY--------------------------------------");
		console.log(req.body);

	});
}