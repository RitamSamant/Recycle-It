import mongoose from "mongoose";

const clientData = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    address: { type: String },
    bankAccount: { type: Number },
    orderforclient: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plasticProducts",
      },
    ],
    wishlistforClient: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plasticProducts",
      },
    ],
  });
  const Client = mongoose.model("Client", clientData);
  export default  Client
  