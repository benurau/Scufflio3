const express = require("express");
const router = express.Router();
const front = require("../scufflio/public/index")



router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;