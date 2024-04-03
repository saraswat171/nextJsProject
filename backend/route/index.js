const express = require('express');
const router = express.Router();
router.use("/", require("./listRoute"))
module.exports = router;