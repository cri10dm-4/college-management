const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Get all departments
router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Add new department
router.post('/', async (req, res) => {
  const department = new Department(req.body);
  await department.save();
  res.json(department);
});

// Delete department
router.delete('/:id', async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
