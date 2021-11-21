// index.js

const express = require("express");
const app = express();

// Middlewares

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

// Define routers
const FilmsRouter = require("./routers/filmRouter");
const PeopleRouter = require("./routers/personRouter");
const PlanetsRouter = require("./routers/planetRouter");

// Use routers
app.use("/", FilmsRouter);
app.use("/people", PeopleRouter);
app.use("/planets", PlanetsRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
