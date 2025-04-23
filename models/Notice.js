const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: String,
  content: String,
  postedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notice', noticeSchema);
