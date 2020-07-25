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


app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));


app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    section: function(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
  },
}));
app.set('view engine', 'hbs');


axios.defaults.baseURL = process.env.baseURL || "http://localhost:3000";


require('./routes/apiRoutes')(app);
require('./routes/webRoutes')(app);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false });


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});