const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    avatar: { type: String, required: true },
    border:{type:String,required:true}
  },{ timestamps: true }
);

mongoose.models = {};
const Tool = mongoose.model("Tool", ToolSchema);

export default Tool;   
