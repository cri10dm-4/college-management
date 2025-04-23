const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
  const students = await Student.find().populate('department');
  res.json(students);
});

// Add new student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// Delete student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
