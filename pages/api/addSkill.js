import connectDB from "@/middleware/mongoose";
import Skill from "@/models/Skills";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const skill = await Skill.create(req.body);
    res.status(200).json({
      status: "success",
      data: skill,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
