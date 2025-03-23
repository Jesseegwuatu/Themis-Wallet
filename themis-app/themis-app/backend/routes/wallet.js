
const express = require('express');
const router = express.Router();
let users = require('../data/users');

// Get wallet details
router.get('/:username', (req, res) => {
    const user = users.find(u => u.username === req.params.username);
    if (user) {
        res.json({ balance: user.balance, address: user.username + '-wallet' });
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
});

module.exports = router;
