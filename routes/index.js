//Import Express module
const express = require("express");

//Import modular router for /notes
const notesRouter = require("./notes");

const app = express();

//Middleware
app.use("/notes", notesRouter);

module.exports = app;
