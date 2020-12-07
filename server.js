const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./router");
const User = require("./models/UserModel");

mongoose.connect("mongodb://localhost/users_db");

routes(app);
app.listen(port);