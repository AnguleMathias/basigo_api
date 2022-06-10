const db = require("../models");

// create Main model
const User = db.users;

// create user
const createUser = async (req, res) => {
  let userInfo = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };

  try {
    const user = await User.create(userInfo);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
