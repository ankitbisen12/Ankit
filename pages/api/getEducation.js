import connectDB from "@/middleware/mongoose";
import Education from "@/models/Education";

const handler = async (req, res) => {
  let education = await Education.find({});
  res.status(200).json(education);
};

export default connectDB(handler);
