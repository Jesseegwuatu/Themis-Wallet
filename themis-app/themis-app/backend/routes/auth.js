
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let users = require('../data/users');

// Register
router.post('/register', (req, res) => {
    const { username, password, pin } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ msg: 'User already exists' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword, pin, balance: 100 });
    res.status(201).json({ msg: 'Registration successful' });
});

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ msg: 'Login successful', user });
    } else {
        res.status(400).json({ msg: 'Invalid credentials' });
    }
});

module.exports = router;
