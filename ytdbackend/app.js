require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const ytdl = require("ytdl-core");

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/download/", (req, res) => {
  const url = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: "mp4",
  }).pipe(res);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
