const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');

// Load User Model
const User = require('../../models/User');

// Load Validation


router.get('/test', (req, res) => res.json({msg: 'Profile works!'}));

module.exports = router;