const express = require("express");
const exphbs = require('express-handlebars');
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});