const { validationResult } = require("express-validator/check");

// GET route for reading data
exports.getOverview = (req, res, next) => {
  return res.render("dashboard/overview/edit_overview", {
    pageTitle: "SPARK | Dashboard - Overview"
  });
};