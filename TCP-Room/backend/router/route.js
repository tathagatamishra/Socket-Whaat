const express = require("express");
const router = express.Router();

const { createUser, userLogin } = require("../controller/socketCtrl");


router.get("/", (req, res) => {
  let data = "😍";
  return res.send({ data: data });
});


router.post("/signup", createUser);
router.get("/login", userLogin);

module.exports = router;