const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Candidate = require("./models/candidate");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/candidates", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Datbase Connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.post("/", async (req, res) => {
  await Candidate.deleteMany({});
  let array = req.body.array;
  // console.log(array);
  array.map(async (a) => {
    const candidate = new Candidate({
      name: a["Name of the Candidate"],
      email: a.Email,
      phone: a["Mobile No."],
      experience: a["Work Experience"],
      resume: a["Resume Title"],
      location: a["Current Location"],
      address: a["Postal Address"],
      employer: a["current Employer"],
      designation: a["Current Designation"],
    });
    candidate.save();
  });
});

app.listen(8000, () => {
  console.log("listening on port 8000...");
});
