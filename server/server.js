const path = require("path");
const express = require("express");
const routes = require("./routes/router");
const authRoutes = require('./routes/auth')

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use("/api/v1/cocktail", routes);
server.use('/api/v1', authRoutes)

server.use(express.urlencoded({ extended: false }));
module.exports = server;
