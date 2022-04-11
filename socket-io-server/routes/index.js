const express = require("express");
const router = express.Router();
const front = require("../scufflio/public/index")



router.get("/", (req, res) => {
  res.render(front)
});

module.exports = router;