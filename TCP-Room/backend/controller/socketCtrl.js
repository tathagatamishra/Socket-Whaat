const socketModal = require("../model/socketModal");

exports.createUser = async (req, res) => {
  try {
    let data = req.body;

    if (!data.username || !data.password) {
      return res.status(400).send({
        status: false,
        message: "Please provide username and password",
      });
    }

    let userData = await socketModal.create(data);
    
    return res
      .status(201)
      .send({ status: true, message: "User created", userData: userData });
  } catch (error) {
    console.log(error);
  }
};

exports.userLogin = async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({
        status: false,
        message: "Please provide username and password",
      });
    }

    let userData = await socketModal.findOne({ username, password });

    if (!userData) {
      return res.status(401).send({ status: false, message: "User not found" });
    }

    return res
      .status(200)
      .send({ status: true, message: "User logged in", userData: userData });
  } catch (error) {
    console.log(error);
  }
};
