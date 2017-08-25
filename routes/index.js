var express = require('express');
var router = express.Router();
var s=require('../model/user/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('收到数据null');
});
router.post('/', function(req, res, next) {
  res.send('收到数据nullpost'+JSON.stringify(req.param('data')));
});

module.exports = router;
