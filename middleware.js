// Application Middleware
var middleware = {
	requireAuthentication: function(req, req, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request ' + new Date().toString() + ': ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

// Using module exports to expose middleware
module.exports = middleware