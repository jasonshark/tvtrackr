'use strict'

app.factory('Show', ['$resource', function($resource){
	return $resource('/api/shows/:_id')
}])