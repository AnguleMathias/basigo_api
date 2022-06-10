module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Username is required",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: ["^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required",
        },
        notEmpty: false,
        len: {
          args: [6, 1024],
          msg: "Please provide password of at least 6 characters",
        },
      },
    },
    role: {
      type: DataTypes.STRING,
    },
  });

  return Users;
};
