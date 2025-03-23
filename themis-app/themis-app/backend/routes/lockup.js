
const express = require('express');
const router = express.Router();

// Lockup functionality
router.post('/', (req, res) => {
    const { amount, duration } = req.body;
    if (amount <= 0) {
        return res.status(400).json({ msg: 'Amount must be positive' });
    }
    res.json({ msg: `Locked up ${amount} JC for ${duration} days` });
});

module.exports = router;
