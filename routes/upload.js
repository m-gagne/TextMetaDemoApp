var express = require('express');
var router = express.Router();
var multer  = require('multer');
var textmeta = require('textmeta');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// TODO ADD FILE FILTER

router.post('/', upload.single('document'), function(req, res, next) {
  let rules = JSON.parse(req.body.rules ? req.body.rules : "[]");
  let options = JSON.parse(req.body.options ? req.body.options : "{}");
  textmeta.extractFromPDFBuffer(req.file.buffer, rules, options).then((result) => {
    res.send(result);
  });
});

module.exports = router;
