// calendar-backend/routes/events.js

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const nodemailer = require('nodemailer');

// POST new event
router.post('/events', async (req, res) => {
  const { title, start } = req.body;

  try {
    const newEvent = new Event({ title, start });
    await newEvent.save();

    // Example: Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Event Created',
      text: `A new event has been created:\n\nTitle: ${title}\nStart: ${start}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).send(error);
  }
});

module.exports = router;
