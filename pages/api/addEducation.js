import connectDB from "@/middleware/mongoose";
import Education from "@/models/Education";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const education = await Education.create(req.body);
    res.status(200).json({
      status: "success",
      data: education,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
