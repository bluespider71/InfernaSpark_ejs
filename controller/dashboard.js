const { validationResult } = require("express-validator/check");
const User = require("../models/user");
const { result } = require("lodash");
const ejs = require('ejs'),
      fs = require('fs');
const { USER_AGENT } = require("stripe");

// GET route for fetching the main page
exports.getDashboard = async(req, res, next) => {
  // get the user info by session's user_id //
  try{
    const user = await User.findById(req.session.userId)
    if(!user) return;
    return res.render("dashboard/index", {
      pageTitle: "SPARK | Dashboard", profile: user
    });
  } catch(err) {
    return next(err);
  }
  
};

// Get route for fetching the account_security subpage //
exports.getAccountSecurity = (req, res, next) => {
  file = fs.readFileSync('./views/dashboard/account_security/edit_account.ejs', 'utf8'),
  // rendered = ejs.render(file, { locals: { items:[1,2,3] } });
  rendered = ejs.render(file);
  res.send(rendered);

};

// Get route for fetching the api_key subpage //
exports.getApiKey = (req, res, next) => {
  file = fs.readFileSync('./views/dashboard/api_key/edit_key.ejs', 'utf8'),
  rendered = ejs.render(file);
  res.send(rendered);
};  

// Get route for fetching the billing subpage //
exports.getBilling = (req, res, next) => {
  file = fs.readFileSync('./views/dashboard/billing/edit_billing.ejs', 'utf8'),
  rendered = ejs.render(file);
  res.send(rendered);
};

// Get route for fetching the logs subpage //
exports.getLogs = (req, res, next) => {
  file = fs.readFileSync('./views/dashboard/logs/get_logs.ejs', 'utf8'),
  rendered = ejs.render(file);
  res.send(rendered);
};

// Get route for fetching the overview subpage //
exports.getOverview = (req, res, next) => {
  file = fs.readFileSync('./views/dashboard/overview/edit_overview.ejs', 'utf8'),
  rendered = ejs.render(file);
  res.send(rendered);
};
