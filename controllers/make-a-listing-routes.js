//load in the models
const DB = require("../models");

//Routes
module.exports = function(app)
{
	app.post("/api/new-listing", function(req, res)
	{
		console.log("REQUEST COOKIES--------------------------------------");
		console.log(req.cookies);
		console.log("REQUEST BODY--------------------------------------");
		console.log(req.body);

		res.json({cool:"cool"});
	});
}