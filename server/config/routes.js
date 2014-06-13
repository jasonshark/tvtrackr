var awsCtrl = require('../controllers/aws'),
	showCtrl = require('../controllers/show')

module.exports = function(app){

	// S3 routes to hit with XHR
	app.get('/addToS3', awsCtrl.addToS3)

	// API Routes
	app.get('/api/shows', showCtrl.allShows)
	app.get('/api/shows/:showId', showCtrl.getShow)


	// undefined API routes
	app.all('/api/*', function(req, res){
		res.send(404)
	})

	// everything else handled by angular
	app.get('*', function(req, res){
		// pass the index page with currentUser data
		res.render('index', {
			currentUser: req.user
		})
	})
}