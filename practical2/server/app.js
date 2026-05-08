const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ----------------------
// Routes (SAFE IMPORTS)
// ----------------------

let userRoutes, videoRoutes, commentRoutes;

try {
  userRoutes = require('./routes/users');
} catch (err) {
  console.warn('⚠️ users route not found');
  userRoutes = express.Router();
}

try {
  videoRoutes = require('./routes/videos');
} catch (err) {
  console.warn('⚠️ videos route not found');
  videoRoutes = express.Router();
}

try {
  commentRoutes = require('./routes/comments');
} catch (err) {
  console.warn('⚠️ comments route not found');
  commentRoutes = express.Router();
}

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

// ----------------------
// Uploads folder setup
// ----------------------
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use('/uploads', express.static(uploadsDir));

// ----------------------
// 404 handler
// ----------------------
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// ----------------------
// Error handler
// ----------------------
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;