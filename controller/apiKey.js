const { validationResult } = require("express-validator/check");

// GET route for reading data
exports.getApiKey = (req, res, next) => {
  return res.render("dashboard/api_key/edit_key", {
    pageTitle: "SPARK | Dashboard - API Key"
  });
};