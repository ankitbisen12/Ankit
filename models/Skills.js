const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    active: { type: Boolean, required: true },
  },{ timestamps: true }
);

mongoose.models = {};
const Skill = mongoose.model("Skill", SkillSchema);

export default Skill;
