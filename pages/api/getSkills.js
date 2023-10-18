import connectDB from '@/middleware/mongoose';
import Skill from '@/models/Skills';

const handler = async (req,res)=> {
    let skills = await Skill.find({});
    res.status(200).json(skills);
}

export default connectDB(handler);
