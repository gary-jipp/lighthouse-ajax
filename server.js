const express = require('express');
const morgan = require('morgan');

const port = 8080;
const app = express();
app.use(morgan('dev'));

const dogs = [
  {name: "Fly", breed: "Border Collie"},
  {name: "Benji", breed: "Golden Mix"},
  {name: "Lassie", breed: "German Shepard"}
];

// app.use(express.static("public"));  // also works (/ is default path)
app.use(express.static("public"));

app.get("/api/dogs/", (req, res) => {
  res.json(dogs);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});