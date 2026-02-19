const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboardController");

module.exports = (io) => {
  router.get("/dashboard", controller.getDashboard);
  return router;
};
