const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  email: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }
});

module.exports = mongoose.model('Faculty', facultySchema);
