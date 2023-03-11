const notes = require("express").Router();

notes.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data = res.json(JSON.parse(data))))
);

notes.post("/", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      //noteId
    };

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

module.exports = notes;