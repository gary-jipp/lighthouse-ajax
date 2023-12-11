const express = require('express');
const morgan = require('morgan');

const port = 8080;
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

const dogs = [
  {id: "aa1", name: "Fly", breed: "Border Collie"},
  {id: "aa2", name: "Benji", breed: "Golden Mix"},
  {id: "aa3", name: "Lassie", breed: "German Shepherd"}
];

// app.use(express.static("public"));  // also works (/ is default path)
app.use(express.static("public"));

app.get("/api/dogs/", (req, res) => {
  res.json(dogs);
});

app.post("/api/dogs/", (req, res) => {
  const name = req.body.name;
  const breed = req.body.breed;

  const id = Math.random().toString(36).substring(2, 6);
  const dog = {id, name, breed};
  dogs.push(dog);
  res.status(201).send(""); // Created
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});