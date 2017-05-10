var express = require('express');
var router = express.Router();
var appData = require('../goods.json');
var goods = appData.goods;

router.get('/goods', function (req, res, next) {
  res.json({data: goods});
});

module.exports = router;
