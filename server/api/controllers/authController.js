const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');

const tokenExpTime = { expiresIn: '24h'};
const salt = 10;

exports.user_login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : 'Login failed',
          user: user
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) { res.send(err) }
        const userData = {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        }
        // asycnronous
        jwt.sign(userData, 'test123Token', tokenExpTime, (err, token)=>{
          if(err) {
            res.status(400).json({message: 'error creating auth token'})
          } else {
            res.status(200).json({ token: token })
          }
        })
      })
    })
  (req, res);
}

exports.user_signup = (req, res, next) => {
  const {
    email, password,
  } = req.body;
  // const reqEmail = req.body.email
  // const reqPassword = req.body.password
  console.log(req.body)

  if(email === '' || password === ''){
    return res.status(400).json({message: "Email or password can not be empty."})
  } else{
    User.findOne({email: email})
      .exec()
      .then( user =>{
        if(user){
          console.log('user taken')
          return res.status(400).json({message: "Email already taken"})
        } else{
          bcrypt.hash(password, salt)
            .then( hash =>{
              User.create({
                email,
                password: hash,


              })
                .then( result =>{
                  console.log('creation result======>',result)
                  const userData = {
                    id: result._id,
                    role: result.role,
                  }
                  jwt.sign(userData, 'test123Token', tokenExpTime, (err, token)=>{
                    if(err){ res.status(400).json({message: 'Error createing user'})}
                    res.status(201).json({
                      message: 'User Created',
                      token: token,
                      id:result._id})
                  })
                })
                .catch( error =>{
                  console.log(error)
                  res.status(401).json({message: "Unable to create user"})
                })
            })
            .catch( error =>{
              console.log("error creating hash password")
            })
        }
      })
  }
}

exports.user_changePassword = (req, res, next) =>{
  const reqPassword = req.body.password;
  const newPassword = req.body.newPassword;
  const userId =req.userDecode.id;

  User.findById(userId)
    .exec()
    .then( user =>{
      bcrypt.compare(reqPassword, user.password)
        .then((result) =>{
          if(result){
            bcrypt.hash(newPassword, salt)
              .then( hash =>{
                user.set({password: hash})
                user.save()
                 .then( updatedUser =>{
                   res.status(200).json({message: 'Password updated'})
                 })
              })
              .catch( err =>{
                res.status(401).json({message: 'Password does not match'});
              })
          } else {
            res.status(401).json({message: 'Password does not match'});
          }
        })
        .catch( err =>{
          res.status(401).json({message: 'Password does not match'});
        });
    })
    .catch( err =>{
      res.status(401).json({message: 'User does not exist'});
    });
}

exports.admin_change_user_password = (req,res,next) => {
  const newPassword = req.body.newPassword;
  const uid = req.body.uid;
  console.log(uid)
  User.findById(uid)
    .exec()
    .then(user =>{
      bcrypt.hash(newPassword, salt)
        .then( hash =>{
          user.set({password: hash})
          user.save()
            .then( result => {
              console.log('succeess changing password', result)
              res.status(200).json({message: 'Password Change successful'})
            })
            .catch( err => {
              console.log('Error updating password', err)
              res.status(400).json({message: 'Error updating user\'s password', error: err})
            })
        })
    })
}

exports.validate_token = (req,res,next) =>{
  res.status(200).json({message: 'Token OK'})
}