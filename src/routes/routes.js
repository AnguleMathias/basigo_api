const express = require("express");
const router = express.Router();

const leadsController = require("../controllers/leads.controller");
const usersController = require("../controllers/users.controller");

// auth routes
router.post("/signup", usersController.createUser);

router.post("/login", usersController.loginUser);

// leads route
router.post("/leads", leadsController.createLead);

router.get("/leads", leadsController.getAllLeads);

router.get("/leads/:id", leadsController.getLeadById);

router.put("/leads/:id", leadsController.updateLead);

router.delete("/leads/:id", leadsController.deleteLead);

module.exports = router;
