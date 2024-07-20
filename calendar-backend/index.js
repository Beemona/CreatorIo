// calendar-backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const eventsRouter = require('./routes/events');
const transporter = require('./utils/email');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', eventsRouter);

// Serve static files or frontend build
app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
