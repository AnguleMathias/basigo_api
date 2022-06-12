module.exports = (sequelize, DataTypes) => {
  const Leads = sequelize.define(
    "leads",
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
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "leads",
      freezeTableName: true,
      classMethods: {
        associate: (models) => {
          models.sites.hasMany(models.customers, {
            foreignKey: "customerId",
            through: "lead",
            onDelete: "CASCADE",
          });
        },
      },
    }
  );

  return Leads;
};
