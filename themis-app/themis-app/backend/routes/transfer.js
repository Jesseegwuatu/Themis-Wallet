
const express = require('express');
const router = express.Router();
let users = require('../data/users');

// Transfer
router.post('/', (req, res) => {
    const { sender, recipient, amount, pin } = req.body;
    const senderUser = users.find(u => u.username === sender);
    const recipientUser = users.find(u => u.username === recipient);
    
    if (!senderUser || !recipientUser) {
        return res.status(404).json({ msg: 'User not found' });
    }
    if (senderUser.pin !== pin) {
        return res.status(400).json({ msg: 'Incorrect PIN' });
    }
    if (senderUser.balance < amount + 0.01) {
        return res.status(400).json({ msg: 'Insufficient balance' });
    }
    
    senderUser.balance -= (amount + 0.01);
    recipientUser.balance += amount;
    
    res.json({ msg: 'Transfer successful' });
});

module.exports = router;
