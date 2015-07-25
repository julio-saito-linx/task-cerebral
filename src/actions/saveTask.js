var request = require('superagent');
var config = require('../config.js');

let saveTask = function (args, state, promise) {

	let task = state.get('tasks', args.ref);

	request
		.put(config.rethinkdb_server.host + '/task/new')
		.send({
			title: task.title
		})
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(err) {
				throw err;
			}
			var json_response = JSON.parse(res.text);
			promise.resolve(json_response);
		});

};

export default saveTask;
