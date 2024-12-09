const express = require("express");
const router = express.Router();

const { sendMessage } = require("../controller/socketCtrl");


router.get("/", (req, res) => {
  let data = "😍";
  return res.send({ data: data });
});


router.post("/send", sendMessage);

module.exports = router;