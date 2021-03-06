const db = require("../models");

// create Main model
const Leads = db.leads;
const Users = db.users;

// create a lead
const createLead = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.user.id,
    },
  });

  const leadInfo = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    location: req.body.location,
    phone: req.body.phone,
    createdBy: user.dataValues.email,
  };

  try {
    const lead = await Leads.create(leadInfo);
    res.status(200).send(lead);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get all leads
const getAllLeads = async (req, res) => {
  try {
    const leads = await Leads.findAll();
    res.status(200).send(leads);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get a lead by id
const getLeadById = async (req, res) => {
  try {
    const lead = await Leads.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!lead) {
      res.status(400).send({
        message: `Lead with id${req.params.id} does not exist`,
      });
    } else {
      res.status(200).send(lead);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// update a lead
const updateLead = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.user.id,
    },
  });

  const leadInfo = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    location: req.body.location,
    phone: req.body.phone,
    updatedBy: user.dataValues.email,
  };

  try {
    const lead = await Leads.update(leadInfo, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(lead);
  } catch (error) {
    res.status(400).send(error);
  }
};

// delete a lead
const deleteLead = async (req, res) => {
  try {
    await Leads.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(`Lead with id ${req.params.id} deleted successfully`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
};
