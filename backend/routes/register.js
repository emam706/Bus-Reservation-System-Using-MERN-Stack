var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser');

// Body-Parser
var jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    res.send("Register Here");
});

// POST register user
router.post('/', jsonParser, async (req, res) => {
    try {
        // Check duplicates
        const existingUsername = await User.findOne({ username: req.body.username });
        if (existingUsername) return res.status(400).json({ error: "Username already exists" });

        const existingEmail = await User.findOne({ email: req.body.email });
        if (existingEmail) return res.status(400).json({ error: "Email already registered" });

        const existingMobile = await User.findOne({ mobile: req.body.mobile });
        if (existingMobile) return res.status(400).json({ error: "Mobile number already registered" });

        // Hash password
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        // Create user object
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
            mobile: req.body.mobile,
            gender: req.body.gender,
            dob: req.body.dob ? moment(req.body.dob).format('YYYY-MM-DD') : undefined
        });

        // Save user
        const result = await newUser.save();
        res.status(201).json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
