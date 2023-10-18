const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    avatar: { type: String, required: true },
    info: { type: String, required: true },
    githubLink: { type: String, required: true },
    preview: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
const Project = mongoose.model("Project", ProjectSchema);
export default Project;