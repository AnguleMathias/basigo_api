const express = require("express");
const leadsController = require("../controllers/leadsController");
const usersController = require("../controllers/usersController");

const router = express.Router();

// users route
router.post("/users", usersController.createUser);

// leads route
router.post("/leads", leadsController.createLead);

router.get("/leads", leadsController.getAllLeads);

router.get("/leads/:id", leadsController.getLeadById);

router.put("/leads/:id", leadsController.updateLead);

router.delete("/leads/:id", leadsController.deleteLead);
