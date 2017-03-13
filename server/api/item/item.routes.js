'use strict';

var express = require('express');
var controller = require('./item.controller');

var router = express.Router();

router.get('/:skip/:limit', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/count', controller.count);


module.exports = router;