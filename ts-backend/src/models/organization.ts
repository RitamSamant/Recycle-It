import mongoose from "mongoose";

const organizatonData = new mongoose.Schema({
    name: { type: String },
    buisnessEmail: { type: String },
    password: { type: String },
    address: { type: String },
    buisnessBankAccount: { type: Number },
    orderforOrg: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plasticProducts",
      },
    ],
    wishlistforOrg: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plasticProducts",
      },
    ],
  });
  const Organization = mongoose.model("Organization", organizatonData);
  export default Organization
  