import connectDB from '@/middleware/mongoose';
import Tool from '@/models/Tool';

const handler = async (req,res)=> {
    let tools = await Tool.find({});
    res.status(200).json(tools);
}

export default connectDB(handler);