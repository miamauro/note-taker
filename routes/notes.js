const notes = require("express").Router();
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");
//Use the Universally Unique Identifier npm package to give each note a unique ID
const { v4: uuidv4 } = require("uuid");

//GET route for retrieving all notes
notes.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//POST route for posting a note
notes.post("/", (req, res) => {
  //Destructure req.body
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    //The first argument is the content to append
    //The second argument is where the content will append
    readAndAppend(newNote, "./db/db.json");
    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error: could not post new note.");
  }
});

//DELETE route to delete note
// notes.delete("/:id", (req, res) => {

// });

module.exports = notes;
