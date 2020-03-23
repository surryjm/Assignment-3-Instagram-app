const express = require('express');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();


// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    if (user) {
      return res.status(400).json({email: 'Email already exists'})
    } else {
      const avatar = gravatar.url(req.body.email, {
        size: '200',
        rating: 'pg',
        default: 'retro'
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // Below = avatar: avatar
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      });
    }
  })
  .catch(err => console.log(err))
});


// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'User not found!'});
      }
      else {
        bcrypt.compare(req.body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              // User matched
              // Payload

              const payload = {id: user.id, name: user.name, avatar: user.avatar};

              // Sign token
              jwt.sign(
                payload, 
                keys.secretOrKey, 
                {expiresIn: 3600},
                (err, token) => {
                  res.json({
                    success: true, 
                    token: 'Bearer ' + token})
                });

            } else {
              return res.status(400).json({password: 'Password incorrect!'});
            }
          })
      }
    })
    .catch(err => console.log(err));
})

// @route GET api/users/current
// @desc Return current user information
// @access Private
router.get(
  '/current', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
})

module.exports = router;