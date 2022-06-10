const express = require("express");
const router = express.Router();

const verifyJWT = require("../utils/verifyJWT");

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

module.exports = router;
