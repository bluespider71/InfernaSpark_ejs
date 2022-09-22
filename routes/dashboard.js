const express = require("express");
const router = express.Router();
const dashboardCtrl = require("../controller/dashboard");
const isAuth = require("../middleware/isAuth");
const { body } = require("express-validator/check");
const User = require("../models/user");

// GET route for fetching main page //
router.get("/dashboard", isAuth, dashboardCtrl.getDashboard);

// GET route for fetching account_security sub page //
router.get("/dashboard/account_security", dashboardCtrl.getAccountSecurity);

// GET route for fetching api_key sub page //
router.get("/dashboard/api_key", dashboardCtrl.getApiKey);

// GET route for fetching billing sub page //
router.get("/dashboard/billing", dashboardCtrl.getBilling);

// GET route for fetching logs sub page //
router.get("/dashboard/logs", dashboardCtrl.getLogs);

// GET route for fetching overview sub page //
router.get("/dashboard/overview", dashboardCtrl.getOverview);

//POST route for account
// router.post(
//     "/signup",
//     [
//       body("email", "Invalid Email")
//         .isEmail()
//         .not().isEmpty().withMessage("Required")
//         .custom((value, { req }) => {
//           return User.findOne({ email: value }).then(user => {
//             if (user) {
//               return Promise.reject("Email exists already. Pick another one");
//             }
//           });
//         }),
//       body("username")
//         .not().isEmpty().withMessage("Required")
//         .custom((value, { req }) => {
//           return User.findOne({ username: value }).then(user => {
//             if (user) {
//               return Promise.reject("Username exists already. Pick another one");
//             }
//           });
//         }),
//       body("password","Password should contain more than 8 characters")
//         .trim()
//         .isLength({ min: 8 })
//         .not().isEmpty().withMessage("Required")
//         .escape(),
//       body("passwordConf", "Password confirmation does not match with the password")
//         .trim()
//         .not().isEmpty().withMessage("Required")
//         .custom((value, { req }) => {
//           if (value !== req.body.password) {
//             return false;
//           }
//           return true;
//         })
//         .escape()
//     ],
//     homeCtrl.postSignup
//   );

module.exports = router;
