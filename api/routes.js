const express = require("express");
const app = express();

const temperatureController = require("./controller/temperatureController.js")
const accountController = require("./controller/accountController.js")

app.get("/",temperatureController.getData);
app.get("/accounts",accountController.getData);
app.patch("/account/:id",accountController.update);
app.post("/account",accountController.save);
app.post("/login",accountController.login);

module.exports = app
