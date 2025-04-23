const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// Get all notices
router.get('/', async (req, res) => {
  const notices = await Notice.find();
  res.json(notices);
});

// Add new notice
router.post('/', async (req, res) => {
  const notice = new Notice(req.body);
  await notice.save();
  res.json(notice);
});

// Delete notice
router.delete('/:id', async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
