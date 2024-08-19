// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const greetingController = require("../controllers/greeting.controller");

// Definir la ruta
router.get("/", greetingController.getGreeting);

module.exports = router;
