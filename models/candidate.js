const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  experience: {
    type: String,
  },
  resume: {
    type: String,
  },
  location: {
    type: String,
  },
  address: {
    type: String,
  },
  employer: {
    type: String,
  },
  designation: {
    type: String,
  },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
