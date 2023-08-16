const mongoose = require("mongoose");

const plasticSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("plasticProducts", plasticSchema);
