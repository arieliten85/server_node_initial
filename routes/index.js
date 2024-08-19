// routes/index.js
const express = require("express");
const router = express.Router();

// Importar rutas individuales
const grettingRoutes = require("./gretting.routes");

// Usar las rutas
router.use("/gretting", grettingRoutes);

module.exports = router;
