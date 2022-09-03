const mongoose = require("mongoose");
const Candidate = require("./models/candidate");

mongoose.connect("mongodb://localhost:27017/candidates", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Datbase Connected");
});

const seedDB = async () => {
  await Candidate.deleteMany({});
  const c = new Candidate({ name: "bruh", email: "bruh@gmail.com" });
  await c.save();
};

seedDB();
