const { validationResult } = require("express-validator/check");

// GET route for reading data
exports.getAccountSecurity = (req, res, next) => {
  return res.render("dashboard/account_security/edit_account", {
    pageTitle: "SPARK | Dashboard - AccountSecurity"
  });
};

