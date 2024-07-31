const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require('cors');
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Firstname TEXT NOT NULL,
            Lastname TEXT NOT NULL,
            Email TEXT NOT NULL UNIQUE,
            Password TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating table', err.message);
            } else {
                console.log('Users table created successfully.');
            }
        });
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the single-page backend with Node.js, Express, and SQLite3!');
});

// Register users
app.post('/api/register', (req, res) => {
    const { Firstname, Lastname, Email, Password } = req.body;

    if (!Firstname || !Lastname || !Email || !Password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const insert = `INSERT INTO users (Firstname, Lastname, Email, Password) VALUES (?, ?, ?, ?)`;
    db.run(insert, [Firstname, Lastname, Email, Password], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ error: 'Email already exists' });
            } else {
                return res.status(500).json({ error: 'Failed to register user' });
            }
        }
        res.status(201).json({ message: 'User registered successfully', userId: this.lastID });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
