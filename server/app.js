const dotenv = require("dotenv");

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

app.use(cookieParser());

// linking router file
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
