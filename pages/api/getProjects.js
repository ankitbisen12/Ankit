import connectDB from "@/middleware/mongoose";
import Project from "@/models/Project";

const handler = async (req,res)=>{
    const projects = await Project.find({});
    res.status(200).json(projects);
}

export default connectDB(handler);