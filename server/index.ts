/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import { Config } from './config/config';

var app = express();

app.get('/', (req, res) => {
    res.send('Hello TypeScript')
});

function repeatQuery(req: express.Request, res: express.Response) {

	let config = new Config("world");
	console.log(config);
    res.json(req.query);
}
app.get('/repeat', repeatQuery);

var port: number = +process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});