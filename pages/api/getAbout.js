import connectDB from "@/middleware/mongoose";
import About from "@/models/About"

const handler = async(req,res)=>{
    let about = await About.find({});
    res.status(200).json(about);
}

export default connectDB(handler);