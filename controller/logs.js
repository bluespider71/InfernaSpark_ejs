const { validationResult } = require("express-validator/check");

// GET route for reading data
exports.getLogs = (req, res, next) => {
  return res.render("dashboard/logs/get_logs", {
    pageTitle: "SPARK | Dashboard - Logs"
  });
};