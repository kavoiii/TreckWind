const mongoose = require('mongoose');

const tripEntrySchema = new mongoose.Schema({
  destination: String,
  startdate: String,
  enddate:String,
  notes: String,
  /*photos: [
    {
      // You can include other fields like 'caption' or 'url' as needed
      url: String, // URL or path to the image
    }
  ],*/
});

module.exports = mongoose.model('TripEntry', tripEntrySchema);
