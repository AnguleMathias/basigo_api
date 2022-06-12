module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define("customers", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    annualEarning: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productsOfInterest: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("productsOfInterest").split(";");
      },
      set(val) {
        this.setDataValue("productsOfInterest", val.join(","));
      },
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
      type: DataTypes.STRING,
    },
  });

  return Customers;
};
