'use strict';

var mongoose = require('mongoose'),
       Schema = mongoose.Schema;

var item = new Schema(
{
  name: String,
  amount:Number
}
, { versionKey: 'v1' });

module.exports = mongoose.model('items', item);
