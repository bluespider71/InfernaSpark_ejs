const User = require("../models/user");
const { validationResult } = require("express-validator/check");
const nodemailer = require('nodemailer');

// GET route for reading data
exports.getFrontPage = async (req, res, next) => {
  try{
    if (!req.session.userId) {
      return res.render("home/index", {
        pageTitle: "SPARK | Home", profile: null
      });
    }

    const user = await User.findById(req.session.userId)
    if(!user) {
      return res.render("home/index", {
        pageTitle: "SPARK | Home", profile: null
      });
    } else {
      return res.render("home/index", {
        pageTitle: "SPARK | Home", profile: user
      });
    }

  } catch(err) {
    return next(err);
  }
};

// GET route for registration
exports.getSignup = (req, res, next) => {
  var message = req.flash("notification");

  return res.render("home/Signup", {
    pageTitle: "SPARK | Signup",
    errMessage: message.length > 0 ? message[0] : null,
    oldInput: {
      email: '',
      username: '',
      password: ''
    },
    errFields: {
      errEmail: '',
      errUsername: '',
      errPassword: '',
      errPasswordConf: ''
    }
  });
};

//POST route for updating data
exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;

  const valError = validationResult(req);
  var errArray = valError.array();

  if (!valError.isEmpty()) {
    let eMsg = '';
    errArray.forEach(i => {
      switch (i.param) {
        case 'email':
          eEmail = i.msg;
          break;
        case 'username':
          eUsername = i.msg;
          break;
        case 'password':
          ePass = i.msg;
          break;
        case 'passwordConf':
          ePassConf = i.msg;
          break;
      }
      eMsg = i.msg ? `${i.msg},${eMsg}` : eMsg;
    })
    // return res.render("register/register",{
    //   pageTitle: "Register",
    //   path: "/register",
    //   oldInput: {
    //     email,
    //     username,
    //     password
    //   },
    //   errFields: {
    //     errEmail: eEmail,
    //     errUsername: eUsername,
    //     errPassword: ePass,
    //     errPasswordConf: ePassConf
    //   }
    // });
    return res.send({
      result: 'error',
      data: eMsg
    });
  }

  if (
    email &&
    username &&
    password &&
    passwordConf
  ) {
    var userData = {
      email: email,
      username: username,
      password: password,
      passwordConf: passwordConf,
      loginAttempts: 1,
      lockUntil: 1,
      userId: 1
    };

    User.create(userData, function (error, user) {
      if (error) {
        return res.send({
          result: 'error',
          data: error
        });
      } else {
        req.session.userId = user._id;
        return res.send({
          result: 'success'
        });
      }
    });
  } else {
    req.flash("notification", "All fields required.");
    return res.send({
      result: 'error',
      data: "All fields required."
    });
  }
};

// GET signin
exports.getSignin = (req, res, next) => {
  let message = req.flash("notification");

  return res.render("home/sign", {
    pageTitle: "Sign",
    errMessage: message.length > 0 ? message[0] : null,
    oldInput: {
      email: ''
    },
    errFields: {
      errEmail: '',
      errPassword: '',
    }
  });
};

// POST signin
exports.postSignin = async (req, res, next) => {
  const email = req.body.email,
    password = req.body.password;

  const valError = validationResult(req);
  var errArray = valError.array();

  if (!valError.isEmpty()) {
    let eMsg = '';
    errArray.forEach(i => {
      switch (i.param) {
        case 'email':
          eEmail = i.msg;
          break;
        case 'password':
          ePass = i.msg;
          break;
      }
      eMsg = i.msg ? `${i.msg},${eMsg}` : eMsg;
    })
    // return res.render("home/sign",{
    //   pageTitle: "Signin",
    //   path: "/signin",
    //   oldInput: {
    //     email
    //   },
    //   errFields: {
    //     errEmail: eEmail,
    //     errPassword: ePass,
    //   },
    //   errMessage: null
    // });
    return res.send({
      result: 'error',
      data: eMsg
    });
  }

  User.authenticate(email, password, function (
    error,
    user
  ) {
    console.log('authenticate', error, user);
    if (!user) {
      // var err = new Error("Wrong email or password.");
      // err.status = 401;
      return res.send({
        result: 'error',
        data: 'Wrong email or password'
      });
    } else {
      req.session.userId = user._id;
      return res.send({
        result: 'success'
      });
    }
  });
};

// GET for signout
exports.getSignout = (req, res, next) => {
  // delete session object
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    } else {
      return res.redirect("/");
    }
  });
};

// POST forgot
exports.postForgot = async (req, res, next) => {
  const email = req.body.email;
  const newpassword = 'spark2022_';
  /* check if email is in the database */
  const user = await User.findOne({ email: email});
  if (!user) return res.send({result: 'error', error: 'email not found'});
  console.log('user.findOne', user)

  user.password = newpassword;
  try {
    const result = await user.save();
    console.log('user.save', result)
  } catch(err) {
    return res.send({result: 'error', error: err});
  }

  /* reset the password */
  /* get the new password to user */
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
           user: 'seitosolano1982@gmail.com',
           pass: 'qthwowvahodcuxlo'             // google smtp, should 2 ways authenticaton, and app password 
       }
   });
  const mailOptions = {
    from: 'seitosolano1982@gmail.com',          // sender address
    to: email,                                  // list of receivers
    subject: 'Reset the password',              // subject line
    html: `<p>Your new password is ${newpassword} here</p>`    // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      return res.send({result: 'error', error: err});
    else
      return res.send({result: 'success'});
  });
};
