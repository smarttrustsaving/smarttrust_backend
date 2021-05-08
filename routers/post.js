const router = require("express").Router();
const { savings, periodics, loans } = require("../controllers/post");

router.post("/savings", savings);
router.post("/periodics", periodics);
router.post("/loans", loans);

module.exports = router;
