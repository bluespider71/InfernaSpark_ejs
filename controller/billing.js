const { validationResult } = require("express-validator/check");

// GET route for reading data
exports.getBilling = (req, res, next) => {
  return res.render("dashboard/billing/edit_billing", {
    pageTitle: "SPARK | Dashboard - Billing"
  });
};