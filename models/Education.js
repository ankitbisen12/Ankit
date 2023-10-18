const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    course: { type: String, required: true },
    startedAt: { type: Number, required: true },
    completedAt: { type: Number, required: true },
    institute: { type: String, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};

const Education = mongoose.model("Education", EducationSchema);

export default Education;
