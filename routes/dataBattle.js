const express = require("express");
const router = express.Router();

const {test, list, count,search, location } = require("../controllers/dataBattle");

router.get("/location", location)
router.get("/search", search)
router.get("/count", count)
router.get("/list", list);
router.get("/test", test)

module.exports = router;