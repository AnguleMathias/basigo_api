module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    shortDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Products;
};
