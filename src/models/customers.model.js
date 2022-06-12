module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "customers",
    {
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
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.STRING,
      },
      updatedBy: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "customers",
      freezeTableName: true,
      classMethods: {
        associate: (models) => {
          models.sites.belongsTo(models.leads, {
            foreignKey: "leadId",
            through: "customers",
          });
        },
      },
    }
  );

  return Customers;
};
