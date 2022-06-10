const express = require("express");
const router = express.Router();

const leadsController = require("../controllers/leads.controller");
const usersController = require("../controllers/users.controller");

// users route
router.post("/users", usersController.createUser);

// leads route
router.post("/leads", leadsController.createLead);

router.get("/leads", leadsController.getAllLeads);

router.get("/leads/:id", leadsController.getLeadById);

router.put("/leads/:id", leadsController.updateLead);

router.delete("/leads/:id", leadsController.deleteLead);

module.exports = router;
