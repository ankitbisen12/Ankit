import connectDB from "@/middleware/mongoose";
import Skill from "@/models/Skills";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const id = req.body._id;
    console.log(id);
    const skill = await Skill.findByIdAndUpdate(id,req.body,{
        new:true
    });
    res.status(200).json({
      status: "success",
      upadatedSkill: skill,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);