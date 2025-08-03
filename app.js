// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));

// Routes
app.get('/', (req, res) => {
  const notes = db.prepare('SELECT * FROM notes ORDER BY id DESC').all();
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/notes', (req, res) => {
  const notes = db.prepare('SELECT * FROM notes ORDER BY id DESC').all();
  res.json(notes);
});

app.post('/add-note', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    db.prepare('INSERT INTO notes (title, content) VALUES (?, ?)').run(title, content);
  }
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
