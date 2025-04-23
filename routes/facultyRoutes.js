const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// Get all faculty
router.get('/', async (req, res) => {
  const facultyList = await Faculty.find().populate('department');
  res.json(facultyList);
});

// Add new faculty
router.post('/', async (req, res) => {
  const faculty = new Faculty(req.body);
  await faculty.save();
  res.json(faculty);
});

// Delete faculty
router.delete('/:id', async (req, res) => {
  await Faculty.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
