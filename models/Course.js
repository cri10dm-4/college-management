const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  code: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }
});

module.exports = mongoose.model('Course', courseSchema);
