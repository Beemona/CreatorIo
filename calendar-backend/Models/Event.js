// calendar-backend/models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  start: Date, // Store date and time
  // Add more fields as needed
});

module.exports = mongoose.model('Event', eventSchema);
