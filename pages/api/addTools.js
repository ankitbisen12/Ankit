import connectDB from "@/middleware/mongoose";
import Tool from "@/models/Tool";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const tool = await Tool.create(req.body);
    res.status(200).json({
      status: "success",
      data: tool,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
