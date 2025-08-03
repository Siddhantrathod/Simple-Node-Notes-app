// db.js
const Database = require('better-sqlite3');
const db = new Database('notes.db');

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )
`).run();

module.exports = db;
