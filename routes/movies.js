const { Router } = require("express");
const router = Router();
const movieController = require("../controllers/movieController");

// Index Route
router.get("/", movieController.index);

// Show Route
router.get("/:id", movieController.show);

module.exports = router;
