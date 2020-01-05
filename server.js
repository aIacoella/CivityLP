require("dotenv").config();

const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL || "mongodb://localhost:27017/civitylp";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", require("./api/users-api"));

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    mongoose.connection.on("error", err => console.warn(err));

    mongoose.connect(
      db_url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      res => {
        console.log("Connected to db");
        if (!res) {
          app.listen(port, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:" + port);
          });
        }
      }
    );
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
