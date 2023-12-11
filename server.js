const express = require('express');
const morgan = require('morgan');

const port = 8080;
const app = express();
app.use(morgan('dev'));

// app.use(express.static("public"));  // also works (/ is default path)
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});