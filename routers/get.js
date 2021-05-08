const router = require("express").Router();
const { all, savings, periodics, loans } = require("../controllers/get");

router.get("/all", all);
router.get("/savings", savings);
router.get("/periodics", periodics);
router.get("/loans", loans);

module.exports = router;
