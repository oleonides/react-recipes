const express = require("express");

const mongoose = require("mongoose");

const { schema } = require('./schema');

// const bodyParser = require("body-parser");

const cors = require("cors");

require("dotenv").config({ path: ".env" });

//connect to DB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//Initialize application
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(cors("*"));

const PORT = process.env.PORT || 4444;

// Middleware: GraphQL
schema.applyMiddleware({
  app,
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
