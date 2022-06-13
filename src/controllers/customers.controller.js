const db = require("../models");

// create Main model
const Customers = db.customers;
const Users = db.users;

// create a customer
const createCustomer = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.user.id,
    },
  });

  const customerInfo = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    location: req.body.location,
    phone: req.body.phone,
    photo: req.body.photo,
    annualEarning: req.body.annualEarning,
    productsOfInterest: req.body.productsOfInterest,
    createdBy: user.dataValues.email,
    leadId: req.body.leadId,
  };

  try {
    const customer = await Customers.create(customerInfo);
    res.status(200).send(customer);
  } catch (error) {
    if (res.status(400)) {
      res.status(400).send({
        status: "Failed",
        message: "Error while creating a customer. Try again",
      });
    } else {
      res.status(500).send({
        message: "Error while creating a customer",
      });
    }
  }
};

// get all customer's customers
const getAllLeadCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll({
      where: {
        leadId: req.params.id,
      },
    });

    res.status(200).send(customers);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get a customer by id
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customers.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!customer) {
      res.status(400).send({
        message: `Customer with id ${req.params.id} does not exist`,
      });
    } else {
      res.status(200).send(customer);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// update a customer
const updateCustomer = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.user.id,
    },
  });
  const customerInfo = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    location: req.body.location,
    phone: req.body.phone,
    photo: req.body.photo,
    annualEarning: req.body.annualEarning,
    productsOfInterest: req.body.productsOfInterest,
    updatedBy: user.dataValues.email,
    leadId: req.body.leadId,
  };

  try {
    const customer = await Customers.update(customerInfo, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};

// delete a customer
const deleteCustomer = async (req, res) => {
  try {
    await Customers.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .send(`Customer with id ${req.params.id} deleted successfully`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createCustomer,
  getAllLeadCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
