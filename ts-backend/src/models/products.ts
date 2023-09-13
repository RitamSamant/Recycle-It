import mongoose from "mongoose";

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
  
const Products = mongoose.model("plasticProducts", plasticSchema)
export default Products
  