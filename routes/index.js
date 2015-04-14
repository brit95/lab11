var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	console.log("ID "+process.pid);
	res.render('index', { title: 'Cluster', pid:process.pid });
});

/* GET home page. */
router.get('/pid', function(req, res, next) {
  	console.log("ServiceID "+process.pid);
	res.json({ title: 'Cluster',pid:process.pid});
});

module.exports = router;
