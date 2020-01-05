"use strict";

const express = require("express");
const User = require("../models/Users");

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    res.json(req.body);

    const user = new User({
      email: req.body.email,
      type: req.body.isSchool ? "SC" : "UN"
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
