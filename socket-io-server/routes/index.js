const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  res.sendFile()
});

module.exports = router;