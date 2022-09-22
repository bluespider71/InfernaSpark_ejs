const express = require("express");
const router = express.Router();
const homeCtrl = require("../controller/home");
const isAuth = require("../middleware/isAuth");
const { body } = require("express-validator/check");
const User = require("../models/user");

// GET for front page
router.get("/", homeCtrl.getFrontPage);

// GET for signin
router.get("/sign", homeCtrl.getSignin);

// POST for signin
router.post(
  "/signin",
  [
    body("email", "Invalid Email")
      .isEmail()
      .custom((value, {req}) => {
        return User.findOne({email: value}).then(user => {
          if(!user) return false;
          return true;
        })
      }).withMessage("Email does not exist")
      .not().isEmpty().withMessage("Required"),
    body("password")
      .not().isEmpty().withMessage("Required")
  ],
  homeCtrl.postSignin
);

// POST route for signup/registration
router.post(
  "/signup",
  [
    body("email", "Invalid Email")
      .isEmail()
      .not().isEmpty().withMessage("Required")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(user => {
          if (user) {
            return Promise.reject("Email exists already. Pick another one");
          }
        });
      }),
    body("username")
      .not().isEmpty().withMessage("Required")
      .custom((value, { req }) => {
        return User.findOne({ username: value }).then(user => {
          if (user) {
            return Promise.reject("Username exists already. Pick another one");
          }
        });
      }),
    body("password","Password should contain more than 8 characters")
      .trim()
      .isLength({ min: 8 })
      .not().isEmpty().withMessage("Required")
      .escape(),
    body("passwordConf", "Password confirmation does not match with the password")
      .trim()
      .not().isEmpty().withMessage("Required")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          return false;
        }
        return true;
      })
      .escape()
  ],
  homeCtrl.postSignup
);

// GET for logout
router.get("/signout", isAuth, homeCtrl.getSignout);

// POST route for forgot the password //
router.post("/forgot", homeCtrl.postForgot);

module.exports = router;
