const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Get all enrollments
router.get('/', async (req, res) => {
  const enrollments = await Enrollment.find()
    .populate('student')
    .populate('course');
  res.json(enrollments);
});

// Add new enrollment
router.post('/', async (req, res) => {
  const enrollment = new Enrollment(req.body);
  await enrollment.save();
  res.json(enrollment);
});

// Delete enrollment
router.delete('/:id', async (req, res) => {
  await Enrollment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
