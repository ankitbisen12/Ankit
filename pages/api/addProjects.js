import connectDB from "@/middleware/mongoose";
import Project from "@/models/Project";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const project = await Project.create(req.body);
    res.status(200).json({
      status: "success",
      data: project,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
