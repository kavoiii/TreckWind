const express = require('express');
const router = express.Router();
const TripEntry = require('../models/tripEntry');

// Create a new trip entry
router.post('/trip-entries', async (req, res) => {
  try {
    const { destination, startdate, enddate, notes, photos } = req.body;
    const newEntry = new TripEntry({ destination, startdate, enddate, notes, photos });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve all trip entries
router.get('/trip-entries', async (req, res) => {
  try {
    const entries = await TripEntry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
