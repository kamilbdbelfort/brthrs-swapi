// index.js

const express = require("express");
const app = express();

// Middlewares

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

// Routes

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
