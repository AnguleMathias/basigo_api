const express = require("express");
const router = express.Router();

const verifyJWT = require("../utils/verifyJWT");

const customerController = require("../controllers/customers.controller");
const leadsController = require("../controllers/leads.controller");
const usersController = require("../controllers/users.controller");

// auth routes
router.post("/signup", usersController.createUser);

router.post("/login", usersController.loginUser);

// leads route
router.post("/leads", verifyJWT, leadsController.createLead);

router.get("/leads", verifyJWT, leadsController.getAllLeads);

router.get("/leads/:id", verifyJWT, leadsController.getLeadById);

router.put("/leads/:id", verifyJWT, leadsController.updateLead);

router.delete("/leads/:id", verifyJWT, leadsController.deleteLead);

// customer route
router.post("/customer", verifyJWT, customerController.createCustomer);

router.get("/customer", verifyJWT, customerController.getAllLeadCustomers);

router.get("/customer/:id", verifyJWT, customerController.getCustomerById);

router.put("/customer/:id", verifyJWT, customerController.updateCustomer);

router.delete("/customer/:id", verifyJWT, customerController.deleteCustomer);

module.exports = router;
