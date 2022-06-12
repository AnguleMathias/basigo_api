const db = require("../models");

// create Main model
const Products = db.products;

// create a product
const createProduct = async (req, res) => {
  const productInfo = {
    title: req.body.title,
    description: req.body.description,
    shortDescription: req.body.shortDescription,
  };

  try {
    const product = await Products.create(productInfo);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get a lead by id
const getProductById = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
