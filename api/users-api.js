"use strict";

const express = require("express");
const Users = require("../models/Users");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "civityapp@gmail.com",
    pass: process.env.EMAIL_PWD
  }
});

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const email = req.body.email;
    const userInDb = await Users.find({ email }).exec();
    const user = new Users({
      email: req.body.email,
      type: req.body.isSchool ? "SC" : "UN"
    });
    if (userInDb.length > 0) {
      res.status(400);
      res.send("User in db");
    } else if (!validateEmail(email)) {
      res.status(401);
      res.send("Wrong email");
    } else {
      await user.save();
      const mailOptions = {
        from: "civityapp@gmail.com",
        to: "civityapp@gmail.com",
        subject: "New User ",
        text: "Email: " + email + "\nType: " + (req.body.isSchool ? "SC" : "UN")
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log("User ++");
      res.send("All good");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
