import connectDB from "@/middleware/mongoose";
import About from "@/models/About";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const about = await About.create(req.body);
    res.status(200).json({
      status: "success",
      data: about,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);