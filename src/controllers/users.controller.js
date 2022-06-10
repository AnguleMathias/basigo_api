const bcrypt = require("bcryptjs");
const db = require("../models");

// create Main model
const User = db.users;

// create user
const createUser = async (req, res) => {
  //encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  let userInfo = {
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  };

  try {
    const user = await User.create(userInfo);
    res.status(200).send({
      message: "User created successfully",
      user: {
        userName: user.userName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (res.status(400)) {
      res
        .status(400)
        .send({ status: "Failed", message: error.errors[0].message });
    } else {
      res.status(500).send({
        message: "Error while creating user",
      });
    }
  }
};

// login user
const loginUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    res.status(400).send({
      message: "User does not exist",
    });
  } else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).send({
        message: "Invalid password",
      });
    } else {
      res.status(200).send({
        message: "User logged in successfully",
        user: {
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      });
    }
  }
};

module.exports = {
  createUser,
  loginUser,
};
