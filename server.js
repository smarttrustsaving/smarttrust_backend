require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routers/auth");
const getRouter = require("./routers/get");
const postRouter = require("./routers/post");
const forexRouter = require("./routers/forex");

const authenticated = require("./middlewares/authenticated");

const port = parseInt(process.env.PORT, 10) || 4000;

const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/all", getRouter);
app.use("/forex", forexRouter);

app.use(authenticated);

app.use("/update", postRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
